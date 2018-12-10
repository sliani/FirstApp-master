import { Utilisateur } from "./utilisateur.js";
import { Tentative, ResultatTentative } from "./tentative.js";
//import { Event } from '../node_modules/typescript.events/lib/server/events'


export enum EtatPartie {
    PasCommencee = -1,
    EnCours = 0,
    Gagnee = 1,
    Perdue = 2
}

export class Partie {
    constructor(public utilisateur: Utilisateur, nombreMax: number = 1000, nombreTentativesMax: number = 9) {
        this.nombreMax = nombreMax;
        this.nombreTentativesMax = nombreTentativesMax;
        let a = new Utilisateur();
        let b = new Tentative(13, ResultatTentative.Egal);
        
    }


    tentatives: Tentative[] = [];

    public etat: EtatPartie = EtatPartie.PasCommencee;

    public dateDebut: Date = new Date();



    private _nombreADeviner: number;

    private _nombreMax: number;
    public get nombreMax(): number {

        return this._nombreMax;
    }
    public set nombreMax(v: number) {
        if (this.etat != EtatPartie.PasCommencee)
            throw "Impossible lorsque la partie est commencée";
        if (v < 1) throw "Le nombre maximum doit être supérieur à 0";
        this._nombreMax = v;
    }

    get nombreEssaisRealises(){
        return this.tentatives.length;
    }
    get nombreEssaisRestant(){
        return this.nombreTentativesMax-this.tentatives.length;
    }

    private _nombreTentativesMax: number;
    public get nombreTentativesMax(): number {
        return this._nombreTentativesMax;
    }
    public set nombreTentativesMax(v: number) {
        if (this.etat != EtatPartie.PasCommencee)
            throw "Impossible lorsque la partie est commencée";
        if (v < 1) throw "Le nombre maximum d'essais doit être supérieur à 0";
        this._nombreTentativesMax = v;
    }
 
    //partieCommencee =new Event()

    

    commencer() {
        if (this.etat != EtatPartie.PasCommencee) {
            throw "La partie est déjà commencée";
        }

        setTimeout(() => {
            if(this.etat!=EtatPartie.Gagnee)
                this.etat=EtatPartie.Perdue
        }, this.nombreTentativesMax*5000);
        this.etat = EtatPartie.EnCours;
        this._nombreADeviner = Math.floor(Math.random() * (this.nombreMax + 1));
    }
    tenter(nombreTente: number): ResultatTentative {
        if (this.etat == EtatPartie.PasCommencee) {
            this.commencer();
        }
        if (this.etat != EtatPartie.EnCours) {
            throw "La partie n'est pas en cours";
        }

        let resultat: Tentative;
        if (nombreTente == this._nombreADeviner) {
            resultat = new Tentative(nombreTente, ResultatTentative.Egal);
            this.etat = EtatPartie.Gagnee;
        }
        if (nombreTente < this._nombreADeviner) {
            resultat = new Tentative(nombreTente, ResultatTentative.TropPetit);
        }
        if (nombreTente > this._nombreADeviner) {
            resultat = new Tentative(nombreTente, ResultatTentative.TropGrand);
        }

        this.tentatives.push(resultat);

        if (this.etat != EtatPartie.Gagnee && this.tentatives.length >= this.nombreTentativesMax) {
            this.etat = EtatPartie.Perdue;
        }

        return resultat.resultat;
    }



}