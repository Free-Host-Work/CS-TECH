document.addEventListener("DOMContentLoaded", function () {
  // Use correct IDs and handle missing elements gracefully
  const menu = document.getElementById("navcontent"); // lowercase 'navcontent' as in HTML
  const toggle = document.getElementById("menuToggle");
  const closeIcon = document.getElementById("closeNav");

  if (toggle) {
    toggle.onclick = function (e) {
      e.stopPropagation();
      if (menu) menu.classList.add("active");
    };
  }

  if (close) {
    closeIcon.onclick = function (e) {
      e.stopPropagation();
      if (menu) menu.classList.remove("active");
    };
  }

  // Close sidebar if clicking outside
  document.addEventListener("click", function (e) {
    if (
      menu &&
      menu.classList.contains("active") &&
      !menu.contains(e.target) &&
      (!toggle || !toggle.contains(e.target))
    ) {
      menu.classList.remove("active");
    }
  });
});

