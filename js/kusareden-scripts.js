const REPORTS_BASEPATH = './public/resources/documents/'

window.onload = function () {
  // Get the the input when the user submits their answer
  document.getElementById("solutionForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload
    GetSolution();
  });

  // Get the modal
  let modal = document.getElementById("report");
  let content = document.getElementById("content");
  // Get the element that closes the modal
  let close = document.getElementsByClassName("close")[0];

  // When the user clicks on (x), close the modal
  close.onclick = function () {
    modal.style.display = "none";
    content.innerHTML = '';
  };

  // Convert the input to lower case
  function GetSolution() {
    let input = document.getElementById("solution").value.trim().toLowerCase();
    CheckSolution(input);
  }
  // Check if the input is a solution
  function CheckSolution(solution) {
    let message = "";

    // Show modal based on user input
    switch (solution) {
      case "aftermath":
        const iframeNewspaper = document.createElement('iframe');
        iframeNewspaper.src = `${REPORTS_BASEPATH}the_columbia_post.pdf`;
        iframeNewspaper.style.width = "100%";
        iframeNewspaper.style.height = "90vh";
        iframeNewspaper.style.border = "none";
        content.appendChild(iframeNewspaper);

        modal.style.display = "block";
        break;
      case "wanted":
        const iframeProfiles = document.createElement('iframe');
        iframeProfiles.src = `${REPORTS_BASEPATH}profiles.pdf`;
        iframeProfiles.style.width = "100%";
        iframeProfiles.style.height = "90vh";
        iframeProfiles.style.border = "none";
        content.appendChild(iframeProfiles);

        modal.style.display = "block";
        break;
      case "betrayal":
        message = "THIS CODE CAN NOT BE USED HERE";
        break;
      default:
        message = "Only those Chosen by The Authority God can grasp the true essence of the world!";
        break;
    }
    document.getElementById("message").innerText = message;
  }
}