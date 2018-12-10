import { App } from "./app.js";

$("#indication1").html(`Il vous reste ${App.instance.partieAffichee.nombreEssaisRestant} 
    essais sur ${App.instance.partieAffichee.nombreTentativesMax}`);

$("#indication1").html(`Entrez un nombre entre 0
     et ${App.instance.partieAffichee.nombreMax}`);

$("#nombreTente").attr("max",App.instance.partieAffichee.nombreMax.toString());

$("#entreeUtilisateur").submit((e)=>{
    var nombreTente=parseInt($("#nombreTente").val().toString());
    var resultat=App.instance.partieAffichee.tenter(nombreTente);
    alert(resultat);
    e.preventDefault();
});



