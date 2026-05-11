declare namespace Sfdc {
    function canvas(callback: () => void): void;

    namespace canvas {
        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/client_object.htm
        interface Client {
            readonly oauthToken?: string | null | undefined;
            readonly instanceId?: string | null | undefined;
            readonly instanceUrl?: string | null | undefined;
            readonly targetOrigin?: string | null | undefined;
            readonly refreshToken?: string | null | undefined;
        }

        interface Response<T> {
            readonly seq: number;
            readonly parentVersion: string;
            readonly clientVersion: string;
            readonly payload: T;
            readonly status: number;
            readonly statusText: string;
            readonly responseHeaders: string;
            readonly type: string;
            readonly targetModule: string;
        }

        enum ApplicationOptions {
            HIDE_HEADER = "HideHeader",
            HIDE_SHARE = "HideShare",
            PERSONAL_ENABLED = "PersonalEnabled",
        }

        enum ApplicationAuthType {
            SIGNED_REQUEST = "SIGNED_REQUEST",
            OAUTH = "OAUTH",
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/application_object.htm;
        interface Application {
            readonly applicationId: string;
            readonly authType: ApplicationAuthType;
            readonly canvasUrl: string;
            readonly developerName: string;
            readonly isInstalledPersonalApp: boolean;
            readonly name: string;
            readonly namespace: string;
            readonly options: ApplicationOptions[];
            readonly referenceId: string;
            readonly samlInitiationMethod: string;
            readonly version: string;
        }

        enum UserType {
            STANDARD = "STANDARD",
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/user_object.htm
        interface User {
            readonly accessibilityModeEnabled: boolean;
            readonly currencyISOCode: string;
            readonly email: string;
            readonly firstName: string;
            readonly fullName: string;
            readonly isDefaultNetwork: boolean;
            readonly language: string;
            readonly lastName: string;
            readonly locale: string;
            readonly networkId: string;
            readonly profileId: string;
            readonly profilePhotoUrl: string;
            readonly profileThumbnailUrl: string;
            readonly roleId: string | null;
            readonly siteUrl: string;
            readonly siteUrlPrefix: string;
            readonly timeZone: string;
            readonly userId: string;
            readonly userName: string;
            readonly userType: UserType;
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm
        interface EnvironmentDimensions {
            readonly clientHeight: string;
            readonly clientWidth: string;
            readonly height: string;
            readonly width: string;
            readonly maxHeight: string;
            readonly maxWidth: string;
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/version_object.htm
        interface EnvironmentVersion {
            readonly api: string;
            readonly season: string;
        }

        enum EnvironmentDisplayLocation {
            CHATTER = "Chatter",
            CHATTER_FEED = "ChatterFeed",
            MOBILE_NAV = "MobileNav",
            OPEN_CTI = "OpenCTI",
            PAGE_LAYOUT = "PageLayout",
            PUBLISHER = "Publisher",
            SERVICE_DESK = "ServiceDesk",
            VISUAL_FORCE = "Visualforce",
            NONE = "None",
        }

        enum EnvironmentDisplaySubLocation {
            MOBILE_CARD_FULLVIEW = "S1MobileCardFullview",
            MOBILE_CARD_PREVIEW = "S1MobileCardPreview",
            RECORD_HOME_PREVIEW = "S1RecordHomePreview",
            RECORD_HOME_FULLVIEW = "S1RecordHomeFullview",
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/attributes_object.htm
        interface EnvironmentRecordAttributes {
            readonly type: string;
            readonly url: string;
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/record_object.htm
        interface EnvironmentRecord {
            readonly attributes: EnvironmentRecordAttributes;
            readonly Id: string;
            [key: string]: unknown;
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/environment_object.htm
        interface Environment {
            readonly parameters: Record<string, unknown>;
            readonly dimensions: EnvironmentDimensions;
            readonly record?: EnvironmentRecord | undefined;
            readonly displayLocation: EnvironmentDisplayLocation;
            readonly locationUrl: string;
            readonly subLocation: EnvironmentDisplaySubLocation | null;
            readonly uiTheme: string;
            readonly version: EnvironmentVersion;
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/organization_object.htm
        interface Organization {
            readonly currencyIsoCode: string;
            readonly multicurrencyEnabled: boolean;
            readonly name: string;
            readonly namespacePrefix: string;
            readonly organizationId: string;
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/links_object.htm
        interface Links {
            readonly chatterFeedItemsUrl: string;
            readonly chatterFeedsUrl: string;
            readonly chatterGroupsUrl: string;
            readonly chatterUsersUrl: string;
            readonly enterpriseUrl: string;
            readonly loginUrl: string;
            readonly metadataUrl: string;
            readonly partnerUrl: string;
            readonly queryUrl: string;
            readonly restUrl: string;
            readonly recentItemsUrl: string;
            readonly searchUrl: string;
            readonly sobjectUrl: string;
            readonly userUrl: string;
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/context_object.htm
        interface Context {
            readonly application?: Application | undefined;
            readonly user?: User | undefined;
            readonly environment: Environment;
            readonly organization?: Organization | undefined;
            readonly links: Links;
        }

        // see https://developer.salesforce.com/docs/atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm
        interface SignedRequest {
            readonly context: Context;
            readonly client: Client;
            readonly algorithm: string;
            readonly userId: string;
            readonly issuedAt: string | null;
        }

        function hasOwn(obj: {}, prop: string): boolean;

        function isUndefined(value: unknown): value is undefined;

        function isNil(value: unknown): value is undefined | null | "";

        function isNumber(value: unknown): value is number;

        function isFunction(value: unknown): value is () => void;

        function isArray(value: unknown): value is ArrayLike<unknown>;

        function isArguments(value: unknown): boolean;

        function isObject(value: unknown): value is {};

        function isString(value: unknown): value is string;

        function appearsJson(value: string): boolean;

        function nop(): void;

        function invoker(fn: () => void): void;

        function identity<T>(obj: T): T;

        function each<T, S = T[]>(obj: T[], it: (this: S, item: T, index: number, obj: T[]) => void, ctx?: S): void;
        function each<T, S = T>(
            obj: Record<string, T>,
            it: (this: S, item: T, key: string, obj: Record<string, T>) => void,
            ctx?: S,
        ): void;

        function startsWithHttp(orig: string, newUrl: string): string;

        function map<T, R, S = T[]>(obj: T[], it: (this: S, item: T, index: number, obj: T[]) => R, ctx?: S): R[];
        function map<T, R, S = T>(
            obj: Record<string, T>,
            it: (this: S, item: T, key: string, obj: Record<string, T>) => R,
            ctx?: S,
        ): R[];

        function values<T>(obj: ArrayLike<T> | Record<string, T>): T[];

        function slice<T>(arr: T[], begin?: number, end?: number): T[];

        function toArray(iterable: null | undefined): [];
        function toArray<T>(iterable: ArrayLike<T> | Record<string, T>): T[];

        function size(obj: ArrayLike<unknown> | Record<string, unknown> | null | undefined): number;

        function indexOf<T>(arr: ArrayLike<T>, item: T): number;

        function isEmpty(obj: unknown): boolean;

        function remove<T>(arr: ArrayLike<T>, item: T): T[];

        function param(obj: ArrayLike<unknown> | Record<string, unknown>, encode?: boolean): string;

        function objectify(q: string): Record<string, string>;

        function stripUrl(url: string): string;

        function query(url: string, q: string): string;

        function extend<A extends Record<string, unknown>, B extends Record<string, unknown>>(a: A, b: B): A & B;
        function extend<
            A extends Record<string, unknown>,
            B extends Record<string, unknown>,
            C extends Record<string, unknown>,
        >(a: A, b: B, c: C): A & B & C;
        function extend<
            A extends Record<string, unknown>,
            B extends Record<string, unknown>,
            C extends Record<string, unknown>,
            D extends Record<string, unknown>,
        >(a: A, b: B, c: C, d: D): A & B & C & D;
        function extend<
            A extends Record<string, unknown>,
            B extends Record<string, unknown>,
            C extends Record<string, unknown>,
            D extends Record<string, unknown>,
            E extends Record<string, unknown>,
        >(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;

        function endsWith(str: string, suffix: string): boolean;

        function capitalize(str: string): string;

        function uncapitalize(str: string): string;

        function decode(str: string): string;

        function escapeToUTF8(str: string): string;

        function validEventName(name: string, res: string | string[]): number;

        function prototypeOf(obj: unknown): object | null;

        function module(ns: string, decl: Record<string, unknown>): typeof canvas;

        function document(): Document;

        function byId(id: string): HTMLElement;

        function byClass(clazz: string): HTMLElement;

        function attr(el: HTMLElement, name: string): string;

        function onReady(callback: () => void): void;

        namespace client {
            interface AjaxSettings {
                readonly client: Client;
                readonly success: (data: Response<unknown>) => void;
                readonly method?: string | undefined;
                readonly async?: boolean | undefined;
                readonly contentType?: string | undefined;
                readonly headers?: Record<string, string> | undefined;
                readonly data?: string | null | undefined;
            }

            interface Version {
                readonly clientVersion: string;
                readonly parentVersion: string;
            }

            interface SizeHeights {
                readonly contentHeight: number;
                readonly pageHeight: number;
                readonly scrollTop: number;
            }

            interface SizeWidths {
                readonly contentWidth: number;
                readonly pageWidth: number;
                readonly scrollLeft: number;
            }

            interface Size {
                readonly heights: SizeHeights;
                readonly widths: SizeWidths;
            }

            interface EventSubscriptionRef {
                readonly name: string;
            }

            interface EventSubscription extends EventSubscriptionRef {
                readonly onData: (event: unknown) => void;
            }

            interface StreamSubscriptionParams {
                readonly topic: string;
            }

            interface StreamSubscriptionRef {
                readonly name: "sfdc.streamingapi";
                readonly params: StreamSubscriptionParams;
            }

            interface StreamSubscription extends StreamSubscriptionRef {
                readonly onData: (event: unknown) => void;
                readonly onComplete: (event: unknown) => void;
            }

            type Subscription = EventSubscription | StreamSubscription;

            type SubscriptionRef = string | EventSubscriptionRef | StreamSubscriptionRef;

            interface Event {
                readonly name: string;
                readonly payload: unknown;
            }

            function ctx(callback: (msg: Response<Context | string>) => void, client: Client): void;

            function ajax(url: string, settings: AjaxSettings): void;

            function token(t?: string | null): string | null;

            function version(): Version;

            function resize(client: Client, size?: { height: string; width: string }): void;

            function size(): Size;

            function autogrow(client: Client, enabled?: boolean, interval?: number): void;

            function subscribe(client: Client, subscriptions: Subscription | Subscription[]): void;

            function unsubscribe(client: Client, subscriptions: SubscriptionRef | SubscriptionRef[]): void;

            function publish(client: Client, event: Event): void;

            function signedrequest(req?: SignedRequest): SignedRequest;

            function refreshSignedRequest(cb: (data: Response<{ response: string }>) => void): void;

            function repost(refresh?: boolean): void;
        }

        namespace console {
            function enable(): void;

            function disable(): void;

            function log(...args: unknown[]): void;

            function error(...args: unknown[]): void;
        }

        namespace cookies {
            function set(name: string, value: string, days?: number): void;

            function get(name: string): string;

            function remove(name: string): void;
        }

        namespace oauth {
            interface LoginParams {
                readonly response_type: string;
                readonly client_id: string;
                readonly redirect_uri: string;
                readonly state?: string | undefined;
                readonly display?: string | undefined;
                readonly scope?: string | undefined;
            }

            interface LoginContext {
                readonly uri: string;
                readonly params: LoginParams;
                readonly callback?: string | undefined;
            }

            function init(): void;

            function login(ctx: LoginContext): void;

            function logout(): void;

            function loggedin(): boolean;

            function loginUrl(): string;

            function token(t?: string | null): string | null;

            function instance(t?: string | null): string | null;

            function client(): Client;

            /** @deprecated */
            function checkChildWindowStatus(): void;

            function childWindowUnloadNotification(hash: string): void;
        }

        namespace xd {
            type Callback = (data: unknown) => void;

            type OriginCheckFn = (origin: string, data: string) => boolean;

            function post(message: string, targetUrl: string, target?: Window): void;

            function receive(callback: Callback, sourceOrigin?: string | OriginCheckFn): void;

            function remove(): void;
        }
    }
}
