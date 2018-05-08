# TypeScript typings for Fusion Tables API v2
API for working with Fusion Tables data.
For detailed description please check [documentation](https://developers.google.com/fusiontables).

## Installing

Install typings for Fusion Tables API:
```
npm install @types/gapi.client.fusiontables@v2 --save-dev
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
gapi.client.load('fusiontables', 'v2', () => {
    // now we can use gapi.client.fusiontables
    // ... 
});
```

Don't forget to authenticate your client before sending any request to resources:
```typescript

// declare client_id registered in Google Developers Console
var client_id = '',
    scope = [     
        // Manage your Fusion Tables
        'https://www.googleapis.com/auth/fusiontables',
    
        // View your Fusion Tables
        'https://www.googleapis.com/auth/fusiontables.readonly',
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

After that you can use Fusion Tables API resources:

```typescript 
    
/* 
Deletes the specified column.  
*/
await gapi.client.column.delete({ columnId: "columnId", tableId: "tableId",  }); 
    
/* 
Retrieves a specific column by its ID.  
*/
await gapi.client.column.get({ columnId: "columnId", tableId: "tableId",  }); 
    
/* 
Adds a new column to the table.  
*/
await gapi.client.column.insert({ tableId: "tableId",  }); 
    
/* 
Retrieves a list of columns.  
*/
await gapi.client.column.list({ tableId: "tableId",  }); 
    
/* 
Updates the name or type of an existing column. This method supports patch semantics.  
*/
await gapi.client.column.patch({ columnId: "columnId", tableId: "tableId",  }); 
    
/* 
Updates the name or type of an existing column.  
*/
await gapi.client.column.update({ columnId: "columnId", tableId: "tableId",  }); 
    
/* 
Executes a Fusion Tables SQL statement, which can be any of 
- SELECT
- INSERT
- UPDATE
- DELETE
- SHOW
- DESCRIBE
- CREATE statement.  
*/
await gapi.client.query.sql({ sql: "sql",  }); 
    
/* 
Executes a SQL statement which can be any of 
- SELECT
- SHOW
- DESCRIBE  
*/
await gapi.client.query.sqlGet({ sql: "sql",  }); 
    
/* 
Deletes a style.  
*/
await gapi.client.style.delete({ styleId: 1, tableId: "tableId",  }); 
    
/* 
Gets a specific style.  
*/
await gapi.client.style.get({ styleId: 1, tableId: "tableId",  }); 
    
/* 
Adds a new style for the table.  
*/
await gapi.client.style.insert({ tableId: "tableId",  }); 
    
/* 
Retrieves a list of styles.  
*/
await gapi.client.style.list({ tableId: "tableId",  }); 
    
/* 
Updates an existing style. This method supports patch semantics.  
*/
await gapi.client.style.patch({ styleId: 1, tableId: "tableId",  }); 
    
/* 
Updates an existing style.  
*/
await gapi.client.style.update({ styleId: 1, tableId: "tableId",  }); 
    
/* 
Copies a table.  
*/
await gapi.client.table.copy({ tableId: "tableId",  }); 
    
/* 
Deletes a table.  
*/
await gapi.client.table.delete({ tableId: "tableId",  }); 
    
/* 
Retrieves a specific table by its ID.  
*/
await gapi.client.table.get({ tableId: "tableId",  }); 
    
/* 
Imports more rows into a table.  
*/
await gapi.client.table.importRows({ tableId: "tableId",  }); 
    
/* 
Imports a new table.  
*/
await gapi.client.table.importTable({ name: "name",  }); 
    
/* 
Creates a new table.  
*/
await gapi.client.table.insert({  }); 
    
/* 
Retrieves a list of tables a user owns.  
*/
await gapi.client.table.list({  }); 
    
/* 
Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated. This method supports patch semantics.  
*/
await gapi.client.table.patch({ tableId: "tableId",  }); 
    
/* 
Replaces rows of an existing table. Current rows remain visible until all replacement rows are ready.  
*/
await gapi.client.table.replaceRows({ tableId: "tableId",  }); 
    
/* 
Updates an existing table. Unless explicitly requested, only the name, description, and attribution will be updated.  
*/
await gapi.client.table.update({ tableId: "tableId",  }); 
    
/* 
Deletes a specific task by its ID, unless that task has already started running.  
*/
await gapi.client.task.delete({ tableId: "tableId", taskId: "taskId",  }); 
    
/* 
Retrieves a specific task by its ID.  
*/
await gapi.client.task.get({ tableId: "tableId", taskId: "taskId",  }); 
    
/* 
Retrieves a list of tasks.  
*/
await gapi.client.task.list({ tableId: "tableId",  }); 
    
/* 
Deletes a template  
*/
await gapi.client.template.delete({ tableId: "tableId", templateId: 1,  }); 
    
/* 
Retrieves a specific template by its id  
*/
await gapi.client.template.get({ tableId: "tableId", templateId: 1,  }); 
    
/* 
Creates a new template for the table.  
*/
await gapi.client.template.insert({ tableId: "tableId",  }); 
    
/* 
Retrieves a list of templates.  
*/
await gapi.client.template.list({ tableId: "tableId",  }); 
    
/* 
Updates an existing template. This method supports patch semantics.  
*/
await gapi.client.template.patch({ tableId: "tableId", templateId: 1,  }); 
    
/* 
Updates an existing template  
*/
await gapi.client.template.update({ tableId: "tableId", templateId: 1,  });
```