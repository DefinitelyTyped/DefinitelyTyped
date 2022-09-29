// Test with no settings
// $ExpectType JQuery<HTMLElement>
jQuery('.jg-1').justifiedGallery();

// Test with empty settings
// $ExpectType JQuery<HTMLElement>
jQuery('.jg-2').justifiedGallery({});

// Test with settings
// $ExpectType JQuery<HTMLElement>
jQuery('.jg-3').justifiedGallery({
    lastRow: 'nojustify',
    margins: 10,
    rowHeight: 200
});

// Test with nested settings
// $ExpectType JQuery<HTMLElement>
jQuery('.jg-4').justifiedGallery({
    captionSettings: {
        animationDuration: 1000,
        visibleOpacity: 0.5
    },
    lastRow: 'nojustify',
    margins: 10,
    rowHeight: 200
});
