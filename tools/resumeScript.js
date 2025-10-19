document.addEventListener('DOMContentLoaded', function() {
  const dateDiv = document.getElementById('current-date');
  const today = new Date();
  dateDiv.textContent = "Résumé last updated: " + today.toLocaleDateString();
  console.log("Résumé page loaded successfully!");
});
            