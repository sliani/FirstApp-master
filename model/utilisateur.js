System.register([], function (exports_1, context_1) {
    "use strict";
    var Utilisateur;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Utilisateur = class Utilisateur {
                constructor() {
                    this._credit = 0;
                }
                ajouteCredit(c) {
                    this._credit += c;
                }
                set credit(v) {
                    if (v < 0) {
                        throw "Interdit <0";
                    }
                    this._credit = v;
                }
                get credit() {
                    return this._credit;
                }
            };
            exports_1("Utilisateur", Utilisateur);
        }
    };
});
//# sourceMappingURL=utilisateur.js.map