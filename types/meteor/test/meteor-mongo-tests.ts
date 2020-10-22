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
Users.find({}, { transform: doc => 'null' }).map(doc => {
    // $ExpectType string
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
        // $ExpectType { foo: string; name: string; }
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { foo: string; name: string; }
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { foo: string; name: string; }
        doc;
        return true;
    },
    transform: (doc: DBUser) => ({ foo: 'foo', name: doc.name }),
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
        // $ExpectType { foo: string; name: string; }
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { foo: string; name: string; }
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { foo: string; name: string; }
        doc;
        return true;
    },
    transform: (doc: DBUser) => ({ foo: 'foo', name: doc.name }),
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

Users.find({}, { transform: (doc: DBUser) => 'null' }).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType string
        newDoc;
        // $ExpectType string
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
const userOne = Users.findOne({});
// $ExpectType DBUser | undefined
const userTwo = Users.findOne({}, {});
// $ExpectType DBUser | undefined
const userThree = Users.findOne({}, { transform: null });
// $ExpectType string | undefined
const userFour = Users.findOne({}, { transform: doc => 'null' });

// Test with default transform function
type DBAttachment = {
    _id: string;
    size: number;
};

interface AttachmentDocument extends DBAttachment {}

class AttachmentDocument {
    constructor(doc: DBAttachment) {
        return Object.assign(this, doc);
    }

    getSize() {
        return this.size;
    }
}

// $ExpectType Collection<DBAttachment, AttachmentDocument>
export const Attachment = new Mongo.Collection<DBAttachment, AttachmentDocument>('attachments', {
    transform: doc => new AttachmentDocument(doc),
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
Attachment.find({}, { transform: doc => 'null' }).map(doc => {
    // $ExpectType string
    doc;
    return doc;
});

// $ExpectType AttachmentDocument | undefined
const attachOne = Attachment.findOne({});
// $ExpectType AttachmentDocument | undefined
const attachTwo = Attachment.findOne({}, {});
// $ExpectType DBAttachment | undefined
const attachThree = Attachment.findOne({}, { transform: null });
// $ExpectType string | undefined
const attachFour = Attachment.findOne({}, { transform: doc => 'null' });

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
        // $ExpectType { foo: string; size: number; }
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { foo: string; size: number; }
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { foo: string; size: number; }
        doc;
        return true;
    },
    transform: (doc: DBAttachment) => ({ foo: 'foo', size: doc.size }),
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
        // $ExpectType { foo: string; size: number; }
        doc;
        return true;
    },
    remove: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { foo: string; size: number; }
        doc;
        return true;
    },
    insert: (userId, doc) => {
        // $ExpectType string
        userId;
        // $ExpectType { foo: string; size: number; }
        doc;
        return true;
    },
    transform: (doc: DBAttachment) => ({ foo: 'foo', size: doc.size }),
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

Attachment.find({}, { transform: (doc: DBAttachment) => 'null' }).observe({
    changed: (newDoc, oldDoc) => {
        // $ExpectType string
        newDoc;
        // $ExpectType string
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
