export function getAutomationMode(): string;
export function getDeviceType(): 'phone' | 'tablet' | 'others';
export function getLocale(): string;
export function getResourceUrl(relativePath: string): string;
export function getVersionInfo(): string;
export function logVersionInfo(): undefined;
export function setAutomationMode(mode: string): undefined;
export function setLocale(locale: string, callback?: (() => void)): undefined;
export function setResourceBaseUrl(baseUrl: string): undefined;
