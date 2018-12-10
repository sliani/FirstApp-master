System.register([], function (exports_1, context_1) {
    "use strict";
    var ResultatTentative, Tentative;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (ResultatTentative) {
                ResultatTentative[ResultatTentative["TropGrand"] = 1] = "TropGrand";
                ResultatTentative[ResultatTentative["Egal"] = 0] = "Egal";
                ResultatTentative[ResultatTentative["TropPetit"] = -1] = "TropPetit";
            })(ResultatTentative || (ResultatTentative = {}));
            exports_1("ResultatTentative", ResultatTentative);
            Tentative = class Tentative {
                constructor(nombreTente, resultat) {
                    this.nombreTente = nombreTente;
                    this.resultat = resultat;
                    this.dateTentative = new Date();
                }
            };
            exports_1("Tentative", Tentative);
        }
    };
});
//# sourceMappingURL=tentative.js.map