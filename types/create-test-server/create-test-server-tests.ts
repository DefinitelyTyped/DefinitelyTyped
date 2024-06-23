import createTestServer = require("create-test-server");

const server = createTestServer().then((server) => {
    // $ExpectType string | undefined
    server.url;
    // $ExpectType string | undefined
    server.sslUrl;
    // $ExpectType string
    server.caCert;
    // $ExpectType number | undefined
    server.port;
    // $ExpectType number | undefined
    server.sslPort;

    // This is just an Express route
    // You could use any Express middleware too
    server.get("/foo", (req, res) => {
        res.send("bar");
    });

    // You can return a body directly too
    server.get("/foo", () => "bar");
    server.get("/foo", "bar");

    return server;
});

server.then((s) => {
    s.listen().then(() => {
        s.close();
    });
});

createTestServer({ certificate: "example.com", bodyParser: false });
