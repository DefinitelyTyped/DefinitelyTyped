// Type definitions for aurelia-history v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/history/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'aurelia-history' {
  
  /**
   * The options that can be specified as part of a history navigation request.
   */
  export interface NavigationOptions {
    
    /**
       * Replace the existing route.
       */
    replace?: boolean;
    
    /**
       * Trigger the router.
       */
    trigger?: boolean;
  }
  
  /**
   * An abstract base class for implementors of the basic history api.
   */
  /**
   * An abstract base class for implementors of the basic history api.
   */
  export class History {
    
    /**
       * Activates the history object.
       *
       * @param options The set of options to activate history with.
       */
    activate(options: Object): boolean;
    
    /**
       * Deactivates the history object.
       */
    deactivate(): void;
    
    /**
       * Causes a history navigation to occur.
       *
       * @param fragment The history fragment to navigate to.
       * @param options The set of options that specify how the navigation should occur.
       * @return True if navigation occurred/false otherwise.
       */
    navigate(fragment: string, options?: NavigationOptions): boolean;
    
    /**
       * Causes the history state to navigate back.
       */
    navigateBack(): void;
    
    /**
       * Updates the title associated with the current location.
       */
    setTitle(title: string): void;
  }
}