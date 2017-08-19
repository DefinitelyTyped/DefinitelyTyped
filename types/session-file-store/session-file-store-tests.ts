import FileStore = require("session-file-store");

const options: FileStore.Options = {
    path: "./tmp/sessions/",
    logFn: (a: string) => {
    }
};

const sessionStore = new FileStore(options);

sessionStore.list((err: any, file: string[]) => {});
