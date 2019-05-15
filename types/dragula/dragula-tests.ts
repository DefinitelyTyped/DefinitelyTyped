import dragula = require("dragula");

var d1 = dragula([document.querySelector('#left'), document.querySelector('#right')]);

var d2 = dragula({
    isContainer: function (el) {
        return false;
    },
    moves: function (el, container, handle) {
        return true;
    },
    accepts: function (el, target, source, sibling) {
        return true;
    },
    invalid: function (el, target) {
        return el.tagName === 'A' || el.tagName === 'BUTTON';
    },
    direction: 'vertical',
    copy: false,
    revertOnSpill: false,
    removeOnSpill: false,
    delay: false,
    mirrorContainer: document.body,
    ignoreInputTextSelection: true
});

var d3 = dragula();

var drake = dragula({
    copy: true
});
drake.containers.push(document.querySelector('#container'));

dragula([document.getElementById('left'), document.getElementById('right')])
    .on('drag', function (el: Element) {
        el.className = el.className.replace('ex-moved', '');
    }).on('drop', function (el: Element) {
        el.className += ' ex-moved';
    }).on('over', function (el: Element, container: Element) {
        container.className += ' ex-over';
    }).on('out', function (el: Element, container: Element) {
        container.className = container.className.replace('ex-over', '');
    });
