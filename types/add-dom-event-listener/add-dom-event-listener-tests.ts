import * as addDomEventListener from 'add-dom-event-listener';
let count = 0;
const a = document.createElement('a');
const handle: addDomEventListener.Listener = addDomEventListener(a, 'click', () => {
    count++;
});
handle.remove();
