
function selectPlayer(player){
    console.log(player.parentNode.parentNode.children[0].innerText)
}





function getInputvalue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}


function setElementvalue(element, value){
    const elementId = document.getElementById(element);
    elementId.innerText = value;
}
document.getElementById('per-player-amount').addEventListener('click', function(){
   
    const playerAmount = getInputvalue('amount-field');
    
    const playerQuiantity = 5;
    const totalAmount =playerAmount * playerQuiantity;
    console.log(totalAmount)

    // display player expenses
    setElementvalue('show-player-amount', totalAmount)
})


document.getElementById('total-calculate-button').addEventListener('click', function(){

    // get total Player Amount 
    const playerExpenses = document.getElementById('show-player-amount');
    const playerExpensesString = playerExpenses.innerText; 
    const playerExpense = parseFloat(playerExpensesString)
    // get Manager Amount
    const managerAmount = getInputvalue('manager-amount');

    // get coach Amount 
    const coachAmount = getInputvalue('coach-amount');

    // total cost 
    const total = playerExpense + managerAmount + coachAmount;
    
    // display total Amount 

     setElementvalue('total', total);
  
    

})