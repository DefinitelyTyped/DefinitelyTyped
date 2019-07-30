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
    scrollSpeedDivider: 10,
    onStart(ev) {
        ev.originalEvent.currentTarget;
        ev.changedElements.added.slice();
        ev.changedElements.removed.slice();
    },
    onSelect(ev) {
        ev.target;
    },
    onMove(ev) {
        ev.selection;
    },

    validateStart(ev) {
        return (ev.currentTarget as HTMLElement).matches('.selectable');
    },
    onStop(ev) {
        ev.changedElements.added.slice();
        ev.changedElements.removed.slice();
    },
    selectionFilter(ev) {
        return ev.element.matches('.selectable');
    },
});

const selectable = document.createElement('div');

selection.cancel();
selection.clearSelection();
selection.destroy();
selection.disable();
selection.enable();
selection.getSelection();
selection.keepSelection();
// 2nd args not accept undefined
// SEE: https://github.com/Simonwep/selection/blob/master/src/selection.js#L528
selection.option('class', null);
selection.option('class', '.selection');
selection.removeFromSelection(selectable);
selection.resolveSelectables();
selection.select('.selectable');
selection.select(selectable);
selection.select(['.selectable', selectable]);
