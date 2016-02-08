(function() {	
	
	var url = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='; // wikipedia url used in request 
	var page = 'http://en.wikipedia.org/?curid='; // base url to access response articles
	var input; // holds the value from the textbox
	var result; // holds response ajax data
	
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
		glassClick('#magnify', 'pulse', 'zoomOutUp');
		
		$('#mainfrm').on('submit', function(event){
			event.preventDefault(); // Prevent browser from submitting
			input = $('#searchBox').val(); // Obtain value from input textbox		
			$.ajax({
				type: "GET",
				url: url + input + "&callback=?", // '&callback=?' used for jsonp (json w/padding)
				contentType: "application/json; charset=utf-8",
        		dataType: "json",
        		success: function (data, textStatus, jqXHR) {
					$('#magnify').css('margin-top', '0px');
					result = data.query.pages;
					console.log(result); // remove comment for release
					console.log(Object.keys(result).length); // remove comment for release
					var listItem = $("<ul></ul>");
					$.each(result, function(key, value){
						console.log(key + " " + value.extract);
						$('<a href=' + page+value.pageid + 'target="_blank">' + '<li class="section"><h3>' + value.title + '</h3>'+
						  '<p>' + value.extract + '</p></li></a>').appendTo(listItem);
					});
					listItem.appendTo('#content');
        		},
        		error: function (errorMessage) {
					alert('An error occurred.');
				}
			});
		});
	});
})();


