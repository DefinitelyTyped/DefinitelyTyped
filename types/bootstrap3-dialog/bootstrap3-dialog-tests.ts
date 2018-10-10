function BootstrapDialogOptionsTests() {
    const options1: BootstrapDialog.DialogOptions = { };
    const options2: BootstrapDialog.DialogOptions = {
        animate: false,
        buttons: [{id: "btn-1"}],
        callback: (result: boolean) => { },
        closable: false,
        closeByBackdrop: false,
        closeByKeyboard: false,
        data: {name: "value"},
        draggable: false,
        description: "",
        buttonLabel: "",
        message: "",
        onhide: (dialog: BootstrapDialog.DialogContext) => { },
        onhidden: (dialog: BootstrapDialog.DialogContext) => { },
        onshow: (dialog: BootstrapDialog.DialogContext) => { },
        onshown: (dialog: BootstrapDialog.DialogContext) => { },
        size: BootstrapDialog.SIZE_LARGE,
        title: "",
        type: BootstrapDialog.TYPE_DEFAULT,
        btnCancelLabel: "",
        btnOKClass: "",
        btnOKLabel: "",
        cssClass: "",
        spinicon: "",
        autodestroy: false,
        nl2br: false,
    };
    options2.onhide = (dialog: BootstrapDialog.DialogContext): void => { };
    options2.onhide = (dialog: BootstrapDialog.DialogContext): boolean => false;
    options2.message = "";
    options2.message = $("#element");
    options2.message = (dialog?: BootstrapDialog.DialogContext): string => {
        return "";
    };
    options2.message = (dialog?: BootstrapDialog.DialogContext): JQuery => {
        return $("#element");
    };
    // BootstrapDialog.SIZE_xxx constants.
    options2.size = BootstrapDialog.SIZE_LARGE;
    options2.size = BootstrapDialog.SIZE_NORMAL;
    options2.size = BootstrapDialog.SIZE_SMALL;
    options2.size = BootstrapDialog.SIZE_WIDE;
    options2.title = "";
    options2.title = $("#element");
    // BootstrapDialog.TYPE_xxx constants.
    options2.type = BootstrapDialog.TYPE_DANGER;
    options2.type = BootstrapDialog.TYPE_DEFAULT;
    options2.type = BootstrapDialog.TYPE_INFO;
    options2.type = BootstrapDialog.TYPE_PRIMARY;
    options2.type = BootstrapDialog.TYPE_SUCCESS;
    options2.type = BootstrapDialog.TYPE_WARNING;
}

function BootstrapDialogStaticTests() {
    BootstrapDialog.alert("");
    BootstrapDialog.alert("", () => { });
    BootstrapDialog.confirm("");
    BootstrapDialog.confirm("", (result: boolean) => { });
    const instance1: BootstrapDialog.DialogInstance = BootstrapDialog.show({});
    // BUTTON_SIZES
    BootstrapDialog.BUTTON_SIZES[BootstrapDialog.SIZE_NORMAL] = '';
    const buttonSize: string = BootstrapDialog.BUTTON_SIZES[BootstrapDialog.SIZE_NORMAL];
    // Buttons order
    BootstrapDialog.BUTTONS_ORDER_CANCEL_OK = "";
    BootstrapDialog.BUTTONS_ORDER_OK_CANCEL = "";
    // DEFAULT_TEXTS
    BootstrapDialog.DEFAULT_TEXTS[BootstrapDialog.TYPE_DEFAULT] = 'Information';
    const defaultText: string = BootstrapDialog.DEFAULT_TEXTS[BootstrapDialog.TYPE_DEFAULT];
    // Miscellaneous
    BootstrapDialog.ICON_SPINNER = "";
    BootstrapDialog.NAMESPACE = "";
}

function BootstrapDialogContextTests() {
    const dialog1: BootstrapDialog.DialogContext = BootstrapDialog({});
    dialog1.close();
    dialog1.enableButtons(false);
    const button: JQuery = dialog1.getButton("");
    const value: any = dialog1.getData("name");
    const modal: JQuery = dialog1.getModal();
    const content: JQuery = dialog1.getModalContent();
    const dialog: JQuery = dialog1.getModalDialog();
    const header: JQuery = dialog1.getModalHeader();
    const footer: JQuery = dialog1.getModalFooter();
    const body: JQuery = dialog1.getModalBody();
    const title: string = dialog1.getTitle();
    dialog1.open();
    dialog1.realize();
    dialog1.setClosable(false);
    dialog1.setData("name", "value");
    dialog1.setData("", null);
    dialog1.setMessage("");
    dialog1.setTitle("");
    dialog1.setType(BootstrapDialog.TYPE_DEFAULT);
}

function BootstrapDialogInstanceTests() {
    const instance1: BootstrapDialog.DialogInstance = BootstrapDialog.show({});
    const modal: JQuery = instance1.$modal;
    const modalBody: JQuery = instance1.$modalBody;
    const modalContent: JQuery = instance1.$modalContent;
    const modalDialog: JQuery = instance1.$modalDialog;
    const modalHeader: JQuery = instance1.$modalHeader;
    const modalFooter: JQuery = instance1.$modalFooter;
    const options: BootstrapDialog.DialogOptions = instance1.options;
    const opened: boolean = instance1.opened;
}

function BootstrapDialogButtonTests() {
    const button1: BootstrapDialog.DialogButton = { };
    const button2: BootstrapDialog.DialogButton = {
        id: "",
        label: "",
        hotkey: 0,
        icon: "",
        cssClass: "",
        data: {name: "value"},
        autospin: false,
        action: (dialog: BootstrapDialog.DialogContext) => { },
    };
}
