import * as model from 'prosemirror-model';

const fragment = new model.Fragment();

let domOutputSpec: model.DOMOutputSpec;

domOutputSpec = ['div'];
domOutputSpec = ['div', { class: 'foo' }];
domOutputSpec = ['div', { class: 'foo' }, 0];
domOutputSpec = ['div', 0];
domOutputSpec = ['div', ['div', 0]];
domOutputSpec = ['div', ['div', { class: 'foo' }]];
domOutputSpec = ['div', ['div', { class: 'foo' }, 0]];

export const nodeSpec: model.NodeSpec = {
    attrs: {
        name: { default: '' }
    },
    parseDOM: [
        {
            tag: 'span[data-name]',
            getAttrs(dom) {
                if (dom instanceof HTMLElement) {
                    return {
                        name: dom.getAttribute('data-name')!
                    };
                }
            }
        }
    ],
    toDOM(node) {
        const { name } = node.attrs;
        const attrs = {
            'data-emoji-name': name
        };
        return ['span', attrs, 0];
    }
};

// Verify that non-null assertion operator can be used.

const res1_1 = new model.Node();
res1_1.nodesBetween(0, 1, () => {});
res1_1.nodesBetween(0, 1, () => null);
res1_1.nodesBetween(0, 1, () => undefined);
res1_1.nodesBetween(0, 1, () => true);
res1_1.descendants(() => {});
res1_1.descendants(() => null);
res1_1.descendants(() => undefined);
res1_1.descendants(() => true);
const res1_2: model.Node = res1_1.maybeChild(0)!;
const res1_3: model.Node = res1_1.nodeAt(0)!;

const cm1 = new model.ContentMatch();
const cm2: model.ContentMatch = cm1.matchType({} as any)!;
const cm3: model.ContentMatch = cm1.matchFragment({} as any)!;
const cm4: model.Fragment = cm1.fillBefore({} as any)!;
const cm5: model.NodeType[] = cm1.findWrapping({} as any)!;

const f1 = new model.Fragment();
f1.nodesBetween(0, 0, () => {});
f1.nodesBetween(0, 0, () => null);
f1.nodesBetween(0, 0, () => undefined);
f1.nodesBetween(0, 0, () => true);

f1.descendants(() => {});
f1.descendants(() => null);
f1.descendants(() => undefined);
f1.descendants(() => true);

const res2_1: model.Node = f1.maybeChild(0)!;
const res2_2: number = f1.findDiffStart(f1)!;
const res2_3: { a: number, b: number } = f1.findDiffEnd({} as any)!;
const res2_4: object = f1.toJSON()!;

const res3_1 = new model.ResolvedPos();
const res3_2: model.Mark[] = res3_1.marksAcross(res3_1)!;
const res3_3: model.NodeRange = res3_1.blockRange(res3_1)!;

const res4_1 = new model.NodeType();
const res4_2: model.Node = res4_1.createAndFill()!;

const res5_1 = new model.MarkType();
const res5_2: model.Mark = res5_1.isInSet([])!;
