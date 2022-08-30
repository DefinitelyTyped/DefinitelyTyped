// Type definitions for disqusJS 1.3
// Project: https://github.com/SukkaW/DisqusJS#readme
// Definitions by: enpitsulin <https://github.com/enpitsuLin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = DisqusJS;

declare const DisqusJS: DisqusJS;

interface DisqusJS {
    new (config?: Partial<DisqusJSConfig>): {};
}

interface DisqusJSConfig {
    /**
     * - The disqus shortname
     */
    shortname: string;
    /**
     * - The Forum Name
     */
    siteName: string;
    /**
     * - The identifier of the page
     */
    identifier: string;
    /**
     * - The title of the page
     */
    title: string;
    /**
     * - The url of the page
     */
    url: string;
    /**
     * - Where to get data
     */
    api: string;
    /**
     * - The apikey used to request Disqus API
     */
    apikey: string;
    /**
     * - The max nesting level of Disqus comment
     */
    nesting: number;
    /**
     * - The msg when there is no comment
     */
    nocomment: string;
    /**
     * - The disqus forum admin username
     */
    admin: string;
    /**
     * - The disqus moderator badge text
     */
    adminLabel: string;
}
