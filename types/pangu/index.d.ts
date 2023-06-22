// Type definitions for pangu 4.0
// Project: https://github.com/vinta/pangu.js
// Definitions by: York Yao <https://github.com/plantain-00>, AH-dark <https://github.com/AH-dark>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function spacing(text: string): string;

export function spacingFile(path: string, callback: (error: Error, data: string) => void): void;
export function spacingFile(path: string): Promise<string>;

export function spacingFileSync(path: string): string;

export function spacingText(text: string, callback: (error: Error, data: string) => void): void;
export function spacingText(text: string): Promise<string>;

export function spacingNode(contextNode: HTMLElement): void;
export function spacingElementById(id: string): void;
export function spacingElementByClassName(className: string): void;
export function spacingElementByTagName(tagName: string): void;
export function spacingPageTitle(): void;
export function spacingPageBody(): void;
export function spacingPage(): void;
export function autoSpacingPage(pageDelay?: number, nodeDelay?: number, nodeMaxWait?: number): void;

export as namespace pangu;
