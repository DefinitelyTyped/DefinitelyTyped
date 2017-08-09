import elementReady = require('element-ready');

const p = elementReady('#unicorn');

p.then(element => {
    const el: HTMLElement = element;
});

p.cancel();
