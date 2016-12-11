$(function(){

	var form = $('#contact-form');
	$(form).submit(function(e){
		e.preventDefault();
		var d = $(form).serialize();
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: d
		}).done(function(r, statusText, xhr){

			$('#name').val('');
			$('#mail').val('');
			$('#message').val('');
			$('#contact-form #send').removeClass('failed').addClass('success');
			$('#contact-form-message').hide();

		}).fail(function(d){
			$('#contact-form-message').show();
			$('#contact-form #send').removeClass('success').addClass('failed');
		}).always(function(){

		});
		
	})

	
});