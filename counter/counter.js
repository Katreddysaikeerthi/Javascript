let count=document.getElementById("count")
let c=0

function increaseBtn(){
    c++;
    count.textContent=c;
}
function resetBtn(){
    c=0;
    count.textContent=c;
}
function decreaseBtn(){
    if(c>0){
        c--;
        count.textContent=c;
   }
}
