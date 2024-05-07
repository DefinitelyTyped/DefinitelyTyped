/// <reference types="node" />

interface PathFiles {
    [type: string]: string[];
}

/**
 * @return {PathFiles} paths to your files by extension
 * @example
 *  {
 *     js: [
 *       'paths/to/your/js/files.js',
 *       'in/their/order/of/dependency.js'
 *     ],
 *     css: [
 *       'paths/to/your/css/files.css'
 *     ],
 *     // etc.
 *   }
 */
declare function Wiredep(config: WiredepParams): PathFiles;

declare namespace Wiredep {
    export function stream(config: WiredepParams): NodeJS.ReadWriteStream;
}

interface WiredepParams {
    src?: string | string[] | undefined;
    /**
     * the directory of your Bower packages.
     * Default: '.bowerrc'.directory || bower_components
     */
    directory?: string | undefined;
    /**
     * your bower.json file contents.
     * Default: require('./bower.json')
     */
    bowerJson?: string | undefined;

    // ----- Advanced Configuration -----
    // All of the below settings are for advanced configuration, to
    // give your project support for additional file types and more
    // control.
    //
    // Out of the box, wiredep will handle HTML files just fine for
    // JavaScript and CSS injection.

    /**
     * path to where we are pretending to be
     */
    cwd?: string | undefined;
    /**
     * Default: true
     */
    dependencies?: boolean | undefined;
    /**
     * Default: false
     */
    devDependencies?: boolean | undefined;
    /**
     * Default: false
     */
    includeSelf?: boolean | undefined;
    /**
     * @example
     *  [ /jquery/, 'bower_components/modernizr/modernizr.js' ]
     */
    exclude?: Array<string | RegExp> | undefined;

    /**
     * string or regexp to ignore from the injected filepath
     * @example
     *  [ /jquery/, 'bower_components/modernizr/modernizr.js' ]
     */
    ignorePath?: string | RegExp | undefined;

    /**
     *  This inline object offers another way to define your overrides if
     *  modifying your project's `bower.json` isn't an option.
     */
    overrides?: Object | undefined;

    /**
     * If not overridden, an error will throw
     *
     * err.code can be:
     *  - "PKG_NOT_INSTALLED" (a Bower package was not found)
     *  - "BOWER_COMPONENTS_MISSING" (cannot find the `bower_components` directory)
     */
    onError?: ((err: Error) => void) | undefined;

    /**
     * @param {string} filePath name of file that was updated
     */
    onFileUpdated?: ((filePath: string) => void) | undefined;

    /**
     * @param {FileObject} fileObject
     */
    onPathInjected?: ((fileObject: FileObject) => void) | undefined;

    /**
     * @param {string} pkg name of bower package without main
     */
    onMainNotFound?: ((pkg: string) => void) | undefined;

    fileTypes?: FileTypes | undefined;
}

interface FileObject {
    /**
     * type of wiredep block ('js', 'css', etc)
     */
    block: string;
    /**
     * name of file that was updated
     */
    file: string;
    /**
     * path to file that was injected
     */
    path: string;
}

interface FileTypes {
    fileExtension: {
        /**
         *  match the beginning-to-end of a bower block in this type of file
         */
        block: RegExp;
        detect: {
            /**
             * match the way this type of file is included
             */
            typeOfBowerFile: RegExp;
        };
        replace: {
            /**
             * <format for this {{filePath}} to be injected>
             */
            typeOfBowerFile: string;
            /**
             * @example
             *   return '<script class="random-' + Math.random() + '" src="' + filePath + '"></script>'
             */
            anotherTypeOfBowerFile: (filePath: string) => string;
        };
    };

    // defaults:
    html: {
        /**
         * @example
         *  /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi
         */
        block: RegExp;

        detect: {
            /**
             * @example
             *  /<script.*src=['"]([^'"]+)/gi
             */
            js: RegExp;
            /**
             * @example
             *  /<link.*href=['"]([^'"]+)/gi
             */
            css: RegExp;
        };

        replace: {
            /**
             * @example
             *  '<script src="{{filePath}}"></script>'
             */
            js: string;
            /**
             * @example
             *  '<link rel="stylesheet" href="{{filePath}}" />'
             */
            css: string;
        };
    };

    jade: {
        /**
         * @example
         *  /(([ \t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi
         */
        block: RegExp;
        detect: {
            /**
             * @example
             *  /script\(.*src=['"]([^'"]+)/gi
             */
            js: RegExp;
            /**
             * @example
             *  /link\(.*href=['"]([^'"]+)/gi
             */
            css: RegExp;
        };

        replace: {
            /**
             * @example
             *  'script(src=\'{{filePath}}\')'
             */
            js: string;
            /**
             * @example
             *  'link(rel=\'stylesheet\', href=\'{{filePath}}\')'
             */
            css: string;
        };
    };

    less: {
        /**
         * @example
         *  /(([ \t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi
         */
        block: RegExp;
        detect: {
            /**
             * @example
             *  /@import\s['"](.+css)['"]/gi
             */
            css: RegExp;
            /**
             * @example
             *  /@import\s['"](.+less)['"]/gi
             */
            less: RegExp;
        };

        replace: {
            /**
             * @example
             *  '@import "{{filePath}}";'
             */
            css: string;
            /**
             * @example
             *  '@import "{{filePath}}";'
             */
            less: string;
        };
    };

    scss: {
        /**
         * @example
         *  /(([ \t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi
         */
        block: RegExp;
        detect: {
            /**
             * @example
             *  /@import\s['"](.+css)['"]/gi
             */
            css: RegExp;
            /**
             * @example
             *  /@import\s['"](.+sass)['"]/gi
             */
            sass: RegExp;
            /**
             * @example
             *  /@import\s['"](.+scss)['"]/gi
             */
            scss: RegExp;
        };
        replace: {
            /**
             * @example
             *  '@import "{{filePath}}";'
             */
            css: string;
            /**
             * @example
             *  '@import "{{filePath}}";'
             */
            sass: string;
            /**
             * @example
             *  '@import "{{filePath}}";'
             */
            scss: string;
        };
    };

    styl: {
        /**
         * @example
         *  /(([ \t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi
         */
        block: RegExp;

        detect: {
            /**
             * @example
             *  /@import\s['"](.+css)['"]/gi
             */
            css: RegExp;
            /**
             * @example
             *   /@import\s['"](.+styl)['"]/gi
             */
            styl: RegExp;
        };
        replace: {
            /**
             * @example
             *  '@import "{{filePath}}"'
             */
            css: string;
            /**
             * @example
             *  '@import "{{filePath}}"'
             */
            styl: string;
        };
    };

    yaml: {
        /**
         * @example
         *  /(([ \t]*)#\s*bower:*(\S*))(\n|\r|.)*?(#\s*endbower)/gi
         */
        block: RegExp;

        detect: {
            /**
             * @example
             *  /-\s(.+js)/gi
             */
            js: RegExp;
            /**
             * @example
             *  /-\s(.+css)/gi
             */
            css: RegExp;
        };

        replace: {
            /**
             * @example
             *  '- {{filePath}}'
             */
            js: string;
            /**
             * @example
             *  '- {{filePath}}'
             */
            css: string;
        };
    };
}

export = Wiredep;
