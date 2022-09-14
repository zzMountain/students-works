function data_vremia() {
	document.getElementById('demo').innerHTML = Date()
}
function furm() {
	name=document.getElementById('name').value;
	nameF=document.getElementById('nameF').value;
	nameP=document.getElementById('nameP').value;
	nameT=document.getElementById('nameT').value;
	if (nameT.length== 11){
		alert(name+' '+nameF+' '+nameP+' '+nameT);
	} else {
		alert('В номере телефона 11 символов!')
	}
	
}
function set_red_background(){
	document.body.style.backgroundColor = "red";
	document.getElementById('title').innerHTML = 'red';
}
function set_blue_background(){
	document.body.style.backgroundColor = "blue";
	document.getElementById('title').innerHTML = 'blue';
}
function set_yellow_background(){
	document.body.style.backgroundColor = "yellow";
	document.getElementById('title').innerHTML = 'yellow';
}
function set_COLOR1_background(){
	document.body.style.backgroundColor = "#99ff99";
	document.getElementById('title').innerHTML = '#99ff99';
}
function set_c2_background(){
	document.body.style.backgroundColor = "#ff33cc";
	document.getElementById('title').innerHTML = '#ff33cc';
}
function set_c3_background(){
	document.body.style.backgroundColor = "#bab86c";
	document.getElementById('title').innerHTML = '#bab86c';
}
function set_c4_background(){
	document.body.style.backgroundColor = "#803e75";
	document.getElementById('title').innerHTML = '#803e75';
}
function set_c5_background(){
	document.body.style.backgroundColor = "#fdbdba";
	document.getElementById('title').innerHTML = '#fdbdba';
}
f=0;
function change_style(){
	if (f== 0){
		document.getElementById('title').style.fontSize ="75px"
		document.getElementById('title').style.color ='green'
		document.getElementById('title').style.fontStyle ='Italic';
		f= 1;
	} else {
		document.getElementById('title').style.fontSize ="100px"
		document.getElementById('title').style.color ='yellow'
		document.getElementById('title').style.fontStyle ='Comic Sans MS';
		f= 0
	}
}
