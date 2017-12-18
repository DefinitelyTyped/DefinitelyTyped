// Type definitions for homeworks 1.0
// Project: https://github.com/IGAWorksDev/homeworks/
// Definitions by: Kenneth Ceyer <https://github.com/KennethanCeyer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

type _NativeEvent = Event;

interface JQuery {
    /**
     * jQuery homeworks chaining functions
     */

    /**
     * @since 1.0.0
     */
    bind(eventType: string, handler: (...parameters: any[]) => void): JQuery;
    /**
     * @since 1.0.0
     */
    knock(): JQuery;
    /**
     * @since 1.0.0
     */
    checkbox(options?: homeworks.CheckboxOptions): JQuery;
    /**
     * @since 1.0.0
     */
    converter(options?: homeworks.ConverterOptions): JQuery;
    /**
     * @since 1.0.0
     */
    spinner(options?: homeworks.SpinnerOptions): JQuery;
    /**
     * @since 1.0.0
     */
    dropdown(options?: homeworks.DropdownOptions): JQuery;
    /**
     * @since 1.0.0
     */
    ripple(options?: any): JQuery;
    /**
     * @since 1.0.0
     */
    input(options?: homeworks.InputOptions): JQuery;
    /**
     * @since 1.0.0
     */
    modal(options?: any): JQuery;
    /**
     * @since 1.0.0
     */
    modal(method?: string, options?: any): JQuery;
    /**
     * @since 1.0.0
     */
    tab(method?: string): JQuery;
    /**
     * @since 1.0.0
     */
    tab(options?: homeworks.TabOptions): JQuery;
    /**
     * @since 1.0.0
     */
    step(method?: string): JQuery;
    /**
     * @since 1.0.0
     */
    step(options?: homeworks.StepOptions): JQuery;
    /**
     * @since 1.0.0
     */
    toggle(options: homeworks.ToggleOptions): JQuery;
    /**
     * @since 1.0.0
     */
    upload(options?: homeworks.UploadOptions): JQuery;
    /**
     * @since 1.0.0
     * @summary dropdown method
     */
    addHandler(target: JQuery): JQuery;
    /**
     * @since 1.0.0
     * @summary ripple method
     */
    start(event?: homeworks.RippleEvent): JQuery;

    /**
     * jQuery homeworks events
     */

    /**
     * @since 1.0.44
     */
    on(event: homeworks.TabMoveEventType, handler: JQuery.EventHandlerBase<any, homeworks.TabEvent>): JQuery;
    /**
     * @since 1.0.44
     */
    on(event: homeworks.StepMoveEventType, handler: JQuery.EventHandlerBase<any, homeworks.StepEvent>): JQuery;
    /**
     * @since 1.0.44
     */
    on(event: homeworks.RippleStartEventType, handler: JQuery.EventHandlerBase<any, homeworks.RippleEvent>): JQuery;
}

/**
 * @since 1.0.44
 */
declare function notification(
    title: string,
    content: string,
    url: string,
    status?: string): void;

/**
 * @since 1.0.44
 */
declare function toast(message: any): void;

declare namespace homeworks {
    /**
     * @since 1.0.0
     */
    interface CheckboxOptions {
    }

    /**
     * @since 1.0.0
     */
    interface ConverterOptions {
    }

    /**
     * @since 1.0.0
     */
    interface DropdownOptions {
    }

    /**
     * @since 1.0.0
     */
    interface InputOptions {
    }

    /**
     * @since 1.0.0
     */
    interface ToggleOptions {
        placeholder?: string;
    }

    /**
     * @since 1.0.0
     */
    interface UploadOptions {
        url: string;
        type?: string;
        data?: any;
        dest?: string;
        isBtn?: boolean;
        beforeStart?: () => void;
        complete?: (data?: any) => void;
        success?: (data?: any, state?: any, xhr?: any) => void;
        error?: (xhr?: any, state?: any, error?: any) => void;
        extensions?: any;
    }

    /**
     * @since 1.0.0
     */
    interface SpinnerOptions {
        type?: any;
        empty?: any;
    }

    /**
     * @since 1.0.0
     */
    interface StepOptions {
        active?: number;
    }

    /**
     * @since 1.0.0
     */
    interface TabOptions {
        active?: number;
    }

    /**
     * @since 1.0.44
     */
    interface Event {
        element: JQuery;
        value: string | string[] | number;
        checked?: boolean;
    }

    /**
     * @since 1.0.44
     */
    interface StepEvent {
        header: JQuery[];
        index: number;
        length: number;
    }

    /**
     * @since 1.0.44
     */
    interface TabEvent {
        header: JQuery[];
        index: number;
        length: number;
    }

    /**
     * @since 1.0.44
     */
    interface RippleEvent {
        x: number;
        y: number;
    }

    /**
     * @since 1.0.0
     */
    type TabMoveEventType = 'move';

    /**
     * @since 1.0.0
     */
    type StepMoveEventType = 'move';

    /**
     * @since 1.0.0
     */
    type RippleStartEventType = 'start';

    /**
     * @since 1.0.44
     */
    function disableHook(): void;
}
