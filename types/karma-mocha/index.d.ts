import "karma";

declare module "karma" {
    interface ClientOptions {
        mocha?: MochaClientOptions | undefined;
    }

    interface MochaClientOptions {
        /** This will be exposed in a reporter as `result.mocha.{exportedValue}` */
        export?: string[] | undefined;
        /** You can set opts to equal true then plugin will load opts from default location 'test/mocha.opts' */
        opts?: true | string | undefined;
        /** any supported Mocha configuration options */
        [key: string]: any;
    }
}
