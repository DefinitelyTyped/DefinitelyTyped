export const pd: {
    xml: (data: string) => string;
    json: (data: string) => string;
    css: (data: string, preserveComments?: boolean) => string;
    sql: (data: string) => string;
    xmlmin: (data: string, preserveComments?: boolean) => string;
    jsonmin: (data: string) => string;
    cssmin: (data: string) => string;
    sqlmin: (data: string) => string;
};
