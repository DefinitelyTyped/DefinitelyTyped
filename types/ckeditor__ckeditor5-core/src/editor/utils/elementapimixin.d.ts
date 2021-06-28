export interface ElementApi {
    readonly sourceElement?: HTMLElement;
    updateSourceElement(): void;
}

declare const ElementApiMixin: ElementApi;

export default ElementApiMixin;
