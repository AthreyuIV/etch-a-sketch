const sketchContainer = document.createElement("div");
document.body.appendChild(sketchContainer);

const sketchPad = document.createElement("div");
sketchPad.style.display = "flex";
sketchPad.style.flexWrap = "wrap";
sketchContainer.appendChild(sketchPad);

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.textContent = "1";
    grid.style.width = "20px";
    grid.style.hieght = "20px";
    grid.style.padding = "0px";
    grid.style.margin = "0px";
    grid.style.backgroundColor = "red";
    sketchPad.appendChild(grid);
}

console.log("hello World");

