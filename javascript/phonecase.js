function phoneCaseupdate(isIncrease) {
    const getQuantityfield = document.getElementById('case-quantity');
    const getQuantityValue = getQuantityfield.value;
    const PreviousQuantityNumber = parseInt(getQuantityValue);
    let newCaseQuantity;
    if (isIncrease === true) {
        newCaseQuantity = PreviousQuantityNumber + 1;
    } else {
        newCaseQuantity = PreviousQuantityNumber - 1;
    }
    getQuantityfield.value = newCaseQuantity;
    return newCaseQuantity;
}
function updateTotalCasePrice(newCaseQuantity) {
    const totalCaseQuantityPrice = newCaseQuantity * 59;
    const priceElement = document.getElementById('quantity-price');
    priceElement.innerText = totalCaseQuantityPrice;
}

document.getElementById('case-plus').addEventListener("click", function () {
    const newCaseQuantity = phoneCaseupdate(true);

    updateTotalCasePrice(newCaseQuantity);
    calculateSubtotal();
})
document.getElementById('case-minus').addEventListener("click", function () {
    const newCaseQuantity = phoneCaseupdate(false);

    updateTotalCasePrice(newCaseQuantity);
    calculateSubtotal();
})