import * as tern from "tern/lib/tern";

const server: tern.Server = null;

server.request({
    query: {
        type: "completions",
        file: "",
        end: 0
    }
}, (error, response) => {
    if (response.isProperty) {
        //
    }
});


server.request({
}, (error, response) => {
    if (response.isProperty) {
        //
    }
});

declare module "tern/lib/tern" {
    interface QueryMap {
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
    if (response.abc) {
        //
    }
});


server.request({
    query: undefined
}, (error, response) => {
    if (response.isProperty) {
        //
    }
});

