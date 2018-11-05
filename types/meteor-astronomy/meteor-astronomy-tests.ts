import { Class, Enum } from 'meteor/jagi:astronomy';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

interface PostInterface {
    title: string;
    userId: string;
    publishedAt: Date;
}

const Posts = new Mongo.Collection<PostInterface>('posts');

const Post = Class.create<PostInterface>({
    name: 'Post',
    collection: Posts,
    fields: {
        title: {
            type: String,
            validators: [{
                type: 'minLength',
                param: 3
            }]
        },
        userId: String,
        publishedAt: Date
    },
    behaviors: {
        timestamp: {}
    },
});

let post = new Post({
    title: 'text',
});

// Validate length of the "title" field.
post.save();

// Notice that we call the "findOne" method
// from the "Post" class not from the "Posts" collection.
post = Post.findOne('id');
// Auto convert a string input value to a number.
post.title = 'input[name=title]';
post.publishedAt = new Date();
// Check if all fields are valid and update document
// with only the fields that have changed.
post.save({fields: ['title']});

interface UserProfileInterface {
    nickname: string;
    firstName: string;
    createdAt: Date;
    age: number;
}

const UserProfile = Class.create<UserProfileInterface>({
    name: 'UserProfile',
    fields: {
        nickname: String,
        firstName: String,
        createdAt: Date,
        age: Number,
    }
});

interface UserInterface extends Meteor.User {
    address: object;
    phone: string;
    phoneNumber: string;
}

const User = Class.create<UserInterface>({
    name: 'User',
    collection: Meteor.users as Mongo.Collection<UserInterface>,
    fields: {
        createdAt: Number,
        emails: {
            type: [Object],
            default: () => [],
        },
        profile: {
            type: UserProfile,
            default: () => {},
        },
        address: {
            type: Object,
            optional: true
        },
        phoneNumber: {
            type: String,
        },
        phone: {
            type: String,
            resolve(doc) {
                return doc.phoneNumber;
            }
        }
    },
    indexes: {
        fullName: { // Index name.
            fields: { // List of fields.
                phoneNumber: 1,
                createdAt: 1
            },
            options: {}
        }
    }
});

const user = User.findOne();
user.set({username: 'user1'});
user.save();

enum IStatus {
    OPENED, CLOSED, DONE, CANCELED
}

const Status = Enum.create<IStatus>({
    name: 'Status',
    identifiers: IStatus,
});

const Issue = Class.create({
    name: 'Issue',
    fields: {
        status: {
            type: Status
        }
    }
});

Status.getValues(); // [0, 1, 2, 3]

const StatusBis = Enum.create({
    name: 'Status',
    identifiers: {
        OPENED: 5,
        CLOSED: null,
        DONE: 15,
        CANCELED: undefined
    }
});

StatusBis.getValues(); // [5, 6, 15, 16]

const statusNumber = IStatus.OPENED;

Status.getIdentifier(statusNumber); // "OPENED"
