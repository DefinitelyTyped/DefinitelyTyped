/**********************************************************
*                                                         *
*                 PlantomJS v1.8.0 API                    *
*  https://github.com/ariya/phantomjs/wiki/API-Reference  *
*                                                         *
**********************************************************/

interface Phantom {

	// Properties
	args: string[];  // DEPRECATED
	cookies: any;
	cookiesEnabled: bool;
	libraryPath: string;
	scriptName: string;  // DEPRECATED
	version: any;

	// Functions
	addCookie(cookie: any): bool;
	clearCookies();
	deleteCookie(cookieName: string): bool;
	exit(returnValue: any): bool;
	injectJs(filename: string): bool;

	// Callbacks
	onError: Function;
}

interface WebPage {
	
}
