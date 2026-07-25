const contactForm = document.querySelector(".contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", (event) => {


  event.preventDefault();


  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();


  if (name === "" || email === "" || message === "") {
    formMessage.className = "form-message error";
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regular expression used for email validation

  if (!emailPattern.test(email)) {
    formMessage.className = "form-message error";
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }


  if (message.length < 10) {
    formMessage.className = "form-message error";
    formMessage.textContent = "Message must be at least 10 characters long.";
    return;
  }



  const submission = {
    name,
    email,
    message
  };

  formMessage.className = "form-message success";
  formMessage.textContent = "Message sent successfully!";


  saveSubmission(submission);

  contactForm.reset();
});


function saveSubmission(submission) {
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];

  submissions.push(submission);

  localStorage.setItem("submissions", JSON.stringify(submissions));
}