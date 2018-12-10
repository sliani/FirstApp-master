import { App } from "./app.js";
debugger;
// Mise en place des éléments de l'interface
(document.getElementById("login") as HTMLInputElement).value=App.instance.utilisateur.login;
(document.getElementById("nombreEssaisMax") as HTMLInputElement).value=App.instance.partieAffichee.nombreTentativesMax.toString();
(document.getElementById("nombreMax") as HTMLInputElement).value=App.instance.partieAffichee.nombreMax.toString();



