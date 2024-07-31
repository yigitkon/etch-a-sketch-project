const dimension = 16;
let boxNumber = 1;
const container = document.querySelector("#container");
for(i=0;i<dimension;i++){
    for(j =0; j<dimension;j++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("id",boxNumber);
        box.textContent = ""
        //box.textContent ="Box #" + boxNumber;
        
        container.appendChild(box);
        boxNumber ++;
    }
}

const boxs = document.getElementsByClassName("box");
console.log(boxs)
boxs.style.color = "blue";