export class Utilisateur{
    constructor(){
        this._credit=0;

    }
    login : string;




    
    password : string;

    
    private _credit : number;
    ajouteCredit(c:number){
        this._credit+=c;
    }
    // setter : fonction appelée pour mettre une valeur dans le credit : U.credit=4
    set credit (v:number){
        if(v<0) {
            throw "Interdit <0";
        }
        this._credit=v;
    } 
    // Getter : function appelée pour lire la valeur du credit : c=U.credit
    get credit():number{
        return this._credit;
    }
} 
