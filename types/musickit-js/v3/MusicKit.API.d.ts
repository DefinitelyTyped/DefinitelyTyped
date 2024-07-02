declare namespace MusicKit {
    /**
     * This class represents the Apple Music API.
     * https://js-cdn.music.apple.com/musickit/v3/docs/?path=/story/reference-javascript-api--page
     */
    interface MediaAPIV3 {
        /**
         * The storefront used for making calls to the API.
         */
        storefrontId: string;
        /**
         * An instance of MusicKitAPI is made available on configured instances of MusicKit as the property api.
         * The primary use of the API class is to facilitate making requests to the Apple Music API, which is done via the ‘passthrough API’ method api.music(...).
         * https://js-cdn.music.apple.com/musickit/v3/docs/?path=/story/reference-javascript-api--page
         * @param path The path to the Apple Music API endpoint, without a hostname, and including a leading slash /
         * @param queryParameters An object with query parameters which will be appended to the request URL.
         * @param options An object with additional options to control how requests are made
         */
        music<T extends APIParameters | undefined>(
            path: T extends APIParameters ? getPath<T> : string,
            queryParameters?: T extends APIParameters ? getQueryParameters<T> : any,
            options?: { fetchOptions: { method: 'GET' | 'POST' | 'DELETE' | 'PUT' } },
        ): Promise<
            T extends APIParameters
            ? {
                    data: getAPIResponse<T>
                }
                : APIResponse & {
                      data: Resource[];
                  }
        >;
        lyric(catalogSongID: MusicKit.Songs['id']): Promise<
            {
                id: string;
                type: 'lyrics';
                attributes: {
                    ttml: XMLDocument;
                    playParams: {
                        id: string;
                        kind: 'lyric';
                        catalogId: string;
                        displayType: number;
                    };
                };
            }
        >;
    }
}
