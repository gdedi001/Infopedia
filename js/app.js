(function() {
		/*
	var api = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=',
	 	cb = '&callback=JSON_CALLBACK',
		pageLink = 'http://en.wikipedia.org/?curid=';
		*/
	
	/* animation function */
	function glassClick(element, animation1, animation2) {		
		element = $(element);
		(element).on('click', function(){
			element.addClass('animated ' + animation1);
			// wait for animation 1
			window.setTimeout( function(){
				element.removeClass('animated ' + animation1);
				element.addClass('animated ' + animation2);
				$('#label').fadeOut();
			}, 830);
			window.setTimeout( function(){
				$('#mainfrm').append("<input id='searchBox' type='text' name='search' style='text-align:center' autofocus>");
				$('#mainfrm').addClass('easeIn');
			}, 1800);
		});
	}
		
	$(document).ready(function() {
		var url = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
		
		glassClick('#magnify', 'pulse', 'zoomOutUp');
		
		$('#mainfrm').on('submit', function(event){
			event.preventDefault(); // Prevent browser from submitting
			var input = $('#searchBox').val(); // Obtain value from input textbox
			
			// Perform AJAX request and perform required actions
			$.ajax({
				type: "GET",
				url: "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + input + "&callback=?",
				contentType: "application/json; charset=utf-8",
        		dataType: "json",
        		success: function (data, textStatus, jqXHR) {
					console.log(data);
        		},
        		error: function (errorMessage) {
					alert('Error occured, please contact a qualified developer.');
				}
			});
		});
	});
})();












