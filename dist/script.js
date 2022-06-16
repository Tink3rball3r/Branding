const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const desktopNav = document.querySelector('.desktop-nav');
const navLink = document.querySelectorAll('.nav-link');
var prevScrollpos = window.pageYOffset;

// opens the nav menu when clicked
hamburgerBtn.addEventListener('click', function () {
	mobileNav.classList.add('slide');
});
// closes the nav menu when clicked
closeBtn.addEventListener('click', function () {
	mobileNav.classList.remove('slide');
});
// closes the nav when selection is clicked
for (let i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener('click', function () {
		mobileNav.classList.remove('slide');
	});
}

// auto hide nav
window.onscroll = function () {
	var currentScrollPos = window.scrollY;
	if (prevScrollpos > currentScrollPos) {
		desktopNav.style.top = '0';
	} else {
		desktopNav.style.top = '-6rem';
	}
	prevScrollpos = currentScrollPos;
};
