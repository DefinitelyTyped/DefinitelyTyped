import boxen = require('boxen');

boxen('unicorn'); // $ExpectType string
boxen('unicorn', { borderColor: 'black' }); // $ExpectType string
boxen('unicorn', { borderStyle: 'double' }); // $ExpectType string
boxen('unicorn', { borderStyle: 'foo' }); // $ExpectError
// $ExpectType string
boxen('unicorn', {
    borderStyle: {
        topLeft: '+',
        topRight: '+',
        bottomLeft: '+',
        bottomRight: '+',
        horizontal: '-',
        vertical: '|',
    },
});
boxen('unicorn', { dimBorder: true }); // $ExpectType string
boxen('unicorn', { padding: 1 }); // $ExpectType string
boxen('unicorn', { padding: { top: 1 } }); // $ExpectType string
boxen('unicorn', { padding: { right: 1 } }); // $ExpectType string
boxen('unicorn', { padding: { bottom: 1 } }); // $ExpectType string
boxen('unicorn', { padding: { left: 1 } }); // $ExpectType string
boxen('unicorn', { margin: 1 }); // $ExpectType string
boxen('unicorn', { margin: { top: 1 } }); // $ExpectType string
boxen('unicorn', { margin: { right: 1 } }); // $ExpectType string
boxen('unicorn', { margin: { bottom: 1 } }); // $ExpectType string
boxen('unicorn', { margin: { left: 1 } }); // $ExpectType string
boxen('unicorn', { float: 'right' }); // $ExpectType string
boxen('unicorn', { float: 'center' }); // $ExpectType string
boxen('unicorn', { float: 'left' }); // $ExpectType string
boxen('unicorn', { float: 'foo' }); // $ExpectError
boxen('unicorn', { backgroundColor: 'white' }); // $ExpectType string
boxen('unicorn', { align: 'left' }); // $ExpectType string
boxen('unicorn', { align: 'center' }); // $ExpectType string
boxen('unicorn', { align: 'right' }); // $ExpectType string
boxen('unicorn', { align: 'foo' }); // $ExpectError
