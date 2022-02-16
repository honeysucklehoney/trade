console.log("hi");

const para = document.createElement("p");

function brick(){
  var jjup = document.getElementById('JohnnyJumpUps');
  var brickmaker = document.getElementById('Block1');

      jjup.style.display = "none";
      brickmaker.style.color="white";
      brickmaker.style.textShadow="2px 2px 5px black";
      // alert("Good Job :)");

const texture = document.createTextNode("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ");
para.appendChild(texture);
const element = brickmaker;
element.appendChild(para);


}

function unbrick() {

var jjup = document.getElementById('JohnnyJumpUps');
var brickmaker = document.getElementById('Block1');
var defaultText = '';
const undo = defaultText

jjup.style.display ="block";
para.innerHTML= defaultText;


}

// const para = document.createElement("p");
//
// function brick(){
//   var jjup = document.getElementsByClassName('JohnnyJumpUps');
//   var brickmaker = document.getElementsByClassName('Block')
//   var i=brickmaker.length;
//   var y=jjup.length;
//
//       jjup[y].style.display="none";
//       brickmaker[i].style.color="white";
//       brickmaker[i].style.textShadow="2px 2px 5px black";
//       // alert("Good Job :)");
//
// const texture = document.createTextNode("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ");
// para.appendChild(texture);
// const element = brickmaker[i];
// element.appendChild(para);
//
//
// }
//
// function unbrick() {
//
//   var jjup = document.getElementsByClassName('JohnnyJumpUps');
//   var brickmaker = document.getElementsByClassName('Block')
//   var i=brickmaker.length;
//   var y=jjup.length;
//   var defaultText = '';
// const undo = defaultText
//
// jjup[y].style.display="block";
// para.innerHTML= defaultText;
//
//
// }
