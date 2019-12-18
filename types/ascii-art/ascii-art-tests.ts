import art from 'ascii-art';

art.font('test', 'doom').toPromise();

art.font('my text', 'Doom', (rendered: string) => {
    rendered.big();
});

art.font('my text', 'Doom', '', (rendered) => {
    rendered.big();
});

art.artwork({
	artwork: 'textfiles.com/art/st-char.asc'
}).lines(31, 45, (rendered: string) => {
	// cleanup non-unix terminators
	rendered = rendered.replace(/\r/g, '');
	art.image({
		filepath : '~/Images/earth_in_space.jpg',
		alphabet : 'ultra-wide'
	}).overlay(rendered, {
		x: 0,
		y: -1,
		style: 'red+blink',
		transparent: '&'
	}, (_final: any) => {});
});

art.font('Ghost Wire BBS', 'Doom', (logo) => {
    art.font('No place like home', 'rusted', (subtext) => {
        art.table({
            verticalBar : ' ',
            horizontalBar : ' ',
            intersection : ' ',
            data: [
                {name: art.style('current users', 'red'), value: '203'},
                {name: 'operator', value: 'vince.vega'},
                {name: 'dial-in', value: '(917)555-4202'},
            ]
        }).lines(2, (table: any) => {
            art.image({
                filepath : '~/Images/starburst_red.jpg',
                alphabet : 'ultra-wide'
            }).lines(2, 30).overlay(logo, {
                x: 0,
                y: 0,
                style: 'blue',
            }).overlay(subtext, {
                x: 19,
                y: 8,
                style: 'yellow',
            }).overlay(table, {
                x: -1,
                y: -1,
                style: 'green',
            }, (_final: any) => {
            });
        });
    });
});

art.image({
	width : 40,
	filepath : '/Images/initech.png',
	alphabet : 'wide'
}).font('INITECH', 'Doom', 'cyan', (_ascii) => {
});

art.table({
    data: [
        {text: '    .\'ANDRE.    '},
        {text: '   ..THE.GIANT\'.  '},
        {text: '.With.Bobby."The.Brain"'},
        {text: '.Heenan.'}
    ],
    verticalBar : ' ',
    horizontalBar : ' ',
    intersection : ' '
}).lines(2, (table: any) => {
    art.strings([
        'ANDRE',
        'the',
        'GIANT',
        'POSSE',
        '7\'4"',
        '520 LB'
    ], 'rusted', (andre: any, the: any, giant: any, posse: any, height: any, weight: any) => {
        art.strings([ 'has', 'a'], 'twopoint', (has: any, a: any) => {
            art.image({
                filepath : '/Images/andre_has_a_posse.jpeg',
                alphabet : 'ultra-wide'
            }).overlay(andre, {
                x: 8, y: 4,
                style: 'white'
            }).overlay(the, {
                x: 10, y: 7,
                style: 'white',
                transparent : true
            }).overlay(giant, {
                x: 8, y: 10,
                style: 'white',
                transparent : true
            }).overlay(has, {
                x: 10, y: 14,
                style: 'white'
            }).overlay(a, {
                x: 13, y: 17,
                style: 'white'
            }).overlay(posse, {
                x: 5, y: 20,
                style: 'bright_black',
                transparent: true
            }).overlay(height, {
                x: 59, y: 3,
                style: 'bright_black',
                transparent: true
            }).overlay(weight, {
                x: 59, y: 8,
                style: 'bright_black',
                transparent: true
            }).overlay(table, {
                x: 6, y: -6,
                style: 'bright_black',
                transparent: true
            }, (_final: any) => {
            });
        });
    });
});

art.Figlet.fontPath = 'Fonts';

const image = new art.Image({
	filepath: '~/Images/metropolis.jpg',
	alphabet: 'variant4'
});
image.write((_err: any, _rendered: string) => {
});

art.font('Prompt', 'Basic', 'red').font('v1', 'Doom', 'magenta', (_rendered) => {
});

art.image({
	width : 40,
	filepath : '/Images/initech.png',
	alphabet : 'wide'
}).font('INITECH', 'Doom', 'cyan', (_ascii) => {
});

art.style('my text', 'red+underline');

art.table({
    width : 80,
    data : [ /* ... */ ],
    verticalBar : ' ',
    horizontalBar : ' ',
    intersection : ' ',
    columns : [
        {
            value : 'Product',
            style : 'black+gray_bg'
        }, {
            value : 'Maker',
            style : 'white'
        }, {
            value : 'Location',
            style : 'white'
        }
    ]
}, (_rendered) => {
    // use rendered text
});

art.table({
    width : 80,
    data : [ /* ... */ ],
    bars : {
        ul_corner: '┏',
        ur_corner: '┓',
        lr_corner: '┛',
        ll_corner: '┗',
        bottom_t: '┻',
        top_t: '┳',
        right_t: '┫',
        left_t: '┣',
        intersection: '╋',
        vertical: '┃',
        horizontal: '━',
    },
    borderColor : 'bright_white',
}, (_rendered) => {
	// use rendered text
});
