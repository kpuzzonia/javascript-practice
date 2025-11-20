// Pseudocode

// split into an array of individual words 
// use a loop to go through each word and reverse order
// put sentence back together
// output to user 
// user pushes the reset button

function wordReverser() {
    // User enters sentence
    // submit button calls function
    // save sentence to a variable
    let userSentence = document.getElementById('user-input').value;
    console.log(userSentence);

    let words = userSentence.split(" ");
    console.log(words);

    words.reverse();
    console.log(words);

    let newSentence = words.join(" ");
    console.log(newSentence);

    let answer = document.getElementById("sentence-output");
    answer.innerHTML = newSentence;
}

function refresh() {
    location.reload();
}