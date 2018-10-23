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


server.request({
    query: undefined
}, (error, response) => {
    if (response.isProperty) {
        //
    }
});

