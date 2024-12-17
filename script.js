
const pageContainer = document.createElement("div");
pageContainer.style.display = "flex";
pageContainer.style.flexDirection = "column";
pageContainer.style.justifyContent = "center";
pageContainer.style.alignItems = "center";
pageContainer.style.width = "100%";
pageContainer.style.height = "100%";
document.body.appendChild(pageContainer);

const pickSize = document.createElement("div");
pickSize.style.display = "flex";
pickSize.style.justifyContent = "center";
pickSize.style.alignItems = "center";
pickSize.style.width = "200px";
pickSize.style.margin = "10px";
pickSize.style.height = "50px";
pickSize.style.backgroundColor = "#b80101";
pickSize.style.borderRadius = "24px";
pageContainer.appendChild(pickSize);

const sizeButton = document.createElement("button");
sizeButton.textContent = "Grid Size";
sizeButton.style.border = "2px solid grey";
sizeButton.style.padding = "7px";
sizeButton.style.borderRadius = "36px";

sizeButton.style.color = "white";
sizeButton.style.backgroundColor = "#b80101";
sizeButton.style.fontFamily = "Courier New, sans-serif";
sizeButton.addEventListener("click", function () {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
});
sizeButton.addEventListener("click", function () {
    let input = prompt("Enter a size for your sketchpad. Your choices are 16, 20, 32, 40, 64, and 80.");

    if (input === "16") {
        let toNumber = Number(input);

        for (let i = 0; i < 256; i++) {
            const grid = document.createElement("div");
            grid.style.width = "20px";
            grid.style.height = "20px";
            grid.style.padding = "0px";
            grid.style.margin = "0px";
            grid.style.backgroundColor = "grey";
            grid.addEventListener("mouseenter", event => {
                event.target.style.backgroundColor = "black";
            });
            sketchPad.appendChild(grid);
        }
    }
    else if (input === "20") {
        let toNumber = Number(input);

        for (let i = 0; i < 400; i++) {
            const grid = document.createElement("div");
            grid.style.width = "16px";
            grid.style.height = "16px";
            grid.style.padding = "0px";
            grid.style.margin = "0px";
            grid.style.backgroundColor = "grey";
            grid.addEventListener("mouseenter", event => {
                event.target.style.backgroundColor = "black";
            });
            sketchPad.appendChild(grid);
        }
    }
    else if (input === "32") {
        let toNumber = Number(input);;

        for (let i = 0; i < 1024; i++) {
            const grid = document.createElement("div");
            grid.style.width = "10px";
            grid.style.height = "10px";
            grid.style.padding = "0px";
            grid.style.margin = "0px";
            grid.style.backgroundColor = "grey";
            grid.addEventListener("mouseenter", event => {
                event.target.style.backgroundColor = "black";
            });
            sketchPad.appendChild(grid);
        }
    }
    else if (input === "40") {
        let toNumber = Number(input);

        for (let i = 0; i < 1600; i++) {
            const grid = document.createElement("div");
            grid.style.width = "8px";
            grid.style.height = "8px";
            grid.style.padding = "0px";
            grid.style.margin = "0px";
            grid.style.backgroundColor = "grey";
            grid.addEventListener("mouseenter", event => {
                event.target.style.backgroundColor = "black";
            });
            sketchPad.appendChild(grid);
        }
    }
    else if (input === "64") {
        let toNumber = Number(input);

        for (let i = 0; i < 4096; i++) {
            const grid = document.createElement("div");
            grid.style.width = "5px";
            grid.style.height = "5px";
            grid.style.padding = "0px";
            grid.style.margin = "0px";
            grid.style.backgroundColor = "grey";
            grid.addEventListener("mouseenter", event => {
                event.target.style.backgroundColor = "black";
            });
            sketchPad.appendChild(grid);
        }
    }
    else if (input === "80") {
        let toNumber = Number(input);

        for (let i = 0; i < 6400; i++) {
            const grid = document.createElement("div");
            grid.style.width = "4px";
            grid.style.height = "4px";
            grid.style.padding = "0px";
            grid.style.margin = "0px";
            grid.style.backgroundColor = "grey";
            grid.addEventListener("mouseenter", event => {
                event.target.style.backgroundColor = "black";
            });
            sketchPad.appendChild(grid);
        }
    }
    else {
        alert("That isn't a valid value");
    }
})
sizeButton.addEventListener("mouseenter", event => {
    event.target.style.backgroundColor = "#ed1111";
})
sizeButton.addEventListener("mouseleave", event => {
    event.target.style.backgroundColor = "#b80101";
})
pickSize.appendChild(sizeButton);

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
pageContainer.appendChild(etchAsketch);

const sketchContainer = document.createElement("div");
sketchContainer.style.maxWidth = "320px";
etchAsketch.appendChild(sketchContainer);

const sketchPad = document.createElement("div");
sketchPad.style.display = "flex";
sketchPad.style.flexWrap = "wrap";
sketchPad.style.justifyContent = "center";
sketchPad.style.flex = "0 0 10px";
sketchPad.style.width = "320px";
sketchPad.style.height = "320px"
sketchPad.style.backgroundColor = "grey";
sketchPad.classList.add("sketch-pad");
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


