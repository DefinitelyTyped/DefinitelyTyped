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

// @ts-expect-error
new Dialogify();
// @ts-expect-error
new Dialogify('', '');
// $ExpectType Dialogify
const dialog = new Dialogify('source', dialogOptions);

// $ExpectType JQuery<HTMLElement>
dialog.$content;
// $ExpectType Record<string | number, ButtonImpl>
dialog.$buttonList;

// @ts-expect-error
dialog.title();
// @ts-expect-error
dialog.title(0);
// $ExpectType Dialogify
dialog.title('');
// @ts-expect-error
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

// @ts-expect-error
dialog.buttons();
// @ts-expect-error
dialog.buttons('', '');
// $ExpectType Dialogify
dialog.buttons(buttons);
// $ExpectType Dialogify
dialog.buttons(buttons, options);
// @ts-expect-error
dialog.buttons(buttons, options, '');

// @ts-expect-error
dialog.on();
// @ts-expect-error
dialog.on('', event => event.target.$content);
// $ExpectType Dialogify
dialog.on('show', event => event.target.$content);
// $ExpectType Dialogify
dialog.on('close', event => event.target.$content);
// $ExpectType Dialogify
dialog.on('cancel', event => event.target.$content);
// @ts-expect-error
dialog.on('', {});

// $ExpectType void
dialog.show();
// @ts-expect-error
dialog.show(0);

// $ExpectType void
dialog.showModal();
// @ts-expect-error
dialog.showModal(0);

// $ExpectType void
dialog.close();
// @ts-expect-error
dialog.close(0);

// $ExpectType boolean
dialog.isOpen();
// @ts-expect-error
dialog.isOpen(0);

/** Static methods */

// $ExpectAssignable
const alertOptions: Dialogify.AlertDialogOptions = {};
// $ExpectType void
Dialogify.alert('', alertOptions);
// @ts-expect-error
Dialogify.alert();
// @ts-expect-error
Dialogify.alert(0);
// @ts-expect-error
Dialogify.alert('', '');
// @ts-expect-error
Dialogify.alert('', alertOptions, null);

// $ExpectAssignable
const confirmOptions: Dialogify.ConfirmDialogOptions = {};
// $ExpectType void
Dialogify.confirm('', confirmOptions);
// @ts-expect-error
Dialogify.confirm();
// @ts-expect-error
Dialogify.confirm(0);
// @ts-expect-error
Dialogify.confirm('', '');
// @ts-expect-error
Dialogify.confirm('', confirmOptions, null);

// $ExpectAssignable
const promptOptions: Dialogify.PromptDialogOptions = {};
// $ExpectType void
Dialogify.prompt('', promptOptions);
// @ts-expect-error
Dialogify.prompt();
// @ts-expect-error
Dialogify.prompt(0);
// @ts-expect-error
Dialogify.prompt('', '');
// @ts-expect-error
Dialogify.prompt('', promptOptions, null);

// $ExpectType void
Dialogify.closeAll();

// == Following examples from Dialogify documentation ==
// Example 1: Normal Dialogify

new Dialogify('#demo1_template')
    .title('Dialogify')
    .buttons([
        {
            text: '取消',
            click(e) {
                console.log('cancel click');
                this.close();
            },
        },
        {
            text: '確定',
            type: Dialogify.BUTTON_PRIMARY,
            click(e) {
                console.log('ok click, title value: ' + this.$content.find('input.text-field').val());
            },
        },
    ])
    .show();

// Example 2: Modal Dialogify

let example2_html =
    '<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a sapien lacus. Ut a eros quis lacus auctor aliquet eu.</b>';
let example2_dialogify = new Dialogify(example2_html).title('Modal Dialogify').buttons(
    [
        {
            type: Dialogify.BUTTON_DANGER,
            click(e) {
                console.log('danger-style button click');
                this.close();
            },
        },
        '<a class="btn btn-insert" href="javascript:;">other action</a>',
    ],
    { position: Dialogify.BUTTON_CENTER },
);

example2_dialogify
    .on('show', function() {
        this.$buttonList[1].disable();
        console.log('show: ' + this.isOpen());
    })
    .on('close', function() {
        console.log('close: ' + this.isOpen());
    })
    .on('cancel', () => {
        console.log('cancel');
    });

// Example 3: Ajax Dialogify

let example3_options: Dialogify.DialogOptions = {
    ajaxPrefix: '',
    ajaxComplete() {
        console.log('ajax complete');
        this.buttons([
            {
                type: Dialogify.BUTTON_PRIMARY,
            },
        ]);
    },
};

new Dialogify('./ajax.html', example3_options).title('Ajax Dialogify').show();

// Example 4: Style Dialogify

let example4_options = {
    dialog: {
        style: { 'background-color': 'transparent', 'box-shadow': 'none' },
        contentClassName: 'custom-content',
    },
    closeButton: {
        image: 'img/x.png',
        className: 'custom-close',
    },
};

let example4_html =
    '<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a sapien lacus. Ut a eros quis lacus auctor aliquet eu.</b>';
new Dialogify(example4_html, example4_options)
    .title('Style Dialogify')
    .buttons([
        {
            type: Dialogify.BUTTON_PRIMARY,
        },
    ])
    .show();

// Example 5: Dialogify.alert

Dialogify.alert('Alert <i>Message</i>', {
    close() {
        console.log('alert close');
    },
    dialogOptions: {
        closable: false,
    },
});

// Example 6: Dialogify.confirm

Dialogify.confirm('Do you like Dialogify ?', {
    ok() {
        Dialogify.alert('Yes, I do');
    },
    cancel() {
        Dialogify.alert("No, I don't");
    },
});

// Example 7: Dialogify.prompt

Dialogify.prompt("What's your name ?", {
    placeholder: 'Enter your name',
    ok(val) {
        Dialogify.alert('Hi! ' + val);
    },
    cancel() {
        Dialogify.alert('canceled');
    },
});
