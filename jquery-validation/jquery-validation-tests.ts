/// <reference path="jquery-validation.d.ts" />


function testValidate() {
	// debug
	$('.selector').validate({
		debug: true
	});

	// submitHandler
	$('.selector').validate({
		submitHandler: function(form) {
			// do other things for a valid form
			form.submit();
		}
	});

	// invalidHandler
	$('.selector').validate({
		invalidHandler: function(event, validator) {
			// 'this' refers to the form
			var errors = validator.numberOfInvalids();
			if (errors) {
				var message = errors == 1
					? 'You missed 1 field. It has been highlighted'
					: 'You missed ' + errors + ' fields. They have been highlighted';
				$('div.error span').html(message);
				$('div.error').show();
			} else {
				$('div.error').hide();
			}
		}
	});

	// ignore
	$('#myform').validate({
		ignore: '.ignore'
	});

	// rules
	$('.selector').validate({
		rules: {
			// at least 15€ when bonus material is included
			pay_what_you_want: {
				required: true,
				min: {
					// min needs a parameter passed to it
					param: 15,
					depends: function(element: any) {
						return $('#bonus-material').is(':checked');
					}
				}
			}
		}
	});

	// messages
	$('.selector').validate({
		rules: {
			name: 'required',
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: 'Please specify your name',
			email: {
				required: 'We need your email address to contact you',
				email: 'Your email address must be in the format of name@domain.com'
			}
		}
	});


	// groups
	$('#myform').validate({
		groups: {
			username: 'fname lname'
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'fname' || element.attr('name') == 'lname' ) {
				error.insertAfter('#lastname');
			} else {
				error.insertAfter(element);
			}
		}
	});

	// onSubmit, onfocusout, onkeyup, onclick
	$('.selector').validate({
		onsubmit: false,
		onfocusout: false,
		onkeyup: false,
		onclick: false,
	});

	$('.selector').validate({
		onsubmit: false,
		onfocusout: false,
		onkeyup: false,
		onclick: function(elt) { return 2; }
	});

	// focusInvalid, focusCleanup
	$('.selector').validate({
		focusInvalid: false,
		focusCleanup: false
	});

	// errorClass, validClass, errorElement
	$('.selector').validate({
		errorClass: 'invalid',
		validClass: 'success',
		errorElement: 'em'
	});

	// wrapper
	$('.selector').validate({
		wrapper: 'li'
	});



	// errorLabelContainer, errorContainer
	$('#myform').validate({
		errorContainer: '#messageBox1, #messageBox2',
		errorLabelContainer: '#messageBox1 ul',
		wrapper: 'li', debug:true,
		submitHandler: function() { alert('Submitted!') }
	});

	// showErrors
	$('.selector').validate({
		showErrors: function(errorMap, errorList) {
			$('#summary').html('Your form contains '
							   + this.numberOfInvalids()
							   + ' errors, see details below.');
			this.defaultShowErrors();
		}
	});

	// success
	$('#myform').validate({
		success: 'valid',
		submitHandler: function() { alert('Submitted!') }
	});

	$('#myform').validate({
		success: function(label) {
			label.addClass('valid').text('Ok!')
		},
		submitHandler: function() { alert('Submitted!') }
	});

	// highlight, unhighlight
	$('.selector').validate({
		highlight: function(element, errorClass, validClass) {
			$(element).addClass(errorClass).removeClass(validClass);
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).removeClass(errorClass).addClass(validClass);
		}
	});

	// ignoreTitle
	$('.selector').validate({
		ignoreTitle: true
	});
}


function testValid() {
	var form = $( '#myform' );
	form.validate();
	$( 'button' ).click(function() {
		alert( 'Valid: ' + form.valid() );
	});
}


function testRules() {
	<Object> $('#myinput').rules();

	$('#myinput').rules('add', {
		minlength: 2
	});

	$('#myinput').rules('add', {
		required: true,
		minlength: 2,
		messages: {
			required: 'Required input',
			minlength: $.validator.format('Please, at least {0} characters are necessary')
		}
	});

	$('#myinput').rules('remove');
	$('#myinput').rules('remove', 'min max');
}


function testValidatorStatic() {
	$.validator.addMethod('domain', function(value, element) {
		return this.optional(element) || /^http:\/\/mycorporatedomain.com/.test(value);
	}, 'Please specify the correct domain for your documents');

	$.validator.setDefaults({
		debug: true
	});

	$.validator.format('{0}');
	$.validator.format('{0} {1}')('a', 2);
	$.validator.format('{0} {1}', 'a', 2);
	$.validator.format('{0} {1}', ['a', 2]);

	$.validator.addClassRules({
		name: {
			required: true,
			minlength: 2
		},
		zip: {
			required: true,
			digits: true,
			minlength: 5,
			maxlength: 5
		}
	});
}
