export function loadCSS(
    href: string,
    before?: HTMLElement,
    media?: string,
    attributes?: Record<string, string>,
): HTMLLinkElement;

declare global {
    interface Window {
        onloadCSS: (stylesheet: HTMLLinkElement, callback: () => void) => void;
    }
}
