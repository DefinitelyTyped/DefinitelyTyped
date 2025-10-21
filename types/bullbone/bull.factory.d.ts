import type { BullViewOptions, View } from "./bull.view";

declare class Factory {
    defaultViewName: string;

    constructor(options?: {
        defaultViewName?: string;
        customLoader?: object;
        customRenderer?: object;
        customLayouter?: object;
        customTemplator?: object;
        helper?: object;
        viewLoader?: (name: string, callback: (view: View) => void) => void;
        resources?: {
            loaders?: {
                template?: (name: string, callback: (content: string) => void) => void;
                layoutTemplate?: (name: string, callback: (content: string) => void) => void;
            };
        };
        preCompiledTemplates?: Record<string, () => any>;
    });

    /**
     * Create a view.
     */
    create(
        viewName: string,
        options?: BullViewOptions,
        callback?: (view: View) => void,
    ): void;

    /**
     * Prepare a view instance.
     */
    prepare(view: View, callback?: (view: View) => void): void;
}

export default Factory;
