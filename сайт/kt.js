polych='';
shet=0;
function send_text() {
	shet +=1;
	text1=document.getElementById('text').value;
	let parent = document.querySelector('#kotis_txt');
	polych+="<div class='user_text'>"+text1+"</div>\n";
	if (text1=="Привет") {
		polych+="<div class='kotis_text'>Привет,создатель!</div>\n";
	}
	if (text1=="Как дела?") {
		polych+="<div class='kotis_text'>Нормально!</div>\n";
	}
	if (shet < 5) {
	 document.getElementById('kotis_txt').innerHTML=polych;
}
	console.log(polych)
	if (shet >= 5) {
		polych = polych.split("\n").slice(2).join("\n");
		document.getElementById('kotis_txt').innerHTML=polych;
	}
}

f=0;
function set_black_background(){
	if (f== 0){
		document.getElementById('porodi').style.backgroundColor = 'black';
		document.getElementById('kotis').style.backgroundColor = 'black';
		f= 1;
	} else {
		document.getElementById('porodi').style.backgroundColor = 'white';
		document.getElementById('kotis').style.backgroundColor = 'white';
		f= 0
	}
}