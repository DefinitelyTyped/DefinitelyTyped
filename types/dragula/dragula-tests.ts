const d1 = dragula([document.querySelector('#left')!, document.querySelector('#right')!]);

const d2 = dragula({
    isContainer(el) {
        return false;
    },
    moves(el, container, handle) {
        return true;
    },
    accepts(el, target, source, sibling) {
        return true;
    },
    invalid(el, target) {
        if (el) {
            return el.tagName === 'A' || el.tagName === 'BUTTON';
        }
        return false;
    },
    direction: 'vertical',
    copy: false,
    copySortSource: true,
    revertOnSpill: false,
    removeOnSpill: false,
    delay: false,
    mirrorContainer: document.body,
    ignoreInputTextSelection: true,
});

const d3 = dragula();

const drake = dragula({
    copy: true,
});

drake.containers.push(document.querySelector('#container')!);

dragula([document.getElementById('left')!, document.getElementById('right')!])
    .on('cancel', () => {})
    .on('cloned', () => {})
    .on('drag', () => {})
    .on('dragend', () => {})
    .on('drop', () => {})
    .on('drop', () => {})
    .on('out', () => {})
    .on('over', () => {})
    .on('remove', () => {})
    .on('shadow', () => {})
    .on('cancel', (el, container) => {})
    .on('cloned', (clone, original, type) => {})
    .on('drag', (el, source) => {})
    .on('dragend', el => {})
    .on('drop', (el, target, source, sibling) => {})
    .on('out', (el, containers, source) => {})
    .on('over', (el, container, source) => {})
    .on('remove', (el, container, source) => {})
    .on('shadow', (el, container, source) => {});

drake.containers.push(document.querySelector('#container')!);
