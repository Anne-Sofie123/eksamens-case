// Finder alle elementer med klassen "card" //
const cards = document.querySelectorAll(".card");

// Tager hvert kort og giver det en funktion //
cards.forEach(card => {

    // Når man trykker på kortet, vender det //
    card.addEventListener("click", () => {

        // Skifter mellem at vende kortet om og tilbage //
        card.classList.toggle("flipped");

    });

});
