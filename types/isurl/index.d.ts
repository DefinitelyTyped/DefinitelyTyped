declare module "isurl" {
    interface IsURL {
        (url: unknown, supportIncomplete?: boolean): boolean;
        lenient(url: unknown): boolean;
    }

    const isURL: IsURL;

    export = isURL;
}
