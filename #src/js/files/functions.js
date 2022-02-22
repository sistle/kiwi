const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu");
const headerBody = document.querySelector('.header');

function delay(time, status) {
	setTimeout(() => {
		open = status;
	}, time);
}
iconMenu.addEventListener("click", openCloseMenu);

function openCloseMenu(event) {
	if (iconMenu && open) {
		open = false;
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle("active");
		menuBody.classList.toggle("active");
		headerBody.classList.toggle("active");
		delay(500, true);
	}
}


