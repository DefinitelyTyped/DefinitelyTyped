xdialog.init({ zIndex0: 5 });

const dialog = xdialog.create({
    title: "Hello World",
    body: "Hello World",
    buttons: ["ok", "cancel"],
    extraClass: "xd-fatal my-dialog-class",
    style: "width: 640px;",
    effect: "fade_in_and_scale",
    fixChromeBlur: false,
    modal: true,
    timeout: 5,
    listenEnterKey: false,
    listenESCKey: true,
    beforecreate: () => {},
    aftercreate: () => {},
    beforeshow: () => false,
    aftershow: null,
    beforehide: ({ id }) => {},
    afterhide: ({ id, element, dialog, overlay, event }) => {},
    ondrag: (element, destElement, srcElement) => {},
});

console.log(dialog.id);
console.log(dialog.element);

dialog.show();
dialog.adjust();
dialog.hide();
dialog.fixChromeBlur();
dialog.destroy();

const dialog2 = xdialog.open({
    title: null,
    body: {
        src: "demo6-content",
        element: document.getElementById("demo6-content")!,
    },
    buttons: {
        ok: {
            text: "okay",
            style: "background:#4336f4;",
            clazz: "xd-button xd-ok demo-copy-button",
        },
        delete: "Delete",
        cancel: "Cancel",
        other: "<button id=\"my-button-id\" class=\"my-button-class\">Button-text</button>",
    },
    effect: "",
});

if (xdialog.dialogs.length != 1) {
    xdialog.fatal("XDialog doesn't work as expected!");
}

dialog2.close();

xdialog.alert("Hello World!", {
    buttons: {
        ok: "Okay",
        cancel: {
            clazz: "xd-button",
        },
    },
});
xdialog.confirm("Are you sure?", ({ element }) => xdialog.fatal("You should have clicked no"));
xdialog.info("Hello World!");
xdialog.warn("An error is about to occur");
xdialog.error("An error occurred");

xdialog.startSpin();
xdialog.stopSpin();
