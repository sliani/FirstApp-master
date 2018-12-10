import { Partie } from "../model/partie.js";
import { Utilisateur } from "../model/utilisateur.js";

export class App{
    private constructor(){
        this.utilisateur=new Utilisateur();
        this.utilisateur.login="Mon login";
        this.utilisateur.credit=5;

        this.partieAffichee=new Partie(this.utilisateur);
    }
    private static _instance : App;
    static get instance() : App{
        if(App._instance==null) App._instance=new App();
        return this._instance;
    }

    utilisateur : Utilisateur;
    partieAffichee : Partie;


}