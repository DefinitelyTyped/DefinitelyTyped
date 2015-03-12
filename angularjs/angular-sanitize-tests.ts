/// <reference path="angular-sanitize.d.ts" />

var shouldBeString: string;

declare var $sanitizeService: angular.sanitize.ISanitizeService;
shouldBeString = $sanitizeService(shouldBeString);

declare var $linky: angular.sanitize.filter.ILinky;
shouldBeString = $linky(shouldBeString);
shouldBeString = $linky(shouldBeString, shouldBeString);
