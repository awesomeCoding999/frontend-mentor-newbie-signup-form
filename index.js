const firstNameInput = document.getElementById("first-name");
const firstNameErrorMsg = document.getElementById("first-name-error-msg");
const lastNameInput = document.getElementById("last-name");
const lastNameErrorMsg = document.getElementById("last-name-error-msg");
const emailInput = document.getElementById("email");
const emailErrorMsg = document.getElementById("email-error-msg");
const passwordInput = document.getElementById("password");
const passwordErrorMsg = document.getElementById("password-error-msg");
const submitBtn = document.getElementById("submit-btn");
const errorMsgElements = document.querySelectorAll(".error-msg");
const allInputs = document
  .getElementById("form")
  .querySelectorAll("[required]");

const showEmptyInputStyles = (errorMsg, errorMsgParagraph, input) => {
  input.classList.add("error-input-styles");
  input.placeholder = "";
  errorMsgParagraph.textContent = `${errorMsg} cannot be empty`;
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // clear all error styles first
  [...allInputs].forEach((input) =>
    input.classList.remove("error-input-styles")
  );
  [...errorMsgElements].forEach((para) => (para.textContent = ""));

  if (!firstNameInput.value) {
    showEmptyInputStyles("First Name", firstNameErrorMsg, firstNameInput);
  }

  if (!lastNameInput.value) {
    showEmptyInputStyles("Last Name", lastNameErrorMsg, lastNameInput);
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    emailInput.placeholder = "";
    emailInput.classList.add("error-input-styles");
    emailErrorMsg.textContent = "Looks like this is not an email";
  }

  if (!passwordInput.value) {
    showEmptyInputStyles("Password", passwordErrorMsg, passwordInput);
  }
});
