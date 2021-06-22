import {
    bindShortcut,
    bindShortcuts,
    mousetrap,
    Mousetrap
} from "redux-shortcuts";
import "mousetrap/plugins/global-bind/mousetrap-global-bind";

import { Dispatch, ActionCreator, Action, AnyAction } from "redux";

const dispatch: Dispatch<{}> = (action: any) => action;
const saveAction: ActionCreator<Action> = () => ({ type: "SAVE" });

bindShortcut("ctrl+s", saveAction)(dispatch);

// preventDefault
bindShortcut("ctrl+s", saveAction, true)(dispatch);

// multiple actions
bindShortcut("ctrl+s", [saveAction, saveAction], true)(dispatch);

// multiple bindings
bindShortcut(["ctrl+s", "shift+s"], saveAction, true)(dispatch);

bindShortcuts(
    ["/", saveAction],
    [["/", "ctrl+f"], saveAction], // multi binding
    ["s", saveAction, true], // preventDefault
    ["s", saveAction, false],
    ["s", [saveAction, saveAction], false], // multi actions
    [["s", "ctrl+s"], [saveAction, saveAction], false] // multi both
)(dispatch);

// mousetrap (instance)
mousetrap.bind("ctrl+s", e => /* custom event prop */ e.returnValue);
mousetrap.unbind("ctrl+s", "keydown");
mousetrap.trigger("ctrl+s", "keydown");
mousetrap.reset();

// Mousetrap (static)
Mousetrap.bindGlobal("ctrl+s", e => e.preventDefault(), "keyup");
Mousetrap.addKeycodes({ 27: "escape" });
