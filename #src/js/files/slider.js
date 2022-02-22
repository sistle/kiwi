const users = ['img/user-slide-1.png', 'img/user-slide-2.png', 'img/user-slide-3.png', 'img/user-slide-4.png'];

new Swiper('.blog__inner', {
	touchRatio: 2,
	observer: true,
	observeParents: true,
	watchOverflow: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		320: {


			spaceBetween: 20,
			slidesPerView: 1,
		},
		480: {

			slidesPerView: 2,
			spaceBetween: 15,
		},
		800: {

			slidesPerView: 3,
			spaceBetween: 30,
		},

	}
});


const sliderText = new Swiper('.about-feedback__slider', {
	touchRatio: 2,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	watchOverflow: true,
	spaceBetween: 35,
	navigation: {
		nextEl: '.about-feedback__next',
		prevEl: '.about-feedback__prev',
	},

	centeredSlides: true,
	slidesPerView: 1,

});

const sliderUser = new Swiper('.slider-user__slider', {
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	watchOverflow: true,
	fadeEffect: { crossFade: true },
	virtualTranslate: true,
	speed: 1000,
	slidersPerView: 1,
	effect: "fade",
	// simulateTouch:false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<div class="slider-user__bullet slider-user__bullet--' + index + ' ' + className + '"> <img class="slider-user__bullet-img slider-user__bullet-img--' + index + '" src="' + users[index] + '"></div>'
		}
	},


	// grabCursor: true,

	spaceBetween: 35,
	centeredSlides: true,

});

sliderUser.controller.control = sliderText;
sliderText.controller.control = sliderUser;