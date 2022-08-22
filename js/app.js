
function getInputvalue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

document.getElementById('per-player-amount').addEventListener('click', function(){
   
    const playerAmount = getInputvalue('amount-field');
    
    const playerQuiantity = 5;
    const totalAmount =playerAmount * playerQuiantity;
    console.log(totalAmount)
})


document.getElementById('total-calculate-button').addEventListener('click')