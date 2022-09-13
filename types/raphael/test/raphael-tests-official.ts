// Tests from the official github repo
// Use code from the tests at https://github.com/DmitryBaranovskiy/raphael/blob/master/dev/test/svg/dom.js
// Slightly changed to stub QUnit calls

declare const QUnit: {
    module(name: string, tests: Record<string, (...args: any[]) => void>): void;
    test(name: string, test: (...args: any[]) => void): void;
};

declare const element: HTMLElement;

(assert => {
    let paper: import("raphael").RaphaelPaper;
    const url = 'http://raphaeljs.com';

    QUnit.module('DOM', {
        beforeEach: () => {
            paper = new Raphael(element, 1000, 1000);
        },
        afterEach: () => {
            paper.remove();
        }
    });

    const equalNodePosition = (...args: any[]) => { };

    const equalNodePositionWrapped = (...args: any[]) => { };

    // Element#insertBefore
    // --------------------

    QUnit.test('insertBefore: no element', assert => {
        const el = paper.rect(0, 0, 0, 0);

        el.insertBefore(el);

        equalNodePosition(assert, el.node, paper.canvas, null, null);
    });

    QUnit.test('insertBefore: first element', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0);

        el.insertBefore(x);

        equalNodePosition(assert, el.node, paper.canvas, null, x.node);
    });

    QUnit.test('insertBefore: middle element', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const y = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0);

        el.insertBefore(y);

        equalNodePosition(assert, el.node, paper.canvas, x.node, y.node);
    });

    QUnit.test('insertBefore: no element when wrapped in <a>', assert => {
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertBefore(el);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, null, null);
    });

    QUnit.test('insertBefore: first element when wrapped in <a>', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertBefore(x);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, null, x.node);
    });

    QUnit.test('insertBefore: first element wrapped in <a> and wrapped in <a>', assert => {
        const x = paper.rect(0, 0, 0, 0).attr('href', url);
        const xAnchor = x.node.parentNode;
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertBefore(x);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, null, xAnchor);
    });

    QUnit.test('insertBefore: middle element when wrapped in <a>', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const y = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertBefore(y);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, x.node, y.node);
    });

    QUnit.test('insertBefore: middle element wrapped in <a> and wrapped in <a>', assert => {
        const x = paper.rect(0, 0, 0, 0).attr('href', url);
        const xAnchor = x.node.parentNode;
        const y = paper.rect(0, 0, 0, 0).attr('href', url);
        const yAnchor = y.node.parentNode;
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertBefore(y);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, xAnchor, yAnchor);
    });

    // TODO...
    // insertBefore: with set
    // insertBefore: with nested set.

    // Element#insertAfter
    // -------------------

    QUnit.test('insertAfter: no element', assert => {
        const el = paper.rect(0, 0, 0, 0);

        el.insertAfter(el);

        equalNodePosition(assert, el.node, paper.canvas, null, null);
    });

    QUnit.test('insertAfter: last element', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0);

        el.insertAfter(x);

        equalNodePosition(assert, el.node, paper.canvas, x.node, null);
    });

    QUnit.test('insertAfter: middle element', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const y = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0);

        el.insertAfter(x);

        equalNodePosition(assert, el.node, paper.canvas, x.node, y.node);
    });

    QUnit.test('insertAfter: no element when wrapped in <a>', assert => {
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertAfter(el);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, null, null);
    });

    QUnit.test('insertAfter: last element when wrapped in <a>', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertAfter(x);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, x.node, null);
    });

    QUnit.test('insertAfter: last element wrapped in <a> and wrapped in <a>', assert => {
        const x = paper.rect(0, 0, 0, 0).attr('href', url);
        const xAnchor = x.node.parentNode;
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertAfter(x);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, xAnchor, null);
    });

    QUnit.test('insertAfter: middle element when wrapped in <a>', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const y = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertAfter(x);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, x.node, y.node);
    });

    QUnit.test('insertAfter: middle element wrapped in <a> and wrapped in <a>', assert => {
        const x = paper.rect(0, 0, 0, 0).attr('href', url);
        const xAnchor = x.node.parentNode;
        const y = paper.rect(0, 0, 0, 0).attr('href', url);
        const yAnchor = y.node.parentNode;
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.insertAfter(x);

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, xAnchor, yAnchor);
    });

    // TODO...
    // insertAfter: with set
    // insertAfter: with nested set.

    // Element#remove
    // --------------

    QUnit.test('remove: after added', assert => {
        const el = paper.rect(0, 0, 0, 0);
        const node = el.node;

        el.remove();

        assert.equal(el.node, null);
        assert.equal(node.parentNode, null);
    });

    QUnit.test('remove: when wrapped in <a>', assert => {
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const node = el.node;
        const anchor = node.parentNode;

        el.remove();

        assert.equal(el.node, null);
        assert.equal(node.parentNode, anchor);
        if (anchor) {
            assert.equal(anchor.parentNode, null);
        }
    });

    QUnit.test('remove: when already removed', assert => {
        const el = paper.rect(0, 0, 0, 0);
        const node = el.node;

        el.remove();
        el.remove();

        assert.equal(el.node, null);
        assert.equal(node.parentNode, null);
    });

    QUnit.test('remove: when the canvas is removed', assert => {
        const el = paper.rect(0, 0, 0, 0);
        const node = el.node;

        paper.remove();
        el.remove();

        assert.equal(el.node, null);
        assert.equal(node.parentNode, null);
    });

    // Element#toFront
    // --------------

    QUnit.test('toFront: normal', assert => {
        const el = paper.rect(0, 0, 0, 0);
        const x = paper.rect(0, 0, 0, 0);

        el.toFront();

        equalNodePosition(assert, el.node, paper.canvas, x.node, null);
    });

    QUnit.test('toFront: when wrapped in <a>', assert => {
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;
        const x = paper.rect(0, 0, 0, 0);

        el.toFront();

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, x.node, null);
    });

    // Element#toBack
    // --------------

    QUnit.test('toBack: normal', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0);

        el.toBack();

        equalNodePosition(assert, el.node, paper.canvas, null, null);
        equalNodePosition(assert, x.node, paper.canvas, null, null);
    });

    QUnit.test('toBack: when wrapped in <a>', assert => {
        const x = paper.rect(0, 0, 0, 0);
        const el = paper.rect(0, 0, 0, 0).attr('href', url);
        const anchor = el.node.parentNode;

        el.toBack();

        equalNodePositionWrapped(assert, el.node, anchor, paper.canvas, null, null);
        equalNodePosition(assert, x.node, paper.canvas, null, null);
    });
})();
