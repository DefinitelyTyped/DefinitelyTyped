import { Behavior, Drawable, Map } from 'athenajs';

const sprite = new Drawable('mySprite', {
    objectId: 'my Rocking Sprite',
    layer: 0
});
const sprite2 = new Drawable('mySprite2', {});

sprite.addChild(sprite2);
sprite.animate('Fade', {
    duration: 100
});
sprite.moveTo(0, 0).notify('yo!');

sprite.onCollision(sprite2);
sprite.onEvent('boom');
sprite.playSound('explosion', {
    pan: true
});
sprite.setBehavior('stupid');
sprite.setBehavior(Behavior);
sprite.setScale(1.0);

const str: string = sprite.getProperty('strProp');
sprite.setProperty('strProp', str);

sprite.setMask({
    x: 0,
    y: 0,
    width: 100,
    height: 100
});

sprite.setMask(null);

sprite.stopAnimate(10);
