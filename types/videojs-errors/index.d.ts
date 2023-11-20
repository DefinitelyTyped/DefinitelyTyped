// eslint-disable-next-line @definitelytyped/no-import-default-of-export-equals
import videojs from "video.js";

interface CustomError {
    type?: string | undefined;
    headline: string;
    message?: string | undefined;
}

interface VideoJSErrorsPlugin {
    readonly VERSION: string;
    (options?: Options): void;
    getAll(): Record<string | number, CustomError>;
    extend(options: Record<string | number, CustomError>): void;
    timeout<T extends number | undefined = undefined>(value?: T): T extends number ? undefined : number;
    backgroundTimeout<T extends number | undefined = undefined>(value?: T): T extends number ? undefined : number;
}

interface Options {
    errors?: Record<string | number, CustomError>;
    timeout?: number | undefined;
    backgroundTimeout?: number | undefined;
}

type CustomMediaError = {
    readonly code: string | number;
    readonly dismiss?: boolean | undefined;
} & Partial<Omit<videojs.MediaError, "code">>;

declare const errors: VideoJSErrorsPlugin;
export = errors;

declare module "video.js" {
    interface VideoJsPlayer extends videojs.Component {
        errors: VideoJSErrorsPlugin;
        error(err: CustomMediaError | string | number | null): void;
    }
}
