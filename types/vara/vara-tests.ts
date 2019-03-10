import Vara from 'vara';

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

// $ExpectType void
vara.ready(() => {});

// $ExpectType false | TextElements
vara.get(0);
vara.get('second');
