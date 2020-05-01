// Type definitions for non-npm package Node.js 11.15
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
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Ivan Sieder <https://github.com/ivansieder>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Module_ extends NodeJS.Module {}

export = Module_;

declare global {
    // TODO: change to `type NodeRequireFunction = (id: string) => any;` in next mayor version.
    interface NodeRequireFunction {
        (id: string): any;
    }

    interface NodeRequire extends NodeRequireFunction {
        resolve: RequireResolve;
        cache: any;
        /**
         * @deprecated
         */
        extensions: NodeExtensions;
        main: Module_ | undefined;
    }

    interface RequireResolve {
        (id: string, options?: { paths?: string[]; }): string;
        paths(request: string): string[] | null;
    }

    interface NodeExtensions {
        '.js': (m: Module_, filename: string) => any;
        '.json': (m: Module_, filename: string) => any;
        '.node': (m: Module_, filename: string) => any;
        [ext: string]: (m: Module_, filename: string) => any;
    }

    var require: NodeRequire;

    interface NodeModule {
        exports: any;
        require: NodeRequireFunction;
        id: string;
        filename: string;
        loaded: boolean;
        parent: Module_ | null;
        children: Module_[];
        /**
         * @since 11.14.0
         *
         * The directory name of the module. This is usually the same as the path.dirname() of the module.id.
         */
        path: string;
        paths: string[];
    }

    var module: Module_;

    // Same as module.exports
    var exports: Module_['exports'];

    namespace NodeJS {
        class Module {
            static runMain(): void;
            static wrap(code: string): string;
            static createRequireFromPath(path: string): (path: string) => any;
            static builtinModules: string[];

            static Module: typeof Module_;

            exports: any;
            require: NodeRequireFunction;
            id: string;
            filename: string;
            loaded: boolean;
            parent: Module_ | null;
            children: Module_[];
            paths: string[];

            constructor(id: string, parent?: Module_);
        }
    }
}

declare namespace Module_ {
    export import Module = Module_;
}
