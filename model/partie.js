System.register(["./utilisateur.js", "./tentative.js"], function (exports_1, context_1) {
    "use strict";
    var utilisateur_js_1, tentative_js_1, EtatPartie, Partie;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (utilisateur_js_1_1) {
                utilisateur_js_1 = utilisateur_js_1_1;
            },
            function (tentative_js_1_1) {
                tentative_js_1 = tentative_js_1_1;
            }
        ],
        execute: function () {
            (function (EtatPartie) {
                EtatPartie[EtatPartie["PasCommencee"] = -1] = "PasCommencee";
                EtatPartie[EtatPartie["EnCours"] = 0] = "EnCours";
                EtatPartie[EtatPartie["Gagnee"] = 1] = "Gagnee";
                EtatPartie[EtatPartie["Perdue"] = 2] = "Perdue";
            })(EtatPartie || (EtatPartie = {}));
            exports_1("EtatPartie", EtatPartie);
            Partie = class Partie {
                constructor(utilisateur, nombreMax = 1000, nombreTentativesMax = 9) {
                    this.utilisateur = utilisateur;
                    this.tentatives = [];
                    this.etat = EtatPartie.PasCommencee;
                    this.dateDebut = new Date();
                    this.nombreMax = nombreMax;
                    this.nombreTentativesMax = nombreTentativesMax;
                    let a = new utilisateur_js_1.Utilisateur();
                    let b = new tentative_js_1.Tentative(13, tentative_js_1.ResultatTentative.Egal);
                }
                get nombreMax() {
                    return this._nombreMax;
                }
                set nombreMax(v) {
                    if (this.etat != EtatPartie.PasCommencee)
                        throw "Impossible lorsque la partie est commencée";
                    if (v < 1)
                        throw "Le nombre maximum doit être supérieur à 0";
                    this._nombreMax = v;
                }
                get nombreEssaisRealises() {
                    return this.tentatives.length;
                }
                get nombreEssaisRestant() {
                    return this.nombreTentativesMax - this.tentatives.length;
                }
                get nombreTentativesMax() {
                    return this._nombreTentativesMax;
                }
                set nombreTentativesMax(v) {
                    if (this.etat != EtatPartie.PasCommencee)
                        throw "Impossible lorsque la partie est commencée";
                    if (v < 1)
                        throw "Le nombre maximum d'essais doit être supérieur à 0";
                    this._nombreTentativesMax = v;
                }
                commencer() {
                    if (this.etat != EtatPartie.PasCommencee) {
                        throw "La partie est déjà commencée";
                    }
                    setTimeout(() => {
                        if (this.etat != EtatPartie.Gagnee)
                            this.etat = EtatPartie.Perdue;
                    }, this.nombreTentativesMax * 5000);
                    this.etat = EtatPartie.EnCours;
                    this._nombreADeviner = Math.floor(Math.random() * (this.nombreMax + 1));
                }
                tenter(nombreTente) {
                    if (this.etat == EtatPartie.PasCommencee) {
                        this.commencer();
                    }
                    if (this.etat != EtatPartie.EnCours) {
                        throw "La partie n'est pas en cours";
                    }
                    let resultat;
                    if (nombreTente == this._nombreADeviner) {
                        resultat = new tentative_js_1.Tentative(nombreTente, tentative_js_1.ResultatTentative.Egal);
                        this.etat = EtatPartie.Gagnee;
                    }
                    if (nombreTente < this._nombreADeviner) {
                        resultat = new tentative_js_1.Tentative(nombreTente, tentative_js_1.ResultatTentative.TropPetit);
                    }
                    if (nombreTente > this._nombreADeviner) {
                        resultat = new tentative_js_1.Tentative(nombreTente, tentative_js_1.ResultatTentative.TropGrand);
                    }
                    this.tentatives.push(resultat);
                    if (this.etat != EtatPartie.Gagnee && this.tentatives.length >= this.nombreTentativesMax) {
                        this.etat = EtatPartie.Perdue;
                    }
                    return resultat.resultat;
                }
            };
            exports_1("Partie", Partie);
        }
    };
});
//# sourceMappingURL=partie.js.map