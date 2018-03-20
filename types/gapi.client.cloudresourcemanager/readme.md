# TypeScript typings for Google Cloud Resource Manager API v1
The Google Cloud Resource Manager API provides methods for creating, reading, and updating project metadata.
For detailed description please check [documentation](https://cloud.google.com/resource-manager).

## Installing

Install typings for Google Cloud Resource Manager API:
```
npm install @types/gapi.client.cloudresourcemanager@v1 --save-dev
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
gapi.client.load('cloudresourcemanager', 'v1', () => {
    // now we can use gapi.client.cloudresourcemanager
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
    
        // View your data across Google Cloud Platform services
        'https://www.googleapis.com/auth/cloud-platform.read-only',
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

After that you can use Google Cloud Resource Manager API resources:

```typescript 
    
/* 
Clears a `Policy` from a resource.  
*/
await gapi.client.folders.clearOrgPolicy({ resource: "resource",  }); 
    
/* 
Gets the effective `Policy` on a resource. This is the result of merging
`Policies` in the resource hierarchy. The returned `Policy` will not have
an `etag`set because it is a computed `Policy` across multiple resources.  
*/
await gapi.client.folders.getEffectiveOrgPolicy({ resource: "resource",  }); 
    
/* 
Gets a `Policy` on a resource.

If no `Policy` is set on the resource, a `Policy` is returned with default
values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The
`etag` value can be used with `SetOrgPolicy()` to create or update a
`Policy` during read-modify-write.  
*/
await gapi.client.folders.getOrgPolicy({ resource: "resource",  }); 
    
/* 
Lists `Constraints` that could be applied on the specified resource.  
*/
await gapi.client.folders.listAvailableOrgPolicyConstraints({ resource: "resource",  }); 
    
/* 
Lists all the `Policies` set for a particular resource.  
*/
await gapi.client.folders.listOrgPolicies({ resource: "resource",  }); 
    
/* 
Updates the specified `Policy` on the resource. Creates a new `Policy` for
that `Constraint` on the resource if one does not exist.

Not supplying an `etag` on the request `Policy` results in an unconditional
write of the `Policy`.  
*/
await gapi.client.folders.setOrgPolicy({ resource: "resource",  }); 
    
/* 
Create a Lien which applies to the resource denoted by the `parent` field.

Callers of this method will require permission on the `parent` resource.
For example, applying to `projects/1234` requires permission
`resourcemanager.projects.updateLiens`.

NOTE: Some resources may limit the number of Liens which may be applied.  
*/
await gapi.client.liens.create({  }); 
    
/* 
Delete a Lien by `name`.

Callers of this method will require permission on the `parent` resource.
For example, a Lien with a `parent` of `projects/1234` requires permission
`resourcemanager.projects.updateLiens`.  
*/
await gapi.client.liens.delete({ name: "name",  }); 
    
/* 
List all Liens applied to the `parent` resource.

Callers of this method will require permission on the `parent` resource.
For example, a Lien with a `parent` of `projects/1234` requires permission
`resourcemanager.projects.get`.  
*/
await gapi.client.liens.list({  }); 
    
/* 
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.  
*/
await gapi.client.operations.get({ name: "name",  }); 
    
/* 
Clears a `Policy` from a resource.  
*/
await gapi.client.organizations.clearOrgPolicy({ resource: "resource",  }); 
    
/* 
Fetches an Organization resource identified by the specified resource name.  
*/
await gapi.client.organizations.get({ name: "name",  }); 
    
/* 
Gets the effective `Policy` on a resource. This is the result of merging
`Policies` in the resource hierarchy. The returned `Policy` will not have
an `etag`set because it is a computed `Policy` across multiple resources.  
*/
await gapi.client.organizations.getEffectiveOrgPolicy({ resource: "resource",  }); 
    
/* 
Gets the access control policy for an Organization resource. May be empty
if no such policy or resource exists. The `resource` field should be the
organization's resource name, e.g. "organizations/123".

Authorization requires the Google IAM permission
`resourcemanager.organizations.getIamPolicy` on the specified organization  
*/
await gapi.client.organizations.getIamPolicy({ resource: "resource",  }); 
    
/* 
Gets a `Policy` on a resource.

If no `Policy` is set on the resource, a `Policy` is returned with default
values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The
`etag` value can be used with `SetOrgPolicy()` to create or update a
`Policy` during read-modify-write.  
*/
await gapi.client.organizations.getOrgPolicy({ resource: "resource",  }); 
    
/* 
Lists `Constraints` that could be applied on the specified resource.  
*/
await gapi.client.organizations.listAvailableOrgPolicyConstraints({ resource: "resource",  }); 
    
/* 
Lists all the `Policies` set for a particular resource.  
*/
await gapi.client.organizations.listOrgPolicies({ resource: "resource",  }); 
    
/* 
Searches Organization resources that are visible to the user and satisfy
the specified filter. This method returns Organizations in an unspecified
order. New Organizations do not necessarily appear at the end of the
results.

Search will only return organizations on which the user has the permission
`resourcemanager.organizations.get`  
*/
await gapi.client.organizations.search({  }); 
    
/* 
Sets the access control policy on an Organization resource. Replaces any
existing policy. The `resource` field should be the organization's resource
name, e.g. "organizations/123".

Authorization requires the Google IAM permission
`resourcemanager.organizations.setIamPolicy` on the specified organization  
*/
await gapi.client.organizations.setIamPolicy({ resource: "resource",  }); 
    
/* 
Updates the specified `Policy` on the resource. Creates a new `Policy` for
that `Constraint` on the resource if one does not exist.

Not supplying an `etag` on the request `Policy` results in an unconditional
write of the `Policy`.  
*/
await gapi.client.organizations.setOrgPolicy({ resource: "resource",  }); 
    
/* 
Returns permissions that a caller has on the specified Organization.
The `resource` field should be the organization's resource name,
e.g. "organizations/123".

There are no permissions required for making this API call.  
*/
await gapi.client.organizations.testIamPermissions({ resource: "resource",  }); 
    
/* 
Clears a `Policy` from a resource.  
*/
await gapi.client.projects.clearOrgPolicy({ resource: "resource",  }); 
    
/* 
Request that a new Project be created. The result is an Operation which
can be used to track the creation process. It is automatically deleted
after a few hours, so there is no need to call DeleteOperation.

Our SLO permits Project creation to take up to 30 seconds at the 90th
percentile. As of 2016-08-29, we are observing 6 seconds 50th percentile
latency. 95th percentile latency is around 11 seconds. We recommend
polling at the 5th second with an exponential backoff.

Authorization requires the Google IAM permission
`resourcemanager.projects.create` on the specified parent for the new
project.  
*/
await gapi.client.projects.create({  }); 
    
/* 
Marks the Project identified by the specified
`project_id` (for example, `my-project-123`) for deletion.
This method will only affect the Project if the following criteria are met:

+ The Project does not have a billing account associated with it.
+ The Project has a lifecycle state of
ACTIVE.

This method changes the Project's lifecycle state from
ACTIVE
to DELETE_REQUESTED.
The deletion starts at an unspecified time,
at which point the Project is no longer accessible.

Until the deletion completes, you can check the lifecycle state
checked by retrieving the Project with GetProject,
and the Project remains visible to ListProjects.
However, you cannot update the project.

After the deletion completes, the Project is not retrievable by
the  GetProject and
ListProjects methods.

The caller must have modify permissions for this Project.  
*/
await gapi.client.projects.delete({ projectId: "projectId",  }); 
    
/* 
Retrieves the Project identified by the specified
`project_id` (for example, `my-project-123`).

The caller must have read permissions for this Project.  
*/
await gapi.client.projects.get({ projectId: "projectId",  }); 
    
/* 
Gets a list of ancestors in the resource hierarchy for the Project
identified by the specified `project_id` (for example, `my-project-123`).

The caller must have read permissions for this Project.  
*/
await gapi.client.projects.getAncestry({ projectId: "projectId",  }); 
    
/* 
Gets the effective `Policy` on a resource. This is the result of merging
`Policies` in the resource hierarchy. The returned `Policy` will not have
an `etag`set because it is a computed `Policy` across multiple resources.  
*/
await gapi.client.projects.getEffectiveOrgPolicy({ resource: "resource",  }); 
    
/* 
Returns the IAM access control policy for the specified Project.
Permission is denied if the policy or the resource does not exist.

Authorization requires the Google IAM permission
`resourcemanager.projects.getIamPolicy` on the project  
*/
await gapi.client.projects.getIamPolicy({ resource: "resource",  }); 
    
/* 
Gets a `Policy` on a resource.

If no `Policy` is set on the resource, a `Policy` is returned with default
values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The
`etag` value can be used with `SetOrgPolicy()` to create or update a
`Policy` during read-modify-write.  
*/
await gapi.client.projects.getOrgPolicy({ resource: "resource",  }); 
    
/* 
Lists Projects that are visible to the user and satisfy the
specified filter. This method returns Projects in an unspecified order.
New Projects do not necessarily appear at the end of the list.  
*/
await gapi.client.projects.list({  }); 
    
/* 
Lists `Constraints` that could be applied on the specified resource.  
*/
await gapi.client.projects.listAvailableOrgPolicyConstraints({ resource: "resource",  }); 
    
/* 
Lists all the `Policies` set for a particular resource.  
*/
await gapi.client.projects.listOrgPolicies({ resource: "resource",  }); 
    
/* 
Sets the IAM access control policy for the specified Project. Replaces
any existing policy.

The following constraints apply when using `setIamPolicy()`:

+ Project does not support `allUsers` and `allAuthenticatedUsers` as
`members` in a `Binding` of a `Policy`.

+ The owner role can be granted only to `user` and `serviceAccount`.

+ Service accounts can be made owners of a project directly
without any restrictions. However, to be added as an owner, a user must be
invited via Cloud Platform console and must accept the invitation.

+ A user cannot be granted the owner role using `setIamPolicy()`. The user
must be granted the owner role using the Cloud Platform Console and must
explicitly accept the invitation.

+ Invitations to grant the owner role cannot be sent using
`setIamPolicy()`;
they must be sent only using the Cloud Platform Console.

+ Membership changes that leave the project without any owners that have
accepted the Terms of Service (ToS) will be rejected.

+ If the project is not part of an organization, there must be at least
one owner who has accepted the Terms of Service (ToS) agreement in the
policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner
from the policy will fail. This restriction also applies to legacy
projects that no longer have owners who have accepted the ToS. Edits to
IAM policies will be rejected until the lack of a ToS-accepting owner is
rectified.

+ Calling this method requires enabling the App Engine Admin API.

Note: Removing service accounts from policies or changing their roles
can render services completely inoperable. It is important to understand
how the service account is being used before removing or updating its
roles.

Authorization requires the Google IAM permission
`resourcemanager.projects.setIamPolicy` on the project  
*/
await gapi.client.projects.setIamPolicy({ resource: "resource",  }); 
    
/* 
Updates the specified `Policy` on the resource. Creates a new `Policy` for
that `Constraint` on the resource if one does not exist.

Not supplying an `etag` on the request `Policy` results in an unconditional
write of the `Policy`.  
*/
await gapi.client.projects.setOrgPolicy({ resource: "resource",  }); 
    
/* 
Returns permissions that a caller has on the specified Project.

There are no permissions required for making this API call.  
*/
await gapi.client.projects.testIamPermissions({ resource: "resource",  }); 
    
/* 
Restores the Project identified by the specified
`project_id` (for example, `my-project-123`).
You can only use this method for a Project that has a lifecycle state of
DELETE_REQUESTED.
After deletion starts, the Project cannot be restored.

The caller must have modify permissions for this Project.  
*/
await gapi.client.projects.undelete({ projectId: "projectId",  }); 
    
/* 
Updates the attributes of the Project identified by the specified
`project_id` (for example, `my-project-123`).

The caller must have modify permissions for this Project.  
*/
await gapi.client.projects.update({ projectId: "projectId",  });
```