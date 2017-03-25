import * as history from 'prosemirror-history';
import {EditorState} from 'prosemirror-state';

let state = new EditorState();
history.undo(state);
