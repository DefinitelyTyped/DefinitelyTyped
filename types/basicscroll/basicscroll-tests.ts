const scrollOne: basicScroll.BasicScroll = basicScroll.create({
    from: '0',
    to: '100px',
    props: {
        '--opacity': {
            from: 0,
            to: 1,
        },
    },
});

scrollOne.calculate(); // $ExpectType void
scrollOne.destroy(); // $ExpectType void
scrollOne.getData(); // $ExpectType Data
scrollOne.isActive(); // $ExpectType boolean
scrollOne.start(); // $ExpectType void
scrollOne.stop(); // $ExpectType void
scrollOne.update(); // $ExpectType Props

const scrollTwo = basicScroll.create({
    elem: document.querySelector('.element'),
    from: 'top-middle',
    to: 'bottom-middle',
    inside: (instance, percentage, props) => {
        console.log('viewport is inside from and to');
    },
    outside: (instance, percentage, props) => {
        console.log('viewport is outside from and to');
    },
});

// demo #1
const elem = document.querySelector('.clock');
const hand = document.querySelector('.clock__hand');

const clock = basicScroll.create({
    elem,
    from: 'middle-bottom',
    to: 'middle-top',
    inside: (instance, percentage, props) => console.log(['--deg'], 10, 14),
    props: {
        '--deg': {
            from: 0,
            to: 360,
        },
    },
});

clock.start();

// demo #2
const easeBoxes: basicScroll.BasicScroll[] = [];

// Create an animation for each ease box. Each with a different timing.
document.querySelectorAll('.easeBox').forEach((elem, i) => {
    // Get the timing from the data attribute.
    // You can also hard-code the timing, but for the demo it's easier this way.
    const timing: basicScroll.KnownTimings = <basicScroll.KnownTimings> elem.getAttribute('data-timing');

    // Crate an instance for the current element and store the instance in an array.
    // We start the animation later using the instances from the array.
    easeBoxes.push(
        basicScroll.create({
            elem,
            from: 'middle-bottom',
            to: 'bottom-top',
            direct: true,
            props: {
                '--ty': {
                    from: '0',
                    to: '100px',
                    timing,
                },
            },
        }),
    );
});

const rotateBox = basicScroll.create({
    elem: document.querySelector('.rotateBox'),
    from: 'top-middle',
    to: 'top-top',
    props: {
        '--r': {
            from: '0',
            to: '1turn',
        },
    },
});

const fadeBox = basicScroll.create({
    elem: document.querySelector('.fadeBox'),
    from: 'bottom-bottom',
    to: 'top-middle',
    inside: (instance, percentage, props) => console.log('fadeBox is animating'),
    outside: (instance, percentage, props) => console.log('fadeBox is not animating'),
    props: {
        '--o': {
            from: 0.01,
            to: 0.99,
        },
    },
});

const referenceBox = basicScroll.create({
    elem: document.querySelector('.referenceBox'),
    from: 'bottom-bottom',
    to: 'top-top',
    direct: document.querySelector('.directBox')!,
    props: {
        '--o': {
            from: 0.01,
            to: 0.99,
        },
    },
});

rotateBox.start();
fadeBox.start();
referenceBox.start();
easeBoxes.forEach(easeBox => easeBox.start());
