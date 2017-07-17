// Tests for ViewabilityHelper API

import {ViewabilityHelper, Options} from 'viewability-helper';

let d: Element = document.createElement('DIV');
let vh: ViewabilityHelper = new ViewabilityHelper(d, () => {});
vh.observe();

// Test with options

let options: Options = {
  callbackParams: [1, 'a', null],
  rootMargin: '0px',
  intersectionPercentage: 0,
  scrollDimmer: 200,
  unobserve: true,
  threshold: [0]
};

let vh2: ViewabilityHelper = new ViewabilityHelper(d, () => {}, options);
vh2.observe();
