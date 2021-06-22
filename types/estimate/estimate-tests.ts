import { element, text } from 'estimate';

function assertType<T>(value: T): T {
    return value;
}

element(document.body);
element(document.createElement('article'));
element(document.createElement('article'), {});
const estimate = element(document.createElement('article'), {
    speed: 300,
    spaces: /\W+/g,
});

assertType<number>(estimate.progress);
assertType<number>(estimate.remaining);
assertType<number>(estimate.total);
estimate.update();
estimate.initialize();

text('text');
text('text', {});
text('text', {
    speed: 300,
    spaces: /\W+/g,
});

assertType<number>(text('text'));
