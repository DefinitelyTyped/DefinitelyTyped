// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Tasks {
    namespace Collection {
      interface TasklistsCollection {
        // Returns the authenticated user's specified task list.
        get(tasklist: string): Tasks.Schema.TaskList;
        // Creates a new task list and adds it to the authenticated user's task lists.
        insert(resource: Schema.TaskList): Tasks.Schema.TaskList;
        // Returns all the authenticated user's task lists.
        list(): Tasks.Schema.TaskLists;
        // Returns all the authenticated user's task lists.
        list(optionalArgs: object): Tasks.Schema.TaskLists;
        // Updates the authenticated user's specified task list. This method supports patch semantics.
        patch(resource: Schema.TaskList, tasklist: string): Tasks.Schema.TaskList;
        // Deletes the authenticated user's specified task list.
        remove(tasklist: string): void;
        // Updates the authenticated user's specified task list.
        update(resource: Schema.TaskList, tasklist: string): Tasks.Schema.TaskList;
      }
      interface TasksCollection {
        // Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
        clear(tasklist: string): void;
        // Returns the specified task.
        get(tasklist: string, task: string): Tasks.Schema.Task;
        // Creates a new task on the specified task list.
        insert(resource: Schema.Task, tasklist: string): Tasks.Schema.Task;
        // Creates a new task on the specified task list.
        insert(resource: Schema.Task, tasklist: string, optionalArgs: object): Tasks.Schema.Task;
        // Returns all tasks in the specified task list.
        list(tasklist: string): Tasks.Schema.Tasks;
        // Returns all tasks in the specified task list.
        list(tasklist: string, optionalArgs: object): Tasks.Schema.Tasks;
        // Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
        move(tasklist: string, task: string): Tasks.Schema.Task;
        // Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
        move(tasklist: string, task: string, optionalArgs: object): Tasks.Schema.Task;
        // Updates the specified task. This method supports patch semantics.
        patch(resource: Schema.Task, tasklist: string, task: string): Tasks.Schema.Task;
        // Deletes the specified task from the task list.
        remove(tasklist: string, task: string): void;
        // Updates the specified task.
        update(resource: Schema.Task, tasklist: string, task: string): Tasks.Schema.Task;
      }
    }
    namespace Schema {
      interface Task {
        completed?: string;
        deleted?: boolean;
        due?: string;
        etag?: string;
        hidden?: boolean;
        id?: string;
        kind?: string;
        links?: Tasks.Schema.TaskLinks[];
        notes?: string;
        parent?: string;
        position?: string;
        selfLink?: string;
        status?: string;
        title?: string;
        updated?: string;
      }
      interface TaskLinks {
        description?: string;
        link?: string;
        type?: string;
      }
      interface TaskList {
        etag?: string;
        id?: string;
        kind?: string;
        selfLink?: string;
        title?: string;
        updated?: string;
      }
      interface TaskLists {
        etag?: string;
        items?: Tasks.Schema.TaskList[];
        kind?: string;
        nextPageToken?: string;
      }
      interface Tasks {
        etag?: string;
        items?: Tasks.Schema.Task[];
        kind?: string;
        nextPageToken?: string;
      }
    }
  }
  interface Tasks {
    Tasklists?: Tasks.Collection.TasklistsCollection;
    Tasks?: Tasks.Collection.TasksCollection;
    // Create a new instance of Task
    newTask(): Tasks.Schema.Task;
    // Create a new instance of TaskLinks
    newTaskLinks(): Tasks.Schema.TaskLinks;
    // Create a new instance of TaskList
    newTaskList(): Tasks.Schema.TaskList;
  }
}

declare var Tasks: GoogleAppsScript.Tasks;
