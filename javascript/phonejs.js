
function iphoneQuantiyBtn(isIncrease){
    const quantitynumber=document.getElementById('quantity');
    const quantityTOnumber=quantitynumber.value;
    const PreviousstringToNumber=parseInt(quantityTOnumber);
    if(isIncrease===true){
        const increaseAddNewQuantiy=PreviousstringToNumber +1;
        quantitynumber.value=increaseAddNewQuantiy;
    }
    if(isIncrease===false){
        if(PreviousstringToNumber>0){
            const dicreaseTheQuantity=PreviousstringToNumber-1;
            quantitynumber.value=dicreaseTheQuantity;
        }
       
    }
}



document.getElementById('iphone-plush-btn').addEventListener('click',function(){
    iphoneQuantiyBtn(true);
});
document.getElementById('iphone-minus-btn').addEventListener('click',function(){
    iphoneQuantiyBtn(false);
    })

// document.getElementById('iphone-minus-btn').addEventListener('click',function(){
// const quantityMinus=document.getElementById('quantity');
// const getTheQuantityvalue=quantityMinus.value;
// const PreviousstringToNumber=parseInt(getTheQuantityvalue);
// const dicreaseTheQuantity=PreviousstringToNumber-1;
// quantityMinus.value=dicreaseTheQuantity;

// })