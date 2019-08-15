/* tests from examples in the documentation at http://iamceege.github.io/tooltipster */

$(document).ready(function () {
	$('.tooltip').tooltipster();
});

$('.tooltip').tooltipster({
	theme: 'tooltipster-noir'
});

$('.tooltip').tooltipster({
	contentCloning: true
});

$('.tooltip').tooltipster({
	animation: 'fade',
	delay: 200,
	theme: 'tooltipster-punk',
	trigger: 'click'
});

// initialize your tooltip as usual:
$('#my-tooltip').tooltipster({});
// at some point you may decide to update its content:
$('#my-tooltip').tooltipster('content', 'My new content');
// ...and open it:
$('#my-tooltip').tooltipster('open');

// NOTE: most methods are actually chainable, as you would expect them to be:
$('#my-other-tooltip')
	.tooltipster({})
	.tooltipster('content', 'My new content')
	.tooltipster('open');

$('.tooltip').tooltipster({
	functionBefore: function (instance, helper) {
		instance.content('My new content');
	}
});

// Set default options for all future tooltip instantiations
$.tooltipster.setDefaults({
	side: 'bottom'
});


// The `instances` method, when used without a second parameter, allows you to access all tooltips present in the page.
// That may be useful to close all tooltips at once for example:
var instances = $.tooltipster.instances();
$.each(instances, function (i, instance) {
	instance.close();
});


$('.tooltip1').tooltipster();
$('.tooltip2').tooltipster();
// this method call will only return an array with the instances created for the elements that matched '.tooltip2' because that's the latest initializing call.
var instances = $.tooltipster.instancesLatest();

$('.tooltip').tooltipster({
	theme: ['tooltipster-noir', 'tooltipster-noir-customized']
});

$('#myelement').tooltipster('content', 'My new content');

// or when you have the instance of the tooltip:
let instance: JQueryTooltipster.ITooltipsterInstance;
instance.content('My new content');

$('.tooltip').tooltipster({
	content: 'Loading...',
	// 'instance' is basically the tooltip. More details in the "Object-oriented Tooltipster" section.
	functionBefore: function (instance, helper) {

		var $origin = $(helper.origin);

		// we set a variable so the data is only loaded once via Ajax, not every time the tooltip opens
		if ($origin.data('loaded') !== true) {

			$.get('http://example.com/ajax.php', function (data) {

				// call the 'content' method to update the content of our tooltip with the returned data.
				// note: this content update will trigger an update animation (see the updateAnimation option)
				instance.content(data);

				// to remember that the data has been loaded
				$origin.data('loaded', true);
			});
		}
	}
});

$(document).ready(function () {

	$('.tooltip').tooltipster();

	$('#example').tooltipster('open', function (instance, helper) {
		alert('The tooltip is now fully shown. Its content is: ' + instance.content());
	});

	$(window).keypress(function () {
		$('#example').tooltipster('close', function (instance, helper) {
			alert('The tooltip is now fully hidden');
		});
	});
});

$('#example').tooltipster({
	trigger: 'custom',
	triggerOpen: {
		mouseenter: true
	},
	triggerClose: {
		click: true,
		scroll: true
	}
});

$('#example').tooltipster({
	trigger: 'custom',
	triggerOpen: {
		mouseenter: true,
		touchstart: true
	},
	triggerClose: {
		click: true,
		scroll: true,
		tap: true
	}
});

$('#example').tooltipster({
	trigger: 'custom',
	triggerOpen: {
		mouseenter: true,
		touchstart: true
	},
	triggerClose: {
		mouseleave: true,
		originClick: true,
		touchleave: true
	}
});

$('#example').tooltipster({
	trigger: 'custom',
	triggerOpen: {
		click: true,
		tap: true
	},
	triggerClose: {
		click: true,
		tap: true
	}
});

$(document).ready(function () {

	// first on page load, initialize all tooltips
	$('.tooltip').tooltipster();

	// then immediately open the tooltip of the element named "example"
	$('#example').tooltipster('open');

	// as soon as a key is pressed on the keyboard, close the tooltip.
	$(window).keypress(function () {
		$('#example').tooltipster('close');
	});
});

$('#my-tooltip').tooltipster({
	functionPosition: function (instance, helper, position) {
		position.coord.top += 10;
		position.coord.left += 10;
		return position;
	}
});

$('#tooltip').tooltipster({
	content: $('#tooltip_content'),
	// if you use a single element as content for several tooltips, set this option to true
	contentCloning: false
});

$('.tooltip').tooltipster({
	functionInit: function (instance, helper) {
		var content = $(helper.origin).find('.tooltip_content').detach();
		instance.content(content);
	}
});

$('.tooltip').tooltipster({
	functionInit: function (instance, helper) {

		var $origin = $(helper.origin);
		const dataOptionsJson = $origin.attr('data-tooltipster');

		if (dataOptionsJson) {

			const dataOptions = JSON.parse(dataOptionsJson);

			// example in the documentation isn't valid:
			// $.each(dataOptions, function(name, option){
			// 		instance.option(name, option);
			// });
			Object.keys(dataOptions).forEach(key => {
				instance.option(key, dataOptions[key]);
			});
		}
	}
});

$('#example').tooltipster({
	functionInit: function (instance, helper) {

		// parse the content
		var content = instance.content(),
			people = JSON.parse(content),
			// and use it to make a sentence
			newContent = 'We have ' + people.length + ' people today. Say hello to ' + people.join(', ');

		// save the edited content
		instance.content(newContent);
	}
});

// this logs: "We have 3 people today. Say hello to Sarah, John, Matthew"
console.log($('#example').tooltipster('content'));

$('#example').tooltipster({

	functionInit: function (instance, helper) {

		var content = instance.content(),
			people = JSON.parse(content);

		instance.content(people);
	},
	// this formats the content on the fly when it needs to be displayed but does not modify its value
	functionFormat: function (instance, helper, content) {

		var displayedContent = 'We have ' + content.length + ' people today. Say hello to ' + content.join(', ');

		return displayedContent;
	}
});

// Alright! this logs: ["Sarah", "John", "Matthew"]
console.log($('#example').tooltipster('content'));

$('#my-element').tooltipster();

$('#my-element').tooltipster('open').tooltipster('content', 'My new content');

$('#my-element').tooltipster();

instance = $('#my-element').tooltipster('instance');

instance.open().content('My new content');

$('#origin').tooltipster({
	functionBefore: function (instance, helper) {
		instance.content('Random content');
	}
});

var $myElement = $('#my-element');

// create a first tooltip as usual. The multiple option is actually optional for the first tooltip
$myElement.tooltipster({
	content: 'My first tooltip',
	side: 'top'
});

// initialize a second tooltip
$myElement.tooltipster({
	// don't forget to provide content here as the first tooltip will have deleted the original title attribute of the element
	content: 'My second tooltip',
	multiple: true,
	side: 'bottom'
});

var instances = $.tooltipster.instances($myElement);

// use the instances to make any method calls on the tooltips
instances[0].content('New content for my first tooltip').open();
instances[1].content('New content for my second tooltip').open();

// WARNING: calling  methods in the usual way only affects the first tooltip that was created on the element
$myElement.tooltipster('content', 'New content for my first tooltip')

$('#my-element').tooltipster({
	content: 'HELLO',
	functionInit: function (instance, helper) {
		var string = instance.content();
		instance.content(string.toLowerCase());
	},
	multiple: true
});

$('body').on('mouseenter', '.tooltip:not(.tooltipstered)', function () {
	$(this)
		.tooltipster({})
		.tooltipster('open');
});

const doThis = () => { };
const doThat = () => { };

$("#my-tooltip").tooltipster({
	functionBefore: function (instance, helper) {
		doThis();
		doThat();
	}
});

instance = $("#my-tooltip").tooltipster({}).tooltipster('instance');

instance
	.on('before', doThis)
	.on('before', doThat);

$.tooltipster.on('init', function (event) {
	doThis();
});

$("#my-tooltip").tooltipster({
	functionInit: doThat
});

$('#example').tooltipster({
	plugins: ['pluginNamespace.pluginName']
});

$('#example').tooltipster({
	plugins: ['laa.follower']
});

$('#example').tooltipster({
	content: 'Hello',
	theme: 'tooltipster-noir',
	'laa.follower': {
			anchor: 'top-center'
	},
	'some.otherPlugin': {
			anchor: 'value'
	}
});

$('#example').tooltipster({
	functionBefore: function(instance, helper) {
			instance['laa.follower'].methodName();
	}
});

$('#nesting').tooltipster({
	content: $('<span>Hover me too!</span>'),
	functionReady: function(instance, helper){
			
			// the nested tooltip must be initialized once the first tooltip is open, that's why we do this inside functionReady()
			instance.content().tooltipster({
					content: 'I am a nested tooltip!',
					distance: 0
			});
	},
	interactive: true
});

// initialize tooltips in the page as usual
$('.tooltip').tooltipster();

// bind on start events (triggered on mouseenter)
$.tooltipster.on('start', function(event) {

    if ($(event.instance.elementOrigin()).hasClass('tooltip_group')) {

        var instances = $.tooltipster.instances('.tooltip_group'),
            open = false,
            duration;

        $.each(instances, function (i, instance) {

            if (instance !== event.instance) {

                // if another instance is already open
                if (instance.status().open){

                    open = true;

                    // get the current animationDuration
                    duration = instance.option('animationDuration');

                    // close the tooltip without animation
                    instance.option('animationDuration', 0);
                    instance.close();
                    
                    // restore the animationDuration to its normal value
                    instance.option('animationDuration', duration);
                }
            }
        });

        // if another instance was open
        if (open) {

            duration = event.instance.option('animationDuration');

            // open the tooltip without animation
            event.instance.option('animationDuration', 0);
            event.instance.open();
            
            // restore the animationDuration to its normal value
            event.instance.option('animationDuration', duration);

            // now that we have opened the tooltip, the hover trigger must be stopped
            event.instance.stop();
        }
    }
});

$('#myfield').tooltipster({
	functionInit: function(instance, helper){
			var content = $('#myfield_description').html();
			instance.content(content);
	},
	functionReady: function(instance, helper){
			$('#myfield_description').attr('aria-hidden', 'false');
	},
	functionAfter: function(instance, helper){
			$('#myfield_description').attr('aria-hidden', 'true');
	}
});

// if in addition you want the tooltip to be displayed when the field gets focus, add these custom triggers :
$('#myfield')
	.focus(function(){
			$(this).tooltipster('open');
	})
	.blur(function(){
			$(this).tooltipster('close');
	});