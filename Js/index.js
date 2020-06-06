document.getElementById('photo').innerHTML =
	'<img width="100%" height="auto" src="/images/hero-mobile.jpg">';

function myFunc(x) {
	if (x.matches) {
		document.getElementById('photo').innerHTML =
			'<img src="/images/hero-desktop.jpg">';
	} else {
		document.getElementById('photo').innerHTML =
			'<img src="/images/hero-desktop.jpg">';
	}
}

var x = window.matchMedia('max-width:800px');

myFunc(x);
x.addListener(myFunc);

//grab the input
// let input = document.getElementById('email');

// //grab the input content
// let content = input.value;

// //valid email pattern
// //let patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// //function to validate email
// function validateEmail() {
// 	if (
// 		/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
// 			content
// 		)
// 	) {
// 		alert('True');
// 	} else {
// 		alert('false');
// 	}
// }

// input.addEventListener('keypress', function (e) {
// 	if (13 === e.keyCode) {
// 		validateEmail();

// 		content = '';
// 	}
// });



let input = document.getElementById('email');
let content = input.value;
let text = document.getElementById('text');

function validateEmail() {
	let patt = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (content.match(patt)) {
		text.innerHTML = 'Valid email address';
		text.style.cssText = 'color:green';
		input.classList.add('valid')
	} else {
		text.innerText = 'Please enter a valid mail address';
		text.style.cssText = 'color:red';
		input.classList.add('invalid')
	}
}

input.addEventListener('keypress', function (e) {
	if (13 === e.keyCode) {
		validateEmail();
		content = '';
	}
});
