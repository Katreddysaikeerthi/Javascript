let image=document.getElementById("image")
let warning=document.getElementById("warning")
image.style.width="350px";
count=120;
function onIncBtn(){
    if(count<=250){
        count+=5
        image.style.width=count+"px";
        warning.textContent="";
    }else{
        warning.textContent="Image is too High";
        warning.style.color="red";
    }
}

function onDecBtn(){
    if(count>=100){
        count-=5
        image.style.width=count+"px"; 
        warning.textContent="";
    }else{
        warning.textContent="Image is too Low";
        warning.style.color="red";
    }
}