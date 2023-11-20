/// <reference types="node" />

declare module "envify" {
    var envify: (file: string, environment: { [name: string]: any }) => NodeJS.ReadWriteStream;
    export = envify;
}

declare module "envify/custom" {
    function envify(
        environment: { [name: string]: any },
    ): (file: string, environment: { [name: string]: any }) => NodeJS.ReadWriteStream;
    export = envify;
}
