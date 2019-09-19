import scrollToElement from 'scroll-to-element';

scrollToElement('#id');

// with options
scrollToElement('.className', {
	offset: 0,
	ease: 'out-bounce',
	duration: 1500
});

// or if you already have a reference to the element
const elem = document.querySelector('.className');
if (elem) {
    scrollToElement(elem, {
        offset: 0,
        ease: 'out-bounce',
        align: 'top',
        duration: 1500
    });
}
