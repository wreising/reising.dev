// The simples aproach would be to create global variable boxHeightAndWoxWidth and change it
var boxHeightAndWidth = 150;
document.getElementById("growBtn").addEventListener("click", function() {
  // Well my mate if you are tring to make box bigger each time then don't pass fixed height and width 
  // but make it bigger each time you pressed the button like so:
  boxHeightAndWidth += 20;
  // and we don't change color cuz why even?
  // document.getElementById("box").style = "height:" + boxHeightAndWidth +"px; width:" + boxHeightAndWidth + "px;background-color:orange; margin:25px";
  document.getElementById("box").style.height = boxHeightAndWidth + "px";
  document.getElementById("box").style.width = boxHeightAndWidth + "px";
  // jea we update this too so if you "faded" your box it will be seen again
  document.getElementById("box").style.opacity = "1";
});

document.getElementById("blueBtn").addEventListener("click", function() {
  // well of course it changes to orginal - you are passing fixed values which are lower then from growBtn
  // here we will use the global boxHeightAndWidth so it would stay the same
  // OR JUST DON'T CHANGE and change only required variables
  // document.getElementById("box").style = "height:150px; width:150px; background-color:blue; margin:25px";
  document.getElementById("box").style.backgroundColor = "blue";
  // jea we update this too so if you "faded" your box it will be seen again
  document.getElementById("box").style.opacity = "1";
});


// jea let's break this to pieces
document.getElementById("fadeBtn").addEventListener("click", function() { // here you add event "onclick"

  // document.getElementById("box").onclick.fadeOut(); // here too but not in correct way so it doesn't even work
  // https://www.w3schools.com/jsref/event_onclick.asp - here, it's nicely exlpained
  // Correct way:
  // document.getElementById("box").onclick = function(){
  //   fadeOut();
  // };
  // but it's wrong too, because you would have to click twice to activate this script - if you wan't this behaviour the use "ondblclick"
  // so just pass this:
  // fadeOut();
  // but it's wrong too cuz this function requires variable to be passed
  // fadeOut(elem, speed) - elem - element to which apply fade and speed - speed of fade, so we will just copy the call from javascript.js:
  var box = document.getElementById('box');
  fadeOut(box, 2000);
  // and for explainations why it started without any action go to javascript.js
});

document.getElementById("resetBtn").addEventListener("click", function() {
  // This works because you reset styles to their start values. 
  document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px";

});