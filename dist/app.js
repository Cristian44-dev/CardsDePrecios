const d=document,$dataOfert=d.querySelectorAll("[data-ofert]"),$dataPopular=d.querySelectorAll("[data-popular]");function ofert(){$dataOfert.forEach((e=>{const t=d.createElement("span"),a=e.querySelector(".card__price");t.textContent="Oferta",t.classList.add("special"),a.appendChild(t)}))}function popular(){$dataPopular.forEach((e=>{const t=d.createElement("span"),a=e.querySelector(".card__price");t.textContent="Más popular",t.classList.add("special"),a.appendChild(t)}))}function click(){d.addEventListener("click",(e=>{if(e.target.matches(".card__button")){const t=d.querySelector(".card.selec");null!=t&&(t.classList.remove("selec"),t.querySelectorAll("li img").forEach((e=>{e.src="./assets/logo.svg"}))),e.target.parentNode.classList.add("selec"),e.target.parentNode.querySelectorAll("li img").forEach((e=>{e.src="./assets/logo_hover.svg"}))}else{const e=d.querySelector(".card.selec");null!=e&&e.classList.remove("selec"),e.querySelectorAll("li img").forEach((e=>{e.src="./assets/logo.svg"}))}}))}d.addEventListener("DOMContentLoaded",(e=>{ofert(),popular(),click()}));
//# sourceMappingURL=app.js.map
