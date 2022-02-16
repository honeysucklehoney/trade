console.log("hi");



function brick(){
  var jjup = document.getElementById('JohnnyJumpUps');
  var brickmaker = document.getElementById('Block1');

      jjup.style.display = "none";
      brickmaker.style.color="white";
      brickmaker.style.textShadow="2px 2px 5px black";
      // alert("Good Job :)");

const para = document.createElement("p");
const texture = document.createTextNode("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ");
para.appendChild(texture);
const element = brickmaker;
element.appendChild(para);


}

function unbrick() {

var jjup = document.getElementById('JohnnyJumpUps');
var brickmaker = document.getElementById('Block1');
var defaultText = 'ma';
const undo = defaultText

jjup.style.display ="block";
undo.appendChild(para);


}
