/// <reference types="jquery"/>

Mousetrap
    .bind('4', function() { console.log('4'); })
    .bind("?", function() { console.log('show shortcuts!'); })
    .bind('esc', function() { console.log('escape'); }, 'keyup');

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

// Test that custom keycodes can be added.
Mousetrap.addKeycodes({ 144: 'numlock' });
Mousetrap.bind('numlock', function() { console.log('numlock'); });

Mousetrap.reset();

// Test that we can create an instance of mousetrap and attach the
// event handler to the form element only, instead of the entire document.
var element = document.querySelector('form');
var instance = new Mousetrap(element);
instance.bind('mod+s', function () { console.log('Instance Saved'); });

// Test that we can create an instance of mousetrap without passing element to the constructor.
var documentInstance = new Mousetrap();
documentInstance.bind('mod+s', function () { console.log('documentInstance Saved'); });

// Test that the factory method works as well.
Mousetrap(element).bind('mod+s', function(){ console.log('Factory Saved'); });

// Test that union types are accepted.
const unionTypeKeys: string | string[] = ['a', 'b', 'c'];
Mousetrap(element).bind(unionTypeKeys, function() { console.log('Union type test') });

Mousetrap(element).handleKey = (character: string, modifiers: string[], e: KeyboardEvent) => { console.log('Override handleKey test') };
