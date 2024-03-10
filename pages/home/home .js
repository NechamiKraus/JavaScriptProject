
// פרסומת
setTimeout(function () {
    const closeButton = document.getElementsByClassName("closee")[0];
    if (document.getElementById('timerModal')) {
      timerModal.style.display = "block";
      setTimeout(function () {
        timerModal.classList.add("show");
      }, 10);
  
  
      closeButton.addEventListener("click", function () {
        timerModal.classList.remove("show");
        setTimeout(function () {
          timerModal.style.display = "none";
        }, 300);
      });
    }
  }, 4000);