console.log("Script Sarted");

function start() {
    console.log("click");

    
     //start level 1
    createCircle();
}


function createCircle() {
    //create an element
    let circle = document.createElement("div");
    circle.innerText = "18";
    document.body.appendChild(circle);
    circle.style.backgroundColor = "red";
    circle.style.widthj = "100px";
    circle.style.height = "100px";
}