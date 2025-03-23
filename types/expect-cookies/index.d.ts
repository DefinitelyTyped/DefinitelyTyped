declare const expectCookies: expectCookies.ExpectCookiesStatic;

declare namespace expectCookies {
    interface Assertion {
        set(expects: SetMatcher | SetMatcher[], assert?: unknown): this;

        reset(expects: ResetMatcher | ResetMatcher[], assert?: unknown): this;

        "new"(expects: ResetMatcher | ResetMatcher[], assert?: unknown): this;

        renew(expects: RenewMatcher | RenewMatcher[], assert?: unknown): this;

        // TODO ExpectCookies.contain
        // TODO ExpectCookies.not
    }

    type CustomAssertion = (
        req: { cookies: SetMatcher[] },
        res: { cookies: SetMatcher[] },
    ) => boolean;

    interface SetMatcher {
        name: string;
        value?: string;
        options?: Record<string, string | boolean>;
    }

    interface ResetMatcher {
        name: string;
    }

    interface RenewMatcher {
        name: string;
        // max-age is in seconds
        options: { "max-age": number; expires?: never } | { expires: Date; "max-age"?: never };
    }

    interface ExpectCookiesStatic extends Assertion {
        (
            secret: string | string[] | null,
            asserts: CustomAssertion | CustomAssertion[],
        ): Assertion;
    }
}

export = expectCookies;
