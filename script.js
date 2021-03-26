const title = document.getElementById("title");

function aqua() {
    title.setAttribute("style", "color: rgb(158, 226, 235)");
    title.textContent = "~Macarons~";
}

function black() {
    title.setAttribute("style", "color:black");
    title.textContent = "Macarons";
}

title.addEventListener("mouseover", aqua);
title.addEventListener("mouseout", black);
