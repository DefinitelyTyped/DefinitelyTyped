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

