import * as commands from 'prosemirror-commands';
import {EditorState} from 'prosemirror-state';

let state = new EditorState();
commands.deleteSelection(state);
