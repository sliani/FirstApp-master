System.register(["./app.js"], function (exports_1, context_1) {
    "use strict";
    var app_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (app_js_1_1) {
                app_js_1 = app_js_1_1;
            }
        ],
        execute: function () {
            debugger;
            document.getElementById("login").value = app_js_1.App.instance.utilisateur.login;
            document.getElementById("nombreEssaisMax").value = app_js_1.App.instance.partieAffichee.nombreTentativesMax.toString();
            document.getElementById("nombreMax").value = app_js_1.App.instance.partieAffichee.nombreMax.toString();
        }
    };
});
//# sourceMappingURL=jeu.js.map