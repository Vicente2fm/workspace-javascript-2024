document.addEventListener('DOMContentLoaded', function () {
    const inputNumber = document.getElementById('inputnumber3');
    const button = document.querySelector('input[value="Click for multiplication drill"]');

    button.addEventListener('click', function () {
        const n = parseInt(inputNumber.value);

        // Validate the input
        if (isNaN(n) || n < 1 || n > 10) {
            alert("Please enter a number between 1 and 10.");
            return;
        }

        // Generate the drill
        let drillHTML = "";
        for (let i = 1; i <= 10; i++) {
            drillHTML += `
                <p>${n} × ${i} = 
                    <input type="number" id="answer${i}" style="width: 50px;">
                </p>`;
        }
        drillHTML += `<button id="checkAnswers">Check Answers</button>`;
        document.getElementById('output').innerHTML = drillHTML;

        // Add event listener to check answers
        document.getElementById('checkAnswers').addEventListener('click', function () {
            for (let i = 1; i <= 10; i++) {
                const userAnswer = parseInt(document.getElementById(`answer${i}`).value);
                const correctAnswer = n * i;

                const result = userAnswer === correctAnswer ? "✔️" : `✖️ (Correct: ${correctAnswer})`;
                document.getElementById(`answer${i}`).style.backgroundColor = userAnswer === correctAnswer ? "lightgreen" : "lightcoral";
                document.getElementById(`answer${i}`).nextElementSibling?.remove(); // Clear previous feedback
                document.getElementById(`answer${i}`).insertAdjacentHTML("afterend", `<span>${result}</span>`);
            }
        });
    });
});
