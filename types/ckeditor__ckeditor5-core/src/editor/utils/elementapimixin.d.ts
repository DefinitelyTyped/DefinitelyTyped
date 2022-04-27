export interface ElementApi {
    readonly sourceElement?: HTMLElement | undefined;
    updateSourceElement(): void;
}

declare const ElementApiMixin: ElementApi;

export default ElementApiMixin;
