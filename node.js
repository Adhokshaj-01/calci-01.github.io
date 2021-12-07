var x=document.getElementById("calci");
var y=document.getElementById("icon");
document.getElementById("calci").onmousemove=function(){
  y.style.color = 'violet';

}
document.getElementById("calci").onmouseleave=function(){
  y.style.color = 'rgb(151, 248, 6)';

}
/*--Calculation--*/
function storevalue(){
  var initial=document.getElementById("range-1").value;
  document.getElementById("investment").innerHTML=initial;
  var peranum=document.getElementById("range-2").value;
  document.getElementById("intrest").innerHTML=peranum;
  var time=document.getElementById("range-3").value;
  document.getElementById("years").innerHTML=time;
  var invested=initial*time*12;
  document.getElementById("in-1").innerHTML=invested;

  var i= peranum/12/100;
   var months=time*12;
   var mature=0; 
   var mature=initial*[(Math.pow(1+i,months)-1)/i*(1+i)];
  document.getElementById("final").innerHTML=Math.round(mature); 

  var esttimated=mature-invested;
  document.getElementById("est").innerHTML=Math.round(esttimated);

}

    


