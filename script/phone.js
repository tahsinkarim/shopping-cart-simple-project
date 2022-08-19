document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newNumber = updateNumber(true, 'phone-number-field');
    updateTotalPrice(newNumber, 'phone-total', 1219);

    //Calculate Total
    calculateSubTotal()


})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newNumber = updateNumber(false, 'phone-number-field');
    updateTotalPrice(newNumber, 'phone-total', 1219);

    calculateSubTotal()
})