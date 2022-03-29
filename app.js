const btn = document.getElementById("btn");


const results = document.getElementById("result");

const speechRecognition = window.speechRecognition
|| window.webkitSpeechRecognition;


const recognition = new speechRecognition();
recognition.onstart = function(){
    console.log("speek start")
}
recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    document.getElementById("result").innerHTML = text;
}
function copyDivToClipboard(){
    var range = document.createRange();
    console.log("copy")
    range.selectNode(document.getElementById("result"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();//to  deselcted
    alert("Copied the text:")
}
