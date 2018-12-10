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
            $("#indication1").html(`Il vous reste ${app_js_1.App.instance.partieAffichee.nombreEssaisRestant} 
    essais sur ${app_js_1.App.instance.partieAffichee.nombreTentativesMax}`);
            $("#indication1").html(`Entrez un nombre entre 0
     et ${app_js_1.App.instance.partieAffichee.nombreMax}`);
            $("#nombreTente").attr("max", app_js_1.App.instance.partieAffichee.nombreMax.toString());
            $("#entreeUtilisateur").submit((e) => {
                var nombreTente = parseInt($("#nombreTente").val().toString());
                var resultat = app_js_1.App.instance.partieAffichee.tenter(nombreTente);
                alert(resultat);
                e.preventDefault();
            });
        }
    };
});
//# sourceMappingURL=stage.js.map