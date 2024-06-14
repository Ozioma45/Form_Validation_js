// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const countryInput = document.getElementById("country");
  const zipInput = document.getElementById("zip");
  const passwordInput = document.getElementById("password");
  const passwordConfirmationInput = document.getElementById(
    "password-confirmation"
  );
  const submitButton = document.getElementById("submit");
  const submitMessage = document.getElementById("submit-message");

  // Helper function to show error message and add error class
  function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = message;
    errorElement.style.display = "block";
    input.classList.add("error");
  }

  // Helper function to hide error message and remove error class
  function hideError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = "";
    errorElement.style.display = "none";
    input.classList.remove("error");
  }

  // Validation functions
  function validateEmail() {
    const email = emailInput.value;
    if (!email) {
      showError(emailInput, "Email is required.");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      showError(emailInput, "Email is invalid.");
      return false;
    } else {
      hideError(emailInput);
      return true;
    }
  }

  function validateCountry() {
    const country = countryInput.value;
    if (!country) {
      showError(countryInput, "Country is required.");
      return false;
    } else {
      hideError(countryInput);
      return true;
    }
  }

  function validateZip() {
    const zip = zipInput.value;
    if (!zip) {
      showError(zipInput, "Zip Code is required.");
      return false;
    } else if (!/^\d{5}$/.test(zip)) {
      showError(zipInput, "Zip Code is invalid.");
      return false;
    } else {
      hideError(zipInput);
      return true;
    }
  }

  function validatePassword() {
    const password = passwordInput.value;
    if (!password) {
      showError(passwordInput, "Password is required.");
      return false;
    } else if (password.length < 6) {
      showError(passwordInput, "Password must be at least 6 characters.");
      return false;
    } else {
      hideError(passwordInput);
      return true;
    }
  }

  function validatePasswordConfirmation() {
    const password = passwordInput.value;
    const passwordConfirmation = passwordConfirmationInput.value;
    if (!passwordConfirmation) {
      showError(
        passwordConfirmationInput,
        "Password confirmation is required."
      );
      return false;
    } else if (password !== passwordConfirmation) {
      showError(passwordConfirmationInput, "Passwords do not match.");
      return false;
    } else {
      hideError(passwordConfirmationInput);
      return true;
    }
  }

  // Add event listeners for validation
  emailInput.addEventListener("input", validateEmail);
  countryInput.addEventListener("input", validateCountry);
  zipInput.addEventListener("input", validateZip);
  passwordInput.addEventListener("input", validatePassword);
  passwordConfirmationInput.addEventListener(
    "input",
    validatePasswordConfirmation
  );

  // Form submit handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail();
    const isCountryValid = validateCountry();
    const isZipValid = validateZip();
    const isPasswordValid = validatePassword();
    const isPasswordConfirmationValid = validatePasswordConfirmation();

    if (
      isEmailValid &&
      isCountryValid &&
      isZipValid &&
      isPasswordValid &&
      isPasswordConfirmationValid
    ) {
      submitMessage.textContent =
        "High Five! 🖐️ Form is submitted successfully!";
      submitMessage.style.color = "green";
    } else {
      submitMessage.textContent = "Please fix the errors in the form.";
      submitMessage.style.color = "red";
    }
  });
});
