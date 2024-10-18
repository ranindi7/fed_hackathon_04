document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById("userNameInput").value;
    const email = document.getElementById("userEmailInput").value;
    const feedback = document.getElementById("userFeedbackInput").value;

    // Variables to store error messages
    let nameError = "";
    let emailError = "";
    let feedbackError = "";

    // Name validation: must not be empty
    if (name === "") {
        nameError = "Name is required.";
    }

    // Email validation: must contain "@" and "."
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError = "Please enter a valid email address.";
    }

    // Feedback validation: must not be empty
    if (feedback === "") {
        feedbackError = "Feedback is required.";
    }

    // Display error messages
    document.getElementById("invalidUsername").textContent = nameError;
    document.getElementById("invalidEmail").textContent = emailError;
    document.getElementById("invalidFeedback").textContent = feedbackError;

    // If no errors, form is considered valid
    if (!nameError && !emailError && !feedbackError) {
        alert("Form submitted successfully!");
    }
});
