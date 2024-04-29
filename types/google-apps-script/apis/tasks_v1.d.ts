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
                completed?: string | undefined;
                deleted?: boolean | undefined;
                due?: string | undefined;
                etag?: string | undefined;
                hidden?: boolean | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                links?: Tasks.Schema.TaskLinks[] | undefined;
                notes?: string | undefined;
                parent?: string | undefined;
                position?: string | undefined;
                selfLink?: string | undefined;
                status?: string | undefined;
                title?: string | undefined;
                updated?: string | undefined;
            }
            interface TaskLinks {
                description?: string | undefined;
                link?: string | undefined;
                type?: string | undefined;
            }
            interface TaskList {
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                selfLink?: string | undefined;
                title?: string | undefined;
                updated?: string | undefined;
            }
            interface TaskLists {
                etag?: string | undefined;
                items?: Tasks.Schema.TaskList[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface Tasks {
                etag?: string | undefined;
                items?: Tasks.Schema.Task[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
        }
    }
    interface Tasks {
        Tasklists?: Tasks.Collection.TasklistsCollection | undefined;
        Tasks?: Tasks.Collection.TasksCollection | undefined;
        // Create a new instance of Task
        newTask(): Tasks.Schema.Task;
        // Create a new instance of TaskLinks
        newTaskLinks(): Tasks.Schema.TaskLinks;
        // Create a new instance of TaskList
        newTaskList(): Tasks.Schema.TaskList;
    }
}

declare var Tasks: GoogleAppsScript.Tasks;
