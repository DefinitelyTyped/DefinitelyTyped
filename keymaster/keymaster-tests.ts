/// <reference path="keymaster.d.ts" />

// simple key binding without scope
key('shift+a', function (keyboardEvent: KeyboardEvent, keymasterEvent: KeymasterEvent) {
});

// simple key binding with scope
key('shift+b', 'aScope', (keyboardEvent, keymasterEvent) => {
});

// possible combinations of filtering
key.filter({target: { tagName: 'propertytest'}});
key.filter({srcElement: { tagName: 'propertytest'}});

