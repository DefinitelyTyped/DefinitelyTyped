import * as collab from 'prosemirror-collab';
import { EditorState } from 'prosemirror-state';
import { Step } from 'prosemirror-transform';

const state = new EditorState();
const version = collab.getVersion(state);

let plugin;
plugin = collab.collab();
plugin = collab.collab({ version: 1 });
plugin = collab.collab({ clientID: 1 });

const sendableSteps = collab.sendableSteps(state);
sendableSteps!.clientID;

declare const steps: Step[];
declare const clientIDs: Array<string | number>;
collab.receiveTransaction(state, steps, clientIDs);
collab.receiveTransaction(state, steps, clientIDs, {});
collab.receiveTransaction(state, steps, clientIDs, { mapSelectionBackward: true });
collab.receiveTransaction(state, steps, clientIDs, { invalidOption: true }); // $ExpectError
