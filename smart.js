function time(){
	var today = new Date();
	var h = today.getHours()
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clocky').innerHTML = "Current Time : " + h + ":" + m + ":"+ s;
	if(h>12)
  {document.body.style.backgroundColor = 'rgb(' + 12 + ',' + 20 + ',' + 69 + ')';}
  else{
document.body.style.backgroundColor = 'rgb(' + 171 + ',' + 192 + ',' + 227 + ')';   

  }
  
  var t = setTimeout(time, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

time();

 
