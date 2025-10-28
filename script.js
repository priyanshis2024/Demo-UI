document.getElementById("deployBtn").addEventListener("click", () => {
  alert("🚀 Deployment started! Check your AWS pipeline for updates.");
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Thanks for contacting us! We'll reply soon.");
  e.target.reset();
});
