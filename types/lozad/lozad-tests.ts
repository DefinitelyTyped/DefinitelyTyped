import lozad = require('lozad');

const observer = lozad('.lozad', {
    rootMargin: '10px 0px', // syntax similar to that of CSS Margin
    threshold: 0.1, // ratio of element convergence
    load(el) {
        console.log('loading element');

        // Custom implementation to load an element
        // e.g. el.src = el.dataset.src;
    }
});
observer.observe();
