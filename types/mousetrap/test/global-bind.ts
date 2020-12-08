Mousetrap.bindGlobal('4', () => {
    console.log('4');
});
Mousetrap.bindGlobal('?', () => {
    console.log('show shortcuts!');
});
Mousetrap.bindGlobal(
    'esc',
    () => {
        console.log('escape');
    },
    'keyup',
);

// combinations
Mousetrap.bindGlobal('command+shift+K', () => {
    console.log('command shift k');
});

// map multiple combinations to the same callback
Mousetrap.bindGlobal(['command+k', 'ctrl+k'], () => {
    console.log('command k or control k');

    // return false to prevent default browser behavior
    // and stop event from bubbling
    return false;
});

// gmail style sequences
Mousetrap.bindGlobal('g i', () => {
    console.log('go to inbox');
});
Mousetrap.bindGlobal('* a', () => {
    console.log('select all');
});

// konami code!
Mousetrap.bindGlobal('up up down down left right left right b a enter', () => {
    console.log('konami code');
});

// Wrapped in block to avoid naming conflicts with another global `unionTypeKeys`
{
    // Test that union types are accepted.
    const unionTypeKeys: string | string[] = ['a', 'b', 'c'];
    Mousetrap.bindGlobal(unionTypeKeys, () => {
        console.log('Union type test');
    });
}

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
