import applyDevTools from 'prosemirror-dev-tools';
import { EditorView } from 'prosemirror-view';

const view = new EditorView({} as any, {} as any);
applyDevTools(view);
applyDevTools(view, {});
applyDevTools(view, { diffWorker: new Worker('asd') });
