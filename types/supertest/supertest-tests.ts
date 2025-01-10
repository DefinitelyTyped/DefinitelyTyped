import supertest = require("supertest");
import express = require("express");

import { Server as HttpServer } from "http";
import { Http2SecureServer, Http2Server } from "http2";
import { Server as HttpsServer } from "https";

const app = express();
const request = supertest(app);

// Should accept different servers as the app
supertest("http://some.server").get("/user").expect(200);
supertest({} as HttpServer).get("/user").expect(200);
supertest({} as HttpsServer).get("/user").expect(200);
supertest({} as Http2Server).get("/user").expect(200);
supertest({} as Http2SecureServer).get("/user").expect(200);

request.get("/user")
    .set("Accept", "*/*")
    .expect("Content-Type", /json/)
    .expect("Content-Length", "20")
    .expect(201)
    .end((err, res) => {
        if (err) throw err;
    });

// cookie scenario
const agent = supertest.agent();
request.post("/login")
    .send("hello world")
    .end((err: any, res: supertest.Response) => {
        if (err) throw err;

        const req = request.get("/admin");
        req.expect(200, (err: any, res: supertest.Response) => {
            if (err) throw err;
        });
    });

// cookie scenario, new version
const client = supertest.agent(app);
client.post("/login").end((err: any, res: supertest.Response) => {
    if (err) throw err;

    client.get("/admin").expect(200, (err: any, res: supertest.Response) => {
        if (err) throw err;
    });
});

// allow passing http2 as option to supertest
supertest(app, {
    http2: true,
});

// allow passing http2 as option to TestAgent
supertest.agent(app, {
    http2: true,
});

// allow passing trusted CA as option to TestAgent
supertest.agent(app, {
    ca: "test ca",
});

// agent has request methods
supertest.agent(app).set({ host: "google.com" });

// agent has host methods
supertest.agent(app).host("something.test").get("/"); // $ExpectType Test

// functional expect
request.get("/")
    .expect(hasPreviousAndNextKeys)
    .end((err: any, res: supertest.Response) => {
        if (err) throw err;
    });

function hasPreviousAndNextKeys(res: supertest.Response) {
    if (!("next" in res.body)) return "missing next key";
    if (!("prev" in res.body)) throw new Error("missing prev key");
}

// functional expect without response type
request.get("/")
    .expect(res => {
        if (!("next" in res.body)) return "missing next key";
        if (!("prev" in res.body)) throw new Error("missing prev key");
    })
    .end((err: any, res: supertest.Response) => {
        if (err) throw err;
    });

// object expect
request.get("/")
    .expect(200, { foo: "bar" })
    .end((err: any, res: supertest.Response) => {
        if (err) throw err;
    });
