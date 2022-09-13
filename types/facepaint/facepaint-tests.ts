import facepaint = require('facepaint');

facepaint([
    '@media(min-width: 420px)',
    '@media(min-width: 920px)',
    '@media(min-width: 1120px)'
], {
    literal: true,
    overlap: true
});
