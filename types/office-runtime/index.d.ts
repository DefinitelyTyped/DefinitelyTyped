// Type definitions for office-runtime
// Project: http://dev.office.com/
// Definitions by: Michael Zlatskovsky <https://github.com/Zlatkovsky>, Michelle Scharlock <https://github.com/mscharlock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 2.4

/*
office-runtime
Copyright (c) Microsoft Corporation
*/

/*
OfficeRuntime defines a new runtime which can be used by Excel custom functions.
*/
declare namespace OfficeRuntime {
    /*
    A function which allows you to use a dialog box in Office Runtime, which can be used by Excel custom functions.
    */
    function displayWebDialog(url: string, options: DisplayWebDialogOptions): Promise<Dialog>;
    
    /*
    * Defines the AsyncStorage constant which allows asynchronous, global, and persistent key-value storage which can be used by Excel custom functions. 
    */
    
    const AsyncStorage: AsyncStorage;
  
    // tslint:disable-next-line:interface-name
       /*
       * Asynchronous, global, and persistent key-value storage that can be used by Excel custom functions.
       * @beta
       *
       * @remarks 
       * Each add-in instance has its own storage partition, unique to a user and their device. 
       * 
       * The default amount of total storage allowed per add-in is 5MB. 
       * 
       * Each method listed below returns a Promise object. 
       * 
       */
    interface AsyncStorage {
      /*
       * @beta
       * Retrieves an object based on a key and invokes a callback when finished. Returns a Promise. 
       *   
       */
      getItem(key: string, callback?: (error?: Error, result?: string) => void): Promise<string>;
       /*
       * @beta
       * Assigns the value for a key-value pair and invokes a callback when finished. Returns a Promise.  
       *
       */
      setItem(key: string, value: string, callback?: (error?: Error) => void): Promise<void>;
      /*
       * @beta
       * Removes an item for specified key and invokes a callback when finished. Returns a Promise. 
       *  
       *
       */
      removeItem(key: string, callback?: (error?: Error) => void): Promise<void>;
      /*
       * @beta
       * Erases all AsyncStorage. Returns a Promise. 
       *
       */
      clear(callback?: (error?: Error) => void): Promise<void>;
       /*
       * @beta
       * Returns a Promise with all keys for your custom function. 
       *
       */
      getAllKeys(callback?: (error?: Error, keys?: string[]) => void): Promise<string[]>;
       /*
       * @beta
       * Stores multiple key-value pairs in one batch. Returns a Promise. When a key doesn't exist, returns null. 
       *
       */
      multiSet(keyValuePairs: string[][], callback?: (errors?: Error[]) => void): Promise<void>;
       /*
       * @beta
       * Deletes a batch of keys, specified in the `keys` array.
       *
       */
      multiRemove(keys: string[], callback?: (errors?: Error[]) => void): Promise<void>;/**
      /*
      * @beta
      * Fetches a batch of keys, specified in the `keys` array. When a key doesn't exist, returns null. 
      * 
      */
      multiGet(keys: string[], callback?: (errors?: Error[], result?: string[][]) => void): Promise<string[][]>;
    }
  
    /*
    * @beta
    * Object representing the dialog box. 
    *
    */
    interface Dialog {
       /*
       * @beta
       * Method that closes a dialog box. 
       */
      close(): Promise<void>;
    }
  
       /*
       *
       * Provides options for how a dialog is displayed. 
       *
       */
    interface DisplayWebDialogOptions {
      /*
       * @beta
       * Determines whether the dialog box displays as a popup (false) or within an IFrame (true). This setting is only applicable to custom functions running on Excel Online. 
       *
       */
      displayInIFrame?: boolean;
      /*
       * @beta
       * Defines the height of the dialog box as a percentage of the current display.
       *
       */
      height?: string;
  
      /*
       * @beta
       * Defines the width of the dialog box as a percentage of the current display. 
       *
       */
      width?: string;
 
      /*
       * @beta
       * Callback that is run when the dialog box sends a message to its parent.
       *
       *
       */
      onMessage?: (message: string, dialog?: Dialog) => void;
  
      /*
       * @beta
       * Callback that is run when the dialog box is closed.
       *
       * 
       */
      onClose?: () => void;
  
      /*
       * @beta
       * Callback that is run when the dialog box sends an error.
       *
       * 
       */
      onRuntimeError?: (error: Error, dialog?: Dialog) => void;
    }
  }
