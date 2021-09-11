import { Mongo } from 'meteor/mongo';

// Tests Mongo Collection Types

// Test without default transform function
type DBUser = {
    _id: string;
    name: string;
    surname: string;
};

// $ExpectType Collection<DBUser, DBUser>
const Users = new Mongo.Collection<DBUser>('users');

Users.find({}).map(doc => {
    // $ExpectType DBUser
    doc;
    return doc;
});
Users.find({}, {}).map(doc => {
    // $ExpectType DBUser
    doc;
    return doc;
});
Users.find({}, { transform: null }).map(doc => {
    // $ExpectType DBUser
    doc;
    return doc;
});
Users.find(
    {},
    {
        transform: doc => {
            // $ExpectType DBUser
            doc;
            return { fullName: `${doc.surname} ${doc.name}` };
        },
    },
).map(doc => {
    // $ExpectType { fullName: string; }
    doc;
    return doc;
});

Users.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
});

Users.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
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
    transform: (doc: DBUser) => ({ fullName: `${doc.surname} ${doc.name}` }),
});

Users.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
});

Users.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBUser
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
    transform: (doc: DBUser) => ({ fullName: `${doc.surname} ${doc.name}` }),
});

Users.find({}).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType DBUser
        newDoc;
        // $ExpectType DBUser
        oldDoc;
        return false;
    },
});

Users.find(
    {},
    {
        transform: doc => {
            // $ExpectType DBUser
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
        // $ExpectType DBUser
        newDoc;
        // $ExpectType DBUser
        oldDoc;
        return false;
    },
});

// $ExpectType DBUser | undefined
Users.findOne({});
// $ExpectType DBUser | undefined
Users.findOne({}, {});
// $ExpectType DBUser | undefined
Users.findOne({}, { transform: null });
// $ExpectType { fullName: string; } | undefined
Users.findOne(
    {},
    {
        transform: doc => {
            // $ExpectType DBUser
            doc;
            return { fullName: `${doc.surname} ${doc.name}` };
        },
    },
);

// Test with default transform function
type DBAttachment = {
    _id: string;
    size: number;
};

interface AttachmentDocument extends DBAttachment {}

class AttachmentDocument {
    constructor(doc: DBAttachment) {
        Object.assign(this, doc);
    }

    getSize() {
        return this.size;
    }
}

// $ExpectType Collection<DBAttachment, AttachmentDocument>
export const Attachment = new Mongo.Collection<DBAttachment, AttachmentDocument>('attachments', {
    transform: doc => {
        // $ExpectType DBAttachment
        doc;
        return new AttachmentDocument(doc);
    },
});

Attachment.find({}).map(doc => {
    // $ExpectType AttachmentDocument
    doc;
    return doc;
});
Attachment.find({}, {}).map(doc => {
    // $ExpectType AttachmentDocument
    doc;
    return doc;
});
Attachment.find({}, { transform: null }).map(doc => {
    // $ExpectType DBAttachment
    doc;
    return doc;
});
Attachment.find(
    {},
    {
        transform: doc => {
            // $ExpectType DBAttachment
            doc;
            return { fileSize: doc.size };
        },
    },
).map(doc => {
    // $ExpectType { fileSize: number; }
    doc;
    return doc;
});

// $ExpectType AttachmentDocument | undefined
Attachment.findOne({});
// $ExpectType AttachmentDocument | undefined
Attachment.findOne({}, {});
// $ExpectType DBAttachment | undefined
Attachment.findOne({}, { transform: null });
// $ExpectType { fileSize: number; } | undefined
Attachment.findOne(
    {},
    {
        transform: doc => {
            // $ExpectType DBAttachment
            doc;
            return { fileSize: doc.size };
        },
    },
);

Attachment.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDocument
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDocument
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDocument
        doc;
        return true;
    },
});

Attachment.deny({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBAttachment
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBAttachment
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBAttachment
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
    transform: (doc: DBAttachment) => ({ fileSize: doc.size }),
});

Attachment.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDocument
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDocument
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType AttachmentDocument
        doc;
        return true;
    },
});

Attachment.allow({
    update: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBAttachment
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBAttachment
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType DBAttachment
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
    transform: (doc: DBAttachment) => ({ fileSize: doc.size }),
});

Attachment.find({}).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType AttachmentDocument
        newDoc;
        // $ExpectType AttachmentDocument
        oldDoc;
        return false;
    },
});

Attachment.find(
    {},
    {
        transform: doc => {
            // $ExpectType DBAttachment
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
        // $ExpectType DBAttachment
        newDoc;
        // $ExpectType DBAttachment
        oldDoc;
        return false;
    },
});

// Check Errors
// $ExpectError
Attachment.find({}, { transform: '' });

// $ExpectError
Attachment.find({}, { transform: (foo: { foo: string }) => foo });

// $ExpectError
Attachment.findOne({}, { transform: 123 });

// $ExpectError
Attachment.allow({ transform: { foo: 'foo' } });

// $ExpectError
Attachment.deny({ transform: [] });

// $ExpectError
new Mongo.Collection<DBAttachment, AttachmentDocument>('attachments', { transform: '' });
