import * as collab from 'prosemirror-collab';
import {EditorState} from 'prosemirror-state';

let state = new EditorState();
let version = collab.getVersion(state);

let plugin;
plugin = collab.collab();
plugin = collab.collab({ version: 1 });
plugin = collab.collab({ clientID: 1 });

let sendableSteps = collab.sendableSteps(state);
