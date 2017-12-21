// Type definitions for mobile-detect v1.2.0
// Project: http://hgoebl.github.io/mobile-detect.js/
// Definitions by: Martin McWhorter <https://github.com/martinmcwhorter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class MobileDetect {
	
	constructor(userAgent: string, maxPhoneWidth?: number);
	
	is(key: string): boolean;
	match(pattern: string|RegExp): boolean;
	mobile(): string;
	mobileGrade(): string;
	os(): string;
	phone(): string;
	tablet(): string;
	userAgent(): string;
	version(value: string): number;
	versionStr(value: string): string;
}
	
export = MobileDetect;
export as namespace MobileDetect;