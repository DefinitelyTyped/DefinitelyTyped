import request, { cookies, CustomAssertionCookie } from "supertest";
import type { App } from "supertest/types";

function customAssertion(
    req: { cookies: CustomAssertionCookie[] },
    res: { cookies: CustomAssertionCookie[] },
): boolean {
    throw new Error("not implemented");
}

// single custom assertion
async function singleCustomAssertion() {
    const agent = request.agent(app);
    await agent.get("/set-aoeu").expect(200);
    // $ExpectType Response
    await agent.get("/set-snth").expect(200).expect(cookies(null, customAssertion));
}

// empty custom assertions array
// $ExpectType Test
request(app()).get("/");

// non-empty custom assertions array
// $ExpectType Test
request(app())
    .get("/")
    .expect(cookies(null, [customAssertion, customAssertion]));

// chainable without arguments
// $ExpectType Test
request(app())
    .get("/")
    .expect(cookies().set({ name: "aoeu" }));

// chainable with secret
// $ExpectType Test
request(app())
    .get("/")
    .expect(cookies("secret").set({ name: "aoeu" }));

// chainable with custom assertion
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies(null, customAssertion)
            .set({ name: "test" }),
    );

// secret string
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(cookies("secret", customAssertion));

// secret array
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(cookies(["secret1", "secret2"], customAssertion));

// minimal set
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.set({
            name: "aoeu",
        }),
    );

// set does not accept a value
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.set({
            name: "aoeu",
            // @ts-expect-error
            value: "fqcn",
        }),
    );

// set with options
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.set({
            name: "aoeu",
            options: {
                secure: true,
                path: "/abcd",
            },
        }),
    );

// set with empty array
// $ExpectType Test
request(app()).get("/").expect(cookies.set([]));

// set with non-empty array
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.set([
            {
                name: "aoeu",
            },
            {
                name: "snth",
            },
        ]),
    );

// chained set
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.set({
            name: "aoeu",
        }).set({
            name: "aoeu",
        }),
    );

// set with assert=false
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.set({
            name: "aoeu",
        }, false),
    );

// reset
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.reset({
            name: "aoeu",
        }),
    );

// reset with array
// $ExpectType Test
request(app())
    .get("/")
    .expect([
        cookies.reset({
            name: "aoeu",
        }),
        cookies.reset({
            name: "snth",
        }),
    ]);

// reset with chaining
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.reset({
            name: "aoeu",
        }).set({
            name: "snth",
        }),
    );

// reset with assert=false
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.reset({
            name: "aoeu",
        }, false),
    );

// reset doesn't support values
request(app())
    .get("/")
    .expect(
        cookies.reset({
            name: "aoeu",
            // @ts-expect-error
            value: "snth",
        }),
    );

// reset doesn't support options
request(app())
    .get("/")
    .expect(
        cookies.reset({
            name: "aoeu",
            // @ts-expect-error
            options: {
                maxAge: 10,
            },
        }),
    );

// new
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.new({
            name: "aoeu",
        }),
    );

// new doesn't support values
request(app())
    .get("/")
    .expect(
        cookies.new({
            name: "aoeu",
            // @ts-expect-error
            value: "snth",
        }),
    );

// new with array
// $ExpectType Test
request(app())
    .get("/")
    .expect([
        cookies.new({
            name: "aoeu",
        }),
        cookies.new({
            name: "snth",
        }),
    ]);

// new with chaining
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.new({
            name: "aoeu",
        }).set({
            name: "snth",
        }),
    );

// new with assert=false
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        cookies.new({
            name: "aoeu",
        }, false),
    );

// new doesn't support options
request(app())
    .get("/")
    .expect(
        cookies.new({
            name: "aoeu",
            // @ts-expect-error
            options: {
                maxAge: 10,
            },
        }),
    );

// renew, with expires
const now = new Date();
const expiresAgent = request.agent(
    app(),
);

expiresAgent.get("/").then(() => {
    // $ExpectType Test
    expiresAgent.get("/").expect(
        cookies.renew({
            name: "aoeu",
            options: {
                expires: now,
            },
        }),
    );
});

// renew, with max-age
const ArrayAgent = request.agent(
    app(),
);

ArrayAgent.get("/").then(() => {
    // $ExpectType Test
    ArrayAgent.get("/").expect(
        cookies.renew({
            name: "aoeu",
            options: {
                "max-age": 1000,
            },
        }),
    );
});

// renew array
const arrayAgent = request.agent(
    app(),
);

ArrayAgent.get("/").then(() => {
    // $ExpectType Test
    ArrayAgent.get("/").expect(
        cookies.renew([
            {
                name: "aoeu",
                options: {
                    "max-age": 1000,
                },
            },
            {
                name: "snth",
                options: {
                    expires: now,
                },
            },
        ]),
    );
});

// renew allows only one option
const multiAgent = request.agent(
    app(),
);

ArrayAgent.get("/").then(() => {
    ArrayAgent.get("/").expect(
        cookies.renew({
            name: "aoeu",
            // @ts-expect-error
            options: {
                "max-age": 1000,
                expires: now,
            },
        }),
    );
});

const expiresStr = "Thu, 27 Mar 2025 02:01:11 GMT";
const expectEverything = {
    name: "aoeu",
    value: "snth",
    options: {
        domain: "example.com",
        path: "/hello",
        expires: expiresStr, // Note the different value type
        secure: true,
        httponly: true, // Note the different field name
    },
};

// contain accepts all allowed options except 'max-age'
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(cookies.contain(expectEverything));

// [FAILING] contain.value should be optional
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    // @ts-expect-error (this should be valid but expect-cookies doesn't like it)
    .expect(cookies.contain({ name: "aoeu" }));

// contain.options should be optional
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(cookies.contain({ name: "aoeu", value: "snth" }));

// [FAILING] contain.options.max-age should be allowed
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(
        cookies.contain({
            name: "aoeu",
            value: "snth",
            // @ts-expect-error (max-age is bugged and never works properly; types should be adjusted once the bug is fixed)
            options: { "max-age": 100 },
        }),
    );

// all members of contain.options should be optional
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(cookies.contain({
        name: "aoeu",
        value: "snth",
        options: {},
    }));

// contain should take expectation array
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(cookies.contain([]));

// contain should take asserts
// $ExpectType Test
request(app())
    .get("/")
    .expect(cookies.contain(expectEverything, false));

// not should support set
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(
        cookies.not("set", {
            name: "aoeu",
        }),
    );

// not should support reset
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(
        cookies.not("reset", {
            name: "aoeu",
        }),
    );

// not should support new
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(
        cookies.not("new", {
            name: "aoeu",
        }),
    );

// not should support renew
const notContainAgent = request.agent(app());
notContainAgent.get("/").expect(200).then(() => {
    // $ExpectType Test
    notContainAgent.get("/").expect(
        cookies.not("renew", {
            name: "aoeu",
            options: {
                expires: new Date(now.getTime() + 2000),
            },
        }),
    );
});

// not should support contain
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(cookies.not("contain", expectEverything));

// not should accept expectation array
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(cookies.not("set", []));

function app(): App {
    throw new Error("Not implemented");
}
