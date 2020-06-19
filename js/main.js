$(document).ready(function() {
	const mMenuBtn = $(".m-menu-button");
	const mSearsh = $(".mobile-button-img");
	const mMenu = $(".m-menu");
	const tab = $(".tab");

	mMenuBtn.on("click", function() {
		mMenu.toggleClass("active");
		$("body").toggleClass("no-scroll");
	});

//	mSearsh.on("click", function() {
//		mMenu.toggleClass("active");
//		$("body").toggleClass("no-scroll");
//	});


		tab.on("click", function () {
			tab.removeClass("active");
			$(this).toggleClass("active");
			$(this).attr("data-target");
			let activeTabContent = $(this).attr("data-target");
			$(".tabs-content").removeClass("visible");
			$(activeTabContent).toggleClass("visible");
		});


		var mySwiper = new Swiper (".swiper-container", {
		slidesPerView: 4,
		spaceBetween: 25,
		loop: true,
		breakpoints: {
			992: {
				slidesPerView: 4,
			},
			769: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
				navigation: {
					nextEl: ".button-next",
				},
			},
		},
	})
});