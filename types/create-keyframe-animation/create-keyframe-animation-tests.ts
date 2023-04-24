import * as animations from "create-keyframe-animation";

// $ExpectType boolean
animations.hasAnimation('move');

const p = document.createElement('p');

// $ExpectType void | Promise<"move">
animations.runAnimation(p, 'move');

// $ExpectType void | Promise<void>
animations.runAnimation(p, 'move', (err, res) => {
    console.log('err', err);
    console.log('res', res);
});

// $ExpectType void
animations.unregisterAnimation('move');

// $ExpectType string
animations.getAnimationCSS('move', {
    '0%': [0, 0],
    '100%': [1, 1]
});

// $ExpectType void
animations.registerAnimation({
    name: 'move',
    animation: [
        {
            x: 0,
            y: 0,
            opacity: 0,
            scale: 0.5
        },
        {
            x: 1,
            y: 1,
            opacity: 0.8,
            scale: 2
        }
    ]
});
