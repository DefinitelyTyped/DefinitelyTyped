declare const expectCookies: expectCookies.ExpectCookiesStatic;

declare namespace expectCookies {
    interface Assertion {
        set(expects: SetMatcher | ReadonlyArray<SetMatcher>, assert?: boolean): this;

        reset(expects: ResetMatcher | ReadonlyArray<ResetMatcher>, assert?: boolean): this;

        "new"(expects: ResetMatcher | ReadonlyArray<ResetMatcher>, assert?: boolean): this;

        renew(expects: RenewMatcher | ReadonlyArray<RenewMatcher>, assert?: boolean): this;

        contain(expects: ContainMatcher | ReadonlyArray<ContainMatcher>, assert?: boolean): this;

        not<M extends keyof Omit<Assertion, "not">>(
            method: M,
            expects: AssertionMatchers[M] | ReadonlyArray<AssertionMatchers[M]>,
        ): this;
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

    interface AssertionMatchers {
        readonly set: SetMatcher;
        readonly reset: ResetMatcher;
        readonly new: NewMatcher;
        readonly renew: RenewMatcher;
        readonly contain: ContainMatcher;
    }

    interface SetMatcher {
        readonly name: string;
        readonly options?: Record<string, string | boolean>;
    }

    interface ResetMatcher {
        readonly name: string;
    }

    type NewMatcher = ResetMatcher;

    interface RenewMatcher {
        readonly name: string;

        readonly options:
            | { "max-age": number; expires?: never }
            | { expires: Date; "max-age"?: never };
    }

    interface ContainMatcher {
        readonly name: string;

        readonly value: string | boolean;

        readonly options?: {
            readonly domain?: string;
            readonly path?: string;
            readonly expires?: string; // RFC 6265 sane-cookie-date (e.g. "Fri, 26 Sep 2025 04:26:52 GMT")
            readonly secure?: boolean;
            readonly httponly?: boolean;
            readonly "max-age"?: string;
        };
    }

    interface ExpectCookiesStatic extends Assertion {
        (
            secret?: string | ReadonlyArray<string> | null,
            asserts?: CustomAssertion | ReadonlyArray<CustomAssertion>,
        ): Assertion;
    }
}

export = expectCookies;
