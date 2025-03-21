import Cookies from "expect-cookies";
import request from "supertest";
import { App } from "supertest/types";

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

function app(): App {
    throw new Error("Not implemented");
}
