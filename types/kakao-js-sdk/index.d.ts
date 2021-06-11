// Type definitions for non-npm package Kakao JavaScript SDK 1.39
// Project: https://developers.kakao.com/docs/latest/ko/sdk-download/js
// Definitions by: Lee Jaeuk <https://github.com/wooogi123>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

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
            };
            files?: FileList | File[] | Blob[];
            success?: RequestSuccessCallback;
            fail?: RequestFailCallback;
            always?: RequestAlwaysCallback;
        }): Promise<ApiResponse>;
    }

    namespace Auth {
        type AuthLanguage = 'kr' | 'en';
        type AuthButtonSize = 'small' | 'medium' | 'large';

        interface AuthStatusObject {
            status: 'connected' | 'not_connected';
            user?: {
                [key: string]: any;
            };
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
            redirectUri?: string;
            state?: string;
            scope?: string; // additional agreement key ex) account_email,gender
            throughTalk?: boolean; // default true,
            prompts?: string;
        }): void;

        function cleanup(): void;

        function createLoginButton(settings: {
            container: string | HTMLElement;
            lang?: AuthLanguage; // default 'kr'
            size?: AuthButtonSize; // default 'medium'
            success?: (authObj: AuthSuccessObject) => void;
            fail?: (errorObj: AuthError) => void;
            always?: (param: AuthSuccessObject | AuthError) => void;
            scope?: string; // additional agreement key ex) account_email,gender
            persistAccessToken?: boolean; // default true
            throughTalk?: boolean; // default true
        }): void;

        function getAccessToken(): string;
        function getAppKey(): string;

        /**
         * @deprecated
         */
        function getRefreshToken(): void;

        function getStatusInfo(callback: (object: AuthStatusObject) => void): void;

        function login(settings: {
            success?: (authObj: AuthSuccessObject) => void;
            fail?: (errorObj: AuthError) => void;
            always?: (param: AuthSuccessObject | AuthError) => void;
            scope?: string; // additional agreement key ex) account_email,gender
            persistAccessToken?: boolean; // default true
            throughTalk?: boolean; // default true
        }): void;

        function loginForm(settings: {
            success?: (authObj: AuthSuccessObject) => void;
            fail?: (errorObj: AuthError) => void;
            always?: (param: AuthSuccessObject | AuthError) => void;
            scope?: string; // additional agreement key ex) account_email,gender
            persistAccessToken?: boolean; // default true
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
        type ButtonSize = 'small' | 'large';
        type TitleText = 'consult' | 'question';
        type Color = 'yellow' | 'black';
        type Shape = 'pc' | 'mobile';

        function addChannel(settings: { channelPublicId: string }): void;

        function chat(settings: { channelPublicId: string }): void;

        function cleanup(): void;

        function createAddChannelButton(settings: {
            container: string | HTMLElement;
            channelPublicId: string;
            size?: ButtonSize; // default 'small'
            supportMultipleDensities?: boolean; // default false
        }): void;

        function createChatButton(settings: {
            container: string | HTMLElement;
            channelPublicId: string;
            title?: string; // default 'consult'
            size?: ButtonSize; // default 'small'
            color?: Color; // default 'yellow'
            shape?: Shape; // default 'pc'
            supportMultipleDensities?: boolean; // default false
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
            productName?: string;
            discountPrice?: number;
            discountRate?: number;
            fixedDiscountPrice?: number;
        }

        interface ContentObject {
            title: string;
            imageUrl: string;
            link: LinkObject;
            imageWidth?: number;
            imageHeight?: number;
            description?: string;
        }

        interface BaseObject<ObjectType extends string> {
            objectType: ObjectType;
            buttonTitle?: string;
            buttons?: ButtonObject[];
            installTalk?: boolean; // default false
            callback?: LinkCallback;
            serverCallbackArgs?:
                | {
                      [key: string]: any;
                  }
                | string; // reference https://developers.kakao.com/docs/latest/ko/message/js#set-kakaolink-callback
        }

        interface DefaultCommerceSettings extends BaseObject<'commerce'> {
            content: ContentObject;
            commerce: CommerceObject;
        }

        interface DefaultFeedSettings extends BaseObject<'feed'> {
            content: ContentObject;
            social?: SocialObject;
        }

        interface DefaultListSettings extends BaseObject<'list'> {
            headerTitle: string;
            headerLink: LinkObject;
            contents: ContentObject[];
        }

        interface DefaultLocationSettings extends BaseObject<'location'> {
            content: ContentObject;
            address: string;
            addressTitle?: string;
            social?: SocialObject;
        }

        interface DefaultTextSettings extends BaseObject<'text'> {
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
            webUrl?: string;
            mobileWebUrl?: string;
            androidExecParams?: string;
            iosExecParams?: string;
        }

        interface SocialObject {
            likeCount?: number;
            commentCount?: number;
            sharedCount?: number;
            viewCount?: number;
            subscriberCount?: number;
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
            };
            installTalk?: boolean; // default false
            callback?: LinkCallback;
            serverCallbackArgs?:
                | {
                      [key: string]: any;
                  }
                | string; // reference https://developers.kakao.com/docs/latest/ko/message/js#set-kakaolink-callback
        }): void;

        function createDefaultButton(
            settings: {
                container: string | HTMLElement;
            } & DefaultSettings,
        ): void;

        function createScrapButton(settings: {
            container: string | HTMLElement;
            requestUrl: string;
            templateId?: number;
            templateArgs?: {
                [key: string]: any;
            };
            installTalk?: boolean; // default false
            callback?: LinkCallback;
            serverCallbackArgs?:
                | {
                      [key: string]: any;
                  }
                | string;
        }): void;

        function deleteImage(settings: { imageUrl: string }): Promise<unknown>;

        function scrapImage(settings: { imageUrl: string }): Promise<ImageInfos>;

        function sendCustom(settings: {
            templateId: number;
            templateArgs: {
                [key: string]: any;
            };
            installTalk?: boolean; // default false
            callback?: LinkCallback;
            serverCallbackArgs?:
                | {
                      [key: string]: any;
                  }
                | string;
        }): void;

        function sendDefault(settings: DefaultSettings): void;

        function sendScrap(settings: {
            requestUrl: string;
            templateId?: number;
            templateArgs?: {
                [key: string]: any;
            };
            installTalk?: boolean; // default false
            callback?: LinkCallback;
            serverCallbackArgs?:
                | {
                      [key: string]: any;
                  }
                | string;
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
            coordType?: string; // default 'katec', union type 'wgs84' | 'katec'
        }): void;

        // Reference: https://developers.kakao.com/sdk/reference/js/release/Kakao.Navi.html#.start
        function start(settings: {
            name: string;
            x: number;
            y: number;
            coordType?: string; // default 'katec', union type 'wgs84' | 'katec';
            vehicleType?: number; // default 1,
            rpOptio?: number; // default 100
            routeInfo?: boolean; // default false
            sX?: number;
            sY?: number;
            sAngle?: number;
            returnUri?: string;
            viaPoints?: ViaPoint[];
        }): void;
    }

    namespace Story {
        function cleanup(): void;

        function createFollowButton(settings: {
            container: string | HTMLElement;
            id: string;
            showFollowerCount?: boolean; // default true;
            type?: string; // default 'horizontal'
        }): void;

        function createShareButton(settings: {
            container: string | HTMLElement;
            url?: string;
            text?: string; // default ''
        }): void;

        function open(settings: {
            install?: boolean;
            url?: string;
            text?: string;
            urlInfo?: {
                title: string;
                desc?: string;
                name?: string;
                images?: string[];
            };
        }): void;

        function share(settings: {
            url?: string;
            text?: string; // default ''
        }): void;
    }
}
