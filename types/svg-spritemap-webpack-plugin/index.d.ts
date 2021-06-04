// Type definitions for svg-spritemap-webpack-plugin 3.9
// Project: https://github.com/cascornelissen/svg-spritemap-webpack-plugin
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7
import { Compiler, WebpackPluginInstance } from 'webpack';

declare namespace SVGSpritemapPlugin {
    /**
     * @see {@link https://github.com/cascornelissen/svg-spritemap-webpack-plugin/blob/master/docs/options.md#options}
     */
    interface Options {
        /**
         * The input object contains the configuration for the input of the plugin.
         */
        input?: {
            options?: object;
        };
        /**
         * The output object contains the configuration for the main output (SVG) of the plugin.
         */
        output?: {
            /**
             * Filename of the generated file (located at the webpack output.path), [hash] and [contenthash] are supported.
             */
            filename?: string;
            svg?: {
                /**
                 * Whether to include the width and height attributes on the root SVG element.
                 * The default value for this option is based on the value of the sprite.generate.use option but when specified will always overwrite it.
                 */
                sizes?: boolean;
            };
            chunk?: {
                /**
                 * Name of the chunk that will be generated.
                 */
                name?: string;
                /**
                 * Whether to keep the chunk after it's been emitted by webpack.
                 */
                keep?: boolean;
            };
            /**
             * Whether to include the SVG4Everybody helper in your entries.
             */
            svg4everybody?: boolean | object;
            /**
             * Options object to pass to SVG Optimizer.
             */
            svgo?: boolean | object;
        };
        /**
         * The sprite object contains the configuration for the generated sprites in the output spritemap.
         */
        sprite?: {
            /**
             * @default 'sprite-'
             */
            prefix?: string | ((file: string) => string) | false;
            /**
             * Whether to also prefix any selectors that are generated in the styles file, if enabled.
             * @default false
             */
            prefixStylesSelectors?: boolean;
            /**
             * Function that will be used to transform the filename of each sprite into a valid HTML id
             */
            idify?: (file: string | false) => string;
            /**
             * Amount of pixels added between each sprite to prevent overlap.
             * @default 0
             */
            gutter?: number | false;
            generate?: {
                /**
                 * Whether to generate a <title> element containing the filename if no title is provided in the SVG.
                 */
                title?: boolean;
                symbol?: boolean | string;
                use?: boolean;
                view?: boolean | string;
            };
        };
        styles?:
            | boolean
            | string
            | {
                  filename?: string;
                  format?: 'data' | 'fragment';
                  /**
                   * @default false
                   */
                  keepAttributes?: boolean;
                  variables?: {
                      sprites?: string;
                      sizes?: string;
                      variables?: string;
                      mixin?: string;
                  };
                  /** @default undefined */
                  callback?: (content: string) => string;
              };
    }
}
declare class SVGSpritemapPlugin implements WebpackPluginInstance {
    readonly directories: string[];

    constructor(pattern?: string | string[], options?: SVGSpritemapPlugin.Options);

    apply(compiler: Compiler): void;

    private updateDependencies(): void;
    private getStylesType(styles: object, filename?: string): 'asset' | 'dir' | 'module' | undefined;
    private writeStylesToDisk(styles: object, type: string): void;
    private rewriteAssetsHashes(
        filename: string,
        assets?: object,
        hashes?: string[],
    ): {
        readonly filename: string;
        readonly assets: object;
    };
    private hashFilename(fileaname: string, hashes?: string[]): string;
    private getSpritemapHashes(compilation: any): string[];
    private getStylesHashes(compilation: any): string[];
    private getContentHash(source: string): string;
}

export = SVGSpritemapPlugin;
