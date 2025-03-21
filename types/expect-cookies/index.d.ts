declare const expectCookies: expectCookies.ExpectCookiesStatic;

declare namespace expectCookies {
    interface Assertion {
        set(expects: CookieMatcher | CookieMatcher[], assert?: boolean): this;
        // TODO ExpectCookies.reset
        // TODO ExpectCookies.new
        // TODO ExpectCookies.renew
        // TODO ExpectCookies.contain
        // TODO ExpectCookies.not
    }

    type CustomAssertion = (req: { cookies: CookieMatcher[] }, res: { cookies: CookieMatcher[] }) => boolean;

    interface CookieMatcher {
        name: string;
        value?: string;
        options?: Record<string, string | boolean>;
    }

    interface ExpectCookiesStatic extends Assertion {
        (secret: string | string[] | null, asserts: CustomAssertion | CustomAssertion[]): Assertion;
    }
}

export = expectCookies;
