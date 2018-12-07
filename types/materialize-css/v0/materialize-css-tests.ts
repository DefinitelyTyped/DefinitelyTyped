// Buttons
$('.fixed-action-btn').openFAB();
$('.fixed-action-btn').closeFAB();

// Forms - Select
$('select').material_select();
$('select').material_select('destroy');

// Forms - Date Picker
$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 15 // Creates a dropdown of 15 years to control year
});

// Forms - Character Counter
$('input#input_text, textarea#textarea1').characterCounter();

// Navbar
$(".dropdown-button").dropdown();
$(".dropdown-button").dropdown({ hover: false });

$(".button-collapse").sideNav();

// Collapsible
let collapseHtml = '<ul class="collapsible" data-collapsible="accordion">' +
	'<li>' +
	'<div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>' +
	'<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>' +
	'</li>' +
	'<li>' +
	'<div class="collapsible-header"><i class="material-icons">place</i>Second</div>' +
	'<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>' +
	'</li>' +
	'<li>' +
	'<div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>' +
	'<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>' +
	'</li>' +
	'</ul>';

$(collapseHtml).collapsible({ accordion: false, onClose: () => { alert('Closed'); } });
$(collapseHtml).collapsible({ accordion: true, onOpen: () => { alert('Opened'); } });
$(collapseHtml).collapsible('destroy');
$(collapseHtml).collapsible('open', 0);

// Dialogs - Toasts
Materialize.toast('I am a toast!', 4000);
Materialize.toast('I am a toast!', 3000, 'rounded');
Materialize.toast('I am a toast!', 3000, 'rounded', () => console.log('callback'));
let $toastContent = $('<span>I am toast content</span>');
Materialize.toast($toastContent, 5000);
Materialize.Toast.removeAll();

// Dialogs - Tooltip
let tooltipHtml = '<a class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="I am tooltip">Hover me!</a>';
$(tooltipHtml).tooltip();
$(tooltipHtml).tooltip({ delay: 100 });
$(tooltipHtml).tooltip('remove');

// DropDown
let dropDownHtml = '<a class="dropdown-button btn" data-beloworigin="true" href="#" data-activates="dropdown1">Drop Me!</a>';
$(dropDownHtml).dropdown({
	inDuration: 300,
	outDuration: 225,
	constrainWidth: false, // Does not change width of dropdown to that of the activator
	hover: true, // Activate on hover
	gutter: 0, // Spacing from edge
	belowOrigin: false, // Displays dropdown below the button
	alignment: 'left', // Displays dropdown with edge aligned to the left of button
	stopPropagation: false // Stops event propagation
});
$(dropDownHtml).dropdown({});

// Media - materialbox
let materialboxHtml = '<img class="materialboxed" width="650" src="images/sample-1.jpg">';
$(materialboxHtml).materialbox();

// Media - slider
let sliderHtml = '<div class="slider">' +
	'<ul class="slides">' +
	'<li>' +
	'<img src="http://lorempixel.com/580/250/nature/1"> <!-- random image -->' +
	'<div class="caption center-align">' +
	'<h3>This is our big Tagline!</h3>' +
	'<h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>' +
	'</div>' +
	'</li>' +
	'<li>' +
	'<img src="http://lorempixel.com/580/250/nature/2"> <!-- random image -->' +
	'<div class="caption left-align">' +
	'<h3>Left Aligned Caption</h3>' +
	'<h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>' +
	'</div>' +
	'</li>' +
	'<li>' +
	'<img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->' +
	'<div class="caption right-align">' +
	'<h3>Right Aligned Caption</h3>' +
	'<h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>' +
	'</div>' +
	'</li>' +
	'<li>' +
	'<img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->' +
	'<div class="caption center-align">' +
	'<h3>This is our big Tagline!</h3>' +
	'<h5 class="light grey-text text-lighten-3">Here\'s our small slogan.</h5>' +
	'</div>' +
	'</li>' +
	'</ul>' +
	'</div>';

$(sliderHtml).slider();
$(sliderHtml).slider({});
$(sliderHtml).slider({ indicators: true });
$(sliderHtml).slider({ indicators: true, height: 5 });
$(sliderHtml).slider({ indicators: true, height: 5, transition: 4 });
$(sliderHtml).slider({ indicators: true, height: 5, transition: 4, interval: 5 });

// Carousel
$('.carousel').carousel();
$('.carousel').carousel({});
$('.carousel').carousel({ duration: 200, dist: -100, shift: 500, padding: 6000, fullWidth: true, indicators: false, noWrap: false });

// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.

// Modals
let modalhtml = '<div id="modal1" class="modal bottom-sheet">' +
	'<div class="modal-content">' +
	'<h4>Modal Header</h4>' +
	'<p>A bunch of text</p>' +
	'</div>' +
	'<div class="modal-footer">' +
	'<a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>' +
	'</div>' +
	'</div>';
$(modalhtml).modal('open');
$(modalhtml).modal('close');
$(modalhtml).modal('open', {
	complete: () => console.log('model close event') // Callback for Modal close
});

let modalTriggerHtml = '<button data-target="modal1" class="btn modal-trigger">Modal</button>';
$(modalTriggerHtml).modal();
$(modalTriggerHtml).modal({});
$(modalTriggerHtml).modal({ dismissible: true });
$(modalTriggerHtml).modal({ dismissible: true, opacity: 1 });
$(modalTriggerHtml).modal({ dismissible: true, opacity: 1, inDuration: 100 });
$(modalTriggerHtml).modal({ dismissible: true, opacity: 1, inDuration: 100, outDuration: 100 });
$(modalTriggerHtml).modal({ dismissible: true, opacity: 1, inDuration: 100, outDuration: 100, startingTop: "4%" });
$(modalTriggerHtml).modal({ dismissible: true, opacity: 1, inDuration: 100, outDuration: 100, startingTop: "4%", endingTop: "10%" });
$(modalTriggerHtml).modal({ dismissible: true, opacity: 1, inDuration: 100, outDuration: 100, startingTop: "4%", endingTop: "10%", ready: () => console.log('ready') });
$(modalTriggerHtml).modal({
	dismissible: true,
	opacity: 1,
	inDuration: 100,
	outDuration: 100,
	startingTop: "4%",
	endingTop: "10%",
	ready: () => console.log('ready'),
	complete: () => console.log('complete'),
});

// Parallax
let parallaxHtml = '<div class="parallax-container">' +
	'<div class="parallax"><img src="images/parallax1.jpg"></div>' +
	'</div>';
$(parallaxHtml).parallax();

// PushPin
$('<div />').pushpin();
$('<div />').pushpin({ top: 1 });
$('<div />').pushpin({ top: 1, bottom: 1 });
$('<div />').pushpin({ top: 1, bottom: 1, offset: 2 });

// ScrollFire
let options = [
	{ selector: '.class', offset: 200, callback: 'console.log(".class")' },
	{ selector: '.other-class', offset: 200, callback: 'console.log(".other-class")' },
];
Materialize.scrollFire(options);

$(".scrollspy").scrollSpy();

// Side-Nav
let sideNavHtml = '<nav>' +
	'<ul class="right hide-on-med-and-down">' +
	'<li><a href="#!">First Sidebar Link</a></li>' +
	'<li><a href="#!">Second Sidebar Link</a></li>' +
	'</ul>' +
	'<ul id="slide-out" class="side-nav">' +
	'<li><a href="#!">First Sidebar Link</a></li>' +
	'<li><a href="#!">Second Sidebar Link</a></li>' +
	'</ul>' +
	'<a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>' +
	'</nav>';
$(sideNavHtml).sideNav();
$(sideNavHtml).sideNav({});
$(sideNavHtml).sideNav({ menuWidth: 100 });
$(sideNavHtml).sideNav({ menuWidth: 100, edge: 'right' });
$(sideNavHtml).sideNav({ menuWidth: 100, edge: 'right', closeOnClick: true });
$(sideNavHtml).sideNav({ menuWidth: 100, edge: 'right', closeOnClick: true, draggable: false });
$(sideNavHtml).sideNav({ menuWidth: 100, edge: 'right', closeOnClick: true, draggable: false, onClose: () => console.log('onClose') });
$(sideNavHtml).sideNav({ menuWidth: 100, edge: 'right', closeOnClick: true, draggable: false, onClose: () => console.log('onClose'), onOpen: () => console.log('onOpen') });
$(sideNavHtml).sideNav("show");
$(sideNavHtml).sideNav("hide");

// Tabs
let tabsHtml = '<div class="row">' +
	'<div class="col s12">' +
	'<ul class="tabs">' +
	'<li class="tab col s3"><a href="#test1">Test 1</a></li>' +
	'<li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>' +
	'<li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>' +
	'<li class="tab col s3"><a href="#test4">Test 4</a></li>' +
	'</ul>' +
	'</div>' +
	'<div id="test1" class="col s12">Test 1</div>' +
	'<div id="test2" class="col s12">Test 2</div>' +
	'<div id="test3" class="col s12">Test 3</div>' +
	'<div id="test4" class="col s12">Test 4</div>' +
	'</div>';

$(tabsHtml).tabs();
$(tabsHtml).tabs('select_tab', 'test1');
$(tabsHtml).tabs({ onShow: (currentTab: any) => console.log(currentTab), swipeable: false, responsiveThreshold: 5000 });

// Transitions
Materialize.showStaggeredList('#staggered-test');

Materialize.updateTextFields();

let chipsHTML = '<div class="chips"></div>' +
	'<div class="chips chips-initial"></div>' +
	'<div class="chips chips-placeholder"></div>' +
	'<div class="chips chips-autocomplete"></div>';

$(chipsHTML).material_chip();
$(chipsHTML).material_chip({
	data: [{
		tag: 'Apple',
	}, {
		tag: 'Microsoft',
	}, {
		tag: 'Google',
	}],
});

$('.chips-placeholder').material_chip({
	placeholder: 'Enter a tag',
	secondaryPlaceholder: '+Tag',
});
$('.chips-autocomplete').material_chip({
	autocompleteData: {
		Apple: null,
		Microsoft: null,
		Google: null
	}
});

$('.chips-autocomplete').material_chip({
	autocompleteOptions: {
		data: {
			Apple: null,
			Microsoft: null,
			Google: null
		},
		limit: Infinity,
		minLength: 1
	}
});

let chipData: Materialize.ChipDataObject | Materialize.ChipDataObject[] = $('.chips-initial').material_chip('data');

$('.timepicker').pickatime({
	default: 'now', // Set default time: 'now', '1:30AM', '16:30'
	fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
	twelvehour: false, // Use AM/PM or 24-hour format
	donetext: 'OK', // text for done-button
	cleartext: 'Clear', // text for clear-button
	canceltext: 'Cancel', // Text for cancel-button
	autoclose: false, // automatic close timepicker
	ampmclickable: true, // make AM PM clickable
	aftershow: () => {} // Function for after opening timepicker
});

$('input.autocomplete').autocomplete({
	data: {
		Apple: null,
		Microsoft: null,
		Google: 'https://placehold.it/250x250'
	},
	limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
	onAutocomplete: (val) => {
		// Callback function when value is autcompleted.
	},
	minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
});

$('.tap-target').tapTarget('open');
$('.tap-target').tapTarget('close');
