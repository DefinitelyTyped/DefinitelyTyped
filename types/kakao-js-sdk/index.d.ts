/**
 * Kakao JavaScript SDK common namespace
 *
 * Reference: https://developers.kakao.com/sdk/reference/js/release/Kakao.html
 * Document: https://developers.kakao.com/docs/latest/ko/getting-started/app
 */
declare namespace Kakao {
    const VERSION: string;

    function cleanup(): void;
    function init(appKey: string): void;
    function isInitialized(): boolean;

    namespace API {
        interface ApiError {
            code: number;
            msg: string;
        }

        interface ApiResponse {
            [key: string]: any;
        } // api responses

        function cleanup(): void;

        type RequestSuccessCallback = (response: ApiResponse) => void;
        type RequestFailCallback = (error: ApiError) => void;
        type RequestAlwaysCallback = (param: ApiResponse | ApiError) => void;

        /**
         * request Kakao API
         * API Referehce: https://developers.kakao.com/docs/latest/ko/reference/rest-api-reference
         */
        function request(settings: {
            url: string; // Kakao REST API urls
            data?: {
                [key: string]: any;
            } | undefined;
            files?: FileList | File[] | Blob[] | undefined;
            success?: RequestSuccessCallback | undefined;
            fail?: RequestFailCallback | undefined;
            always?: RequestAlwaysCallback | undefined;
        }): Promise<ApiResponse>;
    }

    namespace Auth {
        type AuthLanguage = "kr" | "en";
        type AuthButtonSize = "small" | "medium" | "large";

        interface AuthStatusObject {
            status: "connected" | "not_connected";
            user?: {
                [key: string]: any;
            } | undefined;
        }

        interface AuthSuccessObject {
            access_token: string;
            refresh_token: string;
            token_type: string; // fixed 'bearer'
            expires_in: number;
            scope: string;
        }

        interface AuthError {
            error: string;
            error_description: string;
        }

        /**
         * version 1.39.16,
         * if autoLogin is true and user agent has not string 'KAKAOTALK', return false
         * but authorize function has not other return, so return type set void
         */
        function authorize(settings: {
            redirectUri?: string | undefined;
            state?: string | undefined;
            scope?: string | undefined; // additional agreement key ex) account_email,gender
            throughTalk?: boolean | undefined; // default true,
            prompts?: string | undefined;
        }): void;

        function cleanup(): void;

        function createLoginButton(settings: {
            container: string | HTMLElement;
            lang?: AuthLanguage | undefined; // default 'kr'
            size?: AuthButtonSize | undefined; // default 'medium'
            success?: ((authObj: AuthSuccessObject) => void) | undefined;
            fail?: ((errorObj: AuthError) => void) | undefined;
            always?: ((param: AuthSuccessObject | AuthError) => void) | undefined;
            scope?: string | undefined; // additional agreement key ex) account_email,gender
            persistAccessToken?: boolean | undefined; // default true
            throughTalk?: boolean | undefined; // default true
        }): void;

        function getAccessToken(): string;
        function getAppKey(): string;

        /**
         * @deprecated
         */
        function getRefreshToken(): void;

        function getStatusInfo(callback: (object: AuthStatusObject) => void): void;

        function login(settings: {
            success?: ((authObj: AuthSuccessObject) => void) | undefined;
            fail?: ((errorObj: AuthError) => void) | undefined;
            always?: ((param: AuthSuccessObject | AuthError) => void) | undefined;
            scope?: string | undefined; // additional agreement key ex) account_email,gender
            persistAccessToken?: boolean | undefined; // default true
            throughTalk?: boolean | undefined; // default true
        }): void;

        function loginForm(settings: {
            success?: ((authObj: AuthSuccessObject) => void) | undefined;
            fail?: ((errorObj: AuthError) => void) | undefined;
            always?: ((param: AuthSuccessObject | AuthError) => void) | undefined;
            scope?: string | undefined; // additional agreement key ex) account_email,gender
            persistAccessToken?: boolean | undefined; // default true
        }): void;

        /**
         * logout function callback param is always true
         * but reference writen just function
         * so callback typing void function: () => void
         */
        function logout(callback: () => void): void;

        function setAccessToken(token: string | null, persist?: boolean): void; // persist default true

        /**
         * @deprecated
         */
        function setRefreshToken(): void;
    }

    namespace Channel {
        type ButtonSize = "small" | "large";
        type TitleText = "consult" | "question";
        type Color = "yellow" | "black";
        type Shape = "pc" | "mobile";

        function addChannel(settings: { channelPublicId: string }): void;

        function chat(settings: { channelPublicId: string }): void;

        function cleanup(): void;

        function createAddChannelButton(settings: {
            container: string | HTMLElement;
            channelPublicId: string;
            size?: ButtonSize | undefined; // default 'small'
            supportMultipleDensities?: boolean | undefined; // default false
        }): void;

        function createChatButton(settings: {
            container: string | HTMLElement;
            channelPublicId: string;
            title?: string | undefined; // default 'consult'
            size?: ButtonSize | undefined; // default 'small'
            color?: Color | undefined; // default 'yellow'
            shape?: Shape | undefined; // default 'pc'
            supportMultipleDensities?: boolean | undefined; // default false
        }): void;
    }

    namespace Link {
        type LinkCallback = (...args: any[]) => any;

        interface ButtonObject {
            title: string;
            link: LinkObject;
        }

        interface CommerceObject {
            regularPrice: number;
            productName?: string | undefined;
            discountPrice?: number | undefined;
            discountRate?: number | undefined;
            fixedDiscountPrice?: number | undefined;
        }

        interface ContentObject {
            title: string;
            imageUrl: string;
            link: LinkObject;
            imageWidth?: number | undefined;
            imageHeight?: number | undefined;
            description?: string | undefined;
        }

        interface BaseObject<ObjectType extends string> {
            objectType: ObjectType;
            buttonTitle?: string | undefined;
            buttons?: ButtonObject[] | undefined;
            installTalk?: boolean | undefined; // default false
            callback?: LinkCallback | undefined;
            serverCallbackArgs?:
                | {
                    [key: string]: any;
                }
                | string
                | undefined; // reference https://developers.kakao.com/docs/latest/ko/message/js#set-kakaolink-callback
        }

        interface DefaultCommerceSettings extends BaseObject<"commerce"> {
            content: ContentObject;
            commerce: CommerceObject;
        }

        interface DefaultFeedSettings extends BaseObject<"feed"> {
            content: ContentObject;
            social?: SocialObject | undefined;
        }

        interface DefaultListSettings extends BaseObject<"list"> {
            headerTitle: string;
            headerLink: LinkObject;
            contents: ContentObject[];
        }

        interface DefaultLocationSettings extends BaseObject<"location"> {
            content: ContentObject;
            address: string;
            addressTitle?: string | undefined;
            social?: SocialObject | undefined;
        }

        interface DefaultTextSettings extends BaseObject<"text"> {
            text: string;
            link: LinkObject;
        }

        interface ImageInfos {
            original: {
                url: string;
                length: number;
                content_type: string;
                width: number;
                height: number;
            };
        }

        interface LinkObject {
            webUrl?: string | undefined;
            mobileWebUrl?: string | undefined;
            androidExecParams?: string | undefined;
            iosExecParams?: string | undefined;
        }

        interface SocialObject {
            likeCount?: number | undefined;
            commentCount?: number | undefined;
            sharedCount?: number | undefined;
            viewCount?: number | undefined;
            subscriberCount?: number | undefined;
        }

        type DefaultSettings =
            | DefaultFeedSettings
            | DefaultListSettings
            | DefaultLocationSettings
            | DefaultCommerceSettings
            | DefaultTextSettings;

        function cleanup(): void;

        function createCustomButton(settings: {
            container: string | HTMLElement;
            templateId: number;
            templateArgs?: {
                [key: string]: any;
            } | undefined;
            installTalk?: boolean | undefined; // default false
            callback?: LinkCallback | undefined;
            serverCallbackArgs?:
                | {
                    [key: string]: any;
                }
                | string
                | undefined; // reference https://developers.kakao.com/docs/latest/ko/message/js#set-kakaolink-callback
        }): void;

        function createDefaultButton(
            settings: {
                container: string | HTMLElement;
            } & DefaultSettings,
        ): void;

        function createScrapButton(settings: {
            container: string | HTMLElement;
            requestUrl: string;
            templateId?: number | undefined;
            templateArgs?: {
                [key: string]: any;
            } | undefined;
            installTalk?: boolean | undefined; // default false
            callback?: LinkCallback | undefined;
            serverCallbackArgs?:
                | {
                    [key: string]: any;
                }
                | string
                | undefined;
        }): void;

        function deleteImage(settings: { imageUrl: string }): Promise<unknown>;

        function scrapImage(settings: { imageUrl: string }): Promise<ImageInfos>;

        function sendCustom(settings: {
            templateId: number;
            templateArgs: {
                [key: string]: any;
            };
            installTalk?: boolean | undefined; // default false
            callback?: LinkCallback | undefined;
            serverCallbackArgs?:
                | {
                    [key: string]: any;
                }
                | string
                | undefined;
        }): void;

        function sendDefault(settings: DefaultSettings): void;

        function sendScrap(settings: {
            requestUrl: string;
            templateId?: number | undefined;
            templateArgs?: {
                [key: string]: any;
            } | undefined;
            installTalk?: boolean | undefined; // default false
            callback?: LinkCallback | undefined;
            serverCallbackArgs?:
                | {
                    [key: string]: any;
                }
                | string
                | undefined;
        }): void;

        function uploadImage(settings: { file: FileList }): Promise<ImageInfos>;
    }

    namespace Navi {
        interface ViaPoint {
            name: string;
            x: number;
            y: number;
        }

        function share(settings: {
            name: string;
            x: number;
            y: number;
            coordType?: string | undefined; // default 'katec', union type 'wgs84' | 'katec'
        }): void;

        // Reference: https://developers.kakao.com/sdk/reference/js/release/Kakao.Navi.html#.start
        function start(settings: {
            name: string;
            x: number;
            y: number;
            coordType?: string | undefined; // default 'katec', union type 'wgs84' | 'katec';
            vehicleType?: number | undefined; // default 1,
            rpOptio?: number | undefined; // default 100
            routeInfo?: boolean | undefined; // default false
            sX?: number | undefined;
            sY?: number | undefined;
            sAngle?: number | undefined;
            returnUri?: string | undefined;
            viaPoints?: ViaPoint[] | undefined;
        }): void;
    }

    namespace Story {
        function cleanup(): void;

        function createFollowButton(settings: {
            container: string | HTMLElement;
            id: string;
            showFollowerCount?: boolean | undefined; // default true;
            type?: string | undefined; // default 'horizontal'
        }): void;

        function createShareButton(settings: {
            container: string | HTMLElement;
            url?: string | undefined;
            text?: string | undefined; // default ''
        }): void;

        function open(settings: {
            install?: boolean | undefined;
            url?: string | undefined;
            text?: string | undefined;
            urlInfo?: {
                title: string;
                desc?: string | undefined;
                name?: string | undefined;
                images?: string[] | undefined;
            } | undefined;
        }): void;

        function share(settings: {
            url?: string | undefined;
            text?: string | undefined; // default ''
        }): void;
    }
}
