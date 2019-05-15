// Type definitions for Bootstrap Switch
// Project: http://www.bootstrap-switch.org/
// Definitions by: John M. Baughman <https://github.com/johnmbaughman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * bootstrap-switch - v3.3.2 Copyright (c) 2012-2013 Mattia Larentis
 * Available via the Apache license.
 * see: http://www.bootstrap-switch.org/ or https://github.com/nostalgiaz/bootstrap-switch for details.
 */

/// <reference types="jquery"/>

declare namespace BootstrapSwitch {
    interface BootstrapSwitchChangeEventObject extends JQueryEventObject {
        state: boolean
    }

    interface BootstrapSwitchEventObject extends JQueryEventObject { }

    interface BootstrapSwitchOptions {
        state?: boolean;
        size?: string;
        animate?: boolean;
        disabled?: boolean;
        readonly?: boolean;
        indeterminate?: boolean;
        invers?: boolean;
        radioAllOff?: boolean;
        onColor?: string;
        offColor?: string;
        onText?: string;
        offText?: string;
        labelText?: string;
        handleWidth?: string;
        labelWidth?: string;
        baseClass?: string;
        wrapperClass?: string;
        onInit?: any;
        onSwitchChange?: any;
    }

    interface Switch {
        toggleAnimate(): JQuery;
        toggleDisabled(): JQuery;
        toggleReadonly(): JQuery;
        toggleIndeterminate(): JQuery;
        toggleInverse(): JQuery;
        destroy(): JQuery;

        state(): boolean;
        state(value: any): JQuery;
        state(value: any, skip: boolean): JQuery;
        toggleState(skip?: boolean): JQuery;
        radioAllOff(): boolean;
        radioAllOff(state: boolean): JQuery;
        size(): string;
        size(size: string): JQuery;
        animate(): boolean;
        animate(state: boolean): JQuery;
        disabled(): boolean;
        disabled(state: boolean): JQuery;
        toggleDisabled(): JQuery;
        readonly(): boolean;
        readonly(state: boolean): JQuery;
        toggleReadOnly(): JQuery;
        onColor(): string;
        onColor(color: string): JQuery;
        offColor(): string;
        offColor(color: string): JQuery;
        onText(): string;
        onText(text: string): JQuery;
        offText(): string;
        offText(text: string): JQuery;
        labelText(): string;
        labelText(text: string): JQuery;
        baseClass(): string;
        baseClass(text: string): JQuery;
        wrapperClass(): string;
        wrapperClass(text: string): JQuery;
    }
}

interface JQuery {
    bootstrapSwitch(): JQuery;
    bootstrapSwitch(options: BootstrapSwitch.BootstrapSwitchOptions): JQuery;
    bootstrapSwitch(method: 'state' | 'radioAllOff' | 'animate' | 'disabled' | 'readonly'): boolean;
    bootstrapSwitch(method: 'size' | 'onColor' | 'offColor' | 'onText' | 'offText' | 'labelText' | 'baseClass' | 'wrapperClass'): string;
    bootstrapSwitch(method: string): JQuery;
    bootstrapSwitch(method: string, param: any): JQuery;
    bootstrapSwitch(method: string, param1: any, param2: any): JQuery;

    off(events: "init.bootstrapSwitch", selector?: string, handler?: (eventobject: BootstrapSwitch.BootstrapSwitchEventObject) => any): JQuery;
    off(events: "init.bootstrapSwitch", handler?: (eventobject: BootstrapSwitch.BootstrapSwitchEventObject) => any): JQuery;

    off(events: "switchChange.bootstrapSwitch", selector?: string, handler?: (eventobject: BootstrapSwitch.BootstrapSwitchChangeEventObject) => any): JQuery;
    off(events: "switchChange.bootstrapSwitch", handler?: (eventobject: BootstrapSwitch.BootstrapSwitchChangeEventObject) => any): JQuery;

    on(events: "init.bootstrapSwitch", selector?: string, handler?: (eventobject: BootstrapSwitch.BootstrapSwitchEventObject) => any): JQuery;
    on(events: "init.bootstrapSwitch", handler?: (eventobject: BootstrapSwitch.BootstrapSwitchEventObject) => any): JQuery;

    on(events: "switchChange.bootstrapSwitch", selector?: string, handler?: (eventobject: BootstrapSwitch.BootstrapSwitchChangeEventObject) => any): JQuery;
    on(events: "switchChange.bootstrapSwitch", handler?: (eventobject: BootstrapSwitch.BootstrapSwitchChangeEventObject) => any): JQuery;
}
