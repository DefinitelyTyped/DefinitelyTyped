export type TranslateEvents = 'translate.jump';

export interface TranslateEventsBus {
    on(event: TranslateEvents, handler: () => void): { remove(): void };
    on(event: TranslateEvents[], handler: () => void): void;

    emit(event: TranslateEvents | TranslateEvents[]): void;
}

export interface Translate {
    /**
     * Sets value of translate on HTML element.
     */
    set(value: number): void;

    /**
     * Removes value of translate from HTML element.
     */
    remove(): void;

    getStartIndex(): number;

    getTravelDistance(): number;
}
