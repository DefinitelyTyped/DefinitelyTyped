import * as collab from 'prosemirror-collab';
import {EditorState} from 'prosemirror-state';

let state = new EditorState();
let version = collab.getVersion(state);
