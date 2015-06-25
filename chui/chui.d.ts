// Type definitions for chui v3.8.10
// Project: https://github.com/chocolatechipui/chocolatechip-ui
// Definitions by: Robert Biggs <http://chocolatechip-ui.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 These TypeScript delcarations for ChocolateChip-UI contain interfaces for both jQuery and ChocolateChipJS. Depending on which library you are using, you will get the type interfaces appropriate for it.
*/
/**
 * Interface for ChocolateChipJS.
 */
interface ChocolateChipStatic extends ChuiDetectors {
  /**
   * This method will concatenate strings or values as a cleaner alternative to using the '+' operator.
   *
   * @param string or number A comma separated series of strings to concatenate.
   * @return string
   */
  concat(...string: string[]): string;
  
  
  /**
   * This function replicates normal array iteration with the context first, followed by the index.
   * Usage: $.forEach([1,2,3], function(ctx, idx) { console.log(ctx + "is: " + (idx + 1)) });
   * 
   * @param obj An array-like object. This will usually be an array of HTML elements.
   * @param callback A callback to execute with each iteration of the object.
   * @param args Any extra arguments you wish to pass.
   * @return void
   */
  forEach<T>(obj: T[], callback: (ctx: T, idx?: number) => any, args?: any): any;

  /**
   * Alias for cross-platform events: pointerdown, MSPointerDown, touchstart and mousedown.
   */
  eventStart: ChUIEventInterface;

  /**
   * Alias for cross-platform events: pointerup, MSPointerUp, touchend and mouseup.
   */
  eventEnd: ChUIEventInterface;

  /**
   * Alias for cross-platform events: pointermove, MSPointerMove, touchmove and mousemove.
   */
  eventMove: ChUIEventInterface;

  /**
   * Alias for cross-platform events: pointercancel, MSPointerCancel, touchcancel and mouseout.
   */
  eventCancel: ChUIEventInterface;


  /**
   * Return the version of the current browser.
   *
   * @return string The current browser version.
   */
  browserVersion(): number;

  /**
   * Hide the navigation bar, raising up the content below it.
   */
  UIHideNavBar(): void;

  /**
   * If the navigation bar is hidden, show it, pushing down the content to make room.
   */
  UIShowNavBar(): void;

  /**
   * Determine whether navigation is in progress or not.
   */
  isNavigating: boolean;

  /**
   * Navigate to the article indicated by the provided destination ID. This enters the destination into the navigation history array.
   *
   * param destination An id for the article to navigate to.
   */
  UIGoToArticle(destination: string): void;

  /**
   * Go back to the previous article from whence you came. This resets the navigation history array.
   */
  UIGoBack(): void;

  /**
   * Go back to the article indicated by the provided ID. This is for non-linear back navigation. This will reset the navigation history array to match the current state.
   */
  UIGoBackToArticle(articleID: string): void;

  /**
   * Display a transparent screen over the UI. This takes an optional, decimal-based number for opacity: .5 for 50%.
   *
   * @param opacity The percentage of opacity for the screen.
   */
  UIBlock(opacity?: number): void;

  /**
   * Remove the transparent screen covering the UI.
   */
  UIUnblock(): void;

  /**
   * Create and show a Popup with title and message. Possible options: {id: "#myPopup", title: "My Popup",
   * message: "Woohoo!", cancelButton: "Forget It!", contiueButton: "Whatever", callback: function() {console.log('Blah!');}, empty: false }.
   *
   * param options UIPopupOptions
   */
  UIPopup(options: UIPopupOptions): void;

  /**
   * Create and show a Popover. Options: {id: "#myPopover", title: "Whatever", callback: function() {console.log('Blah!');}}.
   *
   * param options UIPopoverOptions
   */
  UIPopover(options: UIPopoverOptions): void;

  /**
   * Close any currently visible popovers.
   */
  UIPopoverClose(): void;

  /**
   * Create a segmented control: {id: "mySegments", className: "seggie", labels: ["one", "two","three"], selected: 1}
   *
   * param: options UICreateSegmentedOptions
   */
  UICreateSegmented(options: UICreateSegmentedOptions): ChocolateChipElementArray;

  /**
   * Initialize a horiontal or vertical paging control. This uses a segmented control in the navigation bar with a class
   * like "segmented paging horizontal" or "segmented paging vertical". It uses a single article with multiple sections to paginate.
   */
  UIPaging(): void;

  /**
   * Creates a sheet. Minimum option is an id: {id : 'starTrek', listClass :'enterprise', background: 'transparent', handle: false }
   */
  UISheet(options: UISheetOptions): void;

  /**
   * Show a sheet by passing this its ID.
   */
  UIShowSheet(id?: string): void;

  /**
   * Hide any currently displayed sheets.
   */
  UIHideSheet(): void;

  /**
   * The body tag wrapped and ready to use: $.body.css('background-color','orange')
   */
  body: ChocolateChipElementArray;

  /**
   * An array of the navigation history. Do not manipulate this. For examination only. This is used by navigation lists, etc.
   */
  UINavigationHistory: string[];

  /**
   * Creates and initializes a slide out menu. Possible options: {dynamic: true, callback: function() { alert("Woohoo!");}}
   */
  UISlideout: UISlideoutInterface;

  /**
   * Reset the value of the stepper to its defaults at initialization. Pass it a reference to the stepper to reset. It takes a stepper element: $("#myStepper").
   * 
   * @param stepper A stepper to reset.
   */
  UIResetStepper(stepper: ChocolateChipElementArray): void;

  /**
   * Create a switch control. Possible options: { id: '#myId', name: 'fruit.mango', state: 'on', value: 'Mango', checked: 'on', style: 'traditional', callback: function() { alert('hi');}}
   */
  UICreateSwitch(options: UICreateSwitchOptions): void;

  /**
   * Creates a tabbar. On iOS this is at the bottom of the screen. On Android and Windows, it is at the top.
   * Options: {id: 'mySpecialTabbar', tabs: 4, labels: ["Refresh", "Add", "Info", "Downloads", "Favorite"], icons: ["refresh", "add", "info", "downloads", "favorite"], selected: 2 }
   */
  UITabbar(options: UITabbarOptions): void;

  /**
   * Create a search bar for an article. Options: { articleId: '#products', id: 'productSearch', placeholder: 'Find a product', results: 5 }
   */
  UISearch(options: UISearchOptions): void;

  /**
   * Create and initialize a swipable carousel. Options: {target : '#myCarousel', panels: ['<p>stuff</p>','<p>more</p>'], loop: true, pagination: true }
   */
  UISetupCarousel(options: UISetupCarouselOptions): void;

  /**
   * Bind the values of data-models to elements with data-controllers: <input id='myText' data-controller='input-value' type='text'></li><h3 data-model='input-value'></h3>.
   * You can bind a single model to its controller by providing its name as the argument: $.UIBindData('input-value');
   *
   * @param controller A string indicating the controller whose value a model is bound to.
   */
  UIBindData(controller?: string): void;

  /**
   * Unbind the values of data-models from their data-controllers.
   * If you provide a controller name as the argument, only that controller will be unbound.
   *
   * @param controller A controller to unbind.
   */
  UIUnBindData(controller?: string): void;

}

/**
 * Interface for ChocolateChipJS Element Array.
 */
interface ChocolateChipElementArray {

  /**
   * Iterate over an Array object, executing a function for each matched element.
   */

  forEach(func: (ctx: any, idx: number) => void): void;

  /**
   * Check the current matched set of elements against a selector or element and return it
   * if it matches the given arguments.
   *
   * @param selector A string containing a selector expression to match elements against.
   */
  iz(selector: string): ChocolateChipElementArray;

  /**
   * Check the current matched set of elements against a selector or element and return it
   * if it matches the given arguments.
   *
   * @param elements One or more elements to match the current set of elements against.
   */
  iz(element: any): ChocolateChipElementArray;

  /**
   * Check the current matched set of elements against a selector or element and return it
   * if it does not match the given arguments.
   *
   * @param selector A string containing a selector expression to match elements against.
   */
  iznt(selector: string): ChocolateChipElementArray;

  /**
   * Check the current matched set of elements against a selector or element and return it
   * if it does not match the given arguments.
   *
   * @param elements One or more elements to match the current set of elements against.
   */
  iznt(element: any): ChocolateChipElementArray;

  /**
   * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
   *
   * @param selector A string containing a selector expression to match elements against.
   */
  haz(selector: string): ChocolateChipElementArray;
  /**
   * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
   *
   * @param element A DOM element to match elements against.
   */
  haz(element: Element): ChocolateChipElementArray;

  /**
   * Reduce the set of matched elements to those that have a descendant that does not match the selector or DOM element.
   *
   * @param selector A string containing a selector expression to match elements against.
   */
  haznt(selector: string): ChocolateChipElementArray;
  /**
   * Reduce the set of matched elements to those that have a descendant that does not match the selector or DOM element.
   *
   * @param element A DOM element to match elements against.
   */
  haznt(element: Element): ChocolateChipElementArray;

  /**
   * Return any of the matched elements that have the given class.
   *
   * @param className The class name to search for.
   */
  hazClass(className: string): ChocolateChipElementArray;

  /**
   * Return any of the matched elements that do not have the given class.
   *
   * @param className The class name to search for.
   */
  hazntClass(className: string): ChocolateChipElementArray;


  /**
   * Return any of the matched elements that have the given attribute.
   *
   * @param className The class name to search for.
   */
  hazAttr(attributeName: string): ChocolateChipElementArray;

  /**
   * Return any of the matched elements that do not have the given attribute.
   *
   * @param className The class name to search for.
   */
  hazntAttr(attributeName: string): ChocolateChipElementArray;

  /**
   * Attach a handler to an event for the elements.
   *
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param handler A function to execute each time the event is triggered.
   * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
   */
  bind(eventType: string | ChUIEventInterface, handler: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

  /**
   * Remove a handler for an event from the elements.
   *
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param handler A function to execute each time the event is triggered.
   * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
   */
  unbind(eventType: string | ChUIEventInterface, handler?: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

  /**
   * Add a delegated event to listen for the provided event on the descendant elements.
   *
   * @param selector A string defining the descendant elements to listen on for the designated event.
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param handler A function to execute each time the event is triggered. The keyword "this" will refer
   * to the element receiving the event.
   * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
   */
  delegate(selector: any, eventType: string | ChUIEventInterface, handler: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

  /**
   * Add a delegated event to listen for the provided event on the descendant elements.
   *
   * @param selector A string defining the descendant elements are listening for the event.
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param handler A function handler assigned to this event.
   * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
   */
  undelegate(selector: any, eventType: string | ChUIEventInterface, handler: (eventObject: Event) => any, useCapture?: boolean): ChocolateChipStatic;

  /**
   * Add a handler to an event for elements. If a selector is provided as the second argument, this implements a delegated event.
   *
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param selector A string defining the descendant elements are listening for the event.
   * @param handler A function handler assigned to this event.
   * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
   */
  on( eventType: string | ChUIEventInterface, selector: any, handler?: (eventObject: Event) => any, capturePhase?: boolean): ChocolateChipStatic;

  /**
   * Remove a handler for an event from the elements. If the second argument is a selector, it tries to undelegate the event.
   * If no arugments are provided, it removes all events from the element(s).
   *
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param selector A string defining the descendant elements are listening for the event.
   * @param handler A function handler assigned to this event.
   * @param useCapture Setting the third argument to true will trigger event bubbling. The default is false.
   */
  off( eventType?: string | ChUIEventInterface, selector?: any, handler?: (eventObject: Event) => any, capturePhase?: boolean): ChocolateChipStatic;

  /**
  *
  */
  trigger(eventType: string | ChUIEventInterface): void;

  /**
   * Center an element to the screen.
   */
  UICenter(): void;

  /**
   * Display a busy indicator. Posible options: {size: "100px", color: "#ff0000", position: "align-flush", duration: "2s"}.
   *
   * @param size The size as a string with length identifier: "40px".
   * @param color The color for the busy indicator: "#ff0000".
   * @param position Optional positioning, such as "align-flush".
   * @param duration The time for the busy indicator to display: "500ms".
   */
  UIBusy(options: UIBusyOptions): void;

  /**
   * Close the currently displayed Popup. This is executed on the popup: $('#myPopup').UIPopupClose().
   */
  UIPopupClose(): void;

  /**
   * Initialize a segmented control. Options: {selected: 2, callback: function() {console.log('Blah');}}
   */
  UISegmented(options: UISegmentedOptions): void;

  /**
   * This method allows the user to use a segmented control to toggle a set of panels. It is executed on the segmented control.
   * The options id is the contain of the panels. The options callback is to execute when the user toggles a panel.
   */
  UIPanelToggle(panelsContainer: string, callback: () => any): void;

  /**
   * Make a list editable. This can be enabling changing the order of list items, or deleting them, or both. Options: {editLabel: "Edit", doneLabel: "Done",
   * deleteLabel: "Delete", callback: function() {alert('Bye bye!');}, deletable: true, movable: true}.
   */
  UIEditList(options: UIEditListOptions): void;

  /**
   * Convert a simple list into a selection list. This converts the list into a radio button group, meaning only one can be selected at any time.
   * You can name the radios buttons using the options name. Options: {name: "selectedNamesGroup", selected: 2, callback: function() {alert('hi');}}
   */
  UISelectList(): void;

  /**
   * Create a stepper control by executing it on a span with the class "stepper". Possible options: {start: 0, end: 10, defaultValue: 3}.
   */
  UIStepper(options: UIStepperOptions): void;

  /**
   * Initialize any existing switch controls: $('.switch').UISwitch();
   */
  UISwitch(): void;

  /**
   * Execute this on a range control to initialize it.
   */
  UIRange(): void;
}

/**
 * Interface for jQuery
 */
 
interface JQueryStatic extends ChuiDetectors {
  /**
   * This method will concatenate strings or values as a cleaner alternative to using the '+' operator.
   *
   * @param string or number A comma separated series of strings to concatenate.
   * @return string
   */
  concat(...string: string[]): string;
  
  /**
   * This function replicates normal array iteration with the context first, followed by the index.
   * Usage: $.forEach([1,2,3], function(ctx, idx) { console.log(ctx + "is: " + (idx + 1)) });
   * 
   * @param obj An array-like object. This will usually be an array of HTML elements.
   * @param callback A callback to execute with each iteration of the object.
   * @param args Any extra arguments you wish to pass.
   * @return void
   */
  forEach<T>(obj: T[], callback: (ctx: T, idx?: number) => any, args?: any): any;

  /**
   * Alias for cross-platform events: pointerdown, MSPointerDown, touchstart and mousedown.
   */
  eventStart: ChUIEventInterface;

  /**
   * Alias for cross-platform events: pointerup, MSPointerUp, touchend and mouseup.
   */
  eventEnd: ChUIEventInterface;

  /**
   * Alias for cross-platform events: pointermove, MSPointerMove, touchmove and mousemove.
   */
  eventMove: ChUIEventInterface;

  /**
   * Alias for cross-platform events: pointercancel, MSPointerCancel, touchcancel and mouseout.
   */
  eventCancel: ChUIEventInterface;

  /**
   * Return the version of the current browser.
   */
  browserVersion(): number;

  /**
   * Hide the navigation bar, raising up the content below it.
   */
  UIHideNavBar(): void;

  /**
   * If the navigation bar is hidden, show it, pushing down the content to make room.
   */
  UIShowNavBar(): void;

  /**
   * Determine whether navigation is in progress or not.
   */
  isNavigating: boolean;

  /**
   * Navigate to the article indicated by the provided destination ID. This enters the destination into the navigation history array.
   *
   * param destination An id for the article to navigate to.
   */
  UIGoToArticle(destination: string): void;

  /**
   * Go back to the previous article from whence you came. This resets the navigation history array.
   */
  UIGoBack(): void;

  /**
   * Go back to the article indicated by the provided ID. This is for non-linear back navigation. This will reset the navigation history array to match the current state.
   */
  UIGoBackToArticle(articleID: string): void;

  /**
   * Display a transparent screen over the UI. This takes an optional, decimal-based number for opacity: .5 for 50%.
   *
   * @param opacity The percentage of opacity for the screen.
   */
  UIBlock(opacity?: number): void;

  /**
   * Remove the transparent screen covering the UI.
   */
  UIUnblock(): void;

  /**
   * Create and show a Popup with title and message. Possible options: {id: "#myPopup", title: "My Popup",
   * message: "Woohoo!", cancelButton: "Forget It!", contiueButton: "Whatever", callback: function() {console.log('Blah!');}, empty: false }.
   *
   * param options UIPopupOptions
   */
  UIPopup(options: UIPopupOptions): void;

  /**
   * Create and show a Popover. Options: {id: "#myPopover", title: "Whatever", callback: function() {console.log('Blah!');}}.
   *
   * param options UIPopoverOptions
   */
  UIPopover(options: UIPopoverOptions): void;

  /**
   * Close any currently visible popovers.
   */
  UIPopoverClose(): void;

  /**
   * Create a segmented control: {id: "mySegments", className: "seggie", labels: ["one", "two","three"], selected: 1}
   *
   * param: options UICreateSegmentedOptions
   */
  UICreateSegmented(options: UICreateSegmentedOptions): JQuery;

  /**
   * Initialize a horiontal or vertical paging control. This uses a segmented control in the navigation bar with a class
   * like "segmented paging horizontal" or "segmented paging vertical". It uses a single article with multiple sections to paginate.
   */
  UIPaging(): void;

  /**
   * Creates a sheet. Minimum option is an id: {id : 'starTrek', listClass :'enterprise', background: 'transparent', handle: false }
   */
  UISheet(options: UISheetOptions): void;

  /**
   * Show a sheet by passing this its ID.
   */
  UIShowSheet(id: string): void;

  /**
   * Hide any currently displayed sheets.
   */
  UIHideSheet(): void;

  /**
   * The body tag wrapped and ready to use: $.body.css('background-color','orange')
   */
  body: JQuery;

  /**
   * An array of the navigation history. Do not manipulate this. For examination only. This is used by navigation lists, etc.
   */
  UINavigationHistory: string[];

  /**
   * Creates and initializes a slide out menu. Possible options: {dynamic: true, callback: function() { alert("Woohoo!");}}
   */
  UISlideout: UISlideoutInterface;

  /**
   * Reset the value of the stepper to its defaults at initialization. Pass it a reference to the stepper to reset.
   */
  UIResetStepper(stepper: JQuery): void;

  /**
   * Create a switch control. Possible options: { id: '#myId', name: 'fruit.mango', state: 'on', value: 'Mango', checked: 'on', style: 'traditional', callback: function() { alert('hi');}}
   */
  UICreateSwitch(options: UICreateSwitchOptions): void;

  /**
   * Creates a tabbar. On iOS this is at the bottom of the screen. On Android and Windows, it is at the top.
   * Options: {id: 'mySpecialTabbar', tabs: 4, labels: ["Refresh", "Add", "Info", "Downloads", "Favorite"], icons: ["refresh", "add", "info", "downloads", "favorite"], selected: 2 }
   */
  UITabbar(options: UITabbarOptions): void;

  /**
   * Create a search bar for an article. Options: { articleId: '#products', id: 'productSearch', placeholder: 'Find a product', results: 5 }
   */
  UISearch(options: UISearchOptions): void;

  /**
   * Create and initialize a swipable carousel. Options: {target : '#myCarousel', panels: ['<p>stuff</p>','<p>more</p>'], loop: true, pagination: true }
   */
  UISetupCarousel(options: UISetupCarouselOptions): void;

  /**
   * Bind the values of data-models to elements with data-controllers: <input id='myText' data-controller='input-value' type='text'></li><h3 data-model='input-value'></h3>.
   * You can bind a single model to its controller by providing its name as the argument: $.UIBindData('input-value');
   *
   * @param controller A string indicating the controller whose value a model is bound to.
   */
  UIBindData(controller?: string): void;

  /**
   * Unbind the values of data-models from their data-controllers.
   * If you provide a controller name as the argument, only that controller will be unbound.
   *
   * @param controller A controller to unbind.
   */
  UIUnBindData(controller?: string): void;

}

/**
 * Interface for jQuery
 */
interface JQuery {

  /**
   * Iterate over an Array object, executing a function for each matched element.
   */
  //forEach(func: (ctx: any, idx: number) => void, JQuery: any): void;
  forEach(callback: (ctx: Element, idx: number) => any): JQuery;

  /**
   * Check the current matched set of elements against a selector or element and return it
   * if it matches the given arguments.
   *
   * @param selector A string containing a selector expression to match elements against.
   */
  iz(selector: string): JQuery;

  /**
   * Check the current matched set of elements against a selector or element and return it
   * if it matches the given arguments.
   *
   * @param elements One or more elements to match the current set of elements against.
   */
  iz(element: any): JQuery;

  /**
   * Check the current matched set of elements against a selector or element and return it
   * if it does not match the given arguments.
   *
   * @param selector A string containing a selector expression to match elements against.
   */
  iznt(selector: string): JQuery;

  /**
   * Check the current matched set of elements against a selector or element and return it
   * if it does not match the given arguments.
   *
   * @param elements One or more elements to match the current set of elements against.
   */
  iznt(element: any): JQuery;

  /**
   * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
   *
   * @param selector A string containing a selector expression to match elements against.
   */
  haz(selector: string): JQuery;
  /**
   * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
   *
   * @param contained A DOM element to match elements against.
   */
  haz(contained: Element): JQuery;

  /**
   * Reduce the set of matched elements to those that have a descendant that does not match the selector or DOM element.
   *
   * @param selector A string containing a selector expression to match elements against.
   */
  haznt(selector: string): JQuery;
  /**
   * Reduce the set of matched elements to those that have a descendant that does not match the selector or DOM element.
   *
   * @param contained A DOM element to match elements against.
   */
  haznt(contained: Element): JQuery;

  /**
   * Return any of the matched elements that have the given class.
   *
   * @param className The class name to search for.
   */
  hazClass(className: string): JQuery;

  /**
   * Return any of the matched elements that do not have the given class.
   *
   * @param className The class name to search for.
   */
  hazntClass(className: string): JQuery;


  /**
   * Return any of the matched elements that have the given attribute.
   *
   * @param className The class name to search for.
   */
  hazAttr(attributeName: string): JQuery;

  /**
   * Return any of the matched elements that do not have the given attribute.
   *
   * @param className The class name to search for.
   */
  hazntAttr(attributeName: string): JQuery;

  /**
   * Center an element to the screen.
   */
  UICenter(): void;

  /**
   * Display a busy indicator. Posible options: {size: "100px", color: "#ff0000", position: "align-flush", duration: "2s"}.
   *
   * @param size The size as a string with length identifier: "40px".
   * @param color The color for the busy indicator: "#ff0000".
   * @param position Optional positioning, such as "align-flush".
   * @param duration The time for the busy indicator to display: "500ms".
   */
  UIBusy(options: UIBusyOptions): void;

  /**
   * Close the currently displayed Popup. This is executed on the popup: $('#myPopup').UIPopupClose().
   */
  UIPopupClose(): void;

  /**
   * Initialize a segmented control. Options: {selected: 2, callback: function() {console.log('Blah');}}
   */
  UISegmented(options: UISegmentedOptions): void;

  /**
   * This method allows the user to use a segmented control to toggle a set of panels. It is executed on the segmented control.
   * The options id is the contain of the panels. The options callback is to execute when the user toggles a panel.
   */
  UIPanelToggle(panelsContainer: string, callback: () => any): void;

  /**
   * Make a list editable. This can be enabling changing the order of list items, or deleting them, or both. Options: {editLabel: "Edit", doneLabel: "Done",
   * deleteLabel: "Delete", callback: function() {alert('Bye bye!');}, deletable: true, movable: true}.
   */
  UIEditList(options: UIEditListOptions): void;

  /**
   * Convert a simple list into a selection list. This converts the list into a radio button group, meaning only one can be selected at any time.
   * You can name the radios buttons using the options name. Options: {name: "selectedNamesGroup", selected: 2, callback: function() {alert('hi');}}
   */
  UISelectList(): void;

  /**
   * Create a stepper control by executing it on a span with the class "stepper". Possible options: {start: 0, end: 10, defaultValue: 3}.
   */
  UIStepper(options: UIStepperOptions): void;

  /**
   * Initialize any existing switch controls: $('.switch').UISwitch();
   */
  UISwitch(): void;

  /**
   * Execute this on a range control to initialize it.
   */
  UIRange(): void;


  /**
   * Attach a handler to an event for the elements.
   *
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param eventData An object containing data that will be passed to the event handler.
   * @param handler A function to execute each time the event is triggered.
   */
  bind(eventType: string | ChUIEventInterface, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
  /**
   * Attach a handler to an event for the elements.
   *
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param handler A function to execute each time the event is triggered.
   */
  bind(eventType: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject) => any): JQuery;
  /**
   * Attach a handler to an event for the elements.
   *
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param eventData An object containing data that will be passed to the event handler.
   * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.
   */
  bind(eventType: string | ChUIEventInterface, eventData: any, preventBubble: boolean): JQuery;
  /**
   * Attach a handler to an event for the elements.
   *
   * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
   * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.
   */
  bind(eventType: string | ChUIEventInterface, preventBubble: boolean): JQuery;


  delegate(selector: any, eventType: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject) => any): JQuery;
  delegate(selector: any, eventType: string | ChUIEventInterface, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

  /**
   * Remove an event handler.
   *
   * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
   * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
   * @param handler A handler function previously attached for the event(s), or the special value false.
   */
  off(events: string | ChUIEventInterface, selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
  /**
   * Remove an event handler.
   *
   * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
   * @param handler A handler function previously attached for the event(s), or the special value false.
   */
  off(events: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject) => any): JQuery;

  /**
   * Attach an event handler function for one or more events to the selected elements.
   *
   * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
   * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
   */
  on(events: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
  /**
   * Attach an event handler function for one or more events to the selected elements.
   *
   * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
   * @param data Data to be passed to the handler in event.data when an event is triggered.
   * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
  */
  on(events: string | ChUIEventInterface, data : any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
  /**
   * Attach an event handler function for one or more events to the selected elements.
   *
   * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
   * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
   * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
   */
  on(events: string | ChUIEventInterface, selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;
  /**
   * Attach an event handler function for one or more events to the selected elements.
   *
   * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
   * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
   * @param data Data to be passed to the handler in event.data when an event is triggered.
   * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
   */
  on(events: string | ChUIEventInterface, selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;

  /**
   * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
   *
   * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
   * @param handler A function to execute at the time the event is triggered.
   */
  one(events: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject) => any): JQuery;
  /**
   * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
   *
   * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
   * @param data An object containing data that will be passed to the event handler.
   * @param handler A function to execute at the time the event is triggered.
   */
  one(events: string | ChUIEventInterface, data: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

  /**
   * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
   *
   * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
   * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
   * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
   */
  one(events: string | ChUIEventInterface, selector: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
  /**
   * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
   *
   * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
   * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
   * @param data Data to be passed to the handler in event.data when an event is triggered.
   * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
   */
  one(events: string | ChUIEventInterface, selector: string, data: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

  /**
   * Execute all handlers and behaviors attached to the matched elements for the given event type.
   *
   * @param eventType A string containing a JavaScript event type, such as click or submit.
   * @param extraParameters Additional parameters to pass along to the event handler.
   */
  trigger(eventType: string | ChUIEventInterface, extraParameters?: any[]|Object): JQuery;

  /**
   * Execute all handlers attached to an element for an event.
   *
   * @param eventType A string containing a JavaScript event type, such as click or submit.
   * @param extraParameters An array of additional parameters to pass along to the event handler.
   */
  triggerHandler(eventType: string | ChUIEventInterface, ...extraParameters: any[]): Object;

  /**
   * Remove a previously-attached event handler from the elements.
   *
   * @param eventType A string containing a JavaScript event type, such as click or submit.
   * @param handler The function that is to be no longer executed.
   */
  unbind(eventType?: string | ChUIEventInterface, handler?: (eventObject: JQueryEventObject) => any): JQuery;
  /**
   * Remove a previously-attached event handler from the elements.
   *
   * @param eventType A string containing a JavaScript event type, such as click or submit.
   * @param fls Unbinds the corresponding 'return false' function that was bound using .bind( eventType, false ).
   */
  unbind(eventType: string | ChUIEventInterface, fls: boolean): JQuery;

  /**
   * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
   *
   * @param selector A selector which will be used to filter the event results.
   * @param eventType A string containing a JavaScript event type, such as "click" or "keydown"
   * @param handler A function to execute at the time the event is triggered.
   */
  undelegate(selector: string | ChUIEventInterface, eventType: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
  /**
   * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
   *
   * @param selector A selector which will be used to filter the event results.
   * @param events An object of one or more event types and previously bound functions to unbind from them.
   */
  undelegate(selector: string | ChUIEventInterface, events: Object): JQuery;
}

interface UISetupCarouselOptions {
  target: string;
  panels: HTMLElement[] | JQuery;
  loop?: boolean;
  pagination?: boolean;
}

interface UISearchOptions {
  articleId?: string;
  id?: string;
  placeholder?: string;
  results?: number;
}

interface UITabbarOptions {
  id?: string;
  tabs: number;
  labels: string[];
  icons?: string[];
  selected?: number;
}

interface UICreateSwitchOptions {
  id?: string;
  name?: string;
  state?: string;
  value?: string | number;
  checked?: string;
  style?: string;
  callback?: () => any;
}

/**
 * Interface for UISlideout.
 */
interface UISlideoutInterface {
  /**
   * Creates and initializes a slide out menu. Possible options: {dynamic: true, callback: function() { alert("Woohoo!");}}
   */
  (options: UISlideoutOptions): void;

  /**
   * Populates a slideout menu.
   */
  populate(array: Object[]): void;
}

interface UIStepperOptions {
  start: number;
  end: number;
  defaultValue?: number;
}

interface ChUIEventInterface {
  eventStart: string;
  eventEnd: string;
  eventMove: string;
  eventCancel: string;
}

interface UIBusyOptions {
  size?: string;
  color?: string;
  position?: string | boolean;
  duration?: string;
}

interface UIPopupOptions {
  id?: string;
  title?: string;
  message?: string;
  cancelButton?: string;
  continueButton?: string;
  callback?: Function;
  empty?: boolean;
}

interface UIPopoverOptions {
  id?: string;
  callback?: Function;
  title?: string;
}

interface UICreateSegmentedOptions {
  id?: string;
  className?: string;
  labels?: string[];
  selected?: number
}

interface UISegmentedOptions {
  selected?: number;
  callback?: Function;
}

interface UIEditListOptions {
  editLabel?: string;
  doneLabel?: string;
  deleteLabel?: string;
  callback?: Function;
  deletable?: boolean;
  movable?: boolean;
}

interface UISelectListOptions {
  name?: string;
  selected?: number;
  callback?: Function;
}

interface UISheetOptions {
  id?: string;
  listClass?: string;
  background?: string;
  handle?: boolean;
}

interface UISlideoutOptions {
  dynamic?: boolean;
  callback?: Function;
  position?: string;
}


/**
 * The interface used to construct jQuery events (with $.Event). It is
 * defined separately instead of inline in JQueryStatic to allow
 * overriding the construction function with specific strings
 * returning specific event objects.
 */
interface JQueryEventConstructor {
  (name: string, eventProperties?: any): JQueryEventObject;
  new (name: string, eventProperties?: any): JQueryEventObject;
}

interface JQueryEventInterface {
  Event: JQueryEventConstructor;
}

/**
 * Interface of the JQuery extension of the W3C event object
 */
interface BaseJQueryEventObject extends Event {

}
interface JQueryEventObject extends BaseJQueryEventObject, JQueryInputEventObject, JQueryMouseEventObject, JQueryKeyEventObject {
}

/**
 * Interface of the JQuery extension of the W3C event object
 */
interface BaseJQueryEventObject extends Event {

}

interface JQueryInputEventObject extends BaseJQueryEventObject {

}

interface JQueryMouseEventObject extends JQueryInputEventObject {

}

interface JQueryKeyEventObject extends JQueryInputEventObject {

}

interface JQueryEventObject extends BaseJQueryEventObject, JQueryInputEventObject, JQueryMouseEventObject, JQueryKeyEventObject {
}

/**
 * Interface for detectors.
 */
 interface ChuiDetectors {
    
  /**
   * Whether device is iPhone.
   */
  isiPhone: boolean;

  /**
   * Whether device is iPad.
   */
  isiPad: boolean;

  /**
   * Whether device is iPod.
   */
  isiPod: boolean;

  /**
   * Whether OS is iOS.
   */
  isiOS: boolean;

  /**
   * Whether OS is Android
   */
  isAndroid: boolean;

  /**
   * Whether OS is WebOS.
   */
  isWebOS: boolean;

  /**
   * Whether OS is Blackberry.
   */
  isBlackberry: boolean;

  /**
   * Whether OS supports touch events.
   */
  isTouchEnabled: boolean;

  /**
   * Whether there is a network connection.
   */
  isOnline: boolean;

  /**
   * Whether app is running in stanalone mode.
   */
  isStandalone: boolean;

  /**
   * Whether OS i iOS 7.
   */
  isiOS7: boolean;

  /**
   * Whether OS i iOS 7.
   */
  isiOS8: boolean;

  /**
   * Whether OS i iOS 7.
   */
  isiOS9: boolean;

  /**
   * Whether OS is Windows.
   */
  isWin: boolean;

  /**
   * Whether device is Windows Phone.
   */
  isWinPhone: boolean;

  /**
   * Whether browser is IE10.
   */
  isIE10: boolean;

  /**
   * Whether browser is IE11.
   */
  isIE11: boolean;
  /**
   * Whether browser is Microsoft Edge or not.
   */
  isIEEdge: boolean;

  /**
   * Whether browser is Webkit based.
   */
  isWebkit: boolean;

  /**
   * Whether browser is running on mobile device.
   */
  isMobile: boolean;

  /**
   * Whether browser is running on desktop.
   */
  isDesktop: boolean;

  /**
   * Whether browser is Safari.
   */
  isSafari: boolean;

  /**
   * Whether browser is Chrome.
   */
  isChrome: boolean;

  /**
   * Is native Android browser (not mobile Chrome).
   */
  isNativeAndroid: boolean;

  /**
   * Whether screen is at least 960 pixels wide.
   */
  isWideScreen: boolean;

  /**
   * Whether screen is at least 960 pixels wide and in portrait orientation.
   */
  isWideScreenPortrait: boolean;
 }