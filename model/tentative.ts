
export enum ResultatTentative{
    TropGrand=1,
    Egal=0,
    TropPetit=-1
}
export  class Tentative{
    constructor(public nombreTente : number,public resultat : ResultatTentative){

    }
    
    dateTentative : Date=new Date();
}