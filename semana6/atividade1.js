document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.height = "100vh";
    document.body.appendChild(container);

    const calc = document.createElement("div");
    calc.style.width = "300px";
    calc.style.backgroundColor = "#000";
    calc.style.borderRadius = "10px";
    calc.style.padding = "10px";
    container.appendChild(calc);

    const display = document.createElement("div");
    display.style.height = "60px";
    display.style.backgroundColor = "black";
    display.style.color = "white";
    display.style.fontSize = "40px";
    display.style.textAlign = "right";
    display.style.padding = "10px";
    display.textContent = "0";
    calc.appendChild(display);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.style.display = "grid";
    buttonsContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
    buttonsContainer.style.gap = "10px";
    buttonsContainer.style.marginTop = "10px";
    calc.appendChild(buttonsContainer);

    const buttons = [
        "AC", "+/-", "%", "÷",
        "7", "8", "9", "×",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ",", "="
    ];

    let currentExpression = "";
    let lastInputWasOperator = false;

    buttons.forEach(text => {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.style.height = "60px";
        btn.style.fontSize = "20px";
        btn.style.borderRadius = "30px";
        btn.style.border = "none";
        btn.style.cursor = "pointer";
        btn.style.color = "white";

        if (!isNaN(text) || text === ",") {
            btn.style.backgroundColor = "#333";
        } else if (["÷", "×", "-", "+", "="].includes(text)) {
            btn.style.backgroundColor = "#ff9500";
        } else {
            btn.style.backgroundColor = "#a5a5a5";
            btn.style.color = "black";
        }

        btn.addEventListener("click", () => {
            if (text === "AC") {
                currentExpression = "";
                display.textContent = "0";
                lastInputWasOperator = false;
            } else if (text === "+/-") {
                if (currentExpression) {
                    currentExpression = String(-parseFloat(currentExpression.replace(",", ".")));
                    display.textContent = currentExpression.replace(".", ",");
                }
            } else if (text === "%") {
                currentExpression = String(parseFloat(currentExpression.replace(",", ".")) / 100);
                display.textContent = currentExpression.replace(".", ",");
            } else if (["÷", "×", "-", "+"].includes(text)) {
                if (!lastInputWasOperator) {
                    currentExpression += text === "÷" ? "/" : text === "×" ? "*" : text;
                    display.textContent = currentExpression.replace(".", ",");
                    lastInputWasOperator = true;
                }
            } else if (text === "=") {
                try {
                    currentExpression = eval(currentExpression.replace(/,/g, ".")).toString();
                    display.textContent = currentExpression.replace(".", ",");
                } catch {
                    display.textContent = "Erro";
                    currentExpression = "";
                }
            } else if (text === ",") {
                let lastNumber = currentExpression.split(/[-+*/]/).pop();
                if (!lastNumber.includes(".")) {
                    currentExpression += ".";
                    display.textContent = currentExpression.replace(".", ",");
                }
            } else {
                currentExpression += text;
                display.textContent = currentExpression.replace(/\./g, ",");
                lastInputWasOperator = false;
            }
        });

        buttonsContainer.appendChild(btn);
    });
});
