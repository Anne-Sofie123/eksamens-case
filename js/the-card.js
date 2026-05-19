const circles = document.querySelectorAll(".map-circle");

function hideCircles() {
    circles.forEach(circle => {
        circle.style.display = "none";
    });
}

/* Søhest */
document.getElementById("søhest-btn").onclick = () => {
    hideCircles();
    document.getElementById("søhest-circle").style.display = "block";
};

/* Guldfisk */
document.getElementById("guldfisk-btn").onclick = () => {
    hideCircles();
    document.getElementById("guldfisk-circle").style.display = "block";
};

/* Haj */
document.getElementById("haj-btn").onclick = () => {
    hideCircles();
    document.getElementById("haj-circle").style.display = "block";
};

/* Blæksprutte */
document.getElementById("blæksprutte-btn").onclick = () => {
    hideCircles();
    document.getElementById("blæksprutte-circle").style.display = "block";
};