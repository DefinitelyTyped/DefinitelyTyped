import twemoji = require('twemoji');

twemoji.parse('foo', {
    base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/2/',
    folder: 'svg',
    ext: '.svg',
});

const foo: HTMLElement = document.querySelector<HTMLElement>('#foo')!;
twemoji.parse(foo, {
    base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/2/',
    folder: 'svg',
    ext: '.svg',
});

twemoji.convert.fromCodePoint('1f1e8');

twemoji.convert.toCodePoint('\ud83c\udde8\ud83c\uddf3');

if (twemoji.test('foo')) {
    console.log('emoji All The Things!');
}
