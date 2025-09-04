let random=Math.ceil(Math.random()*100)
let input=document.getElementById("input")
let result=document.getElementById("result");
let score=document.getElementById("score")
let count=0;

function guessBtn(){
    count++;
    if(input.value==random){
        result.textContent="Yah!! Congrats! Your guessing is correct"
        result.style.color="green"
        score.textContent="No.of chances: "+count;
    }else if(input.value<random){
        result.textContent="Oops! Your guessing is too Low. Try again"
        result.style.color="red"
    }else{
        result.textContent="Oops! Your guessing is too High. Try again"
        result.style.color="red"
    }
}