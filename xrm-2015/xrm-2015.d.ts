// Type definitions for Dyanmics CRM 2015
// Project: http://www.microsoft.com/en-us/dynamics/crm.aspx
// Definitions by: Steven Pride - Based on the definition created by kowgli <https://xrm2011typescript.codeplex.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var Xrm: Xrm;
declare var ExecutionObj: ExecutionContext;
declare var GetGlobalContext: GetGlobalContext;

interface GetGlobalContext {
    (): Context;
}

interface Xrm {
	ClientNames: ClientNames;
	NotificationLevels: NotificationLevels;
	Page: Page;
	TabDisplayState: TabDisplayState;
    Utility: Utility;
}

interface ClientNames {
	mobile: string;
	outlook: string;
	web: string;
}

interface DialogOptions {
	width: number;
	height: number;
	left: number;
	top: number;
}

interface NotificationLevels {
	error: string;
	warning: string;
	information: string;
}

interface TabDisplayState {
	expanded: string;
	collapsed: string;
}

interface Utility {
	alertDialog(message: string, onCloseCallback?: GeneralCallback): void; //Opens an alert dialog and optionally executes a callback function on close.
    confirmDialog(message: string, yesCloseCallback?: GeneralCallback, noCloseCallback?: GeneralCallback): void; //Opens a confirm dialog and optionally executes a callback function on close.
    isActivityType(entityName: string): boolean; //Determine if an entity is an activity entity.
    openEntityForm(name: string, id?: string, parameters?: Object): Object; //Opens an entity form.
    openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window; //Opens an HTML web resource.
}

interface GeneralCallback {
    (): any;
}

interface Page {
    context: Context;
    data: data;
    ui: ui;
    getAttribute(): any[]; // Returns one or more controls depending on the arguments passed. 
    getAttribute(argument: string): Attribute; // Returns The control where the name matches the argument
    getAttribute(argument: number): Attribute; // Returns The control where the index matches the number
    getAttribute(argument: AttributeFunctionCallback): any[]; // Return Value The tab where the index matches the number
    getControl(): any[]; // Returns one or more controls depending on the arguments passed. 
    getControl(argument: string): Control; // Returns The control where the name matches the argument
    getControl(argument: number): Control; // Returns The control where the index matches the number
    getControl(argument: AttributeFunctionCallback): any[]; // Return Value The tab where the index matches the number
}

interface ui {
    close(): void; // Closes the form.
    controls: ControlsCollection<Control>;//A collection of all the controls on the page.
    formSelector: FormSelector;
    getCurrentControl(): Object; //  Returns the control object that currently has focus on the form.
    getFormType(): number;  // Indicates the form context for the record.
    navigation: Navigation;
    clearFormNotification(uniqueId?: string): boolean;
    refreshRibbon(): void; // Causes the ribbon to re-evaluate data that controls what is displayed in it.
    setFormHtmlNotification(htmlText: string, notificationLevel: string, uniqueId: string): boolean;
    setFormNotification(message: string, notificationLevel: string, uniqueId: string): boolean;
    tabs: TabsCollection;
    getViewPortHeight(): number; // Returns the height of the viewport in pixels. 
    getViewPortWidth(): number; //  Returns the width of the viewport in pixels. 
    process: uiProcess;
}

interface uiProcess {
    setDisplayState(state: string): void; //Use this method to expand or collapse the business process flow control
    setVisible(isVisible: boolean): void; //Use this method to show or hide the business process flow control.
}

interface FormSelector {
    items: ControlsCollection<FormSelectorItem>;
    getCurrentItem(): FormSelectorItem; // Returns a reference to the form currently being shown.

}

interface FormSelectorItem {
    getId(): string; // Returns the GUID ID of the roleForm.
    getLabel(): string; // Returns the label of the roleForm.
    navigate(): void; // Opens the specified roleForm.
}

interface Navigation {
    items: NavigationItemCollection;
}

interface TabsCollection {
    forEach(argument: TabFunctionCallback): void; // Applies the action contained within a delegate function. 
    get(): any[]; // Return Value All the tabs.
    get(argument: string): Tab; // Return Value The tab where the name matches the argument.
    get(argument: number): Tab; // Return Value The tab where the index matches the number
    get(argument: TabFunctionCallback): any[]; // Return Value The tab where the index matches the number
    getLength(): number; // Returns the number of tabs  in the collection
}

interface TabFunctionCallback {
    (tab: Tab, index: number): any;
}

interface SectionFunctionCallback {
    (section: Section, index: number): any;
}

interface ControlFunctionCallback {
    (control: Control, index: number): any;
}

interface AttributeFunctionCallback {
    (attribute: Attribute, index: number): any;
}
interface Tab {
    getDisplayState(): string;
    getLabel(): string;
    getName(): string;
    getParent(): Object;
    getVisible(): boolean;
    setDisplayState(value: string): void;
    setFocus(): void;
    setLabel(value: string): void;
    setVisible(isVisible: boolean): void;
    sections: TabSections;
}
interface Section {
    getLabel(): string;
    getName(): string;
    getParent(): Object;
    getVisible(): boolean;
    setLabel(arg: string): void; //Sets the label for the section.
    setVisible(arg: boolean): void; //Sets a value that indicates whether the section is visible.
    controls: ControlsCollection<Control>;

}
interface TabSections {
    forEach(argument: SectionFunctionCallback): void; // Applies the action contained within a delegate function. 
    get(): any[]; // Returns one or more controls depending on the arguments passed. 
    get(argument: string): Section; // Returns The control where the name matches the argument
    get(argument: number): Section; // Returns The control where the index matches the number
    get(argument: AttributeFunctionCallback): any[]; // Return Value The tab where the index matches the number
    getLength(): number; // Returns the number of controls in the collection
}
interface ControlArray<T> {
    [index: number]: T;
    [index: string]: T;
    (index: string): T;
    (index: number): T;
}
interface ControlsCollection<T> {
    forEach(argument: ControlFunctionCallback): void; // Applies the action contained within a delegate function.    
    get(): ControlArray<T>; // Returns one or more controls depending on the arguments passed. 
    get(argument: string): T; // Returns The control where the name matches the argument
    get(argument: Number): T; // Returns The control where the index matches the number
    get(argument: AttributeFunctionCallback): ControlArray<T>; // Return Value The tab where the index matches the number
    getLength(): number; // Returns the number of controls in the collection
}

interface NavigationArray {
    [index: number]: NavigationItem;
    [index: string]: NavigationItem;
    (index: string): NavigationItem;
    (index: number): NavigationItem;
}
interface NavigationItemCollection {
    forEach(argument: TabFunctionCallback): void; // Applies the action contained within a delegate function.    
    get(): NavigationArray; // Returns one or more controls depending on the arguments passed. 
    get(argument: string): NavigationItem; // Returns The control where the name matches the argument
    get(argument: number): NavigationItem; // Returns The control where the index matches the number
    get(argument: AttributeFunctionCallback): NavigationArray; // Return Value The tab where the index matches the number
    getLength(): number; // Returns the number of controls in the collection
}

interface Context {
    client: Client;
	getClientUrl(): string;  /// Returns the base URL that was used to access the application This method is new in Microsoft Dynamics CRM 2011 Update Rollup 12 and the Microsoft Dynamics CRM December 2012 Service Update
    getCurrentTheme(): string; //  Returns a string representing the current Microsoft Office Outlook theme chosen by the user.
	getIsAutoSaveEnabled(): boolean; //Returns a bool representing whether autosave is enabled.
    getOrgLcid(): Number;  /// Returns the LCID value that represents the Microsoft Dynamics CRM Language Pack that is the base language for the organization.
    getOrgUniqueName(): string; /// Returns the unique text value of the organizations name.
    getQueryStringParameters(): any[];  /// Returns an array of key value pairs representing the query string arguments that were passed to the page.
    getUserId(): string; // Returns the GUID value of the SystemUser.id value for the current user.
    getUserLcid(): Number; // Returns the LCID value that represents the Microsoft Dynamics CRM Language Pack that is the user selected as their preferred language.
	getUserName(): String; // Returns the full name of the current user
    getUserRoles(): any[]; // Returns an array of strings representing the GUID values of each of the security roles that the user is associated with.
    prependOrgName(sPath: string): string; // Prepends the organization name to the specified path.
	saveMode: Number;
}

interface Client {
    getClient(): string;
    getClientState(): string;
}

interface data {
    entity: Entity;
    Process: DataProcess;
	refresh(save: boolean): Object; //refresh form, boolean to save or not. 
	save(refreshWhenSaveCanceled: boolean): Object; //Save data, boolean to refresh if the save is cancelled.
}

interface DataProcess {
    getActiveProcess(): Process;
    setActiveProcess(processId: string, callbackFunction: GeneralCallback): void;
    getActiveStage(): Stage;
    setActiveStage(stageId: string, callbackFunction: GeneralCallback): void;
    getActivePath(): StagesCollection;
    getEnabledProcesses(callbackFunction: EnabledProcessesCallback): any;
    addOnStageChange(ev: any): void;
    addOnStageSelected(ev: any): void;
    removeOnStageChange(ev: any): void;
    removeOnStageSelected(ev: any): void;
    moveNext(callbackFunction?: GeneralCallback): void;
    movePrevious(callbackFunction?: GeneralCallback): void;
}

interface EnabledProcessesCallback {
    (enabledProcesses: any): any;
}

interface StagesCollection {
    forEach(argument: StageFunctionCallback): void; // Applies the action contained within a delegate function. 
    get(): any[]; // Return Value All the tabs.
    get(argument: string): Stage; // Return Value The tab where the name matches the argument.
    get(argument: number): Stage; // Return Value The tab where the index matches the number
    get(argument: StageFunctionCallback): any[]; // Return Value The tab where the index matches the number
    getLength(): number; // Returns the number of tabs  in the collection
}

interface StageFunctionCallback {
    (stage: Stage, index: number): any;
}

interface Process {
    getId(): string;
    getName(): string;
    getStages(): StagesCollection;
    isRendered(): boolean;
}

interface Stage {
    getCategory(): number;
    getEntityName(): string;
    getName(): string;
    getStatus: string;
    getSteps(): Array<Step>;
}

interface Step {
    getAttribute(): string;
    getName(): string;
    isRequired(): string;
}

interface Entity {
    attributes: AttributeCollection;
    addOnSave(ev: any): void;  // Sets a function to be called when the record is saved.    
    getDataXml(): string;  //  Returns a string representing the xml that will be sent to the server when the record is saved.
    getEntityName(): string;  // Returns a string representing the logical name of the entity for the record.
    getId(): string;  // Returns a string representing the GUID id value for the record.
    getIsDirty(): boolean;  // Returns a Boolean value that indicates if any fields in the form have been modified.
	getPrimaryAttributeValue(): string; // Returns the primary attribute value.
    removeOnSave(): void;  // Removes a function from the OnSave event hander.
    save(param?: string): void;  // Saves the record. This method has three possible parameters. "" , "saveandclose" and "saveandnew"
}
interface AttributeCollection {
    length: number;
    item(index: number): Attribute;
    forEach(argument: AttributeFunctionCallback): void; // Applies the action contained within a delegate function.    
    get(): any[]; // Returns one or more controls depending on the arguments passed. 
    get(argument: string): Attribute; // Returns The control where the name matches the argument
    get(argument: number): Attribute; // Returns The control where the index matches the number
    get(argument: AttributeFunctionCallback): any[]; // Return Value The tab where the index matches the number
    getFirst(argument: AttributeFunctionCallback): any[]; // Returns The first control where the name matches the argument
    getLength(): number; // Returns the number of controls in the collection
}

interface Attribute {
    addOnChange(ev: any): void;
    controls: ControlsCollection<Control>;
    fireOnChange(): void;
    getAttributeType(): string;
    getFormat(): string;
    getIsDirty(): boolean;
    getIsPartyList(): boolean;
    getMax(): number;
    getMaxLength(): number;
    getMin(): number;
    getName(): string;
    getOption(value: string): Object; // review
    getOption(value: number): Object; // review
    getOptions(): any[];
    getParent(): Entity;
    getPrecision(): number;
    getRequiredLevel(): string;
    getSelectedOption(): Option; // review
    getSubmitMode(): string;
    getText(): string;
    getUserPrivilege(): UserPrivilege; // review
    getValue(): any;
    removeOnChange(ev: any): void;
    setRequiredLevel(requirementLevel: string): void;
    setSubmitMode(SubmitMode: string): void; // review
    setValue(value: any): void;
}
interface UserPrivilege {
    canRead: boolean;
    canUpdate: boolean;
    canCreate: boolean;
}

interface Lookup {
    Name: string;
    Id: string;
    EntityType: string;
}

interface ExecutionContext {
    getContext(): Context; //  Returns the Xrm.Page.context object.
    getDepth(): number; //  Returns a value that indicates the order in which this handler is executed. 
    getEventArgs(): SaveEventArgs; //  Returns an object with methods to manage the Save event.
    getEventSource(): Attribute; //  Returns a reference to the object that the event occurred on.
    getSharedVariable(key: string): Object; // Retrieves a variable set using setSharedVariable.
    setSharedVariable(key: string, value: Object): void; // Sets the value of a variable to be used by a handler after the current handler completes.
}

interface SaveEventArgs {
    getSaveMode(): number; //   Returns a value indicating how the save event was initiated by the user.
    isDefaultPrevented(): boolean; //   Returns a value indicating whether the save event has been canceled because the preventDefault method was used in this event handler or a previous event handler.
    preventDefault(): void; //  Cancels the save operation, but all remaining handlers for the event will still be executed.
}

interface Option {
    text: string;
    value: string;
}

interface Control {
    getDisabled(): boolean; // Returns a value that indicates whether the control is disabled.
    setDisabled(value: boolean): void; //  Sets a value that indicates whether the control is disabled.
    getAttribute(): Attribute; //  Returns the attribute that the control is bound to.
    getControlType(): string; //  Returns a value that categorizes controls.
    getName(): string; //  Returns the name assigned to the control.
    getParent(): Object; //  Returns a reference to the section object that contains the control.
    getLabel(): string; //  Returns the label for the control
    setLabel(label: string): void; //  Sets the label for the control.
    addCustomFilter(filter: string, entityLogicalName: string): void; //Use to add filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an “AND” condition.
    addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void; //Adds a new view for the lookup dialog.
    getDefaultView(): string; //  Returns the ID value of the default lookup dialog view.
    setDefaultView(viewGuid: string): void; //  Sets the default view for the lookup control dialog.
    addPreSearch(ev: any): void; // Use this method to apply changes to lookups based on values current just as the user is about to view results for the lookup.
    removePreSearch(ev: any): void;// Use this method to remove event handler functions that have previously been set for the PreSearch event.
    setNotification(message: string, uniqueId: string): void; //Display a message near the control to indicate that data isn’t valid. When this method is used on Microsoft Dynamics CRM for tablets a red "X" icon appears next to the control. Tapping on the icon will display the message.
    clearNotification(uniqueId?: string): void; //Remove a message already displayed for a control.
    addOption(option: Object, index?: number): void;  // Adds an option to an Option set control.
    clearOptions(): void; //  Clears all options from an Option Set control.
    removeOption(value: number): void; //  Removes an option from an Option Set control.
    refresh(): void; //  Refreshes the data displayed in a Sub-Grid
    setFocus(): void; //  Sets the focus on the control.
    setShowTime(value: boolean): void; //Specify whether a date control should show the time portion of the date.
    getVisible(): boolean; //  Returns a value that indicates whether the control is currently visible.
    setVisible(value: boolean): void; //  Sets a value that indicates whether the control is visible.
    getData(): string; //  Returns the value of the data query string parameter passed to a Silverlight Web resource. 
    setData(value: string): void; //  Sets the value of the data query string parameter passed to a Silverlight Web resource.
    getInitialUrl(): string; //  Returns the default URL that an IFrame control is configured to display.
    getObject(): Object; //  Returns the object in the form representing an IFrame or Web resource.
    setSrc(value: string): void; //  Sets the URL to be displayed in an IFrame.
    getSrc(): string; //  Returns the current URL being displayed in an IFRAME.
}

interface NavigationItem {
    getId(): string; //  Returns the name of the item. 
    getLabel(): string; //  Returns the label for the item
    getVisible(): boolean; //  Returns a value that indicates whether the item is currently visible.
    setFocus(): void; //  Sets the focus on the item.
    setLabel(label: string): void; //  Sets the label for the item.
    setVisible(value: boolean): void; //  Sets a value that indicates whether the item is visible.
}