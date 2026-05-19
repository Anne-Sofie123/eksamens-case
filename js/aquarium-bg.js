"use strict";

/* BOBLER */

function buildBubbles() {

  const layer = document.getElementById("bubbles-layer");

  layer.style.cssText = `
    position:absolute;
    inset:0;
    z-index:4;
    pointer-events:none;
  `;

  for (let i = 0; i < 25; i++) {

    const bubble = document.createElement("div");

    bubble.className = "bubble";

    const size = 5 + Math.random() * 15;
    const duration = 6 + Math.random() * 8;
    const delay = Math.random() * 10;

    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.left = Math.random() * 100 + "%";
    bubble.style.bottom = "0px";

    bubble.style.animationDuration = duration + "s";
    bubble.style.animationDelay = "-" + delay + "s";

    layer.appendChild(bubble);
  }
}

buildBubbles();