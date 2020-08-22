import parser = require('linear-gradient-parser');

// SVG String input
const linearGradientString = `
<linearGradient xmlns="http://www.w3.org/2000/svg" gradientUnits="userSpaceOnUse" x1="17.5001" y1="32" x2="17.5001" y2="2.9711">
    <stop offset="0" style="stop-color:#FCB3A4"/>
    <stop offset="1" style="stop-color:#DA5899"/>
</linearGradient>
`;

parser.getBackground(linearGradientString); // $ExpectType BackgroundResult

// JSON input test
const linearGradient = {
    x1: '17.5001',
    y1: '32',
    x2: '17.5001',
    y2: '2.9711',
    stops: [
        { color: '#FCC3A4', offset: '0', opacity: 0.5 },
        { color: '#AAA899', offset: '1' },
    ],
};

parser.getBackground(linearGradient); // $ExpertType $BackgroundResult

parser.getGradientCords(90); // $ExpectType GradientCoords
