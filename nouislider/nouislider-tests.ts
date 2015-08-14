/// <reference path="nouislider.d.ts" />

var testHtmlElement = document.getElementById('test');

/**
 * Basic
 */
noUiSlider.create(testHtmlElement, {
	start: 80,
	range: {
		'min': 0,
		'max': 10000
	}
});

/**
 * All options
 */
noUiSlider.create(testHtmlElement, {
	start: [ 20, 80 ],
	step: 10,
	margin: 20,
	connect: true,
	direction: 'rtl',
	orientation: 'vertical',

	// Configure tapping, or make the selected range dragable.
	behaviour: 'tap-drag',

	// Full number format support.
	format: wNumb({
		mark: ',',
		decimals: 1
	}),

	// Support for non-linear ranges by adding intervals.
	range: {
		'min': 0,
		'max': 100
	}
});

/**
 * Pips
 */
noUiSlider.create(testHtmlElement, {
    start: 0,
    range: {
        min: 0,
        max: 10
    },
	mode: 'steps',
	density: 3,
	filter: function(){return 1},
	format: wNumb({
		decimals: 2,
		prefix: '$'
	}),
    pips: {
        mode: 'range',
        density: 3,
    	values: [50, 552, 4651, 4952, 5000, 7080, 9000]
    }
});

/**
 * Functions
 * Need to cast the HTMLElement as noUiSliderInstance.
 */
// Get value
(<noUiSliderInstance>testHtmlElement).noUiSlider.get();

// Set one value
(<noUiSliderInstance>testHtmlElement).noUiSlider.set(10);
(<noUiSliderInstance>testHtmlElement).noUiSlider.set([150]);

// Set the upper handle,
// don't change the lower one.
(<noUiSliderInstance>testHtmlElement).noUiSlider.set([null, 14]);

// Set both slider handles
(<noUiSliderInstance>testHtmlElement).noUiSlider.set([13.2, 15.7]);

// Events
var callback: noUiSliderCallback = (values, handle, unencoded) => {};
(<noUiSliderInstance>testHtmlElement).noUiSlider.on('event', callback);

(<noUiSliderInstance>testHtmlElement).noUiSlider.off('event');

(<noUiSliderInstance>testHtmlElement).noUiSlider.destroy();

