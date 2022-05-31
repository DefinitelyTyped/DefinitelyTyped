import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { AutosaveAdapter, AutosaveConfig } from '@ckeditor/ckeditor5-autosave/src/autosave';
import { Editor } from '@ckeditor/ckeditor5-core';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';

class MyEditor extends Editor {}
const myEditor = new MyEditor();
const plugin = new Autosave(myEditor);
// $ExpectError
plugin.once('click', () => {});
plugin.once(
    'change:isEnabled',
    (..._args: [info: EventInfo<Autosave, 'change:isEnabled'>, value: boolean, oldValue: boolean]) => {},
);
// $ExpectType Promise<unknown>
plugin.save();
// $ExpectType false
Autosave.isContextPlugin;
const state: 'synchronized' | 'waiting' | 'saving' = 'saving';
plugin.state === state;
// $ExpectError
plugin.state = state;
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
