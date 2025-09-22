function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}

// Simple form handler (demo only)
document.getElementById('enrollForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for enrolling!');
  this.reset();
});
