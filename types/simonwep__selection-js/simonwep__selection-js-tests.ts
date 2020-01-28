import Selection = require('@simonwep/selection-js');

const selection = Selection.create({
    class: '.selection',
    mode: 'touch',
    boundaries: ['.boundary'],
    selectables: ['.selectable'],
    disableTouch: false,
    selectionAreaContainer: document.body,
    startareas: ['html'],
    singleClick: true,
    startThreshold: 10,
    scrollSpeedDivider: 10
});

const selectable = document.createElement('div');

selection.on('beforestart', (e) => (e.oe.target as HTMLElement).matches('.selectable'));
selection.on('move', e => {
    e.inst.cancel();
    e.area.matches('.area');
    e.changed.added;
    e.changed.removed;
});
selection.on('start', () => {});
selection.on('stop', () => {});

selection.off('beforestart', (e) => (e.oe.target as HTMLElement).matches('.selectable'));
selection.off('move', e => {
    e.inst.cancel();
    e.area.matches('.area');
    e.changed.added;
    e.changed.removed;
});
selection.off('start', () => {});
selection.off('stop', () => {});

selection.cancel();
selection.clearSelection();
selection.destroy();
selection.disable();
selection.enable();
selection.getSelection();
selection.keepSelection();

// 2nd args not accept undefined
// SEE: https://github.com/Simonwep/selection/blob/0f5de7710200bf76b2f31389ab81ff73392c98d1/src/selection.js#L563
selection.option('class', null);
selection.option('class', '.selection');
selection.removeFromSelection(selectable);
selection.resolveSelectables();
selection.select('.selectable');
selection.select(selectable);
selection.select(['.selectable', selectable]);
