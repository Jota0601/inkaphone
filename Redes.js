const icons = document.querySelectorAll(".social-icon");

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    const url = icon.getAttribute("data-url");
    window.open(url, "_blank");
  });
});