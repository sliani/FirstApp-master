System.register(["../model/partie.js", "../model/utilisateur.js"], function (exports_1, context_1) {
    "use strict";
    var partie_js_1, utilisateur_js_1, App;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (partie_js_1_1) {
                partie_js_1 = partie_js_1_1;
            },
            function (utilisateur_js_1_1) {
                utilisateur_js_1 = utilisateur_js_1_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor() {
                    this.utilisateur = new utilisateur_js_1.Utilisateur();
                    this.utilisateur.login = "Mon login";
                    this.utilisateur.credit = 5;
                    this.partieAffichee = new partie_js_1.Partie(this.utilisateur);
                }
                static get instance() {
                    if (App._instance == null)
                        App._instance = new App();
                    return this._instance;
                }
            };
            exports_1("App", App);
        }
    };
});
//# sourceMappingURL=app.js.map