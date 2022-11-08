let panels = document.querySelectorAll(".panel");

// Remove Active Class From All img And Add Class Active Only To Current img
panels.forEach((panel) => {
  panel.addEventListener("click", function removeActive() {
    panels.forEach((el) => {
      el.classList.remove("active");
    });
    this.classList.add("active");
  });
});
