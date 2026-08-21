/// <reference types="node"/>

type GulpRewriteCssPathAdapter = (
    context: { sourceDir: string; sourceFile: string; destinationDir: string; targetFile: string },
) => string;

interface GulpRewriteCss {
    (options: {
        destination: string;
        debug?: boolean;
        adaptPath?: GulpRewriteCssPathAdapter;
    }): NodeJS.ReadWriteStream;
    adaptPath: GulpRewriteCssPathAdapter;
}

declare var gulpRewriteCss: GulpRewriteCss;

export = gulpRewriteCss;
