import { Context, Editor } from '@ckeditor/ckeditor5-core';
import { ContextWatchdog, EditorWatchdog } from '@ckeditor/ckeditor5-watchdog';
import areconnected from '@ckeditor/ckeditor5-watchdog/src/utils/areconnectedthroughproperties';

class MyEditor extends Editor {}
const editor = new MyEditor();

let editorWatchdog = new EditorWatchdog(editor, {});
editorWatchdog = new EditorWatchdog(editor, { crashNumberLimit: 1, minimumNonErrorTimePeriod: 1, saveInterval: 4 });
editorWatchdog.crashes.map(crash => {
    crash.date === 0;
    crash.lineno! === 0;
    crash.stack === '';
    crash.message === '';
});
editorWatchdog.create('foo', { placeholder: 'foo' });
editorWatchdog.create(document.createElement('div'), { placeholder: 'foo' });
editorWatchdog.create(document.createElement('div'));

const contextWatchdog = new ContextWatchdog(new Context(), {
    crashNumberLimit: 1,
});
contextWatchdog.state.startsWith('ready');
contextWatchdog.create(new Context());
contextWatchdog.setCreator(() => Promise.resolve(editor));
contextWatchdog.getItemState('foo') === 'ready' || contextWatchdog.getItemState('foo') === 'destroyed';
contextWatchdog.add({
    config: { placeholder: 'foo' },
    id: 'foo',
    sourceElementOrData: document.createElement('div'),
    creator: () => Promise.resolve(editor),
    type: 'editor',
    destructor: editor => {
        editor.destroy();
        return Promise.resolve();
    },
});

let bool: boolean = areconnected([], []);
areconnected({ foo: 4 }, { bar: 5 }) === bool;
// @ts-expect-error
bool = areconnected([], { bar: 5 });
