import { Plugin } from '@ckeditor/ckeditor5-core';

export default class TwoStepCaretMovement extends Plugin {
    static readonly pluginName: 'TwoStepCaretMovement';
    /**
     * A set of attributes to handle.
     */
    readonly attributes: Set<string>;
    init(): void;
    /**
     * Registers a given attribute for the two-step caret movement.
     */
    registerAttribute(attribute: string): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        TwoStepCaretMovement: TwoStepCaretMovement;
    }
}
