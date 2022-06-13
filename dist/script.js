const hamburgerBtn = document.querySelector('.hamburger-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-nav');
const navLink = document.querySelectorAll('.nav-link');

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
