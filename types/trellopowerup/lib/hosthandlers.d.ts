import * as Base from "./base";
import * as Context from "./context";
import * as Theming from "./theming";

export type Model = "board" | "card" | "organization";
export type Scope = Model | "member";
export type Visibility = "shared" | "private";

export type ScopeVisibilityMap = {
    [K in Scope]: {
        [V in Visibility]: unknown;
    };
};

export type OrganizationField = keyof Base.Organization;
export type BoardField = keyof Base.Board;
export type CardField = keyof Base.Card;
export type ListField = keyof Base.List;
export type MemberField = keyof Base.Member;

export interface HeaderAction {
    icon: string;
    alt: string;
    callback(): void;
    position: "left" | "right";
    url?: string;
}

export type AlertDisplay = "info" | "warning" | "error" | "success";

export interface ConfettiOptions {
    clientX: number;
    clientY: number;
    target: EventTarget;
}

export interface JWTOptions {
    card?: Base.Card;
    state?: string;
}

export interface PopupOptions {
    title: string;
}

export interface PopupCallbackOptions {
    locale: string;
}

export interface PopupListItemOptions {
    text: string;
    callback?(t: CallbackHandler, options: PopupCallbackOptions): Promise<void>;
}

export interface PopupListOptions extends PopupOptions {
    items: PopupListItemOptions[];
    mouseEvent?: MouseEvent;
}

export interface PopupSearchOptions extends PopupListOptions {
    search: {
        count?: number;
        placeholder?: string;
        empty?: string;
        searching?: string;
        debounce?: number;
    };
}

export interface PopupIframeOptions extends PopupOptions {
    callback?(t: CallbackHandler, options: PopupCallbackOptions): void;
    url: string;
    args?: {
        [key: string]: unknown;
    };
    width?: number;
    height?: number;
    mouseEvent?: MouseEvent;
}

export interface PopupDateOptions extends PopupOptions {
    type: "date" | "datetime";
    callback(t: CallbackHandler, options: PopupCallbackOptions & { date: string }): Promise<void>;
    date?: Date;
    minDate?: Date;
    maxDate?: Date;
    mouseEvent?: MouseEvent;
}

export interface PopupConfirmOptions extends PopupOptions {
    type: "confirm";
    message: string;
    confirmText: string;
    onConfirm(t: CallbackHandler, opts: PopupCallbackOptions): Promise<void>;
    confirmStyle?: "primary" | "danger";
    mouseEvent?: MouseEvent;
}

export interface PopupConfirmWithCancelOptions extends PopupConfirmOptions {
    cancelText: string;
    onCancel(t: CallbackHandler, opts: PopupCallbackOptions): Promise<void>;
}

export interface AnonymousHostHandlers {
    requestWithContext(command: string, options: unknown): Promise<unknown>;
    getAll(): Promise<ScopeVisibilityMap>;
    get<T>(scope: Scope | string, visibility: Visibility, key?: string, defaultValue?: T): Promise<T>;
    set(scope: Scope | string, visibility: Visibility, key: string, value: unknown): Promise<void>;
    set(
        scope: Scope | string,
        visibility: Visibility,
        entries: {
            [key: string]: unknown;
        },
    ): Promise<void>;
    remove(scope: Scope | string, visibility: Visibility, key: string): Promise<void>;
    remove(scope: Scope | string, visibility: Visibility, entries: string[]): Promise<void>;
    safe(html: string): string;
    localizeKey(
        key: string,
        data?: {
            [key: string]: string;
        },
    ): string;
    localizeKeys(keys: Array<string | [string, string]>): string[];
    localizeNode(node: Element): void;
    /* eslint-disable @definitelytyped/no-single-element-tuple-type */
    board(...fields: ["all"] | [BoardField, ...BoardField[]]): Promise<Base.Board>;
    cards(...fields: ["all"] | [CardField, ...CardField[]]): Promise<Base.Card[]>;
    lists(...fields: ["all"] | [ListField, ...ListField[]]): Promise<Base.List[]>;
    member(...fields: ["all"] | [MemberField, ...MemberField[]]): Promise<Base.Member>;
    organization(...fields: ["all"] | [OrganizationField, ...OrganizationField[]]): Promise<Base.Organization>;
    organization(...fields: ["all"] | [OrganizationField, ...OrganizationField[]]): Promise<Base.Organization>;
    /* eslint-enable @definitelytyped/no-single-element-tuple-type */
}

export interface HostHandlers extends AnonymousHostHandlers {
    getContext(): Context.Context;
    isMemberSignedIn(): boolean;
    memberCanWriteToModel(modelType: Model): boolean;
    arg<T>(name: string, defaultValue?: T): T;
    signUrl(url: string, args?: { [key: string]: unknown }): string;
    navigate(options: { url: string }): Promise<void>;
    showCard(idCard: string): Promise<void>;
    hideCard(): Promise<void>;
    alert(options: { message: string; duration?: number; display?: AlertDisplay }): Promise<void>;
    hideAlert(): Promise<void>;
    popup(
        options:
            | PopupListOptions
            | PopupSearchOptions
            | PopupIframeOptions
            | PopupDateOptions
            | PopupConfirmOptions
            | PopupConfirmWithCancelOptions,
    ): Promise<void>;
    overlay(options: { url: string; args: { [key: string]: unknown }; inset: unknown }): Promise<void>;
    boardBar(options: {
        url: string;
        args?: { [key: string]: unknown };
        height?: number;
        accentColor?: string | Theming.ColorName;
        callback?(t: HostHandlers): void;
        title?: string;
        actions?: HeaderAction[];
        resizable?: boolean;
    }): Promise<void>;
    modal(options: {
        url: string;
        accentColor?: string | Theming.ColorName;
        height?: number;
        fullscreen?: boolean;
        callback?(): void;
        title?: string;
        actions?: HeaderAction[];
        args?: { [key: string]: unknown };
    }): Promise<void>;
    updateModal(options: {
        accentColor?: string | Theming.ColorName;
        actions?: HeaderAction[];
        fullscreen?: boolean;
        title?: string;
    }): Promise<void>;
    /** @deprecated Use `closePopup` instead. */
    hide(): Promise<void>;
    closePopup(): Promise<void>;
    back(): Promise<void>;
    /** @deprecated Use `closeOverlay` instead. */
    hideOverlay(): Promise<void>;
    closeOverlay(options?: { inset?: unknown }): Promise<void>;
    /** @deprecated Use `closeBoardBar` instead. */
    hideBoardBar(): Promise<void>;
    closeBoardBar(): Promise<void>;
    closeModal(): Promise<void>;
    sizeTo(arg: string | number | Element): Promise<void>;
    /* eslint-disable @definitelytyped/no-single-element-tuple-type */
    card(...fields: ["all"] | CardField[]): Promise<Base.Card>;
    list(...fields: ["all"] | ListField[]): Promise<Base.List>;
    /* eslint-enable @definitelytyped/no-single-element-tuple-type */
    attach(data: { name: string; url: string }): Promise<void>;
    requestToken(options: unknown): Promise<string>;
    authorize(
        authUrl: string,
        options?: {
            height?: number;
            width?: number;
            validToken?(value: string): boolean;
        },
    ): Promise<string>;
    storeSecret(secretKey: string, secretData: string): Promise<void>;
    loadSecret(secretKey: string): Promise<string>;
    clearSecret(secretKey: string): Promise<void>;
    notifyParent(
        message: "done",
        options?: {
            targetOrigin: string;
        },
    ): Promise<void>;
    confetti(arg: ConfettiOptions): ReturnType<AnonymousHostHandlers["requestWithContext"]>;
    jwt(options: JWTOptions): ReturnType<AnonymousHostHandlers["requestWithContext"]>;
    getColorToken(path: string, fallback?: string): string;
    getComputedColorToken(path: string): string;
    subscribeToThemeChanges(onThemeLoaded: (theme: { [key: string]: string }) => void): () => void;
}

export interface CallbackHandler extends HostHandlers {
    InvalidContext: Error;
    NotHandled: Error;
    PluginDisabled: Error;
    command?: string;
    args: [{ action: string; callback: string; context: Context.Context; locale: string }, ...unknown[]];
    source?: string;
    secret?: string;
}
