const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
	if (menu.classList.contains('active')) {
		menu.classList.remove('active');
		toggle.querySelector('a').innerHTML = '<img src="images/icons/Arrow_Down.png" alt="">';
	} else {
		menu.classList.add('active');
		toggle.querySelector('a').innerHTML = '<img src="images/icons/Close.png" alt="">';
	}
}

toggle.addEventListener('click', toggleMenu, false);