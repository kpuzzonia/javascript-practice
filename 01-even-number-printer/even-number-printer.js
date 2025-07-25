// script to print out even numbers using a number that user enters as the end point

function evenNumbers() {
    // array that will store even numbers
    let listOfNumbers = [];

    // declare variable to hold the number that was input by user and parse as integer
    let userInputNumber = parseInt(document.getElementById('number').value);

    // identify the paragraph element where answer will be printed to
    let answer = document.getElementById('number-output');

    for (i=0; i <= userInputNumber; i++) {
        if (i % 2 == 0) {
            // add the even numbers to array
            listOfNumbers.push(i);
        }
    }

    answer.innerHTML = "The even numbers between 0 and " + userInputNumber + " are: <br>";
    answer.innerHTML += listOfNumbers.join('<br>');
}

function refresh() {
    location.reload();
}