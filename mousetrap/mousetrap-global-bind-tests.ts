/// <reference path="mousetrap-global-bind.d.ts"/>

Mousetrap.globalBind('4', function() { console.log('4'); });
Mousetrap.globalBind("?", function() { console.log('show shortcuts!'); });
Mousetrap.globalBind('esc', function() { console.log('escape'); }, 'keyup');

// combinations
Mousetrap.globalBind('command+shift+K', function() { console.log('command shift k'); });

// map multiple combinations to the same callback
Mousetrap.globalBind(['command+k', 'ctrl+k'], function() {
    console.log('command k or control k');

    // return false to prevent default browser behavior
    // and stop event from bubbling
    return false;
});

// gmail style sequences
Mousetrap.globalBind('g i', function() { console.log('go to inbox'); });
Mousetrap.globalBind('* a', function() { console.log('select all'); });

// konami code!
Mousetrap.globalBind('up up down down left right left right b a enter', function() {
    console.log('konami code');
});

Mousetrap.globalBind(['ctrl+s', 'meta+s'], (e, combo) => {
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
