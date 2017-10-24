import * as Selectables from "selectables";

const dr = new Selectables({
    zone: '#div',
    elements: 'li'
});

// later
dr.disable();

// enable again
dr.enable();

// set options
dr.options.key = 'altKey';
