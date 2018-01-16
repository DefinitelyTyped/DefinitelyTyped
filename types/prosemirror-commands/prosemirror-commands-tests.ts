import * as commands from 'prosemirror-commands';
import { NodeType } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';

const nodeType = new NodeType();

const state = new EditorState();
commands.deleteSelection(state);

commands.baseKeymap["Ctrl-h"];
commands.wrapIn(nodeType, { attr: 'value' });
