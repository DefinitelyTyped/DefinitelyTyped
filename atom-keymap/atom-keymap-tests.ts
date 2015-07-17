/// <reference path="./atom-keymap.d.ts" />

import atomKeymap = require('atom-keymap');
var KeymapManager = atomKeymap.KeymapManager;
type ICompleteMatchEvent = AtomKeymap.ICompleteMatchEvent;
// The import and type aliasing above can be done more concisely in TypeScript 1.5+:
//import { KeymapManager, ICompleteMatchEvent } from "atom-keymap";

var manager = new KeymapManager();
manager.add('some/unique/path', {
    '.workspace': {
        'ctrl-x': 'package:do-something',
        'ctrl-y': 'package:do-something-else'
    },
    '.mini.editor': {
        'enter': 'core:confirm'
    }
});

manager.onDidMatchBinding((event: ICompleteMatchEvent): void => {
    console.log(event.binding.command);
})

manager.destroy();
