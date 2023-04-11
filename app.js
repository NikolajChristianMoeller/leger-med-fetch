"use strict";

window.addEventListener("load", initApp);


async function initApp() {
    console.log("initApp: app.js is running");
    const harry = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json");
    showCharacter(harry);

    const ron = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/ron.json");
    showCharacter(ron);

    const snape = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/severus.json");
    showCharacter(snape);
}

async function getCharacter(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function showCharacter(character) {
    document.querySelector("body").insertAdjacentHTML(
        "beforeend",
        /*html*/`

        <article>
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="" />
        </article>
    `
    );
}

