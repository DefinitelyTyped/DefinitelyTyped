import * as Tinycon from 'tinycon';

Tinycon.setOptions({
    abbreviate: false,
    background: '#549A2F',
    color: '#ffffff',
    fallback: true,
    font: '10px arial',
    height: 9,
    width: 7
});

Tinycon.setOptions({
    abbreviate: false,
    background: '#549A2F',
    color: '#ffffff',
    fallback: 'force',
    font: '10px arial',
    height: 9,
    width: 7
});

Tinycon.setBubble(7);

Tinycon.setBubble(null);
