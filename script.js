
let n=0;
function discord(){
    if(n%2==0){
        gsap.to(".socialedes", {duration: 1, x:"800px"});
    }
    if(n%2!=0){
        gsap.to(".socialedes", {duration: 1, x:0});
    }
    
    gsap.to("#nuovoimg", {duration: 1, opacity: 0});
    n++;
    function cambiaimg(){
        document.getElementById("nuovoimg").src ="images/discord.png";
    }
    setTimeout(cambiaimg, 1000);
    gsap.to("#nuovoimg", {duration: 1, opacity: 1, delay: 1});
    document.getElementById("info1").innerHTML = "Id  :  LupoNasone#6247";
} 



function github(){
    if(n%2==0){
        gsap.to(".socialedes", {duration: 1, x:"800px"});
    }
    if(n%2!=0){
        gsap.to(".socialedes", {duration: 1, x:0});
    }
    n++;
    gsap.to("#nuovoimg", {duration: 1, opacity: 0});
    function cambiaimg(){
        document.getElementById("nuovoimg").src ="images/github.png";
    }
    setTimeout(cambiaimg, 1000);
    gsap.to("#nuovoimg", {duration: 1, opacity: 1, delay: 1});
    document.getElementById("info1").innerHTML = "Id  :  lupo-nasone";
}


function instagram(){
    if(n%2==0){
        gsap.to(".socialedes", {duration: 1, x:"800px"});
    }
    if(n%2!=0){
        gsap.to(".socialedes", {duration: 1, x:0});
    }
    n++;
    gsap.to("#nuovoimg", {duration: 1, opacity: 0});
    function cambiaimg(){
        document.getElementById("nuovoimg").src ="images/instagram.png";
    }
    setTimeout(cambiaimg, 1000);
    gsap.to("#nuovoimg", {duration: 1, opacity: 1, delay: 1});
    document.getElementById("info1").innerHTML = "Id  :  matte_fagi_05";
}


function youtube(){
    if(n%2==0){
        gsap.to(".socialedes", {duration: 1, x:"800px"});
    }
    if(n%2!=0){
        gsap.to(".socialedes", {duration: 1, x:0});
    }
    n++;
    gsap.to("#nuovoimg", {duration: 1, opacity: 0});
    function cambiaimg(){
        document.getElementById("nuovoimg").src ="images/youtube.png";
    }
    setTimeout(cambiaimg, 1000);
    gsap.to("#nuovoimg", {duration: 1, opacity: 1, delay: 1});
    document.getElementById("info1").innerHTML = "Id  :  MATTEO FAGINALI";
}