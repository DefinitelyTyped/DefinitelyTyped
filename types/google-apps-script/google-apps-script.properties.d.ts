// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
  export module Properties {
    /**
     * The properties object acts as the interface to access user, document, or script properties.
     *  The specific property type depends on which of the three methods of
     *  PropertiesService the script called:
     *  PropertiesService.getDocumentProperties(),
     *  PropertiesService.getUserProperties(), or
     *  PropertiesService.getScriptProperties(). Properties cannot be shared between scripts. For
     *  more information about property types, see the
     *  guide to the Properties service.
     */
    export interface Properties {
      deleteAllProperties(): Properties;
      deleteProperty(key: string): Properties;
      getKeys(): string[];
      getProperties(): Object;
      getProperty(key: string): string | null;
      setProperties(properties: Object): Properties;
      setProperties(properties: Object, deleteAllOthers: boolean): Properties;
      setProperty(key: string, value: string): Properties;
    }

    /**
     * Allows scripts to store simple data in key-value pairs scoped to one script, one user of a
     *  script, or one document in which an add-on is used. Properties cannot be shared between scripts.
     *  For more information about when to use each type of property, see the
     *  guide to the Properties service.
     *
     *      // Sets three properties of different types.
     *      var documentProperties = PropertiesService.getDocumentProperties();
     *      var scriptProperties = PropertiesService.getScriptProperties();
     *      var userProperties = PropertiesService.getUserProperties();
     *
     *      documentProperties.setProperty('DAYS_TO_FETCH', '5');
     *      scriptProperties.setProperty('SERVER_URL', 'http://www.example.com/MyWeatherService/');
     *      userProperties.setProperty('DISPLAY_UNITS', 'metric');
     */
    export interface PropertiesService {
      getDocumentProperties(): Properties;
      getScriptProperties(): Properties;
      getUserProperties(): Properties;
    }

    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * Script Properties are key-value pairs stored by a script in a persistent store. Script Properties
     *  are scoped per script, regardless of which user runs the script.
     */
    export interface ScriptProperties {
      deleteAllProperties(): ScriptProperties;
      deleteProperty(key: string): ScriptProperties;
      getKeys(): string[];
      getProperties(): Object;
      getProperty(key: string): string | null;
      setProperties(properties: Object): ScriptProperties;
      setProperties(properties: Object, deleteAllOthers: boolean): ScriptProperties;
      setProperty(key: string, value: string): ScriptProperties;
    }

    /**
     *
     * Deprecated. This class is deprecated and should not be used in new scripts.
     * User Properties are key-value pairs unique to a user. User Properties are scoped per user; any
     *  script running under the identity of a user can access User Properties for that user only.
     */
    export interface UserProperties {
      deleteAllProperties(): UserProperties;
      deleteProperty(key: string): UserProperties;
      getKeys(): string[];
      getProperties(): Object;
      getProperty(key: string): string | null;
      setProperties(properties: Object): UserProperties;
      setProperties(properties: Object, deleteAllOthers: boolean): UserProperties;
      setProperty(key: string, value: string): UserProperties;
    }

  }
}

declare var PropertiesService: GoogleAppsScript.Properties.PropertiesService;
declare var ScriptProperties: GoogleAppsScript.Properties.ScriptProperties;
declare var UserProperties: GoogleAppsScript.Properties.UserProperties;
