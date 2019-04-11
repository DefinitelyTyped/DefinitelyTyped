# TypeScript typings for TaskQueue API v1beta2
Accesses a Google App Engine Pull Task Queue over REST.
For detailed description please check [documentation](https://developers.google.com/appengine/docs/python/taskqueue/rest).

## Installing

Install typings for TaskQueue API:
```
npm install @types/gapi.client.taskqueue@v1beta2 --save-dev
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
gapi.client.load('taskqueue', 'v1beta2', () => {
    // now we can use gapi.client.taskqueue
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Tasks and Taskqueues
        'https://www.googleapis.com/auth/taskqueue',
    
        // Consume Tasks from your Taskqueues
        'https://www.googleapis.com/auth/taskqueue.consumer',
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

After that you can use TaskQueue API resources:

```typescript 
    
/* 
Get detailed information about a TaskQueue.  
*/
await gapi.client.taskqueues.get({ project: "project", taskqueue: "taskqueue",  }); 
    
/* 
Delete a task from a TaskQueue.  
*/
await gapi.client.tasks.delete({ project: "project", task: "task", taskqueue: "taskqueue",  }); 
    
/* 
Get a particular task from a TaskQueue.  
*/
await gapi.client.tasks.get({ project: "project", task: "task", taskqueue: "taskqueue",  }); 
    
/* 
Insert a new task in a TaskQueue  
*/
await gapi.client.tasks.insert({ project: "project", taskqueue: "taskqueue",  }); 
    
/* 
Lease 1 or more tasks from a TaskQueue.  
*/
await gapi.client.tasks.lease({ leaseSecs: 1, numTasks: 1, project: "project", taskqueue: "taskqueue",  }); 
    
/* 
List Tasks in a TaskQueue  
*/
await gapi.client.tasks.list({ project: "project", taskqueue: "taskqueue",  }); 
    
/* 
Update tasks that are leased out of a TaskQueue. This method supports patch semantics.  
*/
await gapi.client.tasks.patch({ newLeaseSeconds: 1, project: "project", task: "task", taskqueue: "taskqueue",  }); 
    
/* 
Update tasks that are leased out of a TaskQueue.  
*/
await gapi.client.tasks.update({ newLeaseSeconds: 1, project: "project", task: "task", taskqueue: "taskqueue",  });
```