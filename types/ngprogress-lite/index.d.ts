import * as angular from "angular";

declare module "angular" {
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
