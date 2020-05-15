document.getElementById('photo').innerHTML =
	'<img width="100%" height="auto" src="/images/hero-mobile.jpg">';

//const mq = window.matchMedia('(min-width: 800px)');

// function resize(x){
// 	if(x.matches){
// 	'<img width="100%" height="auto" src="/images/hero-desktop.jpg">';
// 	}else{
// 		'<img width="100%" height="auto" src="/images/hero-mobile.jpg">';
// 	}
// }

// const x = window.matchMedia(' (min-width:800px) ');
// resize(x)
// x.addListener(resize);



function myFunc(x) {
	if (x.matches) {
		document.getElementById('photo').innerHTML =
			'<img src="/images/hero-desktop.jpg">';
	}else {
		document.getElementById('photo').innerHTML =
			'<img src="/images/hero-desktop.jpg">';
	}
}

var x = window.matchMedia('max-width:800px');

myFunc(x);
x.addListener(myFunc);



