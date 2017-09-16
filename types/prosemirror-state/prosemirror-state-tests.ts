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

let transaction: state.Transaction;

transaction = new state.Transaction(node).delete(0, 0);
transaction = new state.Transaction(node).addMark(0, 0, mark);
transaction = new state.Transaction(node).removeMark(0, 0);
transaction = new state.Transaction(node).clearMarkup(0, 0);
transaction = new state.Transaction(node).replaceRange(0, 0, slice);
transaction = new state.Transaction(node).replaceRangeWith(0, 0, node);
transaction = new state.Transaction(node).deleteRange(0, 0);
transaction = new state.Transaction(node).delete(0, 0);
transaction = new state.Transaction(node).replace(0, 0);
transaction = new state.Transaction(node).replaceWith(0, 0, node);
transaction = new state.Transaction(node).insert(0, node);
transaction = new state.Transaction(node).lift(nodeRange, 0);
transaction = new state.Transaction(node).wrap(nodeRange, []);
transaction = new state.Transaction(node).setBlockType(0, 0, node.type);
transaction = new state.Transaction(node).setNodeType(0);
transaction = new state.Transaction(node).split(0);
transaction = new state.Transaction(node).join(0);
transaction = new state.Transaction(node).step(step);
