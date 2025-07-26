function showPage(pageId) {
  const sections = document.querySelectorAll(".page-section");
  sections.forEach(section => {
    section.style.display = section.id === pageId ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showPage("about");
});
