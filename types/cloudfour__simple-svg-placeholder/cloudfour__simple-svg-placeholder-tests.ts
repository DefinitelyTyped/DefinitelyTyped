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
    // $ExpectError
    width: '300px',
    // $ExpectError
    height: '150px',
    // $ExpectError
    text: 300,
    // $ExpectError
    fontSize: '50px',
    // $ExpectError
    dy: '40px',
    // $ExpectError
    dataUri: 'true',
});

// $ExpectError
placeholder(300, 150);
