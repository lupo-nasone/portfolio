let ctrlPressed = false;

document.addEventListener("keydown", (e)=>{
    switch (e.key) {
        case "Control":
            ctrlPressed = true; 
            break;
        case "x":
            if(ctrlPressed){
                 window.location.href="./pages/ciao.html";
            }
    }
})

document.addEventListener("keyup", (e)=>{
    switch (e.key) {
        case "Control":
            ctrlPressed = false; 
            break;
    }
})