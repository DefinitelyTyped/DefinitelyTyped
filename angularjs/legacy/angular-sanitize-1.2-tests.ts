/// <reference path="angular-sanitize-1.2.d.ts" />

var shouldBeString: string;

declare var $sanitizeService: ng.sanitize.ISanitizeService;
shouldBeString = $sanitizeService(shouldBeString);

declare var $linky: ng.sanitize.filter.ILinky;
shouldBeString = $linky(shouldBeString);
shouldBeString = $linky(shouldBeString, shouldBeString);
