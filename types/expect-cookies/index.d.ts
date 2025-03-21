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

    interface CookieMatcher {
        name: string;
        value?: string;
        options?: Record<string, string | boolean>;
    }

    interface ExpectCookiesStatic extends Assertion {
        (): unknown; // TODO (secret, asserts) => Assertion
    }
}

export = expectCookies;
