interface localizer {
    to(offset: number): localizer;
    returnAs(as: string): localizer;
    localize(): string;
}

declare class ISO8601Localizer implements localizer {
    constructor(userISO8601: string);
    to(offset: number): localizer;
    returnAs(as: string): localizer;
    localize(): string;
}

declare module "iso8601-localizer" {
    export = ISO8601Localizer;
}
