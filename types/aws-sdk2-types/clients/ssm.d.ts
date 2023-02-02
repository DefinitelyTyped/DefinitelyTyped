import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SSM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSM.Types.ClientConfiguration)
  config: Config & SSM.Types.ClientConfiguration;
  /**
   * Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example:    Key=Owner,Value=DbAdmin     Key=Owner,Value=SysAdmin     Key=Owner,Value=Dev     Key=Stack,Value=Production     Key=Stack,Value=Pre-Production     Key=Stack,Value=Test    Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags. We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters. For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see Tagging your Amazon EC2 resources in the Amazon EC2 User Guide.
   */
  addTagsToResource(params: SSM.Types.AddTagsToResourceRequest, callback?: (err: AWSError, data: SSM.Types.AddTagsToResourceResult) => void): Request<SSM.Types.AddTagsToResourceResult, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your automations, documents, managed nodes, maintenance windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed nodes that helps you track each node's owner and stack level. For example:    Key=Owner,Value=DbAdmin     Key=Owner,Value=SysAdmin     Key=Owner,Value=Dev     Key=Stack,Value=Production     Key=Stack,Value=Pre-Production     Key=Stack,Value=Test    Most resources can have a maximum of 50 tags. Automations can have a maximum of 5 tags. We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to and are interpreted strictly as a string of characters. For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see Tagging your Amazon EC2 resources in the Amazon EC2 User Guide.
   */
  addTagsToResource(callback?: (err: AWSError, data: SSM.Types.AddTagsToResourceResult) => void): Request<SSM.Types.AddTagsToResourceResult, AWSError>;
  /**
   * Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of Amazon Web Services Systems Manager.
   */
  associateOpsItemRelatedItem(params: SSM.Types.AssociateOpsItemRelatedItemRequest, callback?: (err: AWSError, data: SSM.Types.AssociateOpsItemRelatedItemResponse) => void): Request<SSM.Types.AssociateOpsItemRelatedItemResponse, AWSError>;
  /**
   * Associates a related item to a Systems Manager OpsCenter OpsItem. For example, you can associate an Incident Manager incident or analysis with an OpsItem. Incident Manager and OpsCenter are capabilities of Amazon Web Services Systems Manager.
   */
  associateOpsItemRelatedItem(callback?: (err: AWSError, data: SSM.Types.AssociateOpsItemRelatedItemResponse) => void): Request<SSM.Types.AssociateOpsItemRelatedItemResponse, AWSError>;
  /**
   * Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
   */
  cancelCommand(params: SSM.Types.CancelCommandRequest, callback?: (err: AWSError, data: SSM.Types.CancelCommandResult) => void): Request<SSM.Types.CancelCommandResult, AWSError>;
  /**
   * Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
   */
  cancelCommand(callback?: (err: AWSError, data: SSM.Types.CancelCommandResult) => void): Request<SSM.Types.CancelCommandResult, AWSError>;
  /**
   * Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.
   */
  cancelMaintenanceWindowExecution(params: SSM.Types.CancelMaintenanceWindowExecutionRequest, callback?: (err: AWSError, data: SSM.Types.CancelMaintenanceWindowExecutionResult) => void): Request<SSM.Types.CancelMaintenanceWindowExecutionResult, AWSError>;
  /**
   * Stops a maintenance window execution that is already in progress and cancels any tasks in the window that haven't already starting running. Tasks already in progress will continue to completion.
   */
  cancelMaintenanceWindowExecution(callback?: (err: AWSError, data: SSM.Types.CancelMaintenanceWindowExecutionResult) => void): Request<SSM.Types.CancelMaintenanceWindowExecutionResult, AWSError>;
  /**
   * Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see Setting up Amazon Web Services Systems Manager for hybrid environments in the Amazon Web Services Systems Manager User Guide.   Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called managed nodes. 
   */
  createActivation(params: SSM.Types.CreateActivationRequest, callback?: (err: AWSError, data: SSM.Types.CreateActivationResult) => void): Request<SSM.Types.CreateActivationResult, AWSError>;
  /**
   * Generates an activation code and activation ID you can use to register your on-premises servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and ID when installing SSM Agent on machines in your hybrid environment. For more information about requirements for managing on-premises machines using Systems Manager, see Setting up Amazon Web Services Systems Manager for hybrid environments in the Amazon Web Services Systems Manager User Guide.   Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are configured for Systems Manager are all called managed nodes. 
   */
  createActivation(callback?: (err: AWSError, data: SSM.Types.CreateActivationResult) => void): Request<SSM.Types.CreateActivationResult, AWSError>;
  /**
   * A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service. 
   */
  createAssociation(params: SSM.Types.CreateAssociationRequest, callback?: (err: AWSError, data: SSM.Types.CreateAssociationResult) => void): Request<SSM.Types.CreateAssociationResult, AWSError>;
  /**
   * A State Manager association defines the state that you want to maintain on your managed nodes. For example, an association can specify that anti-virus software must be installed and running on your managed nodes, or that certain ports must be closed. For static targets, the association specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The association also specifies actions to take when applying the configuration. For example, an association for anti-virus software might run once a day. If the software isn't installed, then State Manager installs it. If the software is installed, but the service isn't running, then the association might instruct State Manager to start the service. 
   */
  createAssociation(callback?: (err: AWSError, data: SSM.Types.CreateAssociationResult) => void): Request<SSM.Types.CreateAssociationResult, AWSError>;
  /**
   * Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets. When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified. If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.
   */
  createAssociationBatch(params: SSM.Types.CreateAssociationBatchRequest, callback?: (err: AWSError, data: SSM.Types.CreateAssociationBatchResult) => void): Request<SSM.Types.CreateAssociationBatchResult, AWSError>;
  /**
   * Associates the specified Amazon Web Services Systems Manager document (SSM document) with the specified managed nodes or targets. When you associate a document with one or more managed nodes using IDs or tags, Amazon Web Services Systems Manager Agent (SSM Agent) running on the managed node processes the document and configures the node as specified. If you associate a document with a managed node that already has an associated document, the system returns the AssociationAlreadyExists exception.
   */
  createAssociationBatch(callback?: (err: AWSError, data: SSM.Types.CreateAssociationBatchResult) => void): Request<SSM.Types.CreateAssociationBatchResult, AWSError>;
  /**
   * Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see Amazon Web Services Systems Manager Documents in the Amazon Web Services Systems Manager User Guide.
   */
  createDocument(params: SSM.Types.CreateDocumentRequest, callback?: (err: AWSError, data: SSM.Types.CreateDocumentResult) => void): Request<SSM.Types.CreateDocumentResult, AWSError>;
  /**
   * Creates a Amazon Web Services Systems Manager (SSM document). An SSM document defines the actions that Systems Manager performs on your managed nodes. For more information about SSM documents, including information about supported schemas, features, and syntax, see Amazon Web Services Systems Manager Documents in the Amazon Web Services Systems Manager User Guide.
   */
  createDocument(callback?: (err: AWSError, data: SSM.Types.CreateDocumentResult) => void): Request<SSM.Types.CreateDocumentResult, AWSError>;
  /**
   * Creates a new maintenance window.  The value you specify for Duration determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for Cutoff. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for Cutoff is one hour, no maintenance window tasks can start after 5 PM. 
   */
  createMaintenanceWindow(params: SSM.Types.CreateMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.CreateMaintenanceWindowResult) => void): Request<SSM.Types.CreateMaintenanceWindowResult, AWSError>;
  /**
   * Creates a new maintenance window.  The value you specify for Duration determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for Cutoff. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for Cutoff is one hour, no maintenance window tasks can start after 5 PM. 
   */
  createMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.CreateMaintenanceWindowResult) => void): Request<SSM.Types.CreateMaintenanceWindowResult, AWSError>;
  /**
   * Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see Getting started with OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide. 
   */
  createOpsItem(params: SSM.Types.CreateOpsItemRequest, callback?: (err: AWSError, data: SSM.Types.CreateOpsItemResponse) => void): Request<SSM.Types.CreateOpsItemResponse, AWSError>;
  /**
   * Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see Getting started with OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see Amazon Web Services Systems Manager OpsCenter in the Amazon Web Services Systems Manager User Guide. 
   */
  createOpsItem(callback?: (err: AWSError, data: SSM.Types.CreateOpsItemResponse) => void): Request<SSM.Types.CreateOpsItemResponse, AWSError>;
  /**
   * If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.
   */
  createOpsMetadata(params: SSM.Types.CreateOpsMetadataRequest, callback?: (err: AWSError, data: SSM.Types.CreateOpsMetadataResult) => void): Request<SSM.Types.CreateOpsMetadataResult, AWSError>;
  /**
   * If you create a new application in Application Manager, Amazon Web Services Systems Manager calls this API operation to specify information about the new application, including the application type.
   */
  createOpsMetadata(callback?: (err: AWSError, data: SSM.Types.CreateOpsMetadataResult) => void): Request<SSM.Types.CreateOpsMetadataResult, AWSError>;
  /**
   * Creates a patch baseline.  For information about valid key-value pairs in PatchFilters for each supported operating system type, see PatchFilter. 
   */
  createPatchBaseline(params: SSM.Types.CreatePatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.CreatePatchBaselineResult) => void): Request<SSM.Types.CreatePatchBaselineResult, AWSError>;
  /**
   * Creates a patch baseline.  For information about valid key-value pairs in PatchFilters for each supported operating system type, see PatchFilter. 
   */
  createPatchBaseline(callback?: (err: AWSError, data: SSM.Types.CreatePatchBaselineResult) => void): Request<SSM.Types.CreatePatchBaselineResult, AWSError>;
  /**
   * A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: SyncToDestination and SyncFromSource. You can configure Systems Manager Inventory to use the SyncToDestination type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Configuring resource data sync for Inventory in the Amazon Web Services Systems Manager User Guide. You can configure Systems Manager Explorer to use the SyncFromSource type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or EntireOrganization by using Organizations. For more information, see Setting up Systems Manager Explorer to display data from multiple accounts and Regions in the Amazon Web Services Systems Manager User Guide. A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the ListResourceDataSync.  By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy.  
   */
  createResourceDataSync(params: SSM.Types.CreateResourceDataSyncRequest, callback?: (err: AWSError, data: SSM.Types.CreateResourceDataSyncResult) => void): Request<SSM.Types.CreateResourceDataSyncResult, AWSError>;
  /**
   * A resource data sync helps you view data from multiple sources in a single location. Amazon Web Services Systems Manager offers two types of resource data sync: SyncToDestination and SyncFromSource. You can configure Systems Manager Inventory to use the SyncToDestination type to synchronize Inventory data from multiple Amazon Web Services Regions to a single Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Configuring resource data sync for Inventory in the Amazon Web Services Systems Manager User Guide. You can configure Systems Manager Explorer to use the SyncFromSource type to synchronize operational work items (OpsItems) and operational data (OpsData) from multiple Amazon Web Services Regions to a single Amazon S3 bucket. This type can synchronize OpsItems and OpsData from multiple Amazon Web Services accounts and Amazon Web Services Regions or EntireOrganization by using Organizations. For more information, see Setting up Systems Manager Explorer to display data from multiple accounts and Regions in the Amazon Web Services Systems Manager User Guide. A resource data sync is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data. To check the status of a sync, use the ListResourceDataSync.  By default, data isn't encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy.  
   */
  createResourceDataSync(callback?: (err: AWSError, data: SSM.Types.CreateResourceDataSyncResult) => void): Request<SSM.Types.CreateResourceDataSyncResult, AWSError>;
  /**
   * Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.
   */
  deleteActivation(params: SSM.Types.DeleteActivationRequest, callback?: (err: AWSError, data: SSM.Types.DeleteActivationResult) => void): Request<SSM.Types.DeleteActivationResult, AWSError>;
  /**
   * Deletes an activation. You aren't required to delete an activation. If you delete an activation, you can no longer use it to register additional managed nodes. Deleting an activation doesn't de-register managed nodes. You must manually de-register managed nodes.
   */
  deleteActivation(callback?: (err: AWSError, data: SSM.Types.DeleteActivationResult) => void): Request<SSM.Types.DeleteActivationResult, AWSError>;
  /**
   * Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the Targets parameter, then you must delete the association by using the association ID. When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.
   */
  deleteAssociation(params: SSM.Types.DeleteAssociationRequest, callback?: (err: AWSError, data: SSM.Types.DeleteAssociationResult) => void): Request<SSM.Types.DeleteAssociationResult, AWSError>;
  /**
   * Disassociates the specified Amazon Web Services Systems Manager document (SSM document) from the specified managed node. If you created the association by using the Targets parameter, then you must delete the association by using the association ID. When you disassociate a document from a managed node, it doesn't change the configuration of the node. To change the configuration state of a managed node after you disassociate a document, you must create a new document with the desired configuration and associate it with the node.
   */
  deleteAssociation(callback?: (err: AWSError, data: SSM.Types.DeleteAssociationResult) => void): Request<SSM.Types.DeleteAssociationResult, AWSError>;
  /**
   * Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document. Before you delete the document, we recommend that you use DeleteAssociation to disassociate all managed nodes that are associated with the document.
   */
  deleteDocument(params: SSM.Types.DeleteDocumentRequest, callback?: (err: AWSError, data: SSM.Types.DeleteDocumentResult) => void): Request<SSM.Types.DeleteDocumentResult, AWSError>;
  /**
   * Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the document. Before you delete the document, we recommend that you use DeleteAssociation to disassociate all managed nodes that are associated with the document.
   */
  deleteDocument(callback?: (err: AWSError, data: SSM.Types.DeleteDocumentResult) => void): Request<SSM.Types.DeleteDocumentResult, AWSError>;
  /**
   * Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
   */
  deleteInventory(params: SSM.Types.DeleteInventoryRequest, callback?: (err: AWSError, data: SSM.Types.DeleteInventoryResult) => void): Request<SSM.Types.DeleteInventoryResult, AWSError>;
  /**
   * Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
   */
  deleteInventory(callback?: (err: AWSError, data: SSM.Types.DeleteInventoryResult) => void): Request<SSM.Types.DeleteInventoryResult, AWSError>;
  /**
   * Deletes a maintenance window.
   */
  deleteMaintenanceWindow(params: SSM.Types.DeleteMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.DeleteMaintenanceWindowResult) => void): Request<SSM.Types.DeleteMaintenanceWindowResult, AWSError>;
  /**
   * Deletes a maintenance window.
   */
  deleteMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.DeleteMaintenanceWindowResult) => void): Request<SSM.Types.DeleteMaintenanceWindowResult, AWSError>;
  /**
   * Delete OpsMetadata related to an application.
   */
  deleteOpsMetadata(params: SSM.Types.DeleteOpsMetadataRequest, callback?: (err: AWSError, data: SSM.Types.DeleteOpsMetadataResult) => void): Request<SSM.Types.DeleteOpsMetadataResult, AWSError>;
  /**
   * Delete OpsMetadata related to an application.
   */
  deleteOpsMetadata(callback?: (err: AWSError, data: SSM.Types.DeleteOpsMetadataResult) => void): Request<SSM.Types.DeleteOpsMetadataResult, AWSError>;
  /**
   * Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
   */
  deleteParameter(params: SSM.Types.DeleteParameterRequest, callback?: (err: AWSError, data: SSM.Types.DeleteParameterResult) => void): Request<SSM.Types.DeleteParameterResult, AWSError>;
  /**
   * Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
   */
  deleteParameter(callback?: (err: AWSError, data: SSM.Types.DeleteParameterResult) => void): Request<SSM.Types.DeleteParameterResult, AWSError>;
  /**
   * Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
   */
  deleteParameters(params: SSM.Types.DeleteParametersRequest, callback?: (err: AWSError, data: SSM.Types.DeleteParametersResult) => void): Request<SSM.Types.DeleteParametersResult, AWSError>;
  /**
   * Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
   */
  deleteParameters(callback?: (err: AWSError, data: SSM.Types.DeleteParametersResult) => void): Request<SSM.Types.DeleteParametersResult, AWSError>;
  /**
   * Deletes a patch baseline.
   */
  deletePatchBaseline(params: SSM.Types.DeletePatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.DeletePatchBaselineResult) => void): Request<SSM.Types.DeletePatchBaselineResult, AWSError>;
  /**
   * Deletes a patch baseline.
   */
  deletePatchBaseline(callback?: (err: AWSError, data: SSM.Types.DeletePatchBaselineResult) => void): Request<SSM.Types.DeletePatchBaselineResult, AWSError>;
  /**
   * Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.
   */
  deleteResourceDataSync(params: SSM.Types.DeleteResourceDataSyncRequest, callback?: (err: AWSError, data: SSM.Types.DeleteResourceDataSyncResult) => void): Request<SSM.Types.DeleteResourceDataSyncResult, AWSError>;
  /**
   * Deletes a resource data sync configuration. After the configuration is deleted, changes to data on managed nodes are no longer synced to or from the target. Deleting a sync configuration doesn't delete data.
   */
  deleteResourceDataSync(callback?: (err: AWSError, data: SSM.Types.DeleteResourceDataSyncResult) => void): Request<SSM.Types.DeleteResourceDataSyncResult, AWSError>;
  /**
   * Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, OpsItemGroup is the only resource that supports Systems Manager resource policies. The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
   */
  deleteResourcePolicy(params: SSM.Types.DeleteResourcePolicyRequest, callback?: (err: AWSError, data: SSM.Types.DeleteResourcePolicyResponse) => void): Request<SSM.Types.DeleteResourcePolicyResponse, AWSError>;
  /**
   * Deletes a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, OpsItemGroup is the only resource that supports Systems Manager resource policies. The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
   */
  deleteResourcePolicy(callback?: (err: AWSError, data: SSM.Types.DeleteResourcePolicyResponse) => void): Request<SSM.Types.DeleteResourcePolicyResponse, AWSError>;
  /**
   * Removes the server or virtual machine from the list of registered servers. You can reregister the node again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
   */
  deregisterManagedInstance(params: SSM.Types.DeregisterManagedInstanceRequest, callback?: (err: AWSError, data: SSM.Types.DeregisterManagedInstanceResult) => void): Request<SSM.Types.DeregisterManagedInstanceResult, AWSError>;
  /**
   * Removes the server or virtual machine from the list of registered servers. You can reregister the node again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
   */
  deregisterManagedInstance(callback?: (err: AWSError, data: SSM.Types.DeregisterManagedInstanceResult) => void): Request<SSM.Types.DeregisterManagedInstanceResult, AWSError>;
  /**
   * Removes a patch group from a patch baseline.
   */
  deregisterPatchBaselineForPatchGroup(params: SSM.Types.DeregisterPatchBaselineForPatchGroupRequest, callback?: (err: AWSError, data: SSM.Types.DeregisterPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.DeregisterPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Removes a patch group from a patch baseline.
   */
  deregisterPatchBaselineForPatchGroup(callback?: (err: AWSError, data: SSM.Types.DeregisterPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.DeregisterPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Removes a target from a maintenance window.
   */
  deregisterTargetFromMaintenanceWindow(params: SSM.Types.DeregisterTargetFromMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.DeregisterTargetFromMaintenanceWindowResult) => void): Request<SSM.Types.DeregisterTargetFromMaintenanceWindowResult, AWSError>;
  /**
   * Removes a target from a maintenance window.
   */
  deregisterTargetFromMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.DeregisterTargetFromMaintenanceWindowResult) => void): Request<SSM.Types.DeregisterTargetFromMaintenanceWindowResult, AWSError>;
  /**
   * Removes a task from a maintenance window.
   */
  deregisterTaskFromMaintenanceWindow(params: SSM.Types.DeregisterTaskFromMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.DeregisterTaskFromMaintenanceWindowResult) => void): Request<SSM.Types.DeregisterTaskFromMaintenanceWindowResult, AWSError>;
  /**
   * Removes a task from a maintenance window.
   */
  deregisterTaskFromMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.DeregisterTaskFromMaintenanceWindowResult) => void): Request<SSM.Types.DeregisterTaskFromMaintenanceWindowResult, AWSError>;
  /**
   * Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.
   */
  describeActivations(params: SSM.Types.DescribeActivationsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeActivationsResult) => void): Request<SSM.Types.DescribeActivationsResult, AWSError>;
  /**
   * Describes details about the activation, such as the date and time the activation was created, its expiration date, the Identity and Access Management (IAM) role assigned to the managed nodes in the activation, and the number of nodes registered by using this activation.
   */
  describeActivations(callback?: (err: AWSError, data: SSM.Types.DescribeActivationsResult) => void): Request<SSM.Types.DescribeActivationsResult, AWSError>;
  /**
   * Describes the association for the specified target or managed node. If you created the association by using the Targets parameter, then you must retrieve the association by using the association ID.
   */
  describeAssociation(params: SSM.Types.DescribeAssociationRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAssociationResult) => void): Request<SSM.Types.DescribeAssociationResult, AWSError>;
  /**
   * Describes the association for the specified target or managed node. If you created the association by using the Targets parameter, then you must retrieve the association by using the association ID.
   */
  describeAssociation(callback?: (err: AWSError, data: SSM.Types.DescribeAssociationResult) => void): Request<SSM.Types.DescribeAssociationResult, AWSError>;
  /**
   * Views information about a specific execution of a specific association.
   */
  describeAssociationExecutionTargets(params: SSM.Types.DescribeAssociationExecutionTargetsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAssociationExecutionTargetsResult) => void): Request<SSM.Types.DescribeAssociationExecutionTargetsResult, AWSError>;
  /**
   * Views information about a specific execution of a specific association.
   */
  describeAssociationExecutionTargets(callback?: (err: AWSError, data: SSM.Types.DescribeAssociationExecutionTargetsResult) => void): Request<SSM.Types.DescribeAssociationExecutionTargetsResult, AWSError>;
  /**
   * Views all executions for a specific association ID. 
   */
  describeAssociationExecutions(params: SSM.Types.DescribeAssociationExecutionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAssociationExecutionsResult) => void): Request<SSM.Types.DescribeAssociationExecutionsResult, AWSError>;
  /**
   * Views all executions for a specific association ID. 
   */
  describeAssociationExecutions(callback?: (err: AWSError, data: SSM.Types.DescribeAssociationExecutionsResult) => void): Request<SSM.Types.DescribeAssociationExecutionsResult, AWSError>;
  /**
   * Provides details about all active and terminated Automation executions.
   */
  describeAutomationExecutions(params: SSM.Types.DescribeAutomationExecutionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAutomationExecutionsResult) => void): Request<SSM.Types.DescribeAutomationExecutionsResult, AWSError>;
  /**
   * Provides details about all active and terminated Automation executions.
   */
  describeAutomationExecutions(callback?: (err: AWSError, data: SSM.Types.DescribeAutomationExecutionsResult) => void): Request<SSM.Types.DescribeAutomationExecutionsResult, AWSError>;
  /**
   * Information about all active and terminated step executions in an Automation workflow.
   */
  describeAutomationStepExecutions(params: SSM.Types.DescribeAutomationStepExecutionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAutomationStepExecutionsResult) => void): Request<SSM.Types.DescribeAutomationStepExecutionsResult, AWSError>;
  /**
   * Information about all active and terminated step executions in an Automation workflow.
   */
  describeAutomationStepExecutions(callback?: (err: AWSError, data: SSM.Types.DescribeAutomationStepExecutionsResult) => void): Request<SSM.Types.DescribeAutomationStepExecutionsResult, AWSError>;
  /**
   * Lists all patches eligible to be included in a patch baseline.
   */
  describeAvailablePatches(params: SSM.Types.DescribeAvailablePatchesRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAvailablePatchesResult) => void): Request<SSM.Types.DescribeAvailablePatchesResult, AWSError>;
  /**
   * Lists all patches eligible to be included in a patch baseline.
   */
  describeAvailablePatches(callback?: (err: AWSError, data: SSM.Types.DescribeAvailablePatchesResult) => void): Request<SSM.Types.DescribeAvailablePatchesResult, AWSError>;
  /**
   * Describes the specified Amazon Web Services Systems Manager document (SSM document).
   */
  describeDocument(params: SSM.Types.DescribeDocumentRequest, callback?: (err: AWSError, data: SSM.Types.DescribeDocumentResult) => void): Request<SSM.Types.DescribeDocumentResult, AWSError>;
  /**
   * Describes the specified Amazon Web Services Systems Manager document (SSM document).
   */
  describeDocument(callback?: (err: AWSError, data: SSM.Types.DescribeDocumentResult) => void): Request<SSM.Types.DescribeDocumentResult, AWSError>;
  /**
   * Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (All). 
   */
  describeDocumentPermission(params: SSM.Types.DescribeDocumentPermissionRequest, callback?: (err: AWSError, data: SSM.Types.DescribeDocumentPermissionResponse) => void): Request<SSM.Types.DescribeDocumentPermissionResponse, AWSError>;
  /**
   * Describes the permissions for a Amazon Web Services Systems Manager document (SSM document). If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's Amazon Web Services account ID) or publicly (All). 
   */
  describeDocumentPermission(callback?: (err: AWSError, data: SSM.Types.DescribeDocumentPermissionResponse) => void): Request<SSM.Types.DescribeDocumentPermissionResponse, AWSError>;
  /**
   * All associations for the managed node(s).
   */
  describeEffectiveInstanceAssociations(params: SSM.Types.DescribeEffectiveInstanceAssociationsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeEffectiveInstanceAssociationsResult) => void): Request<SSM.Types.DescribeEffectiveInstanceAssociationsResult, AWSError>;
  /**
   * All associations for the managed node(s).
   */
  describeEffectiveInstanceAssociations(callback?: (err: AWSError, data: SSM.Types.DescribeEffectiveInstanceAssociationsResult) => void): Request<SSM.Types.DescribeEffectiveInstanceAssociationsResult, AWSError>;
  /**
   * Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.
   */
  describeEffectivePatchesForPatchBaseline(params: SSM.Types.DescribeEffectivePatchesForPatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.DescribeEffectivePatchesForPatchBaselineResult) => void): Request<SSM.Types.DescribeEffectivePatchesForPatchBaselineResult, AWSError>;
  /**
   * Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Applies to patch baselines for Windows only.
   */
  describeEffectivePatchesForPatchBaseline(callback?: (err: AWSError, data: SSM.Types.DescribeEffectivePatchesForPatchBaselineResult) => void): Request<SSM.Types.DescribeEffectivePatchesForPatchBaselineResult, AWSError>;
  /**
   * The status of the associations for the managed node(s).
   */
  describeInstanceAssociationsStatus(params: SSM.Types.DescribeInstanceAssociationsStatusRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstanceAssociationsStatusResult) => void): Request<SSM.Types.DescribeInstanceAssociationsStatusResult, AWSError>;
  /**
   * The status of the associations for the managed node(s).
   */
  describeInstanceAssociationsStatus(callback?: (err: AWSError, data: SSM.Types.DescribeInstanceAssociationsStatusResult) => void): Request<SSM.Types.DescribeInstanceAssociationsStatusResult, AWSError>;
  /**
   * Describes one or more of your managed nodes, including information about the operating system platform, the version of SSM Agent installed on the managed node, node status, and so on. If you specify one or more managed node IDs, it returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.  The IamRole field for this API operation is the Identity and Access Management (IAM) role assigned to on-premises managed nodes. This call doesn't return the IAM role for EC2 instances. 
   */
  describeInstanceInformation(params: SSM.Types.DescribeInstanceInformationRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstanceInformationResult) => void): Request<SSM.Types.DescribeInstanceInformationResult, AWSError>;
  /**
   * Describes one or more of your managed nodes, including information about the operating system platform, the version of SSM Agent installed on the managed node, node status, and so on. If you specify one or more managed node IDs, it returns information for those managed nodes. If you don't specify node IDs, it returns information for all your managed nodes. If you specify a node ID that isn't valid or a node that you don't own, you receive an error.  The IamRole field for this API operation is the Identity and Access Management (IAM) role assigned to on-premises managed nodes. This call doesn't return the IAM role for EC2 instances. 
   */
  describeInstanceInformation(callback?: (err: AWSError, data: SSM.Types.DescribeInstanceInformationResult) => void): Request<SSM.Types.DescribeInstanceInformationResult, AWSError>;
  /**
   * Retrieves the high-level patch state of one or more managed nodes.
   */
  describeInstancePatchStates(params: SSM.Types.DescribeInstancePatchStatesRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchStatesResult) => void): Request<SSM.Types.DescribeInstancePatchStatesResult, AWSError>;
  /**
   * Retrieves the high-level patch state of one or more managed nodes.
   */
  describeInstancePatchStates(callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchStatesResult) => void): Request<SSM.Types.DescribeInstancePatchStatesResult, AWSError>;
  /**
   * Retrieves the high-level patch state for the managed nodes in the specified patch group.
   */
  describeInstancePatchStatesForPatchGroup(params: SSM.Types.DescribeInstancePatchStatesForPatchGroupRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchStatesForPatchGroupResult) => void): Request<SSM.Types.DescribeInstancePatchStatesForPatchGroupResult, AWSError>;
  /**
   * Retrieves the high-level patch state for the managed nodes in the specified patch group.
   */
  describeInstancePatchStatesForPatchGroup(callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchStatesForPatchGroupResult) => void): Request<SSM.Types.DescribeInstancePatchStatesForPatchGroupResult, AWSError>;
  /**
   * Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.
   */
  describeInstancePatches(params: SSM.Types.DescribeInstancePatchesRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchesResult) => void): Request<SSM.Types.DescribeInstancePatchesResult, AWSError>;
  /**
   * Retrieves information about the patches on the specified managed node and their state relative to the patch baseline being used for the node.
   */
  describeInstancePatches(callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchesResult) => void): Request<SSM.Types.DescribeInstancePatchesResult, AWSError>;
  /**
   * Describes a specific delete inventory operation.
   */
  describeInventoryDeletions(params: SSM.Types.DescribeInventoryDeletionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInventoryDeletionsResult) => void): Request<SSM.Types.DescribeInventoryDeletionsResult, AWSError>;
  /**
   * Describes a specific delete inventory operation.
   */
  describeInventoryDeletions(callback?: (err: AWSError, data: SSM.Types.DescribeInventoryDeletionsResult) => void): Request<SSM.Types.DescribeInventoryDeletionsResult, AWSError>;
  /**
   * Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.
   */
  describeMaintenanceWindowExecutionTaskInvocations(params: SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsResult, AWSError>;
  /**
   * Retrieves the individual task executions (one per target) for a particular task run as part of a maintenance window execution.
   */
  describeMaintenanceWindowExecutionTaskInvocations(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsResult, AWSError>;
  /**
   * For a given maintenance window execution, lists the tasks that were run.
   */
  describeMaintenanceWindowExecutionTasks(params: SSM.Types.DescribeMaintenanceWindowExecutionTasksRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionTasksResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionTasksResult, AWSError>;
  /**
   * For a given maintenance window execution, lists the tasks that were run.
   */
  describeMaintenanceWindowExecutionTasks(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionTasksResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionTasksResult, AWSError>;
  /**
   * Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.
   */
  describeMaintenanceWindowExecutions(params: SSM.Types.DescribeMaintenanceWindowExecutionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionsResult, AWSError>;
  /**
   * Lists the executions of a maintenance window. This includes information about when the maintenance window was scheduled to be active, and information about tasks registered and run with the maintenance window.
   */
  describeMaintenanceWindowExecutions(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionsResult, AWSError>;
  /**
   * Retrieves information about upcoming executions of a maintenance window.
   */
  describeMaintenanceWindowSchedule(params: SSM.Types.DescribeMaintenanceWindowScheduleRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowScheduleResult) => void): Request<SSM.Types.DescribeMaintenanceWindowScheduleResult, AWSError>;
  /**
   * Retrieves information about upcoming executions of a maintenance window.
   */
  describeMaintenanceWindowSchedule(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowScheduleResult) => void): Request<SSM.Types.DescribeMaintenanceWindowScheduleResult, AWSError>;
  /**
   * Lists the targets registered with the maintenance window.
   */
  describeMaintenanceWindowTargets(params: SSM.Types.DescribeMaintenanceWindowTargetsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowTargetsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowTargetsResult, AWSError>;
  /**
   * Lists the targets registered with the maintenance window.
   */
  describeMaintenanceWindowTargets(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowTargetsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowTargetsResult, AWSError>;
  /**
   * Lists the tasks in a maintenance window.  For maintenance window tasks without a specified target, you can't supply values for --max-errors and --max-concurrency. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored. 
   */
  describeMaintenanceWindowTasks(params: SSM.Types.DescribeMaintenanceWindowTasksRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowTasksResult) => void): Request<SSM.Types.DescribeMaintenanceWindowTasksResult, AWSError>;
  /**
   * Lists the tasks in a maintenance window.  For maintenance window tasks without a specified target, you can't supply values for --max-errors and --max-concurrency. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored. 
   */
  describeMaintenanceWindowTasks(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowTasksResult) => void): Request<SSM.Types.DescribeMaintenanceWindowTasksResult, AWSError>;
  /**
   * Retrieves the maintenance windows in an Amazon Web Services account.
   */
  describeMaintenanceWindows(params: SSM.Types.DescribeMaintenanceWindowsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowsResult, AWSError>;
  /**
   * Retrieves the maintenance windows in an Amazon Web Services account.
   */
  describeMaintenanceWindows(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowsResult, AWSError>;
  /**
   * Retrieves information about the maintenance window targets or tasks that a managed node is associated with.
   */
  describeMaintenanceWindowsForTarget(params: SSM.Types.DescribeMaintenanceWindowsForTargetRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowsForTargetResult) => void): Request<SSM.Types.DescribeMaintenanceWindowsForTargetResult, AWSError>;
  /**
   * Retrieves information about the maintenance window targets or tasks that a managed node is associated with.
   */
  describeMaintenanceWindowsForTarget(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowsForTargetResult) => void): Request<SSM.Types.DescribeMaintenanceWindowsForTargetResult, AWSError>;
  /**
   * Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see Getting started with OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see OpsCenter in the Amazon Web Services Systems Manager User Guide. 
   */
  describeOpsItems(params: SSM.Types.DescribeOpsItemsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeOpsItemsResponse) => void): Request<SSM.Types.DescribeOpsItemsResponse, AWSError>;
  /**
   * Query a set of OpsItems. You must have permission in Identity and Access Management (IAM) to query a list of OpsItems. For more information, see Getting started with OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see OpsCenter in the Amazon Web Services Systems Manager User Guide. 
   */
  describeOpsItems(callback?: (err: AWSError, data: SSM.Types.DescribeOpsItemsResponse) => void): Request<SSM.Types.DescribeOpsItemsResponse, AWSError>;
  /**
   * Get information about a parameter. Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results.  If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, DescribeParameters retrieves whatever the original key alias was referencing. 
   */
  describeParameters(params: SSM.Types.DescribeParametersRequest, callback?: (err: AWSError, data: SSM.Types.DescribeParametersResult) => void): Request<SSM.Types.DescribeParametersResult, AWSError>;
  /**
   * Get information about a parameter. Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results.  If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, DescribeParameters retrieves whatever the original key alias was referencing. 
   */
  describeParameters(callback?: (err: AWSError, data: SSM.Types.DescribeParametersResult) => void): Request<SSM.Types.DescribeParametersResult, AWSError>;
  /**
   * Lists the patch baselines in your Amazon Web Services account.
   */
  describePatchBaselines(params: SSM.Types.DescribePatchBaselinesRequest, callback?: (err: AWSError, data: SSM.Types.DescribePatchBaselinesResult) => void): Request<SSM.Types.DescribePatchBaselinesResult, AWSError>;
  /**
   * Lists the patch baselines in your Amazon Web Services account.
   */
  describePatchBaselines(callback?: (err: AWSError, data: SSM.Types.DescribePatchBaselinesResult) => void): Request<SSM.Types.DescribePatchBaselinesResult, AWSError>;
  /**
   * Returns high-level aggregated patch compliance state information for a patch group.
   */
  describePatchGroupState(params: SSM.Types.DescribePatchGroupStateRequest, callback?: (err: AWSError, data: SSM.Types.DescribePatchGroupStateResult) => void): Request<SSM.Types.DescribePatchGroupStateResult, AWSError>;
  /**
   * Returns high-level aggregated patch compliance state information for a patch group.
   */
  describePatchGroupState(callback?: (err: AWSError, data: SSM.Types.DescribePatchGroupStateResult) => void): Request<SSM.Types.DescribePatchGroupStateResult, AWSError>;
  /**
   * Lists all patch groups that have been registered with patch baselines.
   */
  describePatchGroups(params: SSM.Types.DescribePatchGroupsRequest, callback?: (err: AWSError, data: SSM.Types.DescribePatchGroupsResult) => void): Request<SSM.Types.DescribePatchGroupsResult, AWSError>;
  /**
   * Lists all patch groups that have been registered with patch baselines.
   */
  describePatchGroups(callback?: (err: AWSError, data: SSM.Types.DescribePatchGroupsResult) => void): Request<SSM.Types.DescribePatchGroupsResult, AWSError>;
  /**
   * Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as CreatePatchBaseline, UpdatePatchBaseline, DescribeAvailablePatches, and DescribePatchBaselines. The following section lists the properties that can be used in filters for each major operating system type:  AMAZON_LINUX  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   AMAZON_LINUX_2  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   CENTOS  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   DEBIAN  Valid properties: PRODUCT | PRIORITY   MACOS  Valid properties: PRODUCT | CLASSIFICATION   ORACLE_LINUX  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   REDHAT_ENTERPRISE_LINUX  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   SUSE  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   UBUNTU  Valid properties: PRODUCT | PRIORITY   WINDOWS  Valid properties: PRODUCT | PRODUCT_FAMILY | CLASSIFICATION | MSRC_SEVERITY   
   */
  describePatchProperties(params: SSM.Types.DescribePatchPropertiesRequest, callback?: (err: AWSError, data: SSM.Types.DescribePatchPropertiesResult) => void): Request<SSM.Types.DescribePatchPropertiesResult, AWSError>;
  /**
   * Lists the properties of available patches organized by product, product family, classification, severity, and other properties of available patches. You can use the reported properties in the filters you specify in requests for operations such as CreatePatchBaseline, UpdatePatchBaseline, DescribeAvailablePatches, and DescribePatchBaselines. The following section lists the properties that can be used in filters for each major operating system type:  AMAZON_LINUX  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   AMAZON_LINUX_2  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   CENTOS  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   DEBIAN  Valid properties: PRODUCT | PRIORITY   MACOS  Valid properties: PRODUCT | CLASSIFICATION   ORACLE_LINUX  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   REDHAT_ENTERPRISE_LINUX  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   SUSE  Valid properties: PRODUCT | CLASSIFICATION | SEVERITY   UBUNTU  Valid properties: PRODUCT | PRIORITY   WINDOWS  Valid properties: PRODUCT | PRODUCT_FAMILY | CLASSIFICATION | MSRC_SEVERITY   
   */
  describePatchProperties(callback?: (err: AWSError, data: SSM.Types.DescribePatchPropertiesResult) => void): Request<SSM.Types.DescribePatchPropertiesResult, AWSError>;
  /**
   * Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
   */
  describeSessions(params: SSM.Types.DescribeSessionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeSessionsResponse) => void): Request<SSM.Types.DescribeSessionsResponse, AWSError>;
  /**
   * Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
   */
  describeSessions(callback?: (err: AWSError, data: SSM.Types.DescribeSessionsResponse) => void): Request<SSM.Types.DescribeSessionsResponse, AWSError>;
  /**
   * Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of Amazon Web Services Systems Manager.
   */
  disassociateOpsItemRelatedItem(params: SSM.Types.DisassociateOpsItemRelatedItemRequest, callback?: (err: AWSError, data: SSM.Types.DisassociateOpsItemRelatedItemResponse) => void): Request<SSM.Types.DisassociateOpsItemRelatedItemResponse, AWSError>;
  /**
   * Deletes the association between an OpsItem and a related item. For example, this API operation can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability of Amazon Web Services Systems Manager.
   */
  disassociateOpsItemRelatedItem(callback?: (err: AWSError, data: SSM.Types.DisassociateOpsItemRelatedItemResponse) => void): Request<SSM.Types.DisassociateOpsItemRelatedItemResponse, AWSError>;
  /**
   * Get detailed information about a particular Automation execution.
   */
  getAutomationExecution(params: SSM.Types.GetAutomationExecutionRequest, callback?: (err: AWSError, data: SSM.Types.GetAutomationExecutionResult) => void): Request<SSM.Types.GetAutomationExecutionResult, AWSError>;
  /**
   * Get detailed information about a particular Automation execution.
   */
  getAutomationExecution(callback?: (err: AWSError, data: SSM.Types.GetAutomationExecutionResult) => void): Request<SSM.Types.GetAutomationExecutionResult, AWSError>;
  /**
   * Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, GetCalendarState returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, GetCalendarState uses the current time. Change Calendar entries have two possible states: OPEN or CLOSED. If you specify more than one calendar in a request, the command returns the status of OPEN only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is CLOSED. For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see Amazon Web Services Systems Manager Change Calendar in the Amazon Web Services Systems Manager User Guide.
   */
  getCalendarState(params: SSM.Types.GetCalendarStateRequest, callback?: (err: AWSError, data: SSM.Types.GetCalendarStateResponse) => void): Request<SSM.Types.GetCalendarStateResponse, AWSError>;
  /**
   * Gets the state of a Amazon Web Services Systems Manager change calendar at the current time or a specified time. If you specify a time, GetCalendarState returns the state of the calendar at that specific time, and returns the next time that the change calendar state will transition. If you don't specify a time, GetCalendarState uses the current time. Change Calendar entries have two possible states: OPEN or CLOSED. If you specify more than one calendar in a request, the command returns the status of OPEN only if all calendars in the request are open. If one or more calendars in the request are closed, the status returned is CLOSED. For more information about Change Calendar, a capability of Amazon Web Services Systems Manager, see Amazon Web Services Systems Manager Change Calendar in the Amazon Web Services Systems Manager User Guide.
   */
  getCalendarState(callback?: (err: AWSError, data: SSM.Types.GetCalendarStateResponse) => void): Request<SSM.Types.GetCalendarStateResponse, AWSError>;
  /**
   * Returns detailed information about command execution for an invocation or plugin.  GetCommandInvocation only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use ListCommandInvocations. To get the command execution status across managed nodes, use ListCommands.
   */
  getCommandInvocation(params: SSM.Types.GetCommandInvocationRequest, callback?: (err: AWSError, data: SSM.Types.GetCommandInvocationResult) => void): Request<SSM.Types.GetCommandInvocationResult, AWSError>;
  /**
   * Returns detailed information about command execution for an invocation or plugin.  GetCommandInvocation only gives the execution status of a plugin in a document. To get the command execution status on a specific managed node, use ListCommandInvocations. To get the command execution status across managed nodes, use ListCommands.
   */
  getCommandInvocation(callback?: (err: AWSError, data: SSM.Types.GetCommandInvocationResult) => void): Request<SSM.Types.GetCommandInvocationResult, AWSError>;
  /**
   * Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.
   */
  getConnectionStatus(params: SSM.Types.GetConnectionStatusRequest, callback?: (err: AWSError, data: SSM.Types.GetConnectionStatusResponse) => void): Request<SSM.Types.GetConnectionStatusResponse, AWSError>;
  /**
   * Retrieves the Session Manager connection status for a managed node to determine whether it is running and ready to receive Session Manager connections.
   */
  getConnectionStatus(callback?: (err: AWSError, data: SSM.Types.GetConnectionStatusResponse) => void): Request<SSM.Types.GetConnectionStatusResponse, AWSError>;
  /**
   * Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system. If you don't specify an operating system value, the default patch baseline for Windows is returned.
   */
  getDefaultPatchBaseline(params: SSM.Types.GetDefaultPatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.GetDefaultPatchBaselineResult) => void): Request<SSM.Types.GetDefaultPatchBaselineResult, AWSError>;
  /**
   * Retrieves the default patch baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system. If you don't specify an operating system value, the default patch baseline for Windows is returned.
   */
  getDefaultPatchBaseline(callback?: (err: AWSError, data: SSM.Types.GetDefaultPatchBaselineResult) => void): Request<SSM.Types.GetDefaultPatchBaselineResult, AWSError>;
  /**
   * Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document (SSM document).  If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the AWS-RunShellScript document or the AWS-RunPowerShellScript document. 
   */
  getDeployablePatchSnapshotForInstance(params: SSM.Types.GetDeployablePatchSnapshotForInstanceRequest, callback?: (err: AWSError, data: SSM.Types.GetDeployablePatchSnapshotForInstanceResult) => void): Request<SSM.Types.GetDeployablePatchSnapshotForInstanceResult, AWSError>;
  /**
   * Retrieves the current snapshot for the patch baseline the managed node uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document (SSM document).  If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or command. For example, run the command using the AWS-RunShellScript document or the AWS-RunPowerShellScript document. 
   */
  getDeployablePatchSnapshotForInstance(callback?: (err: AWSError, data: SSM.Types.GetDeployablePatchSnapshotForInstanceResult) => void): Request<SSM.Types.GetDeployablePatchSnapshotForInstanceResult, AWSError>;
  /**
   * Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).
   */
  getDocument(params: SSM.Types.GetDocumentRequest, callback?: (err: AWSError, data: SSM.Types.GetDocumentResult) => void): Request<SSM.Types.GetDocumentResult, AWSError>;
  /**
   * Gets the contents of the specified Amazon Web Services Systems Manager document (SSM document).
   */
  getDocument(callback?: (err: AWSError, data: SSM.Types.GetDocumentResult) => void): Request<SSM.Types.GetDocumentResult, AWSError>;
  /**
   * Query inventory information. This includes managed node status, such as Stopped or Terminated.
   */
  getInventory(params: SSM.Types.GetInventoryRequest, callback?: (err: AWSError, data: SSM.Types.GetInventoryResult) => void): Request<SSM.Types.GetInventoryResult, AWSError>;
  /**
   * Query inventory information. This includes managed node status, such as Stopped or Terminated.
   */
  getInventory(callback?: (err: AWSError, data: SSM.Types.GetInventoryResult) => void): Request<SSM.Types.GetInventoryResult, AWSError>;
  /**
   * Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.
   */
  getInventorySchema(params: SSM.Types.GetInventorySchemaRequest, callback?: (err: AWSError, data: SSM.Types.GetInventorySchemaResult) => void): Request<SSM.Types.GetInventorySchemaResult, AWSError>;
  /**
   * Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type.
   */
  getInventorySchema(callback?: (err: AWSError, data: SSM.Types.GetInventorySchemaResult) => void): Request<SSM.Types.GetInventorySchemaResult, AWSError>;
  /**
   * Retrieves a maintenance window.
   */
  getMaintenanceWindow(params: SSM.Types.GetMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowResult) => void): Request<SSM.Types.GetMaintenanceWindowResult, AWSError>;
  /**
   * Retrieves a maintenance window.
   */
  getMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowResult) => void): Request<SSM.Types.GetMaintenanceWindowResult, AWSError>;
  /**
   * Retrieves details about a specific a maintenance window execution.
   */
  getMaintenanceWindowExecution(params: SSM.Types.GetMaintenanceWindowExecutionRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionResult, AWSError>;
  /**
   * Retrieves details about a specific a maintenance window execution.
   */
  getMaintenanceWindowExecution(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionResult, AWSError>;
  /**
   * Retrieves the details about a specific task run as part of a maintenance window execution.
   */
  getMaintenanceWindowExecutionTask(params: SSM.Types.GetMaintenanceWindowExecutionTaskRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionTaskResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionTaskResult, AWSError>;
  /**
   * Retrieves the details about a specific task run as part of a maintenance window execution.
   */
  getMaintenanceWindowExecutionTask(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionTaskResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionTaskResult, AWSError>;
  /**
   * Retrieves information about a specific task running on a specific target.
   */
  getMaintenanceWindowExecutionTaskInvocation(params: SSM.Types.GetMaintenanceWindowExecutionTaskInvocationRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionTaskInvocationResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionTaskInvocationResult, AWSError>;
  /**
   * Retrieves information about a specific task running on a specific target.
   */
  getMaintenanceWindowExecutionTaskInvocation(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionTaskInvocationResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionTaskInvocationResult, AWSError>;
  /**
   * Retrieves the details of a maintenance window task.  For maintenance window tasks without a specified target, you can't supply values for --max-errors and --max-concurrency. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.  To retrieve a list of tasks in a maintenance window, instead use the DescribeMaintenanceWindowTasks command.
   */
  getMaintenanceWindowTask(params: SSM.Types.GetMaintenanceWindowTaskRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowTaskResult) => void): Request<SSM.Types.GetMaintenanceWindowTaskResult, AWSError>;
  /**
   * Retrieves the details of a maintenance window task.  For maintenance window tasks without a specified target, you can't supply values for --max-errors and --max-concurrency. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. These values don't affect the running of your task and can be ignored.  To retrieve a list of tasks in a maintenance window, instead use the DescribeMaintenanceWindowTasks command.
   */
  getMaintenanceWindowTask(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowTaskResult) => void): Request<SSM.Types.GetMaintenanceWindowTaskResult, AWSError>;
  /**
   * Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see Getting started with OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see OpsCenter in the Amazon Web Services Systems Manager User Guide. 
   */
  getOpsItem(params: SSM.Types.GetOpsItemRequest, callback?: (err: AWSError, data: SSM.Types.GetOpsItemResponse) => void): Request<SSM.Types.GetOpsItemResponse, AWSError>;
  /**
   * Get information about an OpsItem by using the ID. You must have permission in Identity and Access Management (IAM) to view information about an OpsItem. For more information, see Getting started with OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see OpsCenter in the Amazon Web Services Systems Manager User Guide. 
   */
  getOpsItem(callback?: (err: AWSError, data: SSM.Types.GetOpsItemResponse) => void): Request<SSM.Types.GetOpsItemResponse, AWSError>;
  /**
   * View operational metadata related to an application in Application Manager.
   */
  getOpsMetadata(params: SSM.Types.GetOpsMetadataRequest, callback?: (err: AWSError, data: SSM.Types.GetOpsMetadataResult) => void): Request<SSM.Types.GetOpsMetadataResult, AWSError>;
  /**
   * View operational metadata related to an application in Application Manager.
   */
  getOpsMetadata(callback?: (err: AWSError, data: SSM.Types.GetOpsMetadataResult) => void): Request<SSM.Types.GetOpsMetadataResult, AWSError>;
  /**
   * View a summary of operations metadata (OpsData) based on specified filters and aggregators. OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager Explorer. 
   */
  getOpsSummary(params: SSM.Types.GetOpsSummaryRequest, callback?: (err: AWSError, data: SSM.Types.GetOpsSummaryResult) => void): Request<SSM.Types.GetOpsSummaryResult, AWSError>;
  /**
   * View a summary of operations metadata (OpsData) based on specified filters and aggregators. OpsData can include information about Amazon Web Services Systems Manager OpsCenter operational workitems (OpsItems) as well as information about any Amazon Web Services resource or service configured to report OpsData to Amazon Web Services Systems Manager Explorer. 
   */
  getOpsSummary(callback?: (err: AWSError, data: SSM.Types.GetOpsSummaryResult) => void): Request<SSM.Types.GetOpsSummaryResult, AWSError>;
  /**
   * Get information about a single parameter by specifying the parameter name.  To get information about more than one parameter at a time, use the GetParameters operation. 
   */
  getParameter(params: SSM.Types.GetParameterRequest, callback?: (err: AWSError, data: SSM.Types.GetParameterResult) => void): Request<SSM.Types.GetParameterResult, AWSError>;
  /**
   * Get information about a single parameter by specifying the parameter name.  To get information about more than one parameter at a time, use the GetParameters operation. 
   */
  getParameter(callback?: (err: AWSError, data: SSM.Types.GetParameterResult) => void): Request<SSM.Types.GetParameterResult, AWSError>;
  /**
   * Retrieves the history of all changes to a parameter.  If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, GetParameterHistory retrieves whatever the original key alias was referencing. 
   */
  getParameterHistory(params: SSM.Types.GetParameterHistoryRequest, callback?: (err: AWSError, data: SSM.Types.GetParameterHistoryResult) => void): Request<SSM.Types.GetParameterHistoryResult, AWSError>;
  /**
   * Retrieves the history of all changes to a parameter.  If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, GetParameterHistory retrieves whatever the original key alias was referencing. 
   */
  getParameterHistory(callback?: (err: AWSError, data: SSM.Types.GetParameterHistoryResult) => void): Request<SSM.Types.GetParameterHistoryResult, AWSError>;
  /**
   * Get information about one or more parameters by specifying multiple parameter names.  To get information about a single parameter, you can use the GetParameter operation instead. 
   */
  getParameters(params: SSM.Types.GetParametersRequest, callback?: (err: AWSError, data: SSM.Types.GetParametersResult) => void): Request<SSM.Types.GetParametersResult, AWSError>;
  /**
   * Get information about one or more parameters by specifying multiple parameter names.  To get information about a single parameter, you can use the GetParameter operation instead. 
   */
  getParameters(callback?: (err: AWSError, data: SSM.Types.GetParametersResult) => void): Request<SSM.Types.GetParametersResult, AWSError>;
  /**
   * Retrieve information about one or more parameters in a specific hierarchy.  Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results.
   */
  getParametersByPath(params: SSM.Types.GetParametersByPathRequest, callback?: (err: AWSError, data: SSM.Types.GetParametersByPathResult) => void): Request<SSM.Types.GetParametersByPathResult, AWSError>;
  /**
   * Retrieve information about one or more parameters in a specific hierarchy.  Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results.
   */
  getParametersByPath(callback?: (err: AWSError, data: SSM.Types.GetParametersByPathResult) => void): Request<SSM.Types.GetParametersByPathResult, AWSError>;
  /**
   * Retrieves information about a patch baseline.
   */
  getPatchBaseline(params: SSM.Types.GetPatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.GetPatchBaselineResult) => void): Request<SSM.Types.GetPatchBaselineResult, AWSError>;
  /**
   * Retrieves information about a patch baseline.
   */
  getPatchBaseline(callback?: (err: AWSError, data: SSM.Types.GetPatchBaselineResult) => void): Request<SSM.Types.GetPatchBaselineResult, AWSError>;
  /**
   * Retrieves the patch baseline that should be used for the specified patch group.
   */
  getPatchBaselineForPatchGroup(params: SSM.Types.GetPatchBaselineForPatchGroupRequest, callback?: (err: AWSError, data: SSM.Types.GetPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.GetPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Retrieves the patch baseline that should be used for the specified patch group.
   */
  getPatchBaselineForPatchGroup(callback?: (err: AWSError, data: SSM.Types.GetPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.GetPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Returns an array of the Policy object.
   */
  getResourcePolicies(params: SSM.Types.GetResourcePoliciesRequest, callback?: (err: AWSError, data: SSM.Types.GetResourcePoliciesResponse) => void): Request<SSM.Types.GetResourcePoliciesResponse, AWSError>;
  /**
   * Returns an array of the Policy object.
   */
  getResourcePolicies(callback?: (err: AWSError, data: SSM.Types.GetResourcePoliciesResponse) => void): Request<SSM.Types.GetResourcePoliciesResponse, AWSError>;
  /**
   *  ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of false. This means the user can't use this feature unless they change the setting to true and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the UpdateServiceSetting API operation to change the default setting. Or use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team. Query the current service setting for the Amazon Web Services account. 
   */
  getServiceSetting(params: SSM.Types.GetServiceSettingRequest, callback?: (err: AWSError, data: SSM.Types.GetServiceSettingResult) => void): Request<SSM.Types.GetServiceSettingResult, AWSError>;
  /**
   *  ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of false. This means the user can't use this feature unless they change the setting to true and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the UpdateServiceSetting API operation to change the default setting. Or use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team. Query the current service setting for the Amazon Web Services account. 
   */
  getServiceSetting(callback?: (err: AWSError, data: SSM.Types.GetServiceSettingResult) => void): Request<SSM.Types.GetServiceSettingResult, AWSError>;
  /**
   * A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions.  Parameter labels have the following requirements and restrictions.   A version of a parameter can have a maximum of 10 labels.   You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.   You can move a label from one version of a parameter to another.   You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.   If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.   A label can have a maximum of 100 characters.   Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).   Labels can't begin with a number, "aws" or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.  
   */
  labelParameterVersion(params: SSM.Types.LabelParameterVersionRequest, callback?: (err: AWSError, data: SSM.Types.LabelParameterVersionResult) => void): Request<SSM.Types.LabelParameterVersionResult, AWSError>;
  /**
   * A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Amazon Web Services Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions.  Parameter labels have the following requirements and restrictions.   A version of a parameter can have a maximum of 10 labels.   You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.   You can move a label from one version of a parameter to another.   You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.   If you no longer want to use a parameter label, then you can either delete it or move it to a different version of a parameter.   A label can have a maximum of 100 characters.   Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).   Labels can't begin with a number, "aws" or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label isn't associated with a parameter and the system displays it in the list of InvalidLabels.  
   */
  labelParameterVersion(callback?: (err: AWSError, data: SSM.Types.LabelParameterVersionResult) => void): Request<SSM.Types.LabelParameterVersionResult, AWSError>;
  /**
   * Retrieves all versions of an association for a specific association ID.
   */
  listAssociationVersions(params: SSM.Types.ListAssociationVersionsRequest, callback?: (err: AWSError, data: SSM.Types.ListAssociationVersionsResult) => void): Request<SSM.Types.ListAssociationVersionsResult, AWSError>;
  /**
   * Retrieves all versions of an association for a specific association ID.
   */
  listAssociationVersions(callback?: (err: AWSError, data: SSM.Types.ListAssociationVersionsResult) => void): Request<SSM.Types.ListAssociationVersionsResult, AWSError>;
  /**
   * Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a capability of Amazon Web Services Systems Manager.
   */
  listAssociations(params: SSM.Types.ListAssociationsRequest, callback?: (err: AWSError, data: SSM.Types.ListAssociationsResult) => void): Request<SSM.Types.ListAssociationsResult, AWSError>;
  /**
   * Returns all State Manager associations in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results to a specific State Manager association document or managed node by specifying a filter. State Manager is a capability of Amazon Web Services Systems Manager.
   */
  listAssociations(callback?: (err: AWSError, data: SSM.Types.ListAssociationsResult) => void): Request<SSM.Types.ListAssociationsResult, AWSError>;
  /**
   * An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs SendCommand against three managed nodes, then a command invocation is created for each requested managed node ID. ListCommandInvocations provide status about command execution.
   */
  listCommandInvocations(params: SSM.Types.ListCommandInvocationsRequest, callback?: (err: AWSError, data: SSM.Types.ListCommandInvocationsResult) => void): Request<SSM.Types.ListCommandInvocationsResult, AWSError>;
  /**
   * An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes. A command invocation applies to one managed node. For example, if a user runs SendCommand against three managed nodes, then a command invocation is created for each requested managed node ID. ListCommandInvocations provide status about command execution.
   */
  listCommandInvocations(callback?: (err: AWSError, data: SSM.Types.ListCommandInvocationsResult) => void): Request<SSM.Types.ListCommandInvocationsResult, AWSError>;
  /**
   * Lists the commands requested by users of the Amazon Web Services account.
   */
  listCommands(params: SSM.Types.ListCommandsRequest, callback?: (err: AWSError, data: SSM.Types.ListCommandsResult) => void): Request<SSM.Types.ListCommandsResult, AWSError>;
  /**
   * Lists the commands requested by users of the Amazon Web Services account.
   */
  listCommands(callback?: (err: AWSError, data: SSM.Types.ListCommandsResult) => void): Request<SSM.Types.ListCommandsResult, AWSError>;
  /**
   * For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.
   */
  listComplianceItems(params: SSM.Types.ListComplianceItemsRequest, callback?: (err: AWSError, data: SSM.Types.ListComplianceItemsResult) => void): Request<SSM.Types.ListComplianceItemsResult, AWSError>;
  /**
   * For a specified resource ID, this API operation returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter.
   */
  listComplianceItems(callback?: (err: AWSError, data: SSM.Types.ListComplianceItemsResult) => void): Request<SSM.Types.ListComplianceItemsResult, AWSError>;
  /**
   * Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.
   */
  listComplianceSummaries(params: SSM.Types.ListComplianceSummariesRequest, callback?: (err: AWSError, data: SSM.Types.ListComplianceSummariesResult) => void): Request<SSM.Types.ListComplianceSummariesResult, AWSError>;
  /**
   * Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify.
   */
  listComplianceSummaries(callback?: (err: AWSError, data: SSM.Types.ListComplianceSummariesResult) => void): Request<SSM.Types.ListComplianceSummariesResult, AWSError>;
  /**
   * Information about approval reviews for a version of a change template in Change Manager.
   */
  listDocumentMetadataHistory(params: SSM.Types.ListDocumentMetadataHistoryRequest, callback?: (err: AWSError, data: SSM.Types.ListDocumentMetadataHistoryResponse) => void): Request<SSM.Types.ListDocumentMetadataHistoryResponse, AWSError>;
  /**
   * Information about approval reviews for a version of a change template in Change Manager.
   */
  listDocumentMetadataHistory(callback?: (err: AWSError, data: SSM.Types.ListDocumentMetadataHistoryResponse) => void): Request<SSM.Types.ListDocumentMetadataHistoryResponse, AWSError>;
  /**
   * List all versions for a document.
   */
  listDocumentVersions(params: SSM.Types.ListDocumentVersionsRequest, callback?: (err: AWSError, data: SSM.Types.ListDocumentVersionsResult) => void): Request<SSM.Types.ListDocumentVersionsResult, AWSError>;
  /**
   * List all versions for a document.
   */
  listDocumentVersions(callback?: (err: AWSError, data: SSM.Types.ListDocumentVersionsResult) => void): Request<SSM.Types.ListDocumentVersionsResult, AWSError>;
  /**
   * Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.
   */
  listDocuments(params: SSM.Types.ListDocumentsRequest, callback?: (err: AWSError, data: SSM.Types.ListDocumentsResult) => void): Request<SSM.Types.ListDocumentsResult, AWSError>;
  /**
   * Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can limit the results of this request by using a filter.
   */
  listDocuments(callback?: (err: AWSError, data: SSM.Types.ListDocumentsResult) => void): Request<SSM.Types.ListDocumentsResult, AWSError>;
  /**
   * A list of inventory items returned by the request.
   */
  listInventoryEntries(params: SSM.Types.ListInventoryEntriesRequest, callback?: (err: AWSError, data: SSM.Types.ListInventoryEntriesResult) => void): Request<SSM.Types.ListInventoryEntriesResult, AWSError>;
  /**
   * A list of inventory items returned by the request.
   */
  listInventoryEntries(callback?: (err: AWSError, data: SSM.Types.ListInventoryEntriesResult) => void): Request<SSM.Types.ListInventoryEntriesResult, AWSError>;
  /**
   * Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.
   */
  listOpsItemEvents(params: SSM.Types.ListOpsItemEventsRequest, callback?: (err: AWSError, data: SSM.Types.ListOpsItemEventsResponse) => void): Request<SSM.Types.ListOpsItemEventsResponse, AWSError>;
  /**
   * Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.
   */
  listOpsItemEvents(callback?: (err: AWSError, data: SSM.Types.ListOpsItemEventsResponse) => void): Request<SSM.Types.ListOpsItemEventsResponse, AWSError>;
  /**
   * Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a capability of Amazon Web Services Systems Manager.
   */
  listOpsItemRelatedItems(params: SSM.Types.ListOpsItemRelatedItemsRequest, callback?: (err: AWSError, data: SSM.Types.ListOpsItemRelatedItemsResponse) => void): Request<SSM.Types.ListOpsItemRelatedItemsResponse, AWSError>;
  /**
   * Lists all related-item resources associated with a Systems Manager OpsCenter OpsItem. OpsCenter is a capability of Amazon Web Services Systems Manager.
   */
  listOpsItemRelatedItems(callback?: (err: AWSError, data: SSM.Types.ListOpsItemRelatedItemsResponse) => void): Request<SSM.Types.ListOpsItemRelatedItemsResponse, AWSError>;
  /**
   * Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.
   */
  listOpsMetadata(params: SSM.Types.ListOpsMetadataRequest, callback?: (err: AWSError, data: SSM.Types.ListOpsMetadataResult) => void): Request<SSM.Types.ListOpsMetadataResult, AWSError>;
  /**
   * Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or blobs.
   */
  listOpsMetadata(callback?: (err: AWSError, data: SSM.Types.ListOpsMetadataResult) => void): Request<SSM.Types.ListOpsMetadataResult, AWSError>;
  /**
   * Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
   */
  listResourceComplianceSummaries(params: SSM.Types.ListResourceComplianceSummariesRequest, callback?: (err: AWSError, data: SSM.Types.ListResourceComplianceSummariesResult) => void): Request<SSM.Types.ListResourceComplianceSummariesResult, AWSError>;
  /**
   * Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
   */
  listResourceComplianceSummaries(callback?: (err: AWSError, data: SSM.Types.ListResourceComplianceSummariesResult) => void): Request<SSM.Types.ListResourceComplianceSummariesResult, AWSError>;
  /**
   * Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed. The number of sync configurations might be too large to return using a single call to ListResourceDataSync. You can limit the number of sync configurations returned by using the MaxResults parameter. To determine whether there are more sync configurations to list, check the value of NextToken in the output. If there are more sync configurations to list, you can request them by specifying the NextToken returned in the call to the parameter of a subsequent call. 
   */
  listResourceDataSync(params: SSM.Types.ListResourceDataSyncRequest, callback?: (err: AWSError, data: SSM.Types.ListResourceDataSyncResult) => void): Request<SSM.Types.ListResourceDataSyncResult, AWSError>;
  /**
   * Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed. The number of sync configurations might be too large to return using a single call to ListResourceDataSync. You can limit the number of sync configurations returned by using the MaxResults parameter. To determine whether there are more sync configurations to list, check the value of NextToken in the output. If there are more sync configurations to list, you can request them by specifying the NextToken returned in the call to the parameter of a subsequent call. 
   */
  listResourceDataSync(callback?: (err: AWSError, data: SSM.Types.ListResourceDataSyncResult) => void): Request<SSM.Types.ListResourceDataSyncResult, AWSError>;
  /**
   * Returns a list of the tags assigned to the specified resource. For information about the ID format for each supported resource type, see AddTagsToResource.
   */
  listTagsForResource(params: SSM.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SSM.Types.ListTagsForResourceResult) => void): Request<SSM.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Returns a list of the tags assigned to the specified resource. For information about the ID format for each supported resource type, see AddTagsToResource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SSM.Types.ListTagsForResourceResult) => void): Request<SSM.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user account IDs for those people who can use the document. If you share a document publicly, you must specify All as the account ID.
   */
  modifyDocumentPermission(params: SSM.Types.ModifyDocumentPermissionRequest, callback?: (err: AWSError, data: SSM.Types.ModifyDocumentPermissionResponse) => void): Request<SSM.Types.ModifyDocumentPermissionResponse, AWSError>;
  /**
   * Shares a Amazon Web Services Systems Manager document (SSM document)publicly or privately. If you share a document privately, you must specify the Amazon Web Services user account IDs for those people who can use the document. If you share a document publicly, you must specify All as the account ID.
   */
  modifyDocumentPermission(callback?: (err: AWSError, data: SSM.Types.ModifyDocumentPermissionResponse) => void): Request<SSM.Types.ModifyDocumentPermissionResponse, AWSError>;
  /**
   * Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request. ComplianceType can be one of the following:   ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.   ExecutionType: Specify patch, association, or Custom:string.   ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.   Id: The patch, association, or custom compliance ID.   Title: A title.   Status: The status of the compliance item. For example, approved for patches, or Failed for associations.   Severity: A patch severity. For example, Critical.   DocumentName: An SSM document name. For example, AWS-RunPatchBaseline.   DocumentVersion: An SSM document version number. For example, 4.   Classification: A patch classification. For example, security updates.   PatchBaselineId: A patch baseline ID.   PatchSeverity: A patch severity. For example, Critical.   PatchState: A patch state. For example, InstancesWithFailedPatches.   PatchGroup: The name of a patch group.   InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'  
   */
  putComplianceItems(params: SSM.Types.PutComplianceItemsRequest, callback?: (err: AWSError, data: SSM.Types.PutComplianceItemsResult) => void): Request<SSM.Types.PutComplianceItemsResult, AWSError>;
  /**
   * Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request. ComplianceType can be one of the following:   ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.   ExecutionType: Specify patch, association, or Custom:string.   ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.   Id: The patch, association, or custom compliance ID.   Title: A title.   Status: The status of the compliance item. For example, approved for patches, or Failed for associations.   Severity: A patch severity. For example, Critical.   DocumentName: An SSM document name. For example, AWS-RunPatchBaseline.   DocumentVersion: An SSM document version number. For example, 4.   Classification: A patch classification. For example, security updates.   PatchBaselineId: A patch baseline ID.   PatchSeverity: A patch severity. For example, Critical.   PatchState: A patch state. For example, InstancesWithFailedPatches.   PatchGroup: The name of a patch group.   InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'  
   */
  putComplianceItems(callback?: (err: AWSError, data: SSM.Types.PutComplianceItemsResult) => void): Request<SSM.Types.PutComplianceItemsResult, AWSError>;
  /**
   * Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
   */
  putInventory(params: SSM.Types.PutInventoryRequest, callback?: (err: AWSError, data: SSM.Types.PutInventoryResult) => void): Request<SSM.Types.PutInventoryResult, AWSError>;
  /**
   * Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
   */
  putInventory(callback?: (err: AWSError, data: SSM.Types.PutInventoryResult) => void): Request<SSM.Types.PutInventoryResult, AWSError>;
  /**
   * Add a parameter to the system.
   */
  putParameter(params: SSM.Types.PutParameterRequest, callback?: (err: AWSError, data: SSM.Types.PutParameterResult) => void): Request<SSM.Types.PutParameterResult, AWSError>;
  /**
   * Add a parameter to the system.
   */
  putParameter(callback?: (err: AWSError, data: SSM.Types.PutParameterResult) => void): Request<SSM.Types.PutParameterResult, AWSError>;
  /**
   * Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, OpsItemGroup is the only resource that supports Systems Manager resource policies. The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
   */
  putResourcePolicy(params: SSM.Types.PutResourcePolicyRequest, callback?: (err: AWSError, data: SSM.Types.PutResourcePolicyResponse) => void): Request<SSM.Types.PutResourcePolicyResponse, AWSError>;
  /**
   * Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, OpsItemGroup is the only resource that supports Systems Manager resource policies. The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
   */
  putResourcePolicy(callback?: (err: AWSError, data: SSM.Types.PutResourcePolicyResponse) => void): Request<SSM.Types.PutResourcePolicyResponse, AWSError>;
  /**
   * Defines the default patch baseline for the relevant operating system. To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed instead of pb-0574b43a65ea646ed.
   */
  registerDefaultPatchBaseline(params: SSM.Types.RegisterDefaultPatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.RegisterDefaultPatchBaselineResult) => void): Request<SSM.Types.RegisterDefaultPatchBaselineResult, AWSError>;
  /**
   * Defines the default patch baseline for the relevant operating system. To reset the Amazon Web Services-predefined patch baseline as the default, specify the full patch baseline Amazon Resource Name (ARN) as the baseline ID value. For example, for CentOS, specify arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0574b43a65ea646ed instead of pb-0574b43a65ea646ed.
   */
  registerDefaultPatchBaseline(callback?: (err: AWSError, data: SSM.Types.RegisterDefaultPatchBaselineResult) => void): Request<SSM.Types.RegisterDefaultPatchBaselineResult, AWSError>;
  /**
   * Registers a patch baseline for a patch group.
   */
  registerPatchBaselineForPatchGroup(params: SSM.Types.RegisterPatchBaselineForPatchGroupRequest, callback?: (err: AWSError, data: SSM.Types.RegisterPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.RegisterPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Registers a patch baseline for a patch group.
   */
  registerPatchBaselineForPatchGroup(callback?: (err: AWSError, data: SSM.Types.RegisterPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.RegisterPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Registers a target with a maintenance window.
   */
  registerTargetWithMaintenanceWindow(params: SSM.Types.RegisterTargetWithMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.RegisterTargetWithMaintenanceWindowResult) => void): Request<SSM.Types.RegisterTargetWithMaintenanceWindowResult, AWSError>;
  /**
   * Registers a target with a maintenance window.
   */
  registerTargetWithMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.RegisterTargetWithMaintenanceWindowResult) => void): Request<SSM.Types.RegisterTargetWithMaintenanceWindowResult, AWSError>;
  /**
   * Adds a new task to a maintenance window.
   */
  registerTaskWithMaintenanceWindow(params: SSM.Types.RegisterTaskWithMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.RegisterTaskWithMaintenanceWindowResult) => void): Request<SSM.Types.RegisterTaskWithMaintenanceWindowResult, AWSError>;
  /**
   * Adds a new task to a maintenance window.
   */
  registerTaskWithMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.RegisterTaskWithMaintenanceWindowResult) => void): Request<SSM.Types.RegisterTaskWithMaintenanceWindowResult, AWSError>;
  /**
   * Removes tag keys from the specified resource.
   */
  removeTagsFromResource(params: SSM.Types.RemoveTagsFromResourceRequest, callback?: (err: AWSError, data: SSM.Types.RemoveTagsFromResourceResult) => void): Request<SSM.Types.RemoveTagsFromResourceResult, AWSError>;
  /**
   * Removes tag keys from the specified resource.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: SSM.Types.RemoveTagsFromResourceResult) => void): Request<SSM.Types.RemoveTagsFromResourceResult, AWSError>;
  /**
   *  ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the GetServiceSetting API operation to view the current value. Use the UpdateServiceSetting API operation to change the default setting.  Reset the service setting for the account to the default value as provisioned by the Amazon Web Services service team. 
   */
  resetServiceSetting(params: SSM.Types.ResetServiceSettingRequest, callback?: (err: AWSError, data: SSM.Types.ResetServiceSettingResult) => void): Request<SSM.Types.ResetServiceSettingResult, AWSError>;
  /**
   *  ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the GetServiceSetting API operation to view the current value. Use the UpdateServiceSetting API operation to change the default setting.  Reset the service setting for the account to the default value as provisioned by the Amazon Web Services service team. 
   */
  resetServiceSetting(callback?: (err: AWSError, data: SSM.Types.ResetServiceSettingResult) => void): Request<SSM.Types.ResetServiceSettingResult, AWSError>;
  /**
   * Reconnects a session to a managed node after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.  This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It isn't intended for any other use. 
   */
  resumeSession(params: SSM.Types.ResumeSessionRequest, callback?: (err: AWSError, data: SSM.Types.ResumeSessionResponse) => void): Request<SSM.Types.ResumeSessionResponse, AWSError>;
  /**
   * Reconnects a session to a managed node after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.  This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It isn't intended for any other use. 
   */
  resumeSession(callback?: (err: AWSError, data: SSM.Types.ResumeSessionResponse) => void): Request<SSM.Types.ResumeSessionResponse, AWSError>;
  /**
   * Sends a signal to an Automation execution to change the current behavior or status of the execution. 
   */
  sendAutomationSignal(params: SSM.Types.SendAutomationSignalRequest, callback?: (err: AWSError, data: SSM.Types.SendAutomationSignalResult) => void): Request<SSM.Types.SendAutomationSignalResult, AWSError>;
  /**
   * Sends a signal to an Automation execution to change the current behavior or status of the execution. 
   */
  sendAutomationSignal(callback?: (err: AWSError, data: SSM.Types.SendAutomationSignalResult) => void): Request<SSM.Types.SendAutomationSignalResult, AWSError>;
  /**
   * Runs commands on one or more managed nodes.
   */
  sendCommand(params: SSM.Types.SendCommandRequest, callback?: (err: AWSError, data: SSM.Types.SendCommandResult) => void): Request<SSM.Types.SendCommandResult, AWSError>;
  /**
   * Runs commands on one or more managed nodes.
   */
  sendCommand(callback?: (err: AWSError, data: SSM.Types.SendCommandResult) => void): Request<SSM.Types.SendCommandResult, AWSError>;
  /**
   * Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.
   */
  startAssociationsOnce(params: SSM.Types.StartAssociationsOnceRequest, callback?: (err: AWSError, data: SSM.Types.StartAssociationsOnceResult) => void): Request<SSM.Types.StartAssociationsOnceResult, AWSError>;
  /**
   * Runs an association immediately and only one time. This operation can be helpful when troubleshooting associations.
   */
  startAssociationsOnce(callback?: (err: AWSError, data: SSM.Types.StartAssociationsOnceResult) => void): Request<SSM.Types.StartAssociationsOnceResult, AWSError>;
  /**
   * Initiates execution of an Automation runbook.
   */
  startAutomationExecution(params: SSM.Types.StartAutomationExecutionRequest, callback?: (err: AWSError, data: SSM.Types.StartAutomationExecutionResult) => void): Request<SSM.Types.StartAutomationExecutionResult, AWSError>;
  /**
   * Initiates execution of an Automation runbook.
   */
  startAutomationExecution(callback?: (err: AWSError, data: SSM.Types.StartAutomationExecutionResult) => void): Request<SSM.Types.StartAutomationExecutionResult, AWSError>;
  /**
   * Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.
   */
  startChangeRequestExecution(params: SSM.Types.StartChangeRequestExecutionRequest, callback?: (err: AWSError, data: SSM.Types.StartChangeRequestExecutionResult) => void): Request<SSM.Types.StartChangeRequestExecutionResult, AWSError>;
  /**
   * Creates a change request for Change Manager. The Automation runbooks specified in the change request run only after all required approvals for the change request have been received.
   */
  startChangeRequestExecution(callback?: (err: AWSError, data: SSM.Types.StartChangeRequestExecutionResult) => void): Request<SSM.Types.StartChangeRequestExecutionResult, AWSError>;
  /**
   * Initiates a connection to a target (for example, a managed node) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.  Amazon Web Services CLI usage: start-session is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see Install the Session Manager plugin for the Amazon Web Services CLI in the Amazon Web Services Systems Manager User Guide. Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools for PowerShell on Windows local machines. 
   */
  startSession(params: SSM.Types.StartSessionRequest, callback?: (err: AWSError, data: SSM.Types.StartSessionResponse) => void): Request<SSM.Types.StartSessionResponse, AWSError>;
  /**
   * Initiates a connection to a target (for example, a managed node) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.  Amazon Web Services CLI usage: start-session is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see Install the Session Manager plugin for the Amazon Web Services CLI in the Amazon Web Services Systems Manager User Guide. Amazon Web Services Tools for PowerShell usage: Start-SSMSession isn't currently supported by Amazon Web Services Tools for PowerShell on Windows local machines. 
   */
  startSession(callback?: (err: AWSError, data: SSM.Types.StartSessionResponse) => void): Request<SSM.Types.StartSessionResponse, AWSError>;
  /**
   * Stop an Automation that is currently running.
   */
  stopAutomationExecution(params: SSM.Types.StopAutomationExecutionRequest, callback?: (err: AWSError, data: SSM.Types.StopAutomationExecutionResult) => void): Request<SSM.Types.StopAutomationExecutionResult, AWSError>;
  /**
   * Stop an Automation that is currently running.
   */
  stopAutomationExecution(callback?: (err: AWSError, data: SSM.Types.StopAutomationExecutionResult) => void): Request<SSM.Types.StopAutomationExecutionResult, AWSError>;
  /**
   * Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.
   */
  terminateSession(params: SSM.Types.TerminateSessionRequest, callback?: (err: AWSError, data: SSM.Types.TerminateSessionResponse) => void): Request<SSM.Types.TerminateSessionResponse, AWSError>;
  /**
   * Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the managed node. A terminated session can't be resumed.
   */
  terminateSession(callback?: (err: AWSError, data: SSM.Types.TerminateSessionResponse) => void): Request<SSM.Types.TerminateSessionResponse, AWSError>;
  /**
   * Remove a label or labels from a parameter.
   */
  unlabelParameterVersion(params: SSM.Types.UnlabelParameterVersionRequest, callback?: (err: AWSError, data: SSM.Types.UnlabelParameterVersionResult) => void): Request<SSM.Types.UnlabelParameterVersionResult, AWSError>;
  /**
   * Remove a label or labels from a parameter.
   */
  unlabelParameterVersion(callback?: (err: AWSError, data: SSM.Types.UnlabelParameterVersionResult) => void): Request<SSM.Types.UnlabelParameterVersionResult, AWSError>;
  /**
   * Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call UpdateAssociation, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the Name parameter. Before calling this API action, we recommend that you call the DescribeAssociation API operation and make a note of all optional parameters required for your UpdateAssociation call. In order to call this API operation, your Identity and Access Management (IAM) user account, group, or role must be configured with permission to call the DescribeAssociation API operation. If you don't have permission to call DescribeAssociation, then you receive the following error: An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; isn't authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;   When you update an association, the association immediately runs against the specified targets. You can add the ApplyOnlyAtCronInterval parameter to run the association during the next schedule run. 
   */
  updateAssociation(params: SSM.Types.UpdateAssociationRequest, callback?: (err: AWSError, data: SSM.Types.UpdateAssociationResult) => void): Request<SSM.Types.UpdateAssociationResult, AWSError>;
  /**
   * Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you call UpdateAssociation, the system removes all optional parameters from the request and overwrites the association with null values for those parameters. This is by design. You must specify all optional parameters in the call, even if you are not changing the parameters. This includes the Name parameter. Before calling this API action, we recommend that you call the DescribeAssociation API operation and make a note of all optional parameters required for your UpdateAssociation call. In order to call this API operation, your Identity and Access Management (IAM) user account, group, or role must be configured with permission to call the DescribeAssociation API operation. If you don't have permission to call DescribeAssociation, then you receive the following error: An error occurred (AccessDeniedException) when calling the UpdateAssociation operation: User: &lt;user_arn&gt; isn't authorized to perform: ssm:DescribeAssociation on resource: &lt;resource_arn&gt;   When you update an association, the association immediately runs against the specified targets. You can add the ApplyOnlyAtCronInterval parameter to run the association during the next schedule run. 
   */
  updateAssociation(callback?: (err: AWSError, data: SSM.Types.UpdateAssociationResult) => void): Request<SSM.Types.UpdateAssociationResult, AWSError>;
  /**
   * Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node.  UpdateAssociationStatus is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the InstanceId legacy parameter.
   */
  updateAssociationStatus(params: SSM.Types.UpdateAssociationStatusRequest, callback?: (err: AWSError, data: SSM.Types.UpdateAssociationStatusResult) => void): Request<SSM.Types.UpdateAssociationStatusResult, AWSError>;
  /**
   * Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified managed node.  UpdateAssociationStatus is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to report status updates about your associations and is only used for associations created with the InstanceId legacy parameter.
   */
  updateAssociationStatus(callback?: (err: AWSError, data: SSM.Types.UpdateAssociationStatusResult) => void): Request<SSM.Types.UpdateAssociationStatusResult, AWSError>;
  /**
   * Updates one or more values for an SSM document.
   */
  updateDocument(params: SSM.Types.UpdateDocumentRequest, callback?: (err: AWSError, data: SSM.Types.UpdateDocumentResult) => void): Request<SSM.Types.UpdateDocumentResult, AWSError>;
  /**
   * Updates one or more values for an SSM document.
   */
  updateDocument(callback?: (err: AWSError, data: SSM.Types.UpdateDocumentResult) => void): Request<SSM.Types.UpdateDocumentResult, AWSError>;
  /**
   * Set the default version of a document.   If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the apply-only-at-cron-interval parameter. 
   */
  updateDocumentDefaultVersion(params: SSM.Types.UpdateDocumentDefaultVersionRequest, callback?: (err: AWSError, data: SSM.Types.UpdateDocumentDefaultVersionResult) => void): Request<SSM.Types.UpdateDocumentDefaultVersionResult, AWSError>;
  /**
   * Set the default version of a document.   If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the apply-only-at-cron-interval parameter. 
   */
  updateDocumentDefaultVersion(callback?: (err: AWSError, data: SSM.Types.UpdateDocumentDefaultVersionResult) => void): Request<SSM.Types.UpdateDocumentDefaultVersionResult, AWSError>;
  /**
   * Updates information related to approval reviews for a specific version of a change template in Change Manager.
   */
  updateDocumentMetadata(params: SSM.Types.UpdateDocumentMetadataRequest, callback?: (err: AWSError, data: SSM.Types.UpdateDocumentMetadataResponse) => void): Request<SSM.Types.UpdateDocumentMetadataResponse, AWSError>;
  /**
   * Updates information related to approval reviews for a specific version of a change template in Change Manager.
   */
  updateDocumentMetadata(callback?: (err: AWSError, data: SSM.Types.UpdateDocumentMetadataResponse) => void): Request<SSM.Types.UpdateDocumentMetadataResponse, AWSError>;
  /**
   * Updates an existing maintenance window. Only specified parameters are modified.  The value you specify for Duration determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for Cutoff. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for Cutoff is one hour, no maintenance window tasks can start after 5 PM. 
   */
  updateMaintenanceWindow(params: SSM.Types.UpdateMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowResult) => void): Request<SSM.Types.UpdateMaintenanceWindowResult, AWSError>;
  /**
   * Updates an existing maintenance window. Only specified parameters are modified.  The value you specify for Duration determines the specific end time for the maintenance window based on the time it begins. No maintenance window tasks are permitted to start after the resulting endtime minus the number of hours you specify for Cutoff. For example, if the maintenance window starts at 3 PM, the duration is three hours, and the value you specify for Cutoff is one hour, no maintenance window tasks can start after 5 PM. 
   */
  updateMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowResult) => void): Request<SSM.Types.UpdateMaintenanceWindowResult, AWSError>;
  /**
   * Modifies the target of an existing maintenance window. You can change the following:   Name   Description   Owner   IDs for an ID target   Tags for a Tag target   From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see Target.    If a parameter is null, then the corresponding field isn't modified. 
   */
  updateMaintenanceWindowTarget(params: SSM.Types.UpdateMaintenanceWindowTargetRequest, callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowTargetResult) => void): Request<SSM.Types.UpdateMaintenanceWindowTargetResult, AWSError>;
  /**
   * Modifies the target of an existing maintenance window. You can change the following:   Name   Description   Owner   IDs for an ID target   Tags for a Tag target   From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see Target.    If a parameter is null, then the corresponding field isn't modified. 
   */
  updateMaintenanceWindowTarget(callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowTargetResult) => void): Request<SSM.Types.UpdateMaintenanceWindowTargetResult, AWSError>;
  /**
   * Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:    TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript.    ServiceRoleArn     TaskInvocationParameters     Priority     MaxConcurrency     MaxErrors     One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see Registering maintenance window tasks without targets in the Amazon Web Services Systems Manager User Guide.  If the value for a parameter in UpdateMaintenanceWindowTask is null, then the corresponding field isn't modified. If you set Replace to true, then all fields required by the RegisterTaskWithMaintenanceWindow operation are required for this request. Optional fields that aren't specified are set to null.  When you update a maintenance window task that has options specified in TaskInvocationParameters, you must provide again all the TaskInvocationParameters values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified TaskInvocationParameters values for Comment, NotificationConfig, and OutputS3BucketName. If you update the maintenance window task and specify only a different OutputS3BucketName value, the values for Comment and NotificationConfig are removed. 
   */
  updateMaintenanceWindowTask(params: SSM.Types.UpdateMaintenanceWindowTaskRequest, callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowTaskResult) => void): Request<SSM.Types.UpdateMaintenanceWindowTaskResult, AWSError>;
  /**
   * Modifies a task assigned to a maintenance window. You can't change the task type, but you can change the following values:    TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript.    ServiceRoleArn     TaskInvocationParameters     Priority     MaxConcurrency     MaxErrors     One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see Registering maintenance window tasks without targets in the Amazon Web Services Systems Manager User Guide.  If the value for a parameter in UpdateMaintenanceWindowTask is null, then the corresponding field isn't modified. If you set Replace to true, then all fields required by the RegisterTaskWithMaintenanceWindow operation are required for this request. Optional fields that aren't specified are set to null.  When you update a maintenance window task that has options specified in TaskInvocationParameters, you must provide again all the TaskInvocationParameters values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified TaskInvocationParameters values for Comment, NotificationConfig, and OutputS3BucketName. If you update the maintenance window task and specify only a different OutputS3BucketName value, the values for Comment and NotificationConfig are removed. 
   */
  updateMaintenanceWindowTask(callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowTaskResult) => void): Request<SSM.Types.UpdateMaintenanceWindowTaskResult, AWSError>;
  /**
   * Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see CreateActivation.
   */
  updateManagedInstanceRole(params: SSM.Types.UpdateManagedInstanceRoleRequest, callback?: (err: AWSError, data: SSM.Types.UpdateManagedInstanceRoleResult) => void): Request<SSM.Types.UpdateManagedInstanceRoleResult, AWSError>;
  /**
   * Changes the Identity and Access Management (IAM) role that is assigned to the on-premises server, edge device, or virtual machines (VM). IAM roles are first assigned to these hybrid nodes during the activation process. For more information, see CreateActivation.
   */
  updateManagedInstanceRole(callback?: (err: AWSError, data: SSM.Types.UpdateManagedInstanceRoleResult) => void): Request<SSM.Types.UpdateManagedInstanceRoleResult, AWSError>;
  /**
   * Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see Getting started with OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see OpsCenter in the Amazon Web Services Systems Manager User Guide. 
   */
  updateOpsItem(params: SSM.Types.UpdateOpsItemRequest, callback?: (err: AWSError, data: SSM.Types.UpdateOpsItemResponse) => void): Request<SSM.Types.UpdateOpsItemResponse, AWSError>;
  /**
   * Edit or change an OpsItem. You must have permission in Identity and Access Management (IAM) to update an OpsItem. For more information, see Getting started with OpsCenter in the Amazon Web Services Systems Manager User Guide. Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and remediate operational issues impacting the performance and health of their Amazon Web Services resources. For more information, see OpsCenter in the Amazon Web Services Systems Manager User Guide. 
   */
  updateOpsItem(callback?: (err: AWSError, data: SSM.Types.UpdateOpsItemResponse) => void): Request<SSM.Types.UpdateOpsItemResponse, AWSError>;
  /**
   * Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.
   */
  updateOpsMetadata(params: SSM.Types.UpdateOpsMetadataRequest, callback?: (err: AWSError, data: SSM.Types.UpdateOpsMetadataResult) => void): Request<SSM.Types.UpdateOpsMetadataResult, AWSError>;
  /**
   * Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.
   */
  updateOpsMetadata(callback?: (err: AWSError, data: SSM.Types.UpdateOpsMetadataResult) => void): Request<SSM.Types.UpdateOpsMetadataResult, AWSError>;
  /**
   * Modifies an existing patch baseline. Fields not specified in the request are left unchanged.  For information about valid key-value pairs in PatchFilters for each supported operating system type, see PatchFilter. 
   */
  updatePatchBaseline(params: SSM.Types.UpdatePatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.UpdatePatchBaselineResult) => void): Request<SSM.Types.UpdatePatchBaselineResult, AWSError>;
  /**
   * Modifies an existing patch baseline. Fields not specified in the request are left unchanged.  For information about valid key-value pairs in PatchFilters for each supported operating system type, see PatchFilter. 
   */
  updatePatchBaseline(callback?: (err: AWSError, data: SSM.Types.UpdatePatchBaselineResult) => void): Request<SSM.Types.UpdatePatchBaselineResult, AWSError>;
  /**
   * Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the Include only the current account option, you can't edit that sync later and choose the Include all accounts from my Organizations configuration option. Instead, you must delete the first resource data sync, and create a new one.  This API operation only supports a resource data sync that was created with a SyncFromSource SyncType. 
   */
  updateResourceDataSync(params: SSM.Types.UpdateResourceDataSyncRequest, callback?: (err: AWSError, data: SSM.Types.UpdateResourceDataSyncResult) => void): Request<SSM.Types.UpdateResourceDataSyncResult, AWSError>;
  /**
   * Update a resource data sync. After you create a resource data sync for a Region, you can't change the account options for that sync. For example, if you create a sync in the us-east-2 (Ohio) Region and you choose the Include only the current account option, you can't edit that sync later and choose the Include all accounts from my Organizations configuration option. Instead, you must delete the first resource data sync, and create a new one.  This API operation only supports a resource data sync that was created with a SyncFromSource SyncType. 
   */
  updateResourceDataSync(callback?: (err: AWSError, data: SSM.Types.UpdateResourceDataSyncResult) => void): Request<SSM.Types.UpdateResourceDataSyncResult, AWSError>;
  /**
   *  ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the GetServiceSetting API operation to view the current value. Or, use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team. Update the service setting for the account. 
   */
  updateServiceSetting(params: SSM.Types.UpdateServiceSettingRequest, callback?: (err: AWSError, data: SSM.Types.UpdateServiceSettingResult) => void): Request<SSM.Types.UpdateServiceSettingResult, AWSError>;
  /**
   *  ServiceSetting is an account-level setting for an Amazon Web Services service. This setting defines how a user interacts with or uses a service or a feature of a service. For example, if an Amazon Web Services service charges money to the account based on feature or service usage, then the Amazon Web Services service team might create a default setting of "false". This means the user can't use this feature unless they change the setting to "true" and intentionally opt in for a paid feature. Services map a SettingId object to a setting value. Amazon Web Services services teams define the default value for a SettingId. You can't create a new SettingId, but you can overwrite the default value if you have the ssm:UpdateServiceSetting permission for the setting. Use the GetServiceSetting API operation to view the current value. Or, use the ResetServiceSetting to change the value back to the original value defined by the Amazon Web Services service team. Update the service setting for the account. 
   */
  updateServiceSetting(callback?: (err: AWSError, data: SSM.Types.UpdateServiceSettingResult) => void): Request<SSM.Types.UpdateServiceSettingResult, AWSError>;
  /**
   * Waits for the commandExecuted state by periodically calling the underlying SSM.getCommandInvocationoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "commandExecuted", params: SSM.Types.GetCommandInvocationRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: SSM.Types.GetCommandInvocationResult) => void): Request<SSM.Types.GetCommandInvocationResult, AWSError>;
  /**
   * Waits for the commandExecuted state by periodically calling the underlying SSM.getCommandInvocationoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "commandExecuted", callback?: (err: AWSError, data: SSM.Types.GetCommandInvocationResult) => void): Request<SSM.Types.GetCommandInvocationResult, AWSError>;
}
declare namespace SSM {
  export type Account = string;
  export type AccountId = string;
  export type AccountIdList = AccountId[];
  export interface AccountSharingInfo {
    /**
     * The Amazon Web Services account ID where the current document is shared.
     */
    AccountId?: AccountId;
    /**
     * The version of the current document shared with the account.
     */
    SharedDocumentVersion?: SharedDocumentVersion;
  }
  export type AccountSharingInfoList = AccountSharingInfo[];
  export type Accounts = Account[];
  export interface Activation {
    /**
     * The ID created by Systems Manager when you submitted the activation.
     */
    ActivationId?: ActivationId;
    /**
     * A user defined description of the activation.
     */
    Description?: ActivationDescription;
    /**
     * A name for the managed node when it is created.
     */
    DefaultInstanceName?: DefaultInstanceName;
    /**
     * The Identity and Access Management (IAM) role to assign to the managed node.
     */
    IamRole?: IamRole;
    /**
     * The maximum number of managed nodes that can be registered using this activation.
     */
    RegistrationLimit?: RegistrationLimit;
    /**
     * The number of managed nodes already registered with this activation.
     */
    RegistrationsCount?: RegistrationsCount;
    /**
     * The date when this activation can no longer be used to register managed nodes.
     */
    ExpirationDate?: ExpirationDate;
    /**
     * Whether or not the activation is expired.
     */
    Expired?: Boolean;
    /**
     * The date the activation was created.
     */
    CreatedDate?: CreatedDate;
    /**
     * Tags assigned to the activation.
     */
    Tags?: TagList;
  }
  export type ActivationCode = string;
  export type ActivationDescription = string;
  export type ActivationId = string;
  export type ActivationList = Activation[];
  export interface AddTagsToResourceRequest {
    /**
     * Specifies the type of resource you are tagging.  The ManagedInstance type for this API operation is for on-premises managed nodes. You must specify the name of the managed node in the following format: mi-ID_number . For example, mi-1a2b3c4d5e6f. 
     */
    ResourceType: ResourceTypeForTagging;
    /**
     * The resource ID you want to tag. Use the ID of the resource. Here are some examples:  MaintenanceWindow: mw-012345abcde   PatchBaseline: pb-012345abcde   Automation: example-c160-4567-8519-012345abcde   OpsMetadata object: ResourceID for tagging is created from the Amazon Resource Name (ARN) for the object. Specifically, ResourceID is created from the strings that come after the word opsmetadata in the ARN. For example, an OpsMetadata object with an ARN of arn:aws:ssm:us-east-2:1234567890:opsmetadata/aws/ssm/MyGroup/appmanager has a ResourceID of either aws/ssm/MyGroup/appmanager or /aws/ssm/MyGroup/appmanager. For the Document and Parameter values, use the name of the resource.  ManagedInstance: mi-012345abcde   The ManagedInstance type for this API operation is only for on-premises managed nodes. You must specify the name of the managed node in the following format: mi-ID_number . For example, mi-1a2b3c4d5e6f. 
     */
    ResourceId: ResourceId;
    /**
     * One or more tags. The value parameter is required.  Don't enter personally identifiable information in this field. 
     */
    Tags: TagList;
  }
  export interface AddTagsToResourceResult {
  }
  export type AgentErrorCode = string;
  export type AggregatorSchemaOnly = boolean;
  export interface Alarm {
    /**
     * The name of your CloudWatch alarm.
     */
    Name: AlarmName;
  }
  export interface AlarmConfiguration {
    /**
     * If you specify true for this value, your automation or command continue to run even if we can't gather information about the state of your CloudWatch alarm. The default value is false.
     */
    IgnorePollAlarmFailure?: Boolean;
    /**
     * The name of the CloudWatch alarm specified in the configuration.
     */
    Alarms: AlarmList;
  }
  export type AlarmList = Alarm[];
  export type AlarmName = string;
  export interface AlarmStateInformation {
    /**
     * The name of your CloudWatch alarm.
     */
    Name: AlarmName;
    /**
     * The state of your CloudWatch alarm.
     */
    State: ExternalAlarmState;
  }
  export type AlarmStateInformationList = AlarmStateInformation[];
  export type AllowedPattern = string;
  export type ApplyOnlyAtCronInterval = boolean;
  export type ApproveAfterDays = number;
  export interface AssociateOpsItemRelatedItemRequest {
    /**
     * The ID of the OpsItem to which you want to associate a resource as a related item.
     */
    OpsItemId: OpsItemId;
    /**
     * The type of association that you want to create between an OpsItem and a resource. OpsCenter supports IsParentOf and RelatesTo association types.
     */
    AssociationType: OpsItemRelatedItemAssociationType;
    /**
     * The type of resource that you want to associate with an OpsItem. OpsCenter supports the following types:  AWS::SSMIncidents::IncidentRecord: an Incident Manager incident.   AWS::SSM::Document: a Systems Manager (SSM) document.
     */
    ResourceType: OpsItemRelatedItemAssociationResourceType;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Web Services resource that you want to associate with the OpsItem.
     */
    ResourceUri: OpsItemRelatedItemAssociationResourceUri;
  }
  export interface AssociateOpsItemRelatedItemResponse {
    /**
     * The association ID.
     */
    AssociationId?: OpsItemRelatedItemAssociationId;
  }
  export interface Association {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The managed node ID.
     */
    InstanceId?: InstanceId;
    /**
     * The ID created by the system when you create an association. An association is a binding between a document and a set of targets with a schedule.
     */
    AssociationId?: AssociationId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The version of the document used in the association. If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the apply-only-at-cron-interval parameter.  State Manager doesn't support running associations that use a new version of a document if that document is shared from another account. State Manager always runs the default version of a document if shared from another account, even though the Systems Manager console shows that a new version was processed. If you want to run an association using a new version of a document shared form another account, you must set the document version to default. 
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The managed nodes targeted by the request to create an association. You can target all managed nodes in an Amazon Web Services account by specifying the InstanceIds key with a value of *.
     */
    Targets?: Targets;
    /**
     * The date on which the association was last run.
     */
    LastExecutionDate?: DateTime;
    /**
     * Information about the association.
     */
    Overview?: AssociationOverview;
    /**
     * A cron expression that specifies a schedule when the association runs. The schedule runs in Coordinated Universal Time (UTC).
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * The association name.
     */
    AssociationName?: AssociationName;
    /**
     * Number of days to wait after the scheduled day to run an association.
     */
    ScheduleOffset?: ScheduleOffset;
    /**
     * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
     */
    TargetMaps?: TargetMaps;
  }
  export type AssociationComplianceSeverity = "CRITICAL"|"HIGH"|"MEDIUM"|"LOW"|"UNSPECIFIED"|string;
  export interface AssociationDescription {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The managed node ID.
     */
    InstanceId?: InstanceId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The date when the association was made.
     */
    Date?: DateTime;
    /**
     * The date when the association was last updated.
     */
    LastUpdateAssociationDate?: DateTime;
    /**
     * The association status.
     */
    Status?: AssociationStatus;
    /**
     * Information about the association.
     */
    Overview?: AssociationOverview;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * Choose the parameter that will define how your automation will branch out. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a capability of Amazon Web Services Systems Manager.
     */
    AutomationTargetParameterName?: AutomationTargetParameterName;
    /**
     * A description of the parameters for a document. 
     */
    Parameters?: Parameters;
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The managed nodes targeted by the request. 
     */
    Targets?: Targets;
    /**
     * A cron expression that specifies a schedule when the association runs.
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * An S3 bucket where you want to store the output details of the request.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * The date on which the association was last run.
     */
    LastExecutionDate?: DateTime;
    /**
     * The last date on which the association was successfully run.
     */
    LastSuccessfulExecutionDate?: DateTime;
    /**
     * The association name.
     */
    AssociationName?: AssociationName;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new managed node starts and attempts to run an association while Systems Manager is running MaxConcurrency associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level that is assigned to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
    /**
     * The mode for generating association compliance. You can specify AUTO or MANUAL. In AUTO mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is COMPLIANT. If the association execution doesn't run successfully, the association is NON-COMPLIANT. In MANUAL mode, you must specify the AssociationId as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a capability of Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation. By default, all associations use AUTO mode.
     */
    SyncCompliance?: AssociationSyncCompliance;
    /**
     * By default, when you create a new associations, the system runs it immediately after it is created and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you create it. This parameter isn't supported for rate expressions.
     */
    ApplyOnlyAtCronInterval?: ApplyOnlyAtCronInterval;
    /**
     * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under. The associations only run when that change calendar is open. For more information, see Amazon Web Services Systems Manager Change Calendar.
     */
    CalendarNames?: CalendarNameOrARNList;
    /**
     * The combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the association.
     */
    TargetLocations?: TargetLocations;
    /**
     * Number of days to wait after the scheduled day to run an association.
     */
    ScheduleOffset?: ScheduleOffset;
    /**
     * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
     */
    TargetMaps?: TargetMaps;
    AlarmConfiguration?: AlarmConfiguration;
    /**
     * The CloudWatch alarm that was invoked during the association.
     */
    TriggeredAlarms?: AlarmStateInformationList;
  }
  export type AssociationDescriptionList = AssociationDescription[];
  export interface AssociationExecution {
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The execution ID for the association.
     */
    ExecutionId?: AssociationExecutionId;
    /**
     * The status of the association execution.
     */
    Status?: StatusName;
    /**
     * Detailed status information about the execution.
     */
    DetailedStatus?: StatusName;
    /**
     * The time the execution started.
     */
    CreatedTime?: DateTime;
    /**
     * The date of the last execution.
     */
    LastExecutionDate?: DateTime;
    /**
     * An aggregate status of the resources in the execution based on the status type.
     */
    ResourceCountByStatus?: ResourceCountByStatus;
    AlarmConfiguration?: AlarmConfiguration;
    /**
     * The CloudWatch alarms that were invoked by the association.
     */
    TriggeredAlarms?: AlarmStateInformationList;
  }
  export interface AssociationExecutionFilter {
    /**
     * The key value used in the request.
     */
    Key: AssociationExecutionFilterKey;
    /**
     * The value specified for the key.
     */
    Value: AssociationExecutionFilterValue;
    /**
     * The filter type specified in the request.
     */
    Type: AssociationFilterOperatorType;
  }
  export type AssociationExecutionFilterKey = "ExecutionId"|"Status"|"CreatedTime"|string;
  export type AssociationExecutionFilterList = AssociationExecutionFilter[];
  export type AssociationExecutionFilterValue = string;
  export type AssociationExecutionId = string;
  export interface AssociationExecutionTarget {
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The execution ID.
     */
    ExecutionId?: AssociationExecutionId;
    /**
     * The resource ID, for example, the managed node ID where the association ran.
     */
    ResourceId?: AssociationResourceId;
    /**
     * The resource type, for example, EC2.
     */
    ResourceType?: AssociationResourceType;
    /**
     * The association execution status.
     */
    Status?: StatusName;
    /**
     * Detailed information about the execution status.
     */
    DetailedStatus?: StatusName;
    /**
     * The date of the last execution.
     */
    LastExecutionDate?: DateTime;
    /**
     * The location where the association details are saved.
     */
    OutputSource?: OutputSource;
  }
  export interface AssociationExecutionTargetsFilter {
    /**
     * The key value used in the request.
     */
    Key: AssociationExecutionTargetsFilterKey;
    /**
     * The value specified for the key.
     */
    Value: AssociationExecutionTargetsFilterValue;
  }
  export type AssociationExecutionTargetsFilterKey = "Status"|"ResourceId"|"ResourceType"|string;
  export type AssociationExecutionTargetsFilterList = AssociationExecutionTargetsFilter[];
  export type AssociationExecutionTargetsFilterValue = string;
  export type AssociationExecutionTargetsList = AssociationExecutionTarget[];
  export type AssociationExecutionsList = AssociationExecution[];
  export interface AssociationFilter {
    /**
     * The name of the filter.   InstanceId has been deprecated. 
     */
    key: AssociationFilterKey;
    /**
     * The filter value.
     */
    value: AssociationFilterValue;
  }
  export type AssociationFilterKey = "InstanceId"|"Name"|"AssociationId"|"AssociationStatusName"|"LastExecutedBefore"|"LastExecutedAfter"|"AssociationName"|"ResourceGroupName"|string;
  export type AssociationFilterList = AssociationFilter[];
  export type AssociationFilterOperatorType = "EQUAL"|"LESS_THAN"|"GREATER_THAN"|string;
  export type AssociationFilterValue = string;
  export type AssociationId = string;
  export type AssociationIdList = AssociationId[];
  export type AssociationList = Association[];
  export type AssociationName = string;
  export interface AssociationOverview {
    /**
     * The status of the association. Status can be: Pending, Success, or Failed.
     */
    Status?: StatusName;
    /**
     * A detailed status of the association.
     */
    DetailedStatus?: StatusName;
    /**
     * Returns the number of targets for the association status. For example, if you created an association with two managed nodes, and one of them was successful, this would return the count of managed nodes by status.
     */
    AssociationStatusAggregatedCount?: AssociationStatusAggregatedCount;
  }
  export type AssociationResourceId = string;
  export type AssociationResourceType = string;
  export interface AssociationStatus {
    /**
     * The date when the status changed.
     */
    Date: DateTime;
    /**
     * The status.
     */
    Name: AssociationStatusName;
    /**
     * The reason for the status.
     */
    Message: StatusMessage;
    /**
     * A user-defined string.
     */
    AdditionalInfo?: StatusAdditionalInfo;
  }
  export type AssociationStatusAggregatedCount = {[key: string]: InstanceCount};
  export type AssociationStatusName = "Pending"|"Success"|"Failed"|string;
  export type AssociationSyncCompliance = "AUTO"|"MANUAL"|string;
  export type AssociationVersion = string;
  export interface AssociationVersionInfo {
    /**
     * The ID created by the system when the association was created.
     */
    AssociationId?: AssociationId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The date the association version was created.
     */
    CreatedDate?: DateTime;
    /**
     * The name specified when the association was created.
     */
    Name?: DocumentARN;
    /**
     * The version of an Amazon Web Services Systems Manager document (SSM document) used when the association version was created.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * Parameters specified when the association version was created.
     */
    Parameters?: Parameters;
    /**
     * The targets specified for the association when the association version was created. 
     */
    Targets?: Targets;
    /**
     * The cron or rate schedule specified for the association when the association version was created.
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * The location in Amazon S3 specified for the association when the association version was created.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * The name specified for the association version when the association version was created.
     */
    AssociationName?: AssociationName;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new managed node starts and attempts to run an association while Systems Manager is running MaxConcurrency associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level that is assigned to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
    /**
     * The mode for generating association compliance. You can specify AUTO or MANUAL. In AUTO mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is COMPLIANT. If the association execution doesn't run successfully, the association is NON-COMPLIANT. In MANUAL mode, you must specify the AssociationId as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a capability of Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation. By default, all associations use AUTO mode.
     */
    SyncCompliance?: AssociationSyncCompliance;
    /**
     * By default, when you create a new associations, the system runs it immediately after it is created and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you create it. This parameter isn't supported for rate expressions.
     */
    ApplyOnlyAtCronInterval?: ApplyOnlyAtCronInterval;
    /**
     * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under. The associations for this version only run when that Change Calendar is open. For more information, see Amazon Web Services Systems Manager Change Calendar.
     */
    CalendarNames?: CalendarNameOrARNList;
    /**
     * The combination of Amazon Web Services Regions and Amazon Web Services accounts where you wanted to run the association when this association version was created.
     */
    TargetLocations?: TargetLocations;
    /**
     * Number of days to wait after the scheduled day to run an association.
     */
    ScheduleOffset?: ScheduleOffset;
    /**
     * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
     */
    TargetMaps?: TargetMaps;
  }
  export type AssociationVersionList = AssociationVersionInfo[];
  export interface AttachmentContent {
    /**
     * The name of an attachment.
     */
    Name?: AttachmentName;
    /**
     * The size of an attachment in bytes.
     */
    Size?: ContentLength;
    /**
     * The cryptographic hash value of the document content.
     */
    Hash?: AttachmentHash;
    /**
     * The hash algorithm used to calculate the hash value.
     */
    HashType?: AttachmentHashType;
    /**
     * The URL location of the attachment content.
     */
    Url?: AttachmentUrl;
  }
  export type AttachmentContentList = AttachmentContent[];
  export type AttachmentHash = string;
  export type AttachmentHashType = "Sha256"|string;
  export type AttachmentIdentifier = string;
  export interface AttachmentInformation {
    /**
     * The name of the attachment.
     */
    Name?: AttachmentName;
  }
  export type AttachmentInformationList = AttachmentInformation[];
  export type AttachmentName = string;
  export type AttachmentUrl = string;
  export interface AttachmentsSource {
    /**
     * The key of a key-value pair that identifies the location of an attachment to a document.
     */
    Key?: AttachmentsSourceKey;
    /**
     * The value of a key-value pair that identifies the location of an attachment to a document. The format for Value depends on the type of key you specify.   For the key SourceUrl, the value is an S3 bucket location. For example:  "Values": [ "s3://doc-example-bucket/my-folder" ]    For the key S3FileUrl, the value is a file in an S3 bucket. For example:  "Values": [ "s3://doc-example-bucket/my-folder/my-file.py" ]    For the key AttachmentReference, the value is constructed from the name of another SSM document in your account, a version number of that document, and a file attached to that document version that you want to reuse. For example:  "Values": [ "MyOtherDocument/3/my-other-file.py" ]  However, if the SSM document is shared with you from another account, the full SSM document ARN must be specified instead of the document name only. For example:  "Values": [ "arn:aws:ssm:us-east-2:111122223333:document/OtherAccountDocument/3/their-file.py" ]   
     */
    Values?: AttachmentsSourceValues;
    /**
     * The name of the document attachment file.
     */
    Name?: AttachmentIdentifier;
  }
  export type AttachmentsSourceKey = "SourceUrl"|"S3FileUrl"|"AttachmentReference"|string;
  export type AttachmentsSourceList = AttachmentsSource[];
  export type AttachmentsSourceValue = string;
  export type AttachmentsSourceValues = AttachmentsSourceValue[];
  export type AttributeName = string;
  export type AttributeValue = string;
  export type AutomationActionName = string;
  export interface AutomationExecution {
    /**
     * The execution ID.
     */
    AutomationExecutionId?: AutomationExecutionId;
    /**
     * The name of the Automation runbook used during the execution.
     */
    DocumentName?: DocumentName;
    /**
     * The version of the document to use during execution.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The time the execution started.
     */
    ExecutionStartTime?: DateTime;
    /**
     * The time the execution finished.
     */
    ExecutionEndTime?: DateTime;
    /**
     * The execution status of the Automation.
     */
    AutomationExecutionStatus?: AutomationExecutionStatus;
    /**
     * A list of details about the current state of all steps that comprise an execution. An Automation runbook contains a list of steps that are run in order.
     */
    StepExecutions?: StepExecutionList;
    /**
     * A boolean value that indicates if the response contains the full list of the Automation step executions. If true, use the DescribeAutomationStepExecutions API operation to get the full list of step executions.
     */
    StepExecutionsTruncated?: Boolean;
    /**
     * The key-value map of execution parameters, which were supplied when calling StartAutomationExecution.
     */
    Parameters?: AutomationParameterMap;
    /**
     * The list of execution outputs as defined in the Automation runbook.
     */
    Outputs?: AutomationParameterMap;
    /**
     * A message describing why an execution has failed, if the status is set to Failed.
     */
    FailureMessage?: String;
    /**
     * The automation execution mode.
     */
    Mode?: ExecutionMode;
    /**
     * The AutomationExecutionId of the parent automation.
     */
    ParentAutomationExecutionId?: AutomationExecutionId;
    /**
     * The Amazon Resource Name (ARN) of the user who ran the automation.
     */
    ExecutedBy?: String;
    /**
     * The name of the step that is currently running.
     */
    CurrentStepName?: String;
    /**
     * The action of the step that is currently running.
     */
    CurrentAction?: String;
    /**
     * The parameter name.
     */
    TargetParameterName?: AutomationParameterKey;
    /**
     * The specified targets.
     */
    Targets?: Targets;
    /**
     * The specified key-value mapping of document parameters to target resources.
     */
    TargetMaps?: TargetMaps;
    /**
     * A list of resolved targets in the rate control execution.
     */
    ResolvedTargets?: ResolvedTargets;
    /**
     * The MaxConcurrency value specified by the user when the execution started.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The MaxErrors value specified by the user when the execution started.
     */
    MaxErrors?: MaxErrors;
    /**
     * The target of the execution.
     */
    Target?: String;
    /**
     * The combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the Automation.
     */
    TargetLocations?: TargetLocations;
    /**
     * An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.
     */
    ProgressCounters?: ProgressCounters;
    /**
     * The details for the CloudWatch alarm applied to your automation.
     */
    AlarmConfiguration?: AlarmConfiguration;
    /**
     * The CloudWatch alarm that was invoked by the automation.
     */
    TriggeredAlarms?: AlarmStateInformationList;
    /**
     * The subtype of the Automation operation. Currently, the only supported value is ChangeRequest.
     */
    AutomationSubtype?: AutomationSubtype;
    /**
     * The date and time the Automation operation is scheduled to start.
     */
    ScheduledTime?: DateTime;
    /**
     * Information about the Automation runbooks that are run as part of a runbook workflow.  The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received. 
     */
    Runbooks?: Runbooks;
    /**
     * The ID of an OpsItem that is created to represent a Change Manager change request.
     */
    OpsItemId?: String;
    /**
     * The ID of a State Manager association used in the Automation operation.
     */
    AssociationId?: String;
    /**
     * The name of the Change Manager change request.
     */
    ChangeRequestName?: ChangeRequestName;
  }
  export interface AutomationExecutionFilter {
    /**
     * One or more keys to limit the results.
     */
    Key: AutomationExecutionFilterKey;
    /**
     * The values used to limit the execution information associated with the filter's key.
     */
    Values: AutomationExecutionFilterValueList;
  }
  export type AutomationExecutionFilterKey = "DocumentNamePrefix"|"ExecutionStatus"|"ExecutionId"|"ParentExecutionId"|"CurrentAction"|"StartTimeBefore"|"StartTimeAfter"|"AutomationType"|"TagKey"|"TargetResourceGroup"|"AutomationSubtype"|"OpsItemId"|string;
  export type AutomationExecutionFilterList = AutomationExecutionFilter[];
  export type AutomationExecutionFilterValue = string;
  export type AutomationExecutionFilterValueList = AutomationExecutionFilterValue[];
  export type AutomationExecutionId = string;
  export interface AutomationExecutionMetadata {
    /**
     * The execution ID.
     */
    AutomationExecutionId?: AutomationExecutionId;
    /**
     * The name of the Automation runbook used during execution.
     */
    DocumentName?: DocumentName;
    /**
     * The document version used during the execution.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The status of the execution.
     */
    AutomationExecutionStatus?: AutomationExecutionStatus;
    /**
     * The time the execution started.
     */
    ExecutionStartTime?: DateTime;
    /**
     * The time the execution finished. This isn't populated if the execution is still in progress.
     */
    ExecutionEndTime?: DateTime;
    /**
     * The IAM role ARN of the user who ran the automation.
     */
    ExecutedBy?: String;
    /**
     * An S3 bucket where execution information is stored.
     */
    LogFile?: String;
    /**
     * The list of execution outputs as defined in the Automation runbook.
     */
    Outputs?: AutomationParameterMap;
    /**
     * The Automation execution mode.
     */
    Mode?: ExecutionMode;
    /**
     * The execution ID of the parent automation.
     */
    ParentAutomationExecutionId?: AutomationExecutionId;
    /**
     * The name of the step that is currently running.
     */
    CurrentStepName?: String;
    /**
     * The action of the step that is currently running.
     */
    CurrentAction?: String;
    /**
     * The list of execution outputs as defined in the Automation runbook.
     */
    FailureMessage?: String;
    /**
     * The list of execution outputs as defined in the Automation runbook.
     */
    TargetParameterName?: AutomationParameterKey;
    /**
     * The targets defined by the user when starting the automation.
     */
    Targets?: Targets;
    /**
     * The specified key-value mapping of document parameters to target resources.
     */
    TargetMaps?: TargetMaps;
    /**
     * A list of targets that resolved during the execution.
     */
    ResolvedTargets?: ResolvedTargets;
    /**
     * The MaxConcurrency value specified by the user when starting the automation.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The MaxErrors value specified by the user when starting the automation.
     */
    MaxErrors?: MaxErrors;
    /**
     * The list of execution outputs as defined in the Automation runbook.
     */
    Target?: String;
    /**
     * Use this filter with DescribeAutomationExecutions. Specify either Local or CrossAccount. CrossAccount is an Automation that runs in multiple Amazon Web Services Regions and Amazon Web Services accounts. For more information, see Running Automation workflows in multiple Amazon Web Services Regions and accounts in the Amazon Web Services Systems Manager User Guide. 
     */
    AutomationType?: AutomationType;
    /**
     * The details for the CloudWatch alarm applied to your automation.
     */
    AlarmConfiguration?: AlarmConfiguration;
    /**
     * The CloudWatch alarm that was invoked by the automation.
     */
    TriggeredAlarms?: AlarmStateInformationList;
    /**
     * The subtype of the Automation operation. Currently, the only supported value is ChangeRequest.
     */
    AutomationSubtype?: AutomationSubtype;
    /**
     * The date and time the Automation operation is scheduled to start.
     */
    ScheduledTime?: DateTime;
    /**
     * Information about the Automation runbooks that are run during a runbook workflow in Change Manager.  The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received. 
     */
    Runbooks?: Runbooks;
    /**
     * The ID of an OpsItem that is created to represent a Change Manager change request.
     */
    OpsItemId?: String;
    /**
     * The ID of a State Manager association used in the Automation operation.
     */
    AssociationId?: String;
    /**
     * The name of the Change Manager change request.
     */
    ChangeRequestName?: ChangeRequestName;
  }
  export type AutomationExecutionMetadataList = AutomationExecutionMetadata[];
  export type AutomationExecutionStatus = "Pending"|"InProgress"|"Waiting"|"Success"|"TimedOut"|"Cancelling"|"Cancelled"|"Failed"|"PendingApproval"|"Approved"|"Rejected"|"Scheduled"|"RunbookInProgress"|"PendingChangeCalendarOverride"|"ChangeCalendarOverrideApproved"|"ChangeCalendarOverrideRejected"|"CompletedWithSuccess"|"CompletedWithFailure"|string;
  export type AutomationParameterKey = string;
  export type AutomationParameterMap = {[key: string]: AutomationParameterValueList};
  export type AutomationParameterValue = string;
  export type AutomationParameterValueList = AutomationParameterValue[];
  export type AutomationSubtype = "ChangeRequest"|string;
  export type AutomationTargetParameterName = string;
  export type AutomationType = "CrossAccount"|"Local"|string;
  export type BaselineDescription = string;
  export type BaselineId = string;
  export type BaselineName = string;
  export interface BaselineOverride {
    /**
     * The operating system rule used by the patch baseline override.
     */
    OperatingSystem?: OperatingSystem;
    GlobalFilters?: PatchFilterGroup;
    ApprovalRules?: PatchRuleGroup;
    /**
     * A list of explicitly approved patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see About package name formats for approved and rejected patch lists in the Amazon Web Services Systems Manager User Guide.
     */
    ApprovedPatches?: PatchIdList;
    /**
     * Defines the compliance level for approved patches. When an approved patch is reported as missing, this value describes the severity of the compliance violation.
     */
    ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
    /**
     * A list of explicitly rejected patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see About package name formats for approved and rejected patch lists in the Amazon Web Services Systems Manager User Guide.
     */
    RejectedPatches?: PatchIdList;
    /**
     * The action for Patch Manager to take on patches included in the RejectedPackages list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency.
     */
    RejectedPatchesAction?: PatchAction;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is false. Applies to Linux managed nodes only.
     */
    ApprovedPatchesEnableNonSecurity?: Boolean;
    /**
     * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
     */
    Sources?: PatchSourceList;
  }
  export type BatchErrorMessage = string;
  export type Boolean = boolean;
  export type CalendarNameOrARN = string;
  export type CalendarNameOrARNList = CalendarNameOrARN[];
  export type CalendarState = "OPEN"|"CLOSED"|string;
  export interface CancelCommandRequest {
    /**
     * The ID of the command you want to cancel.
     */
    CommandId: CommandId;
    /**
     * (Optional) A list of managed node IDs on which you want to cancel the command. If not provided, the command is canceled on every node on which it was requested.
     */
    InstanceIds?: InstanceIdList;
  }
  export interface CancelCommandResult {
  }
  export interface CancelMaintenanceWindowExecutionRequest {
    /**
     * The ID of the maintenance window execution to stop.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
  }
  export interface CancelMaintenanceWindowExecutionResult {
    /**
     * The ID of the maintenance window execution that has been stopped.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
  }
  export type Category = string;
  export type CategoryEnumList = Category[];
  export type CategoryList = Category[];
  export type ChangeDetailsValue = string;
  export type ChangeRequestName = string;
  export type ClientToken = string;
  export type CloudWatchLogGroupName = string;
  export interface CloudWatchOutputConfig {
    /**
     * The name of the CloudWatch Logs log group where you want to send command output. If you don't specify a group name, Amazon Web Services Systems Manager automatically creates a log group for you. The log group uses the following naming format:  aws/ssm/SystemsManagerDocumentName  
     */
    CloudWatchLogGroupName?: CloudWatchLogGroupName;
    /**
     * Enables Systems Manager to send command output to CloudWatch Logs.
     */
    CloudWatchOutputEnabled?: CloudWatchOutputEnabled;
  }
  export type CloudWatchOutputEnabled = boolean;
  export interface Command {
    /**
     * A unique identifier for this command.
     */
    CommandId?: CommandId;
    /**
     * The name of the document requested for execution.
     */
    DocumentName?: DocumentName;
    /**
     * The Systems Manager document (SSM document) version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * User-specified information about the command, such as a brief description of what the command should do.
     */
    Comment?: Comment;
    /**
     * If a command expires, it changes status to DeliveryTimedOut for all invocations that have the status InProgress, Pending, or Delayed. ExpiresAfter is calculated based on the total timeout for the overall command. For more information, see Understanding command timeout values in the Amazon Web Services Systems Manager User Guide.
     */
    ExpiresAfter?: DateTime;
    /**
     * The parameter values to be inserted in the document when running the command.
     */
    Parameters?: Parameters;
    /**
     * The managed node IDs against which this command was requested.
     */
    InstanceIds?: InstanceIdList;
    /**
     * An array of search criteria that targets managed nodes using a Key,Value combination that you specify. Targets is required if you don't provide one or more managed node IDs in the call.
     */
    Targets?: Targets;
    /**
     * The date and time the command was requested.
     */
    RequestedDateTime?: DateTime;
    /**
     * The status of the command.
     */
    Status?: CommandStatus;
    /**
     * A detailed status of the command execution. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding command statuses in the Amazon Web Services Systems Manager User Guide. StatusDetails can be one of the following values:   Pending: The command hasn't been sent to any managed nodes.   In Progress: The command has been sent to at least one managed node but hasn't reached a final state on all managed nodes.   Success: The command successfully ran on all invocations. This is a terminal state.   Delivery Timed Out: The value of MaxErrors or more command invocations shows a status of Delivery Timed Out. This is a terminal state.   Execution Timed Out: The value of MaxErrors or more command invocations shows a status of Execution Timed Out. This is a terminal state.   Failed: The value of MaxErrors or more command invocations shows a status of Failed. This is a terminal state.   Incomplete: The command was attempted on all managed nodes and one or more invocations doesn't have a value of Success but not enough invocations failed for the status to be Failed. This is a terminal state.   Cancelled: The command was terminated before it was completed. This is a terminal state.   Rate Exceeded: The number of managed nodes targeted by the command exceeded the account limit for pending invocations. The system has canceled the command before running it on any managed node. This is a terminal state.   Delayed: The system attempted to send the command to the managed node but wasn't successful. The system retries again.  
     */
    StatusDetails?: StatusDetails;
    /**
     * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon Web Services Region of the S3 bucket.
     */
    OutputS3Region?: S3Region;
    /**
     * The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
    /**
     * The maximum number of managed nodes that are allowed to run the command at the same time. You can specify a number of managed nodes, such as 10, or a percentage of nodes, such as 10%. The default value is 50. For more information about how to use MaxConcurrency, see Running commands using Systems Manager Run Command in the Amazon Web Services Systems Manager User Guide.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed before the system stops sending the command to additional targets. You can specify a number of errors, such as 10, or a percentage or errors, such as 10%. The default value is 0. For more information about how to use MaxErrors, see Running commands using Systems Manager Run Command in the Amazon Web Services Systems Manager User Guide.
     */
    MaxErrors?: MaxErrors;
    /**
     * The number of targets for the command.
     */
    TargetCount?: TargetCount;
    /**
     * The number of targets for which the command invocation reached a terminal state. Terminal states include the following: Success, Failed, Execution Timed Out, Delivery Timed Out, Cancelled, Terminated, or Undeliverable.
     */
    CompletedCount?: CompletedCount;
    /**
     * The number of targets for which the status is Failed or Execution Timed Out.
     */
    ErrorCount?: ErrorCount;
    /**
     * The number of targets for which the status is Delivery Timed Out.
     */
    DeliveryTimedOutCount?: DeliveryTimedOutCount;
    /**
     * The Identity and Access Management (IAM) service role that Run Command, a capability of Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes. 
     */
    ServiceRole?: ServiceRole;
    /**
     * Configurations for sending notifications about command status changes. 
     */
    NotificationConfig?: NotificationConfig;
    /**
     * Amazon CloudWatch Logs information where you want Amazon Web Services Systems Manager to send the command output.
     */
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
    /**
     * The TimeoutSeconds value specified for a command.
     */
    TimeoutSeconds?: TimeoutSeconds;
    /**
     * The details for the CloudWatch alarm applied to your command.
     */
    AlarmConfiguration?: AlarmConfiguration;
    /**
     * The CloudWatch alarm that was invoked by the command.
     */
    TriggeredAlarms?: AlarmStateInformationList;
  }
  export interface CommandFilter {
    /**
     * The name of the filter.  The ExecutionStage filter can't be used with the ListCommandInvocations operation, only with ListCommands. 
     */
    key: CommandFilterKey;
    /**
     * The filter value. Valid values for each filter key are as follows:    InvokedAfter: Specify a timestamp to limit your results. For example, specify 2021-07-07T00:00:00Z to see a list of command executions occurring July 7, 2021, and later.    InvokedBefore: Specify a timestamp to limit your results. For example, specify 2021-07-07T00:00:00Z to see a list of command executions from before July 7, 2021.    Status: Specify a valid command status to see a list of all command executions with that status. The status choices depend on the API you call. The status values you can specify for ListCommands are:    Pending     InProgress     Success     Cancelled     Failed     TimedOut (this includes both Delivery and Execution time outs)     AccessDenied     DeliveryTimedOut     ExecutionTimedOut     Incomplete     NoInstancesInTag     LimitExceeded    The status values you can specify for ListCommandInvocations are:    Pending     InProgress     Delayed     Success     Cancelled     Failed     TimedOut (this includes both Delivery and Execution time outs)     AccessDenied     DeliveryTimedOut     ExecutionTimedOut     Undeliverable     InvalidPlatform     Terminated       DocumentName: Specify name of the Amazon Web Services Systems Manager document (SSM document) for which you want to see command execution results. For example, specify AWS-RunPatchBaseline to see command executions that used this SSM document to perform security patching operations on managed nodes.     ExecutionStage: Specify one of the following values (ListCommands operations only):    Executing: Returns a list of command executions that are currently still running.    Complete: Returns a list of command executions that have already completed.     
     */
    value: CommandFilterValue;
  }
  export type CommandFilterKey = "InvokedAfter"|"InvokedBefore"|"Status"|"ExecutionStage"|"DocumentName"|string;
  export type CommandFilterList = CommandFilter[];
  export type CommandFilterValue = string;
  export type CommandId = string;
  export interface CommandInvocation {
    /**
     * The command against which this invocation was requested.
     */
    CommandId?: CommandId;
    /**
     * The managed node ID in which this invocation was requested.
     */
    InstanceId?: InstanceId;
    /**
     * The fully qualified host name of the managed node.
     */
    InstanceName?: InstanceTagName;
    /**
     * User-specified information about the command, such as a brief description of what the command should do.
     */
    Comment?: Comment;
    /**
     * The document name that was requested for execution.
     */
    DocumentName?: DocumentName;
    /**
     * The Systems Manager document (SSM document) version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The time and date the request was sent to this managed node.
     */
    RequestedDateTime?: DateTime;
    /**
     * Whether or not the invocation succeeded, failed, or is pending.
     */
    Status?: CommandInvocationStatus;
    /**
     * A detailed status of the command execution for each invocation (each managed node targeted by the command). StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding command statuses in the Amazon Web Services Systems Manager User Guide. StatusDetails can be one of the following values:   Pending: The command hasn't been sent to the managed node.   In Progress: The command has been sent to the managed node but hasn't reached a terminal state.   Success: The execution of the command or plugin was successfully completed. This is a terminal state.   Delivery Timed Out: The command wasn't delivered to the managed node before the delivery timeout expired. Delivery timeouts don't count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Execution Timed Out: Command execution started on the managed node, but the execution wasn't complete before the execution timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state.   Failed: The command wasn't successful on the managed node. For a plugin, this indicates that the result code wasn't zero. For a command invocation, this indicates that the result code for one or more plugins wasn't zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.   Cancelled: The command was terminated before it was completed. This is a terminal state.   Undeliverable: The command can't be delivered to the managed node. The managed node might not exist or might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.   Delayed: The system attempted to send the command to the managed node but wasn't successful. The system retries again.  
     */
    StatusDetails?: StatusDetails;
    /**
     *  Gets the trace output sent by the agent. 
     */
    TraceOutput?: InvocationTraceOutput;
    /**
     * The URL to the plugin's StdOut file in Amazon Simple Storage Service (Amazon S3), if the S3 bucket was defined for the parent command. For an invocation, StandardOutputUrl is populated if there is just one plugin defined for the command, and the S3 bucket was defined for the command.
     */
    StandardOutputUrl?: Url;
    /**
     * The URL to the plugin's StdErr file in Amazon Simple Storage Service (Amazon S3), if the S3 bucket was defined for the parent command. For an invocation, StandardErrorUrl is populated if there is just one plugin defined for the command, and the S3 bucket was defined for the command.
     */
    StandardErrorUrl?: Url;
    /**
     * Plugins processed by the command.
     */
    CommandPlugins?: CommandPluginList;
    /**
     * The Identity and Access Management (IAM) service role that Run Command, a capability of Amazon Web Services Systems Manager, uses to act on your behalf when sending notifications about command status changes on a per managed node basis.
     */
    ServiceRole?: ServiceRole;
    /**
     * Configurations for sending notifications about command status changes on a per managed node basis.
     */
    NotificationConfig?: NotificationConfig;
    /**
     * Amazon CloudWatch Logs information where you want Amazon Web Services Systems Manager to send the command output.
     */
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
  }
  export type CommandInvocationList = CommandInvocation[];
  export type CommandInvocationStatus = "Pending"|"InProgress"|"Delayed"|"Success"|"Cancelled"|"TimedOut"|"Failed"|"Cancelling"|string;
  export type CommandList = Command[];
  export type CommandMaxResults = number;
  export interface CommandPlugin {
    /**
     * The name of the plugin. Must be one of the following: aws:updateAgent, aws:domainjoin, aws:applications, aws:runPowerShellScript, aws:psmodule, aws:cloudWatch, aws:runShellScript, or aws:updateSSMAgent. 
     */
    Name?: CommandPluginName;
    /**
     * The status of this plugin. You can run a document with multiple plugins.
     */
    Status?: CommandPluginStatus;
    /**
     * A detailed status of the plugin execution. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding command statuses in the Amazon Web Services Systems Manager User Guide. StatusDetails can be one of the following values:   Pending: The command hasn't been sent to the managed node.   In Progress: The command has been sent to the managed node but hasn't reached a terminal state.   Success: The execution of the command or plugin was successfully completed. This is a terminal state.   Delivery Timed Out: The command wasn't delivered to the managed node before the delivery timeout expired. Delivery timeouts don't count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Execution Timed Out: Command execution started on the managed node, but the execution wasn't complete before the execution timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state.   Failed: The command wasn't successful on the managed node. For a plugin, this indicates that the result code wasn't zero. For a command invocation, this indicates that the result code for one or more plugins wasn't zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.   Cancelled: The command was terminated before it was completed. This is a terminal state.   Undeliverable: The command can't be delivered to the managed node. The managed node might not exist, or it might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit, and they don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.  
     */
    StatusDetails?: StatusDetails;
    /**
     * A numeric response code generated after running the plugin. 
     */
    ResponseCode?: ResponseCode;
    /**
     * The time the plugin started running. 
     */
    ResponseStartDateTime?: DateTime;
    /**
     * The time the plugin stopped running. Could stop prematurely if, for example, a cancel command was sent. 
     */
    ResponseFinishDateTime?: DateTime;
    /**
     * Output of the plugin execution.
     */
    Output?: CommandPluginOutput;
    /**
     * The URL for the complete text written by the plugin to stdout in Amazon S3. If the S3 bucket for the command wasn't specified, then this string is empty.
     */
    StandardOutputUrl?: Url;
    /**
     * The URL for the complete text written by the plugin to stderr. If execution isn't yet complete, then this string is empty.
     */
    StandardErrorUrl?: Url;
    /**
     * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Amazon Web Services Systems Manager automatically determines the S3 bucket region.
     */
    OutputS3Region?: S3Region;
    /**
     * The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command. For example, in the following response:  doc-example-bucket/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-02573cafcfEXAMPLE/awsrunShellScript   doc-example-bucket is the name of the S3 bucket;  ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix;  i-02573cafcfEXAMPLE is the managed node ID;  awsrunShellScript is the name of the plugin.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command. For example, in the following response:  doc-example-bucket/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-02573cafcfEXAMPLE/awsrunShellScript   doc-example-bucket is the name of the S3 bucket;  ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix;  i-02573cafcfEXAMPLE is the managed node ID;  awsrunShellScript is the name of the plugin.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
  }
  export type CommandPluginList = CommandPlugin[];
  export type CommandPluginName = string;
  export type CommandPluginOutput = string;
  export type CommandPluginStatus = "Pending"|"InProgress"|"Success"|"TimedOut"|"Cancelled"|"Failed"|string;
  export type CommandStatus = "Pending"|"InProgress"|"Success"|"Cancelled"|"Failed"|"TimedOut"|"Cancelling"|string;
  export type Comment = string;
  export type CompletedCount = number;
  export type ComplianceExecutionId = string;
  export interface ComplianceExecutionSummary {
    /**
     * The time the execution ran as a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
     */
    ExecutionTime: DateTime;
    /**
     * An ID created by the system when PutComplianceItems was called. For example, CommandID is a valid execution ID. You can use this ID in subsequent calls.
     */
    ExecutionId?: ComplianceExecutionId;
    /**
     * The type of execution. For example, Command is a valid execution type.
     */
    ExecutionType?: ComplianceExecutionType;
  }
  export type ComplianceExecutionType = string;
  export type ComplianceFilterValue = string;
  export interface ComplianceItem {
    /**
     * The compliance type. For example, Association (for a State Manager association), Patch, or Custom:string are all valid compliance types.
     */
    ComplianceType?: ComplianceTypeName;
    /**
     * The type of resource. ManagedInstance is currently the only supported resource type.
     */
    ResourceType?: ComplianceResourceType;
    /**
     * An ID for the resource. For a managed node, this is the node ID.
     */
    ResourceId?: ComplianceResourceId;
    /**
     * An ID for the compliance item. For example, if the compliance item is a Windows patch, the ID could be the number of the KB article; for example: KB4010320.
     */
    Id?: ComplianceItemId;
    /**
     * A title for the compliance item. For example, if the compliance item is a Windows patch, the title could be the title of the KB article for the patch; for example: Security Update for Active Directory Federation Services.
     */
    Title?: ComplianceItemTitle;
    /**
     * The status of the compliance item. An item is either COMPLIANT, NON_COMPLIANT, or an empty string (for Windows patches that aren't applicable).
     */
    Status?: ComplianceStatus;
    /**
     * The severity of the compliance status. Severity can be one of the following: Critical, High, Medium, Low, Informational, Unspecified.
     */
    Severity?: ComplianceSeverity;
    /**
     * A summary for the compliance item. The summary includes an execution ID, the execution type (for example, command), and the execution time.
     */
    ExecutionSummary?: ComplianceExecutionSummary;
    /**
     * A "Key": "Value" tag combination for the compliance item.
     */
    Details?: ComplianceItemDetails;
  }
  export type ComplianceItemContentHash = string;
  export type ComplianceItemDetails = {[key: string]: AttributeValue};
  export interface ComplianceItemEntry {
    /**
     * The compliance item ID. For example, if the compliance item is a Windows patch, the ID could be the number of the KB article.
     */
    Id?: ComplianceItemId;
    /**
     * The title of the compliance item. For example, if the compliance item is a Windows patch, the title could be the title of the KB article for the patch; for example: Security Update for Active Directory Federation Services. 
     */
    Title?: ComplianceItemTitle;
    /**
     * The severity of the compliance status. Severity can be one of the following: Critical, High, Medium, Low, Informational, Unspecified.
     */
    Severity: ComplianceSeverity;
    /**
     * The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.
     */
    Status: ComplianceStatus;
    /**
     * A "Key": "Value" tag combination for the compliance item.
     */
    Details?: ComplianceItemDetails;
  }
  export type ComplianceItemEntryList = ComplianceItemEntry[];
  export type ComplianceItemId = string;
  export type ComplianceItemList = ComplianceItem[];
  export type ComplianceItemTitle = string;
  export type ComplianceQueryOperatorType = "EQUAL"|"NOT_EQUAL"|"BEGIN_WITH"|"LESS_THAN"|"GREATER_THAN"|string;
  export type ComplianceResourceId = string;
  export type ComplianceResourceIdList = ComplianceResourceId[];
  export type ComplianceResourceType = string;
  export type ComplianceResourceTypeList = ComplianceResourceType[];
  export type ComplianceSeverity = "CRITICAL"|"HIGH"|"MEDIUM"|"LOW"|"INFORMATIONAL"|"UNSPECIFIED"|string;
  export type ComplianceStatus = "COMPLIANT"|"NON_COMPLIANT"|string;
  export interface ComplianceStringFilter {
    /**
     * The name of the filter.
     */
    Key?: ComplianceStringFilterKey;
    /**
     * The value for which to search.
     */
    Values?: ComplianceStringFilterValueList;
    /**
     * The type of comparison that should be performed for the value: Equal, NotEqual, BeginWith, LessThan, or GreaterThan.
     */
    Type?: ComplianceQueryOperatorType;
  }
  export type ComplianceStringFilterKey = string;
  export type ComplianceStringFilterList = ComplianceStringFilter[];
  export type ComplianceStringFilterValueList = ComplianceFilterValue[];
  export type ComplianceSummaryCount = number;
  export interface ComplianceSummaryItem {
    /**
     * The type of compliance item. For example, the compliance type can be Association, Patch, or Custom:string.
     */
    ComplianceType?: ComplianceTypeName;
    /**
     * A list of COMPLIANT items for the specified compliance type.
     */
    CompliantSummary?: CompliantSummary;
    /**
     * A list of NON_COMPLIANT items for the specified compliance type.
     */
    NonCompliantSummary?: NonCompliantSummary;
  }
  export type ComplianceSummaryItemList = ComplianceSummaryItem[];
  export type ComplianceTypeName = string;
  export type ComplianceUploadType = "COMPLETE"|"PARTIAL"|string;
  export interface CompliantSummary {
    /**
     * The total number of resources that are compliant.
     */
    CompliantCount?: ComplianceSummaryCount;
    /**
     * A summary of the compliance severity by compliance type.
     */
    SeveritySummary?: SeveritySummary;
  }
  export type ComputerName = string;
  export type ConnectionStatus = "Connected"|"NotConnected"|string;
  export type ContentLength = number;
  export interface CreateActivationRequest {
    /**
     * A user-defined description of the resource that you want to register with Systems Manager.   Don't enter personally identifiable information in this field. 
     */
    Description?: ActivationDescription;
    /**
     * The name of the registered, managed node as it will appear in the Amazon Web Services Systems Manager console or when you use the Amazon Web Services command line tools to list Systems Manager resources.  Don't enter personally identifiable information in this field. 
     */
    DefaultInstanceName?: DefaultInstanceName;
    /**
     * The name of the Identity and Access Management (IAM) role that you want to assign to the managed node. This IAM role must provide AssumeRole permissions for the Amazon Web Services Systems Manager service principal ssm.amazonaws.com. For more information, see Create an IAM service role for a hybrid environment in the Amazon Web Services Systems Manager User Guide.  You can't specify an IAM service-linked role for this parameter. You must create a unique role. 
     */
    IamRole: IamRole;
    /**
     * Specify the maximum number of managed nodes you want to register. The default value is 1.
     */
    RegistrationLimit?: RegistrationLimit;
    /**
     * The date by which this activation request should expire, in timestamp format, such as "2021-07-07T00:00:00". You can specify a date up to 30 days in advance. If you don't provide an expiration date, the activation code expires in 24 hours.
     */
    ExpirationDate?: ExpirationDate;
    /**
     * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an activation to identify which servers or virtual machines (VMs) in your on-premises environment you intend to activate. In this case, you could specify the following key-value pairs:    Key=OS,Value=Windows     Key=Environment,Value=Production     When you install SSM Agent on your on-premises servers and VMs, you specify an activation ID and code. When you specify the activation ID and code, tags assigned to the activation are automatically applied to the on-premises servers or VMs.  You can't add tags to or delete tags from an existing activation. You can tag your on-premises servers, edge devices, and VMs after they connect to Systems Manager for the first time and are assigned a managed node ID. This means they are listed in the Amazon Web Services Systems Manager console with an ID that is prefixed with "mi-". For information about how to add tags to your managed nodes, see AddTagsToResource. For information about how to remove tags from your managed nodes, see RemoveTagsFromResource.
     */
    Tags?: TagList;
    /**
     * Reserved for internal use.
     */
    RegistrationMetadata?: RegistrationMetadataList;
  }
  export interface CreateActivationResult {
    /**
     * The ID number generated by the system when it processed the activation. The activation ID functions like a user name.
     */
    ActivationId?: ActivationId;
    /**
     * The code the system generates when it processes the activation. The activation code functions like a password to validate the activation ID. 
     */
    ActivationCode?: ActivationCode;
  }
  export interface CreateAssociationBatchRequest {
    /**
     * One or more associations.
     */
    Entries: CreateAssociationBatchRequestEntries;
  }
  export type CreateAssociationBatchRequestEntries = CreateAssociationBatchRequestEntry[];
  export interface CreateAssociationBatchRequestEntry {
    /**
     * The name of the SSM document that contains the configuration information for the managed node. You can specify Command or Automation runbooks. You can specify Amazon Web Services-predefined documents, documents you created, or a document that is shared with you from another account. For SSM documents that are shared with you from other Amazon Web Services accounts, you must specify the complete SSM document ARN, in the following format:  arn:aws:ssm:region:account-id:document/document-name   For example:  arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document  For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, AWS-ApplyPatchBaseline or My-Document.
     */
    Name: DocumentARN;
    /**
     * The managed node ID.   InstanceId has been deprecated. To specify a managed node ID for an association, use the Targets parameter. Requests that include the parameter InstanceID with Systems Manager documents (SSM documents) that use schema version 2.0 or later will fail. In addition, if you use the parameter InstanceId, you can't use the parameters AssociationName, DocumentVersion, MaxErrors, MaxConcurrency, OutputLocation, or ScheduleExpression. To use these parameters, you must use the Targets parameter. 
     */
    InstanceId?: InstanceId;
    /**
     * A description of the parameters for a document. 
     */
    Parameters?: Parameters;
    /**
     * Specify the target for the association. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a capability of Amazon Web Services Systems Manager.
     */
    AutomationTargetParameterName?: AutomationTargetParameterName;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The managed nodes targeted by the request.
     */
    Targets?: Targets;
    /**
     * A cron expression that specifies a schedule when the association runs.
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * An S3 bucket where you want to store the results of this request.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * Specify a descriptive name for the association.
     */
    AssociationName?: AssociationName;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new managed node starts and attempts to run an association while Systems Manager is running MaxConcurrency associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level to assign to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
    /**
     * The mode for generating association compliance. You can specify AUTO or MANUAL. In AUTO mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is COMPLIANT. If the association execution doesn't run successfully, the association is NON-COMPLIANT.  In MANUAL mode, you must specify the AssociationId as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a capability of Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation. By default, all associations use AUTO mode.
     */
    SyncCompliance?: AssociationSyncCompliance;
    /**
     * By default, when you create a new associations, the system runs it immediately after it is created and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you create it. This parameter isn't supported for rate expressions.
     */
    ApplyOnlyAtCronInterval?: ApplyOnlyAtCronInterval;
    /**
     * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents your associations are gated under. The associations only run when that Change Calendar is open. For more information, see Amazon Web Services Systems Manager Change Calendar.
     */
    CalendarNames?: CalendarNameOrARNList;
    /**
     * Use this action to create an association in multiple Regions and multiple accounts.
     */
    TargetLocations?: TargetLocations;
    /**
     * Number of days to wait after the scheduled day to run an association.
     */
    ScheduleOffset?: ScheduleOffset;
    /**
     * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
     */
    TargetMaps?: TargetMaps;
    AlarmConfiguration?: AlarmConfiguration;
  }
  export interface CreateAssociationBatchResult {
    /**
     * Information about the associations that succeeded.
     */
    Successful?: AssociationDescriptionList;
    /**
     * Information about the associations that failed.
     */
    Failed?: FailedCreateAssociationList;
  }
  export interface CreateAssociationRequest {
    /**
     * The name of the SSM Command document or Automation runbook that contains the configuration information for the managed node. You can specify Amazon Web Services-predefined documents, documents you created, or a document that is shared with you from another account. For Systems Manager documents (SSM documents) that are shared with you from other Amazon Web Services accounts, you must specify the complete SSM document ARN, in the following format:  arn:partition:ssm:region:account-id:document/document-name   For example:  arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document  For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, AWS-ApplyPatchBaseline or My-Document.
     */
    Name: DocumentARN;
    /**
     * The document version you want to associate with the target(s). Can be a specific version or the default version.  State Manager doesn't support running associations that use a new version of a document if that document is shared from another account. State Manager always runs the default version of a document if shared from another account, even though the Systems Manager console shows that a new version was processed. If you want to run an association using a new version of a document shared form another account, you must set the document version to default. 
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The managed node ID.   InstanceId has been deprecated. To specify a managed node ID for an association, use the Targets parameter. Requests that include the parameter InstanceID with Systems Manager documents (SSM documents) that use schema version 2.0 or later will fail. In addition, if you use the parameter InstanceId, you can't use the parameters AssociationName, DocumentVersion, MaxErrors, MaxConcurrency, OutputLocation, or ScheduleExpression. To use these parameters, you must use the Targets parameter. 
     */
    InstanceId?: InstanceId;
    /**
     * The parameters for the runtime configuration of the document.
     */
    Parameters?: Parameters;
    /**
     * The targets for the association. You can target managed nodes by using tags, Amazon Web Services resource groups, all managed nodes in an Amazon Web Services account, or individual managed node IDs. You can target all managed nodes in an Amazon Web Services account by specifying the InstanceIds key with a value of *. For more information about choosing targets for an association, see Using targets and rate controls with State Manager associations in the Amazon Web Services Systems Manager User Guide.
     */
    Targets?: Targets;
    /**
     * A cron expression when the association will be applied to the target(s).
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * An Amazon Simple Storage Service (Amazon S3) bucket where you want to store the output details of the request.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * Specify a descriptive name for the association.
     */
    AssociationName?: AssociationName;
    /**
     * Choose the parameter that will define how your automation will branch out. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a capability of Amazon Web Services Systems Manager.
     */
    AutomationTargetParameterName?: AutomationTargetParameterName;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new managed node starts and attempts to run an association while Systems Manager is running MaxConcurrency associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level to assign to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
    /**
     * The mode for generating association compliance. You can specify AUTO or MANUAL. In AUTO mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is COMPLIANT. If the association execution doesn't run successfully, the association is NON-COMPLIANT. In MANUAL mode, you must specify the AssociationId as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager. It is managed by your direct call to the PutComplianceItems API operation. By default, all associations use AUTO mode.
     */
    SyncCompliance?: AssociationSyncCompliance;
    /**
     * By default, when you create a new association, the system runs it immediately after it is created and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you create it. This parameter isn't supported for rate expressions.
     */
    ApplyOnlyAtCronInterval?: ApplyOnlyAtCronInterval;
    /**
     * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents you want to gate your associations under. The associations only run when that change calendar is open. For more information, see Amazon Web Services Systems Manager Change Calendar.
     */
    CalendarNames?: CalendarNameOrARNList;
    /**
     * A location is a combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the association. Use this action to create an association in multiple Regions and multiple accounts.
     */
    TargetLocations?: TargetLocations;
    /**
     * Number of days to wait after the scheduled day to run an association. For example, if you specified a cron schedule of cron(0 0 ? * THU#2 *), you could specify an offset of 3 to run the association each Sunday after the second Thursday of the month. For more information about cron schedules for associations, see Reference: Cron and rate expressions for Systems Manager in the Amazon Web Services Systems Manager User Guide.   To use offsets, you must specify the ApplyOnlyAtCronInterval parameter. This option tells the system not to run an association immediately after you create it.  
     */
    ScheduleOffset?: ScheduleOffset;
    /**
     * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
     */
    TargetMaps?: TargetMaps;
    /**
     * Adds or overwrites one or more tags for a State Manager association. Tags are metadata that you can assign to your Amazon Web Services resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. 
     */
    Tags?: TagList;
    AlarmConfiguration?: AlarmConfiguration;
  }
  export interface CreateAssociationResult {
    /**
     * Information about the association.
     */
    AssociationDescription?: AssociationDescription;
  }
  export interface CreateDocumentRequest {
    /**
     * The content for the new SSM document in JSON or YAML format. We recommend storing the contents for your new document in an external JSON or YAML file and referencing the file in a command. For examples, see the following topics in the Amazon Web Services Systems Manager User Guide.    Create an SSM document (Amazon Web Services API)     Create an SSM document (Amazon Web Services CLI)     Create an SSM document (API)   
     */
    Content: DocumentContent;
    /**
     * A list of SSM documents required by a document. This parameter is used exclusively by AppConfig. When a user creates an AppConfig configuration in an SSM document, the user must also specify a required document for validation purposes. In this case, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document for validation purposes. For more information, see What is AppConfig? in the AppConfig User Guide.
     */
    Requires?: DocumentRequiresList;
    /**
     * A list of key-value pairs that describe attachments to a version of a document.
     */
    Attachments?: AttachmentsSourceList;
    /**
     * A name for the SSM document.  You can't use the following strings as document name prefixes. These are reserved by Amazon Web Services for use as document name prefixes:    aws     amazon     amzn    
     */
    Name: DocumentName;
    /**
     * An optional field where you can specify a friendly name for the SSM document. This value can differ for each version of the document. You can update this value at a later time using the UpdateDocument operation.
     */
    DisplayName?: DocumentDisplayName;
    /**
     * An optional field specifying the version of the artifact you are creating with the document. For example, Release12.1. This value is unique across all versions of a document, and can't be changed.
     */
    VersionName?: DocumentVersionName;
    /**
     * The type of document to create.  The DeploymentStrategy document type is an internal-use-only document type reserved for AppConfig. 
     */
    DocumentType?: DocumentType;
    /**
     * Specify the document format for the request. The document format can be JSON, YAML, or TEXT. JSON is the default format.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * Specify a target type to define the kinds of resources the document can run on. For example, to run a document on EC2 instances, specify the following value: /AWS::EC2::Instance. If you specify a value of '/' the document can run on all types of resources. If you don't specify a value, the document can't run on any resources. For a list of valid resource types, see Amazon Web Services resource and property types reference in the CloudFormation User Guide. 
     */
    TargetType?: TargetType;
    /**
     * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an SSM document to identify the types of targets or the environment where it will run. In this case, you could specify the following key-value pairs:    Key=OS,Value=Windows     Key=Environment,Value=Production     To add tags to an existing SSM document, use the AddTagsToResource operation. 
     */
    Tags?: TagList;
  }
  export interface CreateDocumentResult {
    /**
     * Information about the SSM document.
     */
    DocumentDescription?: DocumentDescription;
  }
  export interface CreateMaintenanceWindowRequest {
    /**
     * The name of the maintenance window.
     */
    Name: MaintenanceWindowName;
    /**
     * An optional description for the maintenance window. We recommend specifying a description to help you organize your maintenance windows. 
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become active. StartDate allows you to delay activation of the maintenance window until the specified future date.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become inactive. EndDate allows you to set a date and time in the future when the maintenance window will no longer run.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The schedule of the maintenance window in the form of a cron or rate expression.
     */
    Schedule: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The number of days to wait after the date and time specified by a cron expression before running the maintenance window. For example, the following cron expression schedules a maintenance window to run on the third Tuesday of every month at 11:30 PM.  cron(30 23 ? * TUE#3 *)  If the schedule offset is 2, the maintenance window won't run until two days later.
     */
    ScheduleOffset?: MaintenanceWindowOffset;
    /**
     * The duration of the maintenance window in hours.
     */
    Duration: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff: MaintenanceWindowCutoff;
    /**
     * Enables a maintenance window task to run on managed nodes, even if you haven't registered those nodes as targets. If enabled, then you must specify the unregistered managed nodes (by node ID) when you register a task with the maintenance window. If you don't enable this option, then you must specify previously-registered targets when you register a task with the maintenance window.
     */
    AllowUnassociatedTargets: MaintenanceWindowAllowUnassociatedTargets;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: ClientToken;
    /**
     * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in. In this case, you could specify the following key-value pairs:    Key=TaskType,Value=AgentUpdate     Key=OS,Value=Windows     Key=Environment,Value=Production     To add tags to an existing maintenance window, use the AddTagsToResource operation. 
     */
    Tags?: TagList;
  }
  export interface CreateMaintenanceWindowResult {
    /**
     * The ID of the created maintenance window.
     */
    WindowId?: MaintenanceWindowId;
  }
  export interface CreateOpsItemRequest {
    /**
     * Information about the OpsItem. 
     */
    Description: OpsItemDescription;
    /**
     * The type of OpsItem to create. Systems Manager supports the following types of OpsItems:    /aws/issue  This type of OpsItem is used for default OpsItems created by OpsCenter.     /aws/changerequest  This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change requests.     /aws/insights  This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate OpsItems.   
     */
    OpsItemType?: OpsItemType;
    /**
     * Operational data is custom data that provides useful reference details about the OpsItem. For example, you can specify log files, error strings, license keys, troubleshooting tips, or other relevant data. You enter operational data as key-value pairs. The key has a maximum length of 128 characters. The value has a maximum size of 20 KB.  Operational data keys can't begin with the following: amazon, aws, amzn, ssm, /amazon, /aws, /amzn, /ssm.  You can choose to make the data searchable by other users in the account or you can restrict search access. Searchable data means that all users with access to the OpsItem Overview page (as provided by the DescribeOpsItems API operation) can view and search on the specified data. Operational data that isn't searchable is only viewable by users who have access to the OpsItem (as provided by the GetOpsItem API operation). Use the /aws/resources key in OperationalData to specify a related resource in the request. Use the /aws/automations key in OperationalData to associate an Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see Creating OpsItems manually in the Amazon Web Services Systems Manager User Guide.
     */
    OperationalData?: OpsItemOperationalData;
    /**
     * The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this OpsItem is edited or changed.
     */
    Notifications?: OpsItemNotifications;
    /**
     * The importance of this OpsItem in relation to other OpsItems in the system.
     */
    Priority?: OpsItemPriority;
    /**
     * One or more OpsItems that share something in common with the current OpsItems. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
     */
    RelatedOpsItems?: RelatedOpsItems;
    /**
     * The origin of the OpsItem, such as Amazon EC2 or Systems Manager.  The source name can't contain the following strings: aws, amazon, and amzn.  
     */
    Source: OpsItemSource;
    /**
     * A short heading that describes the nature of the OpsItem and the impacted resource.
     */
    Title: OpsItemTitle;
    /**
     * Optional metadata that you assign to a resource. You can restrict access to OpsItems by using an inline IAM policy that specifies tags. For more information, see Getting started with OpsCenter in the Amazon Web Services Systems Manager User Guide. Tags use a key-value pair. For example:  Key=Department,Value=Finance   To add tags to a new OpsItem, a user must have IAM permissions for both the ssm:CreateOpsItems operation and the ssm:AddTagsToResource operation. To add tags to an existing OpsItem, use the AddTagsToResource operation. 
     */
    Tags?: TagList;
    /**
     * Specify a category to assign to an OpsItem. 
     */
    Category?: OpsItemCategory;
    /**
     * Specify a severity to assign to an OpsItem.
     */
    Severity?: OpsItemSeverity;
    /**
     * The time a runbook workflow started. Currently reported only for the OpsItem type /aws/changerequest.
     */
    ActualStartTime?: DateTime;
    /**
     * The time a runbook workflow ended. Currently reported only for the OpsItem type /aws/changerequest.
     */
    ActualEndTime?: DateTime;
    /**
     * The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type /aws/changerequest.
     */
    PlannedStartTime?: DateTime;
    /**
     * The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type /aws/changerequest.
     */
    PlannedEndTime?: DateTime;
    /**
     * The target Amazon Web Services account where you want to create an OpsItem. To make this call, your account must be configured to work with OpsItems across accounts. For more information, see Setting up OpsCenter to work with OpsItems across accounts in the Amazon Web Services Systems Manager User Guide.
     */
    AccountId?: OpsItemAccountId;
  }
  export interface CreateOpsItemResponse {
    /**
     * The ID of the OpsItem.
     */
    OpsItemId?: String;
    /**
     * The OpsItem Amazon Resource Name (ARN).
     */
    OpsItemArn?: OpsItemArn;
  }
  export interface CreateOpsMetadataRequest {
    /**
     * A resource ID for a new Application Manager application.
     */
    ResourceId: OpsMetadataResourceId;
    /**
     * Metadata for a new Application Manager application. 
     */
    Metadata?: MetadataMap;
    /**
     * Optional metadata that you assign to a resource. You can specify a maximum of five tags for an OpsMetadata object. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an OpsMetadata object to identify an environment or target Amazon Web Services Region. In this case, you could specify the following key-value pairs:    Key=Environment,Value=Production     Key=Region,Value=us-east-2   
     */
    Tags?: TagList;
  }
  export interface CreateOpsMetadataResult {
    /**
     * The Amazon Resource Name (ARN) of the OpsMetadata Object or blob created by the call.
     */
    OpsMetadataArn?: OpsMetadataArn;
  }
  export interface CreatePatchBaselineRequest {
    /**
     * Defines the operating system the patch baseline applies to. The default value is WINDOWS.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * The name of the patch baseline.
     */
    Name: BaselineName;
    /**
     * A set of global filters used to include patches in the baseline.
     */
    GlobalFilters?: PatchFilterGroup;
    /**
     * A set of rules used to include patches in the baseline.
     */
    ApprovalRules?: PatchRuleGroup;
    /**
     * A list of explicitly approved patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see About package name formats for approved and rejected patch lists in the Amazon Web Services Systems Manager User Guide.
     */
    ApprovedPatches?: PatchIdList;
    /**
     * Defines the compliance level for approved patches. When an approved patch is reported as missing, this value describes the severity of the compliance violation. The default value is UNSPECIFIED.
     */
    ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is false. Applies to Linux managed nodes only.
     */
    ApprovedPatchesEnableNonSecurity?: Boolean;
    /**
     * A list of explicitly rejected patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see About package name formats for approved and rejected patch lists in the Amazon Web Services Systems Manager User Guide.
     */
    RejectedPatches?: PatchIdList;
    /**
     * The action for Patch Manager to take on patches included in the RejectedPackages list.     ALLOW_AS_DEPENDENCY : A package in the Rejected patches list is installed only if it is a dependency of another package. It is considered compliant with the patch baseline, and its status is reported as InstalledOther. This is the default action if no option is specified.     BLOCK : Packages in the RejectedPatches list, and packages that include them as dependencies, aren't installed under any circumstances. If a package was installed before it was added to the Rejected patches list, it is considered non-compliant with the patch baseline, and its status is reported as InstalledRejected.  
     */
    RejectedPatchesAction?: PatchAction;
    /**
     * A description of the patch baseline.
     */
    Description?: BaselineDescription;
    /**
     * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
     */
    Sources?: PatchSourceList;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: ClientToken;
    /**
     * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a patch baseline to identify the severity level of patches it specifies and the operating system family it applies to. In this case, you could specify the following key-value pairs:    Key=PatchSeverity,Value=Critical     Key=OS,Value=Windows     To add tags to an existing patch baseline, use the AddTagsToResource operation. 
     */
    Tags?: TagList;
  }
  export interface CreatePatchBaselineResult {
    /**
     * The ID of the created patch baseline.
     */
    BaselineId?: BaselineId;
  }
  export interface CreateResourceDataSyncRequest {
    /**
     * A name for the configuration.
     */
    SyncName: ResourceDataSyncName;
    /**
     * Amazon S3 configuration details for the sync. This parameter is required if the SyncType value is SyncToDestination.
     */
    S3Destination?: ResourceDataSyncS3Destination;
    /**
     * Specify SyncToDestination to create a resource data sync that synchronizes data to an S3 bucket for Inventory. If you specify SyncToDestination, you must provide a value for S3Destination. Specify SyncFromSource to synchronize data from a single account and multiple Regions, or multiple Amazon Web Services accounts and Amazon Web Services Regions, as listed in Organizations for Explorer. If you specify SyncFromSource, you must provide a value for SyncSource. The default value is SyncToDestination.
     */
    SyncType?: ResourceDataSyncType;
    /**
     * Specify information about the data sources to synchronize. This parameter is required if the SyncType value is SyncFromSource.
     */
    SyncSource?: ResourceDataSyncSource;
  }
  export interface CreateResourceDataSyncResult {
  }
  export type CreatedDate = Date;
  export type DateTime = Date;
  export type DefaultBaseline = boolean;
  export type DefaultInstanceName = string;
  export interface DeleteActivationRequest {
    /**
     * The ID of the activation that you want to delete.
     */
    ActivationId: ActivationId;
  }
  export interface DeleteActivationResult {
  }
  export interface DeleteAssociationRequest {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The managed node ID.   InstanceId has been deprecated. To specify a managed node ID for an association, use the Targets parameter. Requests that include the parameter InstanceID with Systems Manager documents (SSM documents) that use schema version 2.0 or later will fail. In addition, if you use the parameter InstanceId, you can't use the parameters AssociationName, DocumentVersion, MaxErrors, MaxConcurrency, OutputLocation, or ScheduleExpression. To use these parameters, you must use the Targets parameter. 
     */
    InstanceId?: InstanceId;
    /**
     * The association ID that you want to delete.
     */
    AssociationId?: AssociationId;
  }
  export interface DeleteAssociationResult {
  }
  export interface DeleteDocumentRequest {
    /**
     * The name of the document.
     */
    Name: DocumentName;
    /**
     * The version of the document that you want to delete. If not provided, all versions of the document are deleted.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The version name of the document that you want to delete. If not provided, all versions of the document are deleted.
     */
    VersionName?: DocumentVersionName;
    /**
     * Some SSM document types require that you specify a Force flag before you can delete the document. For example, you must specify a Force flag to delete a document of type ApplicationConfigurationSchema. You can restrict access to the Force flag in an Identity and Access Management (IAM) policy.
     */
    Force?: Boolean;
  }
  export interface DeleteDocumentResult {
  }
  export interface DeleteInventoryRequest {
    /**
     * The name of the custom inventory type for which you want to delete either all previously collected data or the inventory type itself. 
     */
    TypeName: InventoryItemTypeName;
    /**
     * Use the SchemaDeleteOption to delete a custom inventory type (schema). If you don't choose this option, the system only deletes existing inventory data associated with the custom inventory type. Choose one of the following options: DisableSchema: If you choose this option, the system ignores all inventory data for the specified version, and any earlier versions. To enable this schema again, you must call the PutInventory operation for a version greater than the disabled version. DeleteSchema: This option deletes the specified custom type from the Inventory service. You can recreate the schema later, if you want.
     */
    SchemaDeleteOption?: InventorySchemaDeleteOption;
    /**
     * Use this option to view a summary of the deletion request without deleting any data or the data type. This option is useful when you only want to understand what will be deleted. Once you validate that the data to be deleted is what you intend to delete, you can run the same command without specifying the DryRun option.
     */
    DryRun?: DryRun;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: UUID;
  }
  export interface DeleteInventoryResult {
    /**
     * Every DeleteInventory operation is assigned a unique ID. This option returns a unique ID. You can use this ID to query the status of a delete operation. This option is useful for ensuring that a delete operation has completed before you begin other operations. 
     */
    DeletionId?: UUID;
    /**
     * The name of the inventory data type specified in the request.
     */
    TypeName?: InventoryItemTypeName;
    /**
     * A summary of the delete operation. For more information about this summary, see Deleting custom inventory in the Amazon Web Services Systems Manager User Guide.
     */
    DeletionSummary?: InventoryDeletionSummary;
  }
  export interface DeleteMaintenanceWindowRequest {
    /**
     * The ID of the maintenance window to delete.
     */
    WindowId: MaintenanceWindowId;
  }
  export interface DeleteMaintenanceWindowResult {
    /**
     * The ID of the deleted maintenance window.
     */
    WindowId?: MaintenanceWindowId;
  }
  export interface DeleteOpsMetadataRequest {
    /**
     * The Amazon Resource Name (ARN) of an OpsMetadata Object to delete.
     */
    OpsMetadataArn: OpsMetadataArn;
  }
  export interface DeleteOpsMetadataResult {
  }
  export interface DeleteParameterRequest {
    /**
     * The name of the parameter to delete.
     */
    Name: PSParameterName;
  }
  export interface DeleteParameterResult {
  }
  export interface DeleteParametersRequest {
    /**
     * The names of the parameters to delete. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.
     */
    Names: ParameterNameList;
  }
  export interface DeleteParametersResult {
    /**
     * The names of the deleted parameters.
     */
    DeletedParameters?: ParameterNameList;
    /**
     * The names of parameters that weren't deleted because the parameters aren't valid.
     */
    InvalidParameters?: ParameterNameList;
  }
  export interface DeletePatchBaselineRequest {
    /**
     * The ID of the patch baseline to delete.
     */
    BaselineId: BaselineId;
  }
  export interface DeletePatchBaselineResult {
    /**
     * The ID of the deleted patch baseline.
     */
    BaselineId?: BaselineId;
  }
  export interface DeleteResourceDataSyncRequest {
    /**
     * The name of the configuration to delete.
     */
    SyncName: ResourceDataSyncName;
    /**
     * Specify the type of resource data sync to delete.
     */
    SyncType?: ResourceDataSyncType;
  }
  export interface DeleteResourceDataSyncResult {
  }
  export interface DeleteResourcePolicyRequest {
    /**
     * Amazon Resource Name (ARN) of the resource to which the policies are attached.
     */
    ResourceArn: ResourceArnString;
    /**
     * The policy ID.
     */
    PolicyId: PolicyId;
    /**
     * ID of the current policy version. The hash helps to prevent multiple calls from attempting to overwrite a policy.
     */
    PolicyHash: PolicyHash;
  }
  export interface DeleteResourcePolicyResponse {
  }
  export type DeliveryTimedOutCount = number;
  export interface DeregisterManagedInstanceRequest {
    /**
     * The ID assigned to the managed node when you registered it using the activation process. 
     */
    InstanceId: ManagedInstanceId;
  }
  export interface DeregisterManagedInstanceResult {
  }
  export interface DeregisterPatchBaselineForPatchGroupRequest {
    /**
     * The ID of the patch baseline to deregister the patch group from.
     */
    BaselineId: BaselineId;
    /**
     * The name of the patch group that should be deregistered from the patch baseline.
     */
    PatchGroup: PatchGroup;
  }
  export interface DeregisterPatchBaselineForPatchGroupResult {
    /**
     * The ID of the patch baseline the patch group was deregistered from.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch group deregistered from the patch baseline.
     */
    PatchGroup?: PatchGroup;
  }
  export interface DeregisterTargetFromMaintenanceWindowRequest {
    /**
     * The ID of the maintenance window the target should be removed from.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The ID of the target definition to remove.
     */
    WindowTargetId: MaintenanceWindowTargetId;
    /**
     * The system checks if the target is being referenced by a task. If the target is being referenced, the system returns an error and doesn't deregister the target from the maintenance window.
     */
    Safe?: Boolean;
  }
  export interface DeregisterTargetFromMaintenanceWindowResult {
    /**
     * The ID of the maintenance window the target was removed from.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The ID of the removed target definition.
     */
    WindowTargetId?: MaintenanceWindowTargetId;
  }
  export interface DeregisterTaskFromMaintenanceWindowRequest {
    /**
     * The ID of the maintenance window the task should be removed from.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The ID of the task to remove from the maintenance window.
     */
    WindowTaskId: MaintenanceWindowTaskId;
  }
  export interface DeregisterTaskFromMaintenanceWindowResult {
    /**
     * The ID of the maintenance window the task was removed from.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The ID of the task removed from the maintenance window.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
  }
  export interface DescribeActivationsFilter {
    /**
     * The name of the filter.
     */
    FilterKey?: DescribeActivationsFilterKeys;
    /**
     * The filter values.
     */
    FilterValues?: StringList;
  }
  export type DescribeActivationsFilterKeys = "ActivationIds"|"DefaultInstanceName"|"IamRole"|string;
  export type DescribeActivationsFilterList = DescribeActivationsFilter[];
  export interface DescribeActivationsRequest {
    /**
     * A filter to view information about your activations.
     */
    Filters?: DescribeActivationsFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeActivationsResult {
    /**
     * A list of activations for your Amazon Web Services account.
     */
    ActivationList?: ActivationList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationExecutionTargetsRequest {
    /**
     * The association ID that includes the execution for which you want to view details.
     */
    AssociationId: AssociationId;
    /**
     * The execution ID for which you want to view details.
     */
    ExecutionId: AssociationExecutionId;
    /**
     * Filters for the request. You can specify the following filters and values. Status (EQUAL) ResourceId (EQUAL) ResourceType (EQUAL)
     */
    Filters?: AssociationExecutionTargetsFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationExecutionTargetsResult {
    /**
     * Information about the execution.
     */
    AssociationExecutionTargets?: AssociationExecutionTargetsList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationExecutionsRequest {
    /**
     * The association ID for which you want to view execution history details.
     */
    AssociationId: AssociationId;
    /**
     * Filters for the request. You can specify the following filters and values. ExecutionId (EQUAL) Status (EQUAL) CreatedTime (EQUAL, GREATER_THAN, LESS_THAN)
     */
    Filters?: AssociationExecutionFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationExecutionsResult {
    /**
     * A list of the executions for the specified association ID.
     */
    AssociationExecutions?: AssociationExecutionsList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationRequest {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The managed node ID.
     */
    InstanceId?: InstanceId;
    /**
     * The association ID for which you want information.
     */
    AssociationId?: AssociationId;
    /**
     * Specify the association version to retrieve. To view the latest version, either specify $LATEST for this parameter, or omit this parameter. To view a list of all associations for a managed node, use ListAssociations. To get a list of versions for a specific association, use ListAssociationVersions. 
     */
    AssociationVersion?: AssociationVersion;
  }
  export interface DescribeAssociationResult {
    /**
     * Information about the association.
     */
    AssociationDescription?: AssociationDescription;
  }
  export interface DescribeAutomationExecutionsRequest {
    /**
     * Filters used to limit the scope of executions that are requested.
     */
    Filters?: AutomationExecutionFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeAutomationExecutionsResult {
    /**
     * The list of details about each automation execution which has occurred which matches the filter specification, if any.
     */
    AutomationExecutionMetadataList?: AutomationExecutionMetadataList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAutomationStepExecutionsRequest {
    /**
     * The Automation execution ID for which you want step execution descriptions.
     */
    AutomationExecutionId: AutomationExecutionId;
    /**
     * One or more filters to limit the number of step executions returned by the request.
     */
    Filters?: StepExecutionFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * Indicates whether to list step executions in reverse order by start time. The default value is 'false'.
     */
    ReverseOrder?: Boolean;
  }
  export interface DescribeAutomationStepExecutionsResult {
    /**
     * A list of details about the current state of all steps that make up an execution.
     */
    StepExecutions?: StepExecutionList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAvailablePatchesRequest {
    /**
     * Each element in the array is a structure containing a key-value pair.  Windows Server  Supported keys for Windows Server managed node patches include the following:     PATCH_SET   Sample values: OS | APPLICATION      PRODUCT   Sample values: WindowsServer2012 | Office 2010 | MicrosoftDefenderAntivirus      PRODUCT_FAMILY   Sample values: Windows | Office      MSRC_SEVERITY   Sample values: ServicePacks | Important | Moderate      CLASSIFICATION   Sample values: ServicePacks | SecurityUpdates | DefinitionUpdates      PATCH_ID   Sample values: KB123456 | KB4516046     Linux   When specifying filters for Linux patches, you must specify a key-pair for PRODUCT. For example, using the Command Line Interface (CLI), the following command fails:  aws ssm describe-available-patches --filters Key=CVE_ID,Values=CVE-2018-3615  However, the following command succeeds:  aws ssm describe-available-patches --filters Key=PRODUCT,Values=AmazonLinux2018.03 Key=CVE_ID,Values=CVE-2018-3615   Supported keys for Linux managed node patches include the following:     PRODUCT   Sample values: AmazonLinux2018.03 | AmazonLinux2.0      NAME   Sample values: kernel-headers | samba-python | php      SEVERITY   Sample values: Critical | Important | Medium | Low      EPOCH   Sample values: 0 | 1      VERSION   Sample values: 78.6.1 | 4.10.16      RELEASE   Sample values: 9.56.amzn1 | 1.amzn2      ARCH   Sample values: i686 | x86_64      REPOSITORY   Sample values: Core | Updates      ADVISORY_ID   Sample values: ALAS-2018-1058 | ALAS2-2021-1594      CVE_ID   Sample values: CVE-2018-3615 | CVE-2020-1472      BUGZILLA_ID   Sample values: 1463241   
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The maximum number of patches to return (per page).
     */
    MaxResults?: PatchBaselineMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeAvailablePatchesResult {
    /**
     * An array of patches. Each entry in the array is a patch structure.
     */
    Patches?: PatchList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeDocumentPermissionRequest {
    /**
     * The name of the document for which you are the owner.
     */
    Name: DocumentName;
    /**
     * The permission type for the document. The permission type can be Share.
     */
    PermissionType: DocumentPermissionType;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: DocumentPermissionMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeDocumentPermissionResponse {
    /**
     * The account IDs that have permission to use this document. The ID can be either an Amazon Web Services account or All.
     */
    AccountIds?: AccountIdList;
    /**
     * A list of Amazon Web Services accounts where the current document is shared and the version shared with each account.
     */
    AccountSharingInfoList?: AccountSharingInfoList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeDocumentRequest {
    /**
     * The name of the SSM document.
     */
    Name: DocumentARN;
    /**
     * The document version for which you want information. Can be a specific version or the default version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * An optional field specifying the version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and can't be changed.
     */
    VersionName?: DocumentVersionName;
  }
  export interface DescribeDocumentResult {
    /**
     * Information about the SSM document.
     */
    Document?: DocumentDescription;
  }
  export interface DescribeEffectiveInstanceAssociationsRequest {
    /**
     * The managed node ID for which you want to view all associations.
     */
    InstanceId: InstanceId;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: EffectiveInstanceAssociationMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeEffectiveInstanceAssociationsResult {
    /**
     * The associations for the requested managed node.
     */
    Associations?: InstanceAssociationList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeEffectivePatchesForPatchBaselineRequest {
    /**
     * The ID of the patch baseline to retrieve the effective patches for.
     */
    BaselineId: BaselineId;
    /**
     * The maximum number of patches to return (per page).
     */
    MaxResults?: PatchBaselineMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeEffectivePatchesForPatchBaselineResult {
    /**
     * An array of patches and patch status.
     */
    EffectivePatches?: EffectivePatchList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstanceAssociationsStatusRequest {
    /**
     * The managed node IDs for which you want association status information.
     */
    InstanceId: InstanceId;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstanceAssociationsStatusResult {
    /**
     * Status information about the association.
     */
    InstanceAssociationStatusInfos?: InstanceAssociationStatusInfos;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstanceInformationRequest {
    /**
     * This is a legacy method. We recommend that you don't use this method. Instead, use the Filters data type. Filters enables you to return node information by filtering based on tags applied to managed nodes.  Attempting to use InstanceInformationFilterList and Filters leads to an exception error.  
     */
    InstanceInformationFilterList?: InstanceInformationFilterList;
    /**
     * One or more filters. Use a filter to return a more specific list of managed nodes. You can filter based on tags applied to your managed nodes. Use this Filters data type instead of InstanceInformationFilterList, which is deprecated.
     */
    Filters?: InstanceInformationStringFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results. 
     */
    MaxResults?: MaxResultsEC2Compatible;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstanceInformationResult {
    /**
     * The managed node information list.
     */
    InstanceInformationList?: InstanceInformationList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstancePatchStatesForPatchGroupRequest {
    /**
     * The name of the patch group for which the patch state information should be retrieved.
     */
    PatchGroup: PatchGroup;
    /**
     * Each entry in the array is a structure containing:   Key (string between 1 and 200 characters)   Values (array containing a single string)   Type (string "Equal", "NotEqual", "LessThan", "GreaterThan")  
     */
    Filters?: InstancePatchStateFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of patches to return (per page).
     */
    MaxResults?: PatchComplianceMaxResults;
  }
  export interface DescribeInstancePatchStatesForPatchGroupResult {
    /**
     * The high-level patch state for the requested managed nodes. 
     */
    InstancePatchStates?: InstancePatchStatesList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstancePatchStatesRequest {
    /**
     * The ID of the managed node for which patch state information should be retrieved.
     */
    InstanceIds: InstanceIdList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of managed nodes to return (per page).
     */
    MaxResults?: PatchComplianceMaxResults;
  }
  export interface DescribeInstancePatchStatesResult {
    /**
     * The high-level patch state for the requested managed nodes.
     */
    InstancePatchStates?: InstancePatchStateList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstancePatchesRequest {
    /**
     * The ID of the managed node whose patch state information should be retrieved.
     */
    InstanceId: InstanceId;
    /**
     * Each element in the array is a structure containing a key-value pair. Supported keys for DescribeInstancePatchesinclude the following:     Classification   Sample values: Security | SecurityUpdates      KBId   Sample values: KB4480056 | java-1.7.0-openjdk.x86_64      Severity   Sample values: Important | Medium | Low      State   Sample values: Installed | InstalledOther | InstalledPendingReboot   
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of patches to return (per page).
     */
    MaxResults?: PatchComplianceMaxResults;
  }
  export interface DescribeInstancePatchesResult {
    /**
     * Each entry in the array is a structure containing:   Title (string)   KBId (string)   Classification (string)   Severity (string)   State (string, such as "INSTALLED" or "FAILED")   InstalledTime (DateTime)   InstalledBy (string)  
     */
    Patches?: PatchComplianceDataList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInventoryDeletionsRequest {
    /**
     * Specify the delete inventory ID for which you want information. This ID was returned by the DeleteInventory operation.
     */
    DeletionId?: UUID;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeInventoryDeletionsResult {
    /**
     * A list of status items for deleted inventory.
     */
    InventoryDeletions?: InventoryDeletionsList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
    /**
     * The ID of the maintenance window execution the task is part of.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task in the maintenance window task that should be retrieved.
     */
    TaskId: MaintenanceWindowExecutionTaskId;
    /**
     * Optional filters used to scope down the returned task invocations. The supported filter key is STATUS with the corresponding values PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, and CANCELLED.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
    /**
     * Information about the task invocation results per invocation.
     */
    WindowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionTasksRequest {
    /**
     * The ID of the maintenance window execution whose task executions should be retrieved.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
    /**
     * Optional filters used to scope down the returned tasks. The supported filter key is STATUS with the corresponding values PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, and CANCELLED.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionTasksResult {
    /**
     * Information about the task executions.
     */
    WindowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionsRequest {
    /**
     * The ID of the maintenance window whose executions should be retrieved.
     */
    WindowId: MaintenanceWindowId;
    /**
     * Each entry in the array is a structure containing:   Key. A string between 1 and 128 characters. Supported keys include ExecutedBefore and ExecutedAfter.   Values. An array of strings, each between 1 and 256 characters. Supported values are date/time strings in a valid ISO 8601 date/time format, such as 2021-11-04T05:00:00Z.  
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionsResult {
    /**
     * Information about the maintenance window executions.
     */
    WindowExecutions?: MaintenanceWindowExecutionList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowScheduleRequest {
    /**
     * The ID of the maintenance window to retrieve information about.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The managed node ID or key-value pair to retrieve information about.
     */
    Targets?: Targets;
    /**
     * The type of resource you want to retrieve information about. For example, INSTANCE.
     */
    ResourceType?: MaintenanceWindowResourceType;
    /**
     * Filters used to limit the range of results. For example, you can limit maintenance window executions to only those scheduled before or after a certain date and time.
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowSearchMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowScheduleResult {
    /**
     * Information about maintenance window executions scheduled for the specified time range.
     */
    ScheduledWindowExecutions?: ScheduledWindowExecutionList;
    /**
     * The token for the next set of items to return. (You use this token in the next call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowTargetsRequest {
    /**
     * The ID of the maintenance window whose targets should be retrieved.
     */
    WindowId: MaintenanceWindowId;
    /**
     * Optional filters that can be used to narrow down the scope of the returned window targets. The supported filter keys are Type, WindowTargetId, and OwnerInformation.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowTargetsResult {
    /**
     * Information about the targets in the maintenance window.
     */
    Targets?: MaintenanceWindowTargetList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowTasksRequest {
    /**
     * The ID of the maintenance window whose tasks should be retrieved.
     */
    WindowId: MaintenanceWindowId;
    /**
     * Optional filters used to narrow down the scope of the returned tasks. The supported filter keys are WindowTaskId, TaskArn, Priority, and TaskType.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowTasksResult {
    /**
     * Information about the tasks in the maintenance window.
     */
    Tasks?: MaintenanceWindowTaskList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowsForTargetRequest {
    /**
     * The managed node ID or key-value pair to retrieve information about.
     */
    Targets: Targets;
    /**
     * The type of resource you want to retrieve information about. For example, INSTANCE.
     */
    ResourceType: MaintenanceWindowResourceType;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowSearchMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowsForTargetResult {
    /**
     * Information about the maintenance window targets and tasks a managed node is associated with.
     */
    WindowIdentities?: MaintenanceWindowsForTargetList;
    /**
     * The token for the next set of items to return. (You use this token in the next call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowsRequest {
    /**
     * Optional filters used to narrow down the scope of the returned maintenance windows. Supported filter keys are Name and Enabled. For example, Name=MyMaintenanceWindow and Enabled=True.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowsResult {
    /**
     * Information about the maintenance windows.
     */
    WindowIdentities?: MaintenanceWindowIdentityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeOpsItemsRequest {
    /**
     * One or more filters to limit the response.   Key: CreatedTime Operations: GreaterThan, LessThan   Key: LastModifiedBy Operations: Contains, Equals   Key: LastModifiedTime Operations: GreaterThan, LessThan   Key: Priority Operations: Equals   Key: Source Operations: Contains, Equals   Key: Status Operations: Equals   Key: Title* Operations: Equals,Contains   Key: OperationalData** Operations: Equals   Key: OperationalDataKey Operations: Equals   Key: OperationalDataValue Operations: Equals, Contains   Key: OpsItemId Operations: Equals   Key: ResourceId Operations: Contains   Key: AutomationId Operations: Equals   *The Equals operator for Title matches the first 100 characters. If you specify more than 100 characters, they system returns an error that the filter value exceeds the length limit. **If you filter the response by using the OperationalData operator, specify a key-value pair by using the following JSON format: {"key":"key_name","value":"a_value"}
     */
    OpsItemFilters?: OpsItemFilters;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: OpsItemMaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results.
     */
    NextToken?: String;
  }
  export interface DescribeOpsItemsResponse {
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: String;
    /**
     * A list of OpsItems.
     */
    OpsItemSummaries?: OpsItemSummaries;
  }
  export interface DescribeParametersRequest {
    /**
     * This data type is deprecated. Instead, use ParameterFilters.
     */
    Filters?: ParametersFilterList;
    /**
     * Filters to limit the request results.
     */
    ParameterFilters?: ParameterStringFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeParametersResult {
    /**
     * Parameters returned by the request.
     */
    Parameters?: ParameterMetadataList;
    /**
     * The token to use when requesting the next set of items.
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchBaselinesRequest {
    /**
     * Each element in the array is a structure containing a key-value pair. Supported keys for DescribePatchBaselines include the following:     NAME_PREFIX   Sample values: AWS- | My-      OWNER   Sample values: AWS | Self      OPERATING_SYSTEM   Sample values: AMAZON_LINUX | SUSE | WINDOWS   
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The maximum number of patch baselines to return (per page).
     */
    MaxResults?: PatchBaselineMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchBaselinesResult {
    /**
     * An array of PatchBaselineIdentity elements.
     */
    BaselineIdentities?: PatchBaselineIdentityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchGroupStateRequest {
    /**
     * The name of the patch group whose patch snapshot should be retrieved.
     */
    PatchGroup: PatchGroup;
  }
  export interface DescribePatchGroupStateResult {
    /**
     * The number of managed nodes in the patch group.
     */
    Instances?: Integer;
    /**
     * The number of managed nodes with installed patches.
     */
    InstancesWithInstalledPatches?: Integer;
    /**
     * The number of managed nodes with patches installed that aren't defined in the patch baseline.
     */
    InstancesWithInstalledOtherPatches?: Integer;
    /**
     * The number of managed nodes with patches installed by Patch Manager that haven't been rebooted after the patch installation. The status of these managed nodes is NON_COMPLIANT.
     */
    InstancesWithInstalledPendingRebootPatches?: InstancesCount;
    /**
     * The number of managed nodes with patches installed that are specified in a RejectedPatches list. Patches with a status of INSTALLED_REJECTED were typically installed before they were added to a RejectedPatches list.  If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of InstancesWithInstalledRejectedPatches will always be 0 (zero). 
     */
    InstancesWithInstalledRejectedPatches?: InstancesCount;
    /**
     * The number of managed nodes with missing patches from the patch baseline.
     */
    InstancesWithMissingPatches?: Integer;
    /**
     * The number of managed nodes with patches from the patch baseline that failed to install.
     */
    InstancesWithFailedPatches?: Integer;
    /**
     * The number of managed nodes with patches that aren't applicable.
     */
    InstancesWithNotApplicablePatches?: Integer;
    /**
     * The number of managed nodes with NotApplicable patches beyond the supported limit, which aren't reported by name to Inventory. Inventory is a capability of Amazon Web Services Systems Manager.
     */
    InstancesWithUnreportedNotApplicablePatches?: Integer;
    /**
     * The number of managed nodes where patches that are specified as Critical for compliance reporting in the patch baseline aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is NON_COMPLIANT.
     */
    InstancesWithCriticalNonCompliantPatches?: InstancesCount;
    /**
     * The number of managed nodes where patches that are specified as Security in a patch advisory aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is NON_COMPLIANT.
     */
    InstancesWithSecurityNonCompliantPatches?: InstancesCount;
    /**
     * The number of managed nodes with patches installed that are specified as other than Critical or Security but aren't compliant with the patch baseline. The status of these managed nodes is NON_COMPLIANT.
     */
    InstancesWithOtherNonCompliantPatches?: InstancesCount;
  }
  export interface DescribePatchGroupsRequest {
    /**
     * The maximum number of patch groups to return (per page).
     */
    MaxResults?: PatchBaselineMaxResults;
    /**
     * Each element in the array is a structure containing a key-value pair. Supported keys for DescribePatchGroups include the following:     NAME_PREFIX   Sample values: AWS- | My-.     OPERATING_SYSTEM   Sample values: AMAZON_LINUX | SUSE | WINDOWS   
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchGroupsResult {
    /**
     * Each entry in the array contains:    PatchGroup: string (between 1 and 256 characters. Regex: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$)     PatchBaselineIdentity: A PatchBaselineIdentity element.  
     */
    Mappings?: PatchGroupPatchBaselineMappingList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchPropertiesRequest {
    /**
     * The operating system type for which to list patches.
     */
    OperatingSystem: OperatingSystem;
    /**
     * The patch property for which you want to view patch details. 
     */
    Property: PatchProperty;
    /**
     * Indicates whether to list patches for the Windows operating system or for applications released by Microsoft. Not applicable for the Linux or macOS operating systems.
     */
    PatchSet?: PatchSet;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchPropertiesResult {
    /**
     * A list of the properties for patches matching the filter request parameters.
     */
    Properties?: PatchPropertiesList;
    /**
     * The token for the next set of items to return. (You use this token in the next call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeSessionsRequest {
    /**
     * The session status to retrieve a list of sessions for. For example, "Active".
     */
    State: SessionState;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: SessionMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * One or more filters to limit the type of sessions returned by the request.
     */
    Filters?: SessionFilterList;
  }
  export interface DescribeSessionsResponse {
    /**
     * A list of sessions meeting the request parameters.
     */
    Sessions?: SessionList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export type DescriptionInDocument = string;
  export interface DisassociateOpsItemRelatedItemRequest {
    /**
     * The ID of the OpsItem for which you want to delete an association between the OpsItem and a related item.
     */
    OpsItemId: OpsItemId;
    /**
     * The ID of the association for which you want to delete an association between the OpsItem and a related item.
     */
    AssociationId: OpsItemRelatedItemAssociationId;
  }
  export interface DisassociateOpsItemRelatedItemResponse {
  }
  export type DocumentARN = string;
  export type DocumentAuthor = string;
  export type DocumentContent = string;
  export interface DocumentDefaultVersionDescription {
    /**
     * The name of the document.
     */
    Name?: DocumentName;
    /**
     * The default version of the document.
     */
    DefaultVersion?: DocumentVersion;
    /**
     * The default version of the artifact associated with the document.
     */
    DefaultVersionName?: DocumentVersionName;
  }
  export interface DocumentDescription {
    /**
     * The SHA1 hash of the document, which you can use for verification.
     */
    Sha1?: DocumentSha1;
    /**
     * The Sha256 or Sha1 hash created by the system when the document was created.   Sha1 hashes have been deprecated. 
     */
    Hash?: DocumentHash;
    /**
     * The hash type of the document. Valid values include Sha256 or Sha1.  Sha1 hashes have been deprecated. 
     */
    HashType?: DocumentHashType;
    /**
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The friendly name of the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument.
     */
    DisplayName?: DocumentDisplayName;
    /**
     * The version of the artifact associated with the document.
     */
    VersionName?: DocumentVersionName;
    /**
     * The Amazon Web Services user account that created the document.
     */
    Owner?: DocumentOwner;
    /**
     * The date when the document was created.
     */
    CreatedDate?: DateTime;
    /**
     * The status of the SSM document.
     */
    Status?: DocumentStatus;
    /**
     * A message returned by Amazon Web Services Systems Manager that explains the Status value. For example, a Failed status might be explained by the StatusInformation message, "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."
     */
    StatusInformation?: DocumentStatusInformation;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * A description of the document. 
     */
    Description?: DescriptionInDocument;
    /**
     * A description of the parameters for a document.
     */
    Parameters?: DocumentParameterList;
    /**
     * The list of operating system (OS) platforms compatible with this SSM document. 
     */
    PlatformTypes?: PlatformTypeList;
    /**
     * The type of document.
     */
    DocumentType?: DocumentType;
    /**
     * The schema version.
     */
    SchemaVersion?: DocumentSchemaVersion;
    /**
     * The latest version of the document.
     */
    LatestVersion?: DocumentVersion;
    /**
     * The default version.
     */
    DefaultVersion?: DocumentVersion;
    /**
     * The document format, either JSON or YAML.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see Amazon Web Services resource and property types reference in the CloudFormation User Guide. 
     */
    TargetType?: TargetType;
    /**
     * The tags, or metadata, that have been applied to the document.
     */
    Tags?: TagList;
    /**
     * Details about the document attachments, including names, locations, sizes, and so on.
     */
    AttachmentsInformation?: AttachmentInformationList;
    /**
     * A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.
     */
    Requires?: DocumentRequiresList;
    /**
     * The user in your organization who created the document.
     */
    Author?: DocumentAuthor;
    /**
     * Details about the review of a document.
     */
    ReviewInformation?: ReviewInformationList;
    /**
     * The version of the document currently approved for use in the organization.
     */
    ApprovedVersion?: DocumentVersion;
    /**
     * The version of the document that is currently under review.
     */
    PendingReviewVersion?: DocumentVersion;
    /**
     * The current status of the review.
     */
    ReviewStatus?: ReviewStatus;
    /**
     * The classification of a document to help you identify and categorize its use.
     */
    Category?: CategoryList;
    /**
     * The value that identifies a document's category.
     */
    CategoryEnum?: CategoryEnumList;
  }
  export type DocumentDisplayName = string;
  export interface DocumentFilter {
    /**
     * The name of the filter.
     */
    key: DocumentFilterKey;
    /**
     * The value of the filter.
     */
    value: DocumentFilterValue;
  }
  export type DocumentFilterKey = "Name"|"Owner"|"PlatformTypes"|"DocumentType"|string;
  export type DocumentFilterList = DocumentFilter[];
  export type DocumentFilterValue = string;
  export type DocumentFormat = "YAML"|"JSON"|"TEXT"|string;
  export type DocumentHash = string;
  export type DocumentHashType = "Sha256"|"Sha1"|string;
  export interface DocumentIdentifier {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The date the SSM document was created.
     */
    CreatedDate?: DateTime;
    /**
     * An optional field where you can specify a friendly name for the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument.
     */
    DisplayName?: DocumentDisplayName;
    /**
     * The Amazon Web Services user account that created the document.
     */
    Owner?: DocumentOwner;
    /**
     * An optional field specifying the version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and can't be changed.
     */
    VersionName?: DocumentVersionName;
    /**
     * The operating system platform. 
     */
    PlatformTypes?: PlatformTypeList;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The document type.
     */
    DocumentType?: DocumentType;
    /**
     * The schema version.
     */
    SchemaVersion?: DocumentSchemaVersion;
    /**
     * The document format, either JSON or YAML.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see Amazon Web Services resource and property types reference in the CloudFormation User Guide. 
     */
    TargetType?: TargetType;
    /**
     * The tags, or metadata, that have been applied to the document.
     */
    Tags?: TagList;
    /**
     * A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.
     */
    Requires?: DocumentRequiresList;
    /**
     * The current status of a document review.
     */
    ReviewStatus?: ReviewStatus;
    /**
     * The user in your organization who created the document.
     */
    Author?: DocumentAuthor;
  }
  export type DocumentIdentifierList = DocumentIdentifier[];
  export interface DocumentKeyValuesFilter {
    /**
     * The name of the filter key.
     */
    Key?: DocumentKeyValuesFilterKey;
    /**
     * The value for the filter key.
     */
    Values?: DocumentKeyValuesFilterValues;
  }
  export type DocumentKeyValuesFilterKey = string;
  export type DocumentKeyValuesFilterList = DocumentKeyValuesFilter[];
  export type DocumentKeyValuesFilterValue = string;
  export type DocumentKeyValuesFilterValues = DocumentKeyValuesFilterValue[];
  export type DocumentMetadataEnum = "DocumentReviews"|string;
  export interface DocumentMetadataResponseInfo {
    /**
     * Details about a reviewer's response to a document review request.
     */
    ReviewerResponse?: DocumentReviewerResponseList;
  }
  export type DocumentName = string;
  export type DocumentOwner = string;
  export interface DocumentParameter {
    /**
     * The name of the parameter.
     */
    Name?: DocumentParameterName;
    /**
     * The type of parameter. The type can be either String or StringList.
     */
    Type?: DocumentParameterType;
    /**
     * A description of what the parameter does, how to use it, the default value, and whether or not the parameter is optional.
     */
    Description?: DocumentParameterDescrption;
    /**
     * If specified, the default values for the parameters. Parameters without a default value are required. Parameters with a default value are optional.
     */
    DefaultValue?: DocumentParameterDefaultValue;
  }
  export type DocumentParameterDefaultValue = string;
  export type DocumentParameterDescrption = string;
  export type DocumentParameterList = DocumentParameter[];
  export type DocumentParameterName = string;
  export type DocumentParameterType = "String"|"StringList"|string;
  export type DocumentPermissionMaxResults = number;
  export type DocumentPermissionType = "Share"|string;
  export interface DocumentRequires {
    /**
     * The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
     */
    Name: DocumentARN;
    /**
     * The document version required by the current document.
     */
    Version?: DocumentVersion;
    /**
     * The document type of the required SSM document.
     */
    RequireType?: RequireType;
    /**
     * An optional field specifying the version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and can't be changed.
     */
    VersionName?: DocumentVersionName;
  }
  export type DocumentRequiresList = DocumentRequires[];
  export type DocumentReviewAction = "SendForReview"|"UpdateReview"|"Approve"|"Reject"|string;
  export type DocumentReviewComment = string;
  export type DocumentReviewCommentList = DocumentReviewCommentSource[];
  export interface DocumentReviewCommentSource {
    /**
     * The type of information added to a review request. Currently, only the value Comment is supported.
     */
    Type?: DocumentReviewCommentType;
    /**
     * The content of a comment entered by a user who requests a review of a new document version, or who reviews the new version.
     */
    Content?: DocumentReviewComment;
  }
  export type DocumentReviewCommentType = "Comment"|string;
  export type DocumentReviewerResponseList = DocumentReviewerResponseSource[];
  export interface DocumentReviewerResponseSource {
    /**
     * The date and time that a reviewer entered a response to a document review request.
     */
    CreateTime?: DateTime;
    /**
     * The date and time that a reviewer last updated a response to a document review request.
     */
    UpdatedTime?: DateTime;
    /**
     * The current review status of a new custom SSM document created by a member of your organization, or of the latest version of an existing SSM document. Only one version of a document can be in the APPROVED state at a time. When a new version is approved, the status of the previous version changes to REJECTED. Only one version of a document can be in review, or PENDING, at a time.
     */
    ReviewStatus?: ReviewStatus;
    /**
     * The comment entered by a reviewer as part of their document review response.
     */
    Comment?: DocumentReviewCommentList;
    /**
     * The user in your organization assigned to review a document request.
     */
    Reviewer?: Reviewer;
  }
  export interface DocumentReviews {
    /**
     * The action to take on a document approval review request.
     */
    Action: DocumentReviewAction;
    /**
     * A comment entered by a user in your organization about the document review request.
     */
    Comment?: DocumentReviewCommentList;
  }
  export type DocumentSchemaVersion = string;
  export type DocumentSha1 = string;
  export type DocumentStatus = "Creating"|"Active"|"Updating"|"Deleting"|"Failed"|string;
  export type DocumentStatusInformation = string;
  export type DocumentType = "Command"|"Policy"|"Automation"|"Session"|"Package"|"ApplicationConfiguration"|"ApplicationConfigurationSchema"|"DeploymentStrategy"|"ChangeCalendar"|"Automation.ChangeTemplate"|"ProblemAnalysis"|"ProblemAnalysisTemplate"|"CloudFormation"|"ConformancePackTemplate"|"QuickSetup"|string;
  export type DocumentVersion = string;
  export interface DocumentVersionInfo {
    /**
     * The document name.
     */
    Name?: DocumentName;
    /**
     * The friendly name of the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument.
     */
    DisplayName?: DocumentDisplayName;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and can't be changed.
     */
    VersionName?: DocumentVersionName;
    /**
     * The date the document was created.
     */
    CreatedDate?: DateTime;
    /**
     * An identifier for the default version of the document.
     */
    IsDefaultVersion?: Boolean;
    /**
     * The document format, either JSON or YAML.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * The status of the SSM document, such as Creating, Active, Failed, and Deleting.
     */
    Status?: DocumentStatus;
    /**
     * A message returned by Amazon Web Services Systems Manager that explains the Status value. For example, a Failed status might be explained by the StatusInformation message, "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."
     */
    StatusInformation?: DocumentStatusInformation;
    /**
     * The current status of the approval review for the latest version of the document.
     */
    ReviewStatus?: ReviewStatus;
  }
  export type DocumentVersionList = DocumentVersionInfo[];
  export type DocumentVersionName = string;
  export type DocumentVersionNumber = string;
  export type DryRun = boolean;
  export type EffectiveInstanceAssociationMaxResults = number;
  export interface EffectivePatch {
    /**
     * Provides metadata for a patch, including information such as the KB ID, severity, classification and a URL for where more information can be obtained about the patch.
     */
    Patch?: Patch;
    /**
     * The status of the patch in a patch baseline. This includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
     */
    PatchStatus?: PatchStatus;
  }
  export type EffectivePatchList = EffectivePatch[];
  export type ErrorCount = number;
  export type ExecutionMode = "Auto"|"Interactive"|string;
  export type ExecutionRoleName = string;
  export type ExpirationDate = Date;
  export type ExternalAlarmState = "UNKNOWN"|"ALARM"|string;
  export interface FailedCreateAssociation {
    /**
     * The association.
     */
    Entry?: CreateAssociationBatchRequestEntry;
    /**
     * A description of the failure.
     */
    Message?: BatchErrorMessage;
    /**
     * The source of the failure.
     */
    Fault?: Fault;
  }
  export type FailedCreateAssociationList = FailedCreateAssociation[];
  export interface FailureDetails {
    /**
     * The stage of the Automation execution when the failure occurred. The stages include the following: InputValidation, PreVerification, Invocation, PostVerification.
     */
    FailureStage?: String;
    /**
     * The type of Automation failure. Failure types include the following: Action, Permission, Throttling, Verification, Internal.
     */
    FailureType?: String;
    /**
     * Detailed information about the Automation step failure.
     */
    Details?: AutomationParameterMap;
  }
  export type Fault = "Client"|"Server"|"Unknown"|string;
  export interface GetAutomationExecutionRequest {
    /**
     * The unique identifier for an existing automation execution to examine. The execution ID is returned by StartAutomationExecution when the execution of an Automation runbook is initiated.
     */
    AutomationExecutionId: AutomationExecutionId;
  }
  export interface GetAutomationExecutionResult {
    /**
     * Detailed information about the current state of an automation execution.
     */
    AutomationExecution?: AutomationExecution;
  }
  export interface GetCalendarStateRequest {
    /**
     * The names or Amazon Resource Names (ARNs) of the Systems Manager documents (SSM documents) that represent the calendar entries for which you want to get the state.
     */
    CalendarNames: CalendarNameOrARNList;
    /**
     * (Optional) The specific time for which you want to get calendar state information, in ISO 8601 format. If you don't specify a value or AtTime, the current time is used.
     */
    AtTime?: ISO8601String;
  }
  export interface GetCalendarStateResponse {
    /**
     * The state of the calendar. An OPEN calendar indicates that actions are allowed to proceed, and a CLOSED calendar indicates that actions aren't allowed to proceed.
     */
    State?: CalendarState;
    /**
     * The time, as an ISO 8601 string, that you specified in your command. If you don't specify a time, GetCalendarState uses the current time.
     */
    AtTime?: ISO8601String;
    /**
     * The time, as an ISO 8601 string, that the calendar state will change. If the current calendar state is OPEN, NextTransitionTime indicates when the calendar state changes to CLOSED, and vice-versa.
     */
    NextTransitionTime?: ISO8601String;
  }
  export interface GetCommandInvocationRequest {
    /**
     * (Required) The parent command ID of the invocation plugin.
     */
    CommandId: CommandId;
    /**
     * (Required) The ID of the managed node targeted by the command. A managed node can be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, and on-premises server or VM in your hybrid environment that is configured for Amazon Web Services Systems Manager.
     */
    InstanceId: InstanceId;
    /**
     * The name of the step for which you want detailed results. If the document contains only one step, you can omit the name and details for that step. If the document contains more than one step, you must specify the name of the step for which you want to view details. Be sure to specify the name of the step, not the name of a plugin like aws:RunShellScript. To find the PluginName, check the document content and find the name of the step you want details for. Alternatively, use ListCommandInvocations with the CommandId and Details parameters. The PluginName is the Name attribute of the CommandPlugin object in the CommandPlugins list.
     */
    PluginName?: CommandPluginName;
  }
  export interface GetCommandInvocationResult {
    /**
     * The parent command ID of the invocation plugin.
     */
    CommandId?: CommandId;
    /**
     * The ID of the managed node targeted by the command. A managed node can be an Amazon Elastic Compute Cloud (Amazon EC2) instance, edge device, or on-premises server or VM in your hybrid environment that is configured for Amazon Web Services Systems Manager.
     */
    InstanceId?: InstanceId;
    /**
     * The comment text for the command.
     */
    Comment?: Comment;
    /**
     * The name of the document that was run. For example, AWS-RunShellScript.
     */
    DocumentName?: DocumentName;
    /**
     * The Systems Manager document (SSM document) version used in the request.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The name of the plugin, or step name, for which details are reported. For example, aws:RunShellScript is a plugin.
     */
    PluginName?: CommandPluginName;
    /**
     * The error level response code for the plugin script. If the response code is -1, then the command hasn't started running on the managed node, or it wasn't received by the node.
     */
    ResponseCode?: ResponseCode;
    /**
     * The date and time the plugin started running. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses the InvokedBefore filter.  aws ssm list-commands --filters key=InvokedBefore,value=2017-06-07T00:00:00Z  If the plugin hasn't started to run, the string is empty.
     */
    ExecutionStartDateTime?: StringDateTime;
    /**
     * Duration since ExecutionStartDateTime.
     */
    ExecutionElapsedTime?: StringDateTime;
    /**
     * The date and time the plugin finished running. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample Amazon Web Services CLI command uses the InvokedAfter filter.  aws ssm list-commands --filters key=InvokedAfter,value=2017-06-07T00:00:00Z  If the plugin hasn't started to run, the string is empty.
     */
    ExecutionEndDateTime?: StringDateTime;
    /**
     * The status of this invocation plugin. This status can be different than StatusDetails.
     */
    Status?: CommandInvocationStatus;
    /**
     * A detailed status of the command execution for an invocation. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding command statuses in the Amazon Web Services Systems Manager User Guide. StatusDetails can be one of the following values:   Pending: The command hasn't been sent to the managed node.   In Progress: The command has been sent to the managed node but hasn't reached a terminal state.   Delayed: The system attempted to send the command to the target, but the target wasn't available. The managed node might not be available because of network issues, because the node was stopped, or for similar reasons. The system will try to send the command again.   Success: The command or plugin ran successfully. This is a terminal state.   Delivery Timed Out: The command wasn't delivered to the managed node before the delivery timeout expired. Delivery timeouts don't count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Execution Timed Out: The command started to run on the managed node, but the execution wasn't complete before the timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state.   Failed: The command wasn't run successfully on the managed node. For a plugin, this indicates that the result code wasn't zero. For a command invocation, this indicates that the result code for one or more plugins wasn't zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.   Cancelled: The command was terminated before it was completed. This is a terminal state.   Undeliverable: The command can't be delivered to the managed node. The node might not exist or might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.  
     */
    StatusDetails?: StatusDetails;
    /**
     * The first 24,000 characters written by the plugin to stdout. If the command hasn't finished running, if ExecutionStatus is neither Succeeded nor Failed, then this string is empty.
     */
    StandardOutputContent?: StandardOutputContent;
    /**
     * The URL for the complete text written by the plugin to stdout in Amazon Simple Storage Service (Amazon S3). If an S3 bucket wasn't specified, then this string is empty.
     */
    StandardOutputUrl?: Url;
    /**
     * The first 8,000 characters written by the plugin to stderr. If the command hasn't finished running, then this string is empty.
     */
    StandardErrorContent?: StandardErrorContent;
    /**
     * The URL for the complete text written by the plugin to stderr. If the command hasn't finished running, then this string is empty.
     */
    StandardErrorUrl?: Url;
    /**
     * Amazon CloudWatch Logs information where Systems Manager sent the command output.
     */
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
  }
  export interface GetConnectionStatusRequest {
    /**
     * The managed node ID.
     */
    Target: SessionTarget;
  }
  export interface GetConnectionStatusResponse {
    /**
     * The ID of the managed node to check connection status. 
     */
    Target?: SessionTarget;
    /**
     * The status of the connection to the managed node. For example, 'Connected' or 'Not Connected'.
     */
    Status?: ConnectionStatus;
  }
  export interface GetDefaultPatchBaselineRequest {
    /**
     * Returns the default patch baseline for the specified operating system.
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface GetDefaultPatchBaselineResult {
    /**
     * The ID of the default patch baseline.
     */
    BaselineId?: BaselineId;
    /**
     * The operating system for the returned patch baseline. 
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface GetDeployablePatchSnapshotForInstanceRequest {
    /**
     * The ID of the managed node for which the appropriate patch snapshot should be retrieved.
     */
    InstanceId: InstanceId;
    /**
     * The snapshot ID provided by the user when running AWS-RunPatchBaseline.
     */
    SnapshotId: SnapshotId;
    /**
     * Defines the basic information about a patch baseline override.
     */
    BaselineOverride?: BaselineOverride;
  }
  export interface GetDeployablePatchSnapshotForInstanceResult {
    /**
     * The managed node ID.
     */
    InstanceId?: InstanceId;
    /**
     * The user-defined snapshot ID.
     */
    SnapshotId?: SnapshotId;
    /**
     * A pre-signed Amazon Simple Storage Service (Amazon S3) URL that can be used to download the patch snapshot.
     */
    SnapshotDownloadUrl?: SnapshotDownloadUrl;
    /**
     * Returns the specific operating system (for example Windows Server 2012 or Amazon Linux 2015.09) on the managed node for the specified patch snapshot.
     */
    Product?: Product;
  }
  export interface GetDocumentRequest {
    /**
     * The name of the SSM document.
     */
    Name: DocumentARN;
    /**
     * An optional field specifying the version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document and can't be changed.
     */
    VersionName?: DocumentVersionName;
    /**
     * The document version for which you want information.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * Returns the document in the specified format. The document format can be either JSON or YAML. JSON is the default format.
     */
    DocumentFormat?: DocumentFormat;
  }
  export interface GetDocumentResult {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The date the SSM document was created.
     */
    CreatedDate?: DateTime;
    /**
     * The friendly name of the SSM document. This value can differ for each version of the document. If you want to update this value, see UpdateDocument.
     */
    DisplayName?: DocumentDisplayName;
    /**
     * The version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and can't be changed.
     */
    VersionName?: DocumentVersionName;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The status of the SSM document, such as Creating, Active, Updating, Failed, and Deleting.
     */
    Status?: DocumentStatus;
    /**
     * A message returned by Amazon Web Services Systems Manager that explains the Status value. For example, a Failed status might be explained by the StatusInformation message, "The specified S3 bucket doesn't exist. Verify that the URL of the S3 bucket is correct."
     */
    StatusInformation?: DocumentStatusInformation;
    /**
     * The contents of the SSM document.
     */
    Content?: DocumentContent;
    /**
     * The document type.
     */
    DocumentType?: DocumentType;
    /**
     * The document format, either JSON or YAML.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.
     */
    Requires?: DocumentRequiresList;
    /**
     * A description of the document attachments, including names, locations, sizes, and so on.
     */
    AttachmentsContent?: AttachmentContentList;
    /**
     * The current review status of a new custom Systems Manager document (SSM document) created by a member of your organization, or of the latest version of an existing SSM document. Only one version of an SSM document can be in the APPROVED state at a time. When a new version is approved, the status of the previous version changes to REJECTED. Only one version of an SSM document can be in review, or PENDING, at a time.
     */
    ReviewStatus?: ReviewStatus;
  }
  export interface GetInventoryRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: InventoryFilterList;
    /**
     * Returns counts of inventory types based on one or more expressions. For example, if you aggregate by using an expression that uses the AWS:InstanceInformation.PlatformType type, you can see a count of how many Windows and Linux managed nodes exist in your inventoried fleet.
     */
    Aggregators?: InventoryAggregatorList;
    /**
     * The list of inventory item types to return.
     */
    ResultAttributes?: ResultAttributeList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface GetInventoryResult {
    /**
     * Collection of inventory entities such as a collection of managed node inventory. 
     */
    Entities?: InventoryResultEntityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export type GetInventorySchemaMaxResults = number;
  export interface GetInventorySchemaRequest {
    /**
     * The type of inventory item to return.
     */
    TypeName?: InventoryItemTypeNameFilter;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: GetInventorySchemaMaxResults;
    /**
     * Returns inventory schemas that support aggregation. For example, this call returns the AWS:InstanceInformation type, because it supports aggregation based on the PlatformName, PlatformType, and PlatformVersion attributes.
     */
    Aggregator?: AggregatorSchemaOnly;
    /**
     * Returns the sub-type schema for a specified inventory type.
     */
    SubType?: IsSubTypeSchema;
  }
  export interface GetInventorySchemaResult {
    /**
     * Inventory schemas returned by the request.
     */
    Schemas?: InventoryItemSchemaResultList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface GetMaintenanceWindowExecutionRequest {
    /**
     * The ID of the maintenance window execution that includes the task.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
  }
  export interface GetMaintenanceWindowExecutionResult {
    /**
     * The ID of the maintenance window execution.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The ID of the task executions from the maintenance window execution.
     */
    TaskIds?: MaintenanceWindowExecutionTaskIdList;
    /**
     * The status of the maintenance window execution.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the status. Not available for all status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the maintenance window started running.
     */
    StartTime?: DateTime;
    /**
     * The time the maintenance window finished running.
     */
    EndTime?: DateTime;
  }
  export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
    /**
     * The ID of the maintenance window execution for which the task is a part.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task in the maintenance window task that should be retrieved. 
     */
    TaskId: MaintenanceWindowExecutionTaskId;
    /**
     * The invocation ID to retrieve.
     */
    InvocationId: MaintenanceWindowExecutionTaskInvocationId;
  }
  export interface GetMaintenanceWindowExecutionTaskInvocationResult {
    /**
     * The maintenance window execution ID.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The task execution ID.
     */
    TaskExecutionId?: MaintenanceWindowExecutionTaskId;
    /**
     * The invocation ID.
     */
    InvocationId?: MaintenanceWindowExecutionTaskInvocationId;
    /**
     * The execution ID.
     */
    ExecutionId?: MaintenanceWindowExecutionTaskExecutionId;
    /**
     * Retrieves the task type for a maintenance window.
     */
    TaskType?: MaintenanceWindowTaskType;
    /**
     * The parameters used at the time that the task ran.
     */
    Parameters?: MaintenanceWindowExecutionTaskInvocationParameters;
    /**
     * The task status for an invocation.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the status. Details are only available for certain status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time that the task started running on the target.
     */
    StartTime?: DateTime;
    /**
     * The time that the task finished running on the target.
     */
    EndTime?: DateTime;
    /**
     * User-provided value to be included in any Amazon CloudWatch Events or Amazon EventBridge events raised while running tasks for these targets in this maintenance window.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The maintenance window target ID.
     */
    WindowTargetId?: MaintenanceWindowTaskTargetId;
  }
  export interface GetMaintenanceWindowExecutionTaskRequest {
    /**
     * The ID of the maintenance window execution that includes the task.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task execution in the maintenance window task that should be retrieved.
     */
    TaskId: MaintenanceWindowExecutionTaskId;
  }
  export interface GetMaintenanceWindowExecutionTaskResult {
    /**
     * The ID of the maintenance window execution that includes the task.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task execution in the maintenance window task that was retrieved.
     */
    TaskExecutionId?: MaintenanceWindowExecutionTaskId;
    /**
     * The Amazon Resource Name (ARN) of the task that ran.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The role that was assumed when running the task.
     */
    ServiceRole?: ServiceRole;
    /**
     * The type of task that was run.
     */
    Type?: MaintenanceWindowTaskType;
    /**
     * The parameters passed to the task when it was run.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.  The map has the following format:    Key: string, between 1 and 255 characters    Value: an array of strings, each between 1 and 255 characters  
     */
    TaskParameters?: MaintenanceWindowTaskParametersList;
    /**
     * The priority of the task.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The defined maximum number of task executions that could be run in parallel.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The defined maximum number of task execution errors allowed before scheduling of the task execution would have been stopped.
     */
    MaxErrors?: MaxErrors;
    /**
     * The status of the task.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the status. Not available for all status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the task execution started.
     */
    StartTime?: DateTime;
    /**
     * The time the task execution completed.
     */
    EndTime?: DateTime;
    /**
     * The details for the CloudWatch alarm you applied to your maintenance window task.
     */
    AlarmConfiguration?: AlarmConfiguration;
    /**
     * The CloudWatch alarms that were invoked by the maintenance window task.
     */
    TriggeredAlarms?: AlarmStateInformationList;
  }
  export interface GetMaintenanceWindowRequest {
    /**
     * The ID of the maintenance window for which you want to retrieve information.
     */
    WindowId: MaintenanceWindowId;
  }
  export interface GetMaintenanceWindowResult {
    /**
     * The ID of the created maintenance window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the maintenance window.
     */
    Name?: MaintenanceWindowName;
    /**
     * The description of the maintenance window.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. The maintenance window won't run before this specified time.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. The maintenance window won't run after this specified time.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The schedule of the maintenance window in the form of a cron or rate expression.
     */
    Schedule?: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
     */
    ScheduleOffset?: MaintenanceWindowOffset;
    /**
     * The next time the maintenance window will actually run, taking into account any specified times for the maintenance window to become active or inactive.
     */
    NextExecutionTime?: MaintenanceWindowStringDateTime;
    /**
     * The duration of the maintenance window in hours.
     */
    Duration?: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff?: MaintenanceWindowCutoff;
    /**
     * Whether targets must be registered with the maintenance window before tasks can be defined for those targets.
     */
    AllowUnassociatedTargets?: MaintenanceWindowAllowUnassociatedTargets;
    /**
     * Indicates whether the maintenance window is enabled.
     */
    Enabled?: MaintenanceWindowEnabled;
    /**
     * The date the maintenance window was created.
     */
    CreatedDate?: DateTime;
    /**
     * The date the maintenance window was last modified.
     */
    ModifiedDate?: DateTime;
  }
  export interface GetMaintenanceWindowTaskRequest {
    /**
     * The maintenance window ID that includes the task to retrieve.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The maintenance window task ID to retrieve.
     */
    WindowTaskId: MaintenanceWindowTaskId;
  }
  export interface GetMaintenanceWindowTaskResult {
    /**
     * The retrieved maintenance window ID.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The retrieved maintenance window task ID.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
    /**
     * The targets where the task should run.
     */
    Targets?: Targets;
    /**
     * The resource that the task used during execution. For RUN_COMMAND and AUTOMATION task types, the value of TaskArn is the SSM document name/ARN. For LAMBDA tasks, the value is the function name/ARN. For STEP_FUNCTIONS tasks, the value is the state machine ARN.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The type of task to run.
     */
    TaskType?: MaintenanceWindowTaskType;
    /**
     * The parameters to pass to the task when it runs.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The parameters to pass to the task when it runs.
     */
    TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    /**
     * The priority of the task when it runs. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The maximum number of targets allowed to run this task in parallel.  For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. This value doesn't affect the running of your task and can be ignored. 
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed before the task stops being scheduled.  For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1, which may be reported in the response to this command. This value doesn't affect the running of your task and can be ignored. 
     */
    MaxErrors?: MaxErrors;
    /**
     * The location in Amazon Simple Storage Service (Amazon S3) where the task results are logged.   LoggingInfo has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * The retrieved task name.
     */
    Name?: MaintenanceWindowName;
    /**
     * The retrieved task description.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The action to take on tasks when the maintenance window cutoff time is reached. CONTINUE_TASK means that tasks continue to run. For Automation, Lambda, Step Functions tasks, CANCEL_TASK means that currently running task invocations continue, but no new task invocations are started. For Run Command tasks, CANCEL_TASK means the system attempts to stop the task by sending a CancelCommand operation.
     */
    CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
    /**
     * The details for the CloudWatch alarm you applied to your maintenance window task.
     */
    AlarmConfiguration?: AlarmConfiguration;
  }
  export interface GetOpsItemRequest {
    /**
     * The ID of the OpsItem that you want to get.
     */
    OpsItemId: OpsItemId;
    /**
     * The OpsItem Amazon Resource Name (ARN).
     */
    OpsItemArn?: OpsItemArn;
  }
  export interface GetOpsItemResponse {
    /**
     * The OpsItem.
     */
    OpsItem?: OpsItem;
  }
  export type GetOpsMetadataMaxResults = number;
  export interface GetOpsMetadataRequest {
    /**
     * The Amazon Resource Name (ARN) of an OpsMetadata Object to view.
     */
    OpsMetadataArn: OpsMetadataArn;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: GetOpsMetadataMaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface GetOpsMetadataResult {
    /**
     * The resource ID of the Application Manager application.
     */
    ResourceId?: OpsMetadataResourceId;
    /**
     * OpsMetadata for an Application Manager application.
     */
    Metadata?: MetadataMap;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface GetOpsSummaryRequest {
    /**
     * Specify the name of a resource data sync to get.
     */
    SyncName?: ResourceDataSyncName;
    /**
     * Optional filters used to scope down the returned OpsData. 
     */
    Filters?: OpsFilterList;
    /**
     * Optional aggregators that return counts of OpsData based on one or more expressions.
     */
    Aggregators?: OpsAggregatorList;
    /**
     * The OpsData data type to return.
     */
    ResultAttributes?: OpsResultAttributeList;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface GetOpsSummaryResult {
    /**
     * The list of aggregated details and filtered OpsData.
     */
    Entities?: OpsEntityList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface GetParameterHistoryRequest {
    /**
     * The name of the parameter for which you want to review history.
     */
    Name: PSParameterName;
    /**
     * Return decrypted values for secure string parameters. This flag is ignored for String and StringList parameter types.
     */
    WithDecryption?: Boolean;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface GetParameterHistoryResult {
    /**
     * A list of parameters returned by the request.
     */
    Parameters?: ParameterHistoryList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface GetParameterRequest {
    /**
     * The name of the parameter you want to query. To query by parameter label, use "Name": "name:label". To query by parameter version, use "Name": "name:version".
     */
    Name: PSParameterName;
    /**
     * Return decrypted values for secure string parameters. This flag is ignored for String and StringList parameter types.
     */
    WithDecryption?: Boolean;
  }
  export interface GetParameterResult {
    /**
     * Information about a parameter.
     */
    Parameter?: Parameter;
  }
  export type GetParametersByPathMaxResults = number;
  export interface GetParametersByPathRequest {
    /**
     * The hierarchy for the parameter. Hierarchies start with a forward slash (/). The hierarchy is the parameter name except the last part of the parameter. For the API call to succeed, the last part of the parameter name can't be in the path. A parameter name hierarchy can have a maximum of 15 levels. Here is an example of a hierarchy: /Finance/Prod/IAD/WinServ2016/license33  
     */
    Path: PSParameterName;
    /**
     * Retrieve all parameters within a hierarchy.  If a user has access to a path, then the user can access all levels of that path. For example, if a user has permission to access path /a, then the user can also access /a/b. Even if a user has explicitly been denied access in IAM for parameter /a/b, they can still call the GetParametersByPath API operation recursively for /a and view /a/b. 
     */
    Recursive?: Boolean;
    /**
     * Filters to limit the request results.  The following Key values are supported for GetParametersByPath: Type, KeyId, and Label. The following Key values aren't supported for GetParametersByPath: tag, DataType, Name, Path, and Tier. 
     */
    ParameterFilters?: ParameterStringFilterList;
    /**
     * Retrieve all parameters in a hierarchy with their value decrypted.
     */
    WithDecryption?: Boolean;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: GetParametersByPathMaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface GetParametersByPathResult {
    /**
     * A list of parameters found in the specified hierarchy.
     */
    Parameters?: ParameterList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface GetParametersRequest {
    /**
     * Names of the parameters for which you want to query information. To query by parameter label, use "Name": "name:label". To query by parameter version, use "Name": "name:version".
     */
    Names: ParameterNameList;
    /**
     * Return decrypted secure string value. Return decrypted values for secure string parameters. This flag is ignored for String and StringList parameter types.
     */
    WithDecryption?: Boolean;
  }
  export interface GetParametersResult {
    /**
     * A list of details for a parameter.
     */
    Parameters?: ParameterList;
    /**
     * A list of parameters that aren't formatted correctly or don't run during an execution.
     */
    InvalidParameters?: ParameterNameList;
  }
  export interface GetPatchBaselineForPatchGroupRequest {
    /**
     * The name of the patch group whose patch baseline should be retrieved.
     */
    PatchGroup: PatchGroup;
    /**
     * Returns the operating system rule specified for patch groups using the patch baseline.
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface GetPatchBaselineForPatchGroupResult {
    /**
     * The ID of the patch baseline that should be used for the patch group.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch group.
     */
    PatchGroup?: PatchGroup;
    /**
     * The operating system rule specified for patch groups using the patch baseline.
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface GetPatchBaselineRequest {
    /**
     * The ID of the patch baseline to retrieve.  To retrieve information about an Amazon Web Services managed patch baseline, specify the full Amazon Resource Name (ARN) of the baseline. For example, for the baseline AWS-AmazonLinuxDefaultPatchBaseline, specify arn:aws:ssm:us-east-2:733109147000:patchbaseline/pb-0e392de35e7c563b7 instead of pb-0e392de35e7c563b7. 
     */
    BaselineId: BaselineId;
  }
  export interface GetPatchBaselineResult {
    /**
     * The ID of the retrieved patch baseline.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch baseline.
     */
    Name?: BaselineName;
    /**
     * Returns the operating system specified for the patch baseline.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * A set of global filters used to exclude patches from the baseline.
     */
    GlobalFilters?: PatchFilterGroup;
    /**
     * A set of rules used to include patches in the baseline.
     */
    ApprovalRules?: PatchRuleGroup;
    /**
     * A list of explicitly approved patches for the baseline.
     */
    ApprovedPatches?: PatchIdList;
    /**
     * Returns the specified compliance severity level for approved patches in the patch baseline.
     */
    ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is false. Applies to Linux managed nodes only.
     */
    ApprovedPatchesEnableNonSecurity?: Boolean;
    /**
     * A list of explicitly rejected patches for the baseline.
     */
    RejectedPatches?: PatchIdList;
    /**
     * The action specified to take on patches included in the RejectedPatches list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency.
     */
    RejectedPatchesAction?: PatchAction;
    /**
     * Patch groups included in the patch baseline.
     */
    PatchGroups?: PatchGroupList;
    /**
     * The date the patch baseline was created.
     */
    CreatedDate?: DateTime;
    /**
     * The date the patch baseline was last modified.
     */
    ModifiedDate?: DateTime;
    /**
     * A description of the patch baseline.
     */
    Description?: BaselineDescription;
    /**
     * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
     */
    Sources?: PatchSourceList;
  }
  export interface GetResourcePoliciesRequest {
    /**
     * Amazon Resource Name (ARN) of the resource to which the policies are attached.
     */
    ResourceArn: ResourceArnString;
    /**
     * A token to start the list. Use this token to get the next set of results.
     */
    NextToken?: String;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: ResourcePolicyMaxResults;
  }
  export interface GetResourcePoliciesResponse {
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: String;
    /**
     * An array of the Policy object.
     */
    Policies?: GetResourcePoliciesResponseEntries;
  }
  export type GetResourcePoliciesResponseEntries = GetResourcePoliciesResponseEntry[];
  export interface GetResourcePoliciesResponseEntry {
    /**
     * A policy ID.
     */
    PolicyId?: PolicyId;
    /**
     * ID of the current policy version. The hash helps to prevent a situation where multiple users attempt to overwrite a policy. You must provide this hash when updating or deleting a policy.
     */
    PolicyHash?: PolicyHash;
    /**
     * A resource policy helps you to define the IAM entity (for example, an Amazon Web Services account) that can manage your Systems Manager resources. Currently, OpsItemGroup is the only resource that supports Systems Manager resource policies. The resource policy for OpsItemGroup enables Amazon Web Services accounts to view and interact with OpsCenter operational work items (OpsItems).
     */
    Policy?: Policy;
  }
  export interface GetServiceSettingRequest {
    /**
     * The ID of the service setting to get. The setting ID can be one of the following.    /ssm/automation/customer-script-log-destination     /ssm/automation/customer-script-log-group-name     /ssm/documents/console/public-sharing-permission     /ssm/managed-instance/activation-tier     /ssm/opsinsights/opscenter     /ssm/parameter-store/default-parameter-tier     /ssm/parameter-store/high-throughput-enabled   
     */
    SettingId: ServiceSettingId;
  }
  export interface GetServiceSettingResult {
    /**
     * The query result of the current service setting.
     */
    ServiceSetting?: ServiceSetting;
  }
  export type IPAddress = string;
  export type ISO8601String = string;
  export type IamRole = string;
  export type IdempotencyToken = string;
  export type InstallOverrideList = string;
  export interface InstanceAggregatedAssociationOverview {
    /**
     * Detailed status information about the aggregated associations.
     */
    DetailedStatus?: StatusName;
    /**
     * The number of associations for the managed node(s).
     */
    InstanceAssociationStatusAggregatedCount?: InstanceAssociationStatusAggregatedCount;
  }
  export interface InstanceAssociation {
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The managed node ID.
     */
    InstanceId?: InstanceId;
    /**
     * The content of the association document for the managed node(s).
     */
    Content?: DocumentContent;
    /**
     * Version information for the association on the managed node.
     */
    AssociationVersion?: AssociationVersion;
  }
  export type InstanceAssociationExecutionSummary = string;
  export type InstanceAssociationList = InstanceAssociation[];
  export interface InstanceAssociationOutputLocation {
    /**
     * An S3 bucket where you want to store the results of this request.
     */
    S3Location?: S3OutputLocation;
  }
  export interface InstanceAssociationOutputUrl {
    /**
     * The URL of S3 bucket where you want to store the results of this request.
     */
    S3OutputUrl?: S3OutputUrl;
  }
  export type InstanceAssociationStatusAggregatedCount = {[key: string]: InstanceCount};
  export interface InstanceAssociationStatusInfo {
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The name of the association.
     */
    Name?: DocumentARN;
    /**
     * The association document versions.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The version of the association applied to the managed node.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The managed node ID where the association was created.
     */
    InstanceId?: InstanceId;
    /**
     * The date the association ran. 
     */
    ExecutionDate?: DateTime;
    /**
     * Status information about the association.
     */
    Status?: StatusName;
    /**
     * Detailed status information about the association.
     */
    DetailedStatus?: StatusName;
    /**
     * Summary information about association execution.
     */
    ExecutionSummary?: InstanceAssociationExecutionSummary;
    /**
     * An error code returned by the request to create the association.
     */
    ErrorCode?: AgentErrorCode;
    /**
     * A URL for an S3 bucket where you want to store the results of this request.
     */
    OutputUrl?: InstanceAssociationOutputUrl;
    /**
     * The name of the association applied to the managed node.
     */
    AssociationName?: AssociationName;
  }
  export type InstanceAssociationStatusInfos = InstanceAssociationStatusInfo[];
  export type InstanceCount = number;
  export type InstanceId = string;
  export type InstanceIdList = InstanceId[];
  export interface InstanceInformation {
    /**
     * The managed node ID. 
     */
    InstanceId?: InstanceId;
    /**
     * Connection status of SSM Agent.   The status Inactive has been deprecated and is no longer in use. 
     */
    PingStatus?: PingStatus;
    /**
     * The date and time when the agent last pinged the Systems Manager service. 
     */
    LastPingDateTime?: DateTime;
    /**
     * The version of SSM Agent running on your Linux managed node. 
     */
    AgentVersion?: Version;
    /**
     * Indicates whether the latest version of SSM Agent is running on your Linux managed node. This field doesn't indicate whether or not the latest version is installed on Windows managed nodes, because some older versions of Windows Server use the EC2Config service to process Systems Manager requests.
     */
    IsLatestVersion?: Boolean;
    /**
     * The operating system platform type. 
     */
    PlatformType?: PlatformType;
    /**
     * The name of the operating system platform running on your managed node. 
     */
    PlatformName?: String;
    /**
     * The version of the OS platform running on your managed node. 
     */
    PlatformVersion?: String;
    /**
     * The activation ID created by Amazon Web Services Systems Manager when the server or virtual machine (VM) was registered.
     */
    ActivationId?: ActivationId;
    /**
     * The Identity and Access Management (IAM) role assigned to the on-premises Systems Manager managed node. This call doesn't return the IAM role for Amazon Elastic Compute Cloud (Amazon EC2) instances. To retrieve the IAM role for an EC2 instance, use the Amazon EC2 DescribeInstances operation. For information, see DescribeInstances in the Amazon EC2 API Reference or describe-instances in the Amazon Web Services CLI Command Reference.
     */
    IamRole?: IamRole;
    /**
     * The date the server or VM was registered with Amazon Web Services as a managed node.
     */
    RegistrationDate?: DateTime;
    /**
     * The type of instance. Instances are either EC2 instances or managed instances. 
     */
    ResourceType?: ResourceType;
    /**
     * The name assigned to an on-premises server, edge device, or virtual machine (VM) when it is activated as a Systems Manager managed node. The name is specified as the DefaultInstanceName property using the CreateActivation command. It is applied to the managed node by specifying the Activation Code and Activation ID when you install SSM Agent on the node, as explained in Install SSM Agent for a hybrid environment (Linux) and Install SSM Agent for a hybrid environment (Windows). To retrieve the Name tag of an EC2 instance, use the Amazon EC2 DescribeInstances operation. For information, see DescribeInstances in the Amazon EC2 API Reference or describe-instances in the Amazon Web Services CLI Command Reference.
     */
    Name?: String;
    /**
     * The IP address of the managed node.
     */
    IPAddress?: IPAddress;
    /**
     * The fully qualified host name of the managed node.
     */
    ComputerName?: ComputerName;
    /**
     * The status of the association.
     */
    AssociationStatus?: StatusName;
    /**
     * The date the association was last run.
     */
    LastAssociationExecutionDate?: DateTime;
    /**
     * The last date the association was successfully run.
     */
    LastSuccessfulAssociationExecutionDate?: DateTime;
    /**
     * Information about the association.
     */
    AssociationOverview?: InstanceAggregatedAssociationOverview;
    /**
     * The ID of the source resource. For IoT Greengrass devices, SourceId is the Thing name. 
     */
    SourceId?: SourceId;
    /**
     * The type of the source resource. For IoT Greengrass devices, SourceType is AWS::IoT::Thing. 
     */
    SourceType?: SourceType;
  }
  export interface InstanceInformationFilter {
    /**
     * The name of the filter. 
     */
    key: InstanceInformationFilterKey;
    /**
     * The filter values.
     */
    valueSet: InstanceInformationFilterValueSet;
  }
  export type InstanceInformationFilterKey = "InstanceIds"|"AgentVersion"|"PingStatus"|"PlatformTypes"|"ActivationIds"|"IamRole"|"ResourceType"|"AssociationStatus"|string;
  export type InstanceInformationFilterList = InstanceInformationFilter[];
  export type InstanceInformationFilterValue = string;
  export type InstanceInformationFilterValueSet = InstanceInformationFilterValue[];
  export type InstanceInformationList = InstanceInformation[];
  export interface InstanceInformationStringFilter {
    /**
     * The filter key name to describe your managed nodes. Valid filter key values: ActivationIds | AgentVersion | AssociationStatus | IamRole | InstanceIds | PingStatus | PlatformTypes | ResourceType | SourceIds | SourceTypes | "tag-key" | "tag:{keyname}    Valid values for the AssociationStatus filter key: Success | Pending | Failed   Valid values for the PingStatus filter key: Online | ConnectionLost | Inactive (deprecated)   Valid values for the PlatformType filter key: Windows | Linux | MacOS   Valid values for the ResourceType filter key: EC2Instance | ManagedInstance   Valid values for the SourceType filter key: AWS::EC2::Instance | AWS::SSM::ManagedInstance | AWS::IoT::Thing   Valid tag examples: Key=tag-key,Values=Purpose | Key=tag:Purpose,Values=Test.  
     */
    Key: InstanceInformationStringFilterKey;
    /**
     * The filter values.
     */
    Values: InstanceInformationFilterValueSet;
  }
  export type InstanceInformationStringFilterKey = string;
  export type InstanceInformationStringFilterList = InstanceInformationStringFilter[];
  export interface InstancePatchState {
    /**
     * The ID of the managed node the high-level patch compliance information was collected for.
     */
    InstanceId: InstanceId;
    /**
     * The name of the patch group the managed node belongs to.
     */
    PatchGroup: PatchGroup;
    /**
     * The ID of the patch baseline used to patch the managed node.
     */
    BaselineId: BaselineId;
    /**
     * The ID of the patch baseline snapshot used during the patching operation when this compliance data was collected.
     */
    SnapshotId?: SnapshotId;
    /**
     * An https URL or an Amazon Simple Storage Service (Amazon S3) path-style URL to a list of patches to be installed. This patch installation list, which you maintain in an S3 bucket in YAML format and specify in the SSM document AWS-RunPatchBaseline, overrides the patches specified by the default patch baseline. For more information about the InstallOverrideList parameter, see About the AWS-RunPatchBaseline  SSM document in the Amazon Web Services Systems Manager User Guide.
     */
    InstallOverrideList?: InstallOverrideList;
    /**
     * Placeholder information. This field will always be empty in the current release of the service.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The number of patches from the patch baseline that are installed on the managed node.
     */
    InstalledCount?: PatchInstalledCount;
    /**
     * The number of patches not specified in the patch baseline that are installed on the managed node.
     */
    InstalledOtherCount?: PatchInstalledOtherCount;
    /**
     * The number of patches installed by Patch Manager since the last time the managed node was rebooted.
     */
    InstalledPendingRebootCount?: PatchInstalledPendingRebootCount;
    /**
     * The number of patches installed on a managed node that are specified in a RejectedPatches list. Patches with a status of InstalledRejected were typically installed before they were added to a RejectedPatches list.  If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of InstalledRejectedCount will always be 0 (zero). 
     */
    InstalledRejectedCount?: PatchInstalledRejectedCount;
    /**
     * The number of patches from the patch baseline that are applicable for the managed node but aren't currently installed.
     */
    MissingCount?: PatchMissingCount;
    /**
     * The number of patches from the patch baseline that were attempted to be installed during the last patching operation, but failed to install.
     */
    FailedCount?: PatchFailedCount;
    /**
     * The number of patches beyond the supported limit of NotApplicableCount that aren't reported by name to Inventory. Inventory is a capability of Amazon Web Services Systems Manager.
     */
    UnreportedNotApplicableCount?: PatchUnreportedNotApplicableCount;
    /**
     * The number of patches from the patch baseline that aren't applicable for the managed node and therefore aren't installed on the node. This number may be truncated if the list of patch names is very large. The number of patches beyond this limit are reported in UnreportedNotApplicableCount.
     */
    NotApplicableCount?: PatchNotApplicableCount;
    /**
     * The time the most recent patching operation was started on the managed node.
     */
    OperationStartTime: DateTime;
    /**
     * The time the most recent patching operation completed on the managed node.
     */
    OperationEndTime: DateTime;
    /**
     * The type of patching operation that was performed: or     SCAN assesses the patch compliance state.    INSTALL installs missing patches.  
     */
    Operation: PatchOperationType;
    /**
     * The time of the last attempt to patch the managed node with NoReboot specified as the reboot option.
     */
    LastNoRebootInstallOperationTime?: DateTime;
    /**
     * Indicates the reboot option specified in the patch baseline.  Reboot options apply to Install operations only. Reboots aren't attempted for Patch Manager Scan operations.     RebootIfNeeded: Patch Manager tries to reboot the managed node if it installed any patches, or if any patches are detected with a status of InstalledPendingReboot.    NoReboot: Patch Manager attempts to install missing packages without trying to reboot the system. Patches installed with this option are assigned a status of InstalledPendingReboot. These patches might not be in effect until a reboot is performed.  
     */
    RebootOption?: RebootOption;
    /**
     * The number of patches per node that are specified as Critical for compliance reporting in the patch baseline aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is NON_COMPLIANT.
     */
    CriticalNonCompliantCount?: PatchCriticalNonCompliantCount;
    /**
     * The number of patches per node that are specified as Security in a patch advisory aren't installed. These patches might be missing, have failed installation, were rejected, or were installed but awaiting a required managed node reboot. The status of these managed nodes is NON_COMPLIANT.
     */
    SecurityNonCompliantCount?: PatchSecurityNonCompliantCount;
    /**
     * The number of patches per node that are specified as other than Critical or Security but aren't compliant with the patch baseline. The status of these managed nodes is NON_COMPLIANT.
     */
    OtherNonCompliantCount?: PatchOtherNonCompliantCount;
  }
  export interface InstancePatchStateFilter {
    /**
     * The key for the filter. Supported values include the following:    InstalledCount     InstalledOtherCount     InstalledPendingRebootCount     InstalledRejectedCount     MissingCount     FailedCount     UnreportedNotApplicableCount     NotApplicableCount   
     */
    Key: InstancePatchStateFilterKey;
    /**
     * The value for the filter. Must be an integer greater than or equal to 0.
     */
    Values: InstancePatchStateFilterValues;
    /**
     * The type of comparison that should be performed for the value.
     */
    Type: InstancePatchStateOperatorType;
  }
  export type InstancePatchStateFilterKey = string;
  export type InstancePatchStateFilterList = InstancePatchStateFilter[];
  export type InstancePatchStateFilterValue = string;
  export type InstancePatchStateFilterValues = InstancePatchStateFilterValue[];
  export type InstancePatchStateList = InstancePatchState[];
  export type InstancePatchStateOperatorType = "Equal"|"NotEqual"|"LessThan"|"GreaterThan"|string;
  export type InstancePatchStatesList = InstancePatchState[];
  export type InstanceTagName = string;
  export type InstancesCount = number;
  export type Integer = number;
  export interface InventoryAggregator {
    /**
     * The inventory type and attribute name for aggregation.
     */
    Expression?: InventoryAggregatorExpression;
    /**
     * Nested aggregators to further refine aggregation for an inventory type.
     */
    Aggregators?: InventoryAggregatorList;
    /**
     * A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
     */
    Groups?: InventoryGroupList;
  }
  export type InventoryAggregatorExpression = string;
  export type InventoryAggregatorList = InventoryAggregator[];
  export type InventoryAttributeDataType = "string"|"number"|string;
  export type InventoryDeletionLastStatusMessage = string;
  export type InventoryDeletionLastStatusUpdateTime = Date;
  export type InventoryDeletionStartTime = Date;
  export type InventoryDeletionStatus = "InProgress"|"Complete"|string;
  export interface InventoryDeletionStatusItem {
    /**
     * The deletion ID returned by the DeleteInventory operation.
     */
    DeletionId?: UUID;
    /**
     * The name of the inventory data type.
     */
    TypeName?: InventoryItemTypeName;
    /**
     * The UTC timestamp when the delete operation started.
     */
    DeletionStartTime?: InventoryDeletionStartTime;
    /**
     * The status of the operation. Possible values are InProgress and Complete.
     */
    LastStatus?: InventoryDeletionStatus;
    /**
     * Information about the status.
     */
    LastStatusMessage?: InventoryDeletionLastStatusMessage;
    /**
     * Information about the delete operation. For more information about this summary, see Understanding the delete inventory summary in the Amazon Web Services Systems Manager User Guide.
     */
    DeletionSummary?: InventoryDeletionSummary;
    /**
     * The UTC timestamp of when the last status report.
     */
    LastStatusUpdateTime?: InventoryDeletionLastStatusUpdateTime;
  }
  export interface InventoryDeletionSummary {
    /**
     * The total number of items to delete. This count doesn't change during the delete operation.
     */
    TotalCount?: TotalCount;
    /**
     * Remaining number of items to delete.
     */
    RemainingCount?: RemainingCount;
    /**
     * A list of counts and versions for deleted items.
     */
    SummaryItems?: InventoryDeletionSummaryItems;
  }
  export interface InventoryDeletionSummaryItem {
    /**
     * The inventory type version.
     */
    Version?: InventoryItemSchemaVersion;
    /**
     * A count of the number of deleted items.
     */
    Count?: ResourceCount;
    /**
     * The remaining number of items to delete.
     */
    RemainingCount?: RemainingCount;
  }
  export type InventoryDeletionSummaryItems = InventoryDeletionSummaryItem[];
  export type InventoryDeletionsList = InventoryDeletionStatusItem[];
  export interface InventoryFilter {
    /**
     * The name of the filter key.
     */
    Key: InventoryFilterKey;
    /**
     * Inventory filter values. Example: inventory filter where managed node IDs are specified as values Key=AWS:InstanceInformation.InstanceId,Values= i-a12b3c4d5e6g, i-1a2b3c4d5e6,Type=Equal. 
     */
    Values: InventoryFilterValueList;
    /**
     * The type of filter.  The Exists filter must be used with aggregators. For more information, see Aggregating inventory data in the Amazon Web Services Systems Manager User Guide. 
     */
    Type?: InventoryQueryOperatorType;
  }
  export type InventoryFilterKey = string;
  export type InventoryFilterList = InventoryFilter[];
  export type InventoryFilterValue = string;
  export type InventoryFilterValueList = InventoryFilterValue[];
  export interface InventoryGroup {
    /**
     * The name of the group.
     */
    Name: InventoryGroupName;
    /**
     * Filters define the criteria for the group. The matchingCount field displays the number of resources that match the criteria. The notMatchingCount field displays the number of resources that don't match the criteria. 
     */
    Filters: InventoryFilterList;
  }
  export type InventoryGroupList = InventoryGroup[];
  export type InventoryGroupName = string;
  export interface InventoryItem {
    /**
     * The name of the inventory type. Default inventory item type names start with AWS. Custom inventory type names will start with Custom. Default inventory item types include the following: AWS:AWSComponent, AWS:Application, AWS:InstanceInformation, AWS:Network, and AWS:WindowsUpdate.
     */
    TypeName: InventoryItemTypeName;
    /**
     * The schema version for the inventory item.
     */
    SchemaVersion: InventoryItemSchemaVersion;
    /**
     * The time the inventory information was collected.
     */
    CaptureTime: InventoryItemCaptureTime;
    /**
     * MD5 hash of the inventory item type contents. The content hash is used to determine whether to update inventory information. The PutInventory API doesn't update the inventory item type contents if the MD5 hash hasn't changed since last update. 
     */
    ContentHash?: InventoryItemContentHash;
    /**
     * The inventory data of the inventory type.
     */
    Content?: InventoryItemEntryList;
    /**
     * A map of associated properties for a specified inventory type. For example, with this attribute, you can specify the ExecutionId, ExecutionType, ComplianceType properties of the AWS:ComplianceItem type.
     */
    Context?: InventoryItemContentContext;
  }
  export interface InventoryItemAttribute {
    /**
     * Name of the inventory item attribute.
     */
    Name: InventoryItemAttributeName;
    /**
     * The data type of the inventory item attribute. 
     */
    DataType: InventoryAttributeDataType;
  }
  export type InventoryItemAttributeList = InventoryItemAttribute[];
  export type InventoryItemAttributeName = string;
  export type InventoryItemCaptureTime = string;
  export type InventoryItemContentContext = {[key: string]: AttributeValue};
  export type InventoryItemContentHash = string;
  export type InventoryItemEntry = {[key: string]: AttributeValue};
  export type InventoryItemEntryList = InventoryItemEntry[];
  export type InventoryItemList = InventoryItem[];
  export interface InventoryItemSchema {
    /**
     * The name of the inventory type. Default inventory item type names start with Amazon Web Services. Custom inventory type names will start with Custom. Default inventory item types include the following: AWS:AWSComponent, AWS:Application, AWS:InstanceInformation, AWS:Network, and AWS:WindowsUpdate.
     */
    TypeName: InventoryItemTypeName;
    /**
     * The schema version for the inventory item.
     */
    Version?: InventoryItemSchemaVersion;
    /**
     * The schema attributes for inventory. This contains data type and attribute name.
     */
    Attributes: InventoryItemAttributeList;
    /**
     * The alias name of the inventory type. The alias name is used for display purposes.
     */
    DisplayName?: InventoryTypeDisplayName;
  }
  export type InventoryItemSchemaResultList = InventoryItemSchema[];
  export type InventoryItemSchemaVersion = string;
  export type InventoryItemTypeName = string;
  export type InventoryItemTypeNameFilter = string;
  export type InventoryQueryOperatorType = "Equal"|"NotEqual"|"BeginWith"|"LessThan"|"GreaterThan"|"Exists"|string;
  export interface InventoryResultEntity {
    /**
     * ID of the inventory result entity. For example, for managed node inventory the result will be the managed node ID. For EC2 instance inventory, the result will be the instance ID. 
     */
    Id?: InventoryResultEntityId;
    /**
     * The data section in the inventory result entity JSON.
     */
    Data?: InventoryResultItemMap;
  }
  export type InventoryResultEntityId = string;
  export type InventoryResultEntityList = InventoryResultEntity[];
  export interface InventoryResultItem {
    /**
     * The name of the inventory result item type.
     */
    TypeName: InventoryItemTypeName;
    /**
     * The schema version for the inventory result item/
     */
    SchemaVersion: InventoryItemSchemaVersion;
    /**
     * The time inventory item data was captured.
     */
    CaptureTime?: InventoryItemCaptureTime;
    /**
     * MD5 hash of the inventory item type contents. The content hash is used to determine whether to update inventory information. The PutInventory API doesn't update the inventory item type contents if the MD5 hash hasn't changed since last update. 
     */
    ContentHash?: InventoryItemContentHash;
    /**
     * Contains all the inventory data of the item type. Results include attribute names and values. 
     */
    Content: InventoryItemEntryList;
  }
  export type InventoryResultItemKey = string;
  export type InventoryResultItemMap = {[key: string]: InventoryResultItem};
  export type InventorySchemaDeleteOption = "DisableSchema"|"DeleteSchema"|string;
  export type InventoryTypeDisplayName = string;
  export type InvocationTraceOutput = string;
  export type IsSubTypeSchema = boolean;
  export type KeyList = TagKey[];
  export interface LabelParameterVersionRequest {
    /**
     * The parameter name on which you want to attach one or more labels.
     */
    Name: PSParameterName;
    /**
     * The specific version of the parameter on which you want to attach one or more labels. If no version is specified, the system attaches the label to the latest version.
     */
    ParameterVersion?: PSParameterVersion;
    /**
     * One or more labels to attach to the specified parameter version.
     */
    Labels: ParameterLabelList;
  }
  export interface LabelParameterVersionResult {
    /**
     * The label doesn't meet the requirements. For information about parameter label requirements, see Labeling parameters in the Amazon Web Services Systems Manager User Guide.
     */
    InvalidLabels?: ParameterLabelList;
    /**
     * The version of the parameter that has been labeled.
     */
    ParameterVersion?: PSParameterVersion;
  }
  export type LastResourceDataSyncMessage = string;
  export type LastResourceDataSyncStatus = "Successful"|"Failed"|"InProgress"|string;
  export type LastResourceDataSyncTime = Date;
  export type LastSuccessfulResourceDataSyncTime = Date;
  export interface ListAssociationVersionsRequest {
    /**
     * The association ID for which you want to view all versions.
     */
    AssociationId: AssociationId;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface ListAssociationVersionsResult {
    /**
     * Information about all versions of the association for the specified association ID.
     */
    AssociationVersions?: AssociationVersionList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListAssociationsRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.  Filtering associations using the InstanceID attribute only returns legacy associations created using the InstanceID attribute. Associations targeting the managed node that are part of the Target Attributes ResourceGroup or Tags aren't returned. 
     */
    AssociationFilterList?: AssociationFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListAssociationsResult {
    /**
     * The associations.
     */
    Associations?: AssociationList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListCommandInvocationsRequest {
    /**
     * (Optional) The invocations for a specific command ID.
     */
    CommandId?: CommandId;
    /**
     * (Optional) The command execution details for a specific managed node ID.
     */
    InstanceId?: InstanceId;
    /**
     * (Optional) The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: CommandMaxResults;
    /**
     * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * (Optional) One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: CommandFilterList;
    /**
     * (Optional) If set this returns the response of the command executions and any command output. The default value is false. 
     */
    Details?: Boolean;
  }
  export interface ListCommandInvocationsResult {
    /**
     * (Optional) A list of all invocations. 
     */
    CommandInvocations?: CommandInvocationList;
    /**
     * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListCommandsRequest {
    /**
     * (Optional) If provided, lists only the specified command.
     */
    CommandId?: CommandId;
    /**
     * (Optional) Lists commands issued against this managed node ID.  You can't specify a managed node ID in the same command that you specify Status = Pending. This is because the command hasn't reached the managed node yet. 
     */
    InstanceId?: InstanceId;
    /**
     * (Optional) The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: CommandMaxResults;
    /**
     * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * (Optional) One or more filters. Use a filter to return a more specific list of results. 
     */
    Filters?: CommandFilterList;
  }
  export interface ListCommandsResult {
    /**
     * (Optional) The list of commands requested by the user. 
     */
    Commands?: CommandList;
    /**
     * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListComplianceItemsRequest {
    /**
     * One or more compliance filters. Use a filter to return a more specific list of results.
     */
    Filters?: ComplianceStringFilterList;
    /**
     * The ID for the resources from which to get compliance information. Currently, you can only specify one resource ID.
     */
    ResourceIds?: ComplianceResourceIdList;
    /**
     * The type of resource from which to get compliance information. Currently, the only supported resource type is ManagedInstance.
     */
    ResourceTypes?: ComplianceResourceTypeList;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListComplianceItemsResult {
    /**
     * A list of compliance information for the specified resource ID. 
     */
    ComplianceItems?: ComplianceItemList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListComplianceSummariesRequest {
    /**
     * One or more compliance or inventory filters. Use a filter to return a more specific list of results.
     */
    Filters?: ComplianceStringFilterList;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. Currently, you can specify null or 50. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListComplianceSummariesResult {
    /**
     * A list of compliant and non-compliant summary counts based on compliance types. For example, this call returns State Manager associations, patches, or custom compliance types according to the filter criteria that you specified.
     */
    ComplianceSummaryItems?: ComplianceSummaryItemList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListDocumentMetadataHistoryRequest {
    /**
     * The name of the change template.
     */
    Name: DocumentName;
    /**
     * The version of the change template.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The type of data for which details are being requested. Currently, the only supported value is DocumentReviews.
     */
    Metadata: DocumentMetadataEnum;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDocumentMetadataHistoryResponse {
    /**
     * The name of the change template.
     */
    Name?: DocumentName;
    /**
     * The version of the change template.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The user ID of the person in the organization who requested the review of the change template.
     */
    Author?: DocumentAuthor;
    /**
     * Information about the response to the change template approval request.
     */
    Metadata?: DocumentMetadataResponseInfo;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListDocumentVersionsRequest {
    /**
     * The name of the document. You can specify an Amazon Resource Name (ARN).
     */
    Name: DocumentARN;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListDocumentVersionsResult {
    /**
     * The document versions.
     */
    DocumentVersions?: DocumentVersionList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListDocumentsRequest {
    /**
     * This data type is deprecated. Instead, use Filters.
     */
    DocumentFilterList?: DocumentFilterList;
    /**
     * One or more DocumentKeyValuesFilter objects. Use a filter to return a more specific list of results. For keys, you can specify one or more key-value pair tags that have been applied to a document. Other valid keys include Owner, Name, PlatformTypes, DocumentType, and TargetType. For example, to return documents you own use Key=Owner,Values=Self. To specify a custom key-value pair, use the format Key=tag:tagName,Values=valueName.  This API operation only supports filtering documents by using a single tag key and one or more tag values. For example: Key=tag:tagName,Values=valueName1,valueName2  
     */
    Filters?: DocumentKeyValuesFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListDocumentsResult {
    /**
     * The names of the SSM documents.
     */
    DocumentIdentifiers?: DocumentIdentifierList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListInventoryEntriesRequest {
    /**
     * The managed node ID for which you want inventory information.
     */
    InstanceId: InstanceId;
    /**
     * The type of inventory item for which you want information.
     */
    TypeName: InventoryItemTypeName;
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: InventoryFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListInventoryEntriesResult {
    /**
     * The type of inventory item returned by the request.
     */
    TypeName?: InventoryItemTypeName;
    /**
     * The managed node ID targeted by the request to query inventory information.
     */
    InstanceId?: InstanceId;
    /**
     * The inventory schema version used by the managed node(s).
     */
    SchemaVersion?: InventoryItemSchemaVersion;
    /**
     * The time that inventory information was collected for the managed node(s).
     */
    CaptureTime?: InventoryItemCaptureTime;
    /**
     * A list of inventory items on the managed node(s).
     */
    Entries?: InventoryItemEntryList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListOpsItemEventsRequest {
    /**
     * One or more OpsItem filters. Use a filter to return a more specific list of results. 
     */
    Filters?: OpsItemEventFilters;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results. 
     */
    MaxResults?: OpsItemEventMaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: String;
  }
  export interface ListOpsItemEventsResponse {
    /**
     * The token for the next set of items to return. Use this token to get the next set of results. 
     */
    NextToken?: String;
    /**
     * A list of event information for the specified OpsItems.
     */
    Summaries?: OpsItemEventSummaries;
  }
  export interface ListOpsItemRelatedItemsRequest {
    /**
     * The ID of the OpsItem for which you want to list all related-item resources.
     */
    OpsItemId?: OpsItemId;
    /**
     * One or more OpsItem filters. Use a filter to return a more specific list of results. 
     */
    Filters?: OpsItemRelatedItemsFilters;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: OpsItemRelatedItemsMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: String;
  }
  export interface ListOpsItemRelatedItemsResponse {
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: String;
    /**
     * A list of related-item resources for the specified OpsItem.
     */
    Summaries?: OpsItemRelatedItemSummaries;
  }
  export type ListOpsMetadataMaxResults = number;
  export interface ListOpsMetadataRequest {
    /**
     * One or more filters to limit the number of OpsMetadata objects returned by the call.
     */
    Filters?: OpsMetadataFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: ListOpsMetadataMaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListOpsMetadataResult {
    /**
     * Returns a list of OpsMetadata objects.
     */
    OpsMetadataList?: OpsMetadataList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListResourceComplianceSummariesRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: ComplianceStringFilterList;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListResourceComplianceSummariesResult {
    /**
     * A summary count for specified or targeted managed nodes. Summary count includes information about compliant and non-compliant State Manager associations, patch status, or custom items according to the filter criteria that you specify. 
     */
    ResourceComplianceSummaryItems?: ResourceComplianceSummaryItemList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListResourceDataSyncRequest {
    /**
     * View a list of resource data syncs according to the sync type. Specify SyncToDestination to view resource data syncs that synchronize data to an Amazon S3 bucket. Specify SyncFromSource to view resource data syncs from Organizations or from multiple Amazon Web Services Regions.
     */
    SyncType?: ResourceDataSyncType;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListResourceDataSyncResult {
    /**
     * A list of your current resource data sync configurations and their statuses.
     */
    ResourceDataSyncItems?: ResourceDataSyncItemList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * Returns a list of tags for a specific resource type.
     */
    ResourceType: ResourceTypeForTagging;
    /**
     * The resource ID for which you want to see a list of tags.
     */
    ResourceId: ResourceId;
  }
  export interface ListTagsForResourceResult {
    /**
     * A list of tags.
     */
    TagList?: TagList;
  }
  export interface LoggingInfo {
    /**
     * The name of an S3 bucket where execution logs are stored.
     */
    S3BucketName: S3BucketName;
    /**
     * (Optional) The S3 bucket subfolder. 
     */
    S3KeyPrefix?: S3KeyPrefix;
    /**
     * The Amazon Web Services Region where the S3 bucket is located.
     */
    S3Region: S3Region;
  }
  export type Long = number;
  export type MaintenanceWindowAllowUnassociatedTargets = boolean;
  export interface MaintenanceWindowAutomationParameters {
    /**
     * The version of an Automation runbook to use during task execution.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The parameters for the AUTOMATION task. For information about specifying and updating task parameters, see RegisterTaskWithMaintenanceWindow and UpdateMaintenanceWindowTask.   LoggingInfo has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.  TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. For AUTOMATION task types, Amazon Web Services Systems Manager ignores any values specified for these parameters. 
     */
    Parameters?: AutomationParameterMap;
  }
  export type MaintenanceWindowCutoff = number;
  export type MaintenanceWindowDescription = string;
  export type MaintenanceWindowDurationHours = number;
  export type MaintenanceWindowEnabled = boolean;
  export interface MaintenanceWindowExecution {
    /**
     * The ID of the maintenance window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The ID of the maintenance window execution.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The status of the execution.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the status. Not available for all status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the execution started.
     */
    StartTime?: DateTime;
    /**
     * The time the execution finished.
     */
    EndTime?: DateTime;
  }
  export type MaintenanceWindowExecutionId = string;
  export type MaintenanceWindowExecutionList = MaintenanceWindowExecution[];
  export type MaintenanceWindowExecutionStatus = "PENDING"|"IN_PROGRESS"|"SUCCESS"|"FAILED"|"TIMED_OUT"|"CANCELLING"|"CANCELLED"|"SKIPPED_OVERLAPPING"|string;
  export type MaintenanceWindowExecutionStatusDetails = string;
  export type MaintenanceWindowExecutionTaskExecutionId = string;
  export type MaintenanceWindowExecutionTaskId = string;
  export type MaintenanceWindowExecutionTaskIdList = MaintenanceWindowExecutionTaskId[];
  export interface MaintenanceWindowExecutionTaskIdentity {
    /**
     * The ID of the maintenance window execution that ran the task.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task execution in the maintenance window execution.
     */
    TaskExecutionId?: MaintenanceWindowExecutionTaskId;
    /**
     * The status of the task execution.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the status of the task execution. Not available for all status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the task execution started.
     */
    StartTime?: DateTime;
    /**
     * The time the task execution finished.
     */
    EndTime?: DateTime;
    /**
     * The Amazon Resource Name (ARN) of the task that ran.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The type of task that ran.
     */
    TaskType?: MaintenanceWindowTaskType;
    /**
     * The details for the CloudWatch alarm applied to your maintenance window task.
     */
    AlarmConfiguration?: AlarmConfiguration;
    /**
     * The CloudWatch alarm that was invoked by the maintenance window task.
     */
    TriggeredAlarms?: AlarmStateInformationList;
  }
  export type MaintenanceWindowExecutionTaskIdentityList = MaintenanceWindowExecutionTaskIdentity[];
  export type MaintenanceWindowExecutionTaskInvocationId = string;
  export interface MaintenanceWindowExecutionTaskInvocationIdentity {
    /**
     * The ID of the maintenance window execution that ran the task.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task execution in the maintenance window execution.
     */
    TaskExecutionId?: MaintenanceWindowExecutionTaskId;
    /**
     * The ID of the task invocation.
     */
    InvocationId?: MaintenanceWindowExecutionTaskInvocationId;
    /**
     * The ID of the action performed in the service that actually handled the task invocation. If the task type is RUN_COMMAND, this value is the command ID.
     */
    ExecutionId?: MaintenanceWindowExecutionTaskExecutionId;
    /**
     * The task type.
     */
    TaskType?: MaintenanceWindowTaskType;
    /**
     * The parameters that were provided for the invocation when it was run.
     */
    Parameters?: MaintenanceWindowExecutionTaskInvocationParameters;
    /**
     * The status of the task invocation.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the status of the task invocation. Not available for all status values. 
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the invocation started.
     */
    StartTime?: DateTime;
    /**
     * The time the invocation finished.
     */
    EndTime?: DateTime;
    /**
     * User-provided value that was specified when the target was registered with the maintenance window. This was also included in any Amazon CloudWatch Events events raised during the task invocation.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The ID of the target definition in this maintenance window the invocation was performed for.
     */
    WindowTargetId?: MaintenanceWindowTaskTargetId;
  }
  export type MaintenanceWindowExecutionTaskInvocationIdentityList = MaintenanceWindowExecutionTaskInvocationIdentity[];
  export type MaintenanceWindowExecutionTaskInvocationParameters = string;
  export interface MaintenanceWindowFilter {
    /**
     * The name of the filter.
     */
    Key?: MaintenanceWindowFilterKey;
    /**
     * The filter values.
     */
    Values?: MaintenanceWindowFilterValues;
  }
  export type MaintenanceWindowFilterKey = string;
  export type MaintenanceWindowFilterList = MaintenanceWindowFilter[];
  export type MaintenanceWindowFilterValue = string;
  export type MaintenanceWindowFilterValues = MaintenanceWindowFilterValue[];
  export type MaintenanceWindowId = string;
  export interface MaintenanceWindowIdentity {
    /**
     * The ID of the maintenance window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the maintenance window.
     */
    Name?: MaintenanceWindowName;
    /**
     * A description of the maintenance window.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * Indicates whether the maintenance window is enabled.
     */
    Enabled?: MaintenanceWindowEnabled;
    /**
     * The duration of the maintenance window in hours.
     */
    Duration?: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff?: MaintenanceWindowCutoff;
    /**
     * The schedule of the maintenance window in the form of a cron or rate expression.
     */
    Schedule?: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
     */
    ScheduleOffset?: MaintenanceWindowOffset;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The next time the maintenance window will actually run, taking into account any specified times for the maintenance window to become active or inactive.
     */
    NextExecutionTime?: MaintenanceWindowStringDateTime;
  }
  export interface MaintenanceWindowIdentityForTarget {
    /**
     * The ID of the maintenance window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the maintenance window.
     */
    Name?: MaintenanceWindowName;
  }
  export type MaintenanceWindowIdentityList = MaintenanceWindowIdentity[];
  export type MaintenanceWindowLambdaClientContext = string;
  export interface MaintenanceWindowLambdaParameters {
    /**
     * Pass client-specific information to the Lambda function that you are invoking. You can then process the client information in your Lambda function as you choose through the context variable.
     */
    ClientContext?: MaintenanceWindowLambdaClientContext;
    /**
     * (Optional) Specify an Lambda function version or alias name. If you specify a function version, the operation uses the qualified function Amazon Resource Name (ARN) to invoke a specific Lambda function. If you specify an alias name, the operation uses the alias ARN to invoke the Lambda function version to which the alias points.
     */
    Qualifier?: MaintenanceWindowLambdaQualifier;
    /**
     * JSON to provide to your Lambda function as input.
     */
    Payload?: MaintenanceWindowLambdaPayload;
  }
  export type MaintenanceWindowLambdaPayload = Buffer|Uint8Array|Blob|string;
  export type MaintenanceWindowLambdaQualifier = string;
  export type MaintenanceWindowMaxResults = number;
  export type MaintenanceWindowName = string;
  export type MaintenanceWindowOffset = number;
  export type MaintenanceWindowResourceType = "INSTANCE"|"RESOURCE_GROUP"|string;
  export interface MaintenanceWindowRunCommandParameters {
    /**
     * Information about the commands to run.
     */
    Comment?: Comment;
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
    /**
     * The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes have been deprecated.
     */
    DocumentHash?: DocumentHash;
    /**
     * SHA-256 or SHA-1. SHA-1 hashes have been deprecated.
     */
    DocumentHashType?: DocumentHashType;
    /**
     * The Amazon Web Services Systems Manager document (SSM document) version to use in the request. You can specify $DEFAULT, $LATEST, or a specific version number. If you run commands by using the Amazon Web Services CLI, then you must escape the first two options by using a backslash. If you specify a version number, then you don't need to use the backslash. For example:  --document-version "\$DEFAULT"   --document-version "\$LATEST"   --document-version "3" 
     */
    DocumentVersion?: DocumentVersion;
    /**
     * Configurations for sending notifications about command status changes on a per-managed node basis.
     */
    NotificationConfig?: NotificationConfig;
    /**
     * The name of the Amazon Simple Storage Service (Amazon S3) bucket.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The S3 bucket subfolder.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
    /**
     * The parameters for the RUN_COMMAND task execution.
     */
    Parameters?: Parameters;
    /**
     * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * If this time is reached and the command hasn't already started running, it doesn't run.
     */
    TimeoutSeconds?: TimeoutSeconds;
  }
  export type MaintenanceWindowSchedule = string;
  export type MaintenanceWindowSearchMaxResults = number;
  export type MaintenanceWindowStepFunctionsInput = string;
  export type MaintenanceWindowStepFunctionsName = string;
  export interface MaintenanceWindowStepFunctionsParameters {
    /**
     * The inputs for the STEP_FUNCTIONS task.
     */
    Input?: MaintenanceWindowStepFunctionsInput;
    /**
     * The name of the STEP_FUNCTIONS task.
     */
    Name?: MaintenanceWindowStepFunctionsName;
  }
  export type MaintenanceWindowStringDateTime = string;
  export interface MaintenanceWindowTarget {
    /**
     * The ID of the maintenance window to register the target with.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The ID of the target.
     */
    WindowTargetId?: MaintenanceWindowTargetId;
    /**
     * The type of target that is being registered with the maintenance window.
     */
    ResourceType?: MaintenanceWindowResourceType;
    /**
     * The targets, either managed nodes or tags. Specify managed nodes using the following format:  Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;  Tags are specified using the following format:  Key=&lt;tag name&gt;,Values=&lt;tag value&gt;.
     */
    Targets?: Targets;
    /**
     * A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The name for the maintenance window target.
     */
    Name?: MaintenanceWindowName;
    /**
     * A description for the target.
     */
    Description?: MaintenanceWindowDescription;
  }
  export type MaintenanceWindowTargetId = string;
  export type MaintenanceWindowTargetList = MaintenanceWindowTarget[];
  export interface MaintenanceWindowTask {
    /**
     * The ID of the maintenance window where the task is registered.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The task ID.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
    /**
     * The resource that the task uses during execution. For RUN_COMMAND and AUTOMATION task types, TaskArn is the Amazon Web Services Systems Manager (SSM document) name or ARN. For LAMBDA tasks, it's the function name or ARN. For STEP_FUNCTIONS tasks, it's the state machine ARN.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The type of task.
     */
    Type?: MaintenanceWindowTaskType;
    /**
     * The targets (either managed nodes or tags). Managed nodes are specified using Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are specified using Key=&lt;tag name&gt;,Values=&lt;tag value&gt;.
     */
    Targets?: Targets;
    /**
     * The parameters that should be passed to the task when it is run.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The priority of the task in the maintenance window. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * Information about an S3 bucket to write task-level logs to.   LoggingInfo has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The maximum number of targets this task can be run for, in parallel.  Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task. 
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed before this task stops being scheduled.  Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task. 
     */
    MaxErrors?: MaxErrors;
    /**
     * The task name.
     */
    Name?: MaintenanceWindowName;
    /**
     * A description of the task.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. 
     */
    CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
    /**
     * The details for the CloudWatch alarm applied to your maintenance window task.
     */
    AlarmConfiguration?: AlarmConfiguration;
  }
  export type MaintenanceWindowTaskArn = string;
  export type MaintenanceWindowTaskCutoffBehavior = "CONTINUE_TASK"|"CANCEL_TASK"|string;
  export type MaintenanceWindowTaskId = string;
  export interface MaintenanceWindowTaskInvocationParameters {
    /**
     * The parameters for a RUN_COMMAND task type.
     */
    RunCommand?: MaintenanceWindowRunCommandParameters;
    /**
     * The parameters for an AUTOMATION task type.
     */
    Automation?: MaintenanceWindowAutomationParameters;
    /**
     * The parameters for a STEP_FUNCTIONS task type.
     */
    StepFunctions?: MaintenanceWindowStepFunctionsParameters;
    /**
     * The parameters for a LAMBDA task type.
     */
    Lambda?: MaintenanceWindowLambdaParameters;
  }
  export type MaintenanceWindowTaskList = MaintenanceWindowTask[];
  export type MaintenanceWindowTaskParameterName = string;
  export type MaintenanceWindowTaskParameterValue = string;
  export interface MaintenanceWindowTaskParameterValueExpression {
    /**
     * This field contains an array of 0 or more strings, each 1 to 255 characters in length.
     */
    Values?: MaintenanceWindowTaskParameterValueList;
  }
  export type MaintenanceWindowTaskParameterValueList = MaintenanceWindowTaskParameterValue[];
  export type MaintenanceWindowTaskParameters = {[key: string]: MaintenanceWindowTaskParameterValueExpression};
  export type MaintenanceWindowTaskParametersList = MaintenanceWindowTaskParameters[];
  export type MaintenanceWindowTaskPriority = number;
  export type MaintenanceWindowTaskTargetId = string;
  export type MaintenanceWindowTaskType = "RUN_COMMAND"|"AUTOMATION"|"STEP_FUNCTIONS"|"LAMBDA"|string;
  export type MaintenanceWindowTimezone = string;
  export type MaintenanceWindowsForTargetList = MaintenanceWindowIdentityForTarget[];
  export type ManagedInstanceId = string;
  export type MaxConcurrency = string;
  export type MaxErrors = string;
  export type MaxResults = number;
  export type MaxResultsEC2Compatible = number;
  export type MaxSessionDuration = string;
  export type MetadataKey = string;
  export type MetadataKeysToDeleteList = MetadataKey[];
  export type MetadataMap = {[key: string]: MetadataValue};
  export interface MetadataValue {
    /**
     * Metadata value to assign to an Application Manager application.
     */
    Value?: MetadataValueString;
  }
  export type MetadataValueString = string;
  export interface ModifyDocumentPermissionRequest {
    /**
     * The name of the document that you want to share.
     */
    Name: DocumentName;
    /**
     * The permission type for the document. The permission type can be Share.
     */
    PermissionType: DocumentPermissionType;
    /**
     * The Amazon Web Services user accounts that should have access to the document. The account IDs can either be a group of account IDs or All.
     */
    AccountIdsToAdd?: AccountIdList;
    /**
     * The Amazon Web Services user accounts that should no longer have access to the document. The Amazon Web Services user account can either be a group of account IDs or All. This action has a higher priority than AccountIdsToAdd. If you specify an account ID to add and the same ID to remove, the system removes access to the document.
     */
    AccountIdsToRemove?: AccountIdList;
    /**
     * (Optional) The version of the document to share. If it isn't specified, the system choose the Default version to share.
     */
    SharedDocumentVersion?: SharedDocumentVersion;
  }
  export interface ModifyDocumentPermissionResponse {
  }
  export type NextToken = string;
  export interface NonCompliantSummary {
    /**
     * The total number of compliance items that aren't compliant.
     */
    NonCompliantCount?: ComplianceSummaryCount;
    /**
     * A summary of the non-compliance severity by compliance type
     */
    SeveritySummary?: SeveritySummary;
  }
  export type NormalStringMap = {[key: string]: String};
  export type NotificationArn = string;
  export interface NotificationConfig {
    /**
     * An Amazon Resource Name (ARN) for an Amazon Simple Notification Service (Amazon SNS) topic. Run Command pushes notifications about command status changes to this topic.
     */
    NotificationArn?: NotificationArn;
    /**
     * The different events for which you can receive notifications. To learn more about these events, see Monitoring Systems Manager status changes using Amazon SNS notifications in the Amazon Web Services Systems Manager User Guide.
     */
    NotificationEvents?: NotificationEventList;
    /**
     * The type of notification.    Command: Receive notification when the status of a command changes.    Invocation: For commands sent to multiple managed nodes, receive notification on a per-node basis when the status of a command changes.   
     */
    NotificationType?: NotificationType;
  }
  export type NotificationEvent = "All"|"InProgress"|"Success"|"TimedOut"|"Cancelled"|"Failed"|string;
  export type NotificationEventList = NotificationEvent[];
  export type NotificationType = "Command"|"Invocation"|string;
  export type OperatingSystem = "WINDOWS"|"AMAZON_LINUX"|"AMAZON_LINUX_2"|"AMAZON_LINUX_2022"|"UBUNTU"|"REDHAT_ENTERPRISE_LINUX"|"SUSE"|"CENTOS"|"ORACLE_LINUX"|"DEBIAN"|"MACOS"|"RASPBIAN"|"ROCKY_LINUX"|string;
  export interface OpsAggregator {
    /**
     * Either a Range or Count aggregator for limiting an OpsData summary.
     */
    AggregatorType?: OpsAggregatorType;
    /**
     * The data type name to use for viewing counts of OpsData.
     */
    TypeName?: OpsDataTypeName;
    /**
     * The name of an OpsData attribute on which to limit the count of OpsData.
     */
    AttributeName?: OpsDataAttributeName;
    /**
     * The aggregator value.
     */
    Values?: OpsAggregatorValueMap;
    /**
     * The aggregator filters.
     */
    Filters?: OpsFilterList;
    /**
     * A nested aggregator for viewing counts of OpsData.
     */
    Aggregators?: OpsAggregatorList;
  }
  export type OpsAggregatorList = OpsAggregator[];
  export type OpsAggregatorType = string;
  export type OpsAggregatorValue = string;
  export type OpsAggregatorValueKey = string;
  export type OpsAggregatorValueMap = {[key: string]: OpsAggregatorValue};
  export type OpsDataAttributeName = string;
  export type OpsDataTypeName = string;
  export interface OpsEntity {
    /**
     * The query ID.
     */
    Id?: OpsEntityId;
    /**
     * The data returned by the query.
     */
    Data?: OpsEntityItemMap;
  }
  export type OpsEntityId = string;
  export interface OpsEntityItem {
    /**
     * The time the OpsData was captured.
     */
    CaptureTime?: OpsEntityItemCaptureTime;
    /**
     * The details of an OpsData summary.
     */
    Content?: OpsEntityItemEntryList;
  }
  export type OpsEntityItemCaptureTime = string;
  export type OpsEntityItemEntry = {[key: string]: AttributeValue};
  export type OpsEntityItemEntryList = OpsEntityItemEntry[];
  export type OpsEntityItemKey = string;
  export type OpsEntityItemMap = {[key: string]: OpsEntityItem};
  export type OpsEntityList = OpsEntity[];
  export interface OpsFilter {
    /**
     * The name of the filter.
     */
    Key: OpsFilterKey;
    /**
     * The filter value.
     */
    Values: OpsFilterValueList;
    /**
     * The type of filter.
     */
    Type?: OpsFilterOperatorType;
  }
  export type OpsFilterKey = string;
  export type OpsFilterList = OpsFilter[];
  export type OpsFilterOperatorType = "Equal"|"NotEqual"|"BeginWith"|"LessThan"|"GreaterThan"|"Exists"|string;
  export type OpsFilterValue = string;
  export type OpsFilterValueList = OpsFilterValue[];
  export interface OpsItem {
    /**
     * The ARN of the Amazon Web Services account that created the OpsItem.
     */
    CreatedBy?: String;
    /**
     * The type of OpsItem. Systems Manager supports the following types of OpsItems:    /aws/issue  This type of OpsItem is used for default OpsItems created by OpsCenter.     /aws/changerequest  This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change requests.     /aws/insights  This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate OpsItems.   
     */
    OpsItemType?: OpsItemType;
    /**
     * The date and time the OpsItem was created.
     */
    CreatedTime?: DateTime;
    /**
     * The OpsItem description.
     */
    Description?: OpsItemDescription;
    /**
     * The ARN of the Amazon Web Services account that last updated the OpsItem.
     */
    LastModifiedBy?: String;
    /**
     * The date and time the OpsItem was last updated.
     */
    LastModifiedTime?: DateTime;
    /**
     * The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where notifications are sent when this OpsItem is edited or changed.
     */
    Notifications?: OpsItemNotifications;
    /**
     * The importance of this OpsItem in relation to other OpsItems in the system.
     */
    Priority?: OpsItemPriority;
    /**
     * One or more OpsItems that share something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
     */
    RelatedOpsItems?: RelatedOpsItems;
    /**
     * The OpsItem status. Status can be Open, In Progress, or Resolved. For more information, see Editing OpsItem details in the Amazon Web Services Systems Manager User Guide.
     */
    Status?: OpsItemStatus;
    /**
     * The ID of the OpsItem.
     */
    OpsItemId?: OpsItemId;
    /**
     * The version of this OpsItem. Each time the OpsItem is edited the version number increments by one.
     */
    Version?: String;
    /**
     * A short heading that describes the nature of the OpsItem and the impacted resource.
     */
    Title?: OpsItemTitle;
    /**
     * The origin of the OpsItem, such as Amazon EC2 or Systems Manager. The impacted resource is a subset of source.
     */
    Source?: OpsItemSource;
    /**
     * Operational data is custom data that provides useful reference details about the OpsItem. For example, you can specify log files, error strings, license keys, troubleshooting tips, or other relevant data. You enter operational data as key-value pairs. The key has a maximum length of 128 characters. The value has a maximum size of 20 KB.  Operational data keys can't begin with the following: amazon, aws, amzn, ssm, /amazon, /aws, /amzn, /ssm.  You can choose to make the data searchable by other users in the account or you can restrict search access. Searchable data means that all users with access to the OpsItem Overview page (as provided by the DescribeOpsItems API operation) can view and search on the specified data. Operational data that isn't searchable is only viewable by users who have access to the OpsItem (as provided by the GetOpsItem API operation). Use the /aws/resources key in OperationalData to specify a related resource in the request. Use the /aws/automations key in OperationalData to associate an Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see Creating OpsItems manually in the Amazon Web Services Systems Manager User Guide.
     */
    OperationalData?: OpsItemOperationalData;
    /**
     * An OpsItem category. Category options include: Availability, Cost, Performance, Recovery, Security.
     */
    Category?: OpsItemCategory;
    /**
     * The severity of the OpsItem. Severity options range from 1 to 4.
     */
    Severity?: OpsItemSeverity;
    /**
     * The time a runbook workflow started. Currently reported only for the OpsItem type /aws/changerequest.
     */
    ActualStartTime?: DateTime;
    /**
     * The time a runbook workflow ended. Currently reported only for the OpsItem type /aws/changerequest.
     */
    ActualEndTime?: DateTime;
    /**
     * The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type /aws/changerequest.
     */
    PlannedStartTime?: DateTime;
    /**
     * The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type /aws/changerequest.
     */
    PlannedEndTime?: DateTime;
    /**
     * The OpsItem Amazon Resource Name (ARN).
     */
    OpsItemArn?: OpsItemArn;
  }
  export type OpsItemAccountId = string;
  export type OpsItemArn = string;
  export type OpsItemCategory = string;
  export type OpsItemDataKey = string;
  export type OpsItemDataType = "SearchableString"|"String"|string;
  export interface OpsItemDataValue {
    /**
     * The value of the OperationalData key.
     */
    Value?: OpsItemDataValueString;
    /**
     * The type of key-value pair. Valid types include SearchableString and String.
     */
    Type?: OpsItemDataType;
  }
  export type OpsItemDataValueString = string;
  export type OpsItemDescription = string;
  export interface OpsItemEventFilter {
    /**
     * The name of the filter key. Currently, the only supported value is OpsItemId.
     */
    Key: OpsItemEventFilterKey;
    /**
     * The values for the filter, consisting of one or more OpsItem IDs.
     */
    Values: OpsItemEventFilterValues;
    /**
     * The operator used by the filter call. Currently, the only supported value is Equal.
     */
    Operator: OpsItemEventFilterOperator;
  }
  export type OpsItemEventFilterKey = "OpsItemId"|string;
  export type OpsItemEventFilterOperator = "Equal"|string;
  export type OpsItemEventFilterValue = string;
  export type OpsItemEventFilterValues = OpsItemEventFilterValue[];
  export type OpsItemEventFilters = OpsItemEventFilter[];
  export type OpsItemEventMaxResults = number;
  export type OpsItemEventSummaries = OpsItemEventSummary[];
  export interface OpsItemEventSummary {
    /**
     * The ID of the OpsItem.
     */
    OpsItemId?: String;
    /**
     * The ID of the OpsItem event.
     */
    EventId?: String;
    /**
     * The source of the OpsItem event.
     */
    Source?: String;
    /**
     * The type of information provided as a detail.
     */
    DetailType?: String;
    /**
     * Specific information about the OpsItem event.
     */
    Detail?: String;
    /**
     * Information about the user or resource that created the OpsItem event.
     */
    CreatedBy?: OpsItemIdentity;
    /**
     * The date and time the OpsItem event was created.
     */
    CreatedTime?: DateTime;
  }
  export interface OpsItemFilter {
    /**
     * The name of the filter.
     */
    Key: OpsItemFilterKey;
    /**
     * The filter value.
     */
    Values: OpsItemFilterValues;
    /**
     * The operator used by the filter call.
     */
    Operator: OpsItemFilterOperator;
  }
  export type OpsItemFilterKey = "Status"|"CreatedBy"|"Source"|"Priority"|"Title"|"OpsItemId"|"CreatedTime"|"LastModifiedTime"|"ActualStartTime"|"ActualEndTime"|"PlannedStartTime"|"PlannedEndTime"|"OperationalData"|"OperationalDataKey"|"OperationalDataValue"|"ResourceId"|"AutomationId"|"Category"|"Severity"|"OpsItemType"|"ChangeRequestByRequesterArn"|"ChangeRequestByRequesterName"|"ChangeRequestByApproverArn"|"ChangeRequestByApproverName"|"ChangeRequestByTemplate"|"ChangeRequestByTargetsResourceGroup"|"InsightByType"|"AccountId"|string;
  export type OpsItemFilterOperator = "Equal"|"Contains"|"GreaterThan"|"LessThan"|string;
  export type OpsItemFilterValue = string;
  export type OpsItemFilterValues = OpsItemFilterValue[];
  export type OpsItemFilters = OpsItemFilter[];
  export type OpsItemId = string;
  export interface OpsItemIdentity {
    /**
     * The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem event.
     */
    Arn?: String;
  }
  export type OpsItemMaxResults = number;
  export interface OpsItemNotification {
    /**
     * The Amazon Resource Name (ARN) of an Amazon Simple Notification Service (Amazon SNS) topic where notifications are sent when this OpsItem is edited or changed.
     */
    Arn?: String;
  }
  export type OpsItemNotifications = OpsItemNotification[];
  export type OpsItemOperationalData = {[key: string]: OpsItemDataValue};
  export type OpsItemOpsDataKeysList = String[];
  export type OpsItemPriority = number;
  export type OpsItemRelatedItemAssociationId = string;
  export type OpsItemRelatedItemAssociationResourceType = string;
  export type OpsItemRelatedItemAssociationResourceUri = string;
  export type OpsItemRelatedItemAssociationType = string;
  export type OpsItemRelatedItemSummaries = OpsItemRelatedItemSummary[];
  export interface OpsItemRelatedItemSummary {
    /**
     * The OpsItem ID.
     */
    OpsItemId?: OpsItemId;
    /**
     * The association ID.
     */
    AssociationId?: OpsItemRelatedItemAssociationId;
    /**
     * The resource type.
     */
    ResourceType?: OpsItemRelatedItemAssociationResourceType;
    /**
     * The association type.
     */
    AssociationType?: OpsItemRelatedItemAssociationType;
    /**
     * The Amazon Resource Name (ARN) of the related-item resource.
     */
    ResourceUri?: OpsItemRelatedItemAssociationResourceUri;
    CreatedBy?: OpsItemIdentity;
    /**
     * The time the related-item association was created.
     */
    CreatedTime?: DateTime;
    LastModifiedBy?: OpsItemIdentity;
    /**
     * The time the related-item association was last updated.
     */
    LastModifiedTime?: DateTime;
  }
  export interface OpsItemRelatedItemsFilter {
    /**
     * The name of the filter key. Supported values include ResourceUri, ResourceType, or AssociationId.
     */
    Key: OpsItemRelatedItemsFilterKey;
    /**
     * The values for the filter.
     */
    Values: OpsItemRelatedItemsFilterValues;
    /**
     * The operator used by the filter call. The only supported operator is EQUAL.
     */
    Operator: OpsItemRelatedItemsFilterOperator;
  }
  export type OpsItemRelatedItemsFilterKey = "ResourceType"|"AssociationId"|"ResourceUri"|string;
  export type OpsItemRelatedItemsFilterOperator = "Equal"|string;
  export type OpsItemRelatedItemsFilterValue = string;
  export type OpsItemRelatedItemsFilterValues = OpsItemRelatedItemsFilterValue[];
  export type OpsItemRelatedItemsFilters = OpsItemRelatedItemsFilter[];
  export type OpsItemRelatedItemsMaxResults = number;
  export type OpsItemSeverity = string;
  export type OpsItemSource = string;
  export type OpsItemStatus = "Open"|"InProgress"|"Resolved"|"Pending"|"TimedOut"|"Cancelling"|"Cancelled"|"Failed"|"CompletedWithSuccess"|"CompletedWithFailure"|"Scheduled"|"RunbookInProgress"|"PendingChangeCalendarOverride"|"ChangeCalendarOverrideApproved"|"ChangeCalendarOverrideRejected"|"PendingApproval"|"Approved"|"Rejected"|"Closed"|string;
  export type OpsItemSummaries = OpsItemSummary[];
  export interface OpsItemSummary {
    /**
     * The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.
     */
    CreatedBy?: String;
    /**
     * The date and time the OpsItem was created.
     */
    CreatedTime?: DateTime;
    /**
     * The Amazon Resource Name (ARN) of the IAM entity that created the OpsItem.
     */
    LastModifiedBy?: String;
    /**
     * The date and time the OpsItem was last updated.
     */
    LastModifiedTime?: DateTime;
    /**
     * The importance of this OpsItem in relation to other OpsItems in the system.
     */
    Priority?: OpsItemPriority;
    /**
     * The impacted Amazon Web Services resource.
     */
    Source?: OpsItemSource;
    /**
     * The OpsItem status. Status can be Open, In Progress, or Resolved.
     */
    Status?: OpsItemStatus;
    /**
     * The ID of the OpsItem.
     */
    OpsItemId?: OpsItemId;
    /**
     * A short heading that describes the nature of the OpsItem and the impacted resource.
     */
    Title?: OpsItemTitle;
    /**
     * Operational data is custom data that provides useful reference details about the OpsItem. 
     */
    OperationalData?: OpsItemOperationalData;
    /**
     * A list of OpsItems by category.
     */
    Category?: OpsItemCategory;
    /**
     * A list of OpsItems by severity.
     */
    Severity?: OpsItemSeverity;
    /**
     * The type of OpsItem. Systems Manager supports the following types of OpsItems:    /aws/issue  This type of OpsItem is used for default OpsItems created by OpsCenter.     /aws/changerequest  This type of OpsItem is used by Change Manager for reviewing and approving or rejecting change requests.     /aws/insights  This type of OpsItem is used by OpsCenter for aggregating and reporting on duplicate OpsItems.   
     */
    OpsItemType?: OpsItemType;
    /**
     * The time a runbook workflow started. Currently reported only for the OpsItem type /aws/changerequest.
     */
    ActualStartTime?: DateTime;
    /**
     * The time a runbook workflow ended. Currently reported only for the OpsItem type /aws/changerequest.
     */
    ActualEndTime?: DateTime;
    /**
     * The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type /aws/changerequest.
     */
    PlannedStartTime?: DateTime;
    /**
     * The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type /aws/changerequest.
     */
    PlannedEndTime?: DateTime;
  }
  export type OpsItemTitle = string;
  export type OpsItemType = string;
  export interface OpsMetadata {
    /**
     * The ID of the Application Manager application.
     */
    ResourceId?: OpsMetadataResourceId;
    /**
     * The Amazon Resource Name (ARN) of the OpsMetadata Object or blob.
     */
    OpsMetadataArn?: OpsMetadataArn;
    /**
     * The date the OpsMetadata object was last updated.
     */
    LastModifiedDate?: DateTime;
    /**
     * The user name who last updated the OpsMetadata object.
     */
    LastModifiedUser?: String;
    /**
     * The date the OpsMetadata objects was created.
     */
    CreationDate?: DateTime;
  }
  export type OpsMetadataArn = string;
  export interface OpsMetadataFilter {
    /**
     * A filter key.
     */
    Key: OpsMetadataFilterKey;
    /**
     * A filter value.
     */
    Values: OpsMetadataFilterValueList;
  }
  export type OpsMetadataFilterKey = string;
  export type OpsMetadataFilterList = OpsMetadataFilter[];
  export type OpsMetadataFilterValue = string;
  export type OpsMetadataFilterValueList = OpsMetadataFilterValue[];
  export type OpsMetadataList = OpsMetadata[];
  export type OpsMetadataResourceId = string;
  export interface OpsResultAttribute {
    /**
     * Name of the data type. Valid value: AWS:OpsItem, AWS:EC2InstanceInformation, AWS:OpsItemTrendline, or AWS:ComplianceSummary.
     */
    TypeName: OpsDataTypeName;
  }
  export type OpsResultAttributeList = OpsResultAttribute[];
  export interface OutputSource {
    /**
     * The ID of the output source, for example the URL of an S3 bucket.
     */
    OutputSourceId?: OutputSourceId;
    /**
     * The type of source where the association execution details are stored, for example, Amazon S3.
     */
    OutputSourceType?: OutputSourceType;
  }
  export type OutputSourceId = string;
  export type OutputSourceType = string;
  export type OwnerInformation = string;
  export type PSParameterName = string;
  export type PSParameterSelector = string;
  export type PSParameterValue = string;
  export type PSParameterVersion = number;
  export interface Parameter {
    /**
     * The name of the parameter.
     */
    Name?: PSParameterName;
    /**
     * The type of parameter. Valid values include the following: String, StringList, and SecureString.  If type is StringList, the system returns a comma-separated string with no spaces between commas in the Value field. 
     */
    Type?: ParameterType;
    /**
     * The parameter value.  If type is StringList, the system returns a comma-separated string with no spaces between commas in the Value field. 
     */
    Value?: PSParameterValue;
    /**
     * The parameter version.
     */
    Version?: PSParameterVersion;
    /**
     * Either the version number or the label used to retrieve the parameter value. Specify selectors by using one of the following formats: parameter_name:version parameter_name:label
     */
    Selector?: PSParameterSelector;
    /**
     * Applies to parameters that reference information in other Amazon Web Services services. SourceResult is the raw result or response from the source.
     */
    SourceResult?: String;
    /**
     * Date the parameter was last changed or updated and the parameter version was created.
     */
    LastModifiedDate?: DateTime;
    /**
     * The Amazon Resource Name (ARN) of the parameter.
     */
    ARN?: String;
    /**
     * The data type of the parameter, such as text or aws:ec2:image. The default is text.
     */
    DataType?: ParameterDataType;
  }
  export type ParameterDataType = string;
  export type ParameterDescription = string;
  export interface ParameterHistory {
    /**
     * The name of the parameter.
     */
    Name?: PSParameterName;
    /**
     * The type of parameter used.
     */
    Type?: ParameterType;
    /**
     * The ID of the query key used for this parameter.
     */
    KeyId?: ParameterKeyId;
    /**
     * Date the parameter was last changed or updated.
     */
    LastModifiedDate?: DateTime;
    /**
     * Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.
     */
    LastModifiedUser?: String;
    /**
     * Information about the parameter.
     */
    Description?: ParameterDescription;
    /**
     * The parameter value.
     */
    Value?: PSParameterValue;
    /**
     * Parameter names can include the following letters and symbols. a-zA-Z0-9_.-
     */
    AllowedPattern?: AllowedPattern;
    /**
     * The parameter version.
     */
    Version?: PSParameterVersion;
    /**
     * Labels assigned to the parameter version.
     */
    Labels?: ParameterLabelList;
    /**
     * The parameter tier.
     */
    Tier?: ParameterTier;
    /**
     * Information about the policies assigned to a parameter.  Assigning parameter policies in the Amazon Web Services Systems Manager User Guide.
     */
    Policies?: ParameterPolicyList;
    /**
     * The data type of the parameter, such as text or aws:ec2:image. The default is text.
     */
    DataType?: ParameterDataType;
  }
  export type ParameterHistoryList = ParameterHistory[];
  export interface ParameterInlinePolicy {
    /**
     * The JSON text of the policy.
     */
    PolicyText?: String;
    /**
     * The type of policy. Parameter Store, a capability of Amazon Web Services Systems Manager, supports the following policy types: Expiration, ExpirationNotification, and NoChangeNotification. 
     */
    PolicyType?: String;
    /**
     * The status of the policy. Policies report the following statuses: Pending (the policy hasn't been enforced or applied yet), Finished (the policy was applied), Failed (the policy wasn't applied), or InProgress (the policy is being applied now). 
     */
    PolicyStatus?: String;
  }
  export type ParameterKeyId = string;
  export type ParameterLabel = string;
  export type ParameterLabelList = ParameterLabel[];
  export type ParameterList = Parameter[];
  export interface ParameterMetadata {
    /**
     * The parameter name.
     */
    Name?: PSParameterName;
    /**
     * The type of parameter. Valid parameter types include the following: String, StringList, and SecureString.
     */
    Type?: ParameterType;
    /**
     * The ID of the query key used for this parameter.
     */
    KeyId?: ParameterKeyId;
    /**
     * Date the parameter was last changed or updated.
     */
    LastModifiedDate?: DateTime;
    /**
     * Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.
     */
    LastModifiedUser?: String;
    /**
     * Description of the parameter actions.
     */
    Description?: ParameterDescription;
    /**
     * A parameter name can include only the following letters and symbols. a-zA-Z0-9_.-
     */
    AllowedPattern?: AllowedPattern;
    /**
     * The parameter version.
     */
    Version?: PSParameterVersion;
    /**
     * The parameter tier.
     */
    Tier?: ParameterTier;
    /**
     * A list of policies associated with a parameter.
     */
    Policies?: ParameterPolicyList;
    /**
     * The data type of the parameter, such as text or aws:ec2:image. The default is text.
     */
    DataType?: ParameterDataType;
  }
  export type ParameterMetadataList = ParameterMetadata[];
  export type ParameterName = string;
  export type ParameterNameList = PSParameterName[];
  export type ParameterPolicies = string;
  export type ParameterPolicyList = ParameterInlinePolicy[];
  export interface ParameterStringFilter {
    /**
     * The name of the filter. The ParameterStringFilter object is used by the DescribeParameters and GetParametersByPath API operations. However, not all of the pattern values listed for Key can be used with both operations. For DescribeParameters, all of the listed patterns are valid except Label. For GetParametersByPath, the following patterns listed for Key aren't valid: tag, DataType, Name, Path, and Tier. For examples of Amazon Web Services CLI commands demonstrating valid parameter filter constructions, see Searching for Systems Manager parameters in the Amazon Web Services Systems Manager User Guide.
     */
    Key: ParameterStringFilterKey;
    /**
     * For all filters used with DescribeParameters, valid options include Equals and BeginsWith. The Name filter additionally supports the Contains option. (Exception: For filters using the key Path, valid options include Recursive and OneLevel.) For filters used with GetParametersByPath, valid options include Equals and BeginsWith. (Exception: For filters using Label as the Key name, the only valid option is Equals.)
     */
    Option?: ParameterStringQueryOption;
    /**
     * The value you want to search for.
     */
    Values?: ParameterStringFilterValueList;
  }
  export type ParameterStringFilterKey = string;
  export type ParameterStringFilterList = ParameterStringFilter[];
  export type ParameterStringFilterValue = string;
  export type ParameterStringFilterValueList = ParameterStringFilterValue[];
  export type ParameterStringQueryOption = string;
  export type ParameterTier = "Standard"|"Advanced"|"Intelligent-Tiering"|string;
  export type ParameterType = "String"|"StringList"|"SecureString"|string;
  export type ParameterValue = string;
  export type ParameterValueList = ParameterValue[];
  export type Parameters = {[key: string]: ParameterValueList};
  export interface ParametersFilter {
    /**
     * The name of the filter.
     */
    Key: ParametersFilterKey;
    /**
     * The filter values.
     */
    Values: ParametersFilterValueList;
  }
  export type ParametersFilterKey = "Name"|"Type"|"KeyId"|string;
  export type ParametersFilterList = ParametersFilter[];
  export type ParametersFilterValue = string;
  export type ParametersFilterValueList = ParametersFilterValue[];
  export interface Patch {
    /**
     * The ID of the patch. Applies to Windows patches only.  This ID isn't the same as the Microsoft Knowledge Base ID. 
     */
    Id?: PatchId;
    /**
     * The date the patch was released.
     */
    ReleaseDate?: DateTime;
    /**
     * The title of the patch.
     */
    Title?: PatchTitle;
    /**
     * The description of the patch.
     */
    Description?: PatchDescription;
    /**
     * The URL where more information can be obtained about the patch.
     */
    ContentUrl?: PatchContentUrl;
    /**
     * The name of the vendor providing the patch.
     */
    Vendor?: PatchVendor;
    /**
     * The product family the patch is applicable for. For example, Windows or Amazon Linux 2.
     */
    ProductFamily?: PatchProductFamily;
    /**
     * The specific product the patch is applicable for. For example, WindowsServer2016 or AmazonLinux2018.03.
     */
    Product?: PatchProduct;
    /**
     * The classification of the patch. For example, SecurityUpdates, Updates, or CriticalUpdates.
     */
    Classification?: PatchClassification;
    /**
     * The severity of the patch, such as Critical, Important, or Moderate. Applies to Windows patches only.
     */
    MsrcSeverity?: PatchMsrcSeverity;
    /**
     * The Microsoft Knowledge Base ID of the patch. Applies to Windows patches only.
     */
    KbNumber?: PatchKbNumber;
    /**
     * The ID of the Microsoft Security Response Center (MSRC) bulletin the patch is related to. For example, MS14-045. Applies to Windows patches only.
     */
    MsrcNumber?: PatchMsrcNumber;
    /**
     * The language of the patch if it's language-specific.
     */
    Language?: PatchLanguage;
    /**
     * The Advisory ID of the patch. For example, RHSA-2020:3779. Applies to Linux-based managed nodes only.
     */
    AdvisoryIds?: PatchAdvisoryIdList;
    /**
     * The Bugzilla ID of the patch. For example, 1600646. Applies to Linux-based managed nodes only.
     */
    BugzillaIds?: PatchBugzillaIdList;
    /**
     * The Common Vulnerabilities and Exposures (CVE) ID of the patch. For example, CVE-2011-3192. Applies to Linux-based managed nodes only.
     */
    CVEIds?: PatchCVEIdList;
    /**
     * The name of the patch. Applies to Linux-based managed nodes only.
     */
    Name?: PatchName;
    /**
     * The epoch of the patch. For example in pkg-example-EE-20180914-2.2.amzn1.noarch, the epoch value is 20180914-2. Applies to Linux-based managed nodes only.
     */
    Epoch?: PatchEpoch;
    /**
     * The version number of the patch. For example, in example-pkg-1.710.10-2.7.abcd.x86_64, the version number is indicated by -1. Applies to Linux-based managed nodes only.
     */
    Version?: PatchVersion;
    /**
     * The particular release of a patch. For example, in pkg-example-EE-20180914-2.2.amzn1.noarch, the release is 2.amaz1. Applies to Linux-based managed nodes only.
     */
    Release?: PatchRelease;
    /**
     * The architecture of the patch. For example, in example-pkg-0.710.10-2.7.abcd.x86_64, the architecture is indicated by x86_64. Applies to Linux-based managed nodes only.
     */
    Arch?: PatchArch;
    /**
     * The severity level of the patch. For example, CRITICAL or MODERATE.
     */
    Severity?: PatchSeverity;
    /**
     * The source patch repository for the operating system and version, such as trusty-security for Ubuntu Server 14.04 LTE and focal-security for Ubuntu Server 20.04 LTE. Applies to Linux-based managed nodes only.
     */
    Repository?: PatchRepository;
  }
  export type PatchAction = "ALLOW_AS_DEPENDENCY"|"BLOCK"|string;
  export type PatchAdvisoryId = string;
  export type PatchAdvisoryIdList = PatchAdvisoryId[];
  export type PatchArch = string;
  export interface PatchBaselineIdentity {
    /**
     * The ID of the patch baseline.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch baseline.
     */
    BaselineName?: BaselineName;
    /**
     * Defines the operating system the patch baseline applies to. The default value is WINDOWS. 
     */
    OperatingSystem?: OperatingSystem;
    /**
     * The description of the patch baseline.
     */
    BaselineDescription?: BaselineDescription;
    /**
     * Whether this is the default baseline. Amazon Web Services Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.
     */
    DefaultBaseline?: DefaultBaseline;
  }
  export type PatchBaselineIdentityList = PatchBaselineIdentity[];
  export type PatchBaselineMaxResults = number;
  export type PatchBugzillaId = string;
  export type PatchBugzillaIdList = PatchBugzillaId[];
  export type PatchCVEId = string;
  export type PatchCVEIdList = PatchCVEId[];
  export type PatchCVEIds = string;
  export type PatchClassification = string;
  export interface PatchComplianceData {
    /**
     * The title of the patch.
     */
    Title: PatchTitle;
    /**
     * The operating system-specific ID of the patch.
     */
    KBId: PatchKbNumber;
    /**
     * The classification of the patch, such as SecurityUpdates, Updates, and CriticalUpdates.
     */
    Classification: PatchClassification;
    /**
     * The severity of the patch such as Critical, Important, and Moderate.
     */
    Severity: PatchSeverity;
    /**
     * The state of the patch on the managed node, such as INSTALLED or FAILED. For descriptions of each patch state, see About patch compliance in the Amazon Web Services Systems Manager User Guide.
     */
    State: PatchComplianceDataState;
    /**
     * The date/time the patch was installed on the managed node. Not all operating systems provide this level of information.
     */
    InstalledTime: DateTime;
    /**
     * The IDs of one or more Common Vulnerabilities and Exposure (CVE) issues that are resolved by the patch.
     */
    CVEIds?: PatchCVEIds;
  }
  export type PatchComplianceDataList = PatchComplianceData[];
  export type PatchComplianceDataState = "INSTALLED"|"INSTALLED_OTHER"|"INSTALLED_PENDING_REBOOT"|"INSTALLED_REJECTED"|"MISSING"|"NOT_APPLICABLE"|"FAILED"|string;
  export type PatchComplianceLevel = "CRITICAL"|"HIGH"|"MEDIUM"|"LOW"|"INFORMATIONAL"|"UNSPECIFIED"|string;
  export type PatchComplianceMaxResults = number;
  export type PatchContentUrl = string;
  export type PatchCriticalNonCompliantCount = number;
  export type PatchDeploymentStatus = "APPROVED"|"PENDING_APPROVAL"|"EXPLICIT_APPROVED"|"EXPLICIT_REJECTED"|string;
  export type PatchDescription = string;
  export type PatchEpoch = number;
  export type PatchFailedCount = number;
  export interface PatchFilter {
    /**
     * The key for the filter. Run the DescribePatchProperties command to view lists of valid keys for each operating system type.
     */
    Key: PatchFilterKey;
    /**
     * The value for the filter key. Run the DescribePatchProperties command to view lists of valid values for each key based on operating system type.
     */
    Values: PatchFilterValueList;
  }
  export interface PatchFilterGroup {
    /**
     * The set of patch filters that make up the group.
     */
    PatchFilters: PatchFilterList;
  }
  export type PatchFilterKey = "ARCH"|"ADVISORY_ID"|"BUGZILLA_ID"|"PATCH_SET"|"PRODUCT"|"PRODUCT_FAMILY"|"CLASSIFICATION"|"CVE_ID"|"EPOCH"|"MSRC_SEVERITY"|"NAME"|"PATCH_ID"|"SECTION"|"PRIORITY"|"REPOSITORY"|"RELEASE"|"SEVERITY"|"SECURITY"|"VERSION"|string;
  export type PatchFilterList = PatchFilter[];
  export type PatchFilterValue = string;
  export type PatchFilterValueList = PatchFilterValue[];
  export type PatchGroup = string;
  export type PatchGroupList = PatchGroup[];
  export interface PatchGroupPatchBaselineMapping {
    /**
     * The name of the patch group registered with the patch baseline.
     */
    PatchGroup?: PatchGroup;
    /**
     * The patch baseline the patch group is registered with.
     */
    BaselineIdentity?: PatchBaselineIdentity;
  }
  export type PatchGroupPatchBaselineMappingList = PatchGroupPatchBaselineMapping[];
  export type PatchId = string;
  export type PatchIdList = PatchId[];
  export type PatchInstalledCount = number;
  export type PatchInstalledOtherCount = number;
  export type PatchInstalledPendingRebootCount = number;
  export type PatchInstalledRejectedCount = number;
  export type PatchKbNumber = string;
  export type PatchLanguage = string;
  export type PatchList = Patch[];
  export type PatchMissingCount = number;
  export type PatchMsrcNumber = string;
  export type PatchMsrcSeverity = string;
  export type PatchName = string;
  export type PatchNotApplicableCount = number;
  export type PatchOperationType = "Scan"|"Install"|string;
  export interface PatchOrchestratorFilter {
    /**
     * The key for the filter.
     */
    Key?: PatchOrchestratorFilterKey;
    /**
     * The value for the filter.
     */
    Values?: PatchOrchestratorFilterValues;
  }
  export type PatchOrchestratorFilterKey = string;
  export type PatchOrchestratorFilterList = PatchOrchestratorFilter[];
  export type PatchOrchestratorFilterValue = string;
  export type PatchOrchestratorFilterValues = PatchOrchestratorFilterValue[];
  export type PatchOtherNonCompliantCount = number;
  export type PatchProduct = string;
  export type PatchProductFamily = string;
  export type PatchPropertiesList = PatchPropertyEntry[];
  export type PatchProperty = "PRODUCT"|"PRODUCT_FAMILY"|"CLASSIFICATION"|"MSRC_SEVERITY"|"PRIORITY"|"SEVERITY"|string;
  export type PatchPropertyEntry = {[key: string]: AttributeValue};
  export type PatchRelease = string;
  export type PatchRepository = string;
  export interface PatchRule {
    /**
     * The patch filter group that defines the criteria for the rule.
     */
    PatchFilterGroup: PatchFilterGroup;
    /**
     * A compliance severity level for all approved patches in a patch baseline.
     */
    ComplianceLevel?: PatchComplianceLevel;
    /**
     * The number of days after the release date of each patch matched by the rule that the patch is marked as approved in the patch baseline. For example, a value of 7 means that patches are approved seven days after they are released. Not supported on Debian Server or Ubuntu Server.
     */
    ApproveAfterDays?: ApproveAfterDays;
    /**
     * The cutoff date for auto approval of released patches. Any patches released on or before this date are installed automatically. Not supported on Debian Server or Ubuntu Server. Enter dates in the format YYYY-MM-DD. For example, 2021-12-31.
     */
    ApproveUntilDate?: PatchStringDateTime;
    /**
     * For managed nodes identified by the approval rule filters, enables a patch baseline to apply non-security updates available in the specified repository. The default value is false. Applies to Linux managed nodes only.
     */
    EnableNonSecurity?: Boolean;
  }
  export interface PatchRuleGroup {
    /**
     * The rules that make up the rule group.
     */
    PatchRules: PatchRuleList;
  }
  export type PatchRuleList = PatchRule[];
  export type PatchSecurityNonCompliantCount = number;
  export type PatchSet = "OS"|"APPLICATION"|string;
  export type PatchSeverity = string;
  export interface PatchSource {
    /**
     * The name specified to identify the patch source.
     */
    Name: PatchSourceName;
    /**
     * The specific operating system versions a patch repository applies to, such as "Ubuntu16.04", "AmazonLinux2016.09", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product values, see PatchFilter.
     */
    Products: PatchSourceProductList;
    /**
     * The value of the yum repo configuration. For example:  [main]   name=MyCustomRepository   baseurl=https://my-custom-repository   enabled=1   For information about other options available for your yum repository configuration, see dnf.conf(5). 
     */
    Configuration: PatchSourceConfiguration;
  }
  export type PatchSourceConfiguration = string;
  export type PatchSourceList = PatchSource[];
  export type PatchSourceName = string;
  export type PatchSourceProduct = string;
  export type PatchSourceProductList = PatchSourceProduct[];
  export interface PatchStatus {
    /**
     * The approval status of a patch.
     */
    DeploymentStatus?: PatchDeploymentStatus;
    /**
     * The compliance severity level for a patch.
     */
    ComplianceLevel?: PatchComplianceLevel;
    /**
     * The date the patch was approved (or will be approved if the status is PENDING_APPROVAL).
     */
    ApprovalDate?: DateTime;
  }
  export type PatchStringDateTime = string;
  export type PatchTitle = string;
  export type PatchUnreportedNotApplicableCount = number;
  export type PatchVendor = string;
  export type PatchVersion = string;
  export type PingStatus = "Online"|"ConnectionLost"|"Inactive"|string;
  export type PlatformType = "Windows"|"Linux"|"MacOS"|string;
  export type PlatformTypeList = PlatformType[];
  export type Policy = string;
  export type PolicyHash = string;
  export type PolicyId = string;
  export type Product = string;
  export interface ProgressCounters {
    /**
     * The total number of steps run in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
     */
    TotalSteps?: Integer;
    /**
     * The total number of steps that successfully completed in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
     */
    SuccessSteps?: Integer;
    /**
     * The total number of steps that failed to run in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
     */
    FailedSteps?: Integer;
    /**
     * The total number of steps that the system cancelled in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
     */
    CancelledSteps?: Integer;
    /**
     * The total number of steps that timed out in all specified Amazon Web Services Regions and Amazon Web Services accounts for the current Automation execution.
     */
    TimedOutSteps?: Integer;
  }
  export interface PutComplianceItemsRequest {
    /**
     * Specify an ID for this resource. For a managed node, this is the node ID.
     */
    ResourceId: ComplianceResourceId;
    /**
     * Specify the type of resource. ManagedInstance is currently the only supported resource type.
     */
    ResourceType: ComplianceResourceType;
    /**
     * Specify the compliance type. For example, specify Association (for a State Manager association), Patch, or Custom:string.
     */
    ComplianceType: ComplianceTypeName;
    /**
     * A summary of the call execution that includes an execution ID, the type of execution (for example, Command), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
     */
    ExecutionSummary: ComplianceExecutionSummary;
    /**
     * Information about the compliance as defined by the resource type. For example, for a patch compliance type, Items includes information about the PatchSeverity, Classification, and so on.
     */
    Items: ComplianceItemEntryList;
    /**
     * MD5 or SHA-256 content hash. The content hash is used to determine if existing information should be overwritten or ignored. If the content hashes match, the request to put compliance information is ignored.
     */
    ItemContentHash?: ComplianceItemContentHash;
    /**
     * The mode for uploading compliance items. You can specify COMPLETE or PARTIAL. In COMPLETE mode, the system overwrites all existing compliance information for the resource. You must provide a full list of compliance items each time you send the request. In PARTIAL mode, the system overwrites compliance information for a specific association. The association must be configured with SyncCompliance set to MANUAL. By default, all requests use COMPLETE mode.  This attribute is only valid for association compliance. 
     */
    UploadType?: ComplianceUploadType;
  }
  export interface PutComplianceItemsResult {
  }
  export type PutInventoryMessage = string;
  export interface PutInventoryRequest {
    /**
     * An managed node ID where you want to add or update inventory items.
     */
    InstanceId: InstanceId;
    /**
     * The inventory items that you want to add or update on managed nodes.
     */
    Items: InventoryItemList;
  }
  export interface PutInventoryResult {
    /**
     * Information about the request.
     */
    Message?: PutInventoryMessage;
  }
  export interface PutParameterRequest {
    /**
     * The fully qualified name of the parameter that you want to add to the system. The fully qualified name includes the complete hierarchy of the parameter path and name. For parameters in a hierarchy, you must include a leading forward slash character (/) when you create or reference a parameter. For example: /Dev/DBServer/MySQL/db-string13  Naming Constraints:   Parameter names are case sensitive.   A parameter name must be unique within an Amazon Web Services Region   A parameter name can't be prefixed with "aws" or "ssm" (case-insensitive).   Parameter names can include only the following symbols and letters: a-zA-Z0-9_.-  In addition, the slash character ( / ) is used to delineate hierarchies in parameter names. For example: /Dev/Production/East/Project-ABC/MyParameter    A parameter name can't include spaces.   Parameter hierarchies are limited to a maximum depth of fifteen levels.   For additional information about valid values for parameter names, see Creating Systems Manager parameters in the Amazon Web Services Systems Manager User Guide.  The maximum length constraint of 2048 characters listed below includes 1037 characters reserved for internal use by Systems Manager. The maximum length for a parameter name that you create is 1011 characters. This includes the characters in the ARN that precede the name you specify, such as arn:aws:ssm:us-east-2:111122223333:parameter/. 
     */
    Name: PSParameterName;
    /**
     * Information about the parameter that you want to add to the system. Optional but recommended.  Don't enter personally identifiable information in this field. 
     */
    Description?: ParameterDescription;
    /**
     * The parameter value that you want to add to the system. Standard parameters have a value limit of 4 KB. Advanced parameters have a value limit of 8 KB.  Parameters can't be referenced or nested in the values of other parameters. You can't include {{}} or {{ssm:parameter-name}} in a parameter value. 
     */
    Value: PSParameterValue;
    /**
     * The type of parameter that you want to add to the system.   SecureString isn't currently supported for CloudFormation templates.  Items in a StringList must be separated by a comma (,). You can't use other punctuation or special character to escape items in the list. If you have a parameter value that requires a comma, then use the String data type.  Specifying a parameter type isn't required when updating a parameter. You must specify a parameter type when creating a parameter. 
     */
    Type?: ParameterType;
    /**
     * The Key Management Service (KMS) ID that you want to use to encrypt a parameter. Either the default KMS key automatically assigned to your Amazon Web Services account or a custom key. Required for parameters that use the SecureString data type. If you don't specify a key ID, the system uses the default key associated with your Amazon Web Services account.   To use your default KMS key, choose the SecureString data type, and do not specify the Key ID when you create the parameter. The system automatically populates Key ID with your default KMS key.   To use a custom KMS key, choose the SecureString data type with the Key ID parameter.  
     */
    KeyId?: ParameterKeyId;
    /**
     * Overwrite an existing parameter. The default value is false.
     */
    Overwrite?: Boolean;
    /**
     * A regular expression used to validate the parameter value. For example, for String types with values restricted to numbers, you can specify the following: AllowedPattern=^\d+$ 
     */
    AllowedPattern?: AllowedPattern;
    /**
     * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a Systems Manager parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter. In this case, you could specify the following key-value pairs:    Key=Resource,Value=S3bucket     Key=OS,Value=Windows     Key=ParameterType,Value=LicenseKey     To add tags to an existing Systems Manager parameter, use the AddTagsToResource operation. 
     */
    Tags?: TagList;
    /**
     * The parameter tier to assign to a parameter. Parameter Store offers a standard tier and an advanced tier for parameters. Standard parameters have a content size limit of 4 KB and can't be configured to use parameter policies. You can create a maximum of 10,000 standard parameters for each Region in an Amazon Web Services account. Standard parameters are offered at no additional cost.  Advanced parameters have a content size limit of 8 KB and can be configured to use parameter policies. You can create a maximum of 100,000 advanced parameters for each Region in an Amazon Web Services account. Advanced parameters incur a charge. For more information, see Standard and advanced parameter tiers in the Amazon Web Services Systems Manager User Guide. You can change a standard parameter to an advanced parameter any time. But you can't revert an advanced parameter to a standard parameter. Reverting an advanced parameter to a standard parameter would result in data loss because the system would truncate the size of the parameter from 8 KB to 4 KB. Reverting would also remove any policies attached to the parameter. Lastly, advanced parameters use a different form of encryption than standard parameters.  If you no longer need an advanced parameter, or if you no longer want to incur charges for an advanced parameter, you must delete it and recreate it as a new standard parameter.   Using the Default Tier Configuration  In PutParameter requests, you can specify the tier to create the parameter in. Whenever you specify a tier in the request, Parameter Store creates or updates the parameter according to that request. However, if you don't specify a tier in a request, Parameter Store assigns the tier based on the current Parameter Store default tier configuration. The default tier when you begin using Parameter Store is the standard-parameter tier. If you use the advanced-parameter tier, you can specify one of the following as the default:    Advanced: With this option, Parameter Store evaluates all requests as advanced parameters.     Intelligent-Tiering: With this option, Parameter Store evaluates each request to determine if the parameter is standard or advanced.  If the request doesn't include any options that require an advanced parameter, the parameter is created in the standard-parameter tier. If one or more options requiring an advanced parameter are included in the request, Parameter Store create a parameter in the advanced-parameter tier. This approach helps control your parameter-related costs by always creating standard parameters unless an advanced parameter is necessary.    Options that require an advanced parameter include the following:   The content size of the parameter is more than 4 KB.   The parameter uses a parameter policy.   More than 10,000 parameters already exist in your Amazon Web Services account in the current Amazon Web Services Region.   For more information about configuring the default tier option, see Specifying a default parameter tier in the Amazon Web Services Systems Manager User Guide.
     */
    Tier?: ParameterTier;
    /**
     * One or more policies to apply to a parameter. This operation takes a JSON array. Parameter Store, a capability of Amazon Web Services Systems Manager supports the following policy types: Expiration: This policy deletes the parameter after it expires. When you create the policy, you specify the expiration date. You can update the expiration date and time by updating the policy. Updating the parameter doesn't affect the expiration date and time. When the expiration time is reached, Parameter Store deletes the parameter. ExpirationNotification: This policy initiates an event in Amazon CloudWatch Events that notifies you about the expiration. By using this policy, you can receive notification before or after the expiration time is reached, in units of days or hours. NoChangeNotification: This policy initiates a CloudWatch Events event if a parameter hasn't been modified for a specified period of time. This policy type is useful when, for example, a secret needs to be changed within a period of time, but it hasn't been changed. All existing policies are preserved until you send new policies or an empty policy. For more information about parameter policies, see Assigning parameter policies. 
     */
    Policies?: ParameterPolicies;
    /**
     * The data type for a String parameter. Supported data types include plain text and Amazon Machine Image (AMI) IDs.  The following data type values are supported.     text     aws:ec2:image     aws:ssm:integration    When you create a String parameter and specify aws:ec2:image, Amazon Web Services Systems Manager validates the parameter value is in the required format, such as ami-12345abcdeEXAMPLE, and that the specified AMI is available in your Amazon Web Services account. For more information, see Native parameter support for Amazon Machine Image (AMI) IDs in the Amazon Web Services Systems Manager User Guide.
     */
    DataType?: ParameterDataType;
  }
  export interface PutParameterResult {
    /**
     * The new version number of a parameter. If you edit a parameter value, Parameter Store automatically creates a new version and assigns this new version a unique ID. You can reference a parameter version ID in API operations or in Systems Manager documents (SSM documents). By default, if you don't specify a specific version, the system returns the latest parameter value when a parameter is called.
     */
    Version?: PSParameterVersion;
    /**
     * The tier assigned to the parameter.
     */
    Tier?: ParameterTier;
  }
  export interface PutResourcePolicyRequest {
    /**
     * Amazon Resource Name (ARN) of the resource to which you want to attach a policy.
     */
    ResourceArn: ResourceArnString;
    /**
     * A policy you want to associate with a resource.
     */
    Policy: Policy;
    /**
     * The policy ID.
     */
    PolicyId?: PolicyId;
    /**
     * ID of the current policy version. The hash helps to prevent a situation where multiple users attempt to overwrite a policy. You must provide this hash when updating or deleting a policy.
     */
    PolicyHash?: PolicyHash;
  }
  export interface PutResourcePolicyResponse {
    /**
     * The policy ID. To update a policy, you must specify PolicyId and PolicyHash.
     */
    PolicyId?: PolicyId;
    /**
     * ID of the current policy version.
     */
    PolicyHash?: PolicyHash;
  }
  export type RebootOption = "RebootIfNeeded"|"NoReboot"|string;
  export type Region = string;
  export type Regions = Region[];
  export interface RegisterDefaultPatchBaselineRequest {
    /**
     * The ID of the patch baseline that should be the default patch baseline.
     */
    BaselineId: BaselineId;
  }
  export interface RegisterDefaultPatchBaselineResult {
    /**
     * The ID of the default patch baseline.
     */
    BaselineId?: BaselineId;
  }
  export interface RegisterPatchBaselineForPatchGroupRequest {
    /**
     * The ID of the patch baseline to register with the patch group.
     */
    BaselineId: BaselineId;
    /**
     * The name of the patch group to be registered with the patch baseline.
     */
    PatchGroup: PatchGroup;
  }
  export interface RegisterPatchBaselineForPatchGroupResult {
    /**
     * The ID of the patch baseline the patch group was registered with.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch group registered with the patch baseline.
     */
    PatchGroup?: PatchGroup;
  }
  export interface RegisterTargetWithMaintenanceWindowRequest {
    /**
     * The ID of the maintenance window the target should be registered with.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The type of target being registered with the maintenance window.
     */
    ResourceType: MaintenanceWindowResourceType;
    /**
     * The targets to register with the maintenance window. In other words, the managed nodes to run commands on when the maintenance window runs.  If a single maintenance window task is registered with multiple targets, its task invocations occur sequentially and not in parallel. If your task must run on multiple targets at the same time, register a task for each target individually and assign each task the same priority level.  You can specify targets using managed node IDs, resource group names, or tags that have been applied to managed nodes.  Example 1: Specify managed node IDs  Key=InstanceIds,Values=&lt;instance-id-1&gt;,&lt;instance-id-2&gt;,&lt;instance-id-3&gt;   Example 2: Use tag key-pairs applied to managed nodes  Key=tag:&lt;my-tag-key&gt;,Values=&lt;my-tag-value-1&gt;,&lt;my-tag-value-2&gt;   Example 3: Use tag-keys applied to managed nodes  Key=tag-key,Values=&lt;my-tag-key-1&gt;,&lt;my-tag-key-2&gt;   Example 4: Use resource group names  Key=resource-groups:Name,Values=&lt;resource-group-name&gt;   Example 5: Use filters for resource group types  Key=resource-groups:ResourceTypeFilters,Values=&lt;resource-type-1&gt;,&lt;resource-type-2&gt;   For Key=resource-groups:ResourceTypeFilters, specify resource types in the following format  Key=resource-groups:ResourceTypeFilters,Values=AWS::EC2::INSTANCE,AWS::EC2::VPC   For more information about these examples formats, including the best use case for each one, see Examples: Register targets with a maintenance window in the Amazon Web Services Systems Manager User Guide.
     */
    Targets: Targets;
    /**
     * User-provided value that will be included in any Amazon CloudWatch Events events raised while running tasks for these targets in this maintenance window.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * An optional name for the target.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description for the target.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: ClientToken;
  }
  export interface RegisterTargetWithMaintenanceWindowResult {
    /**
     * The ID of the target definition in this maintenance window.
     */
    WindowTargetId?: MaintenanceWindowTargetId;
  }
  export interface RegisterTaskWithMaintenanceWindowRequest {
    /**
     * The ID of the maintenance window the task should be added to.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The targets (either managed nodes or maintenance window targets).  One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see Registering maintenance window tasks without targets in the Amazon Web Services Systems Manager User Guide.  Specify managed nodes using the following format:   Key=InstanceIds,Values=&lt;instance-id-1&gt;,&lt;instance-id-2&gt;  Specify maintenance window targets using the following format:  Key=WindowTargetIds,Values=&lt;window-target-id-1&gt;,&lt;window-target-id-2&gt; 
     */
    Targets?: Targets;
    /**
     * The ARN of the task to run.
     */
    TaskArn: MaintenanceWindowTaskArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses your account's service-linked role. If no service-linked role for Systems Manager exists in your account, it is created when you run RegisterTaskWithMaintenanceWindow. For more information, see the following topics in the in the Amazon Web Services Systems Manager User Guide:    Using service-linked roles for Systems Manager     Should I use a service-linked role or a custom service role to run maintenance window tasks?    
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The type of task being registered.
     */
    TaskType: MaintenanceWindowTaskType;
    /**
     * The parameters that should be passed to the task when it is run.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The parameters that the task should use during execution. Populate only the fields that match the task type. All other fields should be empty. 
     */
    TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    /**
     * The priority of the task in the maintenance window, the lower the number the higher the priority. Tasks in a maintenance window are scheduled in priority order with tasks that have the same priority scheduled in parallel.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The maximum number of targets this task can be run for, in parallel.  Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task. 
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed before this task stops being scheduled.  Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task. 
     */
    MaxErrors?: MaxErrors;
    /**
     * A structure containing information about an Amazon Simple Storage Service (Amazon S3) bucket to write managed node-level logs to.    LoggingInfo has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * An optional name for the task.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description for the task.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: ClientToken;
    /**
     * Indicates whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.     CONTINUE_TASK: When the cutoff time is reached, any tasks that are running continue. The default value.    CANCEL_TASK:   For Automation, Lambda, Step Functions tasks: When the cutoff time is reached, any task invocations that are already running continue, but no new task invocations are started.   For Run Command tasks: When the cutoff time is reached, the system sends a CancelCommand operation that attempts to cancel the command associated with the task. However, there is no guarantee that the command will be terminated and the underlying process stopped.   The status for tasks that are not completed is TIMED_OUT.  
     */
    CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
    /**
     * The CloudWatch alarm you want to apply to your maintenance window task.
     */
    AlarmConfiguration?: AlarmConfiguration;
  }
  export interface RegisterTaskWithMaintenanceWindowResult {
    /**
     * The ID of the task in the maintenance window.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
  }
  export type RegistrationLimit = number;
  export interface RegistrationMetadataItem {
    /**
     * Reserved for internal use.
     */
    Key: RegistrationMetadataKey;
    /**
     * Reserved for internal use.
     */
    Value: RegistrationMetadataValue;
  }
  export type RegistrationMetadataKey = string;
  export type RegistrationMetadataList = RegistrationMetadataItem[];
  export type RegistrationMetadataValue = string;
  export type RegistrationsCount = number;
  export interface RelatedOpsItem {
    /**
     * The ID of an OpsItem related to the current OpsItem.
     */
    OpsItemId: String;
  }
  export type RelatedOpsItems = RelatedOpsItem[];
  export type RemainingCount = number;
  export interface RemoveTagsFromResourceRequest {
    /**
     * The type of resource from which you want to remove a tag.  The ManagedInstance type for this API operation is only for on-premises managed nodes. Specify the name of the managed node in the following format: mi-ID_number . For example, mi-1a2b3c4d5e6f. 
     */
    ResourceType: ResourceTypeForTagging;
    /**
     * The ID of the resource from which you want to remove tags. For example: ManagedInstance: mi-012345abcde MaintenanceWindow: mw-012345abcde  Automation: example-c160-4567-8519-012345abcde  PatchBaseline: pb-012345abcde OpsMetadata object: ResourceID for tagging is created from the Amazon Resource Name (ARN) for the object. Specifically, ResourceID is created from the strings that come after the word opsmetadata in the ARN. For example, an OpsMetadata object with an ARN of arn:aws:ssm:us-east-2:1234567890:opsmetadata/aws/ssm/MyGroup/appmanager has a ResourceID of either aws/ssm/MyGroup/appmanager or /aws/ssm/MyGroup/appmanager. For the Document and Parameter values, use the name of the resource.  The ManagedInstance type for this API operation is only for on-premises managed nodes. Specify the name of the managed node in the following format: mi-ID_number. For example, mi-1a2b3c4d5e6f. 
     */
    ResourceId: ResourceId;
    /**
     * Tag keys that you want to remove from the specified resource.
     */
    TagKeys: KeyList;
  }
  export interface RemoveTagsFromResourceResult {
  }
  export type RequireType = string;
  export interface ResetServiceSettingRequest {
    /**
     * The Amazon Resource Name (ARN) of the service setting to reset. The setting ID can be one of the following.    /ssm/automation/customer-script-log-destination     /ssm/automation/customer-script-log-group-name     /ssm/documents/console/public-sharing-permission     /ssm/managed-instance/activation-tier     /ssm/opsinsights/opscenter     /ssm/parameter-store/default-parameter-tier     /ssm/parameter-store/high-throughput-enabled   
     */
    SettingId: ServiceSettingId;
  }
  export interface ResetServiceSettingResult {
    /**
     * The current, effective service setting after calling the ResetServiceSetting API operation.
     */
    ServiceSetting?: ServiceSetting;
  }
  export interface ResolvedTargets {
    /**
     * A list of parameter values sent to targets that resolved during the Automation execution.
     */
    ParameterValues?: TargetParameterList;
    /**
     * A boolean value indicating whether the resolved target list is truncated.
     */
    Truncated?: Boolean;
  }
  export type ResourceArnString = string;
  export interface ResourceComplianceSummaryItem {
    /**
     * The compliance type.
     */
    ComplianceType?: ComplianceTypeName;
    /**
     * The resource type.
     */
    ResourceType?: ComplianceResourceType;
    /**
     * The resource ID.
     */
    ResourceId?: ComplianceResourceId;
    /**
     * The compliance status for the resource.
     */
    Status?: ComplianceStatus;
    /**
     * The highest severity item found for the resource. The resource is compliant for this item.
     */
    OverallSeverity?: ComplianceSeverity;
    /**
     * Information about the execution.
     */
    ExecutionSummary?: ComplianceExecutionSummary;
    /**
     * A list of items that are compliant for the resource.
     */
    CompliantSummary?: CompliantSummary;
    /**
     * A list of items that aren't compliant for the resource.
     */
    NonCompliantSummary?: NonCompliantSummary;
  }
  export type ResourceComplianceSummaryItemList = ResourceComplianceSummaryItem[];
  export type ResourceCount = number;
  export type ResourceCountByStatus = string;
  export type ResourceDataSyncAWSKMSKeyARN = string;
  export interface ResourceDataSyncAwsOrganizationsSource {
    /**
     * If an Amazon Web Services organization is present, this is either OrganizationalUnits or EntireOrganization. For OrganizationalUnits, the data is aggregated from a set of organization units. For EntireOrganization, the data is aggregated from the entire Amazon Web Services organization.
     */
    OrganizationSourceType: ResourceDataSyncOrganizationSourceType;
    /**
     * The Organizations organization units included in the sync.
     */
    OrganizationalUnits?: ResourceDataSyncOrganizationalUnitList;
  }
  export type ResourceDataSyncCreatedTime = Date;
  export interface ResourceDataSyncDestinationDataSharing {
    /**
     * The sharing data type. Only Organization is supported.
     */
    DestinationDataSharingType?: ResourceDataSyncDestinationDataSharingType;
  }
  export type ResourceDataSyncDestinationDataSharingType = string;
  export type ResourceDataSyncEnableAllOpsDataSources = boolean;
  export type ResourceDataSyncIncludeFutureRegions = boolean;
  export interface ResourceDataSyncItem {
    /**
     * The name of the resource data sync.
     */
    SyncName?: ResourceDataSyncName;
    /**
     * The type of resource data sync. If SyncType is SyncToDestination, then the resource data sync synchronizes data to an S3 bucket. If the SyncType is SyncFromSource then the resource data sync synchronizes data from Organizations or from multiple Amazon Web Services Regions.
     */
    SyncType?: ResourceDataSyncType;
    /**
     * Information about the source where the data was synchronized. 
     */
    SyncSource?: ResourceDataSyncSourceWithState;
    /**
     * Configuration information for the target S3 bucket.
     */
    S3Destination?: ResourceDataSyncS3Destination;
    /**
     * The last time the configuration attempted to sync (UTC).
     */
    LastSyncTime?: LastResourceDataSyncTime;
    /**
     * The last time the sync operations returned a status of SUCCESSFUL (UTC).
     */
    LastSuccessfulSyncTime?: LastSuccessfulResourceDataSyncTime;
    /**
     * The date and time the resource data sync was changed. 
     */
    SyncLastModifiedTime?: ResourceDataSyncLastModifiedTime;
    /**
     * The status reported by the last sync.
     */
    LastStatus?: LastResourceDataSyncStatus;
    /**
     * The date and time the configuration was created (UTC).
     */
    SyncCreatedTime?: ResourceDataSyncCreatedTime;
    /**
     * The status message details reported by the last sync.
     */
    LastSyncStatusMessage?: LastResourceDataSyncMessage;
  }
  export type ResourceDataSyncItemList = ResourceDataSyncItem[];
  export type ResourceDataSyncLastModifiedTime = Date;
  export type ResourceDataSyncName = string;
  export type ResourceDataSyncOrganizationSourceType = string;
  export interface ResourceDataSyncOrganizationalUnit {
    /**
     * The Organizations unit ID data source for the sync.
     */
    OrganizationalUnitId?: ResourceDataSyncOrganizationalUnitId;
  }
  export type ResourceDataSyncOrganizationalUnitId = string;
  export type ResourceDataSyncOrganizationalUnitList = ResourceDataSyncOrganizationalUnit[];
  export type ResourceDataSyncS3BucketName = string;
  export interface ResourceDataSyncS3Destination {
    /**
     * The name of the S3 bucket where the aggregated data is stored.
     */
    BucketName: ResourceDataSyncS3BucketName;
    /**
     * An Amazon S3 prefix for the bucket.
     */
    Prefix?: ResourceDataSyncS3Prefix;
    /**
     * A supported sync format. The following format is currently supported: JsonSerDe
     */
    SyncFormat: ResourceDataSyncS3Format;
    /**
     * The Amazon Web Services Region with the S3 bucket targeted by the resource data sync.
     */
    Region: ResourceDataSyncS3Region;
    /**
     * The ARN of an encryption key for a destination in Amazon S3. Must belong to the same Region as the destination S3 bucket.
     */
    AWSKMSKeyARN?: ResourceDataSyncAWSKMSKeyARN;
    /**
     * Enables destination data sharing. By default, this field is null.
     */
    DestinationDataSharing?: ResourceDataSyncDestinationDataSharing;
  }
  export type ResourceDataSyncS3Format = "JsonSerDe"|string;
  export type ResourceDataSyncS3Prefix = string;
  export type ResourceDataSyncS3Region = string;
  export interface ResourceDataSyncSource {
    /**
     * The type of data source for the resource data sync. SourceType is either AwsOrganizations (if an organization is present in Organizations) or SingleAccountMultiRegions.
     */
    SourceType: ResourceDataSyncSourceType;
    /**
     * Information about the AwsOrganizationsSource resource data sync source. A sync source of this type can synchronize data from Organizations.
     */
    AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;
    /**
     * The SyncSource Amazon Web Services Regions included in the resource data sync.
     */
    SourceRegions: ResourceDataSyncSourceRegionList;
    /**
     * Whether to automatically synchronize and aggregate data from new Amazon Web Services Regions when those Regions come online.
     */
    IncludeFutureRegions?: ResourceDataSyncIncludeFutureRegions;
    /**
     * When you create a resource data sync, if you choose one of the Organizations options, then Systems Manager automatically enables all OpsData sources in the selected Amazon Web Services Regions for all Amazon Web Services accounts in your organization (or in the selected organization units). For more information, see About multiple account and Region resource data syncs in the Amazon Web Services Systems Manager User Guide.
     */
    EnableAllOpsDataSources?: ResourceDataSyncEnableAllOpsDataSources;
  }
  export type ResourceDataSyncSourceRegion = string;
  export type ResourceDataSyncSourceRegionList = ResourceDataSyncSourceRegion[];
  export type ResourceDataSyncSourceType = string;
  export interface ResourceDataSyncSourceWithState {
    /**
     * The type of data source for the resource data sync. SourceType is either AwsOrganizations (if an organization is present in Organizations) or singleAccountMultiRegions.
     */
    SourceType?: ResourceDataSyncSourceType;
    /**
     * The field name in SyncSource for the ResourceDataSyncAwsOrganizationsSource type.
     */
    AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;
    /**
     * The SyncSource Amazon Web Services Regions included in the resource data sync.
     */
    SourceRegions?: ResourceDataSyncSourceRegionList;
    /**
     * Whether to automatically synchronize and aggregate data from new Amazon Web Services Regions when those Regions come online.
     */
    IncludeFutureRegions?: ResourceDataSyncIncludeFutureRegions;
    /**
     * The data type name for including resource data sync state. There are four sync states:  OrganizationNotExists: Your organization doesn't exist.  NoPermissions: The system can't locate the service-linked role. This role is automatically created when a user creates a resource data sync in Explorer.  InvalidOrganizationalUnit: You specified or selected an invalid unit in the resource data sync configuration.  TrustedAccessDisabled: You disabled Systems Manager access in the organization in Organizations.
     */
    State?: ResourceDataSyncState;
    /**
     * When you create a resource data sync, if you choose one of the Organizations options, then Systems Manager automatically enables all OpsData sources in the selected Amazon Web Services Regions for all Amazon Web Services accounts in your organization (or in the selected organization units). For more information, see About multiple account and Region resource data syncs in the Amazon Web Services Systems Manager User Guide.
     */
    EnableAllOpsDataSources?: ResourceDataSyncEnableAllOpsDataSources;
  }
  export type ResourceDataSyncState = string;
  export type ResourceDataSyncType = string;
  export type ResourceId = string;
  export type ResourcePolicyMaxResults = number;
  export type ResourceType = "ManagedInstance"|"Document"|"EC2Instance"|string;
  export type ResourceTypeForTagging = "Document"|"ManagedInstance"|"MaintenanceWindow"|"Parameter"|"PatchBaseline"|"OpsItem"|"OpsMetadata"|"Automation"|"Association"|string;
  export type ResponseCode = number;
  export interface ResultAttribute {
    /**
     * Name of the inventory item type. Valid value: AWS:InstanceInformation. Default Value: AWS:InstanceInformation.
     */
    TypeName: InventoryItemTypeName;
  }
  export type ResultAttributeList = ResultAttribute[];
  export interface ResumeSessionRequest {
    /**
     * The ID of the disconnected session to resume.
     */
    SessionId: SessionId;
  }
  export interface ResumeSessionResponse {
    /**
     * The ID of the session.
     */
    SessionId?: SessionId;
    /**
     * An encrypted token value containing session and caller information. Used to authenticate the connection to the managed node.
     */
    TokenValue?: TokenValue;
    /**
     * A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and receive output from the managed node. Format: wss://ssmmessages.region.amazonaws.com/v1/data-channel/session-id?stream=(input|output).  region represents the Region identifier for an Amazon Web Services Region supported by Amazon Web Services Systems Manager, such as us-east-2 for the US East (Ohio) Region. For a list of supported region values, see the Region column in Systems Manager service endpoints in the Amazon Web Services General Reference.  session-id represents the ID of a Session Manager session, such as 1a2b3c4dEXAMPLE.
     */
    StreamUrl?: StreamUrl;
  }
  export interface ReviewInformation {
    /**
     * The time that the reviewer took action on the document review request.
     */
    ReviewedTime?: DateTime;
    /**
     * The current status of the document review request.
     */
    Status?: ReviewStatus;
    /**
     * The reviewer assigned to take action on the document review request.
     */
    Reviewer?: Reviewer;
  }
  export type ReviewInformationList = ReviewInformation[];
  export type ReviewStatus = "APPROVED"|"NOT_REVIEWED"|"PENDING"|"REJECTED"|string;
  export type Reviewer = string;
  export interface Runbook {
    /**
     * The name of the Automation runbook used in a runbook workflow.
     */
    DocumentName: DocumentARN;
    /**
     * The version of the Automation runbook used in a runbook workflow.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The key-value map of execution parameters, which were supplied when calling StartChangeRequestExecution.
     */
    Parameters?: AutomationParameterMap;
    /**
     * The name of the parameter used as the target resource for the rate-controlled runbook workflow. Required if you specify Targets. 
     */
    TargetParameterName?: AutomationParameterKey;
    /**
     * A key-value mapping to target resources that the runbook operation performs tasks on. Required if you specify TargetParameterName.
     */
    Targets?: Targets;
    /**
     * A key-value mapping of runbook parameters to target resources. Both Targets and TargetMaps can't be specified together.
     */
    TargetMaps?: TargetMaps;
    /**
     * The MaxConcurrency value specified by the user when the operation started, indicating the maximum number of resources that the runbook operation can run on at the same time.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The MaxErrors value specified by the user when the execution started, indicating the maximum number of errors that can occur during the operation before the updates are stopped or rolled back.
     */
    MaxErrors?: MaxErrors;
    /**
     * Information about the Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Runbook operation.
     */
    TargetLocations?: TargetLocations;
  }
  export type Runbooks = Runbook[];
  export type S3BucketName = string;
  export type S3KeyPrefix = string;
  export interface S3OutputLocation {
    /**
     * The Amazon Web Services Region of the S3 bucket.
     */
    OutputS3Region?: S3Region;
    /**
     * The name of the S3 bucket.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The S3 bucket subfolder.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
  }
  export interface S3OutputUrl {
    /**
     * A URL for an S3 bucket where you want to store the results of this request.
     */
    OutputUrl?: Url;
  }
  export type S3Region = string;
  export type ScheduleExpression = string;
  export type ScheduleOffset = number;
  export interface ScheduledWindowExecution {
    /**
     * The ID of the maintenance window to be run.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the maintenance window to be run.
     */
    Name?: MaintenanceWindowName;
    /**
     * The time, in ISO-8601 Extended format, that the maintenance window is scheduled to be run.
     */
    ExecutionTime?: MaintenanceWindowStringDateTime;
  }
  export type ScheduledWindowExecutionList = ScheduledWindowExecution[];
  export interface SendAutomationSignalRequest {
    /**
     * The unique identifier for an existing Automation execution that you want to send the signal to.
     */
    AutomationExecutionId: AutomationExecutionId;
    /**
     * The type of signal to send to an Automation execution. 
     */
    SignalType: SignalType;
    /**
     * The data sent with the signal. The data schema depends on the type of signal used in the request. For Approve and Reject signal types, the payload is an optional comment that you can send with the signal type. For example:  Comment="Looks good"  For StartStep and Resume signal types, you must send the name of the Automation step to start or resume as the payload. For example:  StepName="step1"  For the StopStep signal type, you must send the step execution ID as the payload. For example:  StepExecutionId="97fff367-fc5a-4299-aed8-0123456789ab" 
     */
    Payload?: AutomationParameterMap;
  }
  export interface SendAutomationSignalResult {
  }
  export interface SendCommandRequest {
    /**
     * The IDs of the managed nodes where the command should run. Specifying managed node IDs is most useful when you are targeting a limited number of managed nodes, though you can specify up to 50 IDs. To target a larger number of managed nodes, or if you prefer not to list individual node IDs, we recommend using the Targets option instead. Using Targets, which accepts tag key-value pairs to identify the managed nodes to send commands to, you can a send command to tens, hundreds, or thousands of nodes at once. For more information about how to use targets, see Using targets and rate controls to send commands to a fleet in the Amazon Web Services Systems Manager User Guide.
     */
    InstanceIds?: InstanceIdList;
    /**
     * An array of search criteria that targets managed nodes using a Key,Value combination that you specify. Specifying targets is most useful when you want to send a command to a large number of managed nodes at once. Using Targets, which accepts tag key-value pairs to identify managed nodes, you can send a command to tens, hundreds, or thousands of nodes at once. To send a command to a smaller number of managed nodes, you can use the InstanceIds option instead. For more information about how to use targets, see Sending commands to a fleet in the Amazon Web Services Systems Manager User Guide.
     */
    Targets?: Targets;
    /**
     * The name of the Amazon Web Services Systems Manager document (SSM document) to run. This can be a public document or a custom document. To run a shared document belonging to another account, specify the document Amazon Resource Name (ARN). For more information about how to use shared documents, see Using shared SSM documents in the Amazon Web Services Systems Manager User Guide.  If you specify a document name or ARN that hasn't been shared with your account, you receive an InvalidDocument error.  
     */
    DocumentName: DocumentARN;
    /**
     * The SSM document version to use in the request. You can specify $DEFAULT, $LATEST, or a specific version number. If you run commands by using the Command Line Interface (Amazon Web Services CLI), then you must escape the first two options by using a backslash. If you specify a version number, then you don't need to use the backslash. For example: --document-version "\$DEFAULT" --document-version "\$LATEST" --document-version "3"
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The Sha256 or Sha1 hash created by the system when the document was created.   Sha1 hashes have been deprecated. 
     */
    DocumentHash?: DocumentHash;
    /**
     * Sha256 or Sha1.  Sha1 hashes have been deprecated. 
     */
    DocumentHashType?: DocumentHashType;
    /**
     * If this time is reached and the command hasn't already started running, it won't run.
     */
    TimeoutSeconds?: TimeoutSeconds;
    /**
     * User-specified information about the command, such as a brief description of what the command should do.
     */
    Comment?: Comment;
    /**
     * The required and optional parameters specified in the document being run.
     */
    Parameters?: Parameters;
    /**
     * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon Web Services Region of the S3 bucket.
     */
    OutputS3Region?: S3Region;
    /**
     * The name of the S3 bucket where command execution responses should be stored.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The directory structure within the S3 bucket where the responses should be stored.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
    /**
     * (Optional) The maximum number of managed nodes that are allowed to run the command at the same time. You can specify a number such as 10 or a percentage such as 10%. The default value is 50. For more information about how to use MaxConcurrency, see Using concurrency controls in the Amazon Web Services Systems Manager User Guide.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed without the command failing. When the command fails one more time beyond the value of MaxErrors, the systems stops sending the command to additional targets. You can specify a number like 10 or a percentage like 10%. The default value is 0. For more information about how to use MaxErrors, see Using error controls in the Amazon Web Services Systems Manager User Guide.
     */
    MaxErrors?: MaxErrors;
    /**
     * The ARN of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for Run Command commands. This role must provide the sns:Publish permission for your notification topic. For information about creating and using this service role, see Monitoring Systems Manager status changes using Amazon SNS notifications in the Amazon Web Services Systems Manager User Guide.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * Configurations for sending notifications.
     */
    NotificationConfig?: NotificationConfig;
    /**
     * Enables Amazon Web Services Systems Manager to send Run Command output to Amazon CloudWatch Logs. Run Command is a capability of Amazon Web Services Systems Manager.
     */
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
    /**
     * The CloudWatch alarm you want to apply to your command.
     */
    AlarmConfiguration?: AlarmConfiguration;
  }
  export interface SendCommandResult {
    /**
     * The request as it was received by Systems Manager. Also provides the command ID which can be used future references to this request.
     */
    Command?: Command;
  }
  export type ServiceRole = string;
  export interface ServiceSetting {
    /**
     * The ID of the service setting.
     */
    SettingId?: ServiceSettingId;
    /**
     * The value of the service setting.
     */
    SettingValue?: ServiceSettingValue;
    /**
     * The last time the service setting was modified.
     */
    LastModifiedDate?: DateTime;
    /**
     * The ARN of the last modified user. This field is populated only if the setting value was overwritten.
     */
    LastModifiedUser?: String;
    /**
     * The ARN of the service setting.
     */
    ARN?: String;
    /**
     * The status of the service setting. The value can be Default, Customized or PendingUpdate.   Default: The current setting uses a default value provisioned by the Amazon Web Services service team.   Customized: The current setting use a custom value specified by the customer.   PendingUpdate: The current setting uses a default or custom value, but a setting change request is pending approval.  
     */
    Status?: String;
  }
  export type ServiceSettingId = string;
  export type ServiceSettingValue = string;
  export interface Session {
    /**
     * The ID of the session.
     */
    SessionId?: SessionId;
    /**
     * The managed node that the Session Manager session connected to.
     */
    Target?: SessionTarget;
    /**
     * The status of the session. For example, "Connected" or "Terminated".
     */
    Status?: SessionStatus;
    /**
     * The date and time, in ISO-8601 Extended format, when the session began.
     */
    StartDate?: DateTime;
    /**
     * The date and time, in ISO-8601 Extended format, when the session was terminated.
     */
    EndDate?: DateTime;
    /**
     * The name of the Session Manager SSM document used to define the parameters and plugin settings for the session. For example, SSM-SessionManagerRunShell.
     */
    DocumentName?: DocumentName;
    /**
     * The ID of the Amazon Web Services user account that started the session.
     */
    Owner?: SessionOwner;
    /**
     * The reason for connecting to the instance.
     */
    Reason?: SessionReason;
    /**
     * Reserved for future use.
     */
    Details?: SessionDetails;
    /**
     * Reserved for future use.
     */
    OutputUrl?: SessionManagerOutputUrl;
    /**
     * The maximum duration of a session before it terminates.
     */
    MaxSessionDuration?: MaxSessionDuration;
  }
  export type SessionDetails = string;
  export interface SessionFilter {
    /**
     * The name of the filter.
     */
    key: SessionFilterKey;
    /**
     * The filter value. Valid values for each filter key are as follows:   InvokedAfter: Specify a timestamp to limit your results. For example, specify 2018-08-29T00:00:00Z to see sessions that started August 29, 2018, and later.   InvokedBefore: Specify a timestamp to limit your results. For example, specify 2018-08-29T00:00:00Z to see sessions that started before August 29, 2018.   Target: Specify a managed node to which session connections have been made.   Owner: Specify an Amazon Web Services user account to see a list of sessions started by that user.   Status: Specify a valid session status to see a list of all sessions with that status. Status values you can specify include:   Connected   Connecting   Disconnected   Terminated   Terminating   Failed     SessionId: Specify a session ID to return details about the session.  
     */
    value: SessionFilterValue;
  }
  export type SessionFilterKey = "InvokedAfter"|"InvokedBefore"|"Target"|"Owner"|"Status"|"SessionId"|string;
  export type SessionFilterList = SessionFilter[];
  export type SessionFilterValue = string;
  export type SessionId = string;
  export type SessionList = Session[];
  export type SessionManagerCloudWatchOutputUrl = string;
  export interface SessionManagerOutputUrl {
    /**
     * Reserved for future use.
     */
    S3OutputUrl?: SessionManagerS3OutputUrl;
    /**
     * Reserved for future use.
     */
    CloudWatchOutputUrl?: SessionManagerCloudWatchOutputUrl;
  }
  export type SessionManagerParameterName = string;
  export type SessionManagerParameterValue = string;
  export type SessionManagerParameterValueList = SessionManagerParameterValue[];
  export type SessionManagerParameters = {[key: string]: SessionManagerParameterValueList};
  export type SessionManagerS3OutputUrl = string;
  export type SessionMaxResults = number;
  export type SessionOwner = string;
  export type SessionReason = string;
  export type SessionState = "Active"|"History"|string;
  export type SessionStatus = "Connected"|"Connecting"|"Disconnected"|"Terminated"|"Terminating"|"Failed"|string;
  export type SessionTarget = string;
  export interface SeveritySummary {
    /**
     * The total number of resources or compliance items that have a severity level of Critical. Critical severity is determined by the organization that published the compliance items.
     */
    CriticalCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of high. High severity is determined by the organization that published the compliance items.
     */
    HighCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of medium. Medium severity is determined by the organization that published the compliance items.
     */
    MediumCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of low. Low severity is determined by the organization that published the compliance items.
     */
    LowCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of informational. Informational severity is determined by the organization that published the compliance items.
     */
    InformationalCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of unspecified. Unspecified severity is determined by the organization that published the compliance items.
     */
    UnspecifiedCount?: ComplianceSummaryCount;
  }
  export type SharedDocumentVersion = string;
  export type SignalType = "Approve"|"Reject"|"StartStep"|"StopStep"|"Resume"|string;
  export type SnapshotDownloadUrl = string;
  export type SnapshotId = string;
  export type SourceId = string;
  export type SourceType = "AWS::EC2::Instance"|"AWS::IoT::Thing"|"AWS::SSM::ManagedInstance"|string;
  export type StandardErrorContent = string;
  export type StandardOutputContent = string;
  export interface StartAssociationsOnceRequest {
    /**
     * The association IDs that you want to run immediately and only one time.
     */
    AssociationIds: AssociationIdList;
  }
  export interface StartAssociationsOnceResult {
  }
  export interface StartAutomationExecutionRequest {
    /**
     * The name of the SSM document to run. This can be a public document or a custom document. To run a shared document belonging to another account, specify the document ARN. For more information about how to use shared documents, see Using shared SSM documents in the Amazon Web Services Systems Manager User Guide.
     */
    DocumentName: DocumentARN;
    /**
     * The version of the Automation runbook to use for this execution.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * A key-value map of execution parameters, which match the declared parameters in the Automation runbook.
     */
    Parameters?: AutomationParameterMap;
    /**
     * User-provided idempotency token. The token must be unique, is case insensitive, enforces the UUID format, and can't be reused.
     */
    ClientToken?: IdempotencyToken;
    /**
     * The execution mode of the automation. Valid modes include the following: Auto and Interactive. The default mode is Auto.
     */
    Mode?: ExecutionMode;
    /**
     * The name of the parameter used as the target resource for the rate-controlled execution. Required if you specify targets.
     */
    TargetParameterName?: AutomationParameterKey;
    /**
     * A key-value mapping to target resources. Required if you specify TargetParameterName.
     */
    Targets?: Targets;
    /**
     * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
     */
    TargetMaps?: TargetMaps;
    /**
     * The maximum number of targets allowed to run this task in parallel. You can specify a number, such as 10, or a percentage, such as 10%. The default value is 10.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The number of errors that are allowed before the system stops running the automation on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops running the automation when the fourth error is received. If you specify 0, then the system stops running the automation on additional targets after the first error result is returned. If you run an automation on 50 resources and set max-errors to 10%, then the system stops running the automation on additional targets when the sixth error is received. Executions that are already running an automation when max-errors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set max-concurrency to 1 so the executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * A location is a combination of Amazon Web Services Regions and/or Amazon Web Services accounts where you want to run the automation. Use this operation to start an automation in multiple Amazon Web Services Regions and multiple Amazon Web Services accounts. For more information, see Running Automation workflows in multiple Amazon Web Services Regions and Amazon Web Services accounts in the Amazon Web Services Systems Manager User Guide. 
     */
    TargetLocations?: TargetLocations;
    /**
     * Optional metadata that you assign to a resource. You can specify a maximum of five tags for an automation. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an automation to identify an environment or operating system. In this case, you could specify the following key-value pairs:    Key=environment,Value=test     Key=OS,Value=Windows     To add tags to an existing automation, use the AddTagsToResource operation. 
     */
    Tags?: TagList;
    /**
     * The CloudWatch alarm you want to apply to your automation.
     */
    AlarmConfiguration?: AlarmConfiguration;
  }
  export interface StartAutomationExecutionResult {
    /**
     * The unique ID of a newly scheduled automation execution.
     */
    AutomationExecutionId?: AutomationExecutionId;
  }
  export interface StartChangeRequestExecutionRequest {
    /**
     * The date and time specified in the change request to run the Automation runbooks.  The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received. 
     */
    ScheduledTime?: DateTime;
    /**
     * The name of the change template document to run during the runbook workflow.
     */
    DocumentName: DocumentARN;
    /**
     * The version of the change template document to run during the runbook workflow.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * A key-value map of parameters that match the declared parameters in the change template document.
     */
    Parameters?: AutomationParameterMap;
    /**
     * The name of the change request associated with the runbook workflow to be run.
     */
    ChangeRequestName?: ChangeRequestName;
    /**
     * The user-provided idempotency token. The token must be unique, is case insensitive, enforces the UUID format, and can't be reused.
     */
    ClientToken?: IdempotencyToken;
    /**
     * Indicates whether the change request can be approved automatically without the need for manual approvals. If AutoApprovable is enabled in a change template, then setting AutoApprove to true in StartChangeRequestExecution creates a change request that bypasses approver review.  Change Calendar restrictions are not bypassed in this scenario. If the state of an associated calendar is CLOSED, change freeze approvers must still grant permission for this change request to run. If they don't, the change won't be processed until the calendar state is again OPEN.  
     */
    AutoApprove?: Boolean;
    /**
     * Information about the Automation runbooks that are run during the runbook workflow.  The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received. 
     */
    Runbooks: Runbooks;
    /**
     * Optional metadata that you assign to a resource. You can specify a maximum of five tags for a change request. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a change request to identify an environment or target Amazon Web Services Region. In this case, you could specify the following key-value pairs:    Key=Environment,Value=Production     Key=Region,Value=us-east-2   
     */
    Tags?: TagList;
    /**
     * The time that the requester expects the runbook workflow related to the change request to complete. The time is an estimate only that the requester provides for reviewers.
     */
    ScheduledEndTime?: DateTime;
    /**
     * User-provided details about the change. If no details are provided, content specified in the Template information section of the associated change template is added.
     */
    ChangeDetails?: ChangeDetailsValue;
  }
  export interface StartChangeRequestExecutionResult {
    /**
     * The unique ID of a runbook workflow operation. (A runbook workflow is a type of Automation operation.) 
     */
    AutomationExecutionId?: AutomationExecutionId;
  }
  export interface StartSessionRequest {
    /**
     * The managed node to connect to for the session.
     */
    Target: SessionTarget;
    /**
     * The name of the SSM document you want to use to define the type of session, input parameters, or preferences for the session. For example, SSM-SessionManagerRunShell. You can call the GetDocument API to verify the document exists before attempting to start a session. If no document name is provided, a shell to the managed node is launched by default. For more information, see Start a session in the Amazon Web Services Systems Manager User Guide.
     */
    DocumentName?: DocumentARN;
    /**
     * The reason for connecting to the instance. This value is included in the details for the Amazon CloudWatch Events event created when you start the session.
     */
    Reason?: SessionReason;
    /**
     * The values you want to specify for the parameters defined in the Session document.
     */
    Parameters?: SessionManagerParameters;
  }
  export interface StartSessionResponse {
    /**
     * The ID of the session.
     */
    SessionId?: SessionId;
    /**
     * An encrypted token value containing session and caller information. This token is used to authenticate the connection to the managed node, and is valid only long enough to ensure the connection is successful. Never share your session's token.
     */
    TokenValue?: TokenValue;
    /**
     * A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and receive output from the node. Format: wss://ssmmessages.region.amazonaws.com/v1/data-channel/session-id?stream=(input|output)   region represents the Region identifier for an Amazon Web Services Region supported by Amazon Web Services Systems Manager, such as us-east-2 for the US East (Ohio) Region. For a list of supported region values, see the Region column in Systems Manager service endpoints in the Amazon Web Services General Reference.  session-id represents the ID of a Session Manager session, such as 1a2b3c4dEXAMPLE.
     */
    StreamUrl?: StreamUrl;
  }
  export type StatusAdditionalInfo = string;
  export type StatusDetails = string;
  export type StatusMessage = string;
  export type StatusName = string;
  export interface StepExecution {
    /**
     * The name of this execution step.
     */
    StepName?: String;
    /**
     * The action this step performs. The action determines the behavior of the step.
     */
    Action?: AutomationActionName;
    /**
     * The timeout seconds of the step.
     */
    TimeoutSeconds?: Long;
    /**
     * The action to take if the step fails. The default value is Abort.
     */
    OnFailure?: String;
    /**
     * The maximum number of tries to run the action of the step. The default value is 1.
     */
    MaxAttempts?: Integer;
    /**
     * If a step has begun execution, this contains the time the step started. If the step is in Pending status, this field isn't populated.
     */
    ExecutionStartTime?: DateTime;
    /**
     * If a step has finished execution, this contains the time the execution ended. If the step hasn't yet concluded, this field isn't populated.
     */
    ExecutionEndTime?: DateTime;
    /**
     * The execution status for this step.
     */
    StepStatus?: AutomationExecutionStatus;
    /**
     * The response code returned by the execution of the step.
     */
    ResponseCode?: String;
    /**
     * Fully-resolved values passed into the step before execution.
     */
    Inputs?: NormalStringMap;
    /**
     * Returned values from the execution of the step.
     */
    Outputs?: AutomationParameterMap;
    /**
     * A message associated with the response code for an execution.
     */
    Response?: String;
    /**
     * If a step failed, this message explains why the execution failed.
     */
    FailureMessage?: String;
    /**
     * Information about the Automation failure.
     */
    FailureDetails?: FailureDetails;
    /**
     * The unique ID of a step execution.
     */
    StepExecutionId?: String;
    /**
     * A user-specified list of parameters to override when running a step.
     */
    OverriddenParameters?: AutomationParameterMap;
    /**
     * The flag which can be used to end automation no matter whether the step succeeds or fails.
     */
    IsEnd?: Boolean;
    /**
     * The next step after the step succeeds.
     */
    NextStep?: String;
    /**
     * The flag which can be used to help decide whether the failure of current step leads to the Automation failure.
     */
    IsCritical?: Boolean;
    /**
     * Strategies used when step fails, we support Continue and Abort. Abort will fail the automation when the step fails. Continue will ignore the failure of current step and allow automation to run the next step. With conditional branching, we add step:stepName to support the automation to go to another specific step.
     */
    ValidNextSteps?: ValidNextStepList;
    /**
     * The targets for the step execution.
     */
    Targets?: Targets;
    /**
     * The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution.
     */
    TargetLocation?: TargetLocation;
    /**
     * The CloudWatch alarms that were invoked by the automation.
     */
    TriggeredAlarms?: AlarmStateInformationList;
  }
  export interface StepExecutionFilter {
    /**
     * One or more keys to limit the results. Valid filter keys include the following: StepName, Action, StepExecutionId, StepExecutionStatus, StartTimeBefore, StartTimeAfter.
     */
    Key: StepExecutionFilterKey;
    /**
     * The values of the filter key.
     */
    Values: StepExecutionFilterValueList;
  }
  export type StepExecutionFilterKey = "StartTimeBefore"|"StartTimeAfter"|"StepExecutionStatus"|"StepExecutionId"|"StepName"|"Action"|string;
  export type StepExecutionFilterList = StepExecutionFilter[];
  export type StepExecutionFilterValue = string;
  export type StepExecutionFilterValueList = StepExecutionFilterValue[];
  export type StepExecutionList = StepExecution[];
  export interface StopAutomationExecutionRequest {
    /**
     * The execution ID of the Automation to stop.
     */
    AutomationExecutionId: AutomationExecutionId;
    /**
     * The stop request type. Valid types include the following: Cancel and Complete. The default type is Cancel.
     */
    Type?: StopType;
  }
  export interface StopAutomationExecutionResult {
  }
  export type StopType = "Complete"|"Cancel"|string;
  export type StreamUrl = string;
  export type String = string;
  export type StringDateTime = string;
  export type StringList = String[];
  export interface Tag {
    /**
     * The name of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagList = Tag[];
  export type TagValue = string;
  export interface Target {
    /**
     * User-defined criteria for sending commands that target managed nodes that meet the criteria.
     */
    Key?: TargetKey;
    /**
     * User-defined criteria that maps to Key. For example, if you specified tag:ServerRole, you could specify value:WebServer to run a command on instances that include EC2 tags of ServerRole,WebServer.  Depending on the type of target, the maximum number of values for a key might be lower than the global maximum of 50.
     */
    Values?: TargetValues;
  }
  export type TargetCount = number;
  export type TargetKey = string;
  export interface TargetLocation {
    /**
     * The Amazon Web Services accounts targeted by the current Automation execution.
     */
    Accounts?: Accounts;
    /**
     * The Amazon Web Services Regions targeted by the current Automation execution.
     */
    Regions?: Regions;
    /**
     * The maximum number of Amazon Web Services Regions and Amazon Web Services accounts allowed to run the Automation concurrently.
     */
    TargetLocationMaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed before the system stops queueing additional Automation executions for the currently running Automation.
     */
    TargetLocationMaxErrors?: MaxErrors;
    /**
     * The Automation execution role used by the currently running Automation. If not specified, the default value is AWS-SystemsManager-AutomationExecutionRole.
     */
    ExecutionRoleName?: ExecutionRoleName;
    TargetLocationAlarmConfiguration?: AlarmConfiguration;
  }
  export type TargetLocations = TargetLocation[];
  export type TargetMap = {[key: string]: TargetMapValueList};
  export type TargetMapKey = string;
  export type TargetMapValue = string;
  export type TargetMapValueList = TargetMapValue[];
  export type TargetMaps = TargetMap[];
  export type TargetParameterList = ParameterValue[];
  export type TargetType = string;
  export type TargetValue = string;
  export type TargetValues = TargetValue[];
  export type Targets = Target[];
  export interface TerminateSessionRequest {
    /**
     * The ID of the session to terminate.
     */
    SessionId: SessionId;
  }
  export interface TerminateSessionResponse {
    /**
     * The ID of the session that has been terminated.
     */
    SessionId?: SessionId;
  }
  export type TimeoutSeconds = number;
  export type TokenValue = string;
  export type TotalCount = number;
  export type UUID = string;
  export interface UnlabelParameterVersionRequest {
    /**
     * The name of the parameter from which you want to delete one or more labels.
     */
    Name: PSParameterName;
    /**
     * The specific version of the parameter which you want to delete one or more labels from. If it isn't present, the call will fail.
     */
    ParameterVersion: PSParameterVersion;
    /**
     * One or more labels to delete from the specified parameter version.
     */
    Labels: ParameterLabelList;
  }
  export interface UnlabelParameterVersionResult {
    /**
     * A list of all labels deleted from the parameter.
     */
    RemovedLabels?: ParameterLabelList;
    /**
     * The labels that aren't attached to the given parameter version.
     */
    InvalidLabels?: ParameterLabelList;
  }
  export interface UpdateAssociationRequest {
    /**
     * The ID of the association you want to update. 
     */
    AssociationId: AssociationId;
    /**
     * The parameters you want to update for the association. If you create a parameter using Parameter Store, a capability of Amazon Web Services Systems Manager, you can reference the parameter using {{ssm:parameter-name}}.
     */
    Parameters?: Parameters;
    /**
     * The document version you want update for the association.   State Manager doesn't support running associations that use a new version of a document if that document is shared from another account. State Manager always runs the default version of a document if shared from another account, even though the Systems Manager console shows that a new version was processed. If you want to run an association using a new version of a document shared form another account, you must set the document version to default. 
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The cron expression used to schedule the association that you want to update.
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * An S3 bucket where you want to store the results of this request.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * The name of the SSM Command document or Automation runbook that contains the configuration information for the managed node. You can specify Amazon Web Services-predefined documents, documents you created, or a document that is shared with you from another account. For Systems Manager document (SSM document) that are shared with you from other Amazon Web Services accounts, you must specify the complete SSM document ARN, in the following format:  arn:aws:ssm:region:account-id:document/document-name   For example:  arn:aws:ssm:us-east-2:12345678912:document/My-Shared-Document  For Amazon Web Services-predefined documents and SSM documents you created in your account, you only need to specify the document name. For example, AWS-ApplyPatchBaseline or My-Document.
     */
    Name?: DocumentARN;
    /**
     * The targets of the association.
     */
    Targets?: Targets;
    /**
     * The name of the association that you want to update.
     */
    AssociationName?: AssociationName;
    /**
     * This parameter is provided for concurrency control purposes. You must specify the latest association version in the service. If you want to ensure that this request succeeds, either specify $LATEST, or omit this parameter.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * Choose the parameter that will define how your automation will branch out. This target is required for associations that use an Automation runbook and target resources by using rate controls. Automation is a capability of Amazon Web Services Systems Manager.
     */
    AutomationTargetParameterName?: AutomationTargetParameterName;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 managed nodes and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new managed node starts and attempts to run an association while Systems Manager is running MaxConcurrency associations, the association is allowed to run. During the next association interval, the new managed node will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level to assign to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
    /**
     * The mode for generating association compliance. You can specify AUTO or MANUAL. In AUTO mode, the system uses the status of the association execution to determine the compliance status. If the association execution runs successfully, then the association is COMPLIANT. If the association execution doesn't run successfully, the association is NON-COMPLIANT. In MANUAL mode, you must specify the AssociationId as a parameter for the PutComplianceItems API operation. In this case, compliance data isn't managed by State Manager, a capability of Amazon Web Services Systems Manager. It is managed by your direct call to the PutComplianceItems API operation. By default, all associations use AUTO mode.
     */
    SyncCompliance?: AssociationSyncCompliance;
    /**
     * By default, when you update an association, the system runs it immediately after it is updated and then according to the schedule you specified. Specify this option if you don't want an association to run immediately after you update it. This parameter isn't supported for rate expressions. If you chose this option when you created an association and later you edit that association or you make changes to the SSM document on which that association is based (by using the Documents page in the console), State Manager applies the association at the next specified cron interval. For example, if you chose the Latest version of an SSM document when you created an association and you edit the association by choosing a different document version on the Documents page, State Manager applies the association at the next specified cron interval if you previously selected this option. If this option wasn't selected, State Manager immediately runs the association. You can reset this option. To do so, specify the no-apply-only-at-cron-interval parameter when you update the association from the command line. This parameter forces the association to run immediately after updating it and according to the interval specified.
     */
    ApplyOnlyAtCronInterval?: ApplyOnlyAtCronInterval;
    /**
     * The names or Amazon Resource Names (ARNs) of the Change Calendar type documents you want to gate your associations under. The associations only run when that change calendar is open. For more information, see Amazon Web Services Systems Manager Change Calendar.
     */
    CalendarNames?: CalendarNameOrARNList;
    /**
     * A location is a combination of Amazon Web Services Regions and Amazon Web Services accounts where you want to run the association. Use this action to update an association in multiple Regions and multiple accounts.
     */
    TargetLocations?: TargetLocations;
    /**
     * Number of days to wait after the scheduled day to run an association. For example, if you specified a cron schedule of cron(0 0 ? * THU#2 *), you could specify an offset of 3 to run the association each Sunday after the second Thursday of the month. For more information about cron schedules for associations, see Reference: Cron and rate expressions for Systems Manager in the Amazon Web Services Systems Manager User Guide.   To use offsets, you must specify the ApplyOnlyAtCronInterval parameter. This option tells the system not to run an association immediately after you create it.  
     */
    ScheduleOffset?: ScheduleOffset;
    /**
     * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps can't be specified together.
     */
    TargetMaps?: TargetMaps;
    AlarmConfiguration?: AlarmConfiguration;
  }
  export interface UpdateAssociationResult {
    /**
     * The description of the association that was updated.
     */
    AssociationDescription?: AssociationDescription;
  }
  export interface UpdateAssociationStatusRequest {
    /**
     * The name of the SSM document.
     */
    Name: DocumentARN;
    /**
     * The managed node ID.
     */
    InstanceId: InstanceId;
    /**
     * The association status.
     */
    AssociationStatus: AssociationStatus;
  }
  export interface UpdateAssociationStatusResult {
    /**
     * Information about the association.
     */
    AssociationDescription?: AssociationDescription;
  }
  export interface UpdateDocumentDefaultVersionRequest {
    /**
     * The name of a custom document that you want to set as the default version.
     */
    Name: DocumentName;
    /**
     * The version of a custom document that you want to set as the default version.
     */
    DocumentVersion: DocumentVersionNumber;
  }
  export interface UpdateDocumentDefaultVersionResult {
    /**
     * The description of a custom document that you want to set as the default version.
     */
    Description?: DocumentDefaultVersionDescription;
  }
  export interface UpdateDocumentMetadataRequest {
    /**
     * The name of the change template for which a version's metadata is to be updated.
     */
    Name: DocumentName;
    /**
     * The version of a change template in which to update approval metadata.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The change template review details to update.
     */
    DocumentReviews: DocumentReviews;
  }
  export interface UpdateDocumentMetadataResponse {
  }
  export interface UpdateDocumentRequest {
    /**
     * A valid JSON or YAML string.
     */
    Content: DocumentContent;
    /**
     * A list of key-value pairs that describe attachments to a version of a document.
     */
    Attachments?: AttachmentsSourceList;
    /**
     * The name of the SSM document that you want to update.
     */
    Name: DocumentName;
    /**
     * The friendly name of the SSM document that you want to update. This value can differ for each version of the document. If you don't specify a value for this parameter in your request, the existing value is applied to the new document version.
     */
    DisplayName?: DocumentDisplayName;
    /**
     * An optional field specifying the version of the artifact you are updating with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and can't be changed.
     */
    VersionName?: DocumentVersionName;
    /**
     * The version of the document that you want to update. Currently, Systems Manager supports updating only the latest version of the document. You can specify the version number of the latest version or use the $LATEST variable.  If you change a document version for a State Manager association, Systems Manager immediately runs the association unless you previously specifed the apply-only-at-cron-interval parameter. 
     */
    DocumentVersion?: DocumentVersion;
    /**
     * Specify the document format for the new document version. Systems Manager supports JSON and YAML documents. JSON is the default format.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * Specify a new target type for the document.
     */
    TargetType?: TargetType;
  }
  export interface UpdateDocumentResult {
    /**
     * A description of the document that was updated.
     */
    DocumentDescription?: DocumentDescription;
  }
  export interface UpdateMaintenanceWindowRequest {
    /**
     * The ID of the maintenance window to update.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The name of the maintenance window.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description for the update request.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become active. StartDate allows you to delay activation of the maintenance window until the specified future date.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when you want the maintenance window to become inactive. EndDate allows you to set a date and time in the future when the maintenance window will no longer run.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The schedule of the maintenance window in the form of a cron or rate expression.
     */
    Schedule?: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The number of days to wait after the date and time specified by a cron expression before running the maintenance window. For example, the following cron expression schedules a maintenance window to run the third Tuesday of every month at 11:30 PM.  cron(30 23 ? * TUE#3 *)  If the schedule offset is 2, the maintenance window won't run until two days later.
     */
    ScheduleOffset?: MaintenanceWindowOffset;
    /**
     * The duration of the maintenance window in hours.
     */
    Duration?: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff?: MaintenanceWindowCutoff;
    /**
     * Whether targets must be registered with the maintenance window before tasks can be defined for those targets.
     */
    AllowUnassociatedTargets?: MaintenanceWindowAllowUnassociatedTargets;
    /**
     * Whether the maintenance window is enabled.
     */
    Enabled?: MaintenanceWindowEnabled;
    /**
     * If True, then all fields that are required by the CreateMaintenanceWindow operation are also required for this API request. Optional fields that aren't specified are set to null. 
     */
    Replace?: Boolean;
  }
  export interface UpdateMaintenanceWindowResult {
    /**
     * The ID of the created maintenance window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the maintenance window.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description of the update.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. The maintenance window won't run before this specified time.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. The maintenance window won't run after this specified time.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The schedule of the maintenance window in the form of a cron or rate expression.
     */
    Schedule?: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
     */
    ScheduleOffset?: MaintenanceWindowOffset;
    /**
     * The duration of the maintenance window in hours.
     */
    Duration?: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the maintenance window that Amazon Web Services Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff?: MaintenanceWindowCutoff;
    /**
     * Whether targets must be registered with the maintenance window before tasks can be defined for those targets.
     */
    AllowUnassociatedTargets?: MaintenanceWindowAllowUnassociatedTargets;
    /**
     * Whether the maintenance window is enabled.
     */
    Enabled?: MaintenanceWindowEnabled;
  }
  export interface UpdateMaintenanceWindowTargetRequest {
    /**
     * The maintenance window ID with which to modify the target.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The target ID to modify.
     */
    WindowTargetId: MaintenanceWindowTargetId;
    /**
     * The targets to add or replace.
     */
    Targets?: Targets;
    /**
     * User-provided value that will be included in any Amazon CloudWatch Events events raised while running tasks for these targets in this maintenance window.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * A name for the update.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description for the update.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * If True, then all fields that are required by the RegisterTargetWithMaintenanceWindow operation are also required for this API request. Optional fields that aren't specified are set to null.
     */
    Replace?: Boolean;
  }
  export interface UpdateMaintenanceWindowTargetResult {
    /**
     * The maintenance window ID specified in the update request.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The target ID specified in the update request.
     */
    WindowTargetId?: MaintenanceWindowTargetId;
    /**
     * The updated targets.
     */
    Targets?: Targets;
    /**
     * The updated owner.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The updated name.
     */
    Name?: MaintenanceWindowName;
    /**
     * The updated description.
     */
    Description?: MaintenanceWindowDescription;
  }
  export interface UpdateMaintenanceWindowTaskRequest {
    /**
     * The maintenance window ID that contains the task to modify.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The task ID to modify.
     */
    WindowTaskId: MaintenanceWindowTaskId;
    /**
     * The targets (either managed nodes or tags) to modify. Managed nodes are specified using the format Key=instanceids,Values=instanceID_1,instanceID_2. Tags are specified using the format  Key=tag_name,Values=tag_value.   One or more targets must be specified for maintenance window Run Command-type tasks. Depending on the task, targets are optional for other maintenance window task types (Automation, Lambda, and Step Functions). For more information about running tasks that don't specify targets, see Registering maintenance window tasks without targets in the Amazon Web Services Systems Manager User Guide. 
     */
    Targets?: Targets;
    /**
     * The task ARN to modify.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM service role for Amazon Web Services Systems Manager to assume when running a maintenance window task. If you do not specify a service role ARN, Systems Manager uses your account's service-linked role. If no service-linked role for Systems Manager exists in your account, it is created when you run RegisterTaskWithMaintenanceWindow. For more information, see the following topics in the in the Amazon Web Services Systems Manager User Guide:    Using service-linked roles for Systems Manager     Should I use a service-linked role or a custom service role to run maintenance window tasks?    
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The parameters to modify.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters.  The map has the following format: Key: string, between 1 and 255 characters Value: an array of strings, each string is between 1 and 255 characters
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The parameters that the task should use during execution. Populate only the fields that match the task type. All other fields should be empty.  When you update a maintenance window task that has options specified in TaskInvocationParameters, you must provide again all the TaskInvocationParameters values that you want to retain. The values you don't specify again are removed. For example, suppose that when you registered a Run Command task, you specified TaskInvocationParameters values for Comment, NotificationConfig, and OutputS3BucketName. If you update the maintenance window task and specify only a different OutputS3BucketName value, the values for Comment and NotificationConfig are removed. 
     */
    TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    /**
     * The new task priority to specify. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The new MaxConcurrency value you want to specify. MaxConcurrency is the number of targets that are allowed to run this task, in parallel.  Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task. 
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The new MaxErrors value to specify. MaxErrors is the maximum number of errors that are allowed before the task stops being scheduled.  Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a targetless task You must provide a value in all other cases. For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of 1. This value doesn't affect the running of your task. 
     */
    MaxErrors?: MaxErrors;
    /**
     * The new logging location in Amazon S3 to specify.   LoggingInfo has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * The new task name to specify.
     */
    Name?: MaintenanceWindowName;
    /**
     * The new task description to specify.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * If True, then all fields that are required by the RegisterTaskWithMaintenanceWindow operation are also required for this API request. Optional fields that aren't specified are set to null.
     */
    Replace?: Boolean;
    /**
     * Indicates whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.     CONTINUE_TASK: When the cutoff time is reached, any tasks that are running continue. The default value.    CANCEL_TASK:   For Automation, Lambda, Step Functions tasks: When the cutoff time is reached, any task invocations that are already running continue, but no new task invocations are started.   For Run Command tasks: When the cutoff time is reached, the system sends a CancelCommand operation that attempts to cancel the command associated with the task. However, there is no guarantee that the command will be terminated and the underlying process stopped.   The status for tasks that are not completed is TIMED_OUT.  
     */
    CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
    /**
     * The CloudWatch alarm you want to apply to your maintenance window task.
     */
    AlarmConfiguration?: AlarmConfiguration;
  }
  export interface UpdateMaintenanceWindowTaskResult {
    /**
     * The ID of the maintenance window that was updated.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The task ID of the maintenance window that was updated.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
    /**
     * The updated target values.
     */
    Targets?: Targets;
    /**
     * The updated task ARN value.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The updated parameter values.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The updated parameter values.
     */
    TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    /**
     * The updated priority value.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The updated MaxConcurrency value.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The updated MaxErrors value.
     */
    MaxErrors?: MaxErrors;
    /**
     * The updated logging information in Amazon S3.   LoggingInfo has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * The updated task name.
     */
    Name?: MaintenanceWindowName;
    /**
     * The updated task description.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. 
     */
    CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
    /**
     * The details for the CloudWatch alarm you applied to your maintenance window task.
     */
    AlarmConfiguration?: AlarmConfiguration;
  }
  export interface UpdateManagedInstanceRoleRequest {
    /**
     * The ID of the managed node where you want to update the role.
     */
    InstanceId: ManagedInstanceId;
    /**
     * The name of the Identity and Access Management (IAM) role that you want to assign to the managed node. This IAM role must provide AssumeRole permissions for the Amazon Web Services Systems Manager service principal ssm.amazonaws.com. For more information, see Create an IAM service role for a hybrid environment in the Amazon Web Services Systems Manager User Guide.  You can't specify an IAM service-linked role for this parameter. You must create a unique role. 
     */
    IamRole: IamRole;
  }
  export interface UpdateManagedInstanceRoleResult {
  }
  export interface UpdateOpsItemRequest {
    /**
     * Update the information about the OpsItem. Provide enough information so that users reading this OpsItem for the first time understand the issue. 
     */
    Description?: OpsItemDescription;
    /**
     * Add new keys or edit existing key-value pairs of the OperationalData map in the OpsItem object. Operational data is custom data that provides useful reference details about the OpsItem. For example, you can specify log files, error strings, license keys, troubleshooting tips, or other relevant data. You enter operational data as key-value pairs. The key has a maximum length of 128 characters. The value has a maximum size of 20 KB.  Operational data keys can't begin with the following: amazon, aws, amzn, ssm, /amazon, /aws, /amzn, /ssm.  You can choose to make the data searchable by other users in the account or you can restrict search access. Searchable data means that all users with access to the OpsItem Overview page (as provided by the DescribeOpsItems API operation) can view and search on the specified data. Operational data that isn't searchable is only viewable by users who have access to the OpsItem (as provided by the GetOpsItem API operation). Use the /aws/resources key in OperationalData to specify a related resource in the request. Use the /aws/automations key in OperationalData to associate an Automation runbook with the OpsItem. To view Amazon Web Services CLI example commands that use these keys, see Creating OpsItems manually in the Amazon Web Services Systems Manager User Guide.
     */
    OperationalData?: OpsItemOperationalData;
    /**
     * Keys that you want to remove from the OperationalData map.
     */
    OperationalDataToDelete?: OpsItemOpsDataKeysList;
    /**
     * The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this OpsItem is edited or changed.
     */
    Notifications?: OpsItemNotifications;
    /**
     * The importance of this OpsItem in relation to other OpsItems in the system.
     */
    Priority?: OpsItemPriority;
    /**
     * One or more OpsItems that share something in common with the current OpsItems. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
     */
    RelatedOpsItems?: RelatedOpsItems;
    /**
     * The OpsItem status. Status can be Open, In Progress, or Resolved. For more information, see Editing OpsItem details in the Amazon Web Services Systems Manager User Guide.
     */
    Status?: OpsItemStatus;
    /**
     * The ID of the OpsItem.
     */
    OpsItemId: OpsItemId;
    /**
     * A short heading that describes the nature of the OpsItem and the impacted resource.
     */
    Title?: OpsItemTitle;
    /**
     * Specify a new category for an OpsItem.
     */
    Category?: OpsItemCategory;
    /**
     * Specify a new severity for an OpsItem.
     */
    Severity?: OpsItemSeverity;
    /**
     * The time a runbook workflow started. Currently reported only for the OpsItem type /aws/changerequest.
     */
    ActualStartTime?: DateTime;
    /**
     * The time a runbook workflow ended. Currently reported only for the OpsItem type /aws/changerequest.
     */
    ActualEndTime?: DateTime;
    /**
     * The time specified in a change request for a runbook workflow to start. Currently supported only for the OpsItem type /aws/changerequest.
     */
    PlannedStartTime?: DateTime;
    /**
     * The time specified in a change request for a runbook workflow to end. Currently supported only for the OpsItem type /aws/changerequest.
     */
    PlannedEndTime?: DateTime;
    /**
     * The OpsItem Amazon Resource Name (ARN).
     */
    OpsItemArn?: OpsItemArn;
  }
  export interface UpdateOpsItemResponse {
  }
  export interface UpdateOpsMetadataRequest {
    /**
     * The Amazon Resource Name (ARN) of the OpsMetadata Object to update.
     */
    OpsMetadataArn: OpsMetadataArn;
    /**
     * Metadata to add to an OpsMetadata object.
     */
    MetadataToUpdate?: MetadataMap;
    /**
     * The metadata keys to delete from the OpsMetadata object. 
     */
    KeysToDelete?: MetadataKeysToDeleteList;
  }
  export interface UpdateOpsMetadataResult {
    /**
     * The Amazon Resource Name (ARN) of the OpsMetadata Object that was updated.
     */
    OpsMetadataArn?: OpsMetadataArn;
  }
  export interface UpdatePatchBaselineRequest {
    /**
     * The ID of the patch baseline to update.
     */
    BaselineId: BaselineId;
    /**
     * The name of the patch baseline.
     */
    Name?: BaselineName;
    /**
     * A set of global filters used to include patches in the baseline.
     */
    GlobalFilters?: PatchFilterGroup;
    /**
     * A set of rules used to include patches in the baseline.
     */
    ApprovalRules?: PatchRuleGroup;
    /**
     * A list of explicitly approved patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see About package name formats for approved and rejected patch lists in the Amazon Web Services Systems Manager User Guide.
     */
    ApprovedPatches?: PatchIdList;
    /**
     * Assigns a new compliance severity level to an existing patch baseline.
     */
    ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is false. Applies to Linux managed nodes only.
     */
    ApprovedPatchesEnableNonSecurity?: Boolean;
    /**
     * A list of explicitly rejected patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see About package name formats for approved and rejected patch lists in the Amazon Web Services Systems Manager User Guide.
     */
    RejectedPatches?: PatchIdList;
    /**
     * The action for Patch Manager to take on patches included in the RejectedPackages list.     ALLOW_AS_DEPENDENCY : A package in the Rejected patches list is installed only if it is a dependency of another package. It is considered compliant with the patch baseline, and its status is reported as InstalledOther. This is the default action if no option is specified.     BLOCK : Packages in the RejectedPatches list, and packages that include them as dependencies, aren't installed under any circumstances. If a package was installed before it was added to the Rejected patches list, it is considered non-compliant with the patch baseline, and its status is reported as InstalledRejected.  
     */
    RejectedPatchesAction?: PatchAction;
    /**
     * A description of the patch baseline.
     */
    Description?: BaselineDescription;
    /**
     * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
     */
    Sources?: PatchSourceList;
    /**
     * If True, then all fields that are required by the CreatePatchBaseline operation are also required for this API request. Optional fields that aren't specified are set to null.
     */
    Replace?: Boolean;
  }
  export interface UpdatePatchBaselineResult {
    /**
     * The ID of the deleted patch baseline.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch baseline.
     */
    Name?: BaselineName;
    /**
     * The operating system rule used by the updated patch baseline.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * A set of global filters used to exclude patches from the baseline.
     */
    GlobalFilters?: PatchFilterGroup;
    /**
     * A set of rules used to include patches in the baseline.
     */
    ApprovalRules?: PatchRuleGroup;
    /**
     * A list of explicitly approved patches for the baseline.
     */
    ApprovedPatches?: PatchIdList;
    /**
     * The compliance severity level assigned to the patch baseline after the update completed.
     */
    ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is false. Applies to Linux managed nodes only.
     */
    ApprovedPatchesEnableNonSecurity?: Boolean;
    /**
     * A list of explicitly rejected patches for the baseline.
     */
    RejectedPatches?: PatchIdList;
    /**
     * The action specified to take on patches included in the RejectedPatches list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency.
     */
    RejectedPatchesAction?: PatchAction;
    /**
     * The date when the patch baseline was created.
     */
    CreatedDate?: DateTime;
    /**
     * The date when the patch baseline was last modified.
     */
    ModifiedDate?: DateTime;
    /**
     * A description of the patch baseline.
     */
    Description?: BaselineDescription;
    /**
     * Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
     */
    Sources?: PatchSourceList;
  }
  export interface UpdateResourceDataSyncRequest {
    /**
     * The name of the resource data sync you want to update.
     */
    SyncName: ResourceDataSyncName;
    /**
     * The type of resource data sync. The supported SyncType is SyncFromSource.
     */
    SyncType: ResourceDataSyncType;
    /**
     * Specify information about the data sources to synchronize.
     */
    SyncSource: ResourceDataSyncSource;
  }
  export interface UpdateResourceDataSyncResult {
  }
  export interface UpdateServiceSettingRequest {
    /**
     * The Amazon Resource Name (ARN) of the service setting to reset. For example, arn:aws:ssm:us-east-1:111122223333:servicesetting/ssm/parameter-store/high-throughput-enabled. The setting ID can be one of the following.    /ssm/automation/customer-script-log-destination     /ssm/automation/customer-script-log-group-name     /ssm/documents/console/public-sharing-permission     /ssm/managed-instance/activation-tier     /ssm/opsinsights/opscenter     /ssm/parameter-store/default-parameter-tier     /ssm/parameter-store/high-throughput-enabled   
     */
    SettingId: ServiceSettingId;
    /**
     * The new value to specify for the service setting. The following list specifies the available values for each setting.    /ssm/automation/customer-script-log-destination: CloudWatch     /ssm/automation/customer-script-log-group-name: the name of an Amazon CloudWatch Logs log group    /ssm/documents/console/public-sharing-permission: Enable or Disable     /ssm/managed-instance/activation-tier: standard or advanced     /ssm/opsinsights/opscenter: Enabled or Disabled     /ssm/parameter-store/default-parameter-tier: Standard, Advanced, Intelligent-Tiering     /ssm/parameter-store/high-throughput-enabled: true or false   
     */
    SettingValue: ServiceSettingValue;
  }
  export interface UpdateServiceSettingResult {
  }
  export type Url = string;
  export type ValidNextStep = string;
  export type ValidNextStepList = ValidNextStep[];
  export type Version = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-11-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SSM client.
   */
  export import Types = SSM;
}
export = SSM;
