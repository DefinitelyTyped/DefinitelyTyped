import { RequestHandler } from "express";

declare namespace CamouflageRewrite {
    interface Options {
        mediaTypes?: string[] | undefined;
        rewriteContent?: boolean | undefined;
        rewriteHeaders?: boolean | undefined;
        url: string;
    }
}

declare function CamouflageRewrite(options: CamouflageRewrite.Options): RequestHandler;

export = CamouflageRewrite;
