const form = document.querySelector(".contact-form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector("input[type='radio']:checked");
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;
  const errorMsg = document.querySelectorAll(".error-required");

  let isValid = true;

//   console.log(errorMsg);

  //   first name validation
  if (firstName === "") {
    isValid = false;
    document.querySelector("#first-name + .error-required").style.display =
      "block";
    document.querySelector("#first-name").style.border =
      "1px solid var(--c-red)";
  } else {
    document.querySelector("#first-name + .error-required").style.display =
      "none";
    document.querySelector("#first-name").style.border =
      "1px solid var(--c-grey-medium)";
  }

  //   last name validation
  if (lastName === "") {
    isValid = false;
    document.querySelector("#last-name + .error-required").style.display =
      "block";
    document.querySelector("#last-name").style.border =
      "1px solid var(--c-red)";
  } else {
    document.querySelector("#last-name + .error-required").style.display =
      "none";
    document.querySelector("#last-name").style.border =
      "1px solid var(--c-grey-medium)";
  }

  //   email validation
  if (!isvalidEmail(email)) {
    isValid = false;
    document.querySelector("#email + .error-required").style.display = "block";
    document.querySelector("#email").style.border = "1px solid var(--c-red)";
  } else {
    document.querySelector("#email + .error-required").style.display = "none";
    document.querySelector("#email").style.border =
      "1px solid var(--c-grey-medium)";
  }

  //   query type validation
  if (!queryType) {
    isValid = false;

    document.querySelector(".query-options + .error-required").style.display =
      "block";
  } else {
    document.querySelector(".query-options + .error-required").style.display =
      "none";
  }

  // message validation
  if (message === "") {
    isValid = false;

    document.querySelector("#message + .error-required").style.display =
      "block";
    document.querySelector("#message ").style.border = "1px solid var(--c-red)";
  } else {
    document.querySelector("#message + .error-required").style.display = "none";
    document.querySelector("#message ").style.border =
      "1px solid var(--c-grey-medium)";
  }

  //   consent validation
  if (!consent) {
    isValid = false;

    errorMsg[5].classList.add("form-error");
  } else {
    errorMsg[5].classList.remove("form-error");
  }

  //   Form validation
  if (isValid) {
    successMessage.classList.add("active");
    form.reset();
  }
});

// email validation function
const isvalidEmail = (email) => {
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegEx.test(email);
};
