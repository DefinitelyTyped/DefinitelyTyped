import pym from 'pym.js';

const pymParent = new pym.Parent('example-1', 'https://blog.apps.npr.org/pym.js/examples/table/child.html', {});
new pym.Child({});
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
