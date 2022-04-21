document.onkeyup = function (e) {
  if (e.ctrlKey && e.which == 88) {
    window.location.href = "segretume/pupucaca.html";
  }
};
// prettier
var notte = false;

function darker() {
  if (notte == false) {
    document.getElementById('quarta').src = './backgrounddark/foto1.png';
    document.getElementById('terza').src = './backgrounddark/foto2.png';
    document.getElementById('seconda').src = './backgrounddark/foto3.png';
    document.getElementById('prima').src = './backgrounddark/foto4.png';
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(0,0,70)';
    notte = true;
  }
  else {
    document.getElementById('quarta').src = 'background/layer_4.png';
    document.getElementById('terza').src = 'background/layer_3.png';
    document.getElementById('seconda').src = 'background/layer_2.png';
    document.getElementById('prima').src = 'background/layer_1.png';
    document.getElementsByTagName("body")[0].style.backgroundColor = "#3193e2";
    notte = false;
  }
  
}