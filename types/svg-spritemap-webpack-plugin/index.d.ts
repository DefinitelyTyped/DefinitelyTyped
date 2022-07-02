// Type definitions for svg-spritemap-webpack-plugin 4.4
// Project: https://github.com/cascornelissen/svg-spritemap-webpack-plugin
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Compiler, WebpackPluginInstance } from 'webpack';
import { IOptions as GlobOptions } from 'glob';

declare namespace SVGSpritemapPlugin {
    /**
     * @see {@link https://github.com/cascornelissen/svg-spritemap-webpack-plugin/blob/master/docs/options.md#options}
     */
    interface Options {
        /**
         * The input object contains the configuration for the input of the plugin.
         */
        input?: InputOptions | undefined;
        /**
         * The output object contains the configuration for the main output (SVG) of the plugin.
         */
        output?:
            | {
                  /**
                   * Filename of the generated file (located at the webpack output.path), [hash] and [contenthash] are supported.
                   */
                  filename?: string | undefined;
                  svg?:
                      | {
                            attributes?: Record<string, string | number | boolean> | undefined;
                            /**
                             * Whether to include the width and height attributes on the root SVG element.
                             * The default value for this option is based on the value of the sprite.generate.use option but when specified will always overwrite it.
                             */
                            sizes?: boolean | undefined;
                        }
                      | undefined;
                  chunk?:
                      | {
                            /**
                             * Name of the chunk that will be generated.
                             */
                            name?: string | undefined;
                            /**
                             * Whether to keep the chunk after it's been emitted by webpack.
                             */
                            keep?: boolean | undefined;
                        }
                      | undefined;
                  /**
                   * Whether to include the SVG4Everybody helper in your entries.
                   */
                  svg4everybody?: boolean | object | undefined;
                  /**
                   * Options object to pass to SVG Optimizer.
                   */
                  svgo?: boolean | object | undefined;
              }
            | undefined;
        /**
         * The sprite object contains the configuration for the generated sprites in the output spritemap.
         */
        sprite?:
            | {
                  /**
                   * @default 'sprite-'
                   */
                  prefix?: string | ((file: string) => string) | false | undefined;
                  /**
                   * Whether to also prefix any selectors that are generated in the styles file, if enabled.
                   * @default false
                   */
                  prefixStylesSelectors?: boolean | undefined;
                  /**
                   * Function that will be used to transform the filename of each sprite into a valid HTML id
                   */
                  idify?: ((file: string | false) => string) | undefined;
                  /**
                   * Amount of pixels added between each sprite to prevent overlap.
                   * @default 0
                   */
                  gutter?: number | false | undefined;
                  generate?:
                      | {
                            /**
                             * Whether to generate a <title> element containing the filename if no title is provided in the SVG.
                             */
                            title?: boolean | undefined;
                            symbol?: boolean | string | undefined;
                            use?: boolean | undefined;
                            view?: boolean | string | undefined;
                        }
                      | undefined;
              }
            | undefined;
        styles?:
            | boolean
            | string
            | {
                  filename?: string | undefined;
                  format?: 'data' | 'fragment' | undefined;
                  /**
                   * @default false
                   */
                  keepAttributes?: boolean | undefined;
                  variables?:
                      | {
                            sprites?: string | undefined;
                            sizes?: string | undefined;
                            variables?: string | undefined;
                            mixin?: string | undefined;
                        }
                      | undefined;
                  /** @default undefined */
                  callback?: ((content: string) => string) | undefined;
              }
            | undefined;
    }

    interface InputOptions {
        /**
         * Options object to pass to [`glob`](http://npmjs.com/package/glob) to find the sprites.
         */
        options?: GlobOptions | undefined;
        /**
         * Allow the usage of the same input SVG multiple times.
         * This option work well together with the `sprite.idify` option to set a different name in the output file.
         * @default false
         */
        allowDuplicates?: boolean | undefined;
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
