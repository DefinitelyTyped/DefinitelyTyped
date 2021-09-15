// Type definitions for ng-showdown 1.1
// Project: https://github.com/showdownjs/ng-showdown#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import angular = require('angular');
import { Converter } from 'showdown';

export as namespace ngShowdown;

export interface ShowdownProvider extends angular.IServiceProvider {
    /**
     * Sets a configuration option
     *
     * @param key Config parameter key
     * @param value Config parameter value
     */
    setOption(key: string, value: any): ShowdownProvider;
    /**
     * Gets the value of the configuration parameter specified by key
     *
     * @param key The config parameter key
     * @returns Returns the value of the config parameter. (or null if the config parameter is not set)
     */
    getOption(key: string): any;
    /**
     * Loads a Showdown Extension
     *
     * @param extensionName The name of the extension to load
     */
    loadExtension(extensionName: string): ShowdownProvider;
    $get(): SDObject;
}

export interface SDObject {
    /**
     * Converts a markdown text into HTML
     *
     * @param markdown The markdown string to be converted to HTML
     * @returns The converted HTML
     */
    makeHtml: Converter['makeHtml'];
    /**
     * Strips a text of it's HTML tags. See https://stackoverflow.com/questions/17289448/angularjs-to-output-plain-text-instead-of-html
     *
     * @param text
     */
    stripHtml(text: string): string;
    /**
     * Gets the value of the configuration parameter of CONVERTER specified by key
     * @param key The config parameter key
     */
    getOption: Converter['getOption'];
    /**
     * Gets the converter configuration params
     */
    getOptions: Converter['getOptions'];
}

/**
 * AngularJS Filter to Strip HTML tags from text
 */
export type StripHtmlFilter = SDObject['stripHtml'];

declare module 'angular' {
    // tslint:disable:interface-name
    interface IFilterService {
        (name: 'stripHtml'): ngShowdown.StripHtmlFilter;
    }
}
