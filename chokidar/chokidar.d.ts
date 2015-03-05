// Type definitions for chokidar.js
// Project: https://github.com/paulmillr/chokidar
// Definitions by: Arnaud Tournier <https://github.com/ltearno>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * @summary Module definition for *chokidar*
 * @author  Arnaud Tournier
 * @version 0.9
 */
declare module "chokidar" {
    interface Watcher {
        add(path:string):void;
        add(paths:string[]):void;
        unwatch(path:string):void;
        close():void;

        on(event: string, callback: { (path:string): void });

        on(event: 'all', callback: { (event, path: string): void });
        on(event: 'addDir', callback: { (path: string): void });
        on(event: 'change', callback: { (path: string, stats?: any): void });
        on(event: 'unlink', callback: { (path: string): void });
        on(event: 'unlinkDir', callback: { (path: string): void });
        on(event: 'error', callback: { (error: any): void });
        on(event: 'ready', callback: { (): void });
        on(event: 'raw', callback: { (event:any, path:string, details:any): void });
    }

    export function watch(path: string, options?: { ignored?: RegExp; persistent?: boolean; }): Watcher;
}