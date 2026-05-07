document.getElementById("calculate").addEventListener("click", function () {
    const numberA = Number(document.getElementById("number-a").value);
    const numberB = Number(document.getElementById("number-b").value);
    const operation = document.getElementById("operation").value;
    const result = document.getElementById("result");
    let value;

    if (operation === "add") {
        value = numberA + numberB;
    } else if (operation === "subtract") {
        value = numberA - numberB;
    } else if (operation === "multiply") {
        value = numberA * numberB;
    } else if (operation === "divide") {
        if (numberB === 0) {
            result.textContent = "Blad: dzielenie przez zero";
            return;
        }

        value = numberA / numberB;
    }

    result.textContent = `Wynik: ${value}`;
});
