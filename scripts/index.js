const question1 = "Are you happy?";
const question2 = "Is this something you can control?";
document.getElementById("questionText").innerHTML = question1;

function clickNo() {
  if (document.getElementById("questionText").innerHTML === question2) {
    clickYes()
  }
  
  if (document.getElementById("questionText").innerHTML === question1 ) {
    document.getElementById("questionText").innerHTML = question2;
    //return;
  } 
}

function clickYes() {
    location.replace("pages/smile.html");
}