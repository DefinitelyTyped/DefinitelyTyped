Mousetrap.bindGlobal('4', function() { console.log('4'); });
Mousetrap.bindGlobal("?", function() { console.log('show shortcuts!'); });
Mousetrap.bindGlobal('esc', function() { console.log('escape'); }, 'keyup');

// combinations
Mousetrap.bindGlobal('command+shift+K', function() { console.log('command shift k'); });

// map multiple combinations to the same callback
Mousetrap.bindGlobal(['command+k', 'ctrl+k'], function() {
    console.log('command k or control k');

    // return false to prevent default browser behavior
    // and stop event from bubbling
    return false;
});

// gmail style sequences
Mousetrap.bindGlobal('g i', function() { console.log('go to inbox'); });
Mousetrap.bindGlobal('* a', function() { console.log('select all'); });

// konami code!
Mousetrap.bindGlobal('up up down down left right left right b a enter', function() {
    console.log('konami code');
});

// Test that union types are accepted.
const unionTypeKeys: string | string[] = ['a', 'b', 'c'];
Mousetrap.bindGlobal(unionTypeKeys, function() { console.log('Union type test') });


Mousetrap.bindGlobal(['ctrl+s', 'meta+s'], (e, combo) => {
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
