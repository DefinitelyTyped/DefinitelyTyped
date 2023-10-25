/// <reference types="node" />

interface IJasmineBrowser {
    specRunner(options?: any): NodeJS.ReadWriteStream;
    server(options?: any): NodeJS.ReadWriteStream;
    headless(options?: any): NodeJS.ReadWriteStream;
}

declare var jasmineBrowser: IJasmineBrowser;
export = jasmineBrowser;
