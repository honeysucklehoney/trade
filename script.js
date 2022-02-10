console.log("hi");

function brick(){

  var jjup = document.getElementById('JohnnyJumpUps');
  var brickmaker = document.getElementById('Block1');

      if (jjup.style.display === "none") {
        // jjup.style.display = "block";
        // brickmaker.innerHTML = "";
      }
      else {


      jjup.style.display = "none";
      brickmaker.style.color="white";
      brickmaker.style.textShadow="2px 2px 5px black";
      // alert("Good Job :)");



const para = document.createElement("p");
const texture = document.createTextNode("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ");
para.appendChild(texture);
const element = brickmaker;
element.appendChild(para);


// $("#glean").load(window.location.href+"#glean");
// location.reload();

      }


}
