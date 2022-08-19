
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newNumber = updateNumber(true, 'case-number-field');
    updateTotalPrice(newNumber , 'case-total', 59)

    calculateSubTotal()

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newNumber = updateNumber(false , 'case-number-field');
    updateTotalPrice(newNumber, 'case-total', 59)

    calculateSubTotal()
})