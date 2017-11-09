import * as nsg from 'node-sprite-generator';
import * as express from 'express';
const app = express();

app.use(nsg.middleware({
    src: [
        'images/sprite/*.png'
    ],
    spritePath: 'images/sprite.png',
    stylesheetPath: 'stylus/sprite.styl'
}));

nsg({
    src: [
        'images/sprite/*.png'
    ],
    spritePath: 'images/sprite.png',
    stylesheetPath: 'stylus/sprite.styl'
}, err => {
    console.log('Sprite generated!');
});

nsg({
    src: [
        'public/images/sprite/*.png'
    ],
    spritePath: 'public/images/all-icons.png',
    stylesheetPath: 'public/stylesheets/all-icons.css',
    layout: 'diagonal',
    layoutOptions: {
        padding: 30
    },
    stylesheet: 'app/assets/sprites/template.tpl',
    stylesheetOptions: {
        prefix: 'all-icons',
        spritePath: 'http://static.your-server.org/images/all-icons.png',
        pixelRatio: 2
    }
});
