
var txt= '   ' + document.title + '   '
var tempo=500;
var mov=null;
function titulo() {
document.title=txt;
txt=txt.substring(1,txt.length)+txt.charAt(0); mov=setTimeout("titulo()",tempo);}
titulo();
