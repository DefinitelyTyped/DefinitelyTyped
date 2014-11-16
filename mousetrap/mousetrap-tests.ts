/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="mousetrap.d.ts"/>

Mousetrap.bind('4', function() { console.log('4'); });
Mousetrap.bind("?", function() { console.log('show shortcuts!'); });
Mousetrap.bind('esc', function() { console.log('escape'); }, 'keyup');

// combinations
Mousetrap.bind('command+shift+K', function() { console.log('command shift k'); });

// map multiple combinations to the same callback
Mousetrap.bind(['command+k', 'ctrl+k'], function() {
    console.log('command k or control k');

    // return false to prevent default browser behavior
    // and stop event from bubbling
    return false;
});

// gmail style sequences
Mousetrap.bind('g i', function() { console.log('go to inbox'); });
Mousetrap.bind('* a', function() { console.log('select all'); });

// konami code!
Mousetrap.bind('up up down down left right left right b a enter', function() {
    console.log('konami code');
});

Mousetrap.bind(['ctrl+s', 'meta+s'], (e, combo) => {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        // internet explorer
        e.returnValue = false;
    }
});

Mousetrap.unbind('?');

Mousetrap.trigger('esc');
Mousetrap.trigger('esc', 'keyup');

Mousetrap.reset();

// Test that Mousetrap can be loaded as an external module.
// Assume that if the externally-loaded module can be assigned to a variable with the type of global Mousetrap,
// then everything is working correctly.

import importedMousetrap = require('mousetrap');
var mousetrapModuleReference: typeof Mousetrap = importedMousetrap;

