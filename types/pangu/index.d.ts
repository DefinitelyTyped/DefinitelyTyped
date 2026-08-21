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
