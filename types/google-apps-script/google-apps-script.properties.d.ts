/// <reference path="google-apps-script.types.d.ts" />

declare namespace GoogleAppsScript {
    namespace Properties {
        /**
         * The properties object acts as the interface to access user, document, or script properties. The
         * specific property type depends on which of the three methods of PropertiesService the
         * script called: PropertiesService.getDocumentProperties(), PropertiesService.getUserProperties(), or PropertiesService.getScriptProperties().
         * Properties cannot be shared between scripts. For more information about property types, see the
         * guide to the Properties service.
         */
        interface Properties {
            deleteAllProperties(): Properties;
            deleteProperty(key: string): Properties;
            getKeys(): string[];
            getProperties(): { [key: string]: string };
            getProperty(key: string): string | null;
            setProperties(properties: { [key: string]: string }): Properties;
            setProperties(properties: { [key: string]: string }, deleteAllOthers: boolean): Properties;
            setProperty(key: string, value: string): Properties;
        }
        /**
         * Allows scripts to store simple data in key-value pairs scoped to one script, one user of a
         * script, or one document in which an add-on is used. Properties cannot be shared between scripts.
         * For more information about when to use each type of property, see the guide to the Properties service.
         *
         *     // Sets three properties of different types.
         *     var documentProperties = PropertiesService.getDocumentProperties();
         *     var scriptProperties = PropertiesService.getScriptProperties();
         *     var userProperties = PropertiesService.getUserProperties();
         *
         *     documentProperties.setProperty('DAYS_TO_FETCH', '5');
         *     scriptProperties.setProperty('SERVER_URL', 'http://www.example.com/MyWeatherService/');
         *     userProperties.setProperty('DISPLAY_UNITS', 'metric');
         */
        interface PropertiesService {
            getDocumentProperties(): Properties;
            getScriptProperties(): Properties;
            getUserProperties(): Properties;
        }
        /**
         * Deprecated. This class is deprecated and should not be used in new scripts.
         * Script Properties are key-value pairs stored by a script in a persistent store. Script Properties
         * are scoped per script, regardless of which user runs the script.
         */
        interface ScriptProperties {
            /** @deprecated DO NOT USE */ deleteAllProperties(): ScriptProperties;
            /** @deprecated DO NOT USE */ deleteProperty(key: string): ScriptProperties;
            /** @deprecated DO NOT USE */ getKeys(): string[];
            /** @deprecated DO NOT USE */ getProperties(): { [key: string]: string };
            /** @deprecated DO NOT USE */ getProperty(key: string): string | null;
            /** @deprecated DO NOT USE */ setProperties(properties: { [key: string]: string }): ScriptProperties;
            /** @deprecated DO NOT USE */ setProperties(
                properties: { [key: string]: string },
                deleteAllOthers: boolean,
            ): ScriptProperties;
            /** @deprecated DO NOT USE */ setProperty(key: string, value: string): ScriptProperties;
        }
        /**
         * Deprecated. This class is deprecated and should not be used in new scripts.
         * User Properties are key-value pairs unique to a user. User Properties are scoped per user; any
         * script running under the identity of a user can access User Properties for that user only.
         */
        interface UserProperties {
            /** @deprecated DO NOT USE */ deleteAllProperties(): UserProperties;
            /** @deprecated DO NOT USE */ deleteProperty(key: string): UserProperties;
            /** @deprecated DO NOT USE */ getKeys(): string[];
            /** @deprecated DO NOT USE */ getProperties(): { [key: string]: string };
            /** @deprecated DO NOT USE */ getProperty(key: string): string | null;
            /** @deprecated DO NOT USE */ setProperties(properties: { [key: string]: string }): UserProperties;
            /** @deprecated DO NOT USE */ setProperties(
                properties: { [key: string]: string },
                deleteAllOthers: boolean,
            ): UserProperties;
            /** @deprecated DO NOT USE */ setProperty(key: string, value: string): UserProperties;
        }
    }
}

declare var PropertiesService: GoogleAppsScript.Properties.PropertiesService;
declare var ScriptProperties: GoogleAppsScript.Properties.ScriptProperties;
declare var UserProperties: GoogleAppsScript.Properties.UserProperties;
