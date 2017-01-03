// Type definitions for html-webpack-template 6.0
// Project: https://github.com/jaketrent/html-webpack-template
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Config as HtmlWebpackPluginConfig } from 'html-webpack-plugin';

export = HtmlWebpackTemplate;

declare const HtmlWebpackTemplate: string;

declare namespace HtmlWebpackTemplate {
    export interface GoogleAnalyticsConfig {
        trackingId: string;
        // Log a pageview event after the analytics code loads.
        pageViewOnLoad?: boolean;
    }

    export interface Attributes {
        [name: string]: any;
    }

    type Resource = string | Attributes;

    /**
    * string: value is assigned to the href attribute and the rel attribute is
    *         set to "stylesheet"
    *
    * object: properties and values are used as the attribute names and values,
    *         respectively:
    */
    export type Link = Resource;

    /**
    * string: value is assigned to the src attribute and the type attribute is
    *         set to "text/javascript";
    *
    * object: properties and values are used as the attribute names and values,
    *         respectively.
    */
    export type Script = Resource;

    export interface Config extends HtmlWebpackPluginConfig {
        /**
        * Set to false. Controls asset addition to the template. This template
        * takes care of that.
        */
        inject: false;

        // Specify this module's index.ejs file.
        template: string;

        // The <div> element id on which you plan to mount a JavaScript app.
        appMountId?: string;

        // An array of application element ids.
        appMountIds?: string[];

        /**
        * Adjust the URL for relative URLs in the document (MDN).
        * https://developer.mozilla.org/en/docs/Web/HTML/Element/base
        */
        baseHref?: string;

        /**
        * Insert the webpack-dev-server hot reload script at this
        * host:port/path; e.g., http://localhost:3000.
        */
        devServer?: string;

        // Track usage of your site via Google Analytics.
        googleAnalytics?: GoogleAnalyticsConfig;

        // Array of <link> elements.
        links?: Link[];

        // Array of objects containing key value pairs to be included as meta tags.
        meta?: Attributes[];

        // Sets appropriate meta tag for page scaling.
        mobile?: boolean;

        /**
        * For use with inline-manifest-webpack-plugin.
        *
        * https://github.com/szrenwei/inline-manifest-webpack-plugin
        */
        inlineManifestWebpackName?: string;

        // Array of external script imports to include on page.
        scripts?: Script[];

        // Object that defines data you need to bootstrap a JavaScript app.
        window?: {};
    }
}
