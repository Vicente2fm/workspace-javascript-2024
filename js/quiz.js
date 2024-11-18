// Generate random integers
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Get the numbers
var M = randInt(300, 600);
var N = randInt(100, 300);
var K = randInt(0, 100);
alert("I'm here");

// Update the questions-- total, giveout, takeback
document.querySelector('#total').textContent = M.toString();
document.querySelector('#giveout').textContent = N.toString();
document.querySelector('#takeback').textContent = K.toString();

// Update the answers
var T = N + K;
var S = N - K;
// M - N + K, M - N - K, M - (N + K), M - (N - K)
document.querySelector('[value="1"]').nextSibling.textContent = M.toString() + "-" + N.toString() + "+" + K.toString();
document.querySelector('[value="2"]').nextSibling.textContent = M.toString() + "-" + N.toString() + "-" + K.toString();
document.querySelector('[value="3"]').nextSibling.textContent = M.toString() + "-" + T.toString();
document.querySelector('[value="4"]').nextSibling.textContent = M.toString() + "-" + S.toString();

// Pick the answer
function changeStyle(e) {
    e.preventDefault(); // Prevent the checkbox from being clicked
    var classname = this.getAttribute("class");
    alert("Clicked class: " + classname);
    if (classname == "answer") {
        this.setAttribute("class", "answer selected");
    } else {
        this.setAttribute("class", "answer");
    }
    // Test animation
    this.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(180deg)' }], { duration: 3000, fill: 'forwards' });
}

// Add answerlist
var answerlist = document.getElementsByClassName('answer');
for (var i = 0; i < answerlist.length; i++) {
    answerlist[i].addEventListener('click', changeStyle, false);
}
