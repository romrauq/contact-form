// Get references to input fields and error texts:
const first_name_input = document.getElementById("first_name_input");
const first_name_error_text = document.getElementById("first_name_error_text");
const last_name_input = document.getElementById("last_name_input");
const last_name_error_text = document.getElementById("last_name_error_text");
const email_input = document.getElementById("email_input");
const email_error_text = document.getElementById("email_error_text");
const enquiry_radio = document.getElementById("enquiry_radio");
const enquiry_div = document.getElementById("enquiry_div");
const request_radio = document.getElementById("request_radio");
const request_div = document.getElementById("request_div");
const radio_error_text = document.getElementById("radio_error_text");
const message_input = document.getElementById("message_input");
const message_error_text = document.getElementById("message_error_text");
const checkbox_input = document.getElementById("checkbox_input");
const consent_error_text = document.getElementById("consent_error_text");
const success_modal = document.getElementById("success-div");

// Event listeners for input fields:
// first_name_input.addEventListener("input", validateNameInput);

// Function to run on submit button pressed:
function submitForm() {
	// Check if any input field is empty
	if (!first_name_input.value) {
		first_name_input.style.border = "1px solid hsl(0, 66%, 56%)";
		first_name_error_text.style.display = "block";
	} else {
		first_name_input.style.border = "1px solid hsl(186, 15%, 59%)";
		first_name_error_text.style.display = "none";
	}

	if (!last_name_input.value) {
		last_name_input.style.border = "1px solid hsl(0, 66%, 56%)";
		last_name_error_text.style.display = "block";
	} else {
		first_name_input.style.border = "1px solid hsl(186, 15%, 59%)";
		last_name_error_text.style.display = "none";
	}

	if (!email_input.value) {
		email_input.style.border = "1px solid hsl(0, 66%, 56%)";
		email_error_text.style.display = "block";
	} else {
		first_name_input.style.border = "1px solid hsl(186, 15%, 59%)";
		email_error_text.style.display = "none";
	}

	// if (enquiry_radio.selected) {
	// 	enquiry_div.style.backgroundColor = "hsl(148, 38%, 91%)";
	// } else {
	// 	// radio_error_text.style.display = "block";
	// }

	if (!message_input.value) {
		message_input.style.border = "1px solid hsl(0, 66%, 56%)";
		message_error_text.style.display = "block";
		// return
	} else {
		first_name_input.style.border = "1px solid hsl(186, 15%, 59%)";
		message_error_text.style.display = "none";
	}

	if (!checkbox_input.checked) {
		consent_error_text.style.display = "block";
	} else {
		consent_error_text.style.display = "none";
	}

	success_modal.style.visibility = "visible";
}
