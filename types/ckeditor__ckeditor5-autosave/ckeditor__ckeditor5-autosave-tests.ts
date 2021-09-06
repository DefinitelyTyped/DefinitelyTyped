import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { AutosaveAdapter, AutosaveConfig } from '@ckeditor/ckeditor5-autosave/src/autosave';
import { Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}
const myEditor = new MyEditor();
const plugin = new Autosave(myEditor);
plugin.once('click', () => {});
// $ExpectType false
Autosave.isContextPlugin;
const state: 'synchronized' | 'waiting' | 'saving' = 'saving';
plugin.state === state;
plugin.adapter.save(myEditor);

const adapter: AutosaveAdapter = {
    save(editor: Editor) {
        return Promise.resolve(editor);
    },
};

// $ExpectType AutoSave
myEditor.plugins.get('AutoSave');

let config: AutosaveConfig = {
    save(editor) {
        return Promise.reject(editor);
    },
};
config = {
    waitingTime: 0,
};
config = {
    save(editor: Editor) {
        return Promise.reject(editor);
    },
    waitingTime: 0,
};

new MyEditor({ autosave: config });
new MyEditor({ autosave: adapter });
