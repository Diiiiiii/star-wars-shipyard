// Vježba demonstrira mapiranje rezultate u tamplate
//1. Riješiti template u startu jer ne moramo svaki put kompajalat iz sourcea. Jednom kad smo ga kompajlali u funkciju, možemo ga pozivati s različitim podacima i prikazivati
//2. appElement možemo izvući na vrh da ga ne moramo uvijek selektirati
const appElement = document.querySelector("#app");
const source = document.querySelector("#starships-template").innerHTML;
const template = Handlebars.compile(source);


var endpoint = "https://swapi.dev/api/starships";

fetch(endpoint)
// Rješenje: uzeti popis rezultata iz responsa, staviti u starships value i ispisati html u appElement innerHtml
    .then((response) => response.json())
    .then((json) => {
        const html = template({ starships: json.results});

        appElement.innerHTML = html;
    })
    .catch((error) => console.error(error));


//pozivati s različitim podacima i prikazivati
/* const html = template({ starships: [{ name: "Starship A"}, { name: "Starship B"}]});
appElement.innerHTML = html; */


/* Vježba: Handlebars
Trajanje: 15min (20:25 - 20:40)
---

Završite zadatak tako da se u Handlebars template ispiše niz starshipa dobivenih u responseu na GET https://swapi.dev/api/starships request.
 */