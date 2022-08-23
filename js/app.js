
const names = []
function selectPlayer(player){
    // get all select button
    const playerName = player.parentNode.parentNode.children[0].innerText;
    // get current event button
    const playerId = player;

    // pass all player name in an array
    names.push(playerName)
    
    // display player name 
    const playerList = document.getElementById('player-list');
    playerList.textContent = '';

    for(let i = 0; i < names.length; i++){
        if( i <= 4){
            const li = document.createElement('li');
            li.innerText = `${i + 1} ${names[i]}`
            playerList.appendChild(li);
            
            // disabled select after clicking
            playerId.setAttribute('disabled', true)
            
        }
        else{
           playerId.removeAttribute('disabled')
            alert('you already added 5 players')
            break;
        }      
    }
}

// get all input value function
function getInputvalue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);

    // validation input field
    if(isNaN(inputValue)){
        alert('please provide your amount')
    }
    else{
        return inputValue;
    }   
}

// set all input elemetn in innerHtml
function setElementvalue(element, value){
    const elementId = document.getElementById(element);
    //validation element field
    if(isNaN(value)){
        elementId.innerText = 0;
    }
    else{
        elementId.innerText = value;  
    }
}

// event handler add in per player amount calculation 
document.getElementById('per-player-amount').addEventListener('click', function(){
   
    // per player amount
    const playerAmount = getInputvalue('amount-field');

    // get  player quantity list
    const ulLength = document.getElementById('player-list');
    
    // calculation amount with player quantity
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