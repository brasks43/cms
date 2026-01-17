// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Form + hint
const contactForm = document.getElementById("contactForm");
const formHint = document.getElementById("formHint");
const copyEmailBtn = document.getElementById("copyEmailBtn");

if (contactForm && formHint) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formHint.textContent =
      "Mockup only: this form isn't wired to send yet. Email info@nursinghomestaffinsider.com with your request.";
  });
}

if (copyEmailBtn && formHint) {
  copyEmailBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("info@nursinghomestaffinsider.com");
      formHint.textContent = "Copied: info@nursinghomestaffinsider.com";
    } catch {
      formHint.textContent =
        "Could not copy automatically. Email: info@nursinghomestaffinsider.com";
    }
  });
}
