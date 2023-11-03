function iphoneQuantiyBtn(isIncrease){
    const quantitynumber=document.getElementById('quantity');
    const quantityTOnumber=quantitynumber.value;
    const PreviousstringToNumber=parseInt(quantityTOnumber);
    let newPhoneNumber;
    if(isIncrease===true){
       newPhoneNumber=PreviousstringToNumber +1;
    }
else{
        newPhoneNumber=PreviousstringToNumber-1;
    }
    quantitynumber.value=newPhoneNumber;
    return newPhoneNumber;
}

function updateTotalPhonePrice(newPhoneNumber){
    const totalPhoneQuantityPrice= newPhoneNumber*1219;
const priceElement=document.getElementById('total-quantity-amount');
    priceElement.innerText=totalPhoneQuantityPrice;
}

document.getElementById('iphone-plush-btn').addEventListener('click',function(){
   const newPhoneNumber= iphoneQuantiyBtn(true);

   updateTotalPhonePrice(newPhoneNumber);
});
document.getElementById('iphone-minus-btn').addEventListener('click',function(){
   const newPhoneNumber=  iphoneQuantiyBtn(false);
   updateTotalPhonePrice(newPhoneNumber);
})
// !----------------------End phone section ------------------------------------------------

// !------------------------Start Case section ---------------------------------------------
function phoneCaseupdate(){
    const getQuantityfield=document.getElementById('case-quantity');
    const getQuantityValue=getQuantityfield.value;
    const PreviousQuantityNumber=parseInt(getQuantityValue);
    let newCaseQuantity;
if(isIncrease===true){
    newCaseQuantity=PreviousQuantityNumber+1;
}else{
    newCaseQuantity=PreviousQuantityNumber-1;
}
getQuantityfield.value=newCaseQuantity;
return newCaseQuantity

}