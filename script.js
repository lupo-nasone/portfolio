document.onkeyup=function(e){if(e.ctrlKey&&e.which==88){window.location.href="./pages/ciao.html";}}

let n=true;

function discord(){
    movimento()
    gsap.to("#nuovoimg", {duration: 1, opacity: 0});
    
    function cambiaimg(){
        document.getElementById("nuovoimg").src ="images/discord.png";
    }
    setTimeout(cambiaimg, 1000);
    gsap.to("#nuovoimg", {duration: 1, opacity: 1, delay: 1});
} 



function github(){
    movimento()
    gsap.to("#nuovoimg", {duration: 1, opacity: 0});
    function cambiaimg(){
        document.getElementById("nuovoimg").src ="images/github.png";
    }
    setTimeout(cambiaimg, 1000);
    gsap.to("#nuovoimg", {duration: 1, opacity: 1, delay: 1});
}


function instagram(){
    movimento()
    gsap.to("#nuovoimg", {duration: 1, opacity: 0});
    setTimeout(()=>{
        document.getElementById("nuovoimg").src ="images/instagram.png";
    }, 1000);
    gsap.to("#nuovoimg", {duration: 1, opacity: 1, delay: 1});
}


function youtube(){
    movimento()
    gsap.to("#nuovoimg", {duration: 1, opacity: 0});
    function cambiaimg(){
        document.getElementById("nuovoimg").src ="images/youtube.png";
    }
    setTimeout(cambiaimg, 1000);
    gsap.to("#nuovoimg", {duration: 1, opacity: 1, delay: 1});
}
function movimento(){
    if(n){
        gsap.to(".socialedes", {duration: 1, x:"800px"});
    }
    if(!n){
        gsap.to(".socialedes", {duration: 1, x:0});
    }
    n=!n;
}