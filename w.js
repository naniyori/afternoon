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
q[1][5]="Use the context clues and choose the correct meaning of the word in boldface<br>6. Computer manuals are often very hard to understand, so I was surprised to discover how <b>lucid</b> this one is.";
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
q[1][9]="Use the context clues and choose the correct meaning of the word in boldface<br>10. Reliable scientific theories are based not upon careless work, but rather upon <b>meticulous</b> research and experimentation.";
choi[1][9][0]="            a. hasty                                                ";
choi[1][9][1]="       b. expensive";
choi[1][9][2]="            c. careful                            ";
choi[1][9][3]="                        d. complicated";
q[1][10]="Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Each year in the United States __11___ 50,000 miscarriages are _12__ to smoking during pregnancy. On average, babies born to mothers who smoke weigh less than those born in nonsmokers, and low birth weight is ___13___ with many developmental problems. Pregnant women who stop smoking in first three or four months of their pregnancies give  birth to higher-birth-weight babies than do women who are smoke __14__ their pregnancies. Infant _15__ rates are also higher among babies born to smokers.";
choi[1][10][0]=" a. approximately                              ";
choi[1][10][1]="          b. immediately";
choi[1][10][2]="         c. almost                                            ";
choi[1][10][3]="          d. at least";
q[1][11]="Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Each year in the United States __11___ 50,000 miscarriages are _12__ to smoking during pregnancy. On average, babies born to mothers who smoke weigh less than those born in nonsmokers, and low birth weight is ___13___ with many developmental problems. Pregnant women who stop smoking in first three or four months of their pregnancies give  birth to higher-birth-weight babies than do women who are smoke __14__ their pregnancies. Infant _15__ rates are also higher among babies born to smokers.";
choi[1][11][0]="   a. addicted                                                  ";
choi[1][11][1]=" b. persuaded";
choi[1][11][2]="        c. attributed                                             ";
choi[1][11][3]="    d. prefer";
q[1][12]="   Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Each year in the United States __11___ 50,000 miscarriages are _12__ to smoking during pregnancy. On average, babies born to mothers who smoke weigh less than those born in nonsmokers, and low birth weight is ___13___ with many developmental problems. Pregnant women who stop smoking in first three or four months of their pregnancies give  birth to higher-birth-weight babies than do women who are smoke __14__ their pregnancies. Infant _15__ rates are also higher among babies born to smokers.";
choi[1][12][0]=" a. caused                                                ";
choi[1][12][1]="      b. related";
choi[1][12][2]="         c. appealed                                           ";
choi[1][12][3]="       d. correlated";
q[1][13]="  Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Each year in the United States __11___ 50,000 miscarriages are _12__ to smoking during pregnancy. On average, babies born to mothers who smoke weigh less than those born in nonsmokers, and low birth weight is ___13___ with many developmental problems. Pregnant women who stop smoking in first three or four months of their pregnancies give  birth to higher-birth-weight babies than do women who are smoke __14__ their pregnancies. Infant _15__ rates are also higher among babies born to smokers.";
choi[1][13][0]="      a. during                                            ";
choi[1][13][1]="           b. through with";
choi[1][13][2]="        c. throughout                                 ";
choi[1][13][3]="              d. although";
q[1][14]="   Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Each year in the United States __11___ 50,000 miscarriages are _12__ to smoking during pregnancy. On average, babies born to mothers who smoke weigh less than those born in nonsmokers, and low birth weight is ___13___ with many developmental problems. Pregnant women who stop smoking in first three or four months of their pregnancies give  birth to higher-birth-weight babies than do women who are smoke __14__ their pregnancies. Infant _15__ rates are also higher among babies born to smokers.";
choi[1][14][0]=" a. mortality                           ";
choi[1][14][1]="                        b. morality";
choi[1][14][2]="         c. motivately                  ";
choi[1][14][3]="                              d.  deadly";
q[1][15]="Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Although mysteries and science fiction may seem like very different kinds of writing, the two forms share some basic similarities. First of all, both are action-directed, emphasizing plot at the expense of character development. Possibly for this reason, both types of literature have been _16_ by critics as being _17__ “entertainment” rather than “literature”. But this attack is __18__, for both mysteries and science fiction share a concern with moral issues. Science fiction often raises the question of whether or not scientific advances are of benefit to ___19___. And a  mystery story rarely ends without the __20___ person being brought to justice.";
choi[1][15][0]=" a. criticized              ";
choi[1][15][1]="                                        b. scorned";
choi[1][15][2]="      c. accused                      ";
choi[1][15][3]="                                   d. regarded";
q[1][16]="   Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Although mysteries and science fiction may seem like very different kinds of writing, the two forms share some basic similarities. First of all, both are action-directed, emphasizing plot at the expense of character development. Possibly for this reason, both types of literature have been _16_ by critics as being _17__ “entertainment” rather than “literature”. But this attack is __18__, for both mysteries and science fiction share a concern with moral issues. Science fiction often raises the question of whether or not scientific advances are of benefit to ___19___. And a  mystery story rarely ends without the __20___ person being brought to justice.";
choi[1][16][0]=" a. merely                                                     ";
choi[1][16][1]="     b. pure";
choi[1][16][2]="       c. as                                                             ";
choi[1][16][3]="     d. amusingly";
q[1][17]="   Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Although mysteries and science fiction may seem like very different kinds of writing, the two forms share some basic similarities. First of all, both are action-directed, emphasizing plot at the expense of character development. Possibly for this reason, both types of literature have been _16_ by critics as being _17__ “entertainment” rather than “literature”. But this attack is __18__, for both mysteries and science fiction share a concern with moral issues. Science fiction often raises the question of whether or not scientific advances are of benefit to ___19___. And a  mystery story rarely ends without the __20___ person being brought to justice.";
choi[1][17][0]=" a. unsatisfied                                           ";
choi[1][17][1]="        b. conflicted";
choi[1][17][2]="       c. affected                                             ";
choi[1][17][3]="           d. unjustified";
q[1][18]="   Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Although mysteries and science fiction may seem like very different kinds of writing, the two forms share some basic similarities. First of all, both are action-directed, emphasizing plot at the expense of character development. Possibly for this reason, both types of literature have been _16_ by critics as being _17__ “entertainment” rather than “literature”. But this attack is __18__, for both mysteries and science fiction share a concern with moral issues. Science fiction often raises the question of whether or not scientific advances are of benefit to ___19___. And a  mystery story rarely ends without the __20___ person being brought to justice.";
choi[1][18][0]=" a. creatures                                          ";
choi[1][18][1]="            b. human";
choi[1][18][2]="       c. scientist                                             ";
choi[1][18][3]="           d. humanity";
q[1][19]="   Read the passage below and fill the blank with the best answers.<br>&nbsp; &nbsp; &nbsp; &nbsp; Although mysteries and science fiction may seem like very different kinds of writing, the two forms share some basic similarities. First of all, both are action-directed, emphasizing plot at the expense of character development. Possibly for this reason, both types of literature have been _16_ by critics as being _17__ “entertainment” rather than “literature”. But this attack is __18__, for both mysteries and science fiction share a concern with moral issues. Science fiction often raises the question of whether or not scientific advances are of benefit to ___19___. And a  mystery story rarely ends without the __20___ person being brought to justice.";
choi[1][19][0]=" a. capable                                               ";
choi[1][19][1]="          b. culpable";
choi[1][19][2]="       c. cultivate                                            ";
choi[1][19][3]="           d. culminate";

q[1][20]="Error recognition<br>21. In his rare speeches in the House of Representatives, he (a)<u> clearly</u> (b)<u> defined</u> his position in regard (c)<u> to</u> states’ rights, which held (d)<u> consistent </u> ever afterwards";
choi[1][20][0]="  a.";
choi[1][20][1]=" b.";
choi[1][20][2]=" c.";
choi[1][20][3]=" d.";
q[1][21]="Error recognition<br>22. The media in (a)<u> the</u> number of countries (b)<u> have</u> been asking        what (c)<u> lies</u> behind the success rate of British (d)<u> athletes </u>at the Rio Olympics. ";
choi[1][21][0]=" a.";
choi[1][21][1]=" b.";
choi[1][21][2]=" c.";
choi[1][21][3]=" d.";
q[1][22]="Error recognition<br>23. (a)<u> The understanding</u> mathematics (b)<u> depends on </u>diligence   and (c)<u> attempts </u>of (d)<u> students</u>. ";
choi[1][22][0]=" a.";
choi[1][22][1]=" b.";
choi[1][22][2]=" c.";
choi[1][22][3]=" d.";
q[1][23]="Error recognition<br>24. John, (a)<u> as well as</u> his (b)<u> two </u>brothers Peter and Sam, (c)<u> are</u> (d)<u> left-handed</u>. ";
choi[1][23][0]=" a.";
choi[1][23][1]=" b.";
choi[1][23][2]=" c.";
choi[1][23][3]=" d.";
q[1][24]="Error recognition<br>25. In 1889, Eiffel Tower (a)<u> in Paris </u> (b)<u> had been built</u> (c)<u> after</u> French Revolution (d)<u> had finished</u>. ";
choi[1][24][0]=" a.";
choi[1][24][1]=" b.";
choi[1][24][2]=" c.";
choi[1][24][3]=" d.";
q[1][25]="Error recognition<br>26. (a)<u> Humans</u> (b)<u> have created </u> (c)<u> many</u> of (d)<u> machineries</u> for a long time. ";
choi[1][25][0]=" a.";
choi[1][25][1]=" b.";
choi[1][25][2]=" c.";
choi[1][25][3]=" d.";
q[1][26]="Error recognition<br>27. (a)<u> For some people</u>, computer is such (b)<u> complicated device that</u> (c)<u> they</u> don’t want to use (d)<u> it</u>. ";
choi[1][26][0]=" a.";
choi[1][26][1]=" b.";
choi[1][26][2]=" c.";
choi[1][26][3]=" d.";
q[1][27]="Error recognition<br>28. Jane (a)<u> told</u> her sister, (b)<u> explained</u> her story (c)<u> that</u> she (d)<u> had found</u> ";
choi[1][27][0]=" a.";
choi[1][27][1]=" b.";
choi[1][27][2]=" c.";
choi[1][27][3]=" d.";
q[1][28]="Error recognition<br>29. The light from laser (a)<u> differs than </u>the light (b)<u> produced by</u> (c)<u> other sources</u>, such as electric bulbs, fluorescent lamps, and (d)<u> the</u> sun. ";
choi[1][28][0]=" a.";
choi[1][28][1]=" b.";
choi[1][28][2]=" c.";
choi[1][28][3]=" d.";
q[1][29]="Error recognition<br>30. (a)<u> Fortune teller </u>told Jane that something (b)<u> terribly </u>is happening to her and (c)<u> urged</u> her that she (d)<u> should stay </u>at home tonight. ";
choi[1][29][0]=" a.";
choi[1][29][1]=" b.";
choi[1][29][2]=" c.";
choi[1][29][3]=" d.";
q[1][30]="Error recognition<br>31. The door (a)<u> is unlocked</u>. (b)<u> Last night</u>, I (c)<u> must forgot</u> (d)<u> to close it. </u> ";
choi[1][30][0]=" a.";
choi[1][30][1]=" b.";
choi[1][30][2]=" c.";
choi[1][30][3]=" d.";
q[1][31]="Error recognition<br>32. Doctor (a)<u> recommended </u>that John (b)<u> stops </u> (c)<u> smoking</u> (d)<u>   otherwise</u> he will dies. ";
choi[1][31][0]=" a.";
choi[1][31][1]=" b.";
choi[1][31][2]=" c.";
choi[1][31][3]=" d.";
q[1][32]="Error recognition<br>33. (a)<u> Although</u> English is the (b)<u> international</u> language, chinese is the (c)<u> the widely most</u> spoken language (d)<u> in the world</u>. ";
choi[1][32][0]=" a.";
choi[1][32][1]=" b.";
choi[1][32][2]=" c.";
choi[1][32][3]=" d.";
q[1][33]="Error recognition<br>34. Had not (a)<u> the survey </u> (b)<u> been completed</u>, (c)<u> the information</u> in the report (d)<u> would be inexact</u>. ";
choi[1][33][0]=" a.";
choi[1][33][1]=" b.";
choi[1][33][2]=" c.";
choi[1][33][3]=" d.";
q[1][34]="Error recognition<br>35. (a)<u> Making </u>a (b)<u> cleaning product </u> (c)<u> completely harmlessly</u> to the environment is very difficult and (d)<u> usually economically</u> unsound. ";
choi[1][34][0]=" a.";
choi[1][34][1]=" b.";
choi[1][34][2]=" c.";
choi[1][34][3]=" d.";
q[1][35]="Read the conversation and choose the best answer. <br>Poon: I’ve heard you’re moving to California.<br>Bloom: Yes, I’ve got an offer in upstate California. <br>Poon: Oh, that’s great! __36__ . <br>Bloom: Me, too. __37__ . <br>Poon :  Yeah. Don’t forget to __38__ when you settle down. <br>Bloom: Trust me. I won’t.  __39__ . <br>Poon : Do you have my address? <br>Bloom : Well, I have your e-mail address. <br>Poon : All right! I look forward to hearing from you soon. Good luck! <br>";
choi[1][35][0]="  a. And you’re going to enjoy it        ";
choi[1][35][1]="     b. But I’m so surprised   ";
choi[1][35][2]="       c. And I’m so happy for you             ";
choi[1][35][3]="     d. But I’m going to miss you";
q[1][36]=" Read the conversation and choose the best answer. <br>Poon: I’ve heard you’re moving to California.<br>Bloom: Yes, I’ve got an offer in upstate California. <br>Poon: Oh, that’s great! __36__ . <br>Bloom: Me, too. __37__ . <br>Poon :  Yeah. Don’t forget to __38__ when you settle down. <br>Bloom: Trust me. I won’t.  __39__ . <br>Poon : Do you have my address? <br>Bloom : Well, I have your e-mail address. <br>Poon : All right! I look forward to hearing from you soon. Good luck! <br>";
choi[1][36][0]="  a. Let’s call it a day                       ";
choi[1][36][1]="          b. Let’s look around";
choi[1][36][2]="         c. Let’s keep up                               ";
choi[1][36][3]="       d. Let’s keep in touch";
q[1][37]="  Read the conversation and choose the best answer. <br>Poon: I’ve heard you’re moving to California.<br>Bloom: Yes, I’ve got an offer in upstate California. <br>Poon: Oh, that’s great! __36__ . <br>Bloom: Me, too. __37__ . <br>Poon :  Yeah. Don’t forget to __38__ when you settle down. <br>Bloom: Trust me. I won’t.  __39__ . <br>Poon : Do you have my address? <br>Bloom : Well, I have your e-mail address. <br>Poon : All right! I look forward to hearing from you soon. Good luck! <br>";
choi[1][37][0]=" a. look it up                                 ";
choi[1][37][1]="             b. give me a hand";
choi[1][37][2]="         c. drop me a line                        ";
choi[1][37][3]="            d. write it down";
q[1][38]="Read the conversation and choose the best answer. <br>Poon: I’ve heard you’re moving to California.<br>Bloom: Yes, I’ve got an offer in upstate California. <br>Poon: Oh, that’s great! __36__ . <br>Bloom: Me, too. __37__ . <br>Poon :  Yeah. Don’t forget to __38__ when you settle down. <br>Bloom: Trust me. I won’t.  __39__ . <br>Poon : Do you have my address? <br>Bloom : Well, I have your e-mail address. <br>Poon : All right! I look forward to hearing from you soon. Good luck! <br>";
choi[1][38][0]="   a. I’ll help you                            ";
choi[1][38][1]="              b. I’ll keep you a posted";
choi[1][38][2]="        c. Otherwise, I will forget             ";
choi[1][38][3]="         d. Otherwise, you’ll forget";
q[1][39]="Read the conversation and choose the best answer. <br>Poo:  __40__. His snoring is getting worse and worse.<br>Babe: Maybe  he  needs to go see a doctor. I heard that sometimes a bad snore can cause heart failure because not enough oxygen gets to the brain. <br>Poo:     __41__. Sometimes it even seems like he stops breathing  and I have to give him a push to make him start again. <br>Babe: I remember Prayuth’s father had the same problem. Dr. Poramet said it was sleep apnea. He had to use a CPAP mask, so that his heart wouldn’t stop in the middle of the night. <br>Poo: __42__! That serious? <br>Babe: Yes, that’s serious. <br>Poo: That’s it! I’m making an appointment for Tum to see Dr.Poramet this afternoon. __ 43 __.<br>";
choi[1][39][0]=" a.  I really care about Tum             ";
choi[1][39][1]="   b.   I’m really concern about Tum";
choi[1][39][2]="         c.  I really don’t  like Tum              ";
choi[1][39][3]="   d.   I’m really fed up with Tum";
q[1][40]=" Read the conversation and choose the best answer. <br> Poo:  __40__. His snoring is getting worse and worse.<br>Babe: Maybe  he  needs to go see a doctor. I heard that sometimes a bad snore can cause heart failure because not enough oxygen gets to the brain. <br>Poo:     __41__. Sometimes it even seems like he stops breathing  and I have to give him a push to make him start again. <br>Babe: I remember Prayuth’s father had the same problem. Dr. Poramet said it was sleep apnea. He had to use a CPAP mask, so that his heart wouldn’t stop in the middle of the night. <br>Poo: __42__! That serious? <br>Babe: Yes, that’s serious. <br>Poo: That’s it! I’m making an appointment for Tum to see Dr.Poramet this afternoon. __ 43 __.<br>";
choi[1][40][0]=" a.  That’s what I worried about    ";
choi[1][40][1]="     b.   That’s too  bad";
choi[1][40][2]="        c.   That’s interesting                      ";
choi[1][40][3]="    d.  That’s what I’m annoyed with";
q[1][41]=" Read the conversation and choose the best answer. <br>Poo:  __40__. His snoring is getting worse and worse.<br>Babe: Maybe  he  needs to go see a doctor. I heard that sometimes a bad snore can cause heart failure because not enough oxygen gets to the brain. <br>Poo:     __41__. Sometimes it even seems like he stops breathing  and I have to give him a push to make him start again. <br>Babe: I remember Prayuth’s father had the same problem. Dr. Poramet said it was sleep apnea. He had to use a CPAP mask, so that his heart wouldn’t stop in the middle of the night. <br>Poo: __42__! That serious? <br>Babe: Yes, that’s serious. <br>Poo: That’s it! I’m making an appointment for Tum to see Dr.Poramet this afternoon. __ 43 __.<br>";
choi[1][41][0]="  a.   You bet                                      ";
choi[1][41][1]="     b.   You reckon";
choi[1][41][2]="        c.    You think                                      ";
choi[1][41][3]="  d.   You’re kidding me";
q[1][42]="Read the conversation and choose the best answer. <br> Poo:  __40__. His snoring is getting worse and worse.<br>Babe: Maybe  he  needs to go see a doctor. I heard that sometimes a bad snore can cause heart failure because not enough oxygen gets to the brain. <br>Poo:     __41__. Sometimes it even seems like he stops breathing  and I have to give him a push to make him start again. <br>Babe: I remember Prayuth’s father had the same problem. Dr. Poramet said it was sleep apnea. He had to use a CPAP mask, so that his heart wouldn’t stop in the middle of the night. <br>Poo: __42__! That serious? <br>Babe: Yes, that’s serious. <br>Poo: That’s it! I’m making an appointment for Tum to see Dr.Poramet this afternoon. __ 43 __.<br>";
choi[1][42][0]="  a.   We can’t stand it anymore      ";
choi[1][42][1]="    b.  We can’t stay still any longer";
choi[1][42][2]="        c.    We can’t let this go any longer ";
choi[1][42][3]="  d. We can’t  talk anymore";
q[1][43]="Choose the best answer.<br>44. The main column of this paper also ____ to the appendix on page 159.";
choi[1][43][0]="                 a.  confers";
choi[1][43][1]="                 b.  transfers";
choi[1][43][2]=" c.  differs";
choi[1][43][3]=" d.  refers";
q[1][44]="Choose the best answer.<br>45. The supreme Court took ____ in the corruption case.";
choi[1][44][0]=" a.  transaction";
choi[1][44][1]=" b.  activity";
choi[1][44][2]=" c.  reenactment";
choi[1][44][3]=" d.  activate";
q[1][45]="Choose the best answer.<br>46. The girl was afraid of anyone from other countries, she has a(n) ______.";
choi[1][45][0]=" a.  claustrophobia";
choi[1][45][1]=" b.  agoraphobia";
choi[1][45][2]=" c.  hydrophobia";
choi[1][45][3]=" d.  xenophobia";
q[1][46]="Choose the best answer.<br>47. The dictator was _____ by reports of unrest among the people.";
choi[1][46][0]=" a.  ashamed                              ";
choi[1][46][1]="     b.  frightened                                            ";
choi[1][46][2]=" c.  perturbed                         ";
choi[1][46][3]="        d.  ignored";
q[1][47]="Choose the best answer.<br>48. Odd one out";
choi[1][47][0]=" a. destruct";
choi[1][47][1]=" b. devastate";
choi[1][47][2]=" c. expurgate";
choi[1][47][3]=" d. disruption";
q[1][48]="Choose the best answer.<br>49. Odd one out";
choi[1][48][0]=" a. banish";
choi[1][48][1]=" b. tarnish";
choi[1][48][2]=" c. deport";
choi[1][48][3]=" d. exile";
q[1][49]="Choose the best answer.<br>50. Some medicines cause drowsiness and should not be used by people who operate machinery.";
choi[1][49][0]=" a. sleepiness";
choi[1][49][1]=" b. drunkenness";
choi[1][49][2]=" c. nervousness";
choi[1][49][3]=" d. sadness";








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
