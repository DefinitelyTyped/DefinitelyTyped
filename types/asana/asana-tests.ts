import * as asana from 'asana';
declare var console: { log(x: any): void };
declare var process: { env: { ASANA_API_KEY: string } };

let version: string = asana.VERSION;

// https://github.com/Asana/node-asana#usage
// Usage

var client = asana.Client.create().useAccessToken('my_access_token');
client.users.me().then(function(me) {
  console.log(me);
});

client = asana.Client.create({
  clientId: 123,
  clientSecret: 'my_client_secret',
  redirectUri: 'my_redirect_uri'
});

client.useOauth({
  credentials: 'my_access_token'
});

var credentials = {
  // access_token: 'my_access_token',
  refresh_token: 'my_refresh_token'
};

client.useOauth({
  credentials: credentials
});

// https://github.com/Asana/node-asana#collections
// Collections

let tagId: number = null;
client.tasks.findByTag(tagId, { limit: 5 }).then((collection: any) => {
  console.log(collection.data);
  // [ .. array of up to 5 task objects .. ]

  client.tasks.findByTag(tagId).then((firstPage: any) => {
    console.log(firstPage.data);
    collection.nextPage().then((secondPage: any) => {
      console.log(secondPage.data);
    });
  });
});

client.tasks.findByTag(tagId).then((collection: any) => {
  // Fetch up to 200 tasks, using multiple pages if necessary
  collection.fetch(200).then((tasks: any) => {
    console.log(tasks);
  });
});

client.tasks.findByTag(tagId).then((collection: any) => {
  collection.stream().on('data', (task: any) => {
    console.log(task);
  });
});

// https://github.com/Asana/node-asana#examples
// Examples

var Asana = asana;

// Using the API key for basic authentication. This is reasonable to get
// started with, but Oauth is more secure and provides more features.
var client = Asana.Client.create().useBasicAuth(process.env.ASANA_API_KEY);

client.users.me()
  .then((user: any) => {
    var userId = user.id;
    // The user's "default" workspace is the first one in the list, though
    // any user can have multiple workspaces so you can't always assume this
    // is the one you want to work with.
    var workspaceId = user.workspaces[0].id;
    return client.tasks.findAll({
      assignee: userId,
      workspace: workspaceId,
      completed_since: 'now',
      opt_fields: 'id,name,assignee_status,completed'
    });
  })
  .then((response: any) => {
    // There may be more pages of data, we could stream or return a promise
    // to request those here - for now, let's just return the first page
    // of items.
    return response.data;
  })
  .filter((task: any) => {
    return task.assignee_status === 'today' ||
      task.assignee_status === 'new';
  })
  .then((list: any) => {
    console.log(list);
  });

// Client should be a constructor and accept a dispatcher (e.g. for rate limiting)
// see: https://github.com/Asana/node-asana/blob/e8400cb386710bf9d310b9a538e291ce908f1291/test/client_spec.js#L33-L37

let dispatcher = new asana.Dispatcher({retryOnRateLimit: true});
client = new asana.Client(dispatcher);

// GIDs should handle both strings and numbers
// https://github.com/Asana/node-asana/blob/master/test/resources/attachments_spec.js
client.attachments.findById('foobar', {opt_fields: 'id,name'}).then();
client.attachments.findByTask('foobar', {opt_fields: 'id,name'}).then();
// https://github.com/Asana/node-asana/blob/master/test/resources/projects_spec.js
client.projects.createInWorkspace('foobar', { name: 'test' }).then();
client.projects.findById('foobar', {opt_fields: 'id,name'}).then();
client.projects.findByWorkspace('foobar', {opt_fields: 'id,name'}).then();
client.projects.update('foobar', { name: 'test' }).then();
// minimal task update
client.tasks.update('my_gid', {}).then((task) => console.log(task.name));
// christmas tree update
// https://developers.asana.com/docs/update-a-task
client.tasks.update('task_gid', {
    approval_status: 'approved',
    assignee: 'their_gid',
    assignee_section: 'section_or_my_tasks_column_gid',
    completed: true,
    custom_fields: { custom_field_gid_1: 123, custom_field_gid_2: 456 },
    due_at: 'some_date_and_time',
    due_on: 'some_date',
    html_notes: '<b>some html</b>',
    liked: true,
    name: 'some task name',
    notes: 'some description',
    parent: 'some parent task gid',
    start_on: 'some_date',
    workspace: 'some_workspace_gid',
}).then((task) => console.log(task.name));
client.projects.delete('foobar').then();
// https://github.com/Asana/node-asana/blob/master/test/resources/stories_spec.js
client.stories.findById('foobar', {opt_fields: 'id,name'}).then();
client.stories.findByTask('foobar', {opt_fields: 'id,name'}).then();
client.stories.createOnTask('foobar', { name: 'test' }).then();
// https://github.com/Asana/node-asana/blob/master/test/resources/tasks_spec.js
client.tasks.createInWorkspace('foobar', { name: 'Test' }).then();
client.tasks.findById('foobar', {opt_fields: 'id,name'}).then();
client.tasks.findByProject('foobar', {opt_fields: 'id,name'}).then();
client.tasks.findByTag('foobar', {opt_fields: 'id,name'}).then();
client.tasks.update('foobar', { name: 'Test' }).then();
client.tasks.delete('foobar').then();
client.tasks.addFollowers('foobar', {followers: [1]}).then();
client.tasks.removeFollowers('foobar', {followers: [1]}).then();
client.tasks.projects('foobar').then();
client.tasks.addProject('foobar', {project: 1}).then();
client.tasks.removeProject('foobar', {project: 1}).then();
client.tasks.tags('foobar').then();
client.tasks.addTag('foobar', {tag: 1}).then();
client.tasks.removeTag('foobar', {tag: 1}).then();
client.tasks.subtasks('foobar').then();
client.tasks.addSubtask('foobar', {name: 'foo'}).then();
// client.tasks.setParent('foobar', {parent: 'fizzbuzz'}).then(); TODO: add declaration for this
// https://github.com/Asana/node-asana/blob/master/test/resources/teams_spec.js
client.teams.findById('foobar', {opt_fields: 'id,name'}).then();
client.teams.findByOrganization('foobar', {opt_fields: 'id,name'}).then();
client.teams.users('foobar', {opt_fields: 'id,name'}).then();
client.teams.addUser('foobar', {user: 'foo'}).then();
client.teams.removeUser('foobar', {user: 'foo'}).then();
// https://github.com/Asana/node-asana/blob/master/test/resources/users_spec.js
client.users.findById('foobar', {opt_fields: 'id,name'}).then();
client.users.findByWorkspace('foobar', {opt_fields: 'id,name'}).then();
// https://github.com/Asana/node-asana/blob/master/test/resources/workspaces_spec.js
client.workspaces.update('foobar', { name: 'Test' }).then();
client.workspaces.typeahead('baz', {type: 'task', query: 'foobar'}).then();

// Workspaces have a boolean property "is_organization"
// https://developers.asana.com/docs/workspace
let workspaceShort: asana.resources.Workspaces.ShortType;
workspaceShort.is_organization = true;
let workspace: asana.resources.Workspaces.Type;
workspace.is_organization = true;

// Tasks.FindAllParams should accept a project gid and/or a section gid, and the workspace gid should be optional
// https://developers.asana.com/docs/get-multiple-tasks
client.tasks.findAll({workspace: 'foobar'}).then();
client.tasks.findAll({project: 'foobar'}).then();
client.tasks.findAll({section: 'foobar'}).then();

// Projects.FindAllParams should accept a workspace gid
// https://developers.asana.com/docs/get-multiple-projects
client.projects.findAll({workspace: 'foobar'}).then();

// minimal task update
client.tasks.updateTask('my_gid', {}).then((task) => console.log(task.name));

// christmas tree update
// https://developers.asana.com/docs/update-a-task
client.tasks.updateTask('task_gid', {
  approval_status: 'approved',
  assignee: 'their_gid',
  assignee_section: 'section_or_my_tasks_column_gid',
  completed: true,
  custom_fields: { custom_field_gid_1: 123, custom_field_gid_2: 456 },
  due_at: 'some_date_and_time',
  due_on: 'some_date',
  html_notes: '<b>some html</b>',
  liked: true,
  name: 'some task name',
  notes: 'some description',
  parent: 'some parent task gid',
  start_on: 'some_date',
  workspace: 'some_workspace_gid',
}).then((task) => console.log(task.name));

client.tasks.getTask('task_gid');

client.workspaces.getWorkspaces();

client.customFields
  .getCustomFieldsForWorkspace('workspace_gid')
  .then((customFields: asana.resources.ResourceList<asana.resources.CustomFields.Type>) => {
    const stream = customFields.stream();
    stream.on('data', data => {
      console.log(data);
    });
    stream.on('end', () => { });
    stream.on('finish', () => { });
    stream.on('error', () => { });
  });

// no type in params
// @ts-expect-error
client.typeahead.typeaheadForWorkspace('workspace_gid', {});

// opt_fields takes string, not array
const badTypeaheadForWorkspaceQuery: asana.resources.Typeahead.TypeaheadParams = {
    resource_type: 'task',
    query: 'my query',
    opt_pretty: true,
    // @ts-expect-error
    opt_fields: ['name', 'completed', 'parent', 'custom_fields.gid', 'custom_fields.number_value'],
};

const typeaheadForWorkspaceQuery: asana.resources.Typeahead.TypeaheadParams = {
    resource_type: 'task',
    query: 'my query',
    opt_pretty: true,
    opt_fields: 'name,completed,parent,custom_fields.gid,custom_fields.number_value',
};
client.typeahead.typeaheadForWorkspace('workspace_gid', typeaheadForWorkspaceQuery);

client.tasks.create({
    workspace: '123',
    name: 'my task',
    memberships: [
        {
            project: '789',
            section: '123',
        },
    ],
});

client.sections.findById('123').then((section) => {
    const project: asana.resources.Projects.Type | undefined = section.project;
    const name: string = section.name;
    const createdAt: string = section.created_at;
});

client.userTaskLists.findByUser('123', {workspace: '456'});

client.typeahead.typeaheadForWorkspace('123', {resource_type: 'custom_field', query: 'foo'})
    .then((customFields) => {
        const customField = customFields.data[0];
        // @ts-expect-error
        customField.completed_at;
    });

client.typeahead.typeaheadForWorkspace('123', {resource_type: 'project', query: 'foo'})
    .then((projects) => {
        const project = projects.data[0];
        // $ExpectType string
        project.color;
        // @ts-expect-error
        tag.completed_at;
    });

client.typeahead.typeaheadForWorkspace('123', {resource_type: 'portfolio', query: 'foo'})
    .then((portfolios) => {
        const portfolio = portfolios.data[0];
        // @ts-expect-error
        portfolio.completed_at;
    });

client.typeahead.typeaheadForWorkspace('123', {resource_type: 'tag', query: 'foo'})
    .then((tags) => {
        const tag = tags.data[0];
        // $ExpectType string
        tag.notes;
        // @ts-expect-error
        tag.completed_at;
    });


client.typeahead.typeaheadForWorkspace('123', {resource_type: 'task', query: 'foo'})
    .then((tasks: asana.resources.ResourceList<asana.resources.Tasks.Type>) => {
        const task = tasks.data[0];
        // $ExpectType string
        task.completed_at;
        // @ts-expect-error
        task.color;
    });


client.typeahead.typeaheadForWorkspace('123', {resource_type: 'user', query: 'foo'})
    .then((users) => {
        const user = users.data[0];
        // $ExpectType Resource[]
        user.workspaces;
        // @ts-expect-error
        user.completed_at;
    });
