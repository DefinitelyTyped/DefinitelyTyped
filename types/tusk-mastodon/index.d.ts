declare class TuskMastodonInstance {
    constructor(options: TuskMastodonOptions);

    put(path: string, params?: GeneralObject): Promise<GeneralObject>;
    get(path: string, params?: GeneralObject): Promise<GeneralObject>;
    post(path: string, params?: GeneralObject): Promise<GeneralObject>;
    patch(path: string, params?: GeneralObject): Promise<GeneralObject>;
    delete(path: string, params?: GeneralObject): Promise<GeneralObject>;

    request(method: ValidHTTPMethod, path: string, params?: GeneralObject): Promise<GeneralObject>;

    getAuth(): { "access_token": string };
    setAuth(auth: { "access_token": string }): void;

    formEncodeParams(params: GeneralObject): string;
}

interface TuskMastodonOptions {
    "access_token": string;
    /**
     * The base URL of the Mastodon instance to connect to. Defaults to `https://mastodon.social/api/v1/`.
     */
    "api_url"?: string;
    "timeout_ms"?: number;
}

interface GeneralObject {
    [key: string]: any;
}
type ValidHTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export = TuskMastodonInstance;
