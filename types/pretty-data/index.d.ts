// Type definitions for pretty-data 0.40.0
// Project: https://github.com/sidorares/json-bigint#readme
// Definitions by: Zeeshan Ahmad <https://github.com/ziishaned>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const pd: {
    xml: (data: string) => string,
    json: (data: string) => string,
    css: (data: string, preserveComments?: boolean) => string,
    sql: (data: string) => string,
    xmlmin: (data: string, preserveComments?: boolean) => string,
    jsonmin: (data: string) => string,
    cssmin: (data: string) => string,
    sqlmin: (data: string) => string,
};

export  = pd;
