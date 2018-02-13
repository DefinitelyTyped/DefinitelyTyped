import * as state from 'prosemirror-state';
import * as model from 'prosemirror-model';
import * as transform from 'prosemirror-transform';

let plugin: state.Plugin;

plugin = new state.Plugin({});
plugin = new state.Plugin({
    props: {}
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
