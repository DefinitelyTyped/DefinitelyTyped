import * as Mark from 'mark.js';

/* test instance */
const mark = new Mark(document.querySelectorAll('div'));
const markBySelector = new Mark('div');
const markByElement = new Mark(document.body);

mark.mark('keyword');
mark.mark('keyword', {
    element: "span",
    className: "highlight"
});
mark.mark(['keyword1', 'keyword2']);
mark.markRegExp(/regex/, {className: 'highlight'});
mark.markRanges([{start: 0, length: 10}], {
    className: 'highlight',
    each: (el: Element, range: Mark.Range) => {
        el.id = '';
    },
    filter: (text: Text) => {
        text.textContent = '';
        return true;
    }
});

/* test jquery */
$("div.context").mark("text", {
    element: "span",
    className: "highlight"
});
