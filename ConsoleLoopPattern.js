const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...

    while(true) {
        console.log("Welcome to Luke's Calculator");
        console.log("[1] Add numbers");
        console.log("[2] Subtract numbers");
        console.log("[3] Multiply numbers");
        console.log("[4] Exit");
        let ans = await askQuestion("Enter a number to select an option from the list above");
        if(ans == "1") {
            console.log();
            console.log("You have selected the Add numbers function");
            let input1 = await askQuestion("Enter the first number: ");
            let number1 = parseInt(input1);
            let input2 = await askQuestion("Enter the second number: ");
            let number2 = parseInt(input2);
            console.log(`The sum of ${number1} and ${number2} is ${number1 + number2}`);
            console.log();
        } else if (ans == "2") {
            console.log();
            console.log("You have selected the Subtract numbers function");
            let input1 = await askQuestion("Enter the first number: ");
            let number1 = parseInt(input1);
            let input2 = await askQuestion("Enter the second number: ");
            let number2 = parseInt(input2);
            console.log(`The difference between ${number1} and ${number2} is ${number1 - number2}`);
            console.log();
        } else if (ans == "2") {
            console.log();
            console.log("You have selected the Multiply numbers function");
            let input1 = await askQuestion("Enter the first number: ");
            let number1 = parseInt(input1);
            let input2 = await askQuestion("Enter the second number: ");
            let number2 = parseInt(input2);
            console.log(`The product of ${number1} and ${number2} is ${number1 * number2}`);
            console.log();
        } else if (ans == "4") {
            console.log("Thank you for using Luke's Calculator");
            break;
        } else {
            console.log("Sorry, we couldn't understand your input. Please enter a number from 1 - 4");
        }
    }
}

Program().then(() => {
    process.exit(0);
});