const names = []

function displayPlayerName(){

    const playerList = document.getElementById('player-list');
    playerList.textContent = '';
    for(let i = 0; i < names.length; i++){
        // console.log(names[i])
        // console.log(i + 1)
        const li = document.createElement('li');
        li.innerText = `${i + 1} ${names[i]}`
        playerList.appendChild(li);

        if( i >= 4){
            alert('you already added 5 players')
            break;
            
        }
        
    }

}
function selectPlayer(player){
    // console.log(player.parentNode.parentNode.children[0].innerText)
    const playerName = player.parentNode.parentNode.children[0].innerText;
    const playerId = player;

    playerId.setAttribute('disabled', true)
   
   
    names.push(playerName)
    displayPlayerName()
}




function getInputvalue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);

    if(isNaN(inputValue)){
        alert('please provide an number')
    }
    else{
        return inputValue;
    }

    // return inputValue
    
}


function setElementvalue(element, value){
    const elementId = document.getElementById(element);
    // elementId.innerText = value;
    if(isNaN(value)){
        elementId.innerText = '';
    }
    else{
        elementId.innerText = value;  
    }
}
document.getElementById('per-player-amount').addEventListener('click', function(){
   
    const playerAmount = getInputvalue('amount-field');

    const ulLength = document.getElementById('player-list');
    
    const playerQuiantity = ulLength.children.length;
    const totalAmount =playerAmount * playerQuiantity;
  

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