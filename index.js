let checkBoxOne = document.getElementById('answerOne');
let checkBoxTwo = document.getElementById('answerTwo');
let checkBoxThree = document.getElementById('answerThree');
let checkButton = document.getElementById('checkButton');
let score = 0;


const judge = () =>{
    if(checkBoxOne.checked){
        location.href = 'correct.html';

    }else{
        location.href = 'incorrect.html';
    }
}
checkButton.addEventListener('click',judge)