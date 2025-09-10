document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("response");

  if (!name || !email || !message) {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
    return;
  }

  // Simulate successful submission
  response.textContent = `Thanks, ${name}! I will get back to you soon.`;
  response.style.color = "green";

  // Clear form fields
  document.getElementById("contactForm").reset();
});
