const links = document.querySelectorAll("header li a");
const mostVisited = document.querySelector(".mostvisited");

let pocetnaCounter = localStorage.getItem("Početna") || 0;
let omeniCounter = localStorage.getItem("O meni") || 0;
let vestineCounter = localStorage.getItem("Veštine") || 0;
let galerijaCounter = localStorage.getItem("Galerija") || 0;
let kontaktCounter = localStorage.getItem("Kontakt") || 0;

links.forEach(link => {
  link.addEventListener("click", e => {
    switch (e.target.text) {
      case "Početna":
        pocetnaCounter++;
        localStorage.setItem("Početna", pocetnaCounter);
        break;
      case "O meni":
        omeniCounter++;
        localStorage.setItem("O meni", omeniCounter);
        break;
      case "Veštine":
        vestineCounter++;
        localStorage.setItem("Veštine", vestineCounter);
        break;
      case "Galerija":
        galerijaCounter++;
        localStorage.setItem("Galerija", galerijaCounter);
        break;
      case "Kontakt":
        kontaktCounter++;
        localStorage.setItem("Kontakt", kontaktCounter);
        break;
    
      default:
        break;
    }
  });
});

let vrednosti = [
  { name: "Početna", value: pocetnaCounter , link:"index.html"},
  { name: "O meni", value: omeniCounter, link:"omeni.html" },
  { name: "Veštine", value: vestineCounter, link:"vestine.html" },
  { name: "Galerija", value: galerijaCounter, link:"galerija.html" },
  { name: "Kontakt", value: kontaktCounter, link:"kontakt.html" },
];

function compare(a, b) {
  const valueA = Number(a.value);
  const valueB = Number(b.value);

  let comparison = 0;
  if (valueA > valueB) {
    comparison = -1;
  } else if (valueA < valueB) {
    comparison = 1;
  }
  return comparison;
}

const sortirano = vrednosti.sort(compare);

//appendiranje
for (let i = 0; i < 3; i++) {
    mostVisited.insertAdjacentHTML(
    "beforeend",
    `<a href=${sortirano[i].link}>${sortirano[i].name}</a><br/>`
  );
}





