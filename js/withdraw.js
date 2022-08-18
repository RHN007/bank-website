/***
 * 1. Connect to the button first
 * 2. Get the withdraw amount from the window input field
 * 2.5: Also make sure to convert the input into a number by using parseFloat
 * 3. Get previous withdraw total
 * 4. Add previous withdraw Amount with New Amount :
 * 5. Get the balance total
 * 6. Update the balance total
 * 7.  Clear the deposit field
 */
//Step 1 :
 
document.getElementById('btn-withdraw').addEventListener('click', function(){
//Step 2 : Getting Withdraw Amount :
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmount = parseFloat(withdrawField.value);

//Step 7 : Clear the deposit field
withdrawField.value = '';

if(isNaN(newWithdrawAmount)){
    alert('please provide a Number')
    return
}
 
//Step 3:
 
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText) ;
 

 
//step 5 :
 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);



if(newWithdrawAmount > previousBalanceTotal){
    alert('Insufficient Balance'); 
    return
}

//Step 4 :
 
const currentTotalWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText= currentTotalWithdrawAmount;
//Step 6: Update the balance total

const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = currentTotalBalance;


 
})

