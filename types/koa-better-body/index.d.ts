import { Options as FormidableOptions } from "formidable";
import { DefaultContext, DefaultState, Next, ParameterizedContext } from "koa";

declare function KoaBetterBody(
    options?: KoaBetterBody.Options,
): KoaBetterBody.Body;

declare namespace KoaBetterBody {
    interface Options extends FormidableOptions {
        /**
         * {
         * <br />&nbsp;&nbsp;multipart: ['multipart/form-data'],
         * <br />&nbsp;&nbsp;text: ['text/*'],
         * <br />&nbsp;&nbsp;form: ['application/x-www-form-urlencoded'],
         * <br />&nbsp;&nbsp;json: [
         * <br />&nbsp;&nbsp;&nbsp;&nbsp;'application/json',
         * <br />&nbsp;&nbsp;&nbsp;&nbsp;'application/json-patch+json',
         * <br />&nbsp;&nbsp;&nbsp;&nbsp;'application/vnd.api+json',
         * <br />&nbsp;&nbsp;&nbsp;&nbsp;'application/csp-report'
         * <br />&nbsp;&nbsp;],
         * <br />&nbsp;&nbsp;buffer: ['text/*']
         * }
         */
        extendTypes?: Record<string, string | string[]> & {
            custom?: string | string[];
        };

        /**
         * @default false
         */
        fields?: boolean | string;

        /**
         * @default false
         */
        files?: boolean | string;

        /**
         * @default true
         */
        multipart?: boolean;

        /**
         * @default false
         */
        textLimit?: string;

        /**
         * @default false
         */
        formLimit?: string;

        /**
         * @default false
         */
        jsonLimit?: string;

        /**
         * @default true
         */
        jsonStrict?: boolean;

        /**
         * @default () => false
         */
        detectJSON?: <StateT = DefaultState, ContextT = DefaultContext>(
            ctx: ParameterizedContext<StateT, ContextT>,
        ) => boolean;

        /**
         * @default false
         */
        bufferLimit?: string;

        /**
         * @default false
         */
        buffer?: boolean;

        /**
         * @default true
         */
        strict?: boolean;

        /**
         * @default '&'
         */
        delimiter?: string;

        /**
         * @default require('querystring').unescape
         */
        decodeURIComponent?: (query: string) => string;

        /**
         * @default 1000
         */
        maxKeys?: number; // default: 1000

        /**
         * @deprecated use formLimit instead
         * @default config.formLimit
         */
        urlencodedLimit?: string;

        /**
         * @deprecated use delimiter instead
         * @default config.delimiter
         */
        sep?: string;

        /**
         * @default undefined
         */
        onError?: <StateT = DefaultState, ContextT = DefaultContext>(
            err: any,
            ctx: ParameterizedContext<StateT, ContextT>,
        ) => void;

        /**
         * @default undefined
         */
        handler?: <StateT = DefaultState, ContextT = DefaultContext>(
            ctx: ParameterizedContext<StateT, ContextT>,
            options: Options,
            next: Next,
        ) => void;
    }

    type Body = (next: Next) => Generator;
}

export = KoaBetterBody;
