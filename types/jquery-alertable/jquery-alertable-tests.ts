//
// Examples from https://github.com/claviska/jquery-alertable
//

function example_alerts_tests() {

	// Basic example
	$.alertable.alert('Howdy!');

	// Example with action when the modal is dismissed
	$.alertable.alert('Howdy!').always(function() {
	    // Modal was dismissed
	});
}

function example_confirmations_tests() {

	// Basic example
	$.alertable.confirm('You sure?').then(function() {
	    // OK was selected
	});

	// Example with then/always
	$.alertable.confirm('You sure?').then(function() {
	    // OK was selected
	}, function() {
	    // Cancel was selected
	}).always(function() {
	    // Modal was dismissed
	});
}

function example_prompts_tests() {

	// Basic example
	$.alertable.prompt('How many?').then(function(data) {
	    // Prompt was submitted
	});

	// Example with then/always
	$.alertable.prompt('How many?').then(function(data) {
	    // Prompt was submitted
	}, function() {
	    // Prompt was canceled
	}).always(function() {
	    // Modal was dismissed
	});
}

function options_tests() {
	$.alertable.alert('Howdy!', {
	    container: 'body',
	    html: false,
	    cancelButton: '<button class="alertable-cancel" type="button">Cancel</button>',
	    okButton: '<button class="alertable-ok" type="button">OK</button>',
	    overlay: '<div class="alertable-overlay"></div>',
	    prompt: '<input class="alertable-input" type="text" name="value">',
	    modal: `<form class="alertable">
    <div class="alertable-message"></div>
    <div class="alertable-prompt"></div>
    <div class="alertable-buttons"></div>
</form>`,
		hide: () => $(this.modal).add(this.overlay).fadeOut(100),
		show: () => $(this.modal).add(this.overlay).fadeIn(100)
	});

	$.alertable.confirm('You sure?', {
	    container: 'body'
	});

	$.alertable.prompt('How many?', {
	    container: 'body'
	});

	$.alertable.defaults.container = 'body';
}
