//------show message--------

//---------time--------
var currentTime = new Date();
      hours = currentTime.getHours();
      minutes = currentTime.getMinutes();
if (minutes < 10) {
minutes = "0" + minutes;
  }

document.getElementById("time").innerHTML=hours + ":" + minutes;


//-------play and pause audio------------
var x = document.getElementById("myAudio");
$('#msg').empty();
  $('#timer').empty();
function play() {
    $('#msg').empty();
    $('#timer').empty();
  z.pause();
      $('#msg').empty();
      $('#timer').empty();
  x.play();
    $('#timer').empty();
//  var a= document.getElementById("image");
var newcontent='';
newcontent="<img src='img.png'>";
newcontent+="<p>Nee hima mazha</p>"
console.log(newcontent);
document.getElementById("image").innerHTML=newcontent;
}

var z = document.getElementById("myaudio1");
function play1() {
  $('#msg').empty();
  $('#timer').empty();
  x.pause();
    $('#timer').empty();
  $('#msg').empty();
  z.play();
      $('#timer').empty();
//  var a= document.getElementById("image");
var newcontent='';
newcontent="<img src='img.png'>";
newcontent+="<p>Malarea mounamea</p>"
console.log(newcontent);
document.getElementById("image").innerHTML=newcontent;
}
function pauseAudio() {
  x.pause();
  z.pause();
}
//hide and show the values
$(document).ready(function(){
  $(".far").click(function(){
    $("#image").hide();
        $('#timer').empty();
  });
  $("#vedio").click(function(){
    $("#image").show();
        $('#timer').empty();
  });
  $("#timerr").click(function(){
    $("#timer").show();
      $("#image").hide();
        $("#msg").empty();
                  });
          $("#pause").click(function(){
            $("#image").show();
        $('#timer').empty();
          });
          $("#forword").click(function(){
            $("#image").show();
        $('#timer').empty();
          });
          $("#back").click(function(){
            $("#image").show();
        $('#timer').empty();
          });
});
$(document).ready(function(){
    $('.far').click(function(){
        debugger;
        let xhr=new XMLHttpRequest();
        xhr.open('POST','data.json',true);

        xhr.onload=function(){
            responseOject=JSON.parse(xhr.responseText);
            var i=0;
            var newMessages='';
            for(i=0;i<responseOject.messages.length;i++){
                newMessages+=' <a id="msgId">'+responseOject.messages[i].name+'</a><br>';
                newMessages+='<a id="ms">'+responseOject.messages[i].msg+'</a><br><br>';
            }
            document.getElementById('msg').innerHTML=newMessages;
            console.info(newMessages);
        };
        xhr.send(null);
        //xhr.close();

          });
  });
  $('#timerr').click(function(){
    var newmsg='';
    newmsg='<h1><time>00:00:00</time></h1>';
    newmsg+='<button id="start">start</button>';
    newmsg+='<button id="stop">stop</button>';
    newmsg+='<button id="clear">Reset</button>';
document.getElementById("timer").innerHTML=newmsg;

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;
  function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();
/* Start button */
start.onclick = timer;
/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}
/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
  });
