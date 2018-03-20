// Type definitions for jquery.are-you-sure.js
// Project: https://github.com/codedance/jquery.AreYouSure
// Definitions by: Jon Egerton <https://github.com/jonegerton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

/**Options available to control dirty form checking*/
interface AreYouSureOptions {
    
    /**Message to show when attempting to quit a dirty form without saving*/
    message?: string;

    /**Class to assign to the form when dirty*/
    dirtyClass?: string;
    
    /**Callback when form is found to be dirty - allows control of submit/reset buttons etc*/
    change?: Function;
    
    /**Jquery selector to use to find input elements*/
    fieldSelector?: string;
	
	/**Make Are-You-Sure "silent" by disabling the warning message*/
	silent?: boolean;
}

interface AreYouSure {
	(): JQuery;
    (options: AreYouSureOptions): JQuery;
}

interface JQuery {
    areYouSure: AreYouSure;
}
