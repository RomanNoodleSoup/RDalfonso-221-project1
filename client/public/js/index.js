


/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
window.onload = function() {
  document.body.onkeyup = function checkKeyPress(e) {
    if (e.key == " " || e.code == "Space") {
      goToLocation('/feed');
    }

  }


  let fadeText = document.getElementById("fade_text");
  fadeText.addEventListener("click", () => {
    goToLocation('/feed');
  });
}





