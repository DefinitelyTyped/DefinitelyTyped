// Type definitions for non-npm package Node.js 13.13
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Surasak Chaisurin <https://github.com/Ryan-Willpower>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { URL } from 'url';

interface Module_ extends NodeJS.Module {}

declare namespace Module_ {
    /**
     * @experimental
     */
    function findSourceMap(path: string, error?: Error): SourceMap;
    interface SourceMapPayload {
        file: string;
        version: number;
        sources: string[];
        sourcesContent: string[];
        names: string[];
        mappings: string;
        sourceRoot: string;
    }

    interface SourceMapping {
        generatedLine: number;
        generatedColumn: number;
        originalSource: string;
        originalLine: number;
        originalColumn: number;
    }

    /**
     * @experimental
     */
    class SourceMap {
        readonly payload: SourceMapPayload;
        constructor(payload: SourceMapPayload);
        findEntry(line: number, column: number): SourceMapping;
    }

    export import Module = Module_;
}
declare class Module_ {
    static runMain(): void;
    static wrap(code: string): string;

    /**
     * @deprecated Deprecated since: v12.2.0. Please use createRequire() instead.
     */
    static createRequireFromPath(path: string): NodeRequire;
    static createRequire(path: string | URL): NodeRequire;
    static builtinModules: string[];

    constructor(id: string, parent?: Module_);

    /**
     * Updates all the live bindings for builtin ES Modules to match the properties of the CommonJS exports.
     * It does not add or remove exported names from the ES Modules.
     */
    static syncBuiltinESMExports(): void;
}
export = Module_;

declare global {
    // For backwards compability
    interface NodeRequire extends NodeJS.Require {}
    interface RequireResolve extends NodeJS.RequireResolve {}
    interface NodeModule extends Module_ {}

    var require: NodeRequire;
    var module: Module_;

    // Same as module.exports
    var exports: Module_['exports'];

    namespace NodeJS {
        interface Require {
            (id: string): any;
            resolve: RequireResolve;
            cache: { [key: string]: Module_ | undefined };
            /**
             * @deprecated
             */
            extensions: RequireExtensions;
            main: Module_ | undefined;
        }

        interface RequireResolve {
            (id: string, options?: { paths?: string[]; }): string;
            paths(request: string): string[] | null;
        }

        interface RequireExtensions {
            '.js': (m: Module_, filename: string) => any;
            '.json': (m: Module_, filename: string) => any;
            '.node': (m: Module_, filename: string) => any;
            [key: string]: ((m: Module_, filename: string) => any) | undefined;
        }
        interface Module {
            exports: any;
            require: Require;
            id: string;
            filename: string;
            loaded: boolean;
            /**
             * @since 11.14.0
             *
             * The directory name of the module. This is usually the same as the path.dirname() of the module.id.
             */
            path: string;
            parent: Module_ | null;
            children: Module_[];
            paths: string[];
        }
    }
}
