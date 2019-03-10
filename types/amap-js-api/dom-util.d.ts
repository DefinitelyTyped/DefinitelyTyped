declare namespace AMap {
    namespace DomUtil {
        function getViewport(dom: HTMLElement): Size;

        function getViewportOffset(dom: HTMLElement): Pixel;

        function create<K extends keyof HTMLElementTagNameMap>(
            tagName: K,
            parent?: HTMLElement,
            className?: string
        ): HTMLElementTagNameMap[K];

        function setClass(dom: HTMLElement, className?: string): void;

        function hasClass(dom: HTMLElement, className: string): boolean;

        function addClass(dom: HTMLElement, className: string): void;

        function removeClass(dom: HTMLElement, className: string): void;

        function setOpacity(dom: HTMLElement, opacity: number): void;

        function rotate(dom: HTMLElement, deg: number, origin?: { x: number, y: number }): void;

        function setCss(dom: HTMLElement | HTMLElement[], style: Partial<CSSStyleDeclaration>): typeof DomUtil; // this

        function empty(dom: HTMLElement): void;

        function remove(dom: HTMLElement): void;
    }
}
