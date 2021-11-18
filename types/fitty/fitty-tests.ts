import fitty = require('fitty');

fitty('#my-element', {
    minSize: 12,
    maxSize: 300,
});

const fitties = fitty('.fit');
const myFittyElement = (fitties as fitty.FittyInstance[])[0].element;
(fitties as fitty.FittyInstance[])[0].fit();
(fitties as fitty.FittyInstance[])[0].unsubscribe();
myFittyElement.addEventListener('fit' as keyof HTMLElementEventMap, e => console.log((e as fitty.FittyEvent).detail));
const observeWindow = fitty.observeWindow;
const observeWindowDelay = fitty.observeWindowDelay;
fitty.fitAll();
