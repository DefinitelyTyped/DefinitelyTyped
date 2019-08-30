import CodeMirror = require("codemirror");

const editor: CodeMirror.Editor = CodeMirror(document.body);
const template: Element = document.createElement("div");
const dialOpt: CodeMirror.OpenDialogOptions = {
    bottom: true,
    closeOnEnter: true,
    closeOnBlur: true,
    onKeyDown: (event: KeyboardEvent, value: string, close: () => void) => false,
    onKeyUp: (event: KeyboardEvent, value: string, close: () => void) => false,
    onInput: (event: KeyboardEvent, value: string, close: () => void) => false,
    onClose: (instance: Element) => false
};
const notifOpt: CodeMirror.NotificationOptions = {
    bottom: true,
    duration: 0
};

const close: CodeMirror.CloseFunction = editor.openDialog(
    template,
    (value: string, event: KeyboardEvent) => {},
    dialOpt
);
const close1: CodeMirror.CloseFunction = editor.openNotification(template, notifOpt);
const close2: CodeMirror.CloseFunction = editor.openConfirm(template, [(cm: CodeMirror.Editor) => {}], {
    bottom: true
});
