(function() {	
	
	var url = 'http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=', // wikipedia url used in request 
		page = 'http://en.wikipedia.org/?curid=', // base url to access response articles
		input, // holds the value from the textbox
		result, // holds response ajax data
		list = $("<ul id='list'></ul>"); // 
	
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
				// $('#mainfrm').append("<span <i class=glyphicon glyphicon-search form-control-feedback></i></span>");
				 $('#mainfrm').append("<span><i class=glyphicon glyphicon-remove></i></span>");
				$('#mainfrm').addClass('easeIn');
			}, 1800);
		});
	}
	
	// When invoked, will remove all elements with corresponding class name
	function clearItems(className) {
		$(className).remove();
	}
			
	$(document).ready(function() {
		var enabled = false; // used to determine if the user has started the ajax request
		
		glassClick('#magnifyingGlass', 'pulse', 'zoomOutUp');
		
		/*$('a').on('click', function(event){
			event.preventDefault();
			
		});*/
		
		$('#mainfrm').on('submit', function(event){
			event.preventDefault(); // Prevent browser from submitting
			input = $('#searchBox').val(); // Obtain value from input textbox
			
			$.ajax({
				type: "GET",
				url: url + input + "&callback=?", // '&callback=?' used for jsonp (json w/padding)
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function (data, textStatus, jqXHR) {
					enabled = true;
					clearItems('.article'); // removes all items for the page. Allows for clean repopulation of articles
					$('#magnifyingGlass').addClass('toTop');
					result = data.query.pages;
					
					// iterate through the 'result' collection of objects and append properties to listItem
					$.each(result, function(key, value){
						$('<a href=' + page+value.pageid + '>' + '<li class="article"><h3>' + value.title + '</h3>'+
						  '<p>' + value.extract + '</p></li></a>').appendTo(list);
					});
					list.appendTo('#content');
        		},
				error: function (errorMessage) {
					alert('Error: ' + errorMessage);
				},
				complete: function() {
					if (enabled) {
						console.log('enabled true');
						console.log(input.length);
						if (input.length === 0) {
							clearItems('.article');
						}
					}
				}
			});
		});
	});
})();


