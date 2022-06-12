import * as pym from 'pym.js';
const { Child, Parent, autoInit } = pym;

const pymParent = new pym.Parent('example-1', 'https://blog.apps.npr.org/pym.js/examples/table/child.html', {});
pymParent.onMessage('customMessage', (message: string) => {
});
pymParent.sendMessage('customMessage', 'hello from parent');
pymParent.sendViewportAndIFramePosition();
pymParent.sendWidth();

const pymChild = new pym.Child({
    polling: 1000,
});
pymChild.getParentPositionInfo();
pymChild.navigateParentTo('');
pymChild.onMessage('customMessage', (message: string) => {
});
pymChild.scrollParentTo('#foo');
pymChild.scrollParentToChildEl('#bar');
pymChild.scrollParentToChildPos(10);
pymChild.sendHeight();
pymChild.sendMessage('customMessage', 'hello from child');

pymChild.remove();
pymParent.remove();

pym.autoInit(true);

const parent = new Parent('example-1', 'https://blog.apps.npr.org/pym.js/examples/table/child.html', {});
parent.onMessage('customMessage', (message: string) => {
});
parent.sendMessage('customMessage', 'hello from parent');
parent.sendViewportAndIFramePosition();
parent.sendWidth();

const child = new Child({
    polling: 1000,
});
child.getParentPositionInfo();
child.navigateParentTo('');
child.onMessage('customMessage', (message: string) => {
});
child.scrollParentTo('#foo');
child.scrollParentToChildEl('#bar');
child.scrollParentToChildPos(10);
child.sendHeight();
child.sendMessage('customMessage', 'hello from child');

child.remove();
child.remove();

autoInit(true);
