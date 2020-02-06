import noUiSlider = require("nouislider");
import wNumb from 'wnumb';

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
 * Start
 */
noUiSlider.create(testHtmlElement, {
    start: [20, 80],
    range: {
        'min': [ 0 ],
        'max': [ 100 ]
    }
});

/**
 * Handles
 */
noUiSlider.create(testHtmlElement, {
    start: [ 4000, 8000 ],
    range: {
        'min': [  2000 ],
        'max': [ 10000 ]
    }
});

/**
 * More than two handles
 */
noUiSlider.create(testHtmlElement, {
    start: [ 4000, 8000, 12000, 16000 ],
    connect: [false, true, true, false, true],
    range: {
        'min': [  2000 ],
        'max': [ 20000 ]
    }
});

/**
 * Range
 */
noUiSlider.create(testHtmlElement, {
    start: [ 4000 ],
    range: {
        'min': [  2000 ],
        'max': [ 10000 ]
    }
});

/**
 * Stepping and snapping to values
 */
noUiSlider.create(testHtmlElement, {
    start: [ 4000 ],
    step: 1000,
    range: {
        'min': [  2000 ],
        'max': [ 10000 ]
    }
});

/**
 * Non-linear sliders
 */
noUiSlider.create(testHtmlElement, {
    start: [ 4000 ],
    range: {
        'min': [  2000 ],
        '30%': [  4000 ],
        '70%': [  8000 ],
        'max': [ 10000 ]
    }
});

/**
 * Stepping in non-linear sliders
 */
noUiSlider.create(testHtmlElement, {
    start: [ 500, 4000 ],
    range: {
        'min': [     0 ],
        '10%': [   500,  500 ],
        '50%': [  4000, 1000 ],
        'max': [ 10000 ]
    }
});

/**
 * Snapping between steps
 */
noUiSlider.create(testHtmlElement, {
    start: [ 0, 500 ],
    snap: true,
    connect: true,
    range: {
        'min': 0,
        '10%': 50,
        '20%': 100,
        '30%': 150,
        '40%': 500,
        '50%': 800,
        'max': 1000
    }
});

/**
 * Connect
 */
noUiSlider.create(testHtmlElement, {
    start: 40,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    }
});
noUiSlider.create(testHtmlElement, {
    start: [20, 40, 60],
    connect: [true, false, true, true],
    range: {
        'min': 0,
        'max': 80
    }
});
noUiSlider.create(testHtmlElement, {
    start: 40,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});
noUiSlider.create(testHtmlElement, {
    start: 40,
    connect: 'upper',
    range: {
        'min': 0,
        'max': 100
    }
});

/**
 * Margin
 */
noUiSlider.create(testHtmlElement, {
    start: [ 20, 80 ],
    margin: 30,
    range: {
        'min': 0,
        'max': 100
    }
});

/**
 * Limit
 */
noUiSlider.create(testHtmlElement, {
    start: [ 10, 120 ],
    limit: 40,
    behaviour: 'drag',
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

/**
 * Steps
 */
noUiSlider.create(testHtmlElement, {
    start: [ 20, 80 ],
    step: 10,
    range: {
        'min': 0,
        'max': 100
    }
});

/**
 * Orientation
 */
noUiSlider.create(testHtmlElement, {
    start: 40,
    orientation: 'vertical',
    range: {
        'min': 0,
        'max': 100
    }
});

/**
 * Direction
 */
noUiSlider.create(testHtmlElement, {
    start: 20,
    direction: 'rtl',
    range: {
        'min': 0,
        'max': 100
    }
});

/**
 * Tooltips
 */
noUiSlider.create(testHtmlElement, {
    start: [20, 80, 120],
    range: {
        'min': 0,
        'max': 200
    },
    tooltips: [ false, wNumb({ decimals: 1 }), true ]
});

/**
 * Animate
 */
noUiSlider.create(testHtmlElement, {
    animate: true,
    animationDuration: 300,
    start: 20,
    range: {
        min: 0,
        max: 100
    }
});
noUiSlider.create(testHtmlElement, {
    animate: false,
    start: 20,
    range: {
        min: 0,
        max: 100
    }
    });

/**
 * Behaviour
 */
noUiSlider.create(testHtmlElement, {
    start: [ 20, 40 ],
    step: 10,
    behaviour: 'drag',
    connect: true,
    range: {
        'min':  20,
        'max':  80
    }
    });
noUiSlider.create(testHtmlElement, {
    start: 40,
    behaviour: 'tap',
    connect: [false, true],
    range: {
        'min':  20,
        'max':  80
    }
});
noUiSlider.create(testHtmlElement, {
    start: [ 40, 60 ],
    behaviour: 'drag',
    connect: true,
    range: {
        'min':  20,
        'max':  80
    }
});
noUiSlider.create(testHtmlElement, {
    start: [ 40, 60 ],
    behaviour: 'drag-fixed',
    connect: true,
    range: {
        'min':  20,
        'max':  80
    }
});
noUiSlider.create(testHtmlElement, {
    start: 40,
    behaviour: 'snap',
    connect: [true, false],
    range: {
        'min':  20,
        'max':  80
    }
});
noUiSlider.create(testHtmlElement, {
    start: 20,
    behaviour: 'hover-snap',
    direction: 'rtl',
    range: {
        'min':  0,
        'max':  10
    }
});
noUiSlider.create(testHtmlElement, {
    start: [ 40, 60 ],
    behaviour: 'drag-tap',
    connect: true,
    range: {
        'min':  20,
        'max':  80
    }
});

/**
 * Pips: range
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
var range_all_sliders = {
    'min': [     0 ],
    '10%': [   500,  500 ],
    '50%': [  4000, 1000 ],
    'max': [ 10000 ]
};
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    pips: {
        mode: 'range',
        density: 3
    }
})
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    direction: 'rtl',
    pips: {
        mode: 'range',
        density: 3
    }
});
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    orientation: 'vertical',
    pips: {
        mode: 'range',
        density: 3
    }
});
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    orientation: 'vertical',
    direction: 'rtl',
    pips: {
        mode: 'range',
        density: 3
    }
});

/**
 * Pipes: Steps
 */
function filter500( value: any, type: any ){
    return value % 1000 ? 2 : 1;
}
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    pips: {
        mode: 'steps',
        density: 3,
        filter: filter500,
        format: wNumb({
            decimals: 2,
            prefix: '$'
        })
    }
});

/**
 * Pipes: Positions
 */
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    pips: {
        mode: 'positions',
        values: [0,25,50,75,100],
        density: 4
    }
});
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    pips: {
        mode: 'positions',
        values: [0,25,50,75,100],
        density: 4,
        stepped: true
    }
});

/**
 * Pipes: Count
 */
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    pips: {
        mode: 'count',
        values: 6,
        density: 4
    }
});
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    pips: {
        mode: 'count',
        values: 6,
        density: 4,
        stepped: true
    }
});

/**
 * Pipes: Values
 */
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    pips: {
        mode: 'values',
        values: [50, 552, 2251, 3200, 5000, 7080, 9000],
        density: 4
    }
});
noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    pips: {
        mode: 'values',
        values: [50, 552, 4651, 4952, 5000, 7080, 9000],
        density: 4,
        stepped: true
    }
});

/**
 * Updates tests
 */
const slider = noUiSlider.create(testHtmlElement, {
    range: range_all_sliders,
    start: 0,
    pips: {
        mode: 'values',
        values: [50, 552, 2251, 3200, 5000, 7080, 9000],
        density: 4,
    },
});

// noUiSlider has an update method that can change the 'margin',
// 'padding', 'limit', 'step', 'range', 'pips', 'tooltips', 'animate' and 'snap' options.
slider.updateOptions({
    margin: 1,
    padding: 2,
    limit: 3,
    step: 4,
    range: range_all_sliders,
    pips: {
        mode: 'values',
        values: [50, 552, 2251, 3200, 5000, 7080, 9000],
        density: 4,
    },
    tooltips: [false, wNumb({ decimals: 1 }), true],
    animate: true,
});
// Options that can not be updated will be ignored without errors.
slider.updateOptions({
    animationDuration: 1,
    behaviour: 'drag',
    direction: 'ltr',
    format: wNumb({
        decimals: 2,
        prefix: '$',
    }),
});
// The value null can be used to unset a previously set value.
slider.updateOptions({
    margin: null,
    padding: null,
    limit: null,
    step: null,
    range: null,
    pips: null,
    tooltips: null,
    animate: null,
});

// The `set` event fires when the slider values are restored.
// If this is unwanted, you can pass `false` as the second parameter, `fireSetEvent`.
slider.updateOptions(
    {
        animate: true,
    },
    false,
);

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

// Set both slider handles
(<noUiSlider.Instance>testHtmlElement).noUiSlider.reset();

// Events
var callback: noUiSlider.Callback = (values, handle, unencoded) => {};
(<noUiSlider.Instance>testHtmlElement).noUiSlider.on('event', callback);

(<noUiSlider.Instance>testHtmlElement).noUiSlider.off('event');

(<noUiSlider.Instance>testHtmlElement).noUiSlider.destroy();

