declare var Xrm: Xrm.XrmStatic;
declare function GetGlobalContext(): Xrm.Context;

interface Window {
    Xrm: Xrm.XrmStatic;
    GetGlobalContext(): Xrm.Context;
}

declare namespace Xrm {
    /**
     * Static xRM object.
     */
    export interface XrmStatic {
        /**
         * Provides a namespace container for the context, data and ui objects.
         */
        Page: {
            /**
             * Provides methods to retrieve information specific to an organization, a user, or parameters passed to a page.
             */
            context: Context;

            /**
             * Provides methods to work with the form.
             */
            data: Data;

            /**
             * Contains properties and methods to retrieve information about the user interface as well as collections for several subcomponents of the form.
             */
            ui: Ui;

            /**
             * Gets all attributes.
             *
             * @return  An array of attributes.
             */
            getAttribute(): Page.Attribute[];

            /**
             * Gets an attribute matching attributeName.
             *
             * @typeParam  T   An Attribute type.
             * @param   {string}    attributeName   Name of the attribute.
             *
             * @return  The attribute.
             */
            getAttribute<T extends Page.Attribute>(attributeName: string): T;

            /**
             * Gets an attribute matching attributeName.
             *
             * @param   {string}    attributeName   Name of the attribute.
             *
             * @return  The attribute.
             */
            getAttribute(attributeName: string): Page.Attribute;

            /**
             * Gets an attribute by index.
             *
             * @param   {number}    index   The attribute index.
             *
             * @return  The attribute.
             */
            getAttribute(index: number): Page.Attribute;

            /**
             * Gets an attribute.
             *
             * @param   {Collection.MatchingDelegate{Attribute}}    delegateFunction    A matching delegate function
             *
             * @return  An array of attribute.
             */
            getAttribute(delegateFunction: Collection.MatchingDelegate<Page.Attribute>): Page.Attribute[];

            /**
             * Gets all controls.
             *
             * @return  An array of controls.
             */
            getControl(): Page.Control[];

            /**
             * Gets a control matching controlName.
             *
             * @typeParam  T   A Control type
             * @param   {string}    controlName Name of the control.
             *
             * @return  The control.
             */
            getControl<T extends Page.Control>(controlName: string): T;

            /**
             * Gets a control matching controlName.
             *
             * @param   {string}    controlName Name of the control.
             *
             * @return  The control.
             */
            getControl(controlName: string): Page.Control;

            /**
             * Gets a control by index.
             *
             * @param   {number}    index   The control index.
             *
             * @return  The control.
             */
            getControl(index: number): Page.Control;

            /**
             * Gets a control.
             *
             * @param   {Collection.MatchingDelegate{Control}}  delegateFunction    A matching delegate function.
             *
             * @return  An array of control.
             */
            getControl(delegateFunction: Collection.MatchingDelegate<Page.Control>): Page.Control[];
        };

        /**
         * Provides a container for useful functions not directly related to the current page.
         */
        Utility: {
            /**
             * Displays an alert dialog, with an "OK" button.
             *
             * @param   {string}        message         The message.
             * @param   {function()}    onCloseCallback The "OK" callback.
             */
            alertDialog(message: string, onCloseCallback: () => void): void;

            /**
             * Displays a confirmation dialog, with "OK" and "Cancel" buttons.
             *
             * @param   {string}        message             The message.
             * @param   {function()}    yesCloseCallback    The "OK" callback.
             * @param   {function()}    noCloseCallback     The "Cancel" callback.
             */
            confirmDialog(message: string, yesCloseCallback: () => void, noCloseCallback: () => void): void;

            /**
             * Query if 'entityType' is an Activity entity.
             *
             * @param   {string}    entityType  Type of the entity.
             *
             * @return  true if the entity is an Activity, false if not.
             */
            isActivityType(entityType: string): boolean;

            /**
             * Opens quick create.
             *
             * @param   {Function}  callback                    The function that will be called when a record is created. This
             *                                                  function is passed a LookupValue object as a parameter.
             * @param   {string}    entityLogicalName           The logical name of the entity to create.
             * @param   {Page.LookupValue}  createFromEntity    (Optional) Designates a record that will provide default values
             *                                                  based on mapped attribute values.
             * @param   {OpenParameters}    parameters          (Optional) A dictionary object that passes extra query string
             *                                                  parameters to the form. Invalid query string parameters will cause an
             *                                                  error.
             */
            openQuickCreate(
                callback: (recordReference: Page.LookupValue) => void,
                entityLogicalName: string,
                createFromEntity?: Page.LookupValue,
                parameters?: Utility.OpenParameters,
            ): void;

            /**
             * Opens an entity form.
             *
             * @param   {string}    name                The entity's logical name.
             * @param   {string}    id                  (Optional) The unique identifier for the record.
             * @param   {FormParameters}    parameters  (Optional) A dictionary object that passes extra query string parameters to the form.
             * @param   {WindowOptions} windowOptions   (Optional) Options for controlling the window.
             */
            openEntityForm(
                name: string,
                id?: string,
                parameters?: Utility.FormOpenParameters,
                windowOptions?: Utility.WindowOptions,
            ): void;

            /**
             * Opens an HTML Web Resource in a new browser window.
             *
             * @param   {string}    webResourceName Name of the HTML web resource. Can be used to pass URL
             *                                      parameters.  See Remarks.
             * @param   {string}    webResourceData (Optional) Data to pass into the Web Resource's data parameter.
             *                                                 It is advised to use encodeURIcomponent() to encode the value.
             * @param   {number}    width           (Optional) The width of the new window.
             * @param   {number}    height          (Optional) The height of the new window.
             *
             * @return  A Window reference, containing the opened Web Resource.
             *
             * @remarks This function will not work with Microsoft Dynamics CRM for tablets.
             *          Valid WebResource URL Parameters:   typename
             *                                              type
             *                                              id
             *                                              orgname
             *                                              userlcid
             *                                              data (identical to this method's webResourceData parameter)
             *                                              formid
             */
            openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window;
        };
    }

    /**
     * Client Types for Xrm.Page.context.getClient().
     */
    export type Client = "Web" | "Outlook" | "Mobile";
    /**
     * Client States for Xrm.Page.context.getClientState().
     */
    export type ClientState = "Online" | "Offline";
    /**
     * Themes for Xrm.Page.context.getCurrentTheme().
     */
    export type Theme = "default" | "Office12Blue" | "Office14Silver";

    /**
     * Interface for the client context.
     */
    export interface ClientContext {
        /**
         * Returns a value to indicate which client the script is executing in.
         *
         * @return  The client, as either "Web", "Outlook", or "Mobile"
         */
        getClient(): Client;

        /**
         * Gets client's current state.
         *
         * @return  The client state, as either "Online" or "Offline"
         */
        getClientState(): ClientState;
    }

    /**
     * Interface for the xRM application context.
     */
    interface Context {
        /**
         * The client's context instance.
         */
        client: ClientContext;

        /**
         * Gets client's base URL for Dynamics CRM
         *
         * @return  The client's base URL
         * @remarks For Dynamics CRM On-Premises:               http(s)://server/org
         *          For Dynamics CRM Online:                    https://org.crm.dynamics.com
         *          For Dynamics CRM for Outlook (Offline):     http://localhost:2525
         */
        getClientUrl(): string;

        /**
         * Gets current styling theme.
         *
         * @return  The name of the current theme, as either "default", "Office12Blue", or "Office14Silver"
         *
         * @remarks This function does not work with Dynamics CRM for tablets.
         */
        getCurrentTheme(): Theme;

        /**
         * Gets whether automatic save is enabled.
         *
         * @return  true if automatic saving is enabled, otherwise false.
         */
        getIsAutoSaveEnabled(): boolean;

        /**
         * Gets organization's LCID (language code).
         *
         * @return  The organization language code.
         *
         * @see     {@link http://msdn.microsoft.com/en-us/library/ms912047(WinEmbedded.10).aspx|Microsoft Locale ID Values}
         */
        getOrgLcid(): number;

        /**
         * Gets organization's unique name.
         *
         * @return  The organization's unique name.
         *
         * @remarks This value can be found on the Developer Resources page within Dynamics CRM
         */
        getOrgUniqueName(): string;

        /**
         * Gets query string parameters.
         *
         * @return  The query string parameters, in a dictionary object representing name and value pairs.
         */
        getQueryStringParameters(): { [index: string]: any };

        /**
         * Returns the difference between the local time and Coordinated Universal Time (UTC).
         *
         * @return  The time zone offset, in minutes.
         */
        getTimeZoneOffsetMinutes(): number;

        /**
         * Gets user's unique identifier.
         *
         * @return  The user's identifier in Guid format.
         *
         * @remarks Example: "{B05EC7CE-5D51-DF11-97E0-00155DB232D0}"
         */
        getUserId(): string;

        /**
         * Gets user's LCID (language code).
         *
         * @return  The user's language code.
         *
         * @see     {@link http://msdn.microsoft.com/en-us/library/ms912047(WinEmbedded.10).aspx|Microsoft Locale ID Values}
         */
        getUserLcid(): number;

        /**
         * Gets the name of the current user.
         *
         * @return  The user's name.
         */
        getUserName(): string;

        /**
         * Gets all user security roles.
         *
         * @return  An array of user role identifiers, in Guid format.
         *
         * @remarks Example: ["cf4cc7ce-5d51-df11-97e0-00155db232d0"]
         */
        getUserRoles(): string[];

        /**
         * Prefixes the current organization's unique name to a string; typically a URL path.
         *
         * @param   {string}    sPath   Local pathname of the resource.
         *
         * @return  A path string with the organization name.
         *
         * @remarks Format: "/"+ OrgName + sPath
         */
        prependOrgName(sPath: string): string;
    }

    /**
     * Interface for the Xrm.Page.data object.
     */
    export interface Data {
        /**
         * Asynchronously refreshes data on the form, without reloading the page.
         *
         * @param   {boolean}   save    true to save the record, after the refresh.
         *
         * @return  An Async.XrmPromise.
         */
        refresh(save: boolean): Async.XrmPromise;

        /**
         * Asynchronously saves the record.
         *
         * @return  An Async.XrmPromise.
         */
        save(): Async.XrmPromise;

        /**
         * The record context of the form.
         */
        entity: Page.Entity;

        /**
         * The process API for Xrm.Page.data.
         *
         * @remarks This member may be undefined when Process Flows are not used by the current entity.
         */
        process: Page.data.ProcessManager;
    }

    /**
     * Interface for the Xrm.Page.ui object.
     */
    export interface Ui {
        /**
         * Clears the form notification described by uniqueId.
         *
         * @param   {string}    uniqueId    Unique identifier.
         *
         * @return  true if it succeeds, otherwise false.
         */
        clearFormNotification(uniqueId: string): boolean;

        /**
         * Closes the form.
         */
        close(): void;

        /**
         * Gets form type.
         *
         * @return  The form type.
         *
         * @remarks     Values returned are: 0  Undefined
         *                                   1  Create
         *                                   2  Update
         *                                   3  Read Only
         *                                   4  Disabled
         *                                   6  Bulk Edit
         *              Deprecated values are 5 (Quick Create), and 11 (Read Optimized)
         */
        getFormType(): XrmEnum.FormType;

        /**
         * Gets view port height.
         *
         * @return  The view port height, in pixels.
         *
         * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
         */
        getViewPortHeight(): number;

        /**
         * Gets view port width.
         *
         * @return  The view port width, in pixels.
         *
         * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
         */
        getViewPortWidth(): number;

        /**
         * Re-evaluates the ribbon's configured EnableRules
         *
         * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
         */
        refreshRibbon(): void;

        setFormNotification(message: string, level: Page.ui.FormNotificationLevel | string, uniqueId: string): boolean;

        process: Page.ui.ProcessManager;

        /**
         * A reference to the collection of controls on the form.
         */
        controls: Collection.ItemCollection<Page.Control>;

        /**
         * The form selector API.
         *
         * @remarks This API does not exist with Microsoft Dynamics CRM for tablets.
         */
        formSelector: Page.FormSelector;

        /**
         * The navigation API.
         *
         * @remarks This API does not exist with Microsoft Dynamics CRM for tablets.
         */
        navigation: Page.Navigation;

        /**
         * A reference to the collection of tabs on the form.
         */
        tabs: Collection.ItemCollection<Page.Tab>;
    }

    /**
     *  A definition module for asynchronous interface declarations.
     */
    export namespace Async {
        /**
         * Called when the operation is successful.
         */
        export type SuccessCallbackDelegate = () => void;

        /**
         * Called when the operation fails.
         *
         * @param   {number}    errorCode   The error code.
         * @param   {string}    message     The message.
         */
        export type ErrorCallbackDelegate = (errorCode: number, message: string) => void;

        /**
         * Interface for Xrm.Page.data promises.
         */
        export interface XrmPromise {
            /**
             * A basic 'then' promise.
             *
             * @param   {SuccessCallbackDelegate}   successCallback   The success callback.
             * @param   {ErrorCallbackDelegate}     errorCallback     The error callback.
             */
            then(successCallback: SuccessCallbackDelegate, errorCallback: ErrorCallbackDelegate): void;
        }
    }

    /**
     * A definition module for collection interface declarations.
     */
    export namespace Collection {
        /**
         * Interface for a matching delegate.
         *
         * @typeParam  T   Generic type parameter.
         */
        export interface MatchingDelegate<T> {
            /**
             * Called for each item in an array
             *
             * @param   {T} item            The item.
             * @param   {number}    index   Zero-based index of the item array.
             *
             * @return  true if the item matches, false if it does not.
             */
            (item: T, index?: number): boolean;
        }

        /**
         * Interface for iterative delegate.
         *
         * @typeParam  T   Generic type parameter.
         */
        export interface IterativeDelegate<T> {
            /**
             * Called for each item in an array
             *
             * @param   {T} item            The item.
             * @param   {number}    index   Zero-based index of the item array.
             */
            (item: T, index?: number): void;
        }

        /**
         * Interface for an item collection.
         *
         * @typeParam  T   Generic type parameter.
         */
        export interface ItemCollection<T> {
            /**
             * Applies an operation to all items in this collection.
             *
             * @param   {IterativeDelegate{T}}  delegate    An iterative delegate function
             */
            forEach(delegate: IterativeDelegate<T>): void;

            /**
             * Gets.
             *
             * @param   {MatchingDelegate{T}}   delegate    A matching delegate function
             *
             * @return  A T[] whose members have been validated by delegate.
             */
            get(delegate: MatchingDelegate<T>): T[];

            /**
             * Gets the item given by the index.
             *
             * @param   {number}    itemNumber  The item number to get.
             *
             * @return  The T in the itemNumber-th place.
             */
            get(itemNumber: number): T;

            /**
             * Gets the item given by the key.
             *
             * @param   {string}    itemName    The item name to get.
             *
             * @return  The T matching the key itemName.
             *
             * @see {@link Xrm.Page.Control.getName()} for Control-naming schemes.
             */
            get(itemName: string): T;

            /**
             * Gets the entire array of T.
             *
             * @return  A T[].
             */
            get(): T[];

            /**
             * Gets the length of the collection.
             *
             * @return  The length.
             */
            getLength(): number;
        }
    }

    /**
     * The Xrm.Page API
     *
     * @see {@link http://msdn.microsoft.com/en-us/library/gg328255.aspx|Documentation} for details.
     */
    export namespace Page {
        /**
         * Requirement Level for Xrm.Page.Attribute.getRequiredLevel() and Xrm.Page.Attribute.setRequiredLevel().
         */
        export type RequirementLevel = "none" | "recommended" | "required";
        /**
         * Save Modes for Xrm.Page.Entity.save().
         */
        export type SaveMode = "saveandclose" | "saveandnew";
        /**
         * Status for Xrm.Page.Stage.getStatus().
         */
        export type Status = "active" | "inactive";
        /**
         * Submit Mode for Xrm.Page.Attribute.getSubmitMode() and Xrm.Page.Attribute.setSubmitMode().
         */
        export type SubmitMode = "always" | "dirty" | "never";

        /**
         * Interface for a CRM Business Process Flow instance.
         */
        export interface Process {
            /**
             * Returns the unique identifier of the process.
             *
             * @return The identifier for this process, in GUID format.
             *
             * @remarks  Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
             */
            getId(): string;

            /**
             * Returns the name of the process.
             *
             * @return  The name.
             */
            getName(): string;

            /**
             * Returns an collection of stages in the process.
             *
             * @return  The stages.
             */
            getStages(): Collection.ItemCollection<Stage>;

            /**
             * Returns a boolean value to indicate if the process is rendered.
             *
             * @return  true if the process is rendered, false if not.
             */
            isRendered(): boolean;
        }

        /**
         * Interface for CRM Business Process Flow stages.
         */
        export interface Stage {
            /**
             * Returns an object with a getValue method which will return the integer value of the business process flow
             * category.
             *
             * @return  The stage category.
             */
            getCategory(): { getValue(): XrmEnum.StageCategory };

            /**
             * Returns the logical name of the entity associated with the stage.
             *
             * @return  The entity name.
             */
            getEntityName(): string;

            /**
             * Returns the unique identifier of the stage.
             *
             * @return  The identifier of the Stage, in GUID format.
             *
             * @remarks  Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
             */
            getId(): string;

            /**
             * Returns the name of the stage.
             *
             * @return  The name.
             */
            getName(): string;

            /**
             * Returns the status of the stage.
             *
             * @return  The status.
             *
             * @remarks  This method will return either "active" or "inactive".
             */
            getStatus(): Status;

            /**
             * Returns a collection of steps in the stage.
             *
             * @return  An array of Step.
             */
            getSteps(): Step[];
        }

        export interface Step {
            /**
             * Returns the logical name of the attribute associated to the step.
             *
             * @return  The attribute.
             *
             * @remarks  Some steps don’t contain an attribute value.
             */
            getAttribute(): string;

            /**
             * Returns the name of the step.
             *
             * @return  The name.
             */
            getName(): string;

            /**
             * Returns whether the step is required in the business process flow.
             *
             * @return  true if required, false if not.
             *
             * @remarks     Returns true if the step is marked as required in the Business Process Flow editor; otherwise, false.
             *              There is no connection between this value and the values you can change in the Xrm.Page.data.entity
             *              attribute RequiredLevel methods.
             */
            isRequired(): boolean;
        }

        /**
         * Interface for the event context.
         */
        export interface EventContext {
            /**
             * Gets the Xrm context.
             *
             * @return  The Xrm context.
             */
            getContext(): Context;

            /**
             * Gets the handler's depth, which is the order in which the handler is executed.
             *
             * @return  The depth, a 0-based index.
             */
            getDepth(): number;

            /**
             * Gets save-event arguments.
             *
             * @return  The event arguments.
             *
             * @remarks Returns null for all but the "save" event.
             */
            getEventArgs(): SaveEventArguments;

            /**
             * Gets a reference to the object for which event occurred.
             *
             * @return  The event source.
             */
            getEventSource(): Attribute | Control | Entity;

            /**
             * Gets the shared variable with the specified key.
             *
             * @typeParam  T   Generic type parameter.
             * @param   {string}    key The key.
             *
             * @return  The shared variable.
             *
             * @remarks Used to pass values between handlers of an event.
             */
            getSharedVariable<T>(key: string): T;

            /**
             * Sets a shared variable.
             *
             * @typeParam  T   Generic type parameter.
             * @param   {string}    key The key.
             * @param   {T} value       The value.
             *
             * @remarks Used to pass values between handlers of an event.
             */
            setSharedVariable<T>(key: string, value: T): void;
        }

        /**
         * Interface for a context-sensitive handler.
         */
        export interface ContextSensitiveHandler {
            /**
             * @param   {EventContext}  context The context.
             */
            (context?: EventContext): void;
        }

        /**
         * Base interface for UI elements.
         */
        export interface UiElement {
            /**
             * Gets the label.
             *
             * @return  The label.
             */
            getLabel(): string;

            /**
             * Gets the visibility state.
             *
             * @return  true if the tab is visible, otherwise false.
             */
            getVisible(): boolean;

            /**
             * Sets the label.
             *
             * @param   {string}    label   The label.
             */
            setLabel(label: string): void;

            /**
             * Sets the visibility state.
             *
             * @param   {boolean}   visible true to show, false to hide.
             */
            setVisible(visible: boolean): void;
        }

        /**
         * Interface for focusable UI elements.
         */
        export interface UiFocusable {
            /**
             * Sets focus on the element.
             */
            setFocus(): void;
        }

        /**
         * Interface for a Lookup value.
         */
        export interface LookupValue {
            /**
             * The identifier.
             */
            id: string;

            /**
             * The name
             */
            name?: string | undefined;

            /**
             * Type of the entity.
             */
            entityType: string;
        }

        /**
         * Interface for an OptionSet value.
         */
        export interface OptionSetValue {
            /**
             * The label text.
             */
            text: string;

            /**
             * The value, as a number
             */
            value: number;
        }

        /**
         * Interface for a privilege.
         */
        export interface Privilege {
            /**
             * true if the user can read.
             */
            canRead: boolean;

            /**
             * true if the user can update.
             */
            canUpdate: boolean;

            /**
             * true if the user can create.
             */
            canCreate: boolean;
        }

        /**
         * Interface for an Entity attribute.
         */
        export interface Attribute {
            /**
             * Adds a handler to be called when the attribute's value is changed.
             *
             * @param   {ContextSensitiveHandler}  handler The function reference.
             */
            addOnChange(handler: ContextSensitiveHandler): void;

            /**
             * Fire all "on change" event handlers.
             */
            fireOnChange(): void;

            /**
             * Gets attribute type.
             *
             * @return  The attribute's type name.
             *
             * @remarks Values returned are: boolean
             *                               datetime
             *                               decimal
             *                               double
             *                               integer
             *                               lookup
             *                               memo
             *                               money
             *                               optionset
             *                               string
             */
            getAttributeType(): string;

            /**
             * Gets the attribute format.
             *
             * @return  The format of the attribute.
             *
             * @see {@link getAttributeType()}
             *
             * @remarks Values returned are: date           (datetime)
             *                               datetime       (datetime)
             *                               duration       (integer)
             *                               email          (string)
             *                               language       (optionset)
             *                               none           (integer)
             *                               phone          (string)
             *                               text           (string)
             *                               textarea       (string)
             *                               tickersymbol   (string)
             *                               timezone       (optionset)
             *                               url            (string)
             */
            getFormat(): string;

            /**
             * Gets a boolean value indicating whether this Attribute has unsaved changes.
             *
             * @return  true if there are unsaved changes, otherwise false.
             */
            getIsDirty(): boolean;

            /**
             * Gets the logical name of the attribute.
             *
             * @return  The logical name.
             */
            getName(): string;

            /**
             * Gets a reference to the record context of this attribute.
             *
             * @return  The parent record context.
             */
            getParent(): Entity;

            /**
             * Gets the current level of requirement for the attribute.
             *
             * @return  The required level, as either "none", "required", or "recommended"
             */
            getRequiredLevel(): RequirementLevel;

            /**
             * Gets current submit mode for the attribute.
             *
             * @return  The submit mode, as either "always", "never", or "dirty"
             *
             * @remarks The default value is "dirty"
             */
            getSubmitMode(): SubmitMode;

            /**
             * Gets the current user's privileges for the attribute.
             *
             * @return  The user privileges.
             */
            getUserPrivilege(): Privilege;

            /**
             * Removes the handler from the "on change" event.
             *
             * @param   {ContextSensitiveHandler}   handler The handler.
             */
            removeOnChange(handler: ContextSensitiveHandler): void;

            /**
             * Sets the required level.
             *
             * @param   {string}    requirementLevel    The requirement level, as either "none", "required", or "recommended"
             */
            setRequiredLevel(requirementLevel: RequirementLevel | string): void;

            /**
             * Sets the submit mode.
             *
             * @param   {string}    submitMode  The submit mode, as either "always", "never", or "dirty".
             *
             * @remarks The default value is "dirty"
             */
            setSubmitMode(submitMode: SubmitMode | string): void;

            /**
             * A collection of all the controls on the form that interface with this attribute.
             */
            controls: Collection.ItemCollection<Control>;

            /**
             * Gets the value.
             *
             * @return  The value.
             */
            getValue(): any;

            /**
             * @param       value   The value.
             */
            setValue(value: any): void;
        }

        /**
         * Interface for a Number attribute.
         */
        export interface NumberAttribute extends Attribute {
            /**
             * Gets the maximum value allowed.
             *
             * @return  The maximum value allowed.
             */
            getMax(): number;

            /**
             * Gets the minimum value allowed.
             *
             * @return  The minimum value allowed.
             */
            getMin(): number;

            /**
             * Gets the attribute's configured precision.
             *
             * @return  The total number of allowed decimal places.
             */
            getPrecision(): number;

            /**
             * Gets the value.
             *
             * @return  The value.
             */
            getValue(): number;

            /**
             * Sets the value.
             *
             * @param   {number}    value   The value.
             *
             * @remarks Attributes on Quick Create Forms will not save values set with this method.
             */
            setValue(value: number): void;
        }

        /**
         * Interface for a String attribute.
         */
        export interface StringAttribute extends Attribute {
            /**
             * Gets maximum length allowed.
             *
             * @return  The maximum length allowed.
             *
             * @remarks The email form's "Description" attribute does not have the this method.
             */
            getMaxLength(): number;

            /**
             * Gets the value.
             *
             * @return  The value.
             */
            getValue(): string;

            /**
             * Sets the value.
             *
             * @param   {string}    value   The value.
             *
             * @remarks     A String field with the {@link Attribute.getFormat|email} format enforces email
             *              address formatting. Attributes on Quick Create Forms will not save values set
             *              with this method.
             */
            setValue(value: string): void;
        }

        /**
         * Common interface for enumeration attributes (OptionSet and Boolean).
         */
        export interface EnumAttribute extends Attribute {
            /**
             * Gets the initial value of the attribute.
             *
             * @return  The initial value.
             * @remarks Valid for optionset and boolean attribute types
             */
            getInitialValue(): number | boolean;
        }

        /**
         * Interface for a Boolean attribute.
         */
        export interface BooleanAttribute extends EnumAttribute {
            /**
             * Gets the value.
             *
             * @return  true if it succeeds, false if it fails.
             */
            getValue(): boolean;

            /**
             * Sets the value.
             *
             * @param   {boolean}   value   The value.
             *
             * @remarks  Attributes on Quick Create Forms will not save values set with this method.
             */
            setValue(value: boolean): void;
        }

        /**
         * Interface for a Date attribute.
         */
        export interface DateAttribute extends Attribute {
            /**
             * Gets the value.
             *
             * @return  The value.
             */
            getValue(): Date;

            /**
             * Sets the value.
             *
             * @param   {Date}  value   The value.
             *
             * @remarks  Attributes on Quick Create Forms will not save values set with this method.
             */
            setValue(value: Date): void;
        }

        /**
         * Interface an OptionSet attribute.
         */
        export interface OptionSetAttribute extends EnumAttribute {
            /**
             * Gets the option matching a value.
             *
             * @param   {number}    value   The enumeration value of the option desired.
             *
             * @return  The option.
             */
            getOption(value: number): OptionSetValue;

            /**
             * Gets the option matching a label.
             *
             * @param   {string}    label   The label of the option desired.
             *
             * @return  The option.
             */
            getOption(label: string): OptionSetValue;

            /**
             * Gets all of the options.
             *
             * @return  An array of options.
             */
            getOptions(): OptionSetValue[];

            /**
             * Gets selected option.
             *
             * @return  The selected option.
             */
            getSelectedOption(): OptionSetValue;

            /**
             * Gets the label of the currently selected option.
             *
             * @return  The current value's label.
             */
            getText(): string;

            /**
             * Gets the value.
             *
             * @return  The value.
             */
            getValue(): number;

            /**
             * Sets the value.
             *
             * @param   {number}    value   The value.
             *
             * @remarks     The getOptions() method returns option values as strings. You must use parseInt
             *              to convert them to numbers before you can use those values to set the value of an
             *              OptionSet attribute. Attributes on Quick Create Forms will not save values set
             *              with this method.
             */
            setValue(value: number): void;
        }

        /**
         * Interface a Lookup attribute.
         */
        export interface LookupAttribute extends Attribute {
            /**
             * Gets a boolean value indicating whether the Lookup is a multi-value PartyList.
             *
             * @return  true the attribute is a PartyList, otherwise false.
             */
            getIsPartyList(): boolean;

            /**
             * Gets the value.
             *
             * @return  An array of LookupValue.
             */
            getValue(): LookupValue[];

            /**
             * Sets the value.
             *
             * @param   {LookupValue[]} value   The value.
             *
             * @remarks Attributes on Quick Create Forms will not save values set with this method.
             */
            setValue(value: LookupValue[]): void;
        }

        /**
         * Interface for the form's record context, Xrm.Page.data.entity
         */
        export interface Entity {
            /**
             * Adds a handler to be called when the record is saved.
             *
             * @param   {ContextSensitiveHandler}   handler The handler.
             */
            addOnSave(handler: ContextSensitiveHandler): void;

            /**
             * Gets an serialized-XML string representing data that will be passed to the server upon saving
             * the record.
             *
             * @return  The XML in string format.
             *
             * @remarks     This function does not work with Microsoft Dynamics CRM for tablets. Example:
             *              "<account><name>Contoso</name><accountnumber>55555</accountnumber><telephone2>425
             *              555-1234</telephone2></account>".
             */
            getDataXml(): string;

            /**
             * Gets entity's logical name.
             *
             * @return  The logical name.
             */
            getEntityName(): string;

            /**
             * Gets the record's unique identifier.
             *
             * @return  The identifier, in Guid format.
             *
             * @remarks  Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
             */
            getId(): string;

            /**
             * Gets a boolean value indicating whether the record has unsaved changes.
             *
             * @return  true if there are unsaved changes, otherwise false.
             */
            getIsDirty(): boolean;

            /**
             * Gets the record's primary attribute value.
             *
             * @return  The primary attribute value.
             *
             * @remarks The value for this attribute is used when links to the record are displayed.
             */
            getPrimaryAttributeValue(): string;

            /**
             * Removes the handler from the "on save" event.
             *
             * @param   {ContextSensitiveHandler}   handler The handler.
             */
            removeOnSave(handler: ContextSensitiveHandler): void;

            /**
             * Saves the record.
             *
             * @remarks  When using quick create forms in the web application the saveandnew option is not
             *           applied. It will always work as if saveandclose were used. Quick create forms in
             *           Microsoft Dynamics CRM for tablets will apply the saveandnew behavior.
             */
            save(): void;

            /**
             * Saves the record with the given save mode.
             *
             * @param   {string}    saveMode    (Optional) the save mode to save, as either "saveandclose" or
             *                                  "saveandnew".
             */
            save(saveMode: SaveMode | string): void;

            /**
             * The collection of attributes for the record.
             */
            attributes: Collection.ItemCollection<Attribute>;
        }

        /**
         * Interface for save event arguments.
         */
        export interface SaveEventArguments {
            /**
             * Gets save mode, as an integer.
             *
             * @return  The save mode.
             * @remarks Values returned are: 1      Save
             *                               2      Save and Close
             *                               59     Save and New
             *                               70     AutoSave (Where enabled; can be used with an OnSave handler
             *                                                to conditionally disable auto-saving)
             *                               58     Save as Completed (Activities)
             *                               5      Deactivate
             *                               6      Reactivate
             *                               47     Assign (All user- or team-owned entities)
             *                               7      Send (Email)
             *                               16     Qualify (Lead)
             *                               15     Disqualify (Lead)
             */
            getSaveMode(): XrmEnum.SaveMode;

            /**
             * Returns a boolean value to indicate if the record's save has been prevented.
             *
             * @return  true if saving is prevented, otherwise false.
             */
            isDefaultPrevented(): boolean;

            /**
             * Prevents the save operation from being submitted to the server.
             * @remarks All remaining "on save" handlers will continue execution.
             */
            preventDefault(): void;
        }

        /**
         * Module for the Xrm.Page.data API.
         */
        export namespace data {
            /**
             * Interface for the Xrm.Page.data.process API.
             */
            export interface ProcessManager {
                /**
                 * Returns a Process object representing the active process.
                 *
                 * @return  current active process.
                 */
                getActiveProcess(): Process;

                /**
                 * Set a Process as the active process.
                 *
                 * @param   {string}    processId           The Id of the process to make the active process.
                 * @param   {function}  callbackFunction    (Optional) a function to call when the operation is complete.
                 */
                setActiveProcess(processId: string, callbackFunction?: ProcessCallbackDelegate): void;

                /**
                 * Returns a Stage object representing the active stage.
                 *
                 * @return  current active stage.
                 */
                getActiveStage(): Stage;

                /**
                 * Set a stage as the active stage.
                 *
                 * @param   {string}    stageId             the Id of the stage to make the active stage.
                 * @param   {function}  callbackFunction    (Optional) a function to call when the operation is complete.
                 */
                setActiveStage(stageId: string, callbackFunction?: ProcessCallbackDelegate): void;

                /**
                 * Use this method to get a collection of stages currently in the active path with methods to interact with the
                 * stages displayed in the business process flow control. The active path represents stages currently rendered in
                 * the process control based on the branching rules and current data in the record.
                 *
                 * @return  A collection of all completed stages, the currently active stage, and the predicted set of future stages
                 *          based on satisfied conditions in the branching rule. This may be a subset of the stages returned with
                 *          Xrm.Page.data.process.getActiveProcess because it will only include those stages which represent a valid
                 *          transition from the current stage based on branching that has occurred in the process.
                 */
                getActivePath(): Collection.ItemCollection<Stage>;

                /**
                 * Use this method to asynchronously retrieve the enabled business process flows that the user can switch to for an
                 * entity.
                 *
                 * @param   {Function} callbackFunction The callback function must accept a parameter that contains an object with
                 *                                      dictionary properties where the name of the property is the Id of the
                 *                                      business process flow and the value of the property is the name of the
                 *                                      business process flow.
                 *
                 *                                      The enabled processes are filtered according to the user’s privileges. The
                 *                                      list of enabled processes is the same ones a user can see in the UI if they
                 *                                      want to change the process manually.
                 */
                getEnabledProcesses(callbackFunction: (enabledProcesses: ProcessDictionary) => void): void;

                /**
                 * Use this method to get the currently selected stage.
                 *
                 * @return  The currently selected stage.
                 */
                getSelectedStage(): Stage;

                /**
                 * Use this to add a function as an event handler for the OnStageChange event so that it will be called when the
                 * business process flow stage changes.
                 * @param   {ContextSensitiveHandler}   handler The function will be added to the bottom of the event
                 *                                              handler pipeline. The execution context is automatically
                 *                                              set to be the first parameter passed to the event handler.
                 *
                 *                                              Use a reference to a named function rather than an
                 *                                              anonymous function if you may later want to remove the
                 *                                              event handler.
                 */
                addOnStageChange(handler: ContextSensitiveHandler): void;

                /**
                 * Use this to add a function as an event handler for the OnStageSelected event so that it will be called
                 * when a business process flow stage is selected.
                 *
                 * @param   {ContextSensitiveHandler}   handler The function will be added to the bottom of the event
                 *                                              handler pipeline. The execution context is automatically
                 *                                              set to be the first parameter passed to the event handler.
                 *
                 *                                              Use a reference to a named function rather than an
                 *                                              anonymous function if you may later want to remove the
                 *                                              event handler.
                 */
                addOnStageSelected(handler: ContextSensitiveHandler): void;

                /**
                 * Use this to remove a function as an event handler for the OnStageChange event.
                 *
                 * @param   {ContextSensitiveHandler}   handler If an anonymous function is set using the addOnStageChange method it
                 *                                              cannot be removed using this method.
                 */
                removeOnStageChange(handler: ContextSensitiveHandler): void;

                /**
                 * Use this to remove a function as an event handler for the OnStageChange event.
                 *
                 * @param   {ContextSensitiveHandler}   handler If an anonymous function is set using the addOnStageChange method it
                 *                                              cannot be removed using this method.
                 */
                removeOnStageSelected(handler: ContextSensitiveHandler): void;

                /**
                 * Progresses to the next stage.
                 *
                 * @param   {ProcessCallbackDelegate}   callbackFunction    (Optional) A function to call when the operation is
                 *                                                          complete.
                 */
                moveNext(callbackFunction?: ProcessCallbackDelegate): void;

                /**
                 * Moves to the previous stage.
                 *
                 * @param   {ProcessCallbackDelegate}   callbackFunction    (Optional) A function to call when the operation is
                 *                                                          complete.
                 */
                movePrevious(callbackFunction?: ProcessCallbackDelegate): void;
            }

            /**
             * Called when process change methods have completed.
             *
             * @param       {string}    status  The result of the process change operation.
             * @remarks     Values returned are: success        (The operation succeeded.)
             *                                   crossEntity    (The previous stage is for a different entity.)
             *                                   beginning      (The active stage is the first stage of the active path.)
             *                                   invalid        (The operation failed because the selected stage isn’t the same
             *                                   as the active stage.)
             *                                   unreachable    (The stage exists on a different path.)
             */
            export type ProcessCallbackDelegate = (status: string) => void;

            /**
             * Represents a key-value pair, where the key is the Process Flow's ID, and the value is the name thereof.
             */
            export type ProcessDictionary = { [index: string]: string };
        }

        /**
         * Interface for Xrm.Page.ui controls.
         */
        export interface Control extends UiElement, UiFocusable {
            /**
             * Clears the notification identified by uniqueId.
             *
             * @param   {string}    uniqueId    (Optional) Unique identifier.
             *
             * @return  true if it succeeds, false if it fails.
             *
             * @remarks If the uniqueId parameter is not used, the current notification shown will be removed.
             */
            clearNotification(uniqueId?: string): boolean;

            /**
             * Gets the control's type.
             *
             * @return  The control type.
             * @remarks Values returned are: standard
             *                               iframe
             *                               lookup
             *                               optionset
             *                               subgrid
             *                               webresource
             *                               notes
             *                               timercontrol
             *                               kbsearch (CRM Online Only, use parature.d.ts)
             */
            getControlType(): string;

            /**
             * Gets a boolean value, indicating whether the control is disabled.
             *
             * @return  true if it is disabled, otherwise false.
             */
            getDisabled(): boolean;

            /**
             * Gets the name of the control on the form.
             *
             * @return  The name of the control.
             *
             * @remarks     The name assigned to a control is not determined until the form loads. Changes to
             *              the form may change the name assigned to a given control.
             *              When you use the control getName method the name of the first control will be the
             *              same as the name of the attribute. The second instance of a control for that
             *              attribute will be "<attributeName>1". The pattern <attributeName>+N
             *              will continue for each additional control added to the form for a specific
             *              attribute. When a form displays a business process flow control in the header,
             *              additional controls will be added for each attribute that is displayed in the
             *              business process flow. These controls have a unique name like the following:
             *              header_process_<attribute name>.
             */
            getName(): string;

            /**
             * Gets a reference to the Section parent of the control.
             *
             * @return  The parent Section.
             */
            getParent(): Section;

            /**
             * Sets the state of the control to either enabled, or disabled.
             *
             * @param   {boolean}   disabled    true to disable, false to enable.
             */
            setDisabled(disabled: boolean): void;

            /**
             * Sets a control-local notification message.
             *
             * @param   {string}    message     The message.
             * @param   {string}    uniqueId    Unique identifier.
             *
             * @return  true if it succeeds, false if it fails.
             *
             * @remarks     When this method is used on Microsoft Dynamics CRM for tablets a red "X" icon
             *              appears next to the control. Tapping on the icon will display the message.
             */
            setNotification(message: string, uniqueId: string): boolean;
        }

        /**
         * Interface for a standard control.
         */
        export interface StandardControl extends Control {
            /**
             * Gets the control's bound attribute.
             *
             * @typeParam  T   An Attribute type.
             *
             * @return  The attribute.
             */
            getAttribute<T extends Attribute>(): T;

            /**
             * Gets the control's bound attribute.
             *
             * @return  The attribute.
             */
            getAttribute(): Attribute;
        }

        /**
         * Interface for a Date control.
         */
        export interface DateControl extends StandardControl {
            /**
             * Gets the control's bound attribute.
             *
             * @return  The attribute.
             */
            getAttribute(): DateAttribute;

            /**
             * Gets the status of the time-of-day component of the Date control.
             *
             * @return  true if the time is shown, otherwise false.
             */
            getShowTime(): boolean;

            /**
             * Sets the visibility of the time component of the Date control.
             *
             * @param   {boolean}   showTimeValue   true to show, false to hide the time value.
             */
            setShowTime(showTimeValue: boolean): void;
        }

        /**
         * Interface for a Lookup control.
         */
        export interface LookupControl extends StandardControl {
            /**
             * Adds a handler to the "pre search" event of the Lookup control.
             *
             * @param   {Function}  handler The handler.
             */
            addPreSearch(handler: ContextSensitiveHandler): void;

            /**
             * Adds an additional custom filter to the lookup, with the "AND" filter operator.
             * Can only be used within a "pre search" event handler
             *
             * @param   {string}    filter              Specifies the filter, as a serialized FetchXML
             *                                          "filter" node.
             * @param   {string}    entityLogicalName   (Optional) The logical name of the entity.
             *
             * @remarks     If entityLogicalName is not specified, the filter will be applied to all entities
             *              valid for the Lookup control.
             *              Example filter: <filter type="and">
             *                              <condition attribute="address1_city" operator="eq" value="Redmond" />
             *                              </filter>
             */
            addCustomFilter(filter: string, entityLogicalName?: string): void;

            /**
             * Adds a custom view for the Lookup dialog.
             *
             * @param   {string}    viewId          Unique identifier for the view, in Guid format.
             * @param   {string}    entityName      Name of the entity.
             * @param   {string}    viewDisplayName Name of the view to display.
             * @param   {string}    fetchXml        The FetchXML query for the view's contents, serialized as a string.
             * @param   {string}    layoutXml       The Layout XML, serialized as a string.
             * @param   {boolean}   isDefault       true, to treat this view as default.
             *
             * @remarks Cannot be used on "Owner" Lookup controls.
             *          The viewId is never saved to CRM, but must be unique across available views.  Generating
             *          a new value can be accomplished with a {@link http://www.guidgen.com/|Guid generator}.
             *          Example viewId value: "{00000000-0000-0000-0000-000000000001}"
             *          Layout XML Reference: {@link http://msdn.microsoft.com/en-us/library/gg334522.aspx}
             */
            addCustomView(
                viewId: string,
                entityName: string,
                viewDisplayName: string,
                fetchXml: string,
                layoutXml: string,
                isDefault: boolean,
            ): void;

            /**
             * Gets the control's bound attribute.
             *
             * @return  The attribute.
             */
            getAttribute(): LookupAttribute;

            /**
             * Gets the unique identifier of the default view.
             *
             * @return  The default view, in Guid format.
             *
             * @remarks Example: "{00000000-0000-0000-0000-000000000000}"
             */
            getDefaultView(): string;

            /**
             * Removes the handler from the "pre search" event of the Lookup control.
             *
             * @param   {Function}  handler The handler.
             */
            removePreSearch(handler: () => void): void;

            /**
             * Sets the Lookup's default view.
             *
             * @param   {string}    viewGuid    Unique identifier for the view.
             *
             * @remarks Example viewGuid value: "{00000000-0000-0000-0000-000000000000}"
             */
            setDefaultView(viewGuid: string): void;
        }

        /**
         * Interface for an OptionSet control.
         */
        export interface OptionSetControl extends StandardControl {
            /**
             * Adds an option.
             *
             * @param   {OptionSetValue}    option  The option.
             * @param   {number}    index           (Optional) zero-based index of the option.
             *
             * @remarks This method does not check that the values within the options you add are valid.
             *          If index is not provided, the new option will be added to the end of the list.
             */
            addOption(option: OptionSetValue, index?: number): void;

            /**
             * Clears all options.
             */
            clearOptions(): void;

            /**
             * Gets the control's bound attribute.
             *
             * @return  The attribute.
             */
            getAttribute(): OptionSetAttribute;

            /**
             * Removes the option matching the value.
             *
             * @param   {number}    value   The value.
             */
            removeOption(value: number): void;
        }

        /**
         * Interface for a CRM grid control.
         */
        export interface GridControl extends Control {
            /**
             * Use this method to add event handlers to the GridControl's OnLoad event.
             *
             * @param   {Function} handler The event handler.
             */
            addOnLoad(handler: () => void): void;

            /**
             * This method returns context information about the GridControl.
             *
             * @return  The context type.
             */
            getContextType(): XrmEnum.GridControlContext;

            /**
             * Use this method to get the logical name of the entity data displayed in the grid.
             *
             * @return  The entity name.
             */
            getEntityName(): string;

            /**
             * Use this method to get access to the Grid available in the GridControl.
             *
             * @return  The grid.
             */
            getGrid(): ui.Grid;

            /**
             * Use this method to get access to the ViewSelector available for the GridControl when it is configured to display views.
             *
             * @return  The view selector.
             */
            getViewSelector(): ui.ViewSelector;

            /**
             * Refreshes the sub grid.
             *
             * @remarks Not available during the "on load" event of the form.
             */
            refresh(): void;

            /**
             * Use this method to remove event handlers from the GridControl's OnLoad event.
             *
             * @param   {Function} handler The handler.
             */
            removeOnLoad(handler: () => void): void;
        }

        /**
         * Interface for a framed control, which is either a Web Resource or an Iframe.
         *
         * @remarks     An Iframe control provides additional methods, so use {@link IframeControl} where
         *              appropriate.  Silverlight controls should use {@link SilverlightControl}.
         */
        export interface FramedControl extends Control {
            /**
             * Gets the DOM element containing the control.
             *
             * @return  The container object.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getObject(): HTMLIFrameElement;

            /**
             * Gets the URL value of the control.
             *
             * @return  The source URL.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getSrc(): string;

            /**
             * Sets the URL value of the control.
             *
             * @param   {string}    src The source URL.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            setSrc(src: string): void;
        }

        /**
         * Interface for an Iframe control.
         */
        export interface IframeControl extends FramedControl {
            /**
             * Gets initial URL defined for the Iframe.
             *
             * @return  The initial URL.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getInitialUrl(): string;
        }

        /**
         * Interface for a Silverlight control.
         */
        export interface SilverlightControl extends Control {
            /**
             * Gets the query string value passed to Silverlight.
             *
             * @return  The data.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getData(): string;

            /**
             * Sets the query string value passed to Silverlight.
             *
             * @param   {string}    data    The data.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            setData(data: string): void;

            /**
             * Gets the DOM element containing the control.
             *
             * @return  The container object.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getObject(): HTMLObjectElement;
        }

        /**
         * Interface for a form tab.
         */
        export interface Tab extends UiElement, UiFocusable {
            /**
             * Gets display state of the tab.
             *
             * @return  The display state, as either "expanded" or "collapsed"
             */
            getDisplayState(): ui.DisplayState;

            /**
             * Gets the name of the tab.
             *
             * @return  The name.
             */
            getName(): string;

            /**
             * Gets a reference to the Xrm.Page.ui parent of the tab.
             *
             * @return  The parent.
             */
            getParent(): Ui;

            /**
             * Sets display state of the tab.
             *
             * @param   {string}    displayState   Display state of the tab, as either "expanded" or "collapsed"
             */
            setDisplayState(displayState: ui.DisplayState | string): void;

            /**
             * A reference to the collection of form sections within this tab.
             */
            sections: Collection.ItemCollection<Section>;
        }

        /**
         * Interface for a form section.
         */
        export interface Section extends UiElement {
            /**
             * Gets the name of the section.
             *
             * @return  The name.
             */
            getName(): string;

            /**
             * Gets a reference to the Xrm.Page.Tab parent of this item.
             *
             * @return  The parent.
             */
            getParent(): Tab;

            /**
             * A reference to the collection of controls within this tab.
             */
            controls: Collection.ItemCollection<Control>;
        }

        /**
         * Module for Xrm.Page.ui API.
         */
        export namespace ui {
            /**
             * Form Notification Levels for Xrm.Ui.setFormNotification().
             */
            export type FormNotificationLevel = "ERROR" | "INFO" | "WARNING";

            /**
             * Display States for Xrm.ui.ProcessMonitor.setDisplayState().
             */
            export type DisplayState = "collapsed" | "expanded";

            /**
             * Interface for Xrm.Page.ui.process API
             */
            export interface ProcessManager {
                /**
                 * Sets display state of the process flow control.
                 *
                 * @param   {string}    displayState   Display state of the process flow control, as either "expanded" or "collapsed"
                 */
                setDisplayState(displayState: ui.DisplayState): void;

                /**
                 * Sets the visibility state.
                 *
                 * @param   {boolean}   visible true to show, false to hide.
                 */
                setVisible(visible: boolean): void;
            }

            /**
             * Interface for a grid.  Use Grid methods to access information about data in the grid. Grid is returned by the
             * GridControl.getGrid method.
             */
            export interface Grid {
                /**
                 * Returns a collection of every GridRow in the Grid.
                 *
                 * @return  The rows.
                 */
                getRows(): Collection.ItemCollection<GridRow>;

                /**
                 * Returns a collection of every selected GridRow in the Grid.
                 *
                 * @return  The selected rows.
                 */
                getSelectedRows(): Collection.ItemCollection<GridRow>;

                /**
                 * Returns the total number of records in the Grid.
                 *
                 * @return  The total record count.
                 */
                getTotalRecordCount(): number;
            }

            /**
             * Interface for a grid row.  Use the GridRow.getData method to access the GridRowData. A collection of GridRow is
             * returned by Grid.getRows and Grid.getSelectedRows methods.
             */
            export interface GridRow {
                /**
                 * Returns the GridRowData for the GridRow.
                 *
                 * @return  The data.
                 */
                getData(): GridRowData;
            }

            /**
             * Interface for grid row data.  Use the GridRowData.getEntity method to access the GridEntity. GridRowData is
             * returned by the GridRow.getData method.
             */
            export interface GridRowData {
                /**
                 * Returns the GridEntity for the GridRowData.
                 *
                 * @return  The entity.
                 */
                getEntity(): GridEntity;
            }

            /**
             * Interface for a grid entity.  Use the GridEntity methods to access data about the specific records in the rows.
             * GridEntity is returned by the GridRowData.getEntity method.
             */
            export interface GridEntity {
                /**
                 * Returns the logical name for the record in the row.
                 *
                 * @return  The entity name.
                 */
                getEntityName(): string;

                /**
                 * Returns a LookupValue that references this record.
                 *
                 * @return  The entity reference.
                 */
                getEntityReference(): LookupValue;

                /**
                 * Returns the id for the record in the row.
                 *
                 * @return  The identifier of the GridEntity, in GUID format.
                 *
                 * @remarks Example return: "{00000000-0000-0000-0000-000000000000}"
                 */
                getId(): string;

                /**
                 * Returns the primary attribute value for the record in the row.  (Commonly the name.)
                 *
                 * @return  The primary attribute value.
                 */
                getPrimaryAttributeValue(): string;
            }

            /**
             * Interface for the view selector.  Use the ViewSelector methods to get or set information about the view selector
             * of the grid control.
             */
            export interface ViewSelector {
                /**
                 * Use this method to get a reference to the current view.
                 *
                 * @return  The current view.
                 */
                getCurrentView(): ViewSelectorItem;

                /**
                 * Use this method to determine whether the view selector is visible.
                 *
                 * @return  true if visible, false if not.
                 */
                isVisible(): boolean;

                /**
                 * Use this method to set the current view.
                 *
                 * @param   {ViewSelectorItem}  viewSelectorItem    The view selector item.
                 */
                setCurrentView(viewSelectorItem: ViewSelectorItem): void;
            }

            /**
             * Interface for a view selector item.  This object contains data that identifies a view. Use this as a parameter to
             * the ViewSelector.setCurrentView method.
             */
            export interface ViewSelectorItem {
                /**
                 * Returns a LookupValue that references this view.
                 *
                 * @return  The entity reference.
                 */
                getEntityReference(): LookupValue;
            }
        }

        /**
         * Interface for a navigation item.
         */
        export interface NavigationItem extends UiElement, UiFocusable {
            /**
             * Gets the name of the item.
             *
             * @return  The identifier.
             */
            getId(): string;
        }

        /**
         * Interface for Xrm.Page.ui.navigation.
         */
        export interface Navigation {
            /**
             * A reference to the collection of available navigation items.
             */
            items: Collection.ItemCollection<NavigationItem>;
        }

        /**
         * Interface for an entity's form selector item.
         */
        export interface FormItem {
            /**
             * Gets the unique identifier of the form.
             *
             * @return  The identifier, in Guid format.
             */
            getId(): string;

            /**
             * Gets the label for the form.
             *
             * @return  The label.
             */
            getLabel(): string;

            /**
             * Navigates the user to this form.
             */
            navigate(): void;
        }

        /**
         * Interface for the form selector API.
         */
        export interface FormSelector {
            /**
             * Gets current form.
             *
             * @return  The current item.
             *
             * @remarks When only one form is available this method will return null.
             */
            getCurrentItem(): FormItem;

            /**
             * A reference to the collection of available forms.
             */
            items: Collection.ItemCollection<FormItem>;
        }
    }

    /**
     * An definition module for URL-based, CRM component parameters.
     *
     * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
     */
    export namespace Url {
        /**
         * Command Bar Display options for Xrm.Url.FormOpenParameters.cmdbar, Xrm.Url.ViewOpenParameters.cmdbar, and Xrm.Utility.FormOpenParameters.cmdbar.
         */
        export type CmdBarDisplay = "true" | "false";
        /**
         * Navigation Bar Display options for Xrm.Url.FormOpenParameters.navbar, Xrm.Url.ViewOpenParameters.navbar, and Xrm.Utility.FormOpenParameters.navbar.
         */
        export type NavBarDisplay = "entity" | "off" | "on";
        /**
         * Report Open Action options for Xrm.Url.ReportOpenParameters.actions.
         */
        export type ReportAction = "filter" | "run";

        /**
         * Interface for defining parameters on a request to open a form with main.aspx (as with
         * window.open). Useful for parsing the keys and values into a string of the format:
         * "&key=value".
         *
         * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
         *
         * @remarks  A member for "pagetype" is not provided.  The value "entityrecord" is required in
         *           the URL, for forms. Example:  "pagetype=entityrecord"
         */
        export interface FormOpenParameters {
            /**
             * The logical name of the entity.
             */
            etn: string;

            /**
             * Additional parameters can be provided to the request. This can only be used to provide
             * default field values for the form, or pass data to custom parameters that have been
             * customized for the form.  See example below for setting the selected form.
             *
             * @remarks Example:  encodeURIComponent( "formid={8c9f3e6f-7839-e211-831e-00155db7d98f}" );
             */
            extraqs?: string | undefined;

            /**
             * Controls whether the command bar is displayed.
             * Accepted values are: "true"    (The command bar is displayed.)
             *                      "false"   (The command bar is not displayed.)
             */
            cmdbar?: CmdBarDisplay | undefined;

            /**
             * Controls whether the Navigation bar is displayed on the form.
             * Accepted values are: "on"      (The navigation bar is displayed.)
             *                      "off"     (The navigation bar is not displayed.)
             *                      "entity"  (On an entity form, only the navigation options for related
             *                                entities are available.)
             */
            navbar?: NavBarDisplay | undefined;
        }

        /**
         * Interface for defining parameters on a request to open a view with main.aspx (as with
         * window.open). Useful for parsing the keys and values into a string of the format:
         * "&key=value".
         *
         * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
         *
         * @remarks  A member for "pagetype" is not provided.  The value "entitylist" is required in
         *           the URL, for views. Example:  "pagetype=entitylist"
         */
        export interface ViewOpenParameters {
            /**
             * The logical name of the entity.
             */
            etn: string;

            /**
             * The unique identifier of a view, in Guid format, which is valid for the entity described by
             * {@link etn}.
             */
            viewid: string;

            /**
             * The type of view identified by {@link viewid}.
             *
             * @remarks  Accepted values are:    1039    System View
             *                                   4230    User View.
             */
            viewtype: XrmEnum.ViewType;

            /**
             * Controls whether the command bar is displayed.
             * Accepted values are: "true"    (The command bar is displayed.)
             *                      "false"   (The command bar is not displayed.)
             */
            cmdbar?: CmdBarDisplay | undefined;

            /**
             * Controls whether the Navigation bar is displayed on the form.
             * Accepted values are: "on"      (The navigation bar is displayed.)
             *                      "off"     (The navigation bar is not displayed.)
             *                      "entity"  (On an entity form, only the navigation options for related
             *                                entities are available.)
             */
            navbar?: NavBarDisplay | undefined;
        }

        /**
         * Interface for defining parameters of a request to open a dialog with rundialog.aspx (as with
         * window.open).  Useful for parsing the keys and values into a string of the format:
         * "&key=value".
         *
         * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
         */
        export interface DialogOpenParameters {
            /**
             * The unique identifier of the dialog, in Guid format, which is valid for the entity described
             * by: {@link EntityName}
             */
            DialogId: string;

            /**
             * The logical name of the entity.
             */
            EntityName: string;

            /**
             * The unique identifier for the targeted record.
             */
            ObjectId: string;
        }

        /**
         * Interface for defining parameters of a request to open a report with viewer.apsx (as with
         * window.open).  Useful for parsing out the keys and values into a string of the format:
         * "&key=value"
         *
         * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
         */
        export interface ReportOpenParameters {
            /**
             * The action to perform, as either "run" or "filter".
             *
             * @remarks  "run"       Executes the report with default filters.
             *           "filter"    Presents the user with the filter editor, and a "Run Report" button.
             */
            action: ReportAction;

            /**
             * The file name of the report.  For out-of-box reports, this parameter enables context-sensitive
             * help.
             */
            helpID?: string | undefined;

            /**
             * The unique identifier, held in the report's 'reportid' attribute, in Guid format.
             */
            id: string;
        }
    }

    /**
     * The Xrm.Utility API
     *
     * @see {@link http://msdn.microsoft.com/en-us/library/gg328255.aspx|Documentation} for details.
     */
    export namespace Utility {
        export interface OpenParameters {
            /**
             * Additional parameters can be provided to the request, by overloading
             * this object with additional key and value pairs. This can only be used
             * to provide default field values for the form, or pass data to custom
             * parameters that have been customized for the form.
             */
            [index: string]: string;
        }

        /**
         * Interface for defining parameters on a Xrm.Utility.openEntityForm() request.
         */
        export interface FormOpenParameters extends OpenParameters {
            /**
             * The identifier of the form to use, when several are available.
             */
            formid?: string | undefined;

            /**
             * Controls whether the Navigation bar is displayed on the form.
             * Accepted values are: "on"      (The navigation bar is displayed.)
             *                      "off"     (The navigation bar is not displayed.)
             *                      "entity"  (On an entity form, only the navigation options for related
             *                                entities are available.)
             */
            navbar?: Url.NavBarDisplay | undefined;

            /**
             * Controls whether the command bar is displayed.
             * Accepted values are: "true"    (The command bar is displayed.)
             *                      "false"   (The command bar is not displayed.)
             */
            cmdbar?: Url.CmdBarDisplay | undefined;
        }

        /**
         * Interface for window options.
         */
        export interface WindowOptions {
            /**
             * Direct the form to open in a new window.
             */
            openInNewWindow: boolean;
        }
    }
}

declare namespace XrmEnum {
    /**
     * Enumeration of entity form states/types.
     */
    export const enum FormType {
        Undefined = 0,
        Create = 1,
        Update = 2,
        ReadOnly = 3,
        Disabled = 4,
        BulkEdit = 6,
    }

    /**
     * Enumeration of entity form save modes.
     */
    export const enum SaveMode {
        Save = 1,
        SaveAndClose = 2,
        SaveAndNew = 59,
        AutoSave = 70,
        SaveAsCompleted = 58,
        Deactivate = 5,
        Reactivate = 6,
        Assign = 47,
        Send = 7,
        Qualify = 16,
        Disqualify = 15,
    }

    /**
     * Enumeration of stage categories.
     */
    export const enum StageCategory {
        Qualify = 0,
        Develop = 1,
        Propose = 2,
        Close = 3,
        Identify = 4,
        Research = 5,
        Resolve = 6,
    }

    /**
     * Enumeration of grid control context resolutions.
     */
    export const enum GridControlContext {
        Unknown = 0,
        RibbonContextForm = 1,
        RibbonContextListing = 2,
        FormContextUnrelated = 3,
        FormContextRelated = 4,
    }

    /**
     * An enumeration for view types.
     */
    export const enum ViewType {
        SystemView = 1039,
        UserView = 4230,
    }
}
