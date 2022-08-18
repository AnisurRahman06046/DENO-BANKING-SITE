document.getElementById('btn-deposit').addEventListener('click',function(){
    const previousDepositAmount = getTextElementValueById('deposit-total');
    const newDepositAmount = getInputFieldValueById('deposit-amount');
    if (isNaN(newDepositAmount)==true){
        alert('Error! Enter a number')
        return;
    }

    const updatedDepositAmount = previousDepositAmount + newDepositAmount;
    setNewValue('deposit-total',updatedDepositAmount);

    const previousBalance = getTextElementValueById('balance-total');
    const updatedBalance = previousBalance+newDepositAmount;
    setNewValue('balance-total',updatedBalance)
})