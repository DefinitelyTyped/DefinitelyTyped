// Type definitions for jasmine-enzyme 3.6
// Project: https://github.com/formidablelabs/enzyme-matchers/packages/jasmine-enzyme
// Definitions by: Umar Bolatov <https://github.com/bolatovumar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="jasmine" />
/// <reference types="react" />

declare function jasmineEnzyme(): void;
export default jasmineEnzyme;

declare global {
	namespace jasmine {
		interface Matchers<T> {
			toBeChecked(): boolean;
			toBeDisabled(): boolean;
			toBeEmpty(): boolean;
			toBePresent(): boolean;
			toContainReact(reactInstance: JSX.Element): boolean;
			toHaveClassName(className: string): boolean;
			toHaveHTML(html: string): boolean;
			toHaveProp(propKey: string, propValue?: any): boolean;
			toHaveRef(refName: string): string;
			toHaveState(stateKey: string, stateValue?: any): boolean;
			toHaveStyle(styleKey: string, styleValue?: any): boolean;
			toHaveTagName(tagName: string): boolean;
			toHaveText(text?: string): boolean;
			toIncludeText(text: string): boolean;
			toHaveValue(value: any): boolean;
			toMatchElement(reactInstance: JSX.Element): boolean;
			toMatchSelector(selector: string): boolean;
		}
	}
}
