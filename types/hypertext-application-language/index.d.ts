declare namespace Hal {
    /**
     * Describe a HAL Link object
     *
     * https://tools.ietf.org/html/draft-kelly-json-hal-06#section-5
     */
    interface Link {
        deprecation?: string | undefined;
        href: string;
        hreflang?: string | undefined;
        name?: string | undefined;
        profile?: string | undefined;
        templated?: boolean | undefined;
        title?: string | undefined;
        type?: string | undefined;
    }
}
