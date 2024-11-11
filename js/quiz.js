//generate random integers
function name(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// get the numbers
var M = randInt(300,600);
var N = randInt(100,300);
var K= randInt(0,100);
alert("im here");
//update the questions-- total,giveout,takeback
document.querySelector('#total').textContent= M.toString();
document.querySelector('#giveout').textContent= N.toString();
document.querySelector('#takeback').textContent= K.toString();

// update the answers
 var T = N+K;
 var S = N-K;
 // M-N+K, M-N-K, M-(N+K), M-(N-K)
document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString + "-" + N.toString()+"+"+K.toString();
document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString + "-" + N.toString()+"-"+K.toString();
document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString + "-" + T.toString();
document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString + "-" + S.toString();
//pick the answer
function changeStyle(e){
    e.preventDefault();// prevent the checkbox been clicked
    var classname = this.getAttribute("class");
    alert("click class" + classname);
    if(classname == "answer"){
        this.setAttribute("class","answer selected");
    }else{
        this.setAttribute("class","answer selected");
    }
    //testing on anmitaion
    this.animate([{transfrom:'rotate(0deg)'},{transfrom:'rotate(180deg)'}],{duration:3000,fill:'forwards'});
}
//add answerlist
var answerlist = document.getElementsByClassName('answer');
for(var i = 0; i<4; i++){
    answerlist[i].addEventListener('click', changeStyle,false);
}