System.register(["./app.js"], function (exports_1, context_1) {
    "use strict";
    var app_js_1;
    var __moduleName = context_1 && context_1.id;
    function bind(id, getter, setter) {
        var input = document.getElementById(id);
        input.value = getter().toString();
        input.addEventListener("change", (e) => {
            try {
                setter(input.value);
            }
            catch (ex) {
                alert(ex);
            }
        });
    }
    return {
        setters: [
            function (app_js_1_1) {
                app_js_1 = app_js_1_1;
            }
        ],
        execute: function () {
            bind("login", () => app_js_1.App.instance.utilisateur.login, (e) => app_js_1.App.instance.utilisateur.login = e);
            bind("nombreEssaisMax", () => app_js_1.App.instance.partieAffichee.nombreTentativesMax, (e) => app_js_1.App.instance.partieAffichee.nombreTentativesMax = parseInt(e));
            bind("nombreMax", () => app_js_1.App.instance.partieAffichee.nombreMax, (e) => app_js_1.App.instance.partieAffichee.nombreMax = parseInt(e));
            document.getElementById("settings").addEventListener("submit", function (e) {
                app_js_1.App.instance.partieAffichee.commencer();
                loadUrlInId("stage.html", "main");
                e.preventDefault();
            });
        }
    };
});
//# sourceMappingURL=settings.js.map