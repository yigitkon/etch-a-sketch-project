let dimension = 16;  // Size of the grid (16x16)
const container = document.querySelector("#container");


function createGrid(dimension){
    container.innerHTML="";
    boxNumber = 1
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.id = boxNumber;
    
            box.style.width = `${100 / dimension}%`;
            box.style.height = `${100 / dimension}%`;
    
            container.appendChild(box);
            boxNumber++;
        }
    }
}
createGrid(dimension);

document.querySelector("button").addEventListener("click",chooseDimension);
document.addEventListener("mouseover",changeColor);
document.addEventListener("mouseout",resetColor);

function changeColor(e){
    var hoverId = e.target.id;
    console.log(hoverId);
    if (hoverId && e.target.classList.contains("box")){
        var hoveredBox = document.getElementById(hoverId);
        hoveredBox.style.backgroundColor = "red";
    }
}

function resetColor(e){
    var resetId = e.target.id;
    var resetedBox = document.getElementById(resetId);
    resetedBox.style.backgroundColor = "white";
}

function chooseDimension(e){
    let newDimension = prompt("Choose Dimension (2-100)");
    if (newDimension){
        dimension = parseInt(newDimension);
        if (!isNaN(dimension) && dimension >= 2 && dimension<=100){
            createGrid(dimension);
        }
        else{
            alert("Enter dimension between 2 and 100");
        }
    }


    if (e.target.classList.contains("button")){
        const dimension = prompt("Choose Dimension");
        console.log(dimension);
    }
    else{
        dimension = 16
    }
    return dimension;
}