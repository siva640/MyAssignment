function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}


let inputNumber = 3; // You can change this value to test other numbers
let result = checkNumberType(inputNumber);
console.log(`The number ${inputNumber} is ${result}.`);