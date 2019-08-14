import * as collab from 'prosemirror-collab';
import { EditorState } from 'prosemirror-state';

const state = new EditorState();
const version = collab.getVersion(state);

let plugin;
plugin = collab.collab();
plugin = collab.collab({ version: 1 });
plugin = collab.collab({ clientID: 1 });

const sendableSteps = collab.sendableSteps(state);
sendableSteps!.clientID;
