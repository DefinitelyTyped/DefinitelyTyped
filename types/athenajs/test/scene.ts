import { Game, Scene, Drawable, Map } from 'athenajs';

let num: number;

const hudScene = new Scene();
const myScene: Scene = new Scene({
    name: 'myScene',
    resources: [{
        id: 'myRes',
        src: 'src',
        type: 'image'
    }],
    opacity: 1,
    layers: 0,
    hudScene
});

num = myScene.getOpacity();
myScene.setOpacity(10);

const sprite = new Drawable('mySprite', {});

myScene.debug(false);
myScene.bindEvents('gameover');
myScene.addObject(sprite);
myScene.animate('Fade', {
    easing: 'linear'
}).then(() => {
    console.log('effect ended');
    });
myScene.fadeIn(1000).then(() => {
    myScene.fadeOut(2000);
    myScene.fadeInAndOut(2000, 1000, 1000);
    console.log(myScene.getPlayTime());
});

myScene.load('image', 'img/foo.png');
myScene.load('image', 'img/background.png', 'bg');
myScene.loadAudio('sound/yeah.mp3');
myScene.loadImage('img/bar.gif');
myScene.loadAudio('sound/yeah.mp3');
myScene.loadAudio('maps/map.json');

myScene.setBackgroundImage(new Image());
myScene.setLayerPriority(10, true);

myScene.notify('ready');

myScene.removeObject(sprite);

myScene.setMap({});
myScene.setMap(new Map({
    src: 'img/tiles.png',
    tileWidth: 24,
    tileHeight: 32,
    width: 240,
    height: 320
}));
