'use strict';
/*console.log(document.querySelector('.message').textcontent);
document.querySelector('.message').textContent='Correct number'
console.log(document.querySelector('.message').textcontent);

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/
let score=20;
let secretNumber=Math.trunc(Math.random()*20)+1;
let hscore=0;
//document.querySelector('.number').textContent=secretNumber;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if(!guess){
        document.querySelector('.message').textContent='No Number';
    }
    else if(guess !== secretNumber){
        if(score>1){
            document.querySelector('.message').textContent= guess<secretNumber?'Go Higher':'Go Lower';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You Lost Try Again!';
            document.querySelector('.score').textContent=0;
        }        

        
    }
   /* else if(guess>secretNumber){

        if(score>1){
            document.querySelector('.message').textContent='Go Lower';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You Lost Try Again!';
            document.querySelector('.score').textContent=0;
        }

    }
    
    else if(guess<secretNumber){
        
        if(score>1){
            document.querySelector('.message').textContent='Go Higher';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You Lost Try Again!';
            document.querySelector('.score').textContent=0;
        }
    }*/
    else{
        document.querySelector('.message').textContent='Correct Number!';
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';

        document.querySelector('.number').style.width='30rem';
        
        if(score>hscore){
            hscore=score;
        } 
        document.querySelector('.highscore').textContent=hscore;       
    }

});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='#222';
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start Guessing';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    
})

