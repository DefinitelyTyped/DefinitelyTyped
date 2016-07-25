// Type definitions for jquery-visible
// Project: https://github.com/customd/jquery-visible
// Definitions by: Andrey Lipatkin <https://github.com/Litee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQuery {
   /**
    * Gets the value of a setting.
    * @param details Which setting to consider.
    * @param callback The callback parameter should be a function that looks like this:
    * function(object details) {...};
    */
	visible(partial?: boolean, hidden?: boolean, direction?: string): boolean;
}
