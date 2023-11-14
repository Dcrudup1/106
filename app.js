
function sayHello(name, lastName) {
    console.log("hello " + name + " " + lastName);
}

// Practice -- console.log numbers from one to 20, except 7 and 13
function printNumbers() {
    let numbers = [12, 4, 123, 456, 234, 56, 12, 87, 124, 865, 233, 788, 43, 91, 544, 78];

    for (let i = 1; i < 21; i++) {
        if (i !== 7 && i !== 13) {
            console.log(i);
        }
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]; // Fix: Corrected the variable name
        console.log(number);
        sum += number;
    }
    console.log("the total: " + sum);
}

function init() {
    console.log("hello there! from the init");
    const x = "Dedrick";
    sayHello(x, "Crudup");

    printNumbers();
}

window.onload = init; // Fix: Corrected the typo in window.onload
