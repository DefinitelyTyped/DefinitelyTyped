import jsdom from "jsdom";
import karma from "karma";
import { ProxyAgent } from "undici-types";

const virtualConsole = new jsdom.VirtualConsole();
const cookieJar = new jsdom.CookieJar();

module.exports = (config: karma.Config) => {
    config.set({
        browsers: ["jsdom"],

        jsdomLauncher: {
            jsdom: {
                resources: {
                    dispatcher: new ProxyAgent({
                        uri: "http://127.0.0.1:9001",
                        connect: {
                            rejectUnauthorized: false,
                        },
                    }),
                    userAgent: "Mellblomenator/9000",
                },
                virtualConsole,
                cookieJar,
            },
        },
    });
};
