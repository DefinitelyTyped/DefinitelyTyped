/// <reference types="jquery" />

interface JQuery<TElement = HTMLElement> {
    bcSwipe(settings?: { threshold?: number }): this;
}
