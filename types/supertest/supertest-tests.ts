import supertest = require("supertest");
import express = require("express");

const app = express();
const request = supertest(app);

request.get("/user")
    .set('Accept', '*/*')
    .expect("Content-Type", /json/)
    .expect("Content-Length", "20")
    .expect(201)
    .end((err, res) => {
        if (err) throw err;
    });

// cookie scenario
const agent = new supertest.agent();
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
const client = new supertest.agent(app);
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
new supertest.agent(app, {
    http2: true,
});

// allow passing trusted CA as option to TestAgent
new supertest.agent(app, {
    ca: "test ca",
});

// agent has request methods
new supertest.agent(app).set({ host: "google.com" });

// agent has host methods
new supertest.agent(app).host("something.test").get("/"); // $ExpectType Test

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
