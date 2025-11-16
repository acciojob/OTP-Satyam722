//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

// Focus first input by default
inputs[0].focus();

inputs.forEach((input, index) => {

  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // Accept only digits
    if (!/^[0-9]$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move to next input
    if (index < inputs.length - 1 && value) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {

      if (input.value === "") {
        // Move to previous input if current is empty
        if (index > 0) {
          inputs[index - 1].value = "";
          inputs[index - 1].focus();
        }
      } else {
        // Clear current input
        input.value = "";
      }
    }
  });

});
