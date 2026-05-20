const circles = document.querySelectorAll(".map-circle");

function hideCircles() {
    circles.forEach(circle => {
        circle.style.display = "none";
    });
}

/* Soehest */
document.getElementById("soehest-btn").onclick = () => {
    hideCircles();
    document.getElementById("soehest-circle").style.display = "block";
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

/* Blaeksprutte */
document.getElementById("blaeksprutte-btn").onclick = () => {
    hideCircles();
    document.getElementById("blaeksprutte-circle").style.display = "block";
};