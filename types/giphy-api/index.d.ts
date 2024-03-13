type Rating = "y" | "g" | "pg" | "pg-13" | "r";
type Format = "html" | "json";

interface BaseOptions {
    rating: Rating;
    fmt?: Format | undefined;
}

interface TranslateOptions extends BaseOptions {
    s: string;
}

interface RandomOptions extends BaseOptions {
    tag: string;
}

interface TrendingOptions extends BaseOptions {
    limit?: number | undefined;
}

interface BaseImage {
    url: string;
    width: string;
    height: string;
}

interface BaseResponse {
    pagination: { total_count: number; count: number; offset: number };
    meta: {
        status: number;
        msg: string;
        response_id: string;
    };
}

type Callback<TResponse> = (err: Error, res: TResponse) => void;

declare function giphyApi(apiKeyOrOptions?: string | giphyApi.GiphyOptions): giphyApi.Giphy;

declare namespace giphyApi {
    interface GiphyOptions {
        https?: boolean | undefined;
        timeout?: number | undefined;
        apiKey?: string | undefined;
    }

    interface SearchOptions extends BaseOptions {
        q: string;
        limit?: number | undefined;
        offset?: number | undefined;
    }

    interface Giphy {
        search(queryOrOptions: string | SearchOptions, cb: Callback<MultiResponse>): void;
        search(queryOrOptions: string | SearchOptions): Promise<MultiResponse>;
        id(ids: string | string[], cb: Callback<MultiResponse>): void;
        id(ids: string | string[]): Promise<MultiResponse>;
        translate(termOrOptions: string | TranslateOptions, cb: Callback<SingleResponse>): void;
        translate(termOrOptions: string | TranslateOptions): Promise<SingleResponse>;
        random(tagOrOptions: string | RandomOptions, cb: Callback<SingleResponse>): void;
        random(tagOrOptions: string | RandomOptions): Promise<SingleResponse>;
        trending(options: TrendingOptions, cb: Callback<MultiResponse>): void;
        trending(cb: Callback<MultiResponse>): void;
        trending(options?: TrendingOptions): Promise<MultiResponse>;
    }

    interface Images {
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
        looping: { mp4: string };
        preview: {
            width: string;
            height: string;
            mp4: string;
            mp4_size: string;
        };
        preview_gif: BaseImage & {
            size: string;
        };
    }

    interface GIFObject {
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
        } | undefined;
        source_tld: string;
        source_post_url: string;
        update_datetime: string;
        create_datetime: string;
        import_datetime: string;
        trending_datetime: string;
        title: string;
        images: Images;
    }

    interface MultiResponse extends BaseResponse {
        data: GIFObject[];
    }

    interface SingleResponse extends BaseResponse {
        data: GIFObject;
    }
}

export = giphyApi;
