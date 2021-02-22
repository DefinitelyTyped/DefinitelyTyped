// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Tasks {
        namespace Collection {
            interface TasklistsCollection {
                // Returns the authenticated user's specified task list.
                get(tasklist: string): Schema.TaskList;
                // Creates a new task list and adds it to the authenticated user's task lists.
                insert(resource: Schema.TaskList): Schema.TaskList;
                // Returns all the authenticated user's task lists.
                list(): Schema.TaskLists;
                // Returns all the authenticated user's task lists.
                list(optionalArgs: object): Schema.TaskLists;
                // Updates the authenticated user's specified task list. This method supports patch semantics.
                patch(resource: Schema.TaskList, tasklist: string): Schema.TaskList;
                // Deletes the authenticated user's specified task list.
                remove(tasklist: string): void;
                // Updates the authenticated user's specified task list.
                update(resource: Schema.TaskList, tasklist: string): Schema.TaskList;
            }
            interface TasksCollection {
                // Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be
                // returned by default when retrieving all tasks for a task list.
                clear(tasklist: string): void;
                // Returns the specified task.
                get(tasklist: string, task: string): Schema.Task;
                // Creates a new task on the specified task list.
                insert(resource: Schema.Task, tasklist: string): Schema.Task;
                // Creates a new task on the specified task list.
                insert(resource: Schema.Task, tasklist: string, optionalArgs: object): Schema.Task;
                // Returns all tasks in the specified task list.
                list(tasklist: string): Schema.Tasks;
                // Returns all tasks in the specified task list.
                list(tasklist: string, optionalArgs: object): Schema.Tasks;
                // Moves the specified task to another position in the task list. This can include putting it as a child task under a new
                // parent and/or move it to a different position among its sibling tasks.
                move(tasklist: string, task: string): Schema.Task;
                // Moves the specified task to another position in the task list. This can include putting it as a child task under a new
                // parent and/or move it to a different position among its sibling tasks.
                move(tasklist: string, task: string, optionalArgs: object): Schema.Task;
                // Updates the specified task. This method supports patch semantics.
                patch(resource: Schema.Task, tasklist: string, task: string): Schema.Task;
                // Deletes the specified task from the task list.
                remove(tasklist: string, task: string): void;
                // Updates the specified task.
                update(resource: Schema.Task, tasklist: string, task: string): Schema.Task;
            }
        }
        namespace Schema {
            interface Task {
                // Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
                completed?: string;
                // Flag indicating whether the task has been deleted. The default is False.
                deleted?: boolean;
                // Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion
                // of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due
                // via the API.
                due?: string;
                // ETag of the resource.
                etag?: string;
                // Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list
                // was last cleared. The default is False. This field is read-only.
                hidden?: boolean;
                // Task identifier.
                id?: string;
                // Type of the resource. This is always "tasks#task".
                kind?: string;
                // Collection of links. This collection is read-only.
                links?: Schema.TaskLinks[];
                // Notes describing the task. Optional.
                notes?: string;
                // Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method
                // to move the task under a different parent or to the top level.
                parent?: string;
                // String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If
                // this string is greater than another task's corresponding position string according to lexicographical ordering, the task
                // is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the
                // "move" method to move the task to another position.
                position?: string;
                // URL pointing to this task. Used to retrieve, update, or delete this task.
                selfLink?: string;
                // Status of the task. This is either "needsAction" or "completed".
                status?: string;
                // Title of the task.
                title?: string;
                // Last modification time of the task (as a RFC 3339 timestamp).
                updated?: string;
            }
            interface TaskLinks {
                // The description. In HTML speak: Everything between <a> and </a>.
                description?: string;
                // The URL.
                link?: string;
                // Type of the link, e.g. "email".
                type?: string;
            }
            interface TaskList {
                // ETag of the resource.
                etag?: string;
                // Task list identifier.
                id?: string;
                // Type of the resource. This is always "tasks#taskList".
                kind?: string;
                // URL pointing to this task list. Used to retrieve, update, or delete this task list.
                selfLink?: string;
                // Title of the task list.
                title?: string;
                // Last modification time of the task list (as a RFC 3339 timestamp).
                updated?: string;
            }
            interface TaskLists {
                // ETag of the resource.
                etag?: string;
                // Collection of task lists.
                items?: Schema.TaskList[];
                // Type of the resource. This is always "tasks#taskLists".
                kind?: string;
                // Token that can be used to request the next page of this result.
                nextPageToken?: string;
            }
            interface Tasks {
                // ETag of the resource.
                etag?: string;
                // Collection of tasks.
                items?: Schema.Task[];
                // Type of the resource. This is always "tasks#tasks".
                kind?: string;
                // Token used to access the next page of this result.
                nextPageToken?: string;
            }
        }
    }
    // The Google Tasks API lets you manage your tasks and task lists.
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
declare const Tasks: GoogleAppsScript.Tasks;
