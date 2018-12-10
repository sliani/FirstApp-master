
declare var SystemJS : any;


function loadUrl(url:string) {
    return new Promise(function (success, error) {
        var clientHttp = new XMLHttpRequest();
        clientHttp.open("GET", url, true);
        clientHttp.send(null);
        clientHttp.onreadystatechange = function () {
            if (clientHttp.readyState == 4) {
                if (clientHttp.status == 200) {
                    success(clientHttp.responseText);
                }
                else {
                    error(clientHttp.responseText);
                }
            }
        }
    });
}
function loadUrlInId(url:string, id:string) {
    var element = document.getElementById(id);
    return loadUrlInElement(url, element);
}
function loadUrlInElement(url:string, element:HTMLElement) {
    return loadUrl(url)
        .then((html:string) => {
            element.innerHTML = html;
            return html;
        }).then((html)=>{
            var scripts=element.querySelectorAll("script");
            scripts.forEach((script)=>{
                var src=script.getAttribute("src");
                SystemJS.import(src);
            })
            return html;
        })

        .then((html) => {
            var h2 = element.querySelector("h2");
            if (h2)
                document.title = "Mon jeu - " + h2.innerHTML;
            return html.length;
        })
        .then((n) => {
            alert(n + " caractères reçus");
        })
        .catch(() => { alert("Erreur de chargement") });
}






// On associe une fonction à l'évènement DOMContentLoaded
window.addEventListener("DOMContentLoaded",
    function () {
        loadUrlInId("accueil.html", "main");
        // gestion des liens
        var tableauDeLiens = document.querySelectorAll("#menu a");

        tableauDeLiens.forEach((lien:HTMLElement) => {
            lien.addEventListener("click", (e) => {

                var href = lien.getAttribute("href");

                loadUrlInId(href, "main").then(() => {
                    // Retrait de l'attribut data-active sur tous les liens
                    tableauDeLiens.forEach((l) => {
                        l.removeAttribute("data-active");
                    });
                    // Mise en place de l'attribut sur le lien clické
                    lien.setAttribute("data-active", "true");
                });
                e.stopPropagation();
                e.preventDefault();
            })
        })


        // Recherche de la référence vers #btn_disquelquechose
        let status = document.querySelector("#status");
        let timeout: any;



        // Je stocke la référence de alert (celle du system) dans oldAlert;
        var oldAlert = alert;
        // détournement / redéfinission de la fonction alert normale
        window.alert = function (s) {
            // Recherche du status dans le DOM
            if (!status) {
                oldAlert(s);
            }
            else {
                status.innerHTML = s;
                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(function () {
                    status.innerHTML = "";
                }, 4000);
            }

        }

        // Fonction exécutée après l'analyse du HTML de la page
        // Le DOM est complet



        status.addEventListener("click", function () {
            status.innerHTML = "";
            if (timeout) clearTimeout(timeout);
        })
    });



