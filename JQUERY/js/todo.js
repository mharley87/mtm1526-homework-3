// JavaScript Document
$(document).ready(function () {
	
	$('option').on('click' , function (ev) {
		ev.preventDefault();
		console.log('hello');
		
		console.log($(this).attr('href'));
		$(this).css
		('background-color', '#f33');
	});
	
	
	$('form').on('submit', function (ev) {
		ev.preventDefault();
		
		var newLi = $(document.createElement('li'));
		
		if ($('#item').val() != '') {
			newLi.html($('#item').val());
			$('ul').append(newLi);
			$('#item').val('');
		}
	});

	$('ul').on('click', 'li', function (ev) {
		$(this).toggleClass('done');
	});

});