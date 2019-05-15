import * as redom from 'redom';

const el1: HTMLElement = redom.el('');
const el2: HTMLElement = redom.el('p', 'Hello, World!', (el: HTMLElement) => { el.setAttribute('ok', '!'); });
const el3: HTMLElement = redom.html('p', 2, { color: 'red' });

redom.mount(document.body, el1);
redom.mount(document.body, el2, el1);
redom.unmount(document.body, el1);

redom.setAttr(el3, 'ok', '!');
redom.setAttr(el3, { ok: '!' });
redom.setStyle(el3, { color: 'blue' });
redom.setChildren(el1, [el2, el3]);

redom.mount(document.body, redom.text('Hello, World!'));

class Td implements redom.RedomComponent {
    el: HTMLElement;
    constructor() {
        this.el = redom.h('td');
    }
    update(value: any) {
        this.el.textContent = value;
    }
    onmount() {
        console.log('mounted td');
    }
}
const Tr = redom.list.extend('tr', Td);
const table = redom.list('table', Tr);
table.onmount = () => console.log('mounted table');

table.update([
    [1, 2],
    [3, 4],
]);

redom.mount(document.body, table);
