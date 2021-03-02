function convertUsdToPound() {
    "use strict";
    var amount = document.getElementById("dollar").value,
        result = amount * 15.67,
        message = document.getElementById("message"),
        warMessage = document.getElementById("war message");
    message.innerHTML = "";
    warMessage.innerHTML = "";
    if (amount === "") {
        warMessage.innerHTML = "This Feild Can't Be Empty";
    } else if (isNaN(amount)) {
        warMessage.innerHTML = "This Feild Accept Numpers Only";
    } else if (amount === "0") {
        warMessage.innerHTML = "This Value Mustn't Be 0";
    } else if (amount < 0) {
        warMessage.innerHTML = "This Value Mustn't Be Negative Number";
    } else {
        message.innerHTML = amount + " Dollar Is Warth " + result + " Pound";
    }
}