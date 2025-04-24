const REPORTS_BASEPATH = '../public/resources/documents/'

const reports = [];
for (let j = 0; j < 9; j++) {
  reports.push()
}

window.onload = function () {
  // Get the the input when the user submits their answer
  document.getElementById("submit").addEventListener("click", function () {
    GetSolution();
  });

  // Get the modal
  let modal = document.getElementById("report");
  // Get the element that closes the modal
  let close = document.getElementsByClassName("close")[0];
  // When the user clicks on (x), close the modal
  close.onclick = function () {
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  // TODO: see if necessary because we might make the documents interactive
  /* window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } */

  // convert the input to lower case
  function GetSolution() {
    let input = document.getElementById("solution").value.trim().toLowerCase();
    CheckSolution(input);
  }
  // Check if the input is a solution
  function CheckSolution(solution) {
    const image = document.getElementById("reportImage");

    let message = "";
    let imgSrc = "";

    switch (solution) {
      case "eye":
        modal.style.display = "flex";
        imgSrc = `${REPORTS_BASEPATH}report1.png`;
        break;
      case "rat":
        modal.style.display = "flex";
        imgSrc = `${REPORTS_BASEPATH}report2.png`;
        break;
      case "king":
        modal.style.display = "flex";
        imgSrc = `${REPORTS_BASEPATH}report3.png`;
        break;
      case "betrayal":
        message = "THIS CODE CAN NOT BE USED HERE";
        break;
      default:
        message = "Only those Chosen by The Authority God can grasp the true essence of the world!";
        break;
    }
    document.getElementById("text").innerText = message;
    image.src = imgSrc;
  }
}