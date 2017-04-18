// Type definitions for aurelia-history-browser v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/history-browser/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-history.d.ts" />
/// <reference path="./aurelia-pal.d.ts" />
declare module 'aurelia-history-browser' {
  import {
    DOM,
    PLATFORM
  } from 'aurelia-pal';
  import {
    History
  } from 'aurelia-history';
  
  /**
   * Class responsible for handling interactions that should trigger browser history navigations.
   */
  export class LinkHandler {
    
    /**
       * Activate the instance.
       *
       * @param history The BrowserHistory instance that navigations should be dispatched to.
       */
    activate(history: BrowserHistory): void;
    
    /**
       * Deactivate the instance. Event handlers and other resources should be cleaned up here.
       */
    deactivate(): void;
  }
  
  /**
   * The default LinkHandler implementation. Navigations are triggered by click events on
   * anchor elements with relative hrefs when the history instance is using pushstate.
   */
  export class DefaultLinkHandler extends LinkHandler {
    
    /**
       * Creates an instance of DefaultLinkHandler.
       */
    constructor();
    
    /**
       * Activate the instance.
       *
       * @param history The BrowserHistory instance that navigations should be dispatched to.
       */
    activate(history: BrowserHistory): void;
    
    /**
       * Deactivate the instance. Event handlers and other resources should be cleaned up here.
       */
    deactivate(): void;
    
    /**
       * Gets the href and a "should handle" recommendation, given an Event.
       *
       * @param event The Event to inspect for target anchor and href.
       */
    static getEventInfo(event: Event): Object;
    
    /**
       * Finds the closest ancestor that's an anchor element.
       *
       * @param el The element to search upward from.
       */
    static findClosestAnchor(el: Element): Element;
    
    /**
       * Gets a value indicating whether or not an anchor targets the current window.
       *
       * @param target The anchor element whose target should be inspected.
       */
    static targetIsThisWindow(target: Element): boolean;
  }
  
  /**
   * Configures the plugin by registering BrowserHistory as the implementation of History in the DI container.
   * @param config The FrameworkConfiguration object provided by Aurelia.
   */
  export function configure(config: Object): void;
  
  /**
   * An implementation of the basic history API.
   */
  export class BrowserHistory extends History {
    static inject: any;
    
    /**
       * Creates an instance of BrowserHistory
       * @param linkHandler An instance of LinkHandler.
       */
    constructor(linkHandler: LinkHandler);
    
    /**
       * Activates the history object.
       *
       * @param options The set of options to activate history with.
       */
    activate(options?: Object): boolean;
    
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
    navigate(fragment?: string, undefined?: any): boolean;
    
    /**
       * Causes the history state to navigate back.
       */
    navigateBack(): void;
    
    /**
       * Sets the document title.
       */
    setTitle(title: string): void;
  }
}