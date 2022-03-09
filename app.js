/*
var endpoint = "https://swapi.dev/api/starships";

fetch(endpoint)
.then((response) => response.json())
.then((json) => console.log(json))
.catch((error) => console.error(error));
*/
//console.log(Handlebars);

// izvor templata - možemo ga ovdje definirati ili u html-u izravno u <script>, pa ovdje selektiramo taj element
// const source = "<h1>{{name}}</h1>";
const source = document.querySelector("#hello-template").innerHTML;

//Moj handlepars template (šablona) je rezultat Handlparsovog compilenja(obrade) sourca iz iznad navedene linije
const template = Handlebars.compile(source);
// pretvorimo template u html pozivanjem njega kao funkcije, obavezno treba primiti podatke npr name: "Dijana"
const html = template({name: "Dijana"});
// Sad možemo napraviti različite html-ove s templatom
const htmlIvan = template({name: "Ivan"});
// stavljamo tekst(ne element u body)
document.body.innerHTML += html;
document.body.innerHTML += htmlIvan; 