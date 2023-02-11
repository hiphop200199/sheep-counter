window.addEventListener("load",function(){
 const canvas = document.getElementById("canvas");
 const ctx=canvas.getContext('2d');
 const startButton=document.getElementById("button");
 const bgm=new Audio("./calm.mp3");
canvas.width=window.innerWidth-80;
canvas.height=window.innerHeight-80;
startButton.addEventListener("click",startAndPlay);
window.addEventListener("resize",resize);


function resize(){
    canvas.width=window.innerWidth-80;
    canvas.height=window.innerHeight-80;
}
function startAndPlay(){
        bgm.loop=true;
        bgm.play();
        startButton.classList.add("clicked");
}

});