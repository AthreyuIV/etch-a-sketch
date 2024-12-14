const etchAsketch = document.createElement("div");
etchAsketch.style.backgroundColor = "#b80101";
etchAsketch.style.display = "flex";
etchAsketch.style.flexDirection = "column";
etchAsketch.style.justifyContent = "center";
etchAsketch.style.alignItems = "center";
etchAsketch.style.width = "420px";
etchAsketch.style.height = "400px";
etchAsketch.style.paddingTop = "40px";
etchAsketch.style.borderRadius = "40px";
document.body.appendChild(etchAsketch);

const sketchContainer = document.createElement("div");
sketchContainer.style.maxWidth = "320px";
etchAsketch.appendChild(sketchContainer);

const sketchPad = document.createElement("div");
sketchPad.style.display = "flex";
sketchPad.style.flexWrap = "wrap";
sketchPad.style.justifyContent = "center";
sketchPad.style.flex = "0 0 10px";
sketchContainer.appendChild(sketchPad);

const psuedoKnobs = document.createElement("div");
psuedoKnobs.style.display = "flex";
psuedoKnobs.style.justifyContent = "space-between";
psuedoKnobs.style.alignItems = "end";
psuedoKnobs.style.width = "400px";
psuedoKnobs.style.height = "75px";
etchAsketch.appendChild(psuedoKnobs);

const leftKnob = document.createElement("div");
leftKnob.style.height = "70px";
leftKnob.style.width = "70px";
leftKnob.style.borderRadius = "100px";
leftKnob.style.backgroundColor = "#c4baba";
psuedoKnobs.appendChild(leftKnob);

const rightKnob = document.createElement("div");
rightKnob.style.height = "70px";
rightKnob.style.width = "70px";
rightKnob.style.borderRadius = "100px";
rightKnob.style.backgroundColor = "#c4baba";
psuedoKnobs.appendChild(rightKnob);

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.style.width = "20px";
    grid.style.height = "20px";
    grid.style.padding = "0px";
    grid.style.margin = "0px";
    grid.style.backgroundColor = "grey";
    sketchPad.appendChild(grid);
}
