export declare type BoolTypes = 'OR' | 'AND';
export declare type ConfigItem = {
    boost: number;
    bool: BoolTypes;
    expand: boolean;
};
export interface Config extends ConfigItem {
    fields?: {
        [index: string]: ConfigItem;
    };
}
export declare class Configuration {
    config: Config;
    /**
      * elasticlunr.Configuration is used to analyze the user search configuration.
      *
      * By elasticlunr.Configuration user could set query-time boosting, boolean model in each field.
      *
      * Currently configuration supports:
      * 1. query-time boosting, user could set how to boost each field.
      * 2. boolean model chosing, user could choose which boolean model to use for each field.
      * 3. token expandation, user could set token expand to True to improve Recall. Default is False.
      *
      * Query time boosting must be configured by field category, "boolean" model could be configured
      * by both field category or globally as the following example. Field configuration for "boolean"
      * will overwrite global configuration.
      * Token expand could be configured both by field category or golbally. Local field configuration will
      * overwrite global configuration.
      *
      * configuration example:
      * {
      *   fields:{
      *     title: {boost: 2},
      *     body: {boost: 1}
      *   },
      *   bool: "OR"
      * }
      *
      * "bool" field configuation overwrite global configuation example:
      * {
      *   fields:{
      *     title: {boost: 2, bool: "AND"},
      *     body: {boost: 1}
      *   },
      *   bool: "OR"
      * }
      *
      * "expand" example:
      * {
      *   fields:{
      *     title: {boost: 2, bool: "AND"},
      *     body: {boost: 1}
      *   },
      *   bool: "OR",
      *   expand: true
      * }
      *
      * "expand" example for field category:
      * {
      *   fields:{
      *     title: {boost: 2, bool: "AND", expand: true},
      *     body: {boost: 1}
      *   },
      *   bool: "OR"
      * }
      *
      * setting the boost to 0 ignores the field (this will only search the title):
      * {
      *   fields:{
      *     title: {boost: 1},
      *     body: {boost: 0}
      *   }
      * }
      *
      * then, user could search with configuration to do query-time boosting.
      * idx.search('oracle database', {fields: {title: {boost: 2}, body: {boost: 1}}});
      *
      *
      * @constructor
      *
      * @param {String} config user configuration
      * @param {Array} fields fields of index instance
      * @module
      */
    constructor(config: string, fields: any[]);
    /**
     * Build default search configuration.
     *
     * @param {string[]} fields fields of index instance
     */
    buildDefaultConfig(fields: string[]): void;
    /**
     * Build user configuration.
     *
     * @param {JSON} config User JSON configuratoin
     * @param {string[]} fields fields of index instance
     */
    buildUserConfig(config: Config, fields: string[]): void;
    /**
     * Add all fields to user search configuration.
     *
     * @param {string} bool Boolean model
     * @param {boolean} expand Expand model
     * @param {Array} fields fields of index instance
     */
    addAllFields2UserConfig(bool: BoolTypes, expand: boolean, fields: string[]): void;
    /**
     * get current user configuration
     */
    get(): Config;
    /**
     * reset user search configuration.
     */
    reset(): void;
}
