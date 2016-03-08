// Type definitions for FileSaver.js
// Project: https://github.com/eligrey/FileSaver.js/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * @summary Interface for "saveAs" function.
 * @author  Cyril Schumacher
 * @version 1.0
 */
interface FileSaver {
    (
        /**
         * @summary Data.
         * @type {Blob}
         */
        data: Blob,
        
        /**
         * @summary File name.
         * @type {DOMString}
         */
	 filename: string,

	 /**
	  * @summary Disable Unicode text encoding hints or not.
	  * @type {boolean}
	  */
	 disableAutoBOM?: boolean
    ): void
}

declare var saveAs: FileSaver;
