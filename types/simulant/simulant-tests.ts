import * as simulant from 'simulant';

simulant(window, 'click'); // $ExpectType Event
simulant(window, 'click', { foo: 'bar' }); // $ExpectType Event

simulant('click'); // $ExpectType Event
simulant('click', { foo: 'bar' }); // $ExpectType Event

const div = document.createElement('div');

simulant.fire(document, new MouseEvent('click')); // $ExpectType void
simulant.fire(div, new MouseEvent('click')); // $ExpectType void

simulant.fire(document, 'click'); // $ExpectType void
simulant.fire(div, 'click'); // $ExpectType void
simulant.fire(div, 'click', { foo: 'bar' }); // $ExpectType void
