const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerBtn.addEventListener('click', function () {
	mobileNav.classList.add('slide');
});

closeBtn.addEventListener('click', function () {
	mobileNav.classList.remove('slide');
});

// function myFunction(x) {
// 	x.classList.toggle('change');
// }
