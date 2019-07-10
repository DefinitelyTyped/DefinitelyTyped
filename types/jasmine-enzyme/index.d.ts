// Type definitions for jasmine-enzyme 7.0
// Project: https://github.com/formidablelabs/enzyme-matchers/packages/jasmine-enzyme
// Definitions by: Umar Bolatov <https://github.com/bolatovumar>
//                 Steve Gravrock <https://github.com/sgravrock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/// <reference types="jasmine" />
/// <reference types="react" />

declare function jasmineEnzyme(): void;
export default jasmineEnzyme;

declare global {
	namespace jasmine {
		interface Matchers<T> {
			toBeChecked(): void;
			toBeDisabled(): void;
			toBeEmptyRender(): void;
			toContainMatchingElement(selector: string): void;
			toContainMatchingElements(num: number, selector: string): void;
			toContainExactlyOneMatchingElement(selector: string): void;
			toContainReact(reactInstance: JSX.Element): void;
			toExist(): void;
			toHaveClassName(className: string): void;
			toHaveDisplayName(tagName: string): void;
			toHaveHTML(html: string): void;
			toHaveProp(propKey: string, propValue?: any): void;
			toHaveRef(refName: string): string;
			toHaveState(stateKey: string, stateValue?: any): void;
			toHaveStyle(styleKey: string, styleValue?: any): void;
			toHaveTagName(tagName: string): void;
			toHaveText(text?: string): void;
			toIncludeText(text: string): void;
			toHaveValue(value: any): void;
			toMatchElement(reactInstance: JSX.Element): void;
			toMatchSelector(selector: string): void;
		}
	}
}
