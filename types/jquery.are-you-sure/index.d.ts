/// <reference types="jquery" />

/**Options available to control dirty form checking*/
interface AreYouSureOptions {
    /**Message to show when attempting to quit a dirty form without saving*/
    message?: string | undefined;

    /**Class to assign to the form when dirty*/
    dirtyClass?: string | undefined;

    /**Callback when form is found to be dirty - allows control of submit/reset buttons etc*/
    change?: Function | undefined;

    /**Jquery selector to use to find input elements*/
    fieldSelector?: string | undefined;

    /**Make Are-You-Sure "silent" by disabling the warning message*/
    silent?: boolean | undefined;
}

interface AreYouSure {
    (): JQuery;
    (options: AreYouSureOptions): JQuery;
}

interface JQuery {
    areYouSure: AreYouSure;
}
