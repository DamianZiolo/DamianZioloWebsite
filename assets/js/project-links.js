document.addEventListener("DOMContentLoaded", () => {
  const slugify = (value) => value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  document.querySelectorAll("#portfolio details.project").forEach((project) => {
    const title = project.querySelector(".summary-text h3")?.textContent?.trim();
    if (!title) return;

    const slug = slugify(title);
    project.dataset.slug = slug;
    const summary = project.querySelector("summary");
    summary.setAttribute("aria-label", `Open ${title} project page`);

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = `project.html?project=${encodeURIComponent(slug)}`;
    });

    summary.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = `project.html?project=${encodeURIComponent(slug)}`;
      }
    });
  });
});
