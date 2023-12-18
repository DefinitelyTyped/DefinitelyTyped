declare module "crack-json" {
    function extractJson(
        subject: string,
        configuration?: {
            filter?: (input: string) => boolean;
            parser?: (input: string) => any;
        },
    ): any;
}
