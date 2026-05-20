"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const fishPairs = [
        { fish: ".fish1", fakta: ".fish1-fakta" },
        { fish: ".fish2", fakta: ".fish2-fakta" },
        { fish: ".fish3", fakta: ".fish3-fakta" },
        { fish: ".fish4", fakta: ".fish4-fakta" },
        { fish: ".fish5", fakta: ".fish5-fakta" },
        { fish: ".fish6", fakta: ".fish6-fakta" },
        { fish: ".fish7", fakta: ".fish7-fakta" },
        { fish: ".fish8", fakta: ".fish8-fakta" },
        { fish: ".fish9", fakta: ".fish9-fakta" },
        { fish: ".fish10", fakta: ".fish10-fakta" },
        { fish: ".fish11", fakta: ".fish11-fakta" },
        { fish: ".fish12", fakta: ".fish12-fakta" },
        { fish: ".fish13", fakta: ".fish13-fakta" }
    ];

    let activeFakta = null;
    let activeFish = null;

    fishPairs.forEach(pair => {
        const fish = document.querySelector(pair.fish);
        const fakta = document.querySelector(pair.fakta);

        if (!fish || !fakta) return;

        fish.addEventListener("click", () => {

            if (activeFakta && activeFakta !== fakta) {
                activeFakta.style.display = "none";
            }

            if (fakta.style.display === "block") {
                fakta.style.display = "none";
                activeFakta = null;
                activeFish = null;
            } else {
                fakta.style.display = "block";
                activeFakta = fakta;
                activeFish = fish;
            }
        });

        fakta.addEventListener("click", () => {
            fakta.style.display = "none";
            activeFakta = null;
            activeFish = null;
        });
    });

    function updateFaktaPosition() {
        if (activeFakta && activeFish) {
            const rect = activeFish.getBoundingClientRect();

            activeFakta.style.left = rect.left + 80 + "px";
            activeFakta.style.top = rect.top - 40 + "px";
        }

        requestAnimationFrame(updateFaktaPosition);
    }

    updateFaktaPosition();

});