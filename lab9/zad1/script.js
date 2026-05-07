const divContainer = document.getElementById("div-container");

document.getElementById("add-div").addEventListener("click", function () {
    const div = document.createElement("div");
    div.textContent = "Div";
    divContainer.appendChild(div);
});

document.getElementById("remove-div").addEventListener("click", function () {
    if (divContainer.firstElementChild) {
        divContainer.firstElementChild.remove();
    }
});

document.getElementById("color-third-div").addEventListener("click", function () {
    const thirdDiv = divContainer.children[2];

    if (thirdDiv) {
        thirdDiv.classList.add("colored");
    }
});

document.getElementById("text-all-divs").addEventListener("click", function () {
    for (const div of divContainer.children) {
        div.textContent = "nowy tekst";
    }
});
