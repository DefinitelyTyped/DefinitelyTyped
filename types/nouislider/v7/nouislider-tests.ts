import wNumb from 'wnumb';

//basic
var basicSlider = $("<div/>").noUiSlider({
    start: 80,
    range: {
        'min': 0,
        'max': 10000
    }
});

//all options
var allOptions =  $("<div/>").noUiSlider({
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


//PIPS
allOptions.noUiSlider_pips({
    mode: 'steps',
    density: 3,
    filter: function(){return 1},
    format: wNumb({
        decimals: 2,
        prefix: '$'
    })
});


basicSlider.noUiSlider_pips({
    mode: 'values',
    values: [50, 552, 4651, 4952, 5000, 7080, 9000],
    density: 4,
    stepped: true
});

//functions

allOptions.val();

// Set one value
basicSlider.val(10);
basicSlider.val([150]);

// Set the upper handle,
// don't change the lower one.
allOptions.val([null, 14]);

// Set both slider handles
allOptions.val([13.2, 15.7]);


//link
allOptions.Link('lower').to($('<span/>'));
