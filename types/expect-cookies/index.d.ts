declare const expectCookies: expectCookies.ExpectCookiesStatic;

declare namespace expectCookies {
    interface Assertion {
        set(expects: SetMatcher | SetMatcher[], assert?: boolean): this;

        reset(expects: ResetMatcher | ResetMatcher[], assert?: boolean): this;

        "new"(expects: ResetMatcher | ResetMatcher[], assert?: boolean): this;

        renew(expects: RenewMatcher | RenewMatcher[], assert?: boolean): this;

        contain(expects: ContainMatcher | ContainMatcher[], assert?: boolean): this;

        // TODO ExpectCookies.not
    }

    type CustomAssertion = (
        req: { cookies: CustomAssertionCookie[] },
        res: { cookies: CustomAssertionCookie[] },
    ) => boolean;

    interface CustomAssertionCookie {
        name: string;
        value: string;
        options?: Record<string, string | boolean>;
    }

    interface SetMatcher {
        name: string;
        options?: Record<string, string | boolean>;
    }

    interface ResetMatcher {
        name: string;
    }

    interface RenewMatcher {
        name: string;

        // XOR type; options must contain 'max-age' or 'expires' but not
        // both. The docs imply this value is ignored, but it is not.
        // The docs also suggest this is an "equal or greater" check but
        // actually the check is "strictly greater".
        // https://github.com/gregl83/expect-cookies/issues/3
        options:
            | { "max-age": number; expires?: never }
            | { expires: Date; "max-age"?: never };
    }
    }

    interface ExpectCookiesStatic extends Assertion {
        (
            secret?: string | string[] | null,
            asserts?: CustomAssertion | CustomAssertion[],
        ): Assertion;
    }
}

export = expectCookies;
