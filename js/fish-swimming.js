"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const fiskeFakta = document.getElementById("fiskeFakta");

    if (fiskeFakta) {
        fiskeFakta.innerHTML = "";
        fiskeFakta.classList.remove("isVisible");
    }

});