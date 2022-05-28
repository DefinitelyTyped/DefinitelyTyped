import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { AutosaveAdapter, AutosaveConfig } from '@ckeditor/ckeditor5-autosave/src/autosave';
import { Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}
const myEditor = new MyEditor();
const plugin = new Autosave(myEditor);
plugin.once('click', () => {});
// $ExpectType Promise<void>
plugin.save();
// $ExpectType false
Autosave.isContextPlugin;
const state: 'synchronized' | 'waiting' | 'saving' = 'saving';
plugin.state === state;
// $ExpectError
plugin.state = state;
plugin.set('state', 'waiting');
// $ExpectError
plugin.set('foo', 'bar');
plugin.adapter.save(myEditor);

const adapter: AutosaveAdapter = {
    save(editor: Editor) {
        return Promise.resolve(editor);
    },
};

// $ExpectType Autosave
myEditor.plugins.get('Autosave');

let config: AutosaveConfig = {
    save(editor) {
        return Promise.reject(editor);
    },
};
config = {
    save(editor) {
        return Promise.reject(editor);
    },
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
// $ExpectType number | undefined
new MyEditor().config.get("autosave.waitingTime");
