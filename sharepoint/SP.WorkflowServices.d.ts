// Type definitions for SharePoint JSOM 
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="SP.d.ts"/>

declare namespace SP.WorkflowServices {

    export enum WorkflowStatus {
        notStarted,
        started,
        suspended,
        canceling,
        canceled,
        terminated,
        completed,
        notSpecified,
        invalid
    }

    // TODO: comments, types
    export class InteropService extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext, objectPath: SP.ObjectPathStaticProperty);
        static getCurrent(context: SP.ClientRuntimeContext): InteropService;
        enableEvents(listId: SP.Guid, itemGuid: SP.Guid): void;
        disableEvents(listId: SP.Guid, itemGuid: SP.Guid): void;
        startWorkflow(associationName: string, correlationId: SP.Guid, listId: SP.Guid, itemGuid: SP.Guid, workflowParameters: any): SP.GuidResult;
        cancelWorkflow(instanceId: SP.Guid): void;
    }

    /** Represents a workflow definition and associated properties. */
    export class WorkflowDefinition extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext);
        /** Url of the association form */
        get_associationUrl(): string;
        /** Url of the association form */
        set_associationUrl(value: string): string;
        get_description(): string;
        set_description(value: string): string;
        get_displayName(): string;
        set_displayName(value: string): string;
        /** Identifier for a draft version of the workflow definition */
        get_draftVersion(): string;
        /** Identifier for a draft version of the workflow definition */
        set_draftVersion(value: string): string;
        /** Defines the fields of the workflow initiation forms and association forms (CAML string)  */
        get_formField(): string;
        /** Defines the fields of the workflow initiation forms and association forms (CAML string)  */
        set_formField(value: string): string;
        get_id(): string;
        set_id(value: string): string;
        get_initiationUrl(): string;
        set_initiationUrl(value: string): string;
        /** Gets custom properties of the workflow definition */
        get_properties(): { [propertyName: string]: any; };
        /** true if the workflow definition has been published to the external workflow host; false if the workflow definition is only saved on the site  */
        get_published(): boolean;
        /** Determines whether to automatically generate an association form for this workflow.
            If the value is true, and the associationUrl is not already set, a default association form is automatically generated for the workflow when saveDefinition is called.  */
        get_requiresAssociationForm(): boolean;
        /** Determines whether to automatically generate an association form for this workflow.
            If the value is true, and the associationUrl is not already set, a default association form is automatically generated for the workflow when saveDefinition is called.  */
        set_requiresAssociationForm(value: boolean): boolean;
        /** Determines whether to automatically generate an initiation form for this workflow.
            If the value is true, and the initiationUrl is not already set, a default initiation form is automatically generated for the workflow when saveDefinition is called.  */
        get_requiresInitiationForm(): boolean;
        /** Determines whether to automatically generate an initiation form for this workflow.
            If the value is true, and the initiationUrl is not already set, a default initiation form is automatically generated for the workflow when saveDefinition is called.  */
        set_requiresInitiationForm(value: boolean): boolean;
        /** RestrictToScope is a GUID value, used in conjunction with the RestrictToType property to further restrict the scope of the definition.
            For example, if the RestrictToType is "List", then setting the RestrictToScope to a particular list identifier limits the definition to be associable only to the specified list.
            If the RestrictToType is "List" but the RestrictToScope is null or the empty string, then the definition is associable to any list. */
        get_restrictToScope(): string;
        /** RestrictToScope is a GUID value, used in conjunction with the RestrictToType property to further restrict the scope of the definition.
            For example, if the RestrictToType is "List", then setting the RestrictToScope to a particular list identifier limits the definition to be associable only to the specified list.
            If the RestrictToType is "List" but the RestrictToScope is null or the empty string, then the definition is associable to any list. */
        set_restrictToScope(value: string): string;
        /** RestrictToType determines the possible event source type for a workflow subscription that uses this definition.
            Possible values include "List", "Site", the empty string, or null.  */
        get_restrictToType(): string;
        /** RestrictToType determines the possible event source type for a workflow subscription that uses this definition.
            Possible values include "List", "Site", the empty string, or null.  */
        set_restrictToType(value: string): string;
        /** XAML definition of the workflow */
        get_xaml(): string;
        /** XAML definition of the workflow */
        set_xaml(value: string): string;
        /** This method adds a key-value pair (propertyName, value) to the workflow definition object�s property bag.  */
        setProperty(propertyName: string, value: string): void;
        /** This method is internal and is not intended to be used in your code. */
        initPropertiesFromJson(parentNode: any): void;
    }

    /** Represents a collection of WorkflowDefinition objects */
    export class WorkflowDefinitionCollection extends SP.ClientObjectCollection<WorkflowDefinition> {
        itemAt(index: number): WorkflowDefinition;
        get_item(index: number): WorkflowDefinition;
        /** returns SP.WorkflowDefinition class */
        get_childItemType(): any;
    }

    /** Manages workflow definitions and workflow activity authoring. */
    export class WorkflowDeploymentService extends SP.ClientObject {
        /** Returns an XML representation of a list of valid Workflow Manager Client 1.0 actions for the specified web (WorkflowInfo element). */
        getDesignerActions(web: SP.Web): SP.StringResult;
        /** Returns an XML representation of a collection of XAML class signatures for workflow definitions.
            @param lastChanges Date time value representing the latest changes; class signatures older than this time are excluded from the result set.  */
        getActivitySignatures(lastChanged: string): SP.ClientResult<any>;
        /** Saves a SharePoint workflow definition to the workflow store.  */
        saveDefinition(definition: WorkflowDefinition): SP.GuidResult;
        /** Validates the specified activity against workflow definitions in the workflow store.  */
        validateActivity(activityXaml: string): SP.StringResult;
        /** Publishes a workflow definition to the workflow store.  */
        publishDefinition(definitionId: string): void;
        /** Marks a workflow definition as deprecated. Currently running workflow instances are allowed to complete, but new instances of the workflow definition are prevented from starting.  */
        deprecateDefinition(definitionId: string): void;
        /** Deletes a workflow definition.
            @param definitionId The guid identifier of the workflow definition.  */
        deleteDefinition(definitionId: string): void;
        /** Retrieves workflow definitions from the workflow store that match the tags. */
        enumerateDefinitions(publishedOnly: boolean): WorkflowDefinitionCollection;
        /** Retrieves a specified workflow definition from the workflow store.
            @param definitionId The guid identifier of the workflow definition.  */
        getDefinition(definitionId: string): WorkflowDefinition;
        /** Saves the collateral file of a workflow definition.
            @param workflowDefinitionId The guid identifier of the workflow definition.*/
        saveCollateral(workflowDefinitionId: string, leafFileName: string, fileContent: Base64EncodedByteArray): void;
        /** Deletes the URL of a workflow definition's collateral file.
            @param workflowDefinitionId The guid identifier of the workflow definition.  */
        deleteCollateral(workflowDefinitionId: string, leafFileName: string): void;
        /** Retrieves the URL of the collateral file of the workflow definition.
            @param workflowDefinitionId The guid identifier of the workflow definition.
            @param leafFileName The leaf name of the collateral file. */
        getCollateralUri(workflowDefinitionId: string, leafFileName: string): SP.StringResult;
        /** Packages a single workflow definition into a SharePoint solution package (.wsp file) and saves the package to the Site Assets library.
            Returns the URL of the package file in the Site Asset library.
            Remarks:
            1. This method does not activate the package.
            2. If a package with the same name already exists in the Site Assets library, the method adds an integer suffix in braces to the file name, e.g. packageDefaultFilename{2}.wsp
            @param definitionId The guid identifier of the workflow definition.
            @param packageDefaultFilename The default filename to choose for the new package.
            @param packageTitle The title of the package.
            @param packageDescription The description of the package. */
        packageDefinition(definitionId: SP.Guid, packageDefaultFilename: string, packageTitle: string, packageDescription: string): SP.StringResult;
    }

    /** Represents an instance of a workflow association that performs on a list item the process that is defined in a workflow template */
    export class WorkflowInstance extends SP.ClientObject {
        /** Contains the error string or exception information if the workflow faults. */
        get_faultInfo(): string;
        /** Unique identifier (GUID) for the workflow instance */
        get_id(): string;
        /** Gets the Coordinated Universal Time (UTC) when this workflow instance was created. */
        get_instanceCreated(): string;
        /** Gets the Coordinated Universal Time (UTC) when the workflow instance state was last persisted */
        get_lastUpdated(): string;
        /** Specifies properties of this workflow instance */
        get_properties(): { [name: string]: string; };
        /** Returns runtime status of the workflow instance */
        get_status(): WorkflowStatus;
        /** Specifies the custom status set by workflow authors. */
        get_userStatus(): string;
        /** Specifies the custom status set by workflow authors. */
        set_userStatus(value: string): string;
        /** Gets the unique identifier (GUID) of the subscription that instantiates the WorkflowInstance */
        get_workflowSubscriptionId(): SP.Guid;
        /** This method is internal and is not intended to be used in your code. */
        initPropertiesFromJson(parentNode: any): void;

    }

    /** Represents a collection of WorkflowInstance objects */
    export class WorkflowInstanceCollection extends SP.ClientObjectCollection<WorkflowInstance> {
        itemAt(index: number): WorkflowInstance;
        get_item(index: number): WorkflowInstance;
        /** returns SP.WorkflowInstance class */
        get_childItemType(): any;
    }

    /** Reads the SharePoint workflow instances from the external workflow host and manages the instance execution. */
    export class WorkflowInstanceService extends SP.ClientObject {
        /** Starts a Workflow Manager Client 1.0 instance specified by the subscription and passes the supplied parameters.
            Returns GUID of the instance object.
            @param payload Object that contains name-value pairs of parameter names and values to pass into the workflow instance. */
        startWorkflow(subscription: WorkflowSubscription, payload: { [name: string]: any; }): SP.GuidResult;
        /** Starts a Workflow Manager Client 1.0 instance specified by the subscription and passes the supplied parameters.
            Returns GUID of the instance object.
            @param subscription The subscription associated with the workflow instance.
            @param itemId The integer id of the list item on which to start the workflow instance.
            @param payload Object that contains name-value pairs of parameter names and values to pass into the workflow instance. */
        startWorkflowOnListItem(subscription: WorkflowSubscription, itemId: number, payload: { [name: string]: any; }): SP.GuidResult;
        /** Gets workflow instance specified by the provided instance GUID */
        getInstance(instanceId: string): WorkflowInstance;
        /** Gets a workflow instance collection comprising the 100 most recent workflow instances started by a specified subscription.  */
        enumerate(parentSubscription: WorkflowSubscription): WorkflowInstanceCollection;
        /** Gets a workflow instance collection comprising 100 workflow instances starting at the specified offset.  */
        enumerateWithOffset(parentSubscription: WorkflowSubscription, offset: number): WorkflowInstanceCollection;
        /** Gets the list of instances for the specified list item. */
        enumerateInstancesForListItem(listId: string, itemId: number): WorkflowInstanceCollection;
        /** Gets the list of instances for the specified list item. */
        enumerateInstancesForListItemWithOffset(listId: string, itemId: number, offset: number): WorkflowInstanceCollection;
        /** Gets the list of instances for the current site. */
        enumerateInstancesForSite(): WorkflowInstanceCollection;
        /** Gets the list of instances for the current site. */
        enumerateInstancesForSiteWithOffset(offset: number): WorkflowInstanceCollection;
        /** Retrieves a count of all the instances of the specified WorkflowSubscription. */
        countInstances(parentSubscription: WorkflowSubscription): SP.IntResult;
        /** Retrieves a count of the instances of the specified WorkflowSubscription that have a specified status. */
        countInstancesWithStatus(parentSubscription: WorkflowSubscription, status: WorkflowStatus): SP.IntResult;
        /** Sends a cancel message to the specified workflow instance and permits the instance to execute a cancellation scope. */
        cancelWorkflow(instance: WorkflowInstance): void;
        /** Terminate a workflow instance forcefully by deleting it from memory. The instance is not allowed to execute a cancellation scope */
        terminateWorkflow(instance: WorkflowInstance): void;
        suspendWorkflow(instance: WorkflowInstance): void;
        resumeWorkflow(instance: WorkflowInstance): void;
        /** Sends a custom event to a running workflow with the event payload. */
        publishCustomEvent(instance: WorkflowInstance, eventName: string, payload: string): void;
        getDebugInfo(instance: WorkflowInstance): SP.StringResult;
    }

    /** Describes the workflow host configuration states and provides service objects that interact with the workflow */
    export class WorkflowServicesManager extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext, web: SP.Web);
        static newObject(context: SP.ClientRuntimeContext, web: SP.Web): WorkflowServicesManager;
        /** The current application identifier.*/
        get_appId(): string;
        /** Indicates whether this workflow service is actively connected to a workflow host. */
        get_isConnected(): boolean;
        /** Returns the path of the current scope in the workflow host. */
        get_scopePath(): string;
        getWorkflowDeploymentService(): WorkflowDeploymentService;
        getWorkflowInstanceService(): WorkflowInstanceService;
        getWorkflowInteropService(): InteropService;
        getWorkflowSubscriptionService(): WorkflowSubscriptionService;
        /** This method is internal and is not intended to be used in your code. */
        initPropertiesFromJson(parentNode: any): void;
    }

    /** Base class representing subscriptions for the external workflow host. */
    export class WorkflowSubscription extends SP.ClientObject {
        /** Gets the unique ID of the workflow definition to activate. */
        get_definitionId(): SP.Guid;
        /** Sets the unique ID of the workflow definition to activate. */
        set_definitionId(value: SP.Guid): SP.Guid;
        /** Gets a boolean value that specifies if the workflow subscription is enabled.
            When disabled, new instances of the subscription cannot be started, but existing instances will continue to run.  */
        get_enabled(): boolean;
        /** Sets a boolean value that enables or disables the workflow subscription.
            When disabled, new instances of the subscription cannot be started, but existing instances will continue to run.  */
        set_enabled(value: boolean): boolean;
        /** Gets the logical source instance name of the event. (GUID) */
        get_eventSourceId(): string;
        /** Sets the logical source instance name of the event. (GUID) */
        set_eventSourceId(value: string): string;
        /** Gets or sets the list of event types for which the subscription is listening.
            For SharePoint events, these will map to a value in the SPEventReceiverType enumeration. */
        get_eventTypes(): string[];
        /** Gets or sets the list of event types for which the subscription is listening.
            For SharePoint events, these will map to a value in the SPEventReceiverType enumeration. */
        set_eventTypes(value: string[]): string[];
        /** Unique identifier (GUID) of the workflow subscription */
        get_id(): string;
        /** Unique identifier (GUID) of the workflow subscription */
        set_id(value: string): string;
        /** Boolean value that specifies whether multiple workflow instances can be started manually on the same list item at the same time. This property can be used for list workflows only.  */
        get_manualStartBypassesActivationLimit(): boolean;
        /** Boolean value that specifies whether multiple workflow instances can be started manually on the same list item at the same time. This property can be used for list workflows only.  */
        set_manualStartBypassesActivationLimit(value: boolean): boolean;
        /** Gets the name of the workflow subscription for the specified event source.  */
        get_name(): string;
        /** Sets the name of the workflow subscription for the specified event source.  */
        set_name(value: string): string;
        /** Gets the properties and values to pass to the workflow definition when the subscription is matched. */
        get_propertyDefinitions(): any;
        /** Gets the name of the workflow status field on the specified list.  */
        get_statusFieldName(): string;
        /** Gets or sets the name of the workflow status field on the specified list.  */
        set_statusFieldName(value: string): string;
        /** Sets the name-value pairs for workflow definition initiation parameters that are stored in the PropertyDefinitions property  */
        setProperty(propertyName: string, value: string): void;
        /** This method is internal and is not intended to be used in your code. */
        initPropertiesFromJson(parentNode: any): void;
    }

    /** Represents a collection of WorkflowSubscription objects */
    export class WorkflowSubscriptionCollection extends SP.ClientObjectCollection<WorkflowSubscription> {
        itemAt(index: number): WorkflowSubscription;
        get_item(index: number): WorkflowSubscription;
        /** returns SP.WorkflowInstance class */
        get_childItemType(): any;
    }

    export class WorkflowSubscriptionService extends SP.ClientObject {
        constructor(context: SP.ClientRuntimeContext, objectPath: SP.ObjectPathStaticProperty);
        static getCurrent(context: SP.ClientRuntimeContext): WorkflowSubscriptionService;
        /** Creates a workflow subscription for a workflow, and returns the unique identifier of the new subscription. */
        publishSubscription(subscription: WorkflowSubscription): SP.GuidResult;
        /** Creates a workflow subscription for a workflow and if necessary an event receiver on the specified list.
            Also writes an EventSourceId that matches the list as the event source.
            Returns the unique identifier of the new subscription.
            @param listId Unique identifier (GUID) for the specified list. */
        publishSubscriptionForList(subscription: WorkflowSubscription, listId: string): SP.GuidResult;
        /** Ensures that an event receiver will monitor a list for the specified event.
            @param listId Unique identifier (GUID) for the specified list.
            @eventName eventName The name of the event to be monitored. */
        registerInterestInList(listId: string, eventName: string): void;
        /** Removes monitoring for an event receiver on the specified list with the specified event.
            @param listId GUID of the list containing the event receiver to be unregistered.
            @eventName eventName The name of the event to be removed. */
        unregisterInterestInList(listId: string, eventName: string): void;
        getSubscription(subscriptionId: SP.Guid): WorkflowSubscription;
        deleteSubscription(subscriptionId: SP.Guid): WorkflowSubscription;
        /** Retrieves workflow subscriptions that contains all of the workflow subscriptions on the Web  */
        enumerateSubscriptions(): WorkflowSubscriptionCollection;
        /** Retrieves workflow subscriptions based on workflow definition */
        enumerateSubscriptionsByDefinition(definitionId: string): WorkflowSubscriptionCollection;
        /** Retrieves workflow subscriptions based on the specified EventSourceId */
        enumerateSubscriptionsByEventSource(eventSourceId: string): WorkflowSubscriptionCollection;
        /** Retrieves workflow subscriptions based on the specified list.
            @param listId The unique identifier (GUID) of the list on which to filter the subscriptions. */
        enumerateSubscriptionsByList(listId: string): WorkflowSubscriptionCollection;
    }

}
