(function() {
	
	/* animation function */
	function animationClick(element, animation) {
		element = $(element);
		(element).on('click', function(){
			element.addClass('animated ' + animation);
			// wait for animation
			window.setTimeout( function(){
				element.removeClass('animated ' + animation);
			}, 2000);
		});
	}
	
	$(document).ready(function() {
		
		
	/*	 //alert("hello world");
		$('i').on('click', function(){
			var mag = $(this).find('#magnify');
			// mag.animate({'font-size': '+=4000px'}, 'slow');
			// mag.animate({'margin-top': '-=300'}, 'slow');
			$(this).closest('#magnify').animate({
				top: '-980px',
			}, 'slow');
			$(this).animate({
				'font-size': '+=4000px',
				'margin-top': '-=30px',
				'margin-left': '-=30px'
			}, 'slow');
			mag.animate({
				left: '30px'
			});
		});
	*/
	});
})();