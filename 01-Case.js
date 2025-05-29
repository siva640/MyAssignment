function launchBrowser(browserName) {
    if (browserName.toLowerCase() === "chrome") {
        console.log("Launching Chrome browser...");
    } else {
        console.log(`Launching ${browserName} browser...`);
    }
}

// Function to run tests using switch case
function runTests(testType) {
    switch (testType.toLowerCase()) {
        case "smoke":
            console.log("Running Smoke tests...");
            break;
        case "sanity":
            console.log("Running Sanity tests...");
            break;
        case "regression":
            console.log("Running Regression tests...");
            break;
        default:
            console.log("Running Smoke tests by default...");
            break;
    }
}

// Example usage
launchBrowser("chrome");       // You can change this to firefox or edge, etc.
runTests("sanity");     