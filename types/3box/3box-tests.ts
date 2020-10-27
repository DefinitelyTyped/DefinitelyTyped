import Box = require('3box');

declare global {
    interface Window {
        ethereum: any;
    }
}

(async () => {
    const box = await Box.openBox('foo', window.ethereum);
    const space = await box.openSpace('bar');
    const thread = await space.joinThread('baz');
    await thread.post('hello 3box');
})();
