let cl = document.getElementById("close");
cl.addEventListener("click" , function mz(){
    document.getElementById("pop-up").style.opacity = "0";
});
let tim = setInterval(function(){
    document.getElementById("pop-up").style.opacity = "1"
} , 2000);
setInterval(function(){
    document.getElementById("pop-up").style.opacity = "0";
}, 4000);
setTimeout(function(){
    clearInterval(tim);
} , 12000);
