// card number insert 
const textfields = document.querySelectorAll(".textfield");
const cardName = document.querySelector("#card-name");
const cardNum = document.querySelector("#card-num");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCvc = document.querySelector("#card-cvc"); 


const numberErrorMsg = document.querySelector("#number-error-msg");
const monthAndYearErrorMsg = document.querySelector("#month-and-year-error-msg");
const cvcErrorMsg = document.querySelector("#cvc-error-msg");


function displayError(value, length, text, maxLength) {
    // Error handling 
    if (length >= maxLength) {
        text = "Wrong format, too long" // shows error when card nuumber is too long
        return text;
    } 
    else if (isNaN(value.replace(/\s+/g, ''))) { // shows an error when a user enters a non-numeric value
        text = "Wrong format, numbers only"
        return text;
    }
    else {
        text = "";
        return text;
    }
}


let originalCardNum = "0000 0000 0000 0000";
textfields.forEach(textfield => {
    textfield.addEventListener("input", (e) => {


        if (textfield.id === "name" && textfield.value.length < 23) {
            cardName.textContent = textfield.value.toUpperCase();

            if (textfield.value.length === 0) {
                cardName.textContent = "JANE APPLESEED";
            }
        } 
            

        // card number 
        else if (textfield.id === "number") {

            let errorText = displayError(textfield.value,textfield.value.length, numberErrorMsg.textContent, 20);
            if (errorText != "") {
                numberErrorMsg.textContent = errorText;
                return;
            } else {
                numberErrorMsg.textContent = "";
            }


            if (textfield.value.length === 0) {
                cardNum.textContent = "0000 0000 0000 0000"; // resets the card number
            } 
            else if (textfield.value.length === 20){ 
                cardNum.textContent = textfield.value;
            }
            else {
                cardNum.textContent = textfield.value;
            }

            if (e.inputType != "deleteContentBackward") {
                if (textfield.value.length === 4 || textfield.value.length === 9 || textfield.value.length === 14) {
                    textfield.value += " "; 
                };
            }
        }

        if (textfield.id === "month" || textfield.id === "year") {

            let errorText = displayError(textfield.value,textfield.value.length, monthAndYearErrorMsg.textContent, 3);
            if (errorText != "") {
                monthAndYearErrorMsg.textContent = errorText;
                return;
            } else {
                monthAndYearErrorMsg.textContent = "";
            }


            if (textfield.id === "month") {
                if (textfield.value.length <= 2) {
                    cardMonth.textContent = textfield.value;
                }

                if (textfield.value.length === 0) {
                    cardMonth.textContent = "00";
                }
            }

            if (textfield.id === "year") {
                if (textfield.value.length <= 2) {
                    cardYear.textContent = textfield.value;
                } else {

                }

                if (textfield.value.length === 0) {
                    cardYear.textContent = "00";
                }
            }
        }


        if (textfield.id === "cvc") {

            let errorText = displayError(textfield.value, textfield.value.length, cvcErrorMsg.textContent, 4);
            if (errorText != "") {
                cvcErrorMsg.textContent = errorText;
                return;
            } else {
                cvcErrorMsg.textContent = "";
            }

            if (textfield.value.length <= 3) {
                cardCvc.textContent = textfield.value;
            }

            if (textfield.value.length === 0) {
                cardCvc.textContent = "000";
            }
        }
        
    })
})