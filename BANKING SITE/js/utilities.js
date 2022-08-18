// connecting two pages 
document.getElementById('btn-login').addEventListener('click',function(){
    const userId = document.getElementById('user-id');
    const userIdemail = userId.value ; 
    userId.value = '';
    const userPassword = document.getElementById('user-password');
    const userPasswordValue = userPassword.value ;
    userPassword.value = '';
    if(userIdemail==='account@email.com' && userPasswordValue==='secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('User email or password is incorrect')
    }
})


function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    return textElementValue;

}

function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value ;
    const inputValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputValue;

}

function setNewValue(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}