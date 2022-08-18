//step 1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2: get the deposit amount from the deposit input field : 
    const depositField = document.getElementById('deposit-field'); 
    const newDepositAmountString = depositField.value; 
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //step: 3 Get the current deposit amount ; 
    //For non-input(Element other than input , textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total'); 

    const previousDepositTotalS = depositTotalElement.innerText; 
    const previousDepositTotal = parseFloat(previousDepositTotalS)

    //Step 4: add number to set deposit 
    const currentDepositTotal= previousDepositTotal + newDepositAmount;  

    depositTotalElement.innerText=currentDepositTotal; 
    

    //step 5: Get balance current total 
    
    const balanceTotalElement = document.getElementById('balance-total');
    // console.log(balanceTotalElement)
    // const previousBalanceTotals = balanceTotalElement.innerTex;  
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText); 

  
    //Step 6: Update total Balance 
    const currentTotalBalance = previousBalanceTotal + newDepositAmount; 
    //Ste the balance total 
    balanceTotalElement.innerText = currentTotalBalance; 
    //Step 7 : Clear the deposit field 
    depositField.value = ''; 


})