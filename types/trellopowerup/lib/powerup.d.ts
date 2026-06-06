import * as Base from "./base";
import * as Callback from "./callback";
import * as Context from "./context";
import * as HostHandlers from "./hosthandlers";
import * as L18N from "./localizer";
import * as RestApi from "./restapi";
import * as Theming from "./theming";
import * as Util from "./util";

export * from "./context";
export * from "./hosthandlers";
export * from "./restapi";
export * from "./util";

export interface AttachmentSectionBase {
    claimed: boolean;
    icon: string;
    content: {
        type: string;
        url: string;
        height?: number;
    };
}

export interface AttachmentSection extends AttachmentSectionBase {
    title: string;
}

export interface LazyAttachmentSection extends AttachmentSectionBase {
    id: string;
    title(): string;
}

export type ButtonDisplayCondition = "admin" | "always" | "edit" | "readonly" | "signedIn" | "signedOut";

export interface BoardButtonBase {
    icon: {
        dark: string;
        light: string;
    };
    text: string;
    condition?: ButtonDisplayCondition;
}

export interface BoardButtonCallback extends BoardButtonBase {
    callback: (t: HostHandlers.CallbackHandler) => Promise<void>;
}

export interface BoardButtonUrl extends BoardButtonBase {
    url: string;
    target?: string;
}

export interface CardBackSection {
    title: string;
    icon: string;
    content: {
        type: "iframe";
        url: string;
        height?: number;
    };
}

export interface CardBadge {
    text?: string;
    icon?: string;
    color?: Theming.ColorName;
    refresh?: number;
}

export interface CardBadgeDynamic {
    dynamic(): CardBadge;
}

export interface CardButton {
    icon: string;
    text: string;
    condition?: ButtonDisplayCondition;
    callback(t: HostHandlers.CallbackHandler): Promise<void>;
    url?: string;
    target?: string;
}

export interface CardDetailBadge extends CardBadge {
    title: string;
    callback?(t: HostHandlers.CallbackHandler): void;
    url?: string;
    target?: string;
}

export interface CardDetailBadgeDynamic {
    dynamic(): CardDetailBadge;
}

export interface ListAction {
    text: string;
    callback(t: HostHandlers.CallbackHandler): Promise<void>;
}

export interface ListSorterOutput {
    sortedIds: string[];
}

export interface ListSorter {
    text: string;
    callback(
        t: HostHandlers.CallbackHandler,
        options: {
            cards: Base.Card[];
        },
    ): Promise<ListSorterOutput>;
}

export interface CapabilityHandlers {
    "attachment-sections"?: (
        t: HostHandlers.CallbackHandler,
        options: {
            entries: Base.Attachment[];
        },
    ) => Promise<(AttachmentSection | LazyAttachmentSection)[]>;
    "attachment-thumbnail"?: () => void;
    "board-buttons"?: (t: HostHandlers.CallbackHandler) => Promise<(BoardButtonUrl | BoardButtonCallback)[]>;
    "card-back-section"?: (t: HostHandlers.CallbackHandler) => Promise<CardBackSection>;
    "card-badges"?: (t: HostHandlers.CallbackHandler) => Promise<(CardBadgeDynamic | CardBadge)[]>;
    "card-buttons"?: (t: HostHandlers.CallbackHandler) => Promise<CardButton[]>;
    "card-detail-badges"?: (
        t: HostHandlers.CallbackHandler,
    ) => Promise<(CardDetailBadgeDynamic | CardDetailBadge)[]>;
    "card-from-url"?: () => void;
    "format-url"?: () => void;
    "list-actions"?: (t: HostHandlers.CallbackHandler) => Promise<ListAction[]>;
    "list-sorters"?: (t: HostHandlers.CallbackHandler) => Promise<ListSorter[]>;
    "on-enable"?: (t: HostHandlers.CallbackHandler) => Promise<void>;
    "on-disable"?: (t: HostHandlers.CallbackHandler) => Promise<void>;
    "remove-data"?: () => void;
    "show-settings"?: (t: HostHandlers.CallbackHandler) => Promise<void>;
    "authorization-status"?: () => void;
    "show-authorization"?: () => void;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IFrameOptions extends L18N.LocalizerOptions {
    context?: string;
    secret?: string;
    helpfulStacks?: boolean;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IFrame extends HostHandlers.HostHandlers {
    io: PostMessageIO | null;
    args: [{ context: Context.Context; secret: unknown }, ...unknown[]];
    secret?: string;
    options: IFrameOptions;
    i18nPromise: Promise<void>;
    init(): void;
    connect(): void;
    request(command: string, options: unknown): Promise<unknown>;
    render(fxRender: () => void): void;
    initApi(): void;
    getRestApi(): RestApi.Api;
    initSentry(): void;
}

export interface DebuggingOptions {
    Sentry?: {
        configureScope(
            callback: (scope: {
                setTags(name: string, value: string): void;
                setUser(value: { id: string }): void;
            }) => void,
        ): void;
    };
    helpfulStacks?: boolean;
}

export interface PostMessageIOOptions extends DebuggingOptions {
    bufferSize: number;
    handlers: CapabilityHandlers;
    hostHandlers: HostHandlers.CallbackHandler;
    local: typeof window;
    noisy: boolean;
    Promise: PromiseConstructor;
    remote: typeof window;
    secret: string;
    strict?: boolean;
    targetOrigin: string;
}

export interface PostMessageIO extends PostMessageIOOptions {
    InvalidContext: Error;
    NotHandled: Error;
    PluginDisabled: Error;
    UnsupportedCommand: Error;

    listen(): void;
    stop(): void;
    raw(): void;
    emptyQueue(): void;
    request(): void;
    respond(): void;
    randomId(): void;
    errorWithStack(): void;
}

export interface AuthParams {
    expiration: string;
    scope: string;
    returnUrl: string;
}

export interface AuthMethods {
    makeWebCall(method: string): unknown;
    registerMessageHandler(popup: WindowProxy | null): string | ReturnType<MessageEvent["data"]>;
    storeToken(token: string): Promise<string>;
    checkForToken(): string | null;
    fetchAndStoreToken(): Promise<string | null>;
    getToken(): Promise<string>;
    clearToken(): void;
    popupConfig(): string;
    showAuthPopup(_ref: AuthParams): WindowProxy | null;
    authorize(): Promise<string>;
    isAuthorized(): boolean;
    checkAndStoreToken(): void;
}

export interface PluginOptions extends RestApi.ApiOptions, L18N.LocalizerOptions, DebuggingOptions {
}

export interface Plugin extends HostHandlers.AnonymousHostHandlers {
    options: PluginOptions;
    connect(): Promise<PostMessageIO>;
    initApi(): ReturnType<Plugin["connect"]>; // return an instance of PostMessageIO
    request(command: string): Promise<unknown>;
    init(): ReturnType<Plugin["initApi"]>; // return an instance of PostMessageIO
    NotHandled: PostMessageIO["NotHandled"];
    io: PostMessageIO;
}

export interface PowerUp {
    version: string;
    Promise: PromiseConstructor;
    CallbackCache: Callback.Cache;
    PostMessageIO(options: PostMessageIOOptions): PostMessageIO;
    iframe(options?: IFrameOptions): IFrame;
    initialize(handlers: CapabilityHandlers, options?: PluginOptions): Plugin;
    restApiError(message?: string): RestApi.ApiError;
    util: Util.Util;
}
