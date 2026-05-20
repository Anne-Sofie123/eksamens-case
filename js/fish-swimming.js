"use strict";

document.addEventListener("DOMContentLoaded", () => {

   const fishPairs = [
    { fish: ".fish1", fakta: ".fish1-fakta", sound: "sounds/søpindsvin.mp3" },
    { fish: ".fish2", fakta: ".fish2-fakta", sound: "sounds/søhest.mp3" },
    { fish: ".fish3", fakta: ".fish3-fakta", sound: "sounds/skildpadde.mp3" },
    { fish: ".fish4", fakta: ".fish4-fakta", sound: "sounds/havsnegl.mp3" },
    { fish: ".fish5", fakta: ".fish5-fakta", sound: "sounds/haj-lilla.mp3" },
    { fish: ".fish6", fakta: ".fish6-fakta", sound: "sounds/haj-blå.mp3" },
    { fish: ".fish7", fakta: ".fish7-fakta", sound: "sounds/krabbe.mp3" },
    { fish: ".fish8", fakta: ".fish8-fakta", sound: "sounds/havfruen.mp3" },
    { fish: ".fish9", fakta: ".fish9-fakta", sound: "sounds/guldfisk.mp3" },
    { fish: ".fish10", fakta: ".fish10-fakta", sound: "sounds/haj-grøn.mp3" },
    { fish: ".fish11", fakta: ".fish11-fakta", sound: "sounds/blæksprut-grøn.mp3" },
    { fish: ".fish12", fakta: ".fish12-fakta", sound: "sounds/delfin.mp3" },
    { fish: ".fish13", fakta: ".fish13-fakta", sound: "sounds/blæksprut-lyserød.mp3" }
];

    let activeFakta = null;
    let activeFish = null;
    let activeAudio = null;

    fishPairs.forEach(pair => {
        const fish = document.querySelector(pair.fish);
        const fakta = document.querySelector(pair.fakta);

        if (!fish || !fakta) return;

        fish.addEventListener("click", () => {

            if (activeFakta && activeFakta !== fakta) {
                activeFakta.style.display = "none";
            }

            if (activeAudio) {
                activeAudio.pause();
                activeAudio.currentTime = 0;
            }

            if (fakta.style.display === "block") {
                fakta.style.display = "none";
                activeFakta = null;
                activeFish = null;
                activeAudio = null;
            } else {
                fakta.style.display = "block";
                activeFakta = fakta;
                activeFish = fish;

                activeAudio = new Audio(pair.sound);
                activeAudio.play();
            }
        });

        fakta.addEventListener("click", () => {
            fakta.style.display = "none";

            if (activeAudio) {
                activeAudio.pause();
                activeAudio.currentTime = 0;
                activeAudio = null;
            }

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