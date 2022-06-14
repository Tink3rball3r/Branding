const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const navLink = document.querySelectorAll('.nav-link');
var prevScrollpos = window.pageYOffset;

hamburgerBtn.addEventListener('click', function () {
	mobileNav.classList.add('slide');
});

closeBtn.addEventListener('click', function () {
	mobileNav.classList.remove('slide');
});

for (let i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener('click', function () {
		mobileNav.classList.remove('slide');
	});
}
// auto hide nav
window.onscroll = function () {
	var currentScrollPos = window.scrollY;
	if (prevScrollpos > currentScrollPos) {
		mobileNav.style.top = '0';
	} else {
		mobileNav.style.top = '-6rem';
	}
	prevScrollpos = currentScrollPos;
};
