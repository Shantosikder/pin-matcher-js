function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById("generate-pin").addEventListener("click", function(){
    const pin = getPin();
    // console.log(pin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener("click", function(event){
    const number = event.target.innerText;
    const typeNumberFiled = document.getElementById('type-number');
    const previousTypeNumber = typeNumberFiled.value;
    if(isNaN(number)){
        if(number == 'C'){
            typeNumberFiled.value = '';
        }else if(number == '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberFiled.value = remainingDigits;
        }
    }else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberFiled.value = newTypeNumber;
    }
});

document.getElementById('varify-pin').addEventListener('click', function(){
   const displayPinField = document.getElementById('display-pin');
   const currentPin = displayPinField.value;

   const typeNumberFiled = document.getElementById('type-number');
   const typeNumber = typeNumberFiled.value
   const pinSuccessMessage = document.getElementById('pin-success');
   const pinFailureMessage = document.getElementById('pin-failure');
   if(typeNumber == currentPin){
    pinSuccessMessage.style.display = 'block';
    pinFailureMessage.style.display = 'none';
   }else{
    pinFailureMessage.style.display = 'block';
    pinSuccessMessage.style.display = 'none';
   }
});