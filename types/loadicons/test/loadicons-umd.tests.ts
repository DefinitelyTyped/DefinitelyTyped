loadIcons('sprite.svg', (error, svg) => {
    if (error) {
        console.error('Everything failed because ' + error);
    } else {
        console.log('SVG loaded!', svg);
    }
});
