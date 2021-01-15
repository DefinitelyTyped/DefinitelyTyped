import keyboardJS = require('keyboardjs');

keyboardJS.bind('a', e => {
    console.log('a is pressed');
});

keyboardJS.on('a + b', e => {
    console.log('a and b is pressed');
});

keyboardJS.addListener('a + b > c', e => {
    console.log('a and b then c is pressed');
});

keyboardJS.bind(['a + b > c', 'z + y > z'], e => {
    console.log('a and b then c or z and y then z is pressed');
});

keyboardJS.bind('', e => {
    console.log('any key was pressed');
});

keyboardJS.bind(
    'a',
    e => {
        console.log('a is pressed');
    },
    e => {
        console.log('a is released');
    },
);

keyboardJS.bind('a', null, e => {
    console.log('a is released');
});

keyboardJS.bind('a', e => {
    if (e) {
        e.preventRepeat();
        console.log('a is pressed');
    }
});

const previouslyBoundHandler = (event?: keyboardJS.KeyEvent) => {};

keyboardJS.unbind('a', previouslyBoundHandler);
keyboardJS.off('a', previouslyBoundHandler);
keyboardJS.removeListener('a', previouslyBoundHandler);

keyboardJS.setContext('index');

const contextName = keyboardJS.getContext();

keyboardJS.withContext(contextName, () => {
    keyboardJS.bind('7', e => {});
    keyboardJS.bind('8', e => {});
    keyboardJS.bind('9', e => {});
});

keyboardJS.pause();

keyboardJS.resume();

keyboardJS.reset();

keyboardJS.pressKey('a');
keyboardJS.pressKey(65);

keyboardJS.releaseKey('a');
keyboardJS.releaseKey(65);

keyboardJS.releaseAllKeys();

keyboardJS.watch();

keyboardJS.watch(new Window());
keyboardJS.watch(new Window(), new Document());

keyboardJS.watch(new HTMLFormElement());
keyboardJS.watch(new Window(), new HTMLFormElement());

keyboardJS.stop();
