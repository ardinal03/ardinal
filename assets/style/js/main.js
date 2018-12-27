$(window).scroll(function() {
	var windscroll 	= $(window).scrollTop();
	var findMe 		= $('#findme').position().top - 700;

	if (windscroll >= findMe) {
		$('.linked').each(function( i ) {
			if ($(this).position().top <= windscroll - 200) {
				$('#nav-bar li .nav-link.active').removeClass('active');
				$('#nav-bar li .nav-link').eq(i).addClass('active');
			}
		});
	}
	else {
		$('#nav-bar li .nav-link.active').removeClass('active');
		$('#nav-bar li:first .nav-link').addClass('active');
	}
}).scroll();

$(document).ready(function() {
	$('.download-link').hover(function(){
		$(this).toggleClass('hover');
	});
	
	$('#nav-bar li a.nav-link').on('click', function() {
		var scrollAnchor = $(this).data('scroll'),
			scrollPoint	 = $('.linked[data-anchor="' + scrollAnchor + '"]').offset().top - 200;
		$('body,html').animate({ 
			scrollTop: scrollPoint 
		}, 500 );
		return false;
	});

	var desktopWidth = 992;
	if ($(window).width() >= desktopWidth) {
		var headerHeight = $('#main-nav').height();
		$(window).on('scroll', { previousTop: 0 }, function() {
			var currentTop = $(window).scrollTop();
			if (currentTop < this.previousTop) {
				if(currentTop > 0 && $('#main-nav').hasClass('is-fixed')) {
					$('#main-nav').addClass('is-visible');
				} 
				else {
					$('#main-nav').removeClass('is-visible is-fixed');
				}
			}
			else if (currentTop > this.previousTop) {
				$('#main-nav').removeClass('is-visible');
				if (currentTop > headerHeight && ! $('#main-nav').hasClass('is-fixed')){
					$('#main-nav').addClass('is-fixed');
				} 
			}
			this.previousTop = currentTop;
		});
	}
});