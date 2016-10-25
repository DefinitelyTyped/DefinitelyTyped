/// <reference path="normalizr.d.ts" />

import { normalize, Schema, arrayOf, unionOf, valuesOf } from 'normalizr';

// First, define a schema for our entities:

const article1 = new Schema('articles');
const user1 = new Schema('users');

// Then we define nesting rules:

article1.define({
    author: user1,
    contributors: arrayOf(user1)
});

// Now we can use this schema in our API response handlers:

const ServerActionCreators = {
    // These are two different XHR endpoints with different response schemas.
    // We can use the schema objects defined earlier to express both of them:

    receiveOneArticle(response: any) {
        // Here, the response is an object containing data about one article.
        // Passing the article schema as second parameter to normalize() lets it
        // correctly traverse the response tree and gather all entities:

        // BEFORE:
        // {
        //   id: 1,
        //   title: 'Some Article',
        //   author: {
        //     id: 7,
        //     name: 'Dan'
        //   },
        //   contributors: [{
        //     id: 10,
        //     name: 'Abe'
        //   }, {
        //     id: 15,
        //     name: 'Fred'
        //   }]
        // }
        //
        // AFTER:
        // {
        //   result: 1,                    // <--- Note object is referenced by ID
        //   entities: {
        //     articles: {
        //       1: {
        //         author: 7,              // <--- Same happens for references to
        //         contributors: [10, 15]  // <--- other entities in the schema
        //         ...}
        //     },
        //     users: {
        //       7: { ... },
        //       10: { ... },
        //       15: { ... }
        //     }
        //   }
        // }

        response = normalize(response, article1);
    },

    receiveAllArticles(response: any) {
        // Here, the response is an object with the key 'articles' referencing
        // an array of article objects. Passing { articles: arrayOf(article) } as
        // second parameter to normalize() lets it correctly traverse the response
        // tree and gather all entities:

        // BEFORE:
        // {
        //   articles: [{
        //     id: 1,
        //     title: 'Some Article',
        //     author: {
        //       id: 7,
        //       name: 'Dan'
        //     },
        //     ...
        //   },
        //   ...
        //   ]
        // }
        //
        // AFTER:
        // {
        //   result: {
        //    articles: [1, 2, ...]     // <--- Note how object array turned into ID array
        //   },
        //   entities: {
        //     articles: {
        //       1: { author: 7, ... }, // <--- Same happens for references to other entities in the schema
        //       2: { ... },
        //       ...
        //     },
        //     users: {
        //       7: { ... },
        //       ..
        //     }
        //   }
        // }

        response = normalize(response, {
            articles: arrayOf(article1)
        });
    }
}

// new Schema(key, [options])

const article2 = new Schema('articles');

// You can use a custom id attribute
const article3 = new Schema('articles', { idAttribute: 'slug' });

// Or you can specify a function to infer it
function generateSlug(entity: any) { /* ... */ }
const article4 = new Schema('articles', { idAttribute: generateSlug });

// Schema.prototype.define(nestedSchema)

const article5 = new Schema('articles');
const user5 = new Schema('users');

article5.define({
    author: user5
});

// Schema.prototype.getKey()

const article6 = new Schema('articles');

article6.getKey();
// articles

// Schema.prototype.getIdAttribute()

const article7 = new Schema('articles');
const slugArticle7 = new Schema('articles', { idAttribute: 'slug' });

article7.getIdAttribute();
// id
slugArticle7.getIdAttribute();
// slug

// arrayOf(schema, [options])

const article8 = new Schema('articles');
const user8 = new Schema('users');

article8.define({
    author: user8,
    contributors: arrayOf(user8)
});

const article9 = new Schema('articles');
const image9 = new Schema('images');
const video9 = new Schema('videos');
const asset9 = {
    images: image9,
    videos: video9
};

// You can specify the name of the attribute that determines the schema
article9.define({
    assets: arrayOf(asset9, { schemaAttribute: 'type' })
});

// Or you can specify a function to infer it
function inferSchema9(entity: any) { /* ... */ }
article9.define({
    assets: arrayOf(asset9, { schemaAttribute: inferSchema9 })
});

// valuesOf(schema, [options])

const article10 = new Schema('articles');
const user10 = new Schema('users');

article10.define({
    collaboratorsByRole: valuesOf(user10)
});

const article11 = new Schema('articles');
const user11 = new Schema('users');
const group11 = new Schema('groups');
const collaborator11 = {
    users: user11,
    groups: group11
};

// You can specify the name of the attribute that determines the schema
article11.define({
    collaboratorsByRole: valuesOf(collaborator11, { schemaAttribute: 'type' })
});

// Or you can specify a function to infer it
function inferSchema11(entity: any) { /* ... */ }
article11.define({
    collaboratorsByRole: valuesOf(collaborator11, { schemaAttribute: inferSchema })
});

// unionOf(schemaMap, [options])

const group12 = new Schema('groups');
const user12 = new Schema('users');

// a member can be either a user or a group
const member12 = {
    users: user12,
    groups: group12
};

// You can specify the name of the attribute that determines the schema
group12.define({
    owner: unionOf(member12, { schemaAttribute: 'type' })
});

// Or you can specify a function to infer it
function inferSchema(entity: any) { /* ... */ }
group12.define({
    creator: unionOf(member12, { schemaAttribute: inferSchema })
});

const group13 = new Schema('groups');
const user13 = new Schema('users');

const member13 = unionOf({
    users: user13,
    groups: group13
}, { schemaAttribute: 'type' });

group13.define({
    owner: member13,
    members: arrayOf(member13),
    relationships: valuesOf(member13)
});

// normalize(obj, schema, [options])

const article14 = new Schema('articles');
const user14 = new Schema('users');

article14.define({
    author: user14,
    contributors: arrayOf(user14),
    meta: {
        likes: arrayOf({
            user: user14
        })
    }
});

// ...

// Normalize one article object
const json = { id: 1, author: /*...*/{} };
const normalized1 = normalize(json, article14);

// Normalize an array of article objects
const arr = [{ id: 1, author: /*...*/{} }/*, ...*/]
const normalized2 = normalize(arr, arrayOf(article14));

// Normalize an array of article objects, referenced by an object key:
const wrappedArr = { articles: [{ id: 1, author: /*...*/{} }/*, ...*/] }
const normalized3 = normalize(wrappedArr, {
    articles: arrayOf(article14)
});
