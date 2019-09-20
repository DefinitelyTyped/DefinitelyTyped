import lozad = require('lozad');

const observer = lozad('.lozad', {
    rootMargin: '10px 0px', // syntax similar to that of CSS Margin
    threshold: 0.1, // ratio of element convergence
    load(el) {
        console.log('loading element');

        // Custom implementation to load an element
        // e.g. el.src = el.dataset.src;
    },
    loaded(el) {
        console.log('loaded element');
    }
});
observer.observe();

const singleElement = document.getElementById('hello');
if (singleElement) {
    const observer2 = lozad(singleElement);
    observer2.triggerLoad(singleElement);
}

const elementsCollection = document.getElementsByClassName('lozad');
if (elementsCollection) lozad(elementsCollection);

const nodeList = document.querySelectorAll('.images');
if (nodeList) lozad(nodeList);

observer.observer.disconnect();
