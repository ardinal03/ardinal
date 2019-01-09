/*!
 * Ardinal Portfolio Files
 *
 */
$(document).ready(function() {
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
	$('.nav-top').on('click', function() {
		var scrollAnchor	= $(this).data('scroll'),
			scrollPoint		= $('.linked[data-anchor="'+scrollAnchor+'"]').offset().top;
		$('body,html').animate({ 
			scrollTop: scrollPoint 
		},800);
		return false;
	});
	$('.project-map a').on('click', function() {
		var anchor	= $(this).data('scroll'),
			point	= $('.showcase[data-anchor="'+anchor+'"]').offset().top;
		$('body,html').animate({ 
			scrollTop: point 
		},800);
		return false;
	});
	$ ('.back-top a').click(function() {
		$('body, html').animate({
			scrollTop: 0 
		},800);
		return false;
	});
});
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.back-top').fadeIn();
	}
	else {
		$('.back-top').fadeOut();
	}
});