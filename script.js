window.addEventListener("load",function(){
 const startButton=document.getElementById("button");
 const bgm=new Audio("./calm.mp3");
 let container=document.getElementById("container");
 let counter=document.getElementById("counters");
 let goodNight=document.getElementById("goodnight");
 let whole=document.body;
 
startButton.addEventListener("click",startAndPlay);
goodNight.addEventListener("click",goodnight);
function goodnight(){
    bgm.pause();
    startButton.remove();
    let message=document.createElement("h1");
    message.innerText="Good night!"
    message.classList.add("message");
    container.appendChild(message);
    setTimeout(function(){
        whole.style.animation="bye 5s linear forwards";
    },2000);
    setTimeout(function(){
        location.href="https://img.freepik.com/free-vector/falling-stars-beautiful-night-background_23-2148273840.jpg?w=1060&t=st=1676200724~exp=1676201324~hmac=fa75aedfe8c068e6884ab87316bf6516c652ac4d1e2738406fffaa005f507a05";
    },8000);
}
function moveRandom(elem){
 
   setInterval(frame,1);
  let originX= elem.getBoundingClientRect().x;
  let originY= elem.getBoundingClientRect().y;
  function frame() {
    let moveX=(Math.random()-0.56)*0.6;
    let moveY=(Math.random()-0.42)*0.7;
     originX+=moveX;
    originY+=moveY;
      elem.style.top =  originY+ "px"; 
      elem.style.left =  originX+ "px"; 
    }
    
  }

function startAndPlay(){
        counter.innerText=0;
        bgm.loop=true;
        bgm.play();
        startButton.classList.add("clicked");
        
        setInterval(function(){
            let sheep=document.createElement("div");
            sheep.classList.add("sheep");
            sheep.addEventListener("click",function(){
                this.remove();//從DOM移除
                counter.innerText++;
            });
            sheep.addEventListener("touchend",function(){
                this.remove();
                counter.innerText++;
            })   
            let x=(Math.random()*(container.getBoundingClientRect().width-120))+40;
            let y=(Math.random()*(container.getBoundingClientRect().height-120))+40;        
            sheep.style.left=x+'px';
            sheep.style.top=y+'px';       
            container.appendChild(sheep);
            moveRandom(sheep);
        },1500);
       
      
}


               
});