document.addEventListener("DOMContentLoaded", function () {
    const cd = document.getElementById("cdToggle");
    const songList = document.getElementById("songList");
  
    cd.addEventListener("click", () => {
      // Toggle the "show" class
      songList.classList.toggle("show");
  
      // Spin the CD
      cd.classList.add("spin");
      setTimeout(() => {
        cd.classList.remove("spin");
      }, 1500); // Match with your CSS spin duration
    });
  });
  
  
  
  