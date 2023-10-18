/// <reference types="node" />
/// <reference types="geojson" />

declare module "twit" {
    import { IncomingMessage } from "http";
    import { EventEmitter } from "events";

    namespace Twit {
        export type StreamEndpoint = "statuses/filter" | "statuses/sample" | "statuses/firehose" | "user" | "site";

        export namespace Twitter {
            export type ResultType = "mixed" | "popular" | "recent";

            /**
             * @see https://dev.twitter.com/overview/api/tweets#obj-contributors
             */
            export interface Contributors {
                id: number;
                id_str: string;
                screen_name: string;
            }

            /**
             * @see https://developer.twitter.com/en/docs/tweets/enrichments/overview/matching-rules
             */
            export interface MatchingRules {
                tag: null;
                id: number;
                id_str: string;
            }

            /**
             * @see https://dev.twitter.com/overview/api/entities
             */
            export interface HashtagEntity {
                indices: [number, number];
                text: string;
            }
            export interface Size {
                h: number;
                w: number;
                resize: "crop" | "fit";
            }
            export interface Sizes {
                thumb: Size;
                large: Size;
                medium: Size;
                small: Size;
            }
            export interface MediaEntity {
                id: number;
                id_str: string;
                indices: [number, number];
                url: string;
                display_url: string;
                expanded_url: string;
                media_url: string;
                media_url_https: string;
                sizes: Sizes;
                source_status_id: number;
                source_status_id_str: string;
                type: string;
            }
            export interface UrlEntity {
                url: string;
                display_url: string;
                expanded_url: string;
                indices: [number, number];
            }
            export interface UserMentionEntity {
                id: number;
                id_str: string;
                indices: [number, number];
                name: string;
                screen_name: string;
            }
            export interface SymbolEntity {
                indices: [number, number];
                text: string;
            }
            export interface PollOptions {
                position: number;
                text: string;
            }
            export interface PollEntity {
                options: PollOptions[];
                end_datetime: string;
                duration_minutes: string;
            }
            export interface Entities {
                hashtags: HashtagEntity[];
                media: MediaEntity[];
                urls: UrlEntity[];
                user_mentions: UserMentionEntity[];
                symbols: SymbolEntity[];
                polls: PollEntity[];
            }

            /**
             * @see https://dev.twitter.com/overview/api/users
             */
            export interface User {
                contributors_enabled: boolean;
                created_at: string;
                default_profile: string;
                default_profile_image: string;
                description: string;
                entities: Entities;
                favourites_count: number;
                follow_request_sent?: boolean | undefined;
                following?: boolean | undefined;
                followers_count: number;
                friends_count: number;
                geo_enabled?: boolean | undefined;
                id: number;
                id_str: string;
                is_translator?: boolean | undefined;
                lang: string;
                listed_count: number;
                location: string;
                name: string;
                notifications?: boolean | undefined;
                profile_background_color: string;
                profile_background_image_url: string;
                profile_background_image_url_https: string;
                profile_background_tile: boolean;
                profile_banner_url: string;
                profile_image_url: string;
                profile_image_url_https: string;
                profile_link_color: string;
                profile_sidebar_border_color: string;
                profile_sidebar_fill_color: string;
                profile_text_color: string;
                profile_use_background_image: boolean;
                protected: boolean;
                screen_name: string;
                show_all_inline_media: boolean;
                status?: Status | undefined;
                statuses_count: number;
                time_zone?: string | undefined;
                url: string;
                utc_offset?: number | undefined;
                verified: boolean;
                withheld_in_countries: string;
                withheld_scope: string;
            }

            /**
             * @see https://dev.twitter.com/overview/api/places
             */
            export interface PlaceAttribute {
                street_address: string;
                locality: string;
                region: string;
                iso3: string;
                postal_code: string;
                phone: string;
                twitter: string;
                url: string;
                "app:id": string;
            }
            export interface Place {
                geometry: GeoJSON.Point;
                attributes: PlaceAttribute;
                bounding_box: GeoJSON.Polygon;
                contained_within: Place[];
                country: string;
                country_code: string;
                full_name: string;
                id: string;
                name: string;
                place_type: string;
                url: string;
            }

            /**
             * @see https://dev.twitter.com/overview/api/tweets
             */
            export interface Status {
                id: number;
                id_str: string;
                annotations?: Object | undefined;
                contributors?: Contributors[] | undefined;
                coordinates?: GeoJSON.Point | undefined;
                created_at: string;
                current_user_retweet?: {
                    id: number;
                    id_str: string;
                } | undefined;
                display_text_range?: [number, number] | undefined;
                entities: Entities;
                extended_entities?: {
                    media: MediaEntity[];
                } | undefined;
                favorite_count?: number | undefined;
                favorited?: boolean | undefined;
                filter_level: "none" | "low" | "medium";
                full_text?: string | undefined;
                in_reply_to_screen_name?: string | undefined;
                in_reply_to_status_id?: number | undefined;
                in_reply_to_status_id_str?: string | undefined;
                in_reply_to_user_id?: number | undefined;
                in_reply_to_user_id_str?: string | undefined;
                is_quote_status: string;
                lang?: string | undefined;
                matching_rules?: MatchingRules[] | undefined;
                place?: Place | undefined;
                possibly_sensitive?: boolean | undefined;
                quoted_status_id?: number | undefined;
                quoted_status_id_str?: string | undefined;
                quoted_status?: Status | undefined;
                retweet_count: number;
                retweeted: boolean;
                retweeted_status?: Status | undefined;
                scopes?: Object | undefined;
                source?: string | undefined;
                text?: string | undefined;
                truncated: boolean;
                user: User;
                withheld_copyright?: boolean | undefined;
                withheld_in_countries?: string[] | undefined;
                withheld_scope?: string | undefined;
            }
            export interface Metadata {
                max_id?: number | undefined;
                since_id?: number | undefined;
                refresh_url?: string | undefined;
                next_results?: string | undefined;
                count?: number | undefined;
                completed_in?: number | undefined;
                since_id_str?: string | undefined;
                query?: string | undefined;
                max_id_str?: string | undefined;
            }

            export interface Errors {
                errors: {
                    code: number;
                    message: string;
                }[];
            }

            export interface SearchResults {
                statuses: Twitter.Status[];
                search_metadata: Twitter.Metadata;
            }
        }

        export type Response = object;

        interface MediaParam {
            file_path: string;
        }

        interface QuickReplyOption {
            label: string;
            description?: string;
            metadata?: string;
        }

        interface QuickReply {
            type: "options";
            options: QuickReplyOption[];
        }

        interface Attachement {
            type: "location" | "media";
            location?: {
                type: "shared_coordinate";
                shared_coordinate: {
                    coordinates: {
                        type: "Point";
                        coordinates: number[];
                    };
                };
            };
            media?: {
                id: string;
            };
        }

        interface MessageCreateEvent {
            type: "message_create";
            message_create: {
                target: {
                    recipient_id: string;
                };
                message_data: {
                    text: string;
                    quick_reply?: QuickReply;
                    attachment?: Attachement;
                };
            };
        }

        interface Params {
            // search/tweets
            q?: string | undefined;
            geocode?: string | undefined;
            lang?: string | undefined;
            locale?: string | undefined;
            result_type?: Twitter.ResultType | undefined;
            count?: number | undefined;
            results_per_page?: number | undefined;
            until?: string | undefined;
            since_id?: string | undefined;
            max_id?: string | undefined;
            include_entities?: boolean | undefined;

            source_id?: number | undefined;
            source_screen_name?: string | undefined;
            target_id?: number | undefined;
            target_screen_name?: string | undefined;

            // Other params from various endpoints
            track?: string | string[] | undefined;
            media_id?: string | undefined;
            media_ids?: string[] | undefined;
            alt_text?: {
                text?: string | undefined;
            } | undefined;
            media_data?: Buffer | string | undefined;
            screen_name?: string | undefined;
            id?: string | undefined;
            slug?: string | undefined;
            owner_screen_name?: string | undefined;
            status?: string | undefined;
            user_id?: number | string | undefined;
            lat?: number | undefined;
            long?: number | undefined;
            follow?: boolean | string | string[] | undefined;
            include_email?: boolean | undefined;
            cursor?: number | string | undefined;
            tweet_mode?: string | undefined;
            trim_user?: boolean | undefined;
            exclude_replies?: boolean | undefined;
            include_rts?: boolean | undefined;
            skip_status?: boolean | undefined;
            url?: string | undefined;
            include_user_entities?: boolean | undefined;
            stringify_ids?: boolean | undefined;
            in_reply_to_status_id?: number | string | undefined;
            page?: number | undefined;
            auto_populate_reply_metadata?: boolean | undefined;
            list_id?: number | string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            mode?: "public" | "private" | undefined;
            exclude_reply_user_ids?: string | string[] | undefined;
            attachment_url?: string | undefined;
            place_id?: string | undefined;
            display_coordinates?: boolean | undefined;
            enable_dmcommands?: boolean | undefined;
            fail_dmcommands?: boolean | undefined;
            card_uri?: string | undefined;
            event?: MessageCreateEvent;
        }
        export interface PromiseResponse {
            data: Response;
            resp: IncomingMessage;
        }
        export interface Callback {
            (err: Error, result: Response, response: IncomingMessage): void;
        }
        export interface ConfigKeys {
            consumer_key: string;
            consumer_secret: string;
            access_token?: string | undefined;
            access_token_secret?: string | undefined;
        }
        export interface Options extends ConfigKeys {
            app_only_auth?: boolean | undefined;
            timeout_ms?: number | undefined;
            trusted_cert_fingerprints?: string[] | undefined;
            strictSSL?: boolean | undefined;
        }
        export interface Stream extends EventEmitter {
            start(): void;
            stop(): void;
        }
    }

    class Twit {
        /**
         * @see https://github.com/ttezel/twit#var-t--new-twitconfig
         */
        constructor(config: Twit.Options);

        /**
         * @see https://github.com/ttezel/twit#tgetpath-params-callback
         */
        get(path: string, callback: Twit.Callback): void;
        get(path: string, params: Twit.Params, callback: Twit.Callback): void;
        get(path: string, params?: Twit.Params): Promise<Twit.PromiseResponse>;

        /**
         * @see https://github.com/ttezel/twit#tpostpath-params-callback
         */
        post(path: string, callback: Twit.Callback): void;
        post(path: string, params: Twit.Params, callback: Twit.Callback): void;
        post(path: string, params?: Twit.Params): Promise<Twit.PromiseResponse>;

        /**
         * @see https://github.com/ttezel/twit#tpostmediachunkedparams-callback
         */
        postMediaChunked(media: Twit.MediaParam, callback: Twit.Callback): void;

        /**
         * @see https://github.com/ttezel/twit#tgetauth
         */
        getAuth(): Twit.Options;

        /**
         * @see https://github.com/ttezel/twit#tsetauthtokens
         */
        setAuth(tokens: Twit.ConfigKeys): void;

        /**
         * @see https://github.com/ttezel/twit#tstreampath-params
         */
        stream(path: Twit.StreamEndpoint, params?: Twit.Params): Twit.Stream;
    }

    export = Twit;
}
