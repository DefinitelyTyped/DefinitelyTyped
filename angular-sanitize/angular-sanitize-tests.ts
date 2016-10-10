var shouldBeString: string;

declare var $sanitizeService: ng.sanitize.ISanitizeService;
shouldBeString = $sanitizeService(shouldBeString);

declare var $linky: ng.sanitize.filter.ILinky;
shouldBeString = $linky(shouldBeString, "target");
shouldBeString = $linky(shouldBeString, shouldBeString);
