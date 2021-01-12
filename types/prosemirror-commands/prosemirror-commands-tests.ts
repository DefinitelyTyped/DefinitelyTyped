import * as commands from 'prosemirror-commands';
import { NodeType } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';

const nodeType = new NodeType();

const state = new EditorState();
commands.deleteSelection(state);

commands.baseKeymap["Ctrl-h"];
commands.wrapIn(nodeType, { attr: 'value' });

const c1: commands.Command = commands.deleteSelection;
const c2: commands.Command = commands.joinBackward;

const keymap: commands.Keymap = {
    ArrowUp: () => true,  // takes no args
    ArrowDown: commands.deleteSelection,  // takes two args
    ArrowLeft: commands.joinBackward,  // takes three args
    ArrowRight: (state, dispatch, view) => true,  // arg types inferred
};

Object.keys(commands.baseKeymap).forEach(key => {
    keymap[key] = keymap[key] ? commands.chainCommands(keymap[key], commands.baseKeymap[key]) : commands.baseKeymap[key];
});
