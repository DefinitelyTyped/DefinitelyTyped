// Type definitions for os-locale 1.4.0
// Project: https://github.com/sindresorhus/os-locale
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "os-locale" {
	function osLocale(options: {spawn?: boolean}, cb: (err: any, locale: string) => void): void;
	function osLocale(cb: (err: any, locale: string) => void): void;
	function osLocaleSync(): string;
	function osLocaleSync(options: {spawn?: boolean}): string;

	export { osLocaleSync as sync };
	export default osLocale;
}
