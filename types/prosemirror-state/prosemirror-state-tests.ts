import * as state from 'prosemirror-state';
import * as model from 'prosemirror-model';
import * as transform from 'prosemirror-transform';
import * as view from 'prosemirror-view';

let plugin: state.Plugin;

plugin = new state.Plugin({
    state: {
        init() {
            // ensure that within state.init(), 'this' is of type Plugin
            const p: state.Plugin = this;
            return null;
        },

        apply(tr, value, oldState, newState) {
            // ensure that within state.apply(), 'this' is of type Plugin
            const p: state.Plugin = this;
            return null;
        },
    },

    props: {},
});

// Verify that Transaction (that extends Transform) has the correct return types
// for its builder methods. There was a bug where Transform's methods returned type
// 'Transform', rather than 'this', which prevented subclassing from working
// correctly.
const node = {} as model.Node;
const mark = {} as model.Mark;
const slice = {} as model.Slice;
const nodeRange = {} as model.NodeRange;
const step = {} as transform.Step;
const nodeType = {} as model.NodeType;

let transaction = {} as state.Transaction;

transaction = transaction.delete(0, 0);
transaction = transaction.addMark(0, 0, mark);
transaction = transaction.removeMark(0, 0);
transaction = transaction.clearIncompatible(0, nodeType);
transaction = transaction.replaceRange(0, 0, slice);
transaction = transaction.replaceRangeWith(0, 0, node);
transaction = transaction.deleteRange(0, 0);
transaction = transaction.delete(0, 0);
transaction = transaction.replace(0, 0);
transaction = transaction.replaceWith(0, 0, node);
transaction = transaction.insert(0, node);
transaction = transaction.lift(nodeRange, 0);
transaction = transaction.wrap(nodeRange, []);
transaction = transaction.setBlockType(0, 0, node.type);
transaction = transaction.setNodeMarkup(0);
transaction = transaction.split(0);
transaction = transaction.join(0);
transaction = transaction.step(step);

const res1_1: state.PluginSpec['appendTransaction'] = null;
const res1_2: state.PluginSpec['appendTransaction'] = () => {};
const res1_3: state.PluginSpec['appendTransaction'] = () => null;
const res1_4: state.PluginSpec['appendTransaction'] = () => undefined;
const res1_5: state.PluginSpec['appendTransaction'] = () => ({} as state.Transaction);

const res2_1 = new state.PluginKey();
const res2_2: state.Plugin = res2_1.get({} as state.EditorState)!;

const res3_1 = new state.Selection({} as any, {} as any);
const res3_2: state.Selection = state.Selection.findFrom({} as model.ResolvedPos, 0)!;

const res4_1 = new state.PluginKey<string>();
const res4_2: string = res4_1.getState({} as state.EditorState)!;

// @ts-expect-error
new state.Transaction({} as ConstructorParameters<typeof state.Transaction>[0]);
