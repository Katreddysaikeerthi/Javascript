let timer=document.getElementById("timer")
let image=document.getElementById("image")
let count=10;
let time=setInterval(function(){
    count--;
    timer.textContent="Timer: "+ count;
    if(count<=3){
        timer.style.color="blue"
    }
    if(count==0){
        image.src="https://www.shutterstock.com/image-vector/comic-speech-bubble-boom-text-600nw-1913569507.jpg";
        clearInterval(time)
    }
},1000)