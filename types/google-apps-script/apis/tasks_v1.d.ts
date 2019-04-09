// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Tasks_v1 {
    namespace Collection {
      export interface TasklistsCollection {
        // Returns the authenticated user's specified task list.
        get(tasklist: string): Tasks_v1.Schema.TaskList;
        // Creates a new task list and adds it to the authenticated user's task lists.
        insert(resource: Schema.TaskList): Tasks_v1.Schema.TaskList;
        // Returns all the authenticated user's task lists.
        list(): Tasks_v1.Schema.TaskLists;
        // Returns all the authenticated user's task lists.
        list(optionalArgs: object): Tasks_v1.Schema.TaskLists;
        // Updates the authenticated user's specified task list. This method supports patch semantics.
        patch(resource: Schema.TaskList, tasklist: string): Tasks_v1.Schema.TaskList;
        // Deletes the authenticated user's specified task list.
        remove(tasklist: string): void;
        // Updates the authenticated user's specified task list.
        update(resource: Schema.TaskList, tasklist: string): Tasks_v1.Schema.TaskList;
      }
      export interface TasksCollection {
        // Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
        clear(tasklist: string): void;
        // Returns the specified task.
        get(tasklist: string, task: string): Tasks_v1.Schema.Task;
        // Creates a new task on the specified task list.
        insert(resource: Schema.Task, tasklist: string): Tasks_v1.Schema.Task;
        // Creates a new task on the specified task list.
        insert(resource: Schema.Task, tasklist: string, optionalArgs: object): Tasks_v1.Schema.Task;
        // Returns all tasks in the specified task list.
        list(tasklist: string): Tasks_v1.Schema.Tasks;
        // Returns all tasks in the specified task list.
        list(tasklist: string, optionalArgs: object): Tasks_v1.Schema.Tasks;
        // Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
        move(tasklist: string, task: string): Tasks_v1.Schema.Task;
        // Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
        move(tasklist: string, task: string, optionalArgs: object): Tasks_v1.Schema.Task;
        // Updates the specified task. This method supports patch semantics.
        patch(resource: Schema.Task, tasklist: string, task: string): Tasks_v1.Schema.Task;
        // Deletes the specified task from the task list.
        remove(tasklist: string, task: string): void;
        // Updates the specified task.
        update(resource: Schema.Task, tasklist: string, task: string): Tasks_v1.Schema.Task;
      }
    }
    namespace Schema {
      export interface Task {
        completed?: string;
        deleted?: boolean;
        due?: string;
        etag?: string;
        hidden?: boolean;
        id?: string;
        kind?: string;
        links?: Tasks_v1.Schema.TaskLinks[];
        notes?: string;
        parent?: string;
        position?: string;
        selfLink?: string;
        status?: string;
        title?: string;
        updated?: string;
      }
      export interface TaskLinks {
        description?: string;
        link?: string;
        type?: string;
      }
      export interface TaskList {
        etag?: string;
        id?: string;
        kind?: string;
        selfLink?: string;
        title?: string;
        updated?: string;
      }
      export interface TaskLists {
        etag?: string;
        items?: Tasks_v1.Schema.TaskList[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface Tasks {
        etag?: string;
        items?: Tasks_v1.Schema.Task[];
        kind?: string;
        nextPageToken?: string;
      }
    }
  }
  export interface Tasks_v1 {
    Tasklists?: Tasks_v1.Collection.TasklistsCollection;
    Tasks?: Tasks_v1.Collection.TasksCollection;
    // Create a new instance of Task
    newTask(): Tasks_v1.Schema.Task;
    // Create a new instance of TaskLinks
    newTaskLinks(): Tasks_v1.Schema.TaskLinks;
    // Create a new instance of TaskList
    newTaskList(): Tasks_v1.Schema.TaskList;
  }
}

declare var Tasks_v1: GoogleAppsScript.Tasks_v1;
