import { App } from "./app.js";
import { Partie } from "../model/partie.js";


function bind(id: string, getter: () => any, setter: (a: string) => void) {
    var input = (document.getElementById(id) as HTMLInputElement);
    input.value = getter().toString();
    input.addEventListener("change",
        (e) => {
            try {
                setter(input.value);
            }
            catch(ex){
                alert(ex);
            }
        })
}
bind("login",
    //function getter
    () => App.instance.utilisateur.login,
    // function setter
    (e) => App.instance.utilisateur.login = e as string);
bind("nombreEssaisMax",  () => App.instance.partieAffichee.nombreTentativesMax,
     (e) => App.instance.partieAffichee.nombreTentativesMax = parseInt(e));

bind("nombreMax",
    () => App.instance.partieAffichee.nombreMax,
    (e) => App.instance.partieAffichee.nombreMax = parseInt(e));

document.getElementById("settings").addEventListener("submit",function(e){
    App.instance.partieAffichee.commencer();
    loadUrlInId("stage.html","main");
    e.preventDefault();
})

