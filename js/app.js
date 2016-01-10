(function() {
	
	/* animation function */
	function animationClick(element, animation1, animation2) {		
		element = $(element);
		(element).on('click', function(){
			element.addClass('animated ' + animation1);
			// wait for animation 1
			window.setTimeout( function(){
				element.removeClass('animated ' + animation1);
				element.addClass('animated ' + animation2);
				$('#label').fadeOut();
			}, 830);
		});
	}
	
	$(document).ready(function() {
		animationClick('#magnify', 'pulse', 'zoomOutUp');
	});
})();