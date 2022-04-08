import Sprite from 'svg-baker-runtime';
import SpriteSymbol from 'svg-baker-runtime/src/browser-symbol';

const sprite = new Sprite();
sprite.mount('#my-custom-mounting-target');

const symbolConfig = {
    id: 'image-with-urls',
    useId: 'image-with-urls-usage',
    viewBox: '0 0 600 600',
    content: '<symbol viewBox="0 0 400 400" id="path-1"><path d="M 100 100 L 300 100 L 200 300 z" fill="orange" stroke="black" stroke-width="3" /></symbol>',
};

// add symbol
const symbol = new SpriteSymbol(symbolConfig);
symbol.mount('body');
symbol.render();

sprite.add(symbol);

// mount
const node = sprite.mount();
const isMounted = sprite.isMounted;

sprite.updateUrls('test.url1', 'test.url2');

sprite.remove(symbol.id);
symbol.destroy();
sprite.destroy();

export default sprite;
