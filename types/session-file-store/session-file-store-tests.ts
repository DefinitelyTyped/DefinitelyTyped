import session = require("express-session");
import f = require("session-file-store");

const options: f.Options = {
    path: "./tmp/sessions/",
    logFn: (a: string) => {
    }
};
const FileStore = f(session);

const sessionStore: session.Store = new FileStore(options);
