function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

function isValidNumber(input) {
    return !isNaN(input) && Number.isInteger(Number(input)) && input >= 0;
}

function promptForNumber() {
    let input = prompt("Enter a non-negative integer to calculate its factorial:");
    
    if (input === null) {
        document.getElementById("result").textContent = "Operation cancelled.";
        return;
    }

    if (!isValidNumber(input)) {
        alert("Invalid input. Please enter a non-negative integer.");
        promptForNumber();
        return;
    }

    let number = parseInt(input);
    let factorial = calculateFactorial(number);
    
    document.getElementById("result").textContent = `The factorial of ${number} is ${factorial}.`;
}

// Start the program
promptForNumber();
