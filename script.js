document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsDiv = document.getElementById('results-div');

    // Function to validate the phone number
    function isValidUSPhoneNumber(phoneNumber) {
        // Regular expression to match valid US phone numbers
        // This regex handles all the specified valid formats and rejects invalid ones.
        // Breakdown of the regex:
        // ^                 - Start of the string
        // (1\s?)?           - Optional country code '1' followed by an optional space.
        //                   - (1\s?) matches '1' or '1 '
        //                   - ? makes the entire group optional
        // (\d{3}|\(\d{3}\)) - Matches either three digits (e.g., 555) or three digits enclosed in parentheses (e.g., (555)).
        //                   - \d{3} matches exactly three digits
        //                   - \(\d{3}\) matches (555)
        // [-\s]?            - Optional hyphen or space separator after the area code.
        // \d{3}             - Matches the next three digits (e.g., 555).
        // [-\s]?            - Optional hyphen or space separator after the middle three digits.
        // \d{4}             - Matches the last four digits (e.g., 5555).
        // $                 - End of the string. Ensures no extra characters are allowed at the end.
        const phoneRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[ -\s]?\d{3}[ -\s]?\d{4}$/;

        return phoneRegex.test(phoneNumber);
    }

    // Event listener for the Check button
    checkBtn.addEventListener('click', () => {
        const inputValue = userInput.value.trim(); // Get input value and remove leading/trailing spaces

        if (inputValue === '') {
            alert('Please provide a phone number');
            return;
        }

        if (isValidUSPhoneNumber(inputValue)) {
            resultsDiv.textContent = `Valid US number: ${inputValue}`;
            resultsDiv.style.color = '#28a745'; // Green for valid
            resultsDiv.style.borderColor = '#28a745';
        } else {
            resultsDiv.textContent = `Invalid US number: ${inputValue}`;
            resultsDiv.style.color = '#dc3545'; // Red for invalid
            resultsDiv.style.borderColor = '#dc3545';
        }
    });

    // Event listener for the Clear button
    clearBtn.addEventListener('click', () => {
        userInput.value = ''; // Clear the input field
        resultsDiv.textContent = ''; // Clear the results div
        resultsDiv.style.color = '#333'; // Reset color
        resultsDiv.style.borderColor = '#ddd'; // Reset border color
    });
});