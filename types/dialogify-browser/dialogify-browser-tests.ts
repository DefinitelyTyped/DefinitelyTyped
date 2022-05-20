// $ExpectAssignable
const dialogStyle: Dialogify.DialogStyle = {
    style: {},
    className: '',
    contentStyle: {},
    contentClassName: '',
};
// $ExpectAssignable
const buttonStyle: Dialogify.ButtonStyle = {
    image: '',
    style: {},
    className: '',
};
// $ExpectAssignable
const dialogOptions: Dialogify.DialogOptions = {
    size: Dialogify.SIZE_LARGE,
    closable: true,
    fixed: true,
    dialog: dialogStyle,
    closeButton: buttonStyle,
    useDialogForm: true,
    ajaxPrefix: '/',
    ajaxData: '',
    ajaxComplete: () => void 0,
};

// $ExpectError
new Dialogify();
// $ExpectError
new Dialogify('', '');
// $ExpectType Dialogify
const dialog = new Dialogify('source', dialogOptions);

// $ExpectType JQuery<HTMLElement>
dialog.$content;
// $ExpectType { [key: string]: ButtonImpl; [key: number]: ButtonImpl; }
dialog.$buttonList;

// $ExpectError
dialog.title();
// $ExpectError
dialog.title(0);
// $ExpectType Dialogify
dialog.title('');
// $ExpectError
dialog.title('', '');

// $ExpectAssignable
const buttons: Array<Dialogify.Button | string> = [
    {
        type: '',
        text: '',
        click: () => void 0,
        focused: true,
        disabled: false,
        id: '',
    },
    '',
];

// $ExpectAssignable
const options: Dialogify.ButtonOption = {
    position: '',
};

// $ExpectError
dialog.buttons();
// $ExpectError
dialog.buttons('', '');
// $ExpectType Dialogify
dialog.buttons(buttons);
// $ExpectType Dialogify
dialog.buttons(buttons, options);
// $ExpectError
dialog.buttons(buttons, options, '');

// $ExpectError
dialog.on();
// $ExpectError
dialog.on('', () => void 0);
// $ExpectType Dialogify
dialog.on('show', () => void 0);
// $ExpectType Dialogify
dialog.on('close', () => void 0);
// $ExpectType Dialogify
dialog.on('cancel', () => void 0);
// $ExpectError
dialog.on('', {});

// $ExpectType void
dialog.show();
// $ExpectError
dialog.show(0);

// $ExpectType void
dialog.showModal();
// $ExpectError
dialog.showModal(0);

// $ExpectType void
dialog.close();
// $ExpectError
dialog.close(0);

// $ExpectType boolean
dialog.isOpen();
// $ExpectError
dialog.isOpen(0);

/** Static methods */

// $ExpectAssignable
const alertOptions: Dialogify.AlertDialogOptions = {};
// $ExpectType void
Dialogify.alert('', alertOptions);
// $ExpectError
Dialogify.alert();
// $ExpectError
Dialogify.alert(0);
// $ExpectError
Dialogify.alert('', '');
// $ExpectError
Dialogify.alert('', alertOptions, null);

// $ExpectAssignable
const confirmOptions: Dialogify.ConfirmDialogOptions = {};
// $ExpectType void
Dialogify.confirm('', confirmOptions);
// $ExpectError
Dialogify.confirm();
// $ExpectError
Dialogify.confirm(0);
// $ExpectError
Dialogify.confirm('', '');
// $ExpectError
Dialogify.confirm('', confirmOptions, null);

// $ExpectAssignable
const promptOptions: Dialogify.PromptDialogOptions = {};
// $ExpectType void
Dialogify.prompt('', promptOptions);
// $ExpectError
Dialogify.prompt();
// $ExpectError
Dialogify.prompt(0);
// $ExpectError
Dialogify.prompt('', '');
// $ExpectError
Dialogify.prompt('', promptOptions, null);

// $ExpectType void
Dialogify.closeAll();
