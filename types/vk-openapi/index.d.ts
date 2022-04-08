// Type definitions for non-npm package VK Open API 1.6
// Project: https://vk.com/dev/openapi
// Definitions by: hikiko4ern <https://github.com/hikiko4ern>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

declare var VK: vk.OpenAPI.API;

declare namespace vk {
    namespace OpenAPI {
        type Nullable<T> = T | null | undefined;
        type NumericBoolean = 0 | 1;

        interface API {
            init(params: InitParams): void;
            Auth: Auth.API;
            Api: Api.API;
            Widgets: Widgets.API;
            Observer: Observer.API;
            Retargeting: Retargeting.API;
            Goal: Goal.API;
        }

        interface InitParams {
            apiId: number;
            status?: boolean;
            onlyWidgets?: boolean;
        }

        namespace Auth {
            interface API {
                login(cb: (status: LoginStatus) => void, settings: number): void;
                logout(cb: (status: EmptyLoginStatus) => void): void;
                revokeGrants(cb: (status: EmptyLoginStatus) => void): void;
                getLoginStatus(cb: (status: LoginStatus) => void): void;
                getSession(cb: (session: Session) => void): void;
            }

            interface Session {
                expire: number;
                mid: number;
                secret: string;
                sid: string;
                sig: string;
                user: {
                    id: string;
                    href: string;
                    domain: string;
                    first_name: string;
                    last_name: string;
                    nickname: string;
                };
            }

            interface LoginStatus {
                session: Session;
                status: 'connected' | 'not_authorized' | 'unknown';
            }

            interface EmptyLoginStatus {
                session: null;
                status: 'unknown';
                settings: undefined;
            }
        }

        namespace Api {
            interface API {
                call(method: string, params: ApiParams, cb: (response: any) => void): void;
            }

            interface ApiParams {
                v: string;
                [key: string]: any;
            }
        }

        namespace Widgets {
            interface API {
                ContactUs(elementId: string, options: Nullable<ContactUsOptions>, ownerId: number): number;
                Comments(elementId: string, options?: CommentsOptions, pageId?: string): number;
                Post(elementId: string, ownerId: number, postId: number, hash: string, options?: PostOptions): number;
                Group(elementId: string, options: Nullable<GroupOptions>, groupId: number): number;
                Like(elementId: string, options?: LikeOptions, pageId?: string): number;
                Recommended(
                    elementId: string,
                    options?: RecommendedOptions,
                    verb?: NumericBoolean,
                    sort?: RecommendedSort,
                    target?: RecommendedTarget,
                ): number;
                Poll(elementId: string, options: Nullable<PollOptions>, pollId: string): number;
                Auth(elementId: string, options?: AuthOptions): number;
                Subscribe(elementId: string, options: Nullable<SubscribeOptions>, ownerId: number): number;
                CommunityMessages(
                    elementId: string,
                    groupId: number,
                    options?: CommunityMessagesOptions,
                ): CommunityMessages;
                Playlist(
                    elementId: string,
                    ownerId: number,
                    playlistId: number,
                    hash: string,
                    options?: PlaylistOptions,
                ): number;
                AllowMessagesFromCommunity(
                    elementId: string,
                    options: Nullable<AllowMessagesFromCommunityOptions>,
                    groupId: number,
                ): number;
                App(elementId: string, appId: number, options?: AppOptions): number;
                Article(elementId: string, articleId: string): number;
                Bookmarks(elementId: string, options?: BookmarksOptions): number;
                Podcast(elementId: string, episodeId: string, hash: string): number;
            }

            interface ContactUsOptions {
                text?: string;
                height?: 18 | 20 | 22 | 24 | 30;
            }

            interface CommentsOptions {
                width?: number;
                height?: number;
                limit?: number;
                attach?: string;
                autoPublish?: NumericBoolean;
                norealtime?: NumericBoolean;
                pageUrl?: string;
            }

            interface PostOptions {
                width?: number;
            }

            interface GroupOptions {
                width?: number | 'auto';
                height?: number;
                mode?: 1 | 3 | 4;
                no_cover?: NumericBoolean;
                wide?: NumericBoolean;
                color1?: string;
                color2?: string;
                color3?: string;
            }

            interface LikeOptions {
                width?: number;
                height?: 18 | 20 | 22 | 24 | 30;
                type?: 'button' | 'mini' | 'vertical' | 'full';
                verb?: NumericBoolean;
                pageTitle?: string;
                pageUrl?: string;
                pageImage?: string;
            }

            interface RecommendedOptions {
                limit?: number;
                max?: number;
                period?: 'day' | 'week' | 'month';
            }

            type RecommendedSort = 'friend_likes' | 'likes';

            type RecommendedTarget = 'blank' | 'top' | 'parent';

            interface PollOptions {
                width?: number;
                pageUrl?: string;
            }

            interface AuthOptions {
                width?: number;
                onAuth?(user: AuthUserData): void;
                authUrl?: string;
            }

            interface AuthUserData {
                uid: number;
                first_name: string;
                last_name: string;
                photo: string;
                photo_rec: string;
                hash: string;
            }

            interface SubscribeOptions {
                mode?: NumericBoolean;
                soft?: NumericBoolean;
            }

            interface CommunityMessagesOptions {
                onCanNotWrite?(reason: OnCanNotWriteReason): void;
                welcomeScreen?: NumericBoolean;
                expandTimeout?: number;
                expanded?: 1;
                widgetPosition?: string;
                buttonType?: string;
                disableButtonTooltip?: 1;
                tooltipButtonText?: string;
                disableNewMessagesSound?: 1;
                disableExpandChatSound?: 1;
                disableTitleChange?: 1;
            }

            type OnCanNotWriteReason = 'offline' | 'no_access' | 'disabled_messages' | 'cant_write';

            interface CommunityMessages {
                stopTitleAnimation(): void;
                minimize(): void;
                expand(welcomeScreen?: 1): void;
                destroy(elementId: string): void;
            }

            interface PlaylistOptions {
                width?: number;
            }

            interface AllowMessagesFromCommunityOptions {
                height?: 22 | 24 | 30;
            }

            interface AppOptions {
                mode?: 1 | 2 | 3;
                height?: number;
            }

            interface BookmarksOptions {
                url?: string;
                height?: 18 | 20 | 22 | 24 | 30;
            }
        }

        namespace Observer {
            interface API {
                subscribe<E extends ObserverEvent>(event: E, handler: ObserverEventHandler<E>): void;
                unsubscribe<E extends ObserverEvent>(event: E, handler?: ObserverEventHandler<E>): void;
            }

            type ObserverEvent =
                | 'auth.login'
                | 'auth.logout'
                | 'auth.statusChange'
                | 'auth.sessionChange'
                | 'widgets.comments.new_comment'
                | 'widgets.comments.delete_comment'
                | 'widgets.groups.joined'
                | 'widgets.groups.leaved'
                | 'widgets.like.liked'
                | 'widgets.like.unliked'
                | 'widgets.like.shared'
                | 'widgets.like.unshared'
                | 'widgets.subscribed'
                | 'widgets.unsubscribed'
                | 'widgets.allowMessagesFromCommunity.allowed'
                | 'widgets.allowMessagesFromCommunity.denied';

            type ObserverEventHandler<E extends ObserverEvent> = E extends
                | 'widgets.comments.new_comment'
                | 'widgets.comments.delete_comment'
                ? (num: number, lastComment: string, date: string, sign: string) => void
                : E extends 'widgets.like.liked' | 'widgets.like.unliked'
                ? (likes: number) => void
                : E extends 'widgets.like.shared' | 'widgets.like.unshared'
                ? (shares: number) => void
                : E extends 'widgets.allowMessagesFromCommunity.allowed' | 'widgets.allowMessagesFromCommunity.denied'
                ? (uid: number) => void
                : () => void;
        }

        namespace Retargeting {
            interface API {
                Init(code: string): void;
                Hit(): void;
                Event(eventName: string): void;
                Add(audienceId: number): void;
                ProductEvent(priceListId: number, eventName: ProductEvent, eventParams?: ProductEventParams): void;
            }

            type ProductEvent =
                | 'view_home'
                | 'view_category'
                | 'view_product'
                | 'view_search'
                | 'view_other'
                | 'add_to_wishlist'
                | 'add_to_cart'
                | 'remove_from_wishlist'
                | 'remove_from_cart'
                | 'init_checkout'
                | 'add_payment_info'
                | 'purchase';

            interface ProductEventParams {
                products?: Product[];
                products_recommended_ids?: string;
                category_ids?: string;
                business_value?: number;
                currency_code?: string;
                total_price?: number;
                search_string?: string;
            }

            interface Product {
                id: string;
                group_id?: string;
                recommended_ids?: string;
                price?: number;
                price_old?: number;
                price_from?: NumericBoolean;
            }
        }

        namespace Goal {
            interface API {
                (goalEvent: GoalEvent, goalParams?: GoalParams): void;
            }

            type GoalEvent =
                | 'add_to_cart'
                | 'add_to_wishlist'
                | 'customize_product'
                | 'initiate_checkout'
                | 'add_payment_info'
                | 'purchase'
                | 'contact'
                | 'lead'
                | 'schedule'
                | 'complete_registration'
                | 'submit_application'
                | 'start_trial'
                | 'subscribe'
                | 'page_view'
                | 'view_content'
                | 'search'
                | 'find_location'
                | 'donate'
                | 'conversion';

            interface GoalParams {
                value?: number;
            }
        }
    }
}
