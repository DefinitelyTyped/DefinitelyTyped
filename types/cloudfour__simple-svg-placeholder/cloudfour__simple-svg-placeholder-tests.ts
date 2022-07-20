import placeholder = require('@cloudfour/simple-svg-placeholder');

// $ExpectType string
placeholder();

// $ExpectType string
placeholder({ dataUri: false });

placeholder({
    width: 300,
    height: 150,
    text: '300x150',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 50,
    dy: 40,
    bgColor: '#ddd',
    textColor: 'rgba(0,0,0,0.5)',
    dataUri: true,
    charset: 'UTF-8',
});

placeholder({
    // @ts-expect-error
    width: '300px',
    // @ts-expect-error
    height: '150px',
    // @ts-expect-error
    text: 300,
    // @ts-expect-error
    fontSize: '50px',
    // @ts-expect-error
    dy: '40px',
    // @ts-expect-error
    dataUri: 'true',
});

// @ts-expect-error
placeholder(300, 150);
