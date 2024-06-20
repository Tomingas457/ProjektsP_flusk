function atjaunotIetvaru(which) {
  document.getElementById("lapas_saturs").innerHTML = '<object id="lapas" type="text/html" data="' + which.href + '"></object>';
}

window.onload = function() {
  zimetuzcanvas();
    var navLinks = document.querySelectorAll('.topnav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }

function zimetuzcanvas() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle="green";
  ctx.fillRect(10, 10, 200, 200);
}

function Taisnsturis() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle="red"; //formas krāsa
  ctx.lineWidth = 20;
  ctx.strokeRect(220, 10, 200, 200); //Līnijas krāsa apkārt
  
}

function aplis() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(310, 100, 50, 0, 2*Math.PI);
  ctx.fillStyle="yellow";
  ctx.strokeStyle="black";
  ctx.lineWidth=15; //līnijas biezums
  ctx.stroke(); //lai parādītos līnijas krāsa apkārt
  ctx.fill(); //lai parādītu iekšējo krāsu
}

function linija() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.lineTo(250, 350);
  ctx.strokeStyle="purple";
  ctx.lineWidth = 10;
  ctx.stroke();
}

function teksts() {
  var canvas = document.getElementById("zimejums");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle="blue";
  ctx.font="40px Arial";
  ctx.fillText("Šis ir JavaScript teksts!", 50, 350);
}

function aprekins() {
  let vards = document.getElementById("vards").value;
  let uzvards = document.getElementById("uzvards").value;
  let pirmais = parseFloat(document.getElementById("a").value); /* pirmais skaitlis */
  let otrais = parseFloat(document.getElementById("b").value); /* otrai skaitlis */
  if (!vards.match(/^\S[a-zA-Zā-žĀ-Ž\s]+$/)) {
    alert("Vārds satur nederīgas rakstzīmes!");
    return;
  }
  
  if (!uzvards.match(/^\S[a-zA-Zā-žĀ-Ž\s]+$/)) {
    alert("Uzvārds nav ievadīts pareizi!");
    return;
  }
  
  if (pirmais === "" || otrais === "" || isNaN(pirmais) || isNaN(otrais)) {
    alert("Lūdzu ievadi skaitli");
    return
  }
  
  if (!Number.isInteger(Number(pirmais)) || !Number.isInteger(Number(otrais))) {
    alert("Ievadi veselu skaitli!");
    return
  }
  
  let sum = pirmais * otrais;
  console.log("Tevi sauc: " + vards + uzvards + " Atbilde ir:" + sum);
  document.getElementById("rezultats").innerHTML = "Tevi sauc: " + vards +" "+ uzvards + "<br> Tu ievadīji a vērtību: " + pirmais + " <br> un otrā vērtība "+ otrais +"<br><br> Atbilde ir: " + sum;
}

let age = 18;

if (age < 18) {
  console.log("Nepilngadīgs");
} else if (age >= 18 && age < 65 || age<=10) { /* && ir "and" un || ir "or"*/
  console.log("Pilngadīgs");
} else {
  console.log("Pensionārs");
}

for(let i = 0; i <= 10; i++) {
  console.log(i);
  if (i==5) {
    console.log("Cipars ir pieci");
  }
}

let j = 0;
while (j <= 10) {
  console.log("Vērtības: " +j);
  j++;
}

let k = 8;

do {
  console.log("Do while: " +k);
  k++;
} while(k<10)

let skaitlis = [6,3,6,31,78,9];

for (let i = 0; i < skaitlis.length; i++) {
  console.log(skaitlis[i]);
  if (i==2) {
    console.log("ir");
  }
  if (skaitlis[i] == 31){
    console.log("IRRR");
  }
}