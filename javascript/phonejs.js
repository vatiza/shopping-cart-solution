function iphoneQuantiyBtn(isIncrease) {
    const quantitynumber = document.getElementById('quantity');
    const quantityTOnumber = quantitynumber.value;
    const PreviousstringToNumber = parseInt(quantityTOnumber);
    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = PreviousstringToNumber + 1;
    }
    else {
        newPhoneNumber = PreviousstringToNumber - 1;
    }
    quantitynumber.value = newPhoneNumber;
    return newPhoneNumber;
}

function updateTotalPhonePrice(newPhoneNumber) {
    const totalPhoneQuantityPrice = newPhoneNumber * 1219;
    const priceElement = document.getElementById('total-quantity-amount');
    priceElement.innerText = totalPhoneQuantityPrice;
}

document.getElementById('iphone-plush-btn').addEventListener('click', function () {
    const newPhoneNumber = iphoneQuantiyBtn(true);
    updateTotalPhonePrice(newPhoneNumber);
    calculateSubtotal();



});
document.getElementById('iphone-minus-btn').addEventListener('click', function () {
    const newPhoneNumber = iphoneQuantiyBtn(false);
    updateTotalPhonePrice(newPhoneNumber);
    calculateSubtotal();
})
// !----------------------End phone section ------------------------------------------------

