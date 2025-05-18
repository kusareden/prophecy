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
  async function CheckSolution(solution) {
    let message = "";

    const encodedSolution = await digestMessage(solution)
    console.debug(encodedSolution)

    // Show modal based on user input
    switch (encodedSolution) {
      case "bf648e312779342bb0c687654e34338830c9a6df999f1d64bf3e2237e93e222a":
        const iframeNewspaper = document.createElement('iframe');
        iframeNewspaper.src = `${REPORTS_BASEPATH}the_columbia_post.pdf`;
        iframeNewspaper.style.width = "100%";
        iframeNewspaper.style.height = "90vh";
        iframeNewspaper.style.border = "none";
        content.appendChild(iframeNewspaper);

        modal.style.display = "block";
        break;
      case "ca9066873bf335f3c1d9f0f6986266ee50689a816763851d82791d3dbc31cbf5":
        const iframeProfiles = document.createElement('iframe');
        iframeProfiles.src = `${REPORTS_BASEPATH}profiles.pdf`;
        iframeProfiles.style.width = "100%";
        iframeProfiles.style.height = "90vh";
        iframeProfiles.style.border = "none";
        content.appendChild(iframeProfiles);

        modal.style.display = "block";
        break;
      case "a6b39fa8cb7ca966708528463ef77c3db94c52a959c97347f93b4715d6e11470":
        /*  const iframeProfiles = document.createElement('iframe');
         iframeProfiles.src = `${REPORTS_BASEPATH}profiles.pdf`;
         iframeProfiles.style.width = "100%";
         iframeProfiles.style.height = "90vh";
         iframeProfiles.style.border = "none";
         content.appendChild(iframeProfiles); */

        modal.style.display = "block";
        break;
      case "eaa22de66e34c450159b024a070c0b6ebf8ad9b50cdec3b803db6df85ac3ddeb":
        message = "THIS CODE CAN NOT BE USED HERE";
        break;
      case "1f0fb05f858637c5eba5b004630aab6c6d6634adb58af89ece0435ef1c62704f":
        message = "YOU HAVE ALREADY USED THIS SOLUTION";
        break;
      default:
        message = "Only those Chosen by The Authority God can grasp the true essence of the world!";
        break;
    }
    document.getElementById("message").innerText = message;
  }
}

/// ======== DIGEST GENERATOR ======== ///

// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#converting_a_digest_to_a_hex_string

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

// TO GENERATE A NEW MESSAGE
// await digestMessage(<NEW MESSAGE>)