import { Sprite } from 'athenajs';

const sprite: Sprite = new Sprite('mySprite', {
    imageId: 'tiles',
    animations: {
        anim1: {
            frameDuration: 1,
            frames: [{
                offsetX: 396,
                offsetY: 2,
                width: 64,
                height: 96,
                hitBox: {
                    x: 1,
                    y: 4,
                    x2: 62,
                    y2: 95
                },
                plane: 0
            }],
            loop: 0
        }
    }
});

sprite.setAnimation('anim1', () => {
    sprite.setAnimation('anim1', () => { console.log('the end!'); }, 0, true);
});
