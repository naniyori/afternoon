var ans = new Array(2);
ans[0] =new Array(50);
ans[1] =new Array(50);
var anseng = [];
var qsci = [];
var csci = [];
var currentno=1;
var currentsubj=0;
for(i=0;i<50;i++){ans[0][i]=0;ans[1][i]=0;}
for(i=0;i<50;i++){qsci.push(i);csci.push([i+1,i+2,i+3,i+4]);}
loadd();

function check(){
  var ch=0;
  for(i=0;i<50;i++){if(ans[0][i]==0||ans[1][i]==0)ch=1;}
if(ch==1)alert("ยังตอบคำถามไม่ครบ");
}
function choose(x){
ans[currentsubj][currentno-1]=x;
}
function next(){
cno(currentno+1);
}
function cno(x){
  
  if(x==50)document.getElementById("nextbtn").style.visibility="hidden";
 else document.getElementById("nextbtn").style.visibility="visible";
  currentno=x;
  for(j=1;j<=4;j++)document.getElementById("c"+j).checked=false;
  if(ans[currentsubj][x-1]>0){document.getElementById("c"+ans[currentsubj][x-1]).checked=true;}
    csubj(currentsubj,0);  document.getElementById("no"+x).style.fontWeight="bold";
  }


function csubj(x,y){
  currentsubj =x;
    var div = document.getElementById("no");
    while(div.firstChild)
    div.removeChild(div.firstChild);
  document.getElementById("sbtn0").style.fontWeight="normal";
 document.getElementById("sbtn1").style.fontWeight="normal";
   document.getElementById("sbtn"+currentsubj).style.fontWeight="bold";
  
    for(i=1;i<=50;i++){    
      var btn = document.createElement("BUTTON");
    var t = document.createTextNode(String(i));      
    btn.appendChild(t);
    btn.style.width="4vw";
    btn.style.backgroundColor="rgba(255, 255, 255, 0.8)";
      if(ans[currentsubj][i-1]!=0) btn.style.color="#00d839";
   
    btn.style.borderColor="Transparent"
    btn.id="no"+i;
   btn.onclick =
    (function() {
      var currentI = i;
      return function() { 
          cno(currentI);
      }
   })();
    document.getElementById("no").appendChild(btn);
  }
 if(y==1)cno(1);
}

function loadd(){
  
  csubj(0,1);
var countDownDate = new Date().getTime();
countDownDate+=(2.5*60*60*1000);
// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML =  hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    //document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
/**
    * Disable right-click of mouse, F12 key, and save key combinations on page
    * By Arthur Gareginyan (arthurgareginyan@gmail.com)
    * For full source code, visit http://www.mycyberuniverse.com
    */
  
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
}


  
