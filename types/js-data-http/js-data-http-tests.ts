import * as JSData from 'js-data';
import DSHttpAdapter = require("js-data-http");

declare var axios: any;

const adapter = new DSHttpAdapter();
const store = new JSData.DS();
store.registerAdapter('http', adapter, { default: true });

adapter.defaults.basePath = '/api';
adapter.http = axios;

const ADocument: JSData.DSResourceDefinition<any> = store.defineResource<any>('document');

ADocument.inject({ id: 5, author: 'John' });

// bypass the data store
adapter.update(ADocument, 5, { author: 'Johnny' }).then((document: any) => {
    document; // { id: 5, author: 'Johnny' }

    // The updated document has NOT been injected into the data store because we bypassed the data store
    ADocument.get(document.id); // { id: 5, author: 'John' }
});

// Normally you would just go through the data store
ADocument.update(5, { author: 'Johnny' }).then((document: any) => {
    document; // { id: 5, author: 'Johnny' }

    // the updated document has been injected into the data store
    ADocument.get(document.id); // { id: 5, author: 'Johnny' }
});

ADocument.inject({ id: 5, author: 'John' });
ADocument.inject({ id: 6, author: 'John' });

// bypass the data store
adapter.updateAll(ADocument, { author: 'Johnny' }, { author: 'John' }).then(documents => {
    documents[0]; // { id: 5, author: 'Johnny' }

    // The updated documents have NOT been injected into the data store because we bypassed the data store
    ADocument.filter({ author: 'John' }); // [{...}, {...}]
    ADocument.filter({ author: 'Johnny' }); // []
});

// Normally you would just go through the data store
ADocument.updateAll({ author: 'Johnny' }, { author: 'John' }).then(documents => {
    documents[0]; // { id: 5, author: 'Johnny' }

    // the updated documents have been injected into the data store
    ADocument.filter({ author: 'John' }); // []
    ADocument.filter({ author: 'Johnny' }); // [{...}, {...}]
});

adapter.PUT('/user/1', { name: 'Johnny' }).then(data => {
    data.data; // { id: 1, name: 'Johnny', ... }
    data.headers; // {...}
    data.status; // 200
    data.config; // {...}
});

adapter.POST('/user/1', { name: 'John' }).then(data => {
    data.data; // { id: 1, name: 'John', ... }
    data.headers; // {...}
    data.status; // 200
    data.config; // {...}
});

adapter.HTTP({ url: '/user/1', method: 'put', data: { name: 'Johnny' }}).then(data => {
    data.data; // { id: 1, name: 'Johnny', ... }
    data.headers; // {...}
    data.status; // 200
    data.config; // {...}
});

adapter.GET('/user/1').then(data => {
    data.data; // { id: 1, ... }
    data.headers; // {...}
    data.status; // 200
    data.config; // {...}
});

const User: JSData.DSResourceDefinition<any> = store.defineResource('user');

let params: any = {
    age: {
        '>': 30
    }
};

// bypass the data store
adapter.findAll(User, params).then(users => {
    // users[0].age; 55 // etc., etc.

    // the users have NOT been injected into the data store because we bypassed the data store
    User.filter(params); // []
});

// normally you would go through the data store
User.findAll(params).then(users => {
    // users[0].age; 55 // etc., etc.

    // the users have been injected into the data store
    User.filter(params); // [{...}, {...}, ...]
});

// bypass the data store
adapter.find(ADocument, 5).then((document: any) => {
    document; // { id: 5, author: 'John Anderson' }

    // the document has NOT been injected into the data store because we bypassed the data store
    ADocument.get(document.id); // undefined
});

// Normally you would just go through the data store
ADocument.find(5).then((document: any) => {
    document; // { id: 5, author: 'John Anderson' }

    // the document has been injected into the data store
    ADocument.get(document.id); // { id: 5, author: 'John Anderson' }
});

params = {
    author: 'John'
};

// bypass the data store
adapter.destroyAll(ADocument, params).then(() => {
    // the documents have NOT been ejected from the data store because we bypassed the data store
    ADocument.filter(params); // [{...}, {...}, ...]
});

// normally you would go through the data store
ADocument.destroyAll(params).then(() => {
    // the documents have been ejected from the data store
    ADocument.filter(params); // []
});

ADocument.inject({ id: 5, author: 'John' });

// bypass the data store
adapter.destroy(ADocument, 5).then(() => {
    // the document is still in the data store because we bypassed the data store
    // ADocument.get(document.id); // { id: 5, author: 'John' }
});

// Normally you would just go through the data store
ADocument.destroy(5).then(() => {
    // the document has been ejected from the data store
    // ADocument.get(document.id); // undefined
});

adapter.DEL('/user/1').then(data => {
    data.data; // 1
    data.headers; // {...}
    data.status; // 204
    data.config; // {...}
});

// bypass the data store
adapter.create(ADocument, { author: 'John' }).then((document: any) => {
    document; // { id: 5, author: 'John' }

    // The new document has NOT been injected into the data store because we bypassed the data store
    ADocument.get(document.id); // undefined
});

// Normally you would just go through the data store
ADocument.create({ author: 'John' }).then((document: any) => {
    document; // { id: 5, author: 'John' }

    // the new document has been injected into the data store
    ADocument.get(document.id); // { id: 5, author: 'John' }
});
