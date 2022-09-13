import * as tern from "tern";

const server: tern.Server = null as any;

server.request({
    query: {
        type: "completions",
        file: "",
        end: 0
    }
}, (error, response) => {
    if (response && response.isProperty) {
        //
    }
});

server.request({
}, (error, response) => {
    // @ts-expect-error
    if (response && response.isProperty) {
        //
    }
});

declare module "tern/lib/tern" {
    interface QueryRegistry {
        someUnknownType: {
            query: {
                type: "someUnknownType"
            },
            result: {
                abc: boolean
            }
        };
    }
}

server.request({
    query: {
        type: "someUnknownType"
    }
}, (error, response) => {
    if (response && response.abc) {
        //
    }
});

server.request({
    query: undefined
}, (error, response) => {
    // @ts-expect-error
    if (response && response.isProperty) {
        //
    }
});
