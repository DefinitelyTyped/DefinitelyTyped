# TypeScript typings for Compute Engine API v1
Creates and runs virtual machines on Google Cloud Platform.
For detailed description please check [documentation](https://developers.google.com/compute/docs/reference/latest/).

## Installing

Install typings for Compute Engine API:
```
npm install @types/gapi.client.compute@v1 --save-dev
```

## Usage

You need to initialize Google API client in your code:
```typescript
gapi.load("client", () => { 
    // now we can use gapi.client
    // ... 
});
```

Then load api client wrapper:
```typescript
gapi.client.load('compute', 'v1', () => {
    // now we can use gapi.client.compute
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // View and manage your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform',
    
        // View and manage your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute',
    
        // View your Google Compute Engine resources
        'https://www.googleapis.com/auth/compute.readonly',
    
        // Manage your data and permissions in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.full_control',
    
        // View your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_only',
    
        // Manage your data in Google Cloud Storage
        'https://www.googleapis.com/auth/devstorage.read_write',
    ],
    immediate = true;
// ...

gapi.auth.authorize({ client_id: client_id, scope: scope, immediate: immediate }, authResult => {
    if (authResult && !authResult.error) {
        /* handle succesfull authorization */
    } else {
        /* handle authorization error */
    }
});            
```

After that you can use Compute Engine API resources:

```typescript 
    
/* 
Retrieves an aggregated list of accelerator types.  
*/
await gapi.client.acceleratorTypes.aggregatedList({ project: "project",  }); 
    
/* 
Returns the specified accelerator type. Get a list of available accelerator types by making a list() request.  
*/
await gapi.client.acceleratorTypes.get({ acceleratorType: "acceleratorType", project: "project", zone: "zone",  }); 
    
/* 
Retrieves a list of accelerator types available to the specified project.  
*/
await gapi.client.acceleratorTypes.list({ project: "project", zone: "zone",  }); 
    
/* 
Retrieves an aggregated list of addresses.  
*/
await gapi.client.addresses.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified address resource.  
*/
await gapi.client.addresses.delete({ address: "address", project: "project", region: "region",  }); 
    
/* 
Returns the specified address resource.  
*/
await gapi.client.addresses.get({ address: "address", project: "project", region: "region",  }); 
    
/* 
Creates an address resource in the specified project using the data included in the request.  
*/
await gapi.client.addresses.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves a list of addresses contained within the specified region.  
*/
await gapi.client.addresses.list({ project: "project", region: "region",  }); 
    
/* 
Retrieves an aggregated list of autoscalers.  
*/
await gapi.client.autoscalers.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified autoscaler.  
*/
await gapi.client.autoscalers.delete({ autoscaler: "autoscaler", project: "project", zone: "zone",  }); 
    
/* 
Returns the specified autoscaler resource. Get a list of available autoscalers by making a list() request.  
*/
await gapi.client.autoscalers.get({ autoscaler: "autoscaler", project: "project", zone: "zone",  }); 
    
/* 
Creates an autoscaler in the specified project using the data included in the request.  
*/
await gapi.client.autoscalers.insert({ project: "project", zone: "zone",  }); 
    
/* 
Retrieves a list of autoscalers contained within the specified zone.  
*/
await gapi.client.autoscalers.list({ project: "project", zone: "zone",  }); 
    
/* 
Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.autoscalers.patch({ project: "project", zone: "zone",  }); 
    
/* 
Updates an autoscaler in the specified project using the data included in the request.  
*/
await gapi.client.autoscalers.update({ project: "project", zone: "zone",  }); 
    
/* 
Deletes the specified BackendBucket resource.  
*/
await gapi.client.backendBuckets.delete({ backendBucket: "backendBucket", project: "project",  }); 
    
/* 
Returns the specified BackendBucket resource. Get a list of available backend buckets by making a list() request.  
*/
await gapi.client.backendBuckets.get({ backendBucket: "backendBucket", project: "project",  }); 
    
/* 
Creates a BackendBucket resource in the specified project using the data included in the request.  
*/
await gapi.client.backendBuckets.insert({ project: "project",  }); 
    
/* 
Retrieves the list of BackendBucket resources available to the specified project.  
*/
await gapi.client.backendBuckets.list({ project: "project",  }); 
    
/* 
Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.backendBuckets.patch({ backendBucket: "backendBucket", project: "project",  }); 
    
/* 
Updates the specified BackendBucket resource with the data included in the request.  
*/
await gapi.client.backendBuckets.update({ backendBucket: "backendBucket", project: "project",  }); 
    
/* 
Retrieves the list of all BackendService resources, regional and global, available to the specified project.  
*/
await gapi.client.backendServices.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified BackendService resource.  
*/
await gapi.client.backendServices.delete({ backendService: "backendService", project: "project",  }); 
    
/* 
Returns the specified BackendService resource. Get a list of available backend services by making a list() request.  
*/
await gapi.client.backendServices.get({ backendService: "backendService", project: "project",  }); 
    
/* 
Gets the most recent health check results for this BackendService.  
*/
await gapi.client.backendServices.getHealth({ backendService: "backendService", project: "project",  }); 
    
/* 
Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a backend service. Read  Restrictions and Guidelines for more information.  
*/
await gapi.client.backendServices.insert({ project: "project",  }); 
    
/* 
Retrieves the list of BackendService resources available to the specified project.  
*/
await gapi.client.backendServices.list({ project: "project",  }); 
    
/* 
Patches the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.backendServices.patch({ backendService: "backendService", project: "project",  }); 
    
/* 
Updates the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.  
*/
await gapi.client.backendServices.update({ backendService: "backendService", project: "project",  }); 
    
/* 
Retrieves an aggregated list of disk types.  
*/
await gapi.client.diskTypes.aggregatedList({ project: "project",  }); 
    
/* 
Returns the specified disk type. Get a list of available disk types by making a list() request.  
*/
await gapi.client.diskTypes.get({ diskType: "diskType", project: "project", zone: "zone",  }); 
    
/* 
Retrieves a list of disk types available to the specified project.  
*/
await gapi.client.diskTypes.list({ project: "project", zone: "zone",  }); 
    
/* 
Retrieves an aggregated list of persistent disks.  
*/
await gapi.client.disks.aggregatedList({ project: "project",  }); 
    
/* 
Creates a snapshot of a specified persistent disk.  
*/
await gapi.client.disks.createSnapshot({ disk: "disk", project: "project", zone: "zone",  }); 
    
/* 
Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.  
*/
await gapi.client.disks.delete({ disk: "disk", project: "project", zone: "zone",  }); 
    
/* 
Returns a specified persistent disk. Get a list of available persistent disks by making a list() request.  
*/
await gapi.client.disks.get({ disk: "disk", project: "project", zone: "zone",  }); 
    
/* 
Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.  
*/
await gapi.client.disks.insert({ project: "project", zone: "zone",  }); 
    
/* 
Retrieves a list of persistent disks contained within the specified zone.  
*/
await gapi.client.disks.list({ project: "project", zone: "zone",  }); 
    
/* 
Resizes the specified persistent disk.  
*/
await gapi.client.disks.resize({ disk: "disk", project: "project", zone: "zone",  }); 
    
/* 
Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.  
*/
await gapi.client.disks.setLabels({ project: "project", resource: "resource", zone: "zone",  }); 
    
/* 
Deletes the specified firewall.  
*/
await gapi.client.firewalls.delete({ firewall: "firewall", project: "project",  }); 
    
/* 
Returns the specified firewall.  
*/
await gapi.client.firewalls.get({ firewall: "firewall", project: "project",  }); 
    
/* 
Creates a firewall rule in the specified project using the data included in the request.  
*/
await gapi.client.firewalls.insert({ project: "project",  }); 
    
/* 
Retrieves the list of firewall rules available to the specified project.  
*/
await gapi.client.firewalls.list({ project: "project",  }); 
    
/* 
Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.firewalls.patch({ firewall: "firewall", project: "project",  }); 
    
/* 
Updates the specified firewall rule with the data included in the request. Using PUT method, can only update following fields of firewall rule: allowed, description, sourceRanges, sourceTags, targetTags.  
*/
await gapi.client.firewalls.update({ firewall: "firewall", project: "project",  }); 
    
/* 
Retrieves an aggregated list of forwarding rules.  
*/
await gapi.client.forwardingRules.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified ForwardingRule resource.  
*/
await gapi.client.forwardingRules.delete({ forwardingRule: "forwardingRule", project: "project", region: "region",  }); 
    
/* 
Returns the specified ForwardingRule resource.  
*/
await gapi.client.forwardingRules.get({ forwardingRule: "forwardingRule", project: "project", region: "region",  }); 
    
/* 
Creates a ForwardingRule resource in the specified project and region using the data included in the request.  
*/
await gapi.client.forwardingRules.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves a list of ForwardingRule resources available to the specified project and region.  
*/
await gapi.client.forwardingRules.list({ project: "project", region: "region",  }); 
    
/* 
Changes target URL for forwarding rule. The new target should be of the same type as the old target.  
*/
await gapi.client.forwardingRules.setTarget({ forwardingRule: "forwardingRule", project: "project", region: "region",  }); 
    
/* 
Deletes the specified address resource.  
*/
await gapi.client.globalAddresses.delete({ address: "address", project: "project",  }); 
    
/* 
Returns the specified address resource. Get a list of available addresses by making a list() request.  
*/
await gapi.client.globalAddresses.get({ address: "address", project: "project",  }); 
    
/* 
Creates an address resource in the specified project using the data included in the request.  
*/
await gapi.client.globalAddresses.insert({ project: "project",  }); 
    
/* 
Retrieves a list of global addresses.  
*/
await gapi.client.globalAddresses.list({ project: "project",  }); 
    
/* 
Deletes the specified GlobalForwardingRule resource.  
*/
await gapi.client.globalForwardingRules.delete({ forwardingRule: "forwardingRule", project: "project",  }); 
    
/* 
Returns the specified GlobalForwardingRule resource. Get a list of available forwarding rules by making a list() request.  
*/
await gapi.client.globalForwardingRules.get({ forwardingRule: "forwardingRule", project: "project",  }); 
    
/* 
Creates a GlobalForwardingRule resource in the specified project using the data included in the request.  
*/
await gapi.client.globalForwardingRules.insert({ project: "project",  }); 
    
/* 
Retrieves a list of GlobalForwardingRule resources available to the specified project.  
*/
await gapi.client.globalForwardingRules.list({ project: "project",  }); 
    
/* 
Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.  
*/
await gapi.client.globalForwardingRules.setTarget({ forwardingRule: "forwardingRule", project: "project",  }); 
    
/* 
Retrieves an aggregated list of all operations.  
*/
await gapi.client.globalOperations.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified Operations resource.  
*/
await gapi.client.globalOperations.delete({ operation: "operation", project: "project",  }); 
    
/* 
Retrieves the specified Operations resource. Get a list of operations by making a list() request.  
*/
await gapi.client.globalOperations.get({ operation: "operation", project: "project",  }); 
    
/* 
Retrieves a list of Operation resources contained within the specified project.  
*/
await gapi.client.globalOperations.list({ project: "project",  }); 
    
/* 
Deletes the specified HealthCheck resource.  
*/
await gapi.client.healthChecks.delete({ healthCheck: "healthCheck", project: "project",  }); 
    
/* 
Returns the specified HealthCheck resource. Get a list of available health checks by making a list() request.  
*/
await gapi.client.healthChecks.get({ healthCheck: "healthCheck", project: "project",  }); 
    
/* 
Creates a HealthCheck resource in the specified project using the data included in the request.  
*/
await gapi.client.healthChecks.insert({ project: "project",  }); 
    
/* 
Retrieves the list of HealthCheck resources available to the specified project.  
*/
await gapi.client.healthChecks.list({ project: "project",  }); 
    
/* 
Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.healthChecks.patch({ healthCheck: "healthCheck", project: "project",  }); 
    
/* 
Updates a HealthCheck resource in the specified project using the data included in the request.  
*/
await gapi.client.healthChecks.update({ healthCheck: "healthCheck", project: "project",  }); 
    
/* 
Deletes the specified HttpHealthCheck resource.  
*/
await gapi.client.httpHealthChecks.delete({ httpHealthCheck: "httpHealthCheck", project: "project",  }); 
    
/* 
Returns the specified HttpHealthCheck resource. Get a list of available HTTP health checks by making a list() request.  
*/
await gapi.client.httpHealthChecks.get({ httpHealthCheck: "httpHealthCheck", project: "project",  }); 
    
/* 
Creates a HttpHealthCheck resource in the specified project using the data included in the request.  
*/
await gapi.client.httpHealthChecks.insert({ project: "project",  }); 
    
/* 
Retrieves the list of HttpHealthCheck resources available to the specified project.  
*/
await gapi.client.httpHealthChecks.list({ project: "project",  }); 
    
/* 
Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.httpHealthChecks.patch({ httpHealthCheck: "httpHealthCheck", project: "project",  }); 
    
/* 
Updates a HttpHealthCheck resource in the specified project using the data included in the request.  
*/
await gapi.client.httpHealthChecks.update({ httpHealthCheck: "httpHealthCheck", project: "project",  }); 
    
/* 
Deletes the specified HttpsHealthCheck resource.  
*/
await gapi.client.httpsHealthChecks.delete({ httpsHealthCheck: "httpsHealthCheck", project: "project",  }); 
    
/* 
Returns the specified HttpsHealthCheck resource. Get a list of available HTTPS health checks by making a list() request.  
*/
await gapi.client.httpsHealthChecks.get({ httpsHealthCheck: "httpsHealthCheck", project: "project",  }); 
    
/* 
Creates a HttpsHealthCheck resource in the specified project using the data included in the request.  
*/
await gapi.client.httpsHealthChecks.insert({ project: "project",  }); 
    
/* 
Retrieves the list of HttpsHealthCheck resources available to the specified project.  
*/
await gapi.client.httpsHealthChecks.list({ project: "project",  }); 
    
/* 
Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.httpsHealthChecks.patch({ httpsHealthCheck: "httpsHealthCheck", project: "project",  }); 
    
/* 
Updates a HttpsHealthCheck resource in the specified project using the data included in the request.  
*/
await gapi.client.httpsHealthChecks.update({ httpsHealthCheck: "httpsHealthCheck", project: "project",  }); 
    
/* 
Deletes the specified image.  
*/
await gapi.client.images.delete({ image: "image", project: "project",  }); 
    
/* 
Sets the deprecation status of an image.

If an empty request body is given, clears the deprecation status instead.  
*/
await gapi.client.images.deprecate({ image: "image", project: "project",  }); 
    
/* 
Returns the specified image. Get a list of available images by making a list() request.  
*/
await gapi.client.images.get({ image: "image", project: "project",  }); 
    
/* 
Returns the latest image that is part of an image family and is not deprecated.  
*/
await gapi.client.images.getFromFamily({ family: "family", project: "project",  }); 
    
/* 
Creates an image in the specified project using the data included in the request.  
*/
await gapi.client.images.insert({ project: "project",  }); 
    
/* 
Retrieves the list of private images available to the specified project. Private images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.  
*/
await gapi.client.images.list({ project: "project",  }); 
    
/* 
Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.  
*/
await gapi.client.images.setLabels({ project: "project", resource: "resource",  }); 
    
/* 
Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.  
*/
await gapi.client.instanceGroupManagers.abandonInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Retrieves the list of managed instance groups and groups them by zone.  
*/
await gapi.client.instanceGroupManagers.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read  Deleting an instance group for more information.  
*/
await gapi.client.instanceGroupManagers.delete({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.  
*/
await gapi.client.instanceGroupManagers.deleteInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Returns all of the details about the specified managed instance group. Get a list of available managed instance groups by making a list() request.  
*/
await gapi.client.instanceGroupManagers.get({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.

A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.  
*/
await gapi.client.instanceGroupManagers.insert({ project: "project", zone: "zone",  }); 
    
/* 
Retrieves a list of managed instance groups that are contained within the specified project and zone.  
*/
await gapi.client.instanceGroupManagers.list({ project: "project", zone: "zone",  }); 
    
/* 
Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action.  
*/
await gapi.client.instanceGroupManagers.listManagedInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.  
*/
await gapi.client.instanceGroupManagers.recreateInstances({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.  
*/
await gapi.client.instanceGroupManagers.resize({ instanceGroupManager: "instanceGroupManager", project: "project", size: 1, zone: "zone",  }); 
    
/* 
Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you recreate them.  
*/
await gapi.client.instanceGroupManagers.setInstanceTemplate({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.  
*/
await gapi.client.instanceGroupManagers.setTargetPools({ instanceGroupManager: "instanceGroupManager", project: "project", zone: "zone",  }); 
    
/* 
Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read  Adding instances for more information.  
*/
await gapi.client.instanceGroups.addInstances({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  }); 
    
/* 
Retrieves the list of instance groups and sorts them by zone.  
*/
await gapi.client.instanceGroups.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read  Deleting an instance group for more information.  
*/
await gapi.client.instanceGroups.delete({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  }); 
    
/* 
Returns the specified instance group. Get a list of available instance groups by making a list() request.  
*/
await gapi.client.instanceGroups.get({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  }); 
    
/* 
Creates an instance group in the specified project using the parameters that are included in the request.  
*/
await gapi.client.instanceGroups.insert({ project: "project", zone: "zone",  }); 
    
/* 
Retrieves the list of instance groups that are located in the specified project and zone.  
*/
await gapi.client.instanceGroups.list({ project: "project", zone: "zone",  }); 
    
/* 
Lists the instances in the specified instance group.  
*/
await gapi.client.instanceGroups.listInstances({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  }); 
    
/* 
Removes one or more instances from the specified instance group, but does not delete those instances.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration before the VM instance is removed or deleted.  
*/
await gapi.client.instanceGroups.removeInstances({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  }); 
    
/* 
Sets the named ports for the specified instance group.  
*/
await gapi.client.instanceGroups.setNamedPorts({ instanceGroup: "instanceGroup", project: "project", zone: "zone",  }); 
    
/* 
Deletes the specified instance template. If you delete an instance template that is being referenced from another instance group, the instance group will not be able to create or recreate virtual machine instances. Deleting an instance template is permanent and cannot be undone.  
*/
await gapi.client.instanceTemplates.delete({ instanceTemplate: "instanceTemplate", project: "project",  }); 
    
/* 
Returns the specified instance template. Get a list of available instance templates by making a list() request.  
*/
await gapi.client.instanceTemplates.get({ instanceTemplate: "instanceTemplate", project: "project",  }); 
    
/* 
Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.  
*/
await gapi.client.instanceTemplates.insert({ project: "project",  }); 
    
/* 
Retrieves a list of instance templates that are contained within the specified project and zone.  
*/
await gapi.client.instanceTemplates.list({ project: "project",  }); 
    
/* 
Adds an access config to an instance's network interface.  
*/
await gapi.client.instances.addAccessConfig({ instance: "instance", networkInterface: "networkInterface", project: "project", zone: "zone",  }); 
    
/* 
Retrieves aggregated list of instances.  
*/
await gapi.client.instances.aggregatedList({ project: "project",  }); 
    
/* 
Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a disk at the same time. For more information, read Adding a persistent disk to your instance.  
*/
await gapi.client.instances.attachDisk({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.  
*/
await gapi.client.instances.delete({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Deletes an access config from an instance's network interface.  
*/
await gapi.client.instances.deleteAccessConfig({ accessConfig: "accessConfig", instance: "instance", networkInterface: "networkInterface", project: "project", zone: "zone",  }); 
    
/* 
Detaches a disk from an instance.  
*/
await gapi.client.instances.detachDisk({ deviceName: "deviceName", instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Returns the specified Instance resource. Get a list of available instances by making a list() request.  
*/
await gapi.client.instances.get({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Returns the specified instance's serial port output.  
*/
await gapi.client.instances.getSerialPortOutput({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Creates an instance resource in the specified project using the data included in the request.  
*/
await gapi.client.instances.insert({ project: "project", zone: "zone",  }); 
    
/* 
Retrieves the list of instances contained within the specified zone.  
*/
await gapi.client.instances.list({ project: "project", zone: "zone",  }); 
    
/* 
Performs a reset on the instance. For more information, see Resetting an instance.  
*/
await gapi.client.instances.reset({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Sets the auto-delete flag for a disk attached to an instance.  
*/
await gapi.client.instances.setDiskAutoDelete({ autoDelete: , deviceName: "deviceName", instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.  
*/
await gapi.client.instances.setLabels({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.  
*/
await gapi.client.instances.setMachineResources({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Changes the machine type for a stopped instance to the machine type specified in the request.  
*/
await gapi.client.instances.setMachineType({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Sets metadata for the specified instance to the data included in the request.  
*/
await gapi.client.instances.setMetadata({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read Specifying a Minimum CPU Platform.  
*/
await gapi.client.instances.setMinCpuPlatform({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Sets an instance's scheduling options.  
*/
await gapi.client.instances.setScheduling({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.  
*/
await gapi.client.instances.setServiceAccount({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Sets tags for the specified instance to the data included in the request.  
*/
await gapi.client.instances.setTags({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.  
*/
await gapi.client.instances.start({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.  
*/
await gapi.client.instances.startWithEncryptionKey({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur per-minute, virtual machine usage charges while they are stopped, but any resources that the virtual machine is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.  
*/
await gapi.client.instances.stop({ instance: "instance", project: "project", zone: "zone",  }); 
    
/* 
Returns the specified License resource.  
*/
await gapi.client.licenses.get({ license: "license", project: "project",  }); 
    
/* 
Retrieves an aggregated list of machine types.  
*/
await gapi.client.machineTypes.aggregatedList({ project: "project",  }); 
    
/* 
Returns the specified machine type. Get a list of available machine types by making a list() request.  
*/
await gapi.client.machineTypes.get({ machineType: "machineType", project: "project", zone: "zone",  }); 
    
/* 
Retrieves a list of machine types available to the specified project.  
*/
await gapi.client.machineTypes.list({ project: "project", zone: "zone",  }); 
    
/* 
Adds a peering to the specified network.  
*/
await gapi.client.networks.addPeering({ network: "network", project: "project",  }); 
    
/* 
Deletes the specified network.  
*/
await gapi.client.networks.delete({ network: "network", project: "project",  }); 
    
/* 
Returns the specified network. Get a list of available networks by making a list() request.  
*/
await gapi.client.networks.get({ network: "network", project: "project",  }); 
    
/* 
Creates a network in the specified project using the data included in the request.  
*/
await gapi.client.networks.insert({ project: "project",  }); 
    
/* 
Retrieves the list of networks available to the specified project.  
*/
await gapi.client.networks.list({ project: "project",  }); 
    
/* 
Patches the specified network with the data included in the request.  
*/
await gapi.client.networks.patch({ network: "network", project: "project",  }); 
    
/* 
Removes a peering from the specified network.  
*/
await gapi.client.networks.removePeering({ network: "network", project: "project",  }); 
    
/* 
Switches the network mode from auto subnet mode to custom subnet mode.  
*/
await gapi.client.networks.switchToCustomMode({ network: "network", project: "project",  }); 
    
/* 
Disable this project as a shared VPC host project.  
*/
await gapi.client.projects.disableXpnHost({ project: "project",  }); 
    
/* 
Disable a serivce resource (a.k.a service project) associated with this host project.  
*/
await gapi.client.projects.disableXpnResource({ project: "project",  }); 
    
/* 
Enable this project as a shared VPC host project.  
*/
await gapi.client.projects.enableXpnHost({ project: "project",  }); 
    
/* 
Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.  
*/
await gapi.client.projects.enableXpnResource({ project: "project",  }); 
    
/* 
Returns the specified Project resource.  
*/
await gapi.client.projects.get({ project: "project",  }); 
    
/* 
Get the shared VPC host project that this project links to. May be empty if no link exists.  
*/
await gapi.client.projects.getXpnHost({ project: "project",  }); 
    
/* 
Get service resources (a.k.a service project) associated with this host project.  
*/
await gapi.client.projects.getXpnResources({ project: "project",  }); 
    
/* 
List all shared VPC host projects visible to the user in an organization.  
*/
await gapi.client.projects.listXpnHosts({ project: "project",  }); 
    
/* 
Moves a persistent disk from one zone to another.  
*/
await gapi.client.projects.moveDisk({ project: "project",  }); 
    
/* 
Moves an instance and its attached persistent disks from one zone to another.  
*/
await gapi.client.projects.moveInstance({ project: "project",  }); 
    
/* 
Sets metadata common to all instances within the specified project using the data included in the request.  
*/
await gapi.client.projects.setCommonInstanceMetadata({ project: "project",  }); 
    
/* 
Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.  
*/
await gapi.client.projects.setUsageExportBucket({ project: "project",  }); 
    
/* 
Deletes the specified autoscaler.  
*/
await gapi.client.regionAutoscalers.delete({ autoscaler: "autoscaler", project: "project", region: "region",  }); 
    
/* 
Returns the specified autoscaler.  
*/
await gapi.client.regionAutoscalers.get({ autoscaler: "autoscaler", project: "project", region: "region",  }); 
    
/* 
Creates an autoscaler in the specified project using the data included in the request.  
*/
await gapi.client.regionAutoscalers.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves a list of autoscalers contained within the specified region.  
*/
await gapi.client.regionAutoscalers.list({ project: "project", region: "region",  }); 
    
/* 
Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.regionAutoscalers.patch({ project: "project", region: "region",  }); 
    
/* 
Updates an autoscaler in the specified project using the data included in the request.  
*/
await gapi.client.regionAutoscalers.update({ project: "project", region: "region",  }); 
    
/* 
Deletes the specified regional BackendService resource.  
*/
await gapi.client.regionBackendServices.delete({ backendService: "backendService", project: "project", region: "region",  }); 
    
/* 
Returns the specified regional BackendService resource.  
*/
await gapi.client.regionBackendServices.get({ backendService: "backendService", project: "project", region: "region",  }); 
    
/* 
Gets the most recent health check results for this regional BackendService.  
*/
await gapi.client.regionBackendServices.getHealth({ backendService: "backendService", project: "project", region: "region",  }); 
    
/* 
Creates a regional BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a regional backend service. Read  Restrictions and Guidelines for more information.  
*/
await gapi.client.regionBackendServices.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves the list of regional BackendService resources available to the specified project in the given region.  
*/
await gapi.client.regionBackendServices.list({ project: "project", region: "region",  }); 
    
/* 
Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.regionBackendServices.patch({ backendService: "backendService", project: "project", region: "region",  }); 
    
/* 
Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.  
*/
await gapi.client.regionBackendServices.update({ backendService: "backendService", project: "project", region: "region",  }); 
    
/* 
Retrieves an aggregated list of commitments.  
*/
await gapi.client.regionCommitments.aggregatedList({ project: "project",  }); 
    
/* 
Returns the specified commitment resource. Get a list of available commitments by making a list() request.  
*/
await gapi.client.regionCommitments.get({ commitment: "commitment", project: "project", region: "region",  }); 
    
/* 
Creates a commitment in the specified project using the data included in the request.  
*/
await gapi.client.regionCommitments.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves a list of commitments contained within the specified region.  
*/
await gapi.client.regionCommitments.list({ project: "project", region: "region",  }); 
    
/* 
Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.  
*/
await gapi.client.regionInstanceGroupManagers.abandonInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  }); 
    
/* 
Deletes the specified managed instance group and all of the instances in that group.  
*/
await gapi.client.regionInstanceGroupManagers.delete({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  }); 
    
/* 
Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.  
*/
await gapi.client.regionInstanceGroupManagers.deleteInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  }); 
    
/* 
Returns all of the details about the specified managed instance group.  
*/
await gapi.client.regionInstanceGroupManagers.get({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  }); 
    
/* 
Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.

A regional managed instance group can contain up to 2000 instances.  
*/
await gapi.client.regionInstanceGroupManagers.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves the list of managed instance groups that are contained within the specified region.  
*/
await gapi.client.regionInstanceGroupManagers.list({ project: "project", region: "region",  }); 
    
/* 
Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances.  
*/
await gapi.client.regionInstanceGroupManagers.listManagedInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  }); 
    
/* 
Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.

You can specify a maximum of 1000 instances with this method per request.  
*/
await gapi.client.regionInstanceGroupManagers.recreateInstances({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  }); 
    
/* 
Changes the intended size for the managed instance group. If you increase the size, the group schedules actions to create new instances using the current instance template. If you decrease the size, the group schedules delete actions on one or more instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.

If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has elapsed before the VM instance is removed or deleted.  
*/
await gapi.client.regionInstanceGroupManagers.resize({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region", size: 1,  }); 
    
/* 
Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.  
*/
await gapi.client.regionInstanceGroupManagers.setInstanceTemplate({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  }); 
    
/* 
Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.  
*/
await gapi.client.regionInstanceGroupManagers.setTargetPools({ instanceGroupManager: "instanceGroupManager", project: "project", region: "region",  }); 
    
/* 
Returns the specified instance group resource.  
*/
await gapi.client.regionInstanceGroups.get({ instanceGroup: "instanceGroup", project: "project", region: "region",  }); 
    
/* 
Retrieves the list of instance group resources contained within the specified region.  
*/
await gapi.client.regionInstanceGroups.list({ project: "project", region: "region",  }); 
    
/* 
Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running.  
*/
await gapi.client.regionInstanceGroups.listInstances({ instanceGroup: "instanceGroup", project: "project", region: "region",  }); 
    
/* 
Sets the named ports for the specified regional instance group.  
*/
await gapi.client.regionInstanceGroups.setNamedPorts({ instanceGroup: "instanceGroup", project: "project", region: "region",  }); 
    
/* 
Deletes the specified region-specific Operations resource.  
*/
await gapi.client.regionOperations.delete({ operation: "operation", project: "project", region: "region",  }); 
    
/* 
Retrieves the specified region-specific Operations resource.  
*/
await gapi.client.regionOperations.get({ operation: "operation", project: "project", region: "region",  }); 
    
/* 
Retrieves a list of Operation resources contained within the specified region.  
*/
await gapi.client.regionOperations.list({ project: "project", region: "region",  }); 
    
/* 
Returns the specified Region resource. Get a list of available regions by making a list() request.  
*/
await gapi.client.regions.get({ project: "project", region: "region",  }); 
    
/* 
Retrieves the list of region resources available to the specified project.  
*/
await gapi.client.regions.list({ project: "project",  }); 
    
/* 
Retrieves an aggregated list of routers.  
*/
await gapi.client.routers.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified Router resource.  
*/
await gapi.client.routers.delete({ project: "project", region: "region", router: "router",  }); 
    
/* 
Returns the specified Router resource. Get a list of available routers by making a list() request.  
*/
await gapi.client.routers.get({ project: "project", region: "region", router: "router",  }); 
    
/* 
Retrieves runtime information of the specified router.  
*/
await gapi.client.routers.getRouterStatus({ project: "project", region: "region", router: "router",  }); 
    
/* 
Creates a Router resource in the specified project and region using the data included in the request.  
*/
await gapi.client.routers.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves a list of Router resources available to the specified project.  
*/
await gapi.client.routers.list({ project: "project", region: "region",  }); 
    
/* 
Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.  
*/
await gapi.client.routers.patch({ project: "project", region: "region", router: "router",  }); 
    
/* 
Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.  
*/
await gapi.client.routers.preview({ project: "project", region: "region", router: "router",  }); 
    
/* 
Updates the specified Router resource with the data included in the request.  
*/
await gapi.client.routers.update({ project: "project", region: "region", router: "router",  }); 
    
/* 
Deletes the specified Route resource.  
*/
await gapi.client.routes.delete({ project: "project", route: "route",  }); 
    
/* 
Returns the specified Route resource. Get a list of available routes by making a list() request.  
*/
await gapi.client.routes.get({ project: "project", route: "route",  }); 
    
/* 
Creates a Route resource in the specified project using the data included in the request.  
*/
await gapi.client.routes.insert({ project: "project",  }); 
    
/* 
Retrieves the list of Route resources available to the specified project.  
*/
await gapi.client.routes.list({ project: "project",  }); 
    
/* 
Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.

For more information, see Deleting snaphots.  
*/
await gapi.client.snapshots.delete({ project: "project", snapshot: "snapshot",  }); 
    
/* 
Returns the specified Snapshot resource. Get a list of available snapshots by making a list() request.  
*/
await gapi.client.snapshots.get({ project: "project", snapshot: "snapshot",  }); 
    
/* 
Retrieves the list of Snapshot resources contained within the specified project.  
*/
await gapi.client.snapshots.list({ project: "project",  }); 
    
/* 
Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.  
*/
await gapi.client.snapshots.setLabels({ project: "project", resource: "resource",  }); 
    
/* 
Deletes the specified SslCertificate resource.  
*/
await gapi.client.sslCertificates.delete({ project: "project", sslCertificate: "sslCertificate",  }); 
    
/* 
Returns the specified SslCertificate resource. Get a list of available SSL certificates by making a list() request.  
*/
await gapi.client.sslCertificates.get({ project: "project", sslCertificate: "sslCertificate",  }); 
    
/* 
Creates a SslCertificate resource in the specified project using the data included in the request.  
*/
await gapi.client.sslCertificates.insert({ project: "project",  }); 
    
/* 
Retrieves the list of SslCertificate resources available to the specified project.  
*/
await gapi.client.sslCertificates.list({ project: "project",  }); 
    
/* 
Retrieves an aggregated list of subnetworks.  
*/
await gapi.client.subnetworks.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified subnetwork.  
*/
await gapi.client.subnetworks.delete({ project: "project", region: "region", subnetwork: "subnetwork",  }); 
    
/* 
Expands the IP CIDR range of the subnetwork to a specified value.  
*/
await gapi.client.subnetworks.expandIpCidrRange({ project: "project", region: "region", subnetwork: "subnetwork",  }); 
    
/* 
Returns the specified subnetwork. Get a list of available subnetworks list() request.  
*/
await gapi.client.subnetworks.get({ project: "project", region: "region", subnetwork: "subnetwork",  }); 
    
/* 
Creates a subnetwork in the specified project using the data included in the request.  
*/
await gapi.client.subnetworks.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves a list of subnetworks available to the specified project.  
*/
await gapi.client.subnetworks.list({ project: "project", region: "region",  }); 
    
/* 
Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.  
*/
await gapi.client.subnetworks.setPrivateIpGoogleAccess({ project: "project", region: "region", subnetwork: "subnetwork",  }); 
    
/* 
Deletes the specified TargetHttpProxy resource.  
*/
await gapi.client.targetHttpProxies.delete({ project: "project", targetHttpProxy: "targetHttpProxy",  }); 
    
/* 
Returns the specified TargetHttpProxy resource. Get a list of available target HTTP proxies by making a list() request.  
*/
await gapi.client.targetHttpProxies.get({ project: "project", targetHttpProxy: "targetHttpProxy",  }); 
    
/* 
Creates a TargetHttpProxy resource in the specified project using the data included in the request.  
*/
await gapi.client.targetHttpProxies.insert({ project: "project",  }); 
    
/* 
Retrieves the list of TargetHttpProxy resources available to the specified project.  
*/
await gapi.client.targetHttpProxies.list({ project: "project",  }); 
    
/* 
Changes the URL map for TargetHttpProxy.  
*/
await gapi.client.targetHttpProxies.setUrlMap({ project: "project", targetHttpProxy: "targetHttpProxy",  }); 
    
/* 
Deletes the specified TargetHttpsProxy resource.  
*/
await gapi.client.targetHttpsProxies.delete({ project: "project", targetHttpsProxy: "targetHttpsProxy",  }); 
    
/* 
Returns the specified TargetHttpsProxy resource. Get a list of available target HTTPS proxies by making a list() request.  
*/
await gapi.client.targetHttpsProxies.get({ project: "project", targetHttpsProxy: "targetHttpsProxy",  }); 
    
/* 
Creates a TargetHttpsProxy resource in the specified project using the data included in the request.  
*/
await gapi.client.targetHttpsProxies.insert({ project: "project",  }); 
    
/* 
Retrieves the list of TargetHttpsProxy resources available to the specified project.  
*/
await gapi.client.targetHttpsProxies.list({ project: "project",  }); 
    
/* 
Replaces SslCertificates for TargetHttpsProxy.  
*/
await gapi.client.targetHttpsProxies.setSslCertificates({ project: "project", targetHttpsProxy: "targetHttpsProxy",  }); 
    
/* 
Changes the URL map for TargetHttpsProxy.  
*/
await gapi.client.targetHttpsProxies.setUrlMap({ project: "project", targetHttpsProxy: "targetHttpsProxy",  }); 
    
/* 
Retrieves an aggregated list of target instances.  
*/
await gapi.client.targetInstances.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified TargetInstance resource.  
*/
await gapi.client.targetInstances.delete({ project: "project", targetInstance: "targetInstance", zone: "zone",  }); 
    
/* 
Returns the specified TargetInstance resource. Get a list of available target instances by making a list() request.  
*/
await gapi.client.targetInstances.get({ project: "project", targetInstance: "targetInstance", zone: "zone",  }); 
    
/* 
Creates a TargetInstance resource in the specified project and zone using the data included in the request.  
*/
await gapi.client.targetInstances.insert({ project: "project", zone: "zone",  }); 
    
/* 
Retrieves a list of TargetInstance resources available to the specified project and zone.  
*/
await gapi.client.targetInstances.list({ project: "project", zone: "zone",  }); 
    
/* 
Adds health check URLs to a target pool.  
*/
await gapi.client.targetPools.addHealthCheck({ project: "project", region: "region", targetPool: "targetPool",  }); 
    
/* 
Adds an instance to a target pool.  
*/
await gapi.client.targetPools.addInstance({ project: "project", region: "region", targetPool: "targetPool",  }); 
    
/* 
Retrieves an aggregated list of target pools.  
*/
await gapi.client.targetPools.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified target pool.  
*/
await gapi.client.targetPools.delete({ project: "project", region: "region", targetPool: "targetPool",  }); 
    
/* 
Returns the specified target pool. Get a list of available target pools by making a list() request.  
*/
await gapi.client.targetPools.get({ project: "project", region: "region", targetPool: "targetPool",  }); 
    
/* 
Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.  
*/
await gapi.client.targetPools.getHealth({ project: "project", region: "region", targetPool: "targetPool",  }); 
    
/* 
Creates a target pool in the specified project and region using the data included in the request.  
*/
await gapi.client.targetPools.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves a list of target pools available to the specified project and region.  
*/
await gapi.client.targetPools.list({ project: "project", region: "region",  }); 
    
/* 
Removes health check URL from a target pool.  
*/
await gapi.client.targetPools.removeHealthCheck({ project: "project", region: "region", targetPool: "targetPool",  }); 
    
/* 
Removes instance URL from a target pool.  
*/
await gapi.client.targetPools.removeInstance({ project: "project", region: "region", targetPool: "targetPool",  }); 
    
/* 
Changes a backup target pool's configurations.  
*/
await gapi.client.targetPools.setBackup({ project: "project", region: "region", targetPool: "targetPool",  }); 
    
/* 
Deletes the specified TargetSslProxy resource.  
*/
await gapi.client.targetSslProxies.delete({ project: "project", targetSslProxy: "targetSslProxy",  }); 
    
/* 
Returns the specified TargetSslProxy resource. Get a list of available target SSL proxies by making a list() request.  
*/
await gapi.client.targetSslProxies.get({ project: "project", targetSslProxy: "targetSslProxy",  }); 
    
/* 
Creates a TargetSslProxy resource in the specified project using the data included in the request.  
*/
await gapi.client.targetSslProxies.insert({ project: "project",  }); 
    
/* 
Retrieves the list of TargetSslProxy resources available to the specified project.  
*/
await gapi.client.targetSslProxies.list({ project: "project",  }); 
    
/* 
Changes the BackendService for TargetSslProxy.  
*/
await gapi.client.targetSslProxies.setBackendService({ project: "project", targetSslProxy: "targetSslProxy",  }); 
    
/* 
Changes the ProxyHeaderType for TargetSslProxy.  
*/
await gapi.client.targetSslProxies.setProxyHeader({ project: "project", targetSslProxy: "targetSslProxy",  }); 
    
/* 
Changes SslCertificates for TargetSslProxy.  
*/
await gapi.client.targetSslProxies.setSslCertificates({ project: "project", targetSslProxy: "targetSslProxy",  }); 
    
/* 
Deletes the specified TargetTcpProxy resource.  
*/
await gapi.client.targetTcpProxies.delete({ project: "project", targetTcpProxy: "targetTcpProxy",  }); 
    
/* 
Returns the specified TargetTcpProxy resource. Get a list of available target TCP proxies by making a list() request.  
*/
await gapi.client.targetTcpProxies.get({ project: "project", targetTcpProxy: "targetTcpProxy",  }); 
    
/* 
Creates a TargetTcpProxy resource in the specified project using the data included in the request.  
*/
await gapi.client.targetTcpProxies.insert({ project: "project",  }); 
    
/* 
Retrieves the list of TargetTcpProxy resources available to the specified project.  
*/
await gapi.client.targetTcpProxies.list({ project: "project",  }); 
    
/* 
Changes the BackendService for TargetTcpProxy.  
*/
await gapi.client.targetTcpProxies.setBackendService({ project: "project", targetTcpProxy: "targetTcpProxy",  }); 
    
/* 
Changes the ProxyHeaderType for TargetTcpProxy.  
*/
await gapi.client.targetTcpProxies.setProxyHeader({ project: "project", targetTcpProxy: "targetTcpProxy",  }); 
    
/* 
Retrieves an aggregated list of target VPN gateways.  
*/
await gapi.client.targetVpnGateways.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified target VPN gateway.  
*/
await gapi.client.targetVpnGateways.delete({ project: "project", region: "region", targetVpnGateway: "targetVpnGateway",  }); 
    
/* 
Returns the specified target VPN gateway. Get a list of available target VPN gateways by making a list() request.  
*/
await gapi.client.targetVpnGateways.get({ project: "project", region: "region", targetVpnGateway: "targetVpnGateway",  }); 
    
/* 
Creates a target VPN gateway in the specified project and region using the data included in the request.  
*/
await gapi.client.targetVpnGateways.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves a list of target VPN gateways available to the specified project and region.  
*/
await gapi.client.targetVpnGateways.list({ project: "project", region: "region",  }); 
    
/* 
Deletes the specified UrlMap resource.  
*/
await gapi.client.urlMaps.delete({ project: "project", urlMap: "urlMap",  }); 
    
/* 
Returns the specified UrlMap resource. Get a list of available URL maps by making a list() request.  
*/
await gapi.client.urlMaps.get({ project: "project", urlMap: "urlMap",  }); 
    
/* 
Creates a UrlMap resource in the specified project using the data included in the request.  
*/
await gapi.client.urlMaps.insert({ project: "project",  }); 
    
/* 
Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.  
*/
await gapi.client.urlMaps.invalidateCache({ project: "project", urlMap: "urlMap",  }); 
    
/* 
Retrieves the list of UrlMap resources available to the specified project.  
*/
await gapi.client.urlMaps.list({ project: "project",  }); 
    
/* 
Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.  
*/
await gapi.client.urlMaps.patch({ project: "project", urlMap: "urlMap",  }); 
    
/* 
Updates the specified UrlMap resource with the data included in the request.  
*/
await gapi.client.urlMaps.update({ project: "project", urlMap: "urlMap",  }); 
    
/* 
Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.  
*/
await gapi.client.urlMaps.validate({ project: "project", urlMap: "urlMap",  }); 
    
/* 
Retrieves an aggregated list of VPN tunnels.  
*/
await gapi.client.vpnTunnels.aggregatedList({ project: "project",  }); 
    
/* 
Deletes the specified VpnTunnel resource.  
*/
await gapi.client.vpnTunnels.delete({ project: "project", region: "region", vpnTunnel: "vpnTunnel",  }); 
    
/* 
Returns the specified VpnTunnel resource. Get a list of available VPN tunnels by making a list() request.  
*/
await gapi.client.vpnTunnels.get({ project: "project", region: "region", vpnTunnel: "vpnTunnel",  }); 
    
/* 
Creates a VpnTunnel resource in the specified project and region using the data included in the request.  
*/
await gapi.client.vpnTunnels.insert({ project: "project", region: "region",  }); 
    
/* 
Retrieves a list of VpnTunnel resources contained in the specified project and region.  
*/
await gapi.client.vpnTunnels.list({ project: "project", region: "region",  }); 
    
/* 
Deletes the specified zone-specific Operations resource.  
*/
await gapi.client.zoneOperations.delete({ operation: "operation", project: "project", zone: "zone",  }); 
    
/* 
Retrieves the specified zone-specific Operations resource.  
*/
await gapi.client.zoneOperations.get({ operation: "operation", project: "project", zone: "zone",  }); 
    
/* 
Retrieves a list of Operation resources contained within the specified zone.  
*/
await gapi.client.zoneOperations.list({ project: "project", zone: "zone",  }); 
    
/* 
Returns the specified Zone resource. Get a list of available zones by making a list() request.  
*/
await gapi.client.zones.get({ project: "project", zone: "zone",  }); 
    
/* 
Retrieves the list of Zone resources available to the specified project.  
*/
await gapi.client.zones.list({ project: "project",  });
```