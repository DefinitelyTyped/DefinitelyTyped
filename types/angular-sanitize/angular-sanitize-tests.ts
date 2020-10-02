var shouldBeString: string;
var shouldBeBoolean: boolean;
var shouldBeSanitizeProvider: ng.sanitize.ISanitizeProvider;

declare var $sanitizeProvider: ng.sanitize.ISanitizeProvider;
shouldBeSanitizeProvider = $sanitizeProvider.enableSvg(true);
shouldBeBoolean = $sanitizeProvider.enableSvg();
shouldBeSanitizeProvider = $sanitizeProvider.addValidElements(['div']);
shouldBeSanitizeProvider = $sanitizeProvider.addValidElements({
    htmlElements: ['div']
});
shouldBeSanitizeProvider = $sanitizeProvider.addValidElements({
    htmlElements: ['div'],
    htmlVoidElements: ['img']
});
shouldBeSanitizeProvider = $sanitizeProvider.addValidElements({
    htmlElements: ['div'],
    htmlVoidElements: ['img'],
    svgElements: ['g']
});
shouldBeSanitizeProvider = $sanitizeProvider.addValidAttrs(['class']);

declare var $sanitizeService: ng.sanitize.ISanitizeService;
shouldBeString = $sanitizeService(shouldBeString);

declare var $linky: ng.sanitize.filter.ILinky;
shouldBeString = $linky(shouldBeString);
shouldBeString = $linky(shouldBeString, 'target');
shouldBeString = $linky(shouldBeString, shouldBeString);
