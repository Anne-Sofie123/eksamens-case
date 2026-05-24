// Finder alle cirkler på kortet //
const circles = document.querySelectorAll(".map-circle");

 // Skjuler alle cirkler //
function hideCircles() {

    // Tager hver cirkel én ad gangen //
    circles.forEach(circle => {

        // Gør cirklen usynlig //
        circle.style.display = "none";
    });
}

/* Soehest */
 // Tryk på søhesten for at vise dens placering //
document.getElementById("soehest-btn").onclick = () => {

    // Gemmer alle cirkler //
    hideCircles();

     // Viser søhestens cirkel //
    document.getElementById("soehest-circle").style.display = "block";
};

/* Guldfisk */
// Tryk på søhesten for at vise dens placering //
document.getElementById("guldfisk-btn").onclick = () => {

    // Gemmer alle cirkler //
    hideCircles();

     // Viser søhestens cirkel //
    document.getElementById("guldfisk-circle").style.display = "block";
};


/* Haj */
// Tryk på søhesten for at vise dens placering //
document.getElementById("haj-btn").onclick = () => {

    // Gemmer alle cirkler //
    hideCircles();

    // Viser søhestens cirkel //
    document.getElementById("haj-circle").style.display = "block";
};

/* Blaeksprutte */
// Tryk på søhesten for at vise dens placering //
document.getElementById("blaeksprutte-btn").onclick = () => {

    // Gemmer alle cirkler //
    hideCircles();

    // Viser søhestens cirkel //
    document.getElementById("blaeksprutte-circle").style.display = "block";
};