import { Class } from "./Class";
import { Notifications } from "./Notifications";
import { Value } from "./Value";

export interface Container_Arguments {
    duration?: string | number | undefined;
    unchanged?: boolean | undefined;
    completeCallback?: (() => void) | undefined;
}

export interface Container_Params {
    title: string;
    description?: string | undefined;
    priority?: number | undefined;
    type?: string | undefined;
    content?: string | null | undefined;
    active?: boolean | undefined;
    instanceNumber?: number | null | undefined;
    params?: Container_Params | undefined;
}

export interface Container_Deferred {
    embedded: JQuery.Deferred<any>;
}

export abstract class Container extends Class {
    static instanceCounter?: number | undefined;
    defaultActiveArguments: Container_Arguments;
    defaultExpandedArguments: Container_Arguments;
    containerType: string;
    defaults: Container_Params;
    notifications?: Notifications | undefined;
    templateSelector?: string | undefined;
    container?: JQuery | undefined;
    headContainer?: JQuery | undefined;
    contentContainer?: string | undefined;
    deferred: Container_Deferred;
    priority: Value<number>;
    active: Value<boolean>;
    activeArgumentsQueue: Container_Arguments[];
    expanded: Value<boolean>;
    expandedArgumentsQueue: Container_Arguments[];
    initialize(id?: string, options?: Container_Params): void;
    getNotificationsContainerElement(): JQuery;
    setupNotifications(): void;
    ready(): void;
    _children(parentType: string, childType: string): any[];
    isContextuallyActive(): boolean | never;
    onChangeActive(active: boolean, args?: Container_Arguments): void;
    _toggleActive(active: boolean, params?: Container_Arguments): boolean;
    activate(params?: Container_Arguments): boolean;
    deactivate(params?: Container_Arguments): boolean;
    abstract onChangeExpanded(expanded: boolean, args: Container_Arguments): void | never;
    _toggleExpanded(expanded: boolean, params: Container_Arguments): boolean;
    expand(params: Container_Arguments): boolean;
    collapse(params: Container_Arguments): boolean;
    _animateChangeExpanded(completeCallback: () => void): void;
    focus(): void;
    getContainer(): string;
    getContent(): JQuery;
}
