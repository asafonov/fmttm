document.addEventListener("DOMContentLoaded", function(event) {
  const drumsController = new DrumsController();
  const drumsView = new DrumsView(drumsController.model);
});
