import * as commands from 'prosemirror-commands';
import { NodeType } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';

let nodeType = new NodeType();

let state = new EditorState();
commands.deleteSelection(state);

commands.baseKeymap["Ctrl-h"];
commands.wrapIn(nodeType, { attr: 'value' });
