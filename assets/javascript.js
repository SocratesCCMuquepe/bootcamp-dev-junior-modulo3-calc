

function calc(operacao) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = 0;
    switch (operacao) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
    }
    document.getElementById("result").value = result;

    var history = document.getElementById("history");

    var newHistory = "<div>" + num1 + " " + operacao + " " + num2 + "" + " = " + result + "</div>";

    history.innerHTML = newHistory + history.innerHTML;

    if (history.children.length > 10) {
        history.removeChild(history.childNodes[10]);
    }
}
