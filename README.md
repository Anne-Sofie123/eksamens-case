# Akvarium 2 – Interaktiv touchskærmsløsning

Akvarium - Forbedret eksamensprojekt

Projektbeskrivelse:
 
Dette projekt er min forbedrede version af Akvarium-casen fra 1. semester på Multimediedesigneruddannelsen.

Formålet var at forbedre både design og kode, så løsningen fungerer bedre som en interaktiv touchskærmsoplevelse. Projektet er designet i Figma og udviklet med HTML, CSS og JavaScript.

Mappestruktur:

For at holde projektet overskueligt blev filerne organiseret i separate mapper.

projekt/
│
├── index.html
├── akvarie.html
├── the-card.html
├── turning-cards.html
│
├── css/
│   ├── akvarie.css
│   ├── startside.css
│   ├── the-card.css
│   └── turning-cards.css
│
├── js/
│   ├── fish-swimming.js
│   ├── the-card.js
│   └── turning-cards.js
│
├── img/
│
├── sounds/
│
└── README.md

Denne struktur gør projektet lettere at vedligeholde og videreudvikle.


Programmeringsforbedringer:

Faktabokse med lyd:

I den først version kunne brugeren se information om fiskene ved hjælp af hover-funktioner. I den forbedrede version åbnes faktaboksene ved klik, og der afslpilles samtidig lyd med information om fisken. Dette passer bedre til målgruppen.

Verdenskort:

På verdenskortet kan brugeren trykke på forskellige fisk og se, hvor de lever i verden. Når en fisk vælges, vises dens placering på kortet.

Vendespil:

Vendespillet er bygget med JavaScript, så kortene kan vendes ved klik. Når brugeren trykker på et kort, tilføjes eller fjernes klassen flipped, som styrer animationen.

Mere strukturet JavaScript:

Koden er blevet mere overskuelig ved hjælp af:

* Array
* Loops (forEach)
* Funktioner

Det gør løsningen lettere at vedligeholde og udvide.

Fra hover til klik:

Flere funktioner blev ændret fra hover til klik, fordi løsningen er udviklet til touchskærm. Det gør funktionerne nemmere at bruge på tablets og touchskærme, hvor hover ikke findes.

HTML og CSS:

HTML-koden er valideret uden fejl. Css er opdelt i flere filer, så hver side har sit eget stylesheet, mens fælles styling er samlet i akvarie.css.

Layoutet er bygget med Flexbox og Grid for at skabe en mere overskuelig brugeroplevelse.

