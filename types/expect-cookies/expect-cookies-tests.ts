import Cookies, { type CookieMatcher } from "expect-cookies";
import request, { type Response } from "supertest";
import { type App } from "supertest/types";

function customAssertion(req: { cookies: CookieMatcher[] }, res: { cookies: CookieMatcher[] }): boolean {
    throw new Error("not implemented");
}

// single custom assertion
async function singleCustomAssertion() {
    const agent = request.agent(app);
    await agent.get("/set-aoeu").expect(200);
    // $ExpectType Response
    await agent.get("/set-snth").expect(200).expect(Cookies(null, customAssertion));
}

// empty custom assertions array
// $ExpectType Test
request(app()).get("/");

// non-empty custom assertions array
// $ExpectType Test
request(app())
    .get("/")
    .expect(Cookies(null, [customAssertion, customAssertion]));

// chained custom assertion
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        Cookies(null, customAssertion)
            .set({ name: "test" }),
    );

// secret string
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(Cookies("secret", customAssertion));

// secret array
// $ExpectType Test
request(app())
    .get("/")
    .expect(200)
    .expect(Cookies(["secret1", "secret2"], customAssertion));

// minimal set
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        Cookies.set({
            name: "aoeu",
        }),
    );

// set with value
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        Cookies.set({
            name: "aoeu",
            value: "fqcn",
        }),
    );

// set with options
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        Cookies.set({
            name: "aoeu",
            options: {
                secure: true,
                path: "/abcd",
            },
        }),
    );

// set with empty array
// $ExpectType Test
request(app()).get("/").expect(Cookies.set([]));

// set with non-empty array
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        Cookies.set([
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
        Cookies.set({
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
        Cookies.set({
            name: "aoeu",
        }, false),
    );

// reset
// $ExpectType Test
request(app())
    .get("/")
    .expect(
        Cookies.reset({
            name: "aoeu",
        }),
    );

function app(): App {
    throw new Error("Not implemented");
}
