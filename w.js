var ans = new Array(2);
ans[0] =new Array(50);
ans[1] =new Array(50);
var cans = new Array(2);
cans[0] =new Array(50);
cans[1] =new Array(50);
var anseng = [];
var q =new Array(2);
q[0]=new Array(50);
q[1]=new Array(50);
for(i=1;i<=50;i++){
q[0][i-1]="โจทย์วิทย์ข้อที่"+i;
q[1][i-1]="โจทย์อิ้งข้อที่"+i;
}
q[0][0]="เนื้อเยื่อของพืชในข้อใดเป็นเซลล์ที่ตายแล้ว";
q[0][1]="สารในข้อใดที่โดยทั่วไปจะไม่พบในผนังเซลล์ของพืช <br> ก) Pectin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ข) Suberin <br> ค) Cutin &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ง) Lignin";
q[0][2]="A กับ B วิ่งออกกำลังกายจากจุดจุดหนึ่งด้วยอัตราเร็วสม่ำเสมอ 4 เมตรต่อวินาทีและ 6 เมตรต่อวินาทีตามลำดับ <br> เมื่อเวลาผ่านไป 60 วินาที A กับ B จะอยู่ห่างกันกี่เมตร";
var dreason= Array(2);
dreason[0]=new Array(50);
dreason[1]=new Array(50);
for(i=1;i<=50;i++){
dreason[0][i-1]="เนื่องจากวิทย์"+i;
  dreason[1][i-1]="เนื่องจากอิ้ง"+i;
}
var choi=new Array(2);
choi[0]=new Array(50);
choi[1]=new Array(50);
for(i=1;i<=50;i++){
choi[0][i-1]=new Array(4);
choi[1][i-1]=new Array(4);
  /*for(j=1;j<=4;j++){
  choi[0][i-1][j-1]="ช้อยวิทย์ข้อ"+i+"ช้อย"+j;
  choi[1][i-1][j-1]="ช้อยอิ้งข้อ"+i+"ช้อย"+j;
  }*/
  
}
choi[0][0][0]="Phloem";
choi[0][0][1]="Epidermis";
choi[0][0][2]="Xylem";
choi[0][0][3]="Meristem";
choi[0][1][0]="ก ข";
choi[0][1][1]="ข ค ง";
choi[0][1][2]="ก ข ค";
choi[0][1][3]="ค ง";
choi[0][2][0]="60 เมตร";
choi[0][2][1]="120 เมตร";
choi[0][2][2]="240 เมตร";
choi[0][2][3]="360 เมตร";
var checked =0;
var currentno=1;
var currentsubj=0;
for(i=0;i<50;i++){ans[0][i]=0;ans[1][i]=0;}
//for(i=0;i<50;i++){cans[0][i]=1;cans[1][i]=1;}
cans[0][0]=3;
cans[0][1]=2;
cans[0][2]=2;

//โจทย์อิ้งยัดตรงนี้
q[1][0]="Read this passage and answer the following questions.<br>&nbsp; &nbsp; &nbsp; &nbsp;Two men were arrested by the police after they had sold a stolen painting to an art gallery in Guildford. The owner of the gallery claimed that he had bought the painting in good faith, unaware that it had been stolen. The painting, a portrait of a young woman in a wide brimmed straw hat sitting under a tree, was owned by Marie Gilles, aged 84. She claimed that the painting had been given to one of her ancestors by the artist. She had owned it since 1950 when it was given to her by an aunt as a wedding present. The painting had been stolen from her house two weeks previous to the arrest of the two men.<br>1. From the information given in the passage, we know that Marie Gilles_________.";
choi[1][0][0]="            a. knew the owner of the gallery";
choi[1][0][1]="            b. had been married";
choi[1][0][2]="            c. was grateful to the police";
choi[1][0][3]="            d. did not value the painting highly";
q[1][1]="Read this passage and answer the following questions.<br>&nbsp; &nbsp; &nbsp; &nbsp;Two men were arrested by the police after they had sold a stolen painting to an art gallery in Guildford. The owner of the gallery claimed that he had bought the painting in good faith, unaware that it had been stolen. The painting, a portrait of a young woman in a wide brimmed straw hat sitting under a tree, was owned by Marie Gilles, aged 84. She claimed that the painting had been given to one of her ancestors by the artist. She had owned it since 1950 when it was given to her by an aunt as a wedding present. The painting had been stolen from her house two weeks previous to the arrest of the two men.<br>2. The owner of the art gallery said that he bought the painting____.";
choi[1][1][0]="            a. because he was related to the artist";
choi[1][1][1]="            b. because he knew the woman in the painting";
choi[1][1][2]="            c. not knowing its true value";
choi[1][1][3]="            d. not knowing it had been stolen";
q[1][2]="Read this passage and answer the following questions.<br>&nbsp; &nbsp; &nbsp; &nbsp;Two men were arrested by the police after they had sold a stolen painting to an art gallery in Guildford. The owner of the gallery claimed that he had bought the painting in good faith, unaware that it had been stolen. The painting, a portrait of a young woman in a wide brimmed straw hat sitting under a tree, was owned by Marie Gilles, aged 84. She claimed that the painting had been given to one of her ancestors by the artist. She had owned it since 1950 when it was given to her by an aunt as a wedding present. The painting had been stolen from her house two weeks previous to the arrest of the two men.<br>3. The young woman in the painting was______.";
choi[1][2][0]="             a. an unknown person";
choi[1][2][1]="             b. an ancestor of Marie Gilles";
choi[1][2][2]="             c. about to get married";
choi[1][2][3]="             d.Marie Gilles as a young woman";
q[1][3]="Read this passage and answer the following questions.<br>&nbsp; &nbsp; &nbsp; &nbsp;Two men were arrested by the police after they had sold a stolen painting to an art gallery in Guildford. The owner of the gallery claimed that he had bought the painting in good faith, unaware that it had been stolen. The painting, a portrait of a young woman in a wide brimmed straw hat sitting under a tree, was owned by Marie Gilles, aged 84. She claimed that the painting had been given to one of her ancestors by the artist. She had owned it since 1950 when it was given to her by an aunt as a wedding present. The painting had been stolen from her house two weeks previous to the arrest of the two men.<br>4. The passage tell us that the painting is______.";
choi[1][3][0]="            a. very famous                  ";
choi[1][3][1]="                       b. a portrait";
choi[1][3][2]="            c. very valuable                 ";
choi[1][3][3]="                       d. an oil painting";
q[1][4]="Read this passage and answer the following questions.<br>&nbsp; &nbsp; &nbsp; &nbsp;Two men were arrested by the police after they had sold a stolen painting to an art gallery in Guildford. The owner of the gallery claimed that he had bought the painting in good faith, unaware that it had been stolen. The painting, a portrait of a young woman in a wide brimmed straw hat sitting under a tree, was owned by Marie Gilles, aged 84. She claimed that the painting had been given to one of her ancestors by the artist. She had owned it since 1950 when it was given to her by an aunt as a wedding present. The painting had been stolen from her house two weeks previous to the arrest of the two men.<br>5. The word “ancestor” in passage means";
choi[1][4][0]="            a. heir                                 ";
choi[1][4][1]="                        b. child";
choi[1][4][2]="            c. forefather                         ";
choi[1][4][3]="                     d. toddler";
q[1][5]="Use the context clues and choose the correct meaning of the word in boldface<br>6.Computer manuals are often very hard to understand, so I was surprised to discover how <b>lucid</b> this one is.";
choi[1][5][0]="a. Long                                                    ";
choi[1][5][1]="b. clear";
choi[1][5][2]="c. new ";
choi[1][5][3]="d. expensive";
q[1][6]="Use the context clues and choose the correct meaning of the word in boldface<br>7. The chinese government provides <b>incentives</b> for married couples to have only one child. For example, couples with one child get financial help and free medical care.";
choi[1][6][0]=" a. warnings                                              ";
choi[1][6][1]=" b. suggestions";
choi[1][6][2]=" c. penalties                                               ";
choi[1][6][3]=" d. encouragements";
q[1][7]="Use the context clues and choose the correct meaning of the word in boldface<br>8. The store detective faced the <b>dilemma</b> of either having an elderly, needy man arrested or ignoring store rules about shoplifters.";
choi[1][7][0]="           a. proof                                                    ";
choi[1][7][1]="  b. reason";
choi[1][7][2]="           c. memory                                             ";
choi[1][7][3]="   d. difficult choice";
q[1][8]="Use the context clues and choose the correct meaning of the word in boldface<br>9. The press <b>assailed</b> the mayor for giving large city construction jobs to his daughter’s firm.";
choi[1][8][0]="           a. attacked                 ";
choi[1][8][1]="                               b. praised";
choi[1][8][2]="           c. fined                                ";
choi[1][8][3]="                       d. paid";
q[1][9]="Use the context clues and choose the correct meaning of the word in boldface<br>10.Reliable scientific theories are based not upon careless work, but rather upon <b>meticulous</b> research and experimentation.";
choi[1][9][0]="            a. hasty                                                ";
choi[1][9][1]="       b. expensive";
choi[1][9][2]="            c. careful                            ";
choi[1][9][3]="                        d. complicated";








loadd();
function Close(){

document.getElementById("scorepanel").style.display = "none";
  
}


function check(x){
  
  var ch=0;
  for(i=0;i<50;i++){if(ans[0][i]==0||ans[1][i]==0)ch=1;}
//if(ch==1&&x==0)alert("ยังตอบคำถามไม่ครบ");
  //else{
    var score1=0,score2=0;
    for(i=0;i<50;i++){if(ans[0][i]==cans[0][i])score1++;
                         if(ans[1][i]==cans[1][i])score2++;}
    document.getElementById("scoredisp").innerHTML="วิทยาศาสตร์ "+score1+"/50<br>ภาษาอังกฤษ "+score2+"/50";
  
  document.getElementById("scorepanel").style.display = "block";
  document.getElementById("time").style.display = "none";
  document.getElementById("sent").style.display = "none";
    document.getElementById("choice").style.display = "none";
   document.getElementById("reason").style.display = "block";
  checked=1;
  cno(1);
  //}
  
}
function choose(x){
ans[currentsubj][currentno-1]=x;
}
function next(){
cno(currentno+1);
}
function prev(){
  cno(currentno-1);
}
function cno(x){
  if(x==1)document.getElementById("prevbtn").style.visibility="hidden";
 else document.getElementById("prevbtn").style.visibility="visible";
  if(x==50)document.getElementById("nextbtn").style.visibility="hidden";
 else document.getElementById("nextbtn").style.visibility="visible";
  currentno=x;
  for(j=1;j<=4;j++)document.getElementById("cbt"+j).checked=false;
  if(ans[currentsubj][x-1]>0){document.getElementById("cbt"+ans[currentsubj][x-1]).checked=true;}
  csubj(currentsubj,0); document.getElementById("no"+x).style.backgroundColor = "#ffaac2";
  if(ans[currentsubj][currentno-1]!=cans[currentsubj][currentno-1]&&checked==1){
    document.getElementById("no"+x).style.backgroundColor = "#ff72aa";
    document.getElementById("yourans").style.display="block";
    if(ans[currentsubj][currentno-1]==0)document.getElementById("yourans").innerHTML="<คุณไม่ได้ตอบคำถามนี้>";
    else document.getElementById("yourans").innerHTML="<คำตอบของคุณคือ "+choi[currentsubj][x-1][ans[currentsubj][x-1]-1]+">";

  }
  else if(checked==1){document.getElementById("yourans").style.display="none";
       document.getElementById("no"+x).style.backgroundColor = "#82ff8c";
       }
    document.getElementById("reason").innerHTML="คำตอบที่ถูกคือ "+choi[currentsubj][x-1][cans[currentsubj][x-1]-1]+"<br>"+dreason[currentsubj][x-1];
    document.getElementById("question").innerHTML=q[currentsubj][x-1];
    document.getElementById("c1").innerHTML=choi[currentsubj][x-1][0];
   document.getElementById("c2").innerHTML=choi[currentsubj][x-1][1];
  document.getElementById("c3").innerHTML=choi[currentsubj][x-1][2];
  document.getElementById("c4").innerHTML=choi[currentsubj][x-1][3];
  
}


function csubj(x,y){
  currentsubj =x;
    var div = document.getElementById("no");
    while(div.firstChild)
    div.removeChild(div.firstChild);
  document.getElementById("sbtn0").style.fontWeight="normal";

  
  
 document.getElementById("sbtn1").style.fontWeight="normal";
  document.getElementById("sbtn0").style.textDecoration= "none";
  document.getElementById("sbtn1").style.textDecoration= "none";document.getElementById("sbtn"+currentsubj).style.fontWeight="bold";
document.getElementById("sbtn"+currentsubj).style.textDecoration= "underline"; 
    for(i=1;i<=50;i++){    
      var btn = document.createElement("BUTTON");
    var t = document.createTextNode(String(i));      
    btn.appendChild(t);
    btn.style.width="4%";
    btn.style.backgroundColor="rgba(255, 255, 255, 0.8)";
      if(ans[currentsubj][i-1]!=0&&checked==0) btn.style.backgroundColor="#00d839";
      if(checked==1){
        if(ans[currentsubj][i-1]==cans[currentsubj][i-1]){btn.style.backgroundColor="#00d839";}
        else{btn.style.backgroundColor="#f44289";}
      }
    btn.style.borderColor="Transparent";
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
    alert("หมดเวลาทำข้อสอบแล้ว");
    check(1);
    //document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
/**
    * Disable right-click of mouse, F12 key, and save key combinations on page
    * By Arthur Gareginyan (arthurgareginyan@gmail.com)
    * For full source code, visit http://www.mycyberuniverse.com
    */
  
}


//โจทย์วิทย์ q[0][i] : 0<=i<=49



//ช้อยส์วิทย์ choi[0][i][j] : 0<=i<=49 , 0<=j<=3


//คำตอบวิทย์ cans[0][i] : 0<=i<=49



window.onbeforeunload = function() {
  return "ระบบอาจไม่ได้บันทึกการเปลี่ยนแปลงของคุณ";
};
