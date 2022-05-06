const mario = document.getElementById("fag");
const imgmario = document.getElementById("mario");
const playmario = document.getElementById("play");

mario.onmouseover = function appmario() {
    gsap.to("#mario", {
    duration: 1,
    y: 0,
    ease: "back.out(1.7)",
    });
};


mario.onmouseout = function sparmario() {
  gsap.to("#mario", {
    delay: 2,
    duration: 1,
    y: 300,
    ease: "back.out(1.7)",
  });
};

function game1() {
    window.location.href = "./luigi/luigi.html";
}


