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


let nameError = true;
let numberError = true;
let dateError = true;
let cvcError = true;

function errorCheckAndInsert(e, textfield) {


    if (textfield.id === "name" && textfield.value.length < 23) {
        cardName.textContent = textfield.value.toUpperCase();

        if (textfield.value.length === 0) {
            cardName.textContent = "JANE APPLESEED";
            nameError = true;
        } else {
            nameError = false;
        }
    } 
        

    // // updates card number on the front of the card
    else if (textfield.id === "number") {

        let errorText = displayError(textfield.value,textfield.value.length, numberErrorMsg.textContent, 20);
        if (errorText != "") {
            numberErrorMsg.textContent = errorText;
            numberError = true;
            return true;
        } else {
            numberError = false;
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

    // updates moneth & year on the front of the card
    if (textfield.id === "month" || textfield.id === "year") {

        let errorText = displayError(textfield.value,textfield.value.length, monthAndYearErrorMsg.textContent, 3);
        if (errorText != "") {
            monthAndYearErrorMsg.textContent = errorText;
            dateError = true;
            return true;
        } else {
            dateError = false;
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
            } 

            if (textfield.value.length === 0) {
                cardYear.textContent = "00";
            }
        }
    }

    // updates cvc number on the back of the card
    if (textfield.id === "cvc") {

        let errorText = displayError(textfield.value, textfield.value.length, cvcErrorMsg.textContent, 4);
        if (errorText != "") {
            cvcErrorMsg.textContent = errorText;
            cvcError = true;
            return true;
        } else {
            cvcError = false;
            cvcErrorMsg.textContent = "";
        }

        if (textfield.value.length <= 3) {
            cardCvc.textContent = textfield.value;
        }

        if (textfield.value.length === 0) {
            cardCvc.textContent = "000";
        }
    }
    
}

let errorFound = false;
let originalCardNum = "0000 0000 0000 0000";
textfields.forEach(textfield => {
    textfield.addEventListener("input", (e) => console.log(errorCheckAndInsert(e, textfield)));
});







// show complete state
const formDetials = document.querySelector(".details");
const completeState = document.querySelector(".complete-state");


const confirmBtn = document.querySelector(".confirm");
const continueBtn = document.querySelector(".continue");

confirmBtn.addEventListener("click", () => {

    console.log(nameError, numberError, dateError, cvcError);

    if (!(nameError || numberError || dateError || cvcError)) {
        formDetials.style = "display: none;";
        completeState.style = "display: flex;";
    }
});

continueBtn.addEventListener("click", () => {
    completeState.style = "display: none;";
    formDetials.style = "display: flex;";
});