console.log("test")

const titleEl = document.getElementById("[yourTitleId]");
const mainEl = document.getElementById("[mainId]");

titleEl.textContent = "[Video Games] — Powered by JavaScript";

const imgEl = document.getElementById("[yourImgId]");

imgEl.src = "gamesss.webp";
imgEl.alt = "best 100 games";
 
const items = [
    { name: "Minecraft", info: "A game about building and surviving" },
    { name: "Fornite", info: "A battle royal game" },
    { name: "Call of duty", info: "First person shooter" }
    ];

    const listEl = document.getElementById("[yourListId]");
    listEl.innerHTML = ""; 

    // adds games to list
    items.forEach((obj) => {
        const li = document.createElement("li");
        li.textContent = `${obj.name} — ${obj.info}`;
        li.textContent = `${obj.name} — ${obj.info}`;
        li.textContent = `${obj.name} — ${obj.info}`;
        listEl.appendChild(li);});

const toggleBtn = document.getElementById("[yourToggleBtnId]");
toggleBtn.addEventListener("click", () => {
    mainEl.classList.toggle("[yourHighlightClass]");});

    const swapBtn = document.getElementById("[yourSwapBtnId]");
let swapped = false;


swapBtn.addEventListener("click", () => {
if (!swapped) {
imgEl.src = "cod.jpg";
imgEl.alt = "[Alt for image B]";
swapped = true; } else {
imgEl.src = "fortnite.webp";
imgEl.alt = "[Alt for image A]";
swapped = false;
}
});

const p1 = document.getElementById("gamep1")

p1.textContent = "video games are the best because ther is a game out there for everyone.";
p1.style.color = "blue";