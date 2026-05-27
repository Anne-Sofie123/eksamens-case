// Gør koden mere sikker //
"use strict";

 // Venter til siden er helt klar //
document.addEventListener("DOMContentLoaded", () => {

    // Liste over fisk, faktabokse og lyde //
   const fishPairs = [
    { fish: ".fish1", fakta: ".fish1-fakta", sound: "sounds/soepindsvin.mp3" },
    { fish: ".fish2", fakta: ".fish2-fakta", sound: "sounds/soehest.mp3" },
    { fish: ".fish4", fakta: ".fish4-fakta", sound: "sounds/havsnegl.mp3" },
    { fish: ".fish5", fakta: ".fish5-fakta", sound: "sounds/haj-lilla.mp3" },
    { fish: ".fish6", fakta: ".fish6-fakta", sound: "sounds/haj-blaa.mp3" },
    { fish: ".fish7", fakta: ".fish7-fakta", sound: "sounds/krabbe.mp3" },
    { fish: ".fish8", fakta: ".fish8-fakta", sound: "sounds/havfruen.mp3" },
    { fish: ".fish9", fakta: ".fish9-fakta", sound: "sounds/guldfisk.mp3" },
    { fish: ".fish10", fakta: ".fish10-fakta", sound: "sounds/haj-groen.mp3" },
    { fish: ".fish12", fakta: ".fish12-fakta", sound: "sounds/blaeksprut-lyseroed.mp3" }
];

    // Husker hvilken faktaboks der er åben //
    let activeFakta = null;

     // Husker hvilken fisk der er valgt //
    let activeFish = null;

    // Husker hvilken lyd der spiller //
    let activeAudio = null;

    // Husker hvilken lyd der spiller //
    fishPairs.forEach(pair => {

        // Finder fisken //
        const fish = document.querySelector(pair.fish);

        // Finder faktaboksen //
        const fakta = document.querySelector(pair.fakta);

        // Stopper hvis fisken eller faktaboksen ikke findes //
        if (!fish || !fakta) return;

        // Tryk på en fisk for at se fakta //
        fish.addEventListener("click", () => {

             // Lukker den gamle faktaboks //
            if (activeFakta && activeFakta !== fakta) {
                activeFakta.style.display = "none";
            }

            // Stopper lyden //
            if (activeAudio) {
                activeAudio.pause();
                activeAudio.currentTime = 0;
            }

             // Tjekker om faktaboksen allerede er åben //
            if (fakta.style.display === "block") {

            // Skjuler faktaboksen //
                fakta.style.display = "none";

            // Fjerner det valgte //
                activeFakta = null;
                activeFish = null;
                activeAudio = null;

            // Viser faktaboksen //
            } else {
                fakta.style.display = "block";

            // Husker den valgte fisk og faktaboks //
                activeFakta = fakta;
                activeFish = fish;

            // Afspiller lyden //
                activeAudio = new Audio(pair.sound);
                activeAudio.play();
            }
        });

            // Tryk på faktaboksen for at lukke den //
            fakta.addEventListener("click", () => {

            // Lukker faktaboksen //
            fakta.style.display = "none";

            // Stopper lyden //
            if (activeAudio) {
                activeAudio.pause();
                activeAudio.currentTime = 0;
                activeAudio = null;
            }

            // Nulstiller den valgte fisk og faktaboks //
            activeFakta = null;
            activeFish = null;
        });
    });

    // Sørger for at faktaboksen følger fisken //
    function updateFaktaPosition() {

        // Finder fiskens placering //
        if (activeFakta && activeFish) {
            const rect = activeFish.getBoundingClientRect();

            // Flytter faktaboksen til siden //
            activeFakta.style.left = rect.left + 80 + "px";

             // Flytter faktaboksen op //
            activeFakta.style.top = rect.top - 40 + "px";
        }
        
        // Opdaterer hele tiden placeringen //
        requestAnimationFrame(updateFaktaPosition);
    }

    // Starter funktionen //
    updateFaktaPosition();

});