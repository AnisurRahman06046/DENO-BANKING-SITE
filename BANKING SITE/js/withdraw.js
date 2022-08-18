document.getElementById('btn-withdraw').addEventListener('click',function(){
    const previousWithdrawAmount = getTextElementValueById('withdraw-total');
    const withdrawAmount = getInputFieldValueById('withdraw-amount');
    if(isNaN(withdrawAmount)==true){
        alert('Error! Enter a number')
        return;
    }
    const previousBalance = getTextElementValueById('balance-total');
    if (withdrawAmount>previousBalance){
        alert('not enoufh')
        return;
    }
    const updatedWithdrawAmount = previousWithdrawAmount+withdrawAmount;
    setNewValue('withdraw-total',updatedWithdrawAmount);
    const updatedBalance = previousBalance-withdrawAmount;
    setNewValue('balance-total',updatedBalance);

})