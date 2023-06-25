const question1 = "Are you happy?";
const question2 = "Are you unhappy because of something that is out of your control?";
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