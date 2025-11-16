const inputs = document.querySelectorAll(".code");

// Focus the first input when page loads
inputs[0].focus();

// Loop through all inputs
inputs.forEach((input, index) => {

  // Move to next input automatically
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Move to previous input on Backspace
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      input.value = "";

      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
