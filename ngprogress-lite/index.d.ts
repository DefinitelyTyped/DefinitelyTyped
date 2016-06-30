// Type definitions for ngprogress-lite
// Project: https://github.com/voronianski/ngprogress-lite
// Definitions by: Luke Forder <https://github.com/LukeForder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as angular from 'angularjs';

declare module 'angularjs' {
    export namespace progressLite {

        export interface INgProgressLite {
            set(num: number): INgProgressLite;
            get(): number;
            start(): INgProgressLite;
            inc(amount?: number): INgProgressLite;
            done(): void;
        }

        export interface IConfigurationOptions {
            minimum: number;
            speed: number;
            ease: string;
            trickleRate: number;
            trickleSpeed: number;
            template: string;
        }

        export interface INgProgressLiteProvider {
            settings: IConfigurationOptions;
        }
    }
}
