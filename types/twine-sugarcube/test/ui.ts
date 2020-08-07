//#region  Dialog

const dialogOptions: TwineSugarCube.DialogOptions = {
    top: 123,
    opacity: 30
};

Dialog.addClickHandler("#some-element", dialogOptions, () => {
    Dialog.setup("My Dialog Title", "my-dialog-class");
    Dialog.wiki(Story.get("MyDialogContents").processText());
});

let b = false;
const e: HTMLElement = document.getElementById("") as HTMLElement;
let n = 123;

Dialog.append("");
Dialog.append(new DocumentFragment(), "");
Dialog.append(document.createTextNode(""), "");

Dialog.body(); // $ExpectType HTMLElement

Dialog.close().close(); // $ExpectType DialogAPI

b = Dialog.isOpen();
b = Dialog.isOpen("dialogName");

Dialog.open();
Dialog.open(dialogOptions);
Dialog.open(dialogOptions, () => {});

// Basic example.
Dialog.setup();
Dialog.setup("Character Sheet");
Dialog.setup("Character Sheet", "charsheet");

Dialog.wiki("Blah //blah// ''blah''.");
Dialog.wiki(Story.get("PC Sheet").processText());
Dialog.wiki(Story.get("PC Sheet").processText());

//#endregion

//#region  Fullscreen
Fullscreen.element; // $ExpectType HTMLElement
Fullscreen.exit().then(() => {});
b = Fullscreen.isEnabled();
b = Fullscreen.isFullscreen();
Fullscreen.toggle().then(() => {});
Fullscreen.toggle({navigationUI: "auto"});
Fullscreen.toggle({navigationUI: "hide"});
Fullscreen.toggle({navigationUI: "show"});
// @ts-expect-error
Fullscreen.toggle({navigationUI: "ayto"});

Fullscreen.request(undefined, e);
//#endregion

//#region LoadScreen
n = LoadScreen.lock();
LoadScreen.unlock(n); // $ExpectType void
//#endregion

//#region UI
UI.alert("You smell of elderberries!");
UI.alert("You smell of elderberries!", {}, () => {});

UI.jumpto(); // $ExpectType void

UI.restart(); // $ExpectType void
UI.restart(dialogOptions); // $ExpectType void

UI.saves(); // $ExpectType void
UI.saves(dialogOptions, () => {}); // $ExpectType void

UI.settings(); // $ExpectType void
UI.settings(dialogOptions, () => {}); // $ExpectType void

UI.share(); // $ExpectType void
UI.share(dialogOptions, () => {}); // $ExpectType void
//#endregion

//#region  UIBar
UIBar.destroy(); // $ExpectType void
UIBar.hide(); // $ExpectType UIBarAPI
UIBar.show(); // $ExpectType UIBarAPI
UIBar.stow(); // $ExpectType UIBarAPI
UIBar.stow(b); // $ExpectType UIBarAPI
UIBar.unstow(); // $ExpectType UIBarAPI
UIBar.unstow(b); // $ExpectType UIBarAPI
b = UIBar.isHidden();
b = UIBar.isStowed();
//#endregion

export {};
