import * as history from 'prosemirror-history';
import { EditorState } from 'prosemirror-state';

const state = new EditorState();
history.undo(state);
