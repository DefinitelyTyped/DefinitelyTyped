// Type definitions for giphy-api 2.0
// Project: https://github.com/austinkelleher/giphy-api
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type Rating = "y" | "g" | "pg" | "pg-13" | "r";
type Format = "html" | "json";

interface BaseOptions {
    rating: Rating;
    fmt?: Format;
}

interface TranslateOptions extends BaseOptions {
    s: string;
}

interface RandomOptions extends BaseOptions {
    tag: string;
}

interface TrendingOptions extends BaseOptions {
    limit?: number;
}

interface BaseImage {
    url: string;
    width: string;
    height: string;
}

type Callback = (err: Error, res: giphyApi.Result) => void;

declare function giphyApi(apiKeyOrOptions?: string | giphyApi.GiphyOptions): giphyApi.Giphy;

declare namespace giphyApi {
    interface GiphyOptions {
        https?: boolean;
        timeout?: number;
        apiKey?: string;
    }

    interface SearchOptions extends BaseOptions {
        q: string;
        limit?: number;
        offset?: number;
    }

    interface Giphy {
        search(queryOrOptions: string | SearchOptions, cb: Callback): void;
        search(queryOrOptions: string | SearchOptions): Promise<Result>;
        id(ids: string | string[], cb: Callback): void;
        id(ids: string | string[]): Promise<Result>;
        translate(termOrOptions: string | TranslateOptions, cb: Callback): void;
        translate(termOrOptions: string | TranslateOptions): Promise<Result>;
        random(tagOrOptions: string | RandomOptions, cb: Callback): void;
        random(tagOrOptions: string | RandomOptions): Promise<Result>;
        trending(options: TrendingOptions, cb: Callback): void;
        trending(cb: Callback): void;
        trending(options?: TrendingOptions): Promise<Result>;
    }

    interface Result {
        data: [
            {
                type: string;
                id: string;
                slug: string;
                url: string;
                bitly_url: string;
                embed_url: string;
                username: string;
                source: string;
                rating: Rating;
                content_url: string;
                user?: {
                    avatar_url: string;
                    banner_url: string;
                    profile_url: string;
                    username: string;
                    display_name: string;
                    twitter: string;
                },
                source_tld: string;
                source_post_url: string;
                update_datetime: string;
                create_datetime: string;
                import_datetime: string;
                trending_datetime: string;
                title: string;
                images: {
                    fixed_height: BaseImage & {
                        size: string;
                        mp4: string;
                        mp4_size: string;
                        webp: string;
                        webp_size: string;
                    };
                    fixed_height_still: BaseImage;
                    fixed_height_downsampled: BaseImage & {
                        size: string;
                        webp: string;
                        webp_size: string;
                    };
                    fixed_width: BaseImage & {
                        size: string;
                        mp4: string;
                        mp4_size: string;
                        webp: string;
                        webp_size: string;
                    };
                    original_still: BaseImage;
                    fixed_width_still: BaseImage;
                    fixed_width_downsampled: BaseImage & {
                        size: string;
                        webp: string;
                        webp_size: string;
                    };
                    fixed_height_small: BaseImage & {
                        size: string;
                        mp4: string;
                        mp4_size: string;
                        webp: string;
                        webp_size: string;
                    };
                    fixed_height_small_still: BaseImage;
                    fixed_width_small: BaseImage & {
                        size: string;
                        mp4: string;
                        mp4_size: string;
                        webp: string;
                        webp_size: string;
                    };
                    fixed_width_small_still: BaseImage;
                    downsized: BaseImage & {
                        size: string;
                    };
                    downsized_still: BaseImage;
                    downsized_large: BaseImage & {
                        size: string;
                    };
                    downsized_medium: BaseImage & {
                        size: string;
                    };
                    downsized_small: BaseImage & {
                        size: string;
                    };
                    original: BaseImage & {
                        size: string;
                        frames: string;
                        mp4: string;
                        mp4_size: string;
                        webp: string;
                        webp_size: string;
                    };
                    looping: { mp4: string; };
                    preview: {
                        width: string;
                        height: string;
                        mp4: string;
                        mp4_size: string;
                    };
                    preview_gif: BaseImage & {
                        size: string;
                    };
                };
            }
        ];
        pagination: { total_count: number; count: number; offset: number };
        meta: {
            status: number;
            msg: string;
            response_id: string;
        };
    }
}

export = giphyApi;
