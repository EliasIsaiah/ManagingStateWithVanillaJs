let state = [];
let id = 0;
let container = document.getElementById("container");

function createBox(name, width, height, color, border, borderRadius = 0) {
    let box = document.createElement("div")
    box.style.height = height;
    box.style.width = width;
    box.style.backgroundColor = color;
    box.style.border = border;
    box.style.margin = "10px";
    box.innerText = name;
    box.style.fontSize = "3rem";
    box.id = `box-${id}`;
    box.style.borderRadius = borderRadius; 

    container.appendChild(box);

    console.log(`created box with id: box-${id}`);

    state.push({
        id: `box-${id}`,
        name,
        width,
        height,
        color,
        border,
        borderRadius
    })

    id++;
}

createBox("jude", "200px", "80px", "#c9c9c9", "10px solid black", "30px")
createBox("fred", "100px", "200px", "red", "10px solid black")
createBox("elias", "150px", "100px", "rgb(255, 98, 46)", "5px solid black")

function removeBox(id) {
    let boxThatIWantRemoved = document.getElementById(id);
    container.removeChild(boxThatIWantRemoved);
    updateState(id, "remove");
}

function sailorMoonTransformation(id, color) { // change color
    let boxThatIWantToChangeTheColorOf = document.getElementById(id);
    boxThatIWantToChangeTheColorOf.style.backgroundColor = color;
    let boxFromStateArray = state.filter(box => box.id === id);
    let boxFromState = boxFromStateArray[0];
    boxFromState.color = color;
    updateState(boxFromState);
}

function updateBorderRadius(id, borderRadius) {
    let boxThatIWantToChangeTheBorderRadiusOf = document.getElementById(id);
    boxThatIWantToChangeTheBorderRadiusOf.style.borderRadius = borderRadius;
    let stateBox = state.filter(box => box.id === id).pop();
    stateBox.borderRadius = borderRadius;
    updateState(stateBox);
}

function updateState(changedBox, action = "update") {
    if (action === "remove") {
        state = state.filter(box => box.id !== changedBox.id);
    }
    else {
        state = state.map(box => box.id === changedBox.id ? changedBox : box)
    }
}

// state = state.map(function (box) {
//     if (box.id === changedBox.id) {
//         return changedBox
//     } else {
//         return box;
//     }
// })