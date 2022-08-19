function updateNumber(isIncrease , elementId){
    const numberField = document.getElementById(elementId);
    const numberString = numberField.value;
    const previousNumber = parseInt(numberString);

    let newNumber;

    if(isIncrease === true){
        newNumber = previousNumber + 1
    } else {
        newNumber = previousNumber - 1
    }

    numberField.value = newNumber;
    return newNumber;
}

function updateTotalPrice(newNumber, totalId, price){
    const totalPrice = newNumber * price;
    const caseTotalElement = document.getElementById(totalId);
    caseTotalElement.innerText = totalPrice
}

function getTextElementValueById(elementId){
    const totalElement = document.getElementById(elementId)
    const currentTotalString = totalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal ;
}

function setTextElementById(elementId, value){
    const subTotalElement = document.getElementById(elementId)
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    // Calculate Total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementById('sub-total', currentSubTotal);

    //Calculate Tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-total', taxAmount)
    // Amount after tax
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount)

}