// Word reverser app

    // User enters sentence and submit button calls function
function wordReverser() {

    // save sentence to a variable
    let userSentence = document.getElementById('user-input').value;

    // split into an array of individual words and then reverse order
    let words = userSentence.split(" ");
    console.log(words);
    words.reverse();
    console.log(words);

    // create new sentance with reversed order
    let newSentence = words.join(" ");

    // output to user 
    let answer = document.getElementById("sentence-output");
    answer.innerHTML = newSentence;
}

// user pushes the reset button
function refresh() {
    location.reload();
}