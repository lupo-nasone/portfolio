


var card1 = false,
  card2 = false,
  card3 = false,
  card4 = false,
  card5 = false;
var soldi = 50;
var scommessa = 0;
var carte = [0, 0, 0, 0, 0];
var carte_giocatore = [0, 0, 0, 0, 0];
var valore = 0;
var mscambio = false;

var risultato, risultatos, valores;

function rimpiazzacarte() {
  if(carte_giocatore[0] == 1){
    document.getElementById("carta1mia").src = "nuvola.jpg";
  }
  else if (carte_giocatore[0] == 2) {
    document.getElementById("carta1mia").src = "fungo.png";
  }
  else if (carte_giocatore[0] == 3) {
    document.getElementById("carta1mia").src = "fiore.png";
  }
  else if (carte_giocatore[0] == 4) {
    document.getElementById("carta1mia").src = "mario.png";
  }
  else if (carte_giocatore[0] == 5) {
    document.getElementById("carta1mia").src = "stella.png";
  }
  if (carte_giocatore[1] == 1) {
    document.getElementById("carta2mia").src = "nuvola.jpg";
  }
  else if (carte_giocatore[1] == 2) {
    document.getElementById("carta2mia").src = "fungo.png";
  }
  else if (carte_giocatore[1] == 3) {
    document.getElementById("carta2mia").src = "fiore.png";
  }
  else if (carte_giocatore[1] == 4) {
    document.getElementById("carta2mia").src = "mario.png";
  }
  else if (carte_giocatore[1] == 5) {
    document.getElementById("carta2mia").src = "stella.png";
  }
  if (carte_giocatore[2] == 1) {
    document.getElementById("carta3mia").src = "nuvola.jpg";
  }
  else if (carte_giocatore[2] == 2) {
    document.getElementById("carta3mia").src = "fungo.png";
  }
  else if (carte_giocatore[2] == 3) {
    document.getElementById("carta3mia").src = "fiore.png";
  }
  else if (carte_giocatore[2] == 4) {
    document.getElementById("carta3mia").src = "mario.png";
  }
  else if (carte_giocatore[2] == 5) {
    document.getElementById("carta3mia").src = "stella.png";
  }
  if (carte_giocatore[3] == 1) {
    document.getElementById("carta4mia").src = "nuvola.jpg";
  }
  else if (carte_giocatore[3] == 2) {
    document.getElementById("carta4mia").src = "fungo.png";
  }
  else if (carte_giocatore[3] == 3) {
    document.getElementById("carta4mia").src = "fiore.png";
  }
  else if (carte_giocatore[3] == 4) {
    document.getElementById("carta4mia").src = "mario.png";
  }
  else if (carte_giocatore[3] == 5) {
    document.getElementById("carta4mia").src = "stella.png";
  }
  if (carte_giocatore[4] == 1) {
    document.getElementById("carta5mia").src = "nuvola.jpg";
  }
  else if (carte_giocatore[4] == 2) {
    document.getElementById("carta5mia").src = "fungo.png";
  }
  else if (carte_giocatore[4] == 3) {
    document.getElementById("carta5mia").src = "fiore.png";
  }
  else if (carte_giocatore[4] == 4) {
    document.getElementById("carta5mia").src = "mario.png";
  }
  else if (carte_giocatore[4] == 5) {
    document.getElementById("carta5mia").src = "stella.png";
  }
}

function rimpiazzacartesua(){

  if (carte[0] == 1) {
    document.getElementById("carta1sua").src = "nuvola.jpg";
  }
  else if (carte[0] == 2) {
    document.getElementById("carta1sua").src = "fungo.png";
  }
  else if (carte[0] == 3) {
    document.getElementById("carta1sua").src = "fiore.png";
  }
  else if (carte[0] == 4) {
    document.getElementById("carta1sua").src = "mario.png";
  }
  else if (carte[0] == 5) {
    document.getElementById("carta1sua").src = "stella.png";
  }
  if (carte[1] == 1) {
    document.getElementById("carta2sua").src = "nuvola.jpg";
  }
  else if (carte[1] == 2) {
    document.getElementById("carta2sua").src = "fungo.png";
  }
  else if (carte[1] == 3) {
    document.getElementById("carta2sua").src = "fiore.png";
  }
  else if (carte[1] == 4) {
    document.getElementById("carta2sua").src = "mario.png";
  }
  else if (carte[1] == 5) {
    document.getElementById("carta2sua").src = "stella.png";
  }
  if (carte[2] == 1) {
    document.getElementById("carta3sua").src = "nuvola.jpg";
  }
  else if (carte[2] == 2) {
    document.getElementById("carta3sua").src = "fungo.png";
  }
  else if (carte[2] == 3) {
    document.getElementById("carta3sua").src = "fiore.png";
  }
  else if (carte[2] == 4) {
    document.getElementById("carta3sua").src = "mario.png";
  }
  else if (carte[2] == 5) {
    document.getElementById("carta3sua").src = "stella.png";
  }
  if (carte[3] == 1) {
    document.getElementById("carta4sua").src = "nuvola.jpg";
  }
  else if (carte[3] == 2) {
    document.getElementById("carta4sua").src = "fungo.png";
  }
  else if (carte[3] == 3) {
    document.getElementById("carta4sua").src = "fiore.png";
  }
  else if (carte[3] == 4) {
    document.getElementById("carta4sua").src = "mario.png";
  }
  else if (carte[3] == 5) {
    document.getElementById("carta4sua").src = "stella.png";
  }
  if (carte[4] == 1) {
    document.getElementById("carta5sua").src = "nuvola.jpg";
  }
  else if (carte[4] == 2) {
    document.getElementById("carta5sua").src = "fungo.png";
  }
  else if (carte[4] == 3) {
    document.getElementById("carta5sua").src = "fiore.png";
  }
  else if (carte[4] == 4) {
    document.getElementById("carta5sua").src = "mario.png";
  }
  else if (carte[4] == 5) {
    document.getElementById("carta5sua").src = "stella.png";
  }
}

function start() {
  document.getElementById("carta1").checked = false;
  document.getElementById("carta2").checked = false;
  document.getElementById("carta3").checked = false;
  document.getElementById("carta4").checked = false;
  document.getElementById("carta5").checked = false;
  card1 = false;
  card2 = false;
  card3 = false;
  card4 = false;
  card5 = false;
  for (var i = 0; i < 5; i++) {
    carte[i] = Math.floor(Math.random() * 5) + 1;
    carte_giocatore[i] = Math.floor(Math.random() * 5) + 1;
  }
  document.getElementById("scommessa").style.display = "block";
  document.getElementById("confscommessa").style.display = "block";
  document.getElementById("start").style.display = "none";
  rimpiazzacarte();
}

function confscommessa() {
  
  if (
    document.getElementById("scommessa").value < 1 ||
    document.getElementById("scommessa").value > 5
  ) {
    alert("Inserisci un numero tra 1 e 5");
  } else {
    mscambio = true;
    scommessa = document.getElementById("scommessa").value;
    document.getElementById("scommessa").style.display = "none";
    document.getElementById("confscommessa").style.display = "none";
    document.getElementById("confscambiocarte").style.display = "block";
    
  }
}

function confscambiocarte() {
  rimpiazzacartesua()
  gsap.to(".mie", {
    duration: 0.5,
    y: 0,
  });

  document.getElementById("confscambiocarte").style.display = "none";
  document.getElementById("restart").style.display = "block";

  if (document.getElementById("carta1").checked == true) {
    carte_giocatore[0] = Math.floor(Math.random() * 5) + 1;
  }
  if (document.getElementById("carta2").checked == true) {
    carte_giocatore[1] = Math.floor(Math.random() * 5) + 1;
  }
  if (document.getElementById("carta3").checked == true) {
    carte_giocatore[2] = Math.floor(Math.random() * 5) + 1;
  }
  if (document.getElementById("carta4").checked == true) {
    carte_giocatore[3] = Math.floor(Math.random() * 5) + 1;
  }
  if (document.getElementById("carta5").checked == true) {
    carte_giocatore[4] = Math.floor(Math.random() * 5) + 1;
  }
  rimpiazzacarte();

  var ndnm = [0, 0, 0, 0, 0];
  var ndns = [0, 0, 0, 0, 0];
  var ndue = 0,
    tre = 0,
    quattro = 0,
    cinque = 0;
  var ndues = 0,
    tres = 0,
    quattros = 0,
    cinques = 0;

  for (var i = 0; i < 5; i++) {
    posizione = carte_giocatore[i];
    ndnm[posizione - 1]++;
  }
  for (var i = 0; i < 5; i++) {
    posizione = carte[i];
    ndns[posizione - 1]++;
  }

  for (var i = 0; i < 5; i++) {
    if (ndnm[i] == 2) ndue++;
    if (ndnm[i] == 3) tre++;
    if (ndnm[i] == 4) quattro++;
    if (ndnm[i] == 5) cinque++;
  }
  for (var i = 0; i < 5; i++) {
    if (ndns[i] == 2) ndues++;
    if (ndns[i] == 3) tres++;
    if (ndns[i] == 4) quattros++;
    if (ndns[i] == 5) cinques++;
  }

  if (ndue == 1 && tre == 0) {
    valore = 1;
    risultato = "DOPPIO";
  }
  if (ndue == 2) {
    valore = 2;
    risultato = "DOPPIA COPPIA";
  }
  if (tre == 1 && ndue != 1) {
    valore = 3;
    risultato = "TRIS";
  }
  if (tre == 1 && ndue == 1) {
    valore = 4;
    risultato = "FULL HOUSE";
  }
  if (quattro == 1) {
    valore = 5;
    risultato = "POKER";
  }
  if (cinque == 1) {
    valore = 6;
    risultato = "SESSO CON LUIGI";
  }

  if (ndues == 1 && tres == 0) {
    valores = 1;
    risultatos = "DOPPIO";
  }
  if (ndues == 2) {
    valores = 2;
    risultatos = "DOPPIA COPPIA";
  }
  if (tres == 1 && ndues != 1) {
    valores = 3;
    risultatos = "TRIS";
  }
  if (tres == 1 && ndues == 1) {
    valores = 4;
    risultatos = "FULL HOUSE";
  }
  if (quattros == 1) {
    valores = 5;
    risultatos = "POKER";
  }
  if (cinques == 1) {
    valores = 6;
    risultatos = "SESSO CON LUIGI";
  }


  if (valore > valores) {
    soldi = soldi + scommessa * 2;
    document.getElementById("denaro").innerHTML = soldi;
  }
  if (valore < valores) {
    soldi = soldi - scommessa;
    document.getElementById("denaro").innerHTML = soldi;
  }

  mscambio = false;
}
function selezione1() {
  if (card1 == false && mscambio == true) {
    document.getElementById("carta1").checked = true;
    card1 = true;
    gsap.to(".c1", {
      duration: 0.5,
      y: -50,
    });
  } else {
    document.getElementById("carta1").checked = false;
    card1 = false;
    gsap.to(".c1", {
      duration: 0.5,
      y: 0,
    });
  }
}
function selezione2() {
  if (card2 == false && mscambio == true) {
    document.getElementById("carta2").checked = true;
    card2 = true;
    gsap.to(".c2", {
      duration: 0.5,
      y: -50,
    });
  } else {
    document.getElementById("carta2").checked = false;
    card2 = false;
    gsap.to(".c2", {
      duration: 0.5,
      y: 0,
    });
  }
}
function selezione3() {
  if (card3 == false && mscambio == true) {
    document.getElementById("carta3").checked = true;
    card3 = true;
    gsap.to(".c3", {
      duration: 0.5,
      y: -50,
    });
  } else {
    document.getElementById("carta3").checked = false;
    card3 = false;
    gsap.to(".c3", {
      duration: 0.5,
      y: 0,
    });
  }
}
function selezione4() {
  if (card4 == false && mscambio == true) {
    document.getElementById("carta4").checked = true;
    card4 = true;
    gsap.to(".c4", {
      duration: 0.5,
      y: -50,
    });
  } else {
    document.getElementById("carta4").checked = false;
    card4 = false;
    gsap.to(".c4", {
      duration: 0.5,
      y: -0,
    });
  }
}
function selezione5() {
  if (card5 == false && mscambio == true) {
    document.getElementById("carta5").checked = true;
    card5 = true;
    gsap.to(".c5", {
      duration: 0.5,
      y: -50,
    });
  } else {
    document.getElementById("carta5").checked = false;
    card5 = false;
    gsap.to(".c5", {
      duration: 0.5,
      y: 0,
    });
  }
}

function restart() {
  document.getElementById("restart").style.display = "none";
  document.getElementById("start").style.display = "block";
  soldi -= scommessa;
  console.log(risultato);
  console.log(valore);
  console.log(risultatos);
  console.log(valores);
}
var sesso = false;
function apparire() {
  if (sesso == false) {
    gsap.to(".info", {
      duration: 0.5,
      x: 0,
    });
    sesso = true;
  }
  else {
    gsap.to(".info", {
      duration: 0.5,
      x: -220,
    });
    sesso = false;
  }
  

}
