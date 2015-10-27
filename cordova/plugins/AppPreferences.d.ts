// Type definitions for Apache Cordova App Preferences plugin
// Project: https://github.com/apla/me.apla.cordova.app-preferences
// Definitions by: Pascal Vantrepote
// Definitions: https://github.com/pvantrepote/DefinitelyTyped

declare var plugins: Plugins;

interface Plugins {

    appPreferences: AppPreferences
}

/**
 * The plugin Store and fetch application preferences using platform facilities. Compatible with Cordova 3+
 */
interface AppPreferences {
	
    // fetch value by key (value will be delivered through "ok" callback)
    fetch(
        onSuccess: (value: any) => void,
        onError: (message: string) => void,
        key: string
        ): void;
    
    // fetch value by key from dict (see notes)
    fetch(
        onSuccess: (value: any) => void,
        onError: (message: string) => void,
        dict: string,
        key: string
        ): void;
	
    // store key => value pair
    store(
        onSuccess: (value: any) => void,
        onError: (message: string) => void,
        key: string,
        value: any
        ): void;
    
    // store key => value pair in dict (see notes)
    store(
        onSuccess: (value: any) => void,
        onError: (message: string) => void,
        dict: string,
        key: string,
        value: any
        ): void;
    
    // remove value by key
    remove(
        onSuccess: (value: any) => void,
        onError: (message: string) => void,
        key: string
        ): void;
        
    // show application preferences
    show(
        onSuccess: (value: any) => void,
        onError: (message: string) => void
    ) :void;
}