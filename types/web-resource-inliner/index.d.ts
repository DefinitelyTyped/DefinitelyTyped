// Type definitions for web-resource-inliner 4.2
// Project: https://github.com/jrit/web-resource-inliner#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { CoreOptions, RequiredUriUrl } from 'request';

export function html(options: Options, callback: Callback): string;
export function css(options: Options, callback: Callback): string;

export type Callback = (error: any, result: any) => void;

export interface Options {
    /**
     * This is the HTML or CSS content to be inlined, you should provide HTML to the html() method and CSS to the css() method or you will get errors or garbage output.
     */
    fileContent: string;
    /**
     * Sets the attribute that is used to include/exclude specific resources based on the default behavior for the resource type.
     *
     * For example, if scripts is set to false, an individual script can be inlined by adding the attribute to the script tag like <script src="myscript.js" data-inline></script>.
     * On the other hand, if images are set to be inlined by default,
     * a specific image can be excluded by adding -ignore to the end of the inlineAttribute like <img src="myimg.png" data-inline-ignore />.
     *
     * In CSS, a comment is required at the end of the line to perform the same thing, such as \/*data-inline*\/ or \/*data-inline-ignore*\/.
     *
     * @default "data-inline"
     */
    inlineAttribute?: string | undefined;
    /**
     * When true, inline images unless they have an exclusion attribute (see inlineAttribute option).
     *
     * When false, exclude images unless they have an inclusion attribute (see inlineAttribute option).
     *
     * When a number, inline images only when the base64 content size is less than the number of KBs.
     *
     * For example, the default is to only inline images less than 8KB.
     *
     * @default 8
     */
    images?: boolean | number | undefined;
    /**
     * When true, inline SVG <use> unless they have an exclusion attribute (see inlineAttribute option).
     *
     * When false, exclude SVG <use> unless they have an inclusion attribute (see inlineAttribute option).
     *
     * When a number, inline SVG <use> only when the content size is less than the number of KBs.
     *
     * For example, the default is to only inline SVGs less than 8KB.
     *
     * @default 8
     */
    svgs?: boolean | number | undefined;
    /**
     * When true, inline scripts unless they have an exclusion attribute (see inlineAttribute option).
     *
     * When false, exclude scripts unless they have an inclusion attribute (see inlineAttribute option).
     *
     * When a number, inline scripts only when the base64 content size is less than the number of KBs.
     *
     * @default true
     */
    scripts?: boolean | number | undefined;
    /**
     * When true, inline stylesheet links unless they have an exclusion attribute (see inlineAttribute option).
     *
     * When false, exclude stylesheet links unless they have an inclusion attribute (see inlineAttribute option).
     *
     * When a number, inline stylesheet links only when the base64 content size is less than the number of KBs.
     *
     * @default true
     */
    links?: boolean | number | undefined;
    /**
     * Describes the path relationship between where web-resource-inliner is running and what the relative paths in fileContent or href/src urls refer to.
     *
     * For example, the tests cases in this package are in test/cases/ so their relative paths start by referring to that folder,
     * but the root of this project and where npm test runs from is 2 folders up, so relativeTo is set to test/cases/ in test/spec.js.
     * Likewise, with href="content.css" and a relativeTo of https://github.com/ the resource retrieved would be https://github.com/content.css.
     *
     * @default ""
     */
    relativeTo?: string | undefined;
    /**
     * Describes the path relationship between CSS content and the context it will be loaded in.
     *
     * For example, when a CSS file contains url(some-file.png) and the file is moved from a location in a folder like /css to /
     * then the path to the image needs to be changed to url(css/some-file.png).
     * In this case, rebaseRelativeTo would be css. You probably don't want to set this when you are using html().
     *
     * @default ""
     */
    rebaseRelativeTo?: string | undefined;
    /**
     * When strict is true, a missing resource will cause the inliner to halt and return an error in the callback.
     *
     * The default behavior is to log a warning to the console and continue inlining with the available resources, which is more similar to how a web page behaves.
     *
     * @default false
     */
    strict?: boolean | undefined;
    /**
     * Allows to adjust issued requests.
     *
     * E.g., add authentication tokens to requested URLs.
     *
     * The function is called with the request options object as its parameter.
     *
     * It can modify this object or return a new one.
     *
     * See the [list of available options](https://www.npmjs.com/package/request#request-options-callback).
     */
    requestTransform?: ((
        requestOptions: RequiredUriUrl & CoreOptions
    ) => RequiredUriUrl & CoreOptions) | undefined;
    /**
     * Allows to make changes to scripts before they are inlined, such as minifying.
     *
     * Callback is standard node error first, second argument is transformed value.
     */
    scriptTransform?: ((content: string, done: Callback) => any) | undefined;
    /**
     * Allows to make changes to links before they are inlined, such as CSS pre-and-post-processors.
     *
     * Callback is standard node error first, second argument is transformed value.
     */
    linkTransform?: ((content: string, done: Callback) => any) | undefined;
}
