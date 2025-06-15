//console.log(document.querySelector('#title_p').style.fontSize);

//setTimeout(, 2000);

var min = document.querySelector('#minus');
var plu = document.querySelector('#plus');
var lor = document.querySelector('#lorem');
var siz = document.querySelector('#pxs');
var pxst = document.querySelector('#px_stat');
var remst = document.querySelector('#rem_stat');
var sho = document.querySelector('#show');
var about_cl = document.querySelector('#about');
var about_pa = document.querySelector('#about_p');
var site = document.querySelector('#site');

var minlet;
var pluslet;

const storedM = localStorage.getItem('mnozit');

siz.value = 16;
lor.style.fontSize = "16px";
sho.style.fontSize = "16px";

var mno = document.querySelector('#rempx');
var mnozitel = 16;

if(storedM)
{
	pxst.innerHTML = 1*siz.value;
	remst.innerHTML = (1*siz.value)/storedM;
	mno.value = storedM;
	mnozitel = 1*storedM;
}
else
{
	pxst.innerHTML = 1*siz.value;
	remst.innerHTML = (1*siz.value)/mnozitel;
	mno.value = 16;
}

mno.addEventListener('keyup', function(){

	mnozitel = 1*(mno.value);
	localStorage.setItem('mnozit', mnozitel);
	remst.innerHTML = (1*siz.value)/mnozitel;
	//console.log(mnozitel);

});

var mint;
var plust;

var random = Math.floor(Math.random()*10)+1;
var random2 = Math.floor(Math.random()*10)+1;
/*console.log(random);
console.log(random2);*/

/*random = 1;
random2 = 10;*/

if(random == 1 && random2 == 10)
{
	lor.value = "\r\n\r\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⠜⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⠿⠿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿\r\n⣿⣿⡏⠁⠀⠀⠀⠀⠀⣀⣠⣤⣤⣶⣶⣶⣶⣶⣦⣤⡄⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿\r\n⣿⣿⣷⣄⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡧⠇⢀⣤⣶⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⣾⣮⣭⣿⡻⣽⣒⠀⣤⣜⣭⠐⢐⣒⠢⢰⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⡟⣾⣿⠂⢈⢿⣷⣞⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣷⣶⣾⡿⠿⣿⠗⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠋⠉⠑⠀⠀⢘⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⣿⡿⠟⢹⣿⣿⡇⢀⣶⣶⠴⠶⠀⠀⢽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⣿⣿⣿⡿⠀⠀⢸⣿⣿⠀⠀⠣⠀⠀⠀⠀⠀⡟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠹⣿⣧⣀⠀⠀⠀⠀⡀⣴⠁⢘⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿\r\n⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⠗⠂⠄⠀⣴⡟⠀⠀⡃⠀⠉⠉⠟⡿⣿⣿⣿⣿\r\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⠾⠛⠂⢹⠀⠀⠀⢡⠀⠀⠀⠀⠀⠙⠛⠿⢿";
}
else
{
	lor.value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

/*lor.value = "bruh";
lor.value += "\r\n";
lor.value += "bruh";*/

sho.readOnly = true;

function mini (){

	if(siz.value >= 2)
	{
		siz.value--;
		lor.style.fontSize = siz.value + "px";
		sho.style.fontSize = siz.value + "px";
		pxst.innerHTML = 1*siz.value;
		remst.innerHTML = (1*siz.value)/mnozitel;
	}

	mint = setTimeout(function(){

		minlet = setInterval(minin, 31);

	}, 469);

};

function minin(){

	if(siz.value >= 2)
	{
		siz.value--;
		lor.style.fontSize = siz.value + "px";
		sho.style.fontSize = siz.value + "px";
		pxst.innerHTML = 1*siz.value;
		remst.innerHTML = (1*siz.value)/mnozitel;
	}

}

//

function plusi (){

	siz.value++;
	lor.style.fontSize = siz.value + "px";
	sho.style.fontSize = siz.value + "px";
	pxst.innerHTML = 1*siz.value;
	remst.innerHTML = (1*siz.value)/16;

	plust = setTimeout(function(){

		pluslet = setInterval(plusin, 31);

	}, 469);

};

function plusin(){

	siz.value++;
	lor.style.fontSize = siz.value + "px";
	sho.style.fontSize = siz.value + "px";
	pxst.innerHTML = 1*siz.value;
	remst.innerHTML = (1*siz.value)/mnozitel;

};

//

function endis (){

	clearTimeout(mint);
	clearTimeout(plust);
	clearInterval(minlet);
	clearInterval(pluslet);

};

//min.addEventListener("Touch")

document.addEventListener('keydown', function(e) {
    
	if((/*e.keyCode == 37 ||*/ e.keyCode == 40 || e.keyCode == 109) && siz.value >= 2)
	{
		siz.value--;
		lor.style.fontSize = siz.value + "px";
		sho.style.fontSize = siz.value + "px";
		pxst.innerHTML = 1*siz.value;
		remst.innerHTML = (1*siz.value)/mnozitel;
	}
	else if(/*e.keyCode == 39 ||*/ e.keyCode == 38 || e.keyCode == 107)
	{
		siz.value++;
		lor.style.fontSize = siz.value + "px";
		sho.style.fontSize = siz.value + "px";
		pxst.innerHTML = 1*siz.value;
		remst.innerHTML = (1*siz.value)/mnozitel;
	}

});

function losiz(){

	if(siz.value <= 0)
	{
		lor.style.fontSize = "0px";
		pxst.innerHTML = 0;
		remst.innerHTML = 0;
	}
	else
	{
		lor.style.fontSize = siz.value + "px";
		sho.style.fontSize = siz.value + "px";
		pxst.innerHTML = 1*siz.value;
		remst.innerHTML = (1*siz.value)/mnozitel;
	}

}

lor.addEventListener('keyup', function(){

	sho.innerHTML = lor.value;

});

lor.addEventListener('dblclick', function(){

	sho.style.display = "block";
	/*console.log("sus");*/
	/*document.querySelector('body').innerHTML = sho;*/

});

sho.addEventListener('dblclick', function(){

	sho.style.display = "none";
	/*document.querySelector('body').innerHTML = sho;*/

});

var bod = document.querySelector('body')

var logo = document.querySelector('#t_log');
/*logo.addEventListener('click', function(){

	bod.style.filter = "blur(5px)"

});*/

var oka = false;

about_cl.addEventListener('click', function(){

	/*bod.classList.toggle('body_b');
	about_cl.classList.toggle('btn_ub');
	about_pa.classList.toggle('p_sh');
	about_pa.style.display = "block";*/

	if(oka == false)
	{
		about_pa.style.display = "block";
		site.classList.add('sitence');
		oka = true;
	}
	else
	{
		about_pa.style.display = "none";
		site.classList.remove('sitence');
		oka = false;
	}

});

logo.addEventListener("dblclick", function(){

	site.classList.toggle("inv");

});