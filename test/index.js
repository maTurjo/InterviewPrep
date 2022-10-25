var btn=document.getElementsByClassName("btn")[0];
var div2=document.getElementsByClassName("div2")[0];
var div1=document.getElementsByClassName("div1")[0];
var clicked=false;

div1.addEventListener("click",function(){
    clicked? btn.innerHTML="Click":btn.innerHTML="Hello";
    clicked=!clicked;
    console.log("div1 Click");
})
div2.addEventListener("click",function(){
    console.log("div2 Click");
})
btn.addEventListener("click",function(){
    console.log("Btn Click");
})