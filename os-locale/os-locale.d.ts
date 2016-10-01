// Type definitions for os-locale 1.2.1
// Project: https://github.com/sindresorhus/os-locale
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "os-locale" {
	function osLocale(cb: (err: any, locale: string) => void): void;
	function osLocaleSync(): string;
	
	export { osLocaleSync as sync };
	export default osLocale;
}
