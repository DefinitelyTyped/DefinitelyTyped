import ExpressAsPromise = require("express-as-promise");
import withServer = require("express-as-promise/withServer");
import { RequestHandler } from "express";

async function testStaticFunc() {
    await withServer(async server => {
        const myMiddleware: RequestHandler = <any> {};
        server.app.use(myMiddleware);

        // $ExpectType string
        const url = await server.listen();

        // $ExpectType Response
        const res = await fetch(url);
    });
}

async function testClass() {
    const server = new ExpressAsPromise();

    server.app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    // starts the listener and writes the base URL to the console
    await server.listen();

    // $ExpectType Response
    const response = await server.fetch("/");

    // ...then stop the server
    await server.stop();
}
