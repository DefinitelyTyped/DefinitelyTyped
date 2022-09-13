import { Context, Editor } from "@ckeditor/ckeditor5-core";
import WD from "@ckeditor/ckeditor5-watchdog";
import areconnected from "@ckeditor/ckeditor5-watchdog/src/utils/areconnectedthroughproperties";

class MyEditor extends Editor {}
const editor = new MyEditor();

let editorWatchdog = new WD.EditorWatchdog(editor, {});
editorWatchdog = new WD.EditorWatchdog(editor, { crashNumberLimit: 1, minimumNonErrorTimePeriod: 1, saveInterval: 4 });
editorWatchdog.crashes.map(crash => {
    let num = crash.date;
    num = crash.lineno!;
    let str = crash.stack;
    str = crash.message;
});
editorWatchdog.create("foo", { placeholder: "foo" });
editorWatchdog.create(document.createElement("div"), { placeholder: "foo" });
editorWatchdog.create(document.createElement("div"));

const contextWatchdog = new WD.ContextWatchdog(new Context(), {
    crashNumberLimit: 1,
});
let str = contextWatchdog.state;
contextWatchdog.create(new Context());
contextWatchdog.setCreator(() => Promise.resolve(editor));
str = contextWatchdog.getItemState("foo");
contextWatchdog.add({
    config: { placeholder: "foo" },
    id: "foo",
    sourceElementOrData: document.createElement("div"),
    creator: () => Promise.resolve(editor),
    type: "editor",
    destructor: editor => {
        editor.destroy();
        return Promise.resolve();
    },
});

let bool: boolean = areconnected([], []);
bool = areconnected({ foo: 4 }, { bar: 5 });
// @ts-expect-error
bool = areconnected([], { bar: 5 });
