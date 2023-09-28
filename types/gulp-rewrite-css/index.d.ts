// Type definitions for gulp-rewrite-css 1.1
// Project: https://github.com/joscha/gulp-rewrite-css
// Definitions by: Christophe Coevoet <https://github.com/stof>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
