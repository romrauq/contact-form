// Get references to input fields and error texts:
const first_name_input = document.getElementById("first-name-input");
const first_name_error_text = document.getElementById("first_name_error_text");
const last_name_input = document.getElementById("last_name_input");
const last_name_error_text = document.getElementById("last_name_error_text");
const email_input = document.getElementById("email_input");
const email_error_text = document.getElementById("email-error-text");
const enquiry_radio = document.getElementById("enquiry_radio");
const request_radio = document.getElementById("request_radio");
const radio_error_text = document.getElementById("radio_error_text");
const message_input = document.getElementById("message_input");
const message_error_text = document.getElementById("message_error_text");
const checkbox_input = document.getElementById("checkbox_input");
const consent_error_text = document.getElementById("consent_error_text");

// Event listeners for input fields:
// first_name_input.addEventListener("input", validateNameInput);

// Function to calculate age:
function submitForm() {
	// Check if any input field is empty
	if (!first_name_input.value) {
		first_name_error_text.style.display = "block";
		// return;
	}
	if (!last_name_input.value) {
		last_name_error_text.style.display = "block";
		// return;
	}
	if (!email_input.value) {
		email_error_text.style.display = "block";
		// return;
	}
	// alert("Clicked");
}
