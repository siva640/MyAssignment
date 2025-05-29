function isOddOrEven(number) {
    // Use modulus operator to check divisibility by 2
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
let inputNumber = 7; // You can change this number to test other values
let result = isOddOrEven(inputNumber);
console.log(`The number ${inputNumber} is ${result}.`);