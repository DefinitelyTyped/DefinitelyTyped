// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Electron {
	/**
	 * The web-frame module allows you to customize the rendering of the current web page.
	 */
	interface WebFrame {
		/**
		 * Changes the zoom factor to the specified factor, zoom factor is
		 * zoom percent / 100, so 300% = 3.0.
		 */
		setZoomFactor(factor: number): void;
		/**
		 * @returns The current zoom factor.
		 */
		getZoomFactor(): number;
		/**
		 * Changes the zoom level to the specified level, 0 is "original size", and each
		 * increment above or below represents zooming 20% larger or smaller to default
		 * limits of 300% and 50% of original size, respectively.
		 */
		setZoomLevel(level: number): void;
		/**
		 * @returns The current zoom level.
		 */
		getZoomLevel(): number;
		/**
		 * Sets the maximum and minimum zoom level.
		 */
		setZoomLevelLimits(minimumLevel: number, maximumLevel: number): void;
		/**
		 * Sets a provider for spell checking in input fields and text areas.
		 */
		setSpellCheckProvider(language: string, autoCorrectWord: boolean, provider: {
			/**
			 * @returns Whether the word passed is correctly spelled.
			 */
			spellCheck: (text: string) => boolean;
		}): void;
		/**
		 * Sets the scheme as secure scheme. Secure schemes do not trigger mixed content
		 * warnings. For example, https and data are secure schemes because they cannot be
		 * corrupted by active network attackers.
		 */
		registerURLSchemeAsSecure(scheme: string): void;
		/**
		 * Resources will be loaded from this scheme regardless of the current page’s Content Security Policy.
		 */
		registerURLSchemeAsBypassingCSP(scheme: string): void;
		/**
		 * Registers the scheme as secure, bypasses content security policy for resources,
		 * allows registering ServiceWorker and supports fetch API.
		 */
		registerURLSchemeAsPrivileged(scheme: string): void;
		/**
		 * Inserts text to the focused element.
		 */
		insertText(text: string): void;
		/**
		 * Evaluates `code` in page.
 		 * In the browser window some HTML APIs like `requestFullScreen` can only be
 		 * invoked by a gesture from the user. Setting `userGesture` to `true` will remove
 		 * this limitation.
		 */
		executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any) => void): void;
	}
}
