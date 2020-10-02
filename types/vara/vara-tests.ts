import Vara = require('vara');
import * as Vara2 from 'vara';

const vara = new Vara('#root', 'font.json', [
    {
        text: 'first'
    },
    {
        text: 'second',
        fontSize: 24,
        strokeWidth: .5,
        color: 'black',
        id: 'second',
        duration: 2000,
        textAlign: 'left',
        x: 0,
        y: 0,
        fromCurrentPosition: {
            x: true,
            y: true,
        },
        autoAnimation: true,
        queued: true,
        delay: 0,
        letterSpacing: 0
    }
], {
        fontSize: 24,
        strokeWidth: .5,
        color: "black",
        duration: 2000,
        textAlign: "left",
        autoAnimation: true,
        queued: true,
        letterSpacing: 0
    }
);

const vara2 = new Vara2('#root', 'font.json', []);

// $ExpectType void
vara.ready(() => { });

// $ExpectType false | TextElements
vara.get(0);
vara.get('second');

// $ExpectType void
vara.draw(0);
vara.draw(0, 1000);

// $ExpectType void
vara.animationEnd((id, group) => { });

// $ExpectType void
vara.playAll();
