import * as CodeMirror from 'codemirror';
import 'codemirror/addon/dialog/dialog';

const editor = CodeMirror(document.body);
const closeNotification: () => void = editor.openNotification('my message', {
    duration: 25,
});
const closeNotification2: () => void = editor.openNotification('my message', {
    bottom: false,
});
const closeNotification3: () => void = editor.openNotification(document.body);

const closeDialog: () => void = editor.openDialog('my message', (value: string, e: Event) => {}, {
    closeOnEnter: true,
    closeOnBlur: true,
});
const closeDialog2: () => void = editor.openDialog(document.body, (value: string, e: Event) => {});
const closeDialog3: () => void = editor.openDialog(document.body, (value: string, e: Event) => {}, {
    // @ts-expect-error
    closeOnBlur: 'maybe',
});
