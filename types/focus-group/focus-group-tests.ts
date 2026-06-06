import createFocusGroup from "focus-group";

// $ExpectType FocusGroup
const focusGroup = createFocusGroup({ members: [document.createElement("button")] });

// $ExpectType FocusGroup
createFocusGroup({ members: document.querySelectorAll("button") });

// $ExpectType FocusGroup
createFocusGroup({
    members: [{ node: document.createElement("button"), text: "string" }],
    keybindings: {
        next: [{
            altKey: true,
            charCode: 104,
            code: "ArrowDown",
            ctrlKey: true,
            isComposing: true,
            key: "ArrowRight",
            keyCode: 40,
            location: 0,
            metaKey: true,
            repeat: true,
            shiftKey: true,
            DOM_KEY_LOCATION_STANDARD: KeyboardEvent.DOM_KEY_LOCATION_STANDARD,
            DOM_KEY_LOCATION_LEFT: KeyboardEvent.DOM_KEY_LOCATION_LEFT,
            DOM_KEY_LOCATION_RIGHT: KeyboardEvent.DOM_KEY_LOCATION_RIGHT,
            DOM_KEY_LOCATION_NUMPAD: KeyboardEvent.DOM_KEY_LOCATION_NUMPAD,
        }],
        prev: [{ key: "ArrowUp" }, { key: "ArrowLeft" }],
        first: {
            altKey: true,
            charCode: 103,
            code: "Home",
            ctrlKey: true,
            isComposing: true,
            key: "Home",
            keyCode: 36,
            location: 0,
            metaKey: true,
            repeat: true,
            shiftKey: true,
            DOM_KEY_LOCATION_STANDARD: KeyboardEvent.DOM_KEY_LOCATION_STANDARD,
            DOM_KEY_LOCATION_LEFT: KeyboardEvent.DOM_KEY_LOCATION_LEFT,
            DOM_KEY_LOCATION_RIGHT: KeyboardEvent.DOM_KEY_LOCATION_RIGHT,
            DOM_KEY_LOCATION_NUMPAD: KeyboardEvent.DOM_KEY_LOCATION_NUMPAD,
        },
        last: { keyCode: 75, metaKey: true },
    },
    wrap: true,
    stringSearch: true,
    stringSearchDelay: 800,
});

// $ExpectType FocusGroup
focusGroup.activate();

// $ExpectType FocusGroup
focusGroup.deactivate();

// $ExpectType FocusGroup
focusGroup.addMember(
    document.createElement("button"),
    0,
);

// $ExpectType FocusGroup
focusGroup.addMember(
    { node: document.createElement("button"), text: "string" },
    0,
);

// $ExpectType FocusGroup
focusGroup.removeMember(0);

// $ExpectType FocusGroup
focusGroup.clearMembers();

// $ExpectType FocusGroup
focusGroup.setMembers([document.createElement("button")]);

// $ExpectType FocusGroup
focusGroup.setMembers(document.querySelectorAll("button"));

// $ExpectType FocusGroup
focusGroup.setMembers([{ node: document.createElement("button"), text: "string" }]);

// $ExpectType FocusGroupMember[]
focusGroup.getMembers();

// $ExpectType FocusGroup
focusGroup.focusNodeAtIndex(0);

// $ExpectType number
focusGroup.moveFocusForward();

// $ExpectType number
focusGroup.moveFocusBack();
