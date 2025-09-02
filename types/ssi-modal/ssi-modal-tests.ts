// basic usage
ssi_modal.show({ title: "hello, world", content: "this is a test" });
ssi_modal.show({ title: "hello, world", content: document.createElement("div") });
ssi_modal.show({ title: "hello, world", content: $("<div>") });

// basic chaining
const myModal: SsiModal = ssi_modal.show({
    title: "Constructor Modal",
    content: "content",
    className: "my-modal",
    sizeClass: "medium",
    position: "center top",
    animation: "fade",
    backdrop: true,
    buttons: [
        { label: "OK", className: "btn btn-ok", side: "right" },
        { label: "Cancel", className: "btn btn-cancel", side: "left" },
    ],
})
    .changePreviewState()
    .setOptions("backdrop", false)
    .setOptions({ className: "another-class", sizeClass: "large" })
    .close();

// setContent
myModal.setContent("string content");
myModal.setContent(document.createElement("div"));
myModal.setContent($("<div>"));
myModal.setContent("append content", "append");
myModal.setContent("prepend content", "prepend");
// @ts-expect-error invalid method for setContent
myModal.setContent("x", "invalid");

// setButtons
myModal.setButtons([
    {
        label: "Delayed",
        className: "btn-delayed",
        enableAfter: 1000,
        method(this: HTMLButtonElement, e, modal) {
            this.disabled = true;
            modal.close();
        },
        side: "right",
    },
    {
        label: $("<span>JQ</span>"),
        className: "btn-second",
        side: "left",
        method: (e, modal) => modal.show(),
    },
]);

// @ts-expect-error invalid side
myModal.setButtons([{ label: "NoSide", className: "x", side: "invalid" }]);

// setTitle
myModal.setTitle("New Title");
myModal.setTitle(document.createElement("span"));
myModal.setTitle($("<strong/>"));

// setModalHeight
const newHeight: number = myModal.setModalHeight(10, "height");
myModal.setModalHeight(5, "min-height");
myModal.setModalHeight(5, "max-height");
// @ts-expect-error invalid second parameter
myModal.setModalHeight(5, "invalid");

// get modal elements
const $backdrop = myModal.get$backdrop();
const $buttonsAll = myModal.get$buttons();
const $buttonsLeft = myModal.get$buttons("leftButtons");
const $buttonsRight = myModal.get$buttons("rightButtons");
const $modalElement = myModal.get$modal();
const $content = myModal.get$content();
const $icons = myModal.get$icons();
const $title = myModal.get$title();
const $window = myModal.get$window();
const $wrapper = myModal.get$wrapper();
[$backdrop, $buttonsAll, $buttonsLeft, $buttonsRight, $modalElement, $content, $icons, $title, $window, $wrapper]
    .forEach(jq => jq.addClass("touched"));

// SsiModalModalElement events
$modalElement.on("onShow.ssi-modal", e => {});
$modalElement.on("backdropClose.ssi-modal", e => {});
$modalElement.on("beforeClose.ssi-modal", e => {});
$modalElement.on("onClose.ssi-modal", e => {});

// static methods
ssi_modal.close();
ssi_modal.close("someId");
ssi_modal.closeAll();
ssi_modal.removeAll();

ssi_modal.createObject({ title: "obj only", content: "c" }).init();
ssi_modal.show({ title: "direct show", content: "c" });

// ====== official plugins ======

// dialog
ssi_modal.dialog({ title: "Dialog", content: "dialog content" }, (e, m) => {
    m.close();
});
// confirm
ssi_modal.confirm({ title: "Confirm", content: "confirm content" }, (e, m) => {
    m.close();
});
// notify
ssi_modal.notify("success", { title: "t", content: "c" }, result => {});
ssi_modal.notify("error", { title: "t", content: "c" });
ssi_modal.notify("warning", { title: "t", content: "c" });
ssi_modal.notify("info", { title: "t", content: "c" });
ssi_modal.notify("dialog", { title: "t", content: "c" });
ssi_modal.notify("confirm", { title: "t", content: "c" });
ssi_modal.notify("anthing-you-like", { title: "t", content: "c" });

// checkElement
const maybeModal = ssi_modal.checkElement($("<div>"));
if (maybeModal) {
    maybeModal.show();
}
// @ts-expect-error invalid element
ssi_modal.checkElement(123);

// ========== 选项联合类型边界 ==========
ssi_modal.show({ sizeClass: "dialog" });
ssi_modal.show({ sizeClass: "auto" });
// @ts-expect-error invalid size
ssi_modal.show({ sizeClass: "invalid" });

ssi_modal.show({ position: "right top" });
ssi_modal.show({ position: "left bottom" });
// @ts-expect-error invalid position
ssi_modal.show({ position: "invalid" });

ssi_modal.show({ animation: false });
ssi_modal.show({ animation: { show: "fadeIn", hide: "fadeOut" } });
// @ts-expect-error object animation setting with broken payload
ssi_modal.show({ animation: { show: "in" } });

// lifecycle callbacks
ssi_modal.show({
    content: "callbacks",
    beforeShow: (modal) => {
        if (!modal) return false;
        return true;
    },
    beforeClose: (modal) => {
        if (Math.random() > 0.5) return false;
        return true;
    },
    onShow: (modal) => {
        modal.changePreviewState();
    },
    onClose: (modal) => {
        modal.close();
    },
});

// @ts-expect-error invalid callback returns
ssi_modal.show({ beforeShow: () => "not allowed" });

// pluginName & options
myModal.setPluginName("newName").setOptions({ className: "abc" }).show();

// ssi-modal jQuery data
typeof myModal.get$modal().data("ssi-modal") === "object";

// modal's jQuery data is the same as the it's instance
myModal.get$modal().data("ssi-modal") === myModal;
