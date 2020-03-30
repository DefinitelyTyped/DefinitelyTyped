var testHtmlElement = document.getElementById('test');
import wNumb from 'wnumb';

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
    pips: {
        mode: 'steps',
        density: 3,
        filter: function () { return 1 },
        format: wNumb({
            decimals: 2,
            prefix: '$'
        }),
    }
});

/**
 * Functions
 * Need to cast the HTMLElement as noUiSlider.Instance.
 */
// Get value
(<noUiSlider.Instance>testHtmlElement).noUiSlider.get();

// Set one value
(<noUiSlider.Instance>testHtmlElement).noUiSlider.set(10);
(<noUiSlider.Instance>testHtmlElement).noUiSlider.set([150]);

// Set the upper handle,
// don't change the lower one.
(<noUiSlider.Instance>testHtmlElement).noUiSlider.set([null, 14]);

// Set both slider handles
(<noUiSlider.Instance>testHtmlElement).noUiSlider.set([13.2, 15.7]);

// Events
var callback: noUiSlider.Callback = (values, handle, unencoded) => {};
(<noUiSlider.Instance>testHtmlElement).noUiSlider.on('event', callback);

(<noUiSlider.Instance>testHtmlElement).noUiSlider.off('event');

(<noUiSlider.Instance>testHtmlElement).noUiSlider.destroy();

