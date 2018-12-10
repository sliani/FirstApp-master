function loadUrl(url) {
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
        };
    });
}
function loadUrlInId(url, id) {
    var element = document.getElementById(id);
    return loadUrlInElement(url, element);
}
function loadUrlInElement(url, element) {
    return loadUrl(url)
        .then((html) => {
        element.innerHTML = html;
        return html;
    }).then((html) => {
        var scripts = element.querySelectorAll("script");
        scripts.forEach((script) => {
            var src = script.getAttribute("src");
            SystemJS.import(src);
        });
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
        .catch(() => { alert("Erreur de chargement"); });
}
window.addEventListener("DOMContentLoaded", function () {
    loadUrlInId("accueil.html", "main");
    var tableauDeLiens = document.querySelectorAll("#menu a");
    tableauDeLiens.forEach((lien) => {
        lien.addEventListener("click", (e) => {
            var href = lien.getAttribute("href");
            loadUrlInId(href, "main").then(() => {
                tableauDeLiens.forEach((l) => {
                    l.removeAttribute("data-active");
                });
                lien.setAttribute("data-active", "true");
            });
            e.stopPropagation();
            e.preventDefault();
        });
    });
    let status = document.querySelector("#status");
    let timeout;
    var oldAlert = alert;
    window.alert = function (s) {
        if (!status) {
            oldAlert(s);
        }
        else {
            status.innerHTML = s;
            if (timeout)
                clearTimeout(timeout);
            timeout = setTimeout(function () {
                status.innerHTML = "";
            }, 4000);
        }
    };
    status.addEventListener("click", function () {
        status.innerHTML = "";
        if (timeout)
            clearTimeout(timeout);
    });
});
//# sourceMappingURL=index.js.map