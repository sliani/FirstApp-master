function loadUrl(url){
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
            }   }   }
}); }
function loadUrlInId(url,id){
    var element=document.getElementById(id);
    return loadUrlInElement(url,element);
}
function loadUrlInElement(url,element){
 return loadUrl(url)
 .then((html)=>{
     element.innerHTML = html;
     return html.length;
         })
 .then((n)=>{
     alert(n+" caractères reçus")
 })
 .catch(()=>{alert("Erreur de chargement")});
}



// loadUrlInElementId=function(url,id)
// {
//     return loadUrl(url).catch(()=>{alert("Pas glop");})
//     .then(function (html) {   document.getElementById(id).innerHTML = html;
//             return "Chargement de " + url+ "ok"})
// }

// loadUrlInElementId("accueil.html","main")
//     .catch(()=>{alert("Le "+ id +" n'a pas été trouvé")})
//     .then((message)=>{alert(message)})



// On associe une fonction à l'évènement DOMContentLoaded
window.addEventListener("DOMContentLoaded",
    function () {
        loadUrlInId("home.html","main");
        // gestion des liens
        var tableauDeLiens=document.querySelectorAll("#menu a");

        tableauDeLiens.forEach((lien,i)=>{
            lien.addEventListener("click",(e)=>{
                var href=lien.getAttribute("href");
                loadUrlInId(href,"main");
                e.stopPropagation();
                e.preventDefault();
            })
        })


        // Recherche de la référence vers #btn_disquelquechose
        let status = document.querySelector("#status");
        let timeout;



        // Je stocke la référence de alert (celle du system) dans oldAlert;
        window.oldAlert = alert;
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
