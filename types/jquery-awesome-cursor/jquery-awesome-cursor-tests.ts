// Default
jQuery.awesomeCursor('pencil');

// Color
jQuery.awesomeCursor('pencil', {
    color: '#ff0000'
});

// Size
jQuery.awesomeCursor('pencil', {
    size: 32
});

// Hotspot
jQuery.awesomeCursor('pencil', {
    hotspot: [0, 17]
});
jQuery.awesomeCursor('pencil', {
    hotspot: 'bottom left'
});

// Flip
jQuery.awesomeCursor('pencil', {
    flip: 'horizontal'
});
jQuery.awesomeCursor('pencil', {
    flip: 'vertical'
});
jQuery.awesomeCursor('pencil', {
    flip: 'both'
});

// Rotate
jQuery.awesomeCursor('pencil', {
    rotate: 45
});

// Outline
jQuery.awesomeCursor('pencil', {
    outline: 'red'
});

// Different font
jQuery.awesomeCursor('brush', {
    font: {
        family: 'typicons',
        cssClass: 'typcn typcn-%s'
    }
});
jQuery.awesomeCursor('brush', {
    font: {
        family: 'typicons',
        cssClass: (name) => {
            return 'typcn typcn-' + name;
        }
    }
});

// Mixed
jQuery.awesomeCursor('long-arrow-left', {
    color: 'red',
    hotspot: 'top left',
    rotate: 45,
});
