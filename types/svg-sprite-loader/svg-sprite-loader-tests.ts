import SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

new SpriteLoaderPlugin();

new SpriteLoaderPlugin({ plainSprite: true });

new SpriteLoaderPlugin({ spriteAttrs: { testAttr: 'testValue' } });
