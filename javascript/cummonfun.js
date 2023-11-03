function getTextElementbyId(element_id) {
    const phoneTotalElement = document.getElementById(element_id);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const curretPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotalString;

}
function setTextElementbyId(element_id,value){
  const subTotalElement=document.getElementById(element_id);
  subTotalElement.innerText=value  
}
function calculateSubtotal() {
    const currentPhoneTotal = getTextElementbyId('total-quantity-amount');
    const currentCaseTotal = getTextElementbyId('quantity-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementbyId('sub-total',currentSubTotal);    

    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
    //calclulate tax
    const  taxAmountString=(currentSubTotal*0.1).toFixed(2);
    const taxAmount=parseFloat(taxAmountString);

    setTextElementbyId('tax',taxAmount);
    const finalAmount=currentSubTotal+taxAmount;
    setTextElementbyId('final-amount',finalAmount)


}