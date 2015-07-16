//divs is the element i wanna animate

var divs = $('.header');
var range = 200;

$(window).on('scroll', function() {
	var st = $(this).scrollTop();
	divs.each(function() {
		var offset = $(this).offset().top;
		var height = $(this).outerHeight();
		offset = offset + height / 1.3;
		$(this).css({
			'opacity': (1 - ((st - offset + range) / range) )
		});
	});
});