// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Define the correct answer
    const correctAnswer = "4";

    // Step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Make sure the user selected an option
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 5: Compare and display feedback
        const feedback = document.getElementById('feedback');

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "#28a745"; // Optional: green text
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "#dc3545"; // Optional: red text
        }
    } else {
        // Optional: prompt if no answer selected
        document.getElementById('feedback').textContent = "Please select an answer before submitting.";
        document.getElementById('feedback').style.color = "#ffc107"; // Yellow
    }
}

// Step 6: Attach event listener to the button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
