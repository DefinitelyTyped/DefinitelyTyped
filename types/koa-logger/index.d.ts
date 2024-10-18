import { Middleware } from "koa";

type Transporter = (
    str: string,
    args: [string, string, string, number | undefined, string | undefined, string | undefined],
) => void;

interface TransporterOpts {
    transporter: Transporter;
}

declare function KoaLogger(opts?: Transporter | TransporterOpts): Middleware;
declare namespace KoaLogger {}
export = KoaLogger;
