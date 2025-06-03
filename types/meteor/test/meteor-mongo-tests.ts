import { Mongo, MongoInternals } from 'meteor/mongo';

// Tests Mongo Collection Types

// Test without default transform function
type UserDoc = {
    _id: string;
    name: string;
    surname: string;
};

type UserModel = UserDoc & {
    fullname(): string;
};

// $ExpectType Collection<UserDoc, UserModel>
const Users = new Mongo.Collection<UserDoc, UserModel>('users');

Users.find({}).map(doc => {
    // $ExpectType UserModel
    doc;
    return doc;
});
Users.find({}, {}).map(doc => {
    // $ExpectType UserModel
    doc;
    return doc;
});
Users.find({}, { transform: null }).map(doc => {
    // $ExpectType UserDoc
    doc;
    return doc;
});
Users.find(
    {},
    {
        transform: doc => {
            // $ExpectType UserDoc
            doc;
            return { fullName: `${doc.surname} ${doc.name}` };
        },
    },
).map(doc => {
    // $ExpectType { fullName: string; }
    doc;
    return doc;
});

// $ExpectType number
Users.find({}).count();

// $ExpectType Promise<number>
Users.find({}).countAsync();

// $ExpectType Promise<UserModel[]>
Users.find({}).mapAsync(doc => {
    // $ExpectType UserModel
    doc;
    return doc;
});

for (const user of Users.find({})) {
    // $ExpectType UserModel
    user;
}

Users.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserModel
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserModel
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserModel
        doc;
        return true;
    },
});

Users.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserDoc
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserDoc
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserDoc
        doc;
        return true;
    },

    transform: null,
});

Users.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fullName: string; }
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fullName: string; }
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fullName: string; }
        doc;
        return true;
    },

    // Can not figure out why we should define manually type of document
    transform: (doc: UserDoc) => ({ fullName: `${doc.surname} ${doc.name}` }),
});

Users.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserModel
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserModel
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserModel
        doc;
        return true;
    },
});

Users.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserDoc
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserDoc
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType UserDoc
        doc;
        return true;
    },

    transform: null,
});

Users.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fullName: string; }
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fullName: string; }
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fullName: string; }
        doc;
        return true;
    },

    // Can not figure out why we should define manually type of document
    transform: (doc: UserDoc) => ({ fullName: `${doc.surname} ${doc.name}` }),
});

Users.find({}).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType UserModel
        newDoc;
        // $ExpectType UserModel
        oldDoc;
        return false;
    },
});

Users.find(
    {},
    {
        transform: doc => {
            // $ExpectType UserDoc
            doc;
            return { fullName: `${doc.surname} ${doc.name}` };
        },
    },
).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType { fullName: string; }
        newDoc;
        // $ExpectType { fullName: string; }
        oldDoc;
        return false;
    },
});

Users.find({}, { transform: null }).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType UserDoc
        newDoc;
        // $ExpectType UserDoc
        oldDoc;
        return false;
    },
});

// $ExpectType UserModel | undefined
Users.findOne({});
// $ExpectType UserModel | undefined
Users.findOne({}, {});
// $ExpectType UserDoc | undefined
Users.findOne({}, { transform: null });
// $ExpectType { fullName: string; } | undefined
Users.findOne(
    {},
    {
        transform: doc => {
            // $ExpectType UserDoc
            doc;
            return { fullName: `${doc.surname} ${doc.name}` };
        },
    },
);

// Test with default transform function
type AttachmentDoc = {
    _id: string;
    size: number;
};

interface AttachmentModel extends AttachmentDoc {}

class AttachmentModel {
    constructor(doc: AttachmentDoc) {
        Object.assign(this, doc);
    }

    getSize() {
        return this.size;
    }
}

// $ExpectType Collection<AttachmentDoc, AttachmentModel>
export const Attachment = new Mongo.Collection<AttachmentDoc, AttachmentModel>('attachments', {
    transform: doc => {
        // $ExpectType AttachmentDoc
        doc;
        return new AttachmentModel(doc);
    },
});

Attachment.find({}).map(doc => {
    // $ExpectType AttachmentModel
    doc;
    return doc;
});
Attachment.find({}, {}).map(doc => {
    // $ExpectType AttachmentModel
    doc;
    return doc;
});
Attachment.find({}, { transform: null }).map(doc => {
    // $ExpectType AttachmentDoc
    doc;
    return doc;
});
Attachment.find(
    {},
    {
        transform: doc => {
            // $ExpectType AttachmentDoc
            doc;
            return { fileSize: doc.size };
        },
    },
).map(doc => {
    // $ExpectType { fileSize: number; }
    doc;
    return doc;
});

// $ExpectType AttachmentModel | undefined
Attachment.findOne({});
// $ExpectType AttachmentModel | undefined
Attachment.findOne({}, {});
// $ExpectType AttachmentDoc | undefined
Attachment.findOne({}, { transform: null });
// $ExpectType { fileSize: number; } | undefined
Attachment.findOne(
    {},
    {
        transform: doc => {
            // $ExpectType AttachmentDoc
            doc;
            return { fileSize: doc.size };
        },
    },
);
// $ExpectType Promise<AttachmentModel | undefined>
Attachment.findOneAsync({}, { hint: 'indexName' });

for (const attachment of Attachment.find({})) {
    // $ExpectType AttachmentModel
    attachment;
}

Attachment.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentModel
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentModel
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentModel
        doc;
        return true;
    },
});

Attachment.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDoc
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDoc
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDoc
        doc;
        return true;
    },

    transform: null,
});

Attachment.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fileSize: number; }
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fileSize: number; }
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fileSize: number; }
        doc;
        return true;
    },

    // Can not figure out why we should define manually type of document
    transform: (doc: AttachmentDoc) => ({ fileSize: doc.size }),
});

Attachment.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentModel
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentModel
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentModel
        doc;
        return true;
    },
});

Attachment.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDoc
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDoc
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDoc
        doc;
        return true;
    },

    transform: null,
});

Attachment.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fileSize: number; }
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fileSize: number; }
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { fileSize: number; }
        doc;
        return true;
    },

    // Can not figure out why we should define manually type of document
    transform: (doc: AttachmentDoc) => ({ fileSize: doc.size }),
});

Attachment.find({}).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType AttachmentModel
        newDoc;
        // $ExpectType AttachmentModel
        oldDoc;
        return false;
    },
});

Attachment.find(
    {},
    {
        transform: doc => {
            // $ExpectType AttachmentDoc
            doc;
            return { fileSize: doc.size };
        },
    },
).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType { fileSize: number; }
        newDoc;
        // $ExpectType { fileSize: number; }
        oldDoc;
        return false;
    },
});

Attachment.find({}, { transform: null }).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType AttachmentDoc
        newDoc;
        // $ExpectType AttachmentDoc
        oldDoc;
        return false;
    },
});

// Test MongoInternals

MongoInternals.NpmModules.mongodb.module.MongoClient.connect('...');

// Check Errors
// @ts-expect-error
Attachment.find({}, { transform: '' });

// @ts-expect-error
Attachment.find({}, { transform: (foo: { foo: string }) => foo });

// @ts-expect-error
Attachment.findOne({}, { transform: 123 });

// @ts-expect-error
Attachment.allow({ transform: { foo: 'foo' } });

// @ts-expect-error
Attachment.deny({ transform: [] });

// @ts-expect-error
new Mongo.Collection<AttachmentDoc, AttachmentModel>('attachments', { transform: '' });
