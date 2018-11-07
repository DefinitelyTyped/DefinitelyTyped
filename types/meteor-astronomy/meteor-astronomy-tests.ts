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
    firstName: string;
    lastName: string;
    phone: string;
    phoneNumber: string;
    fullName: (param: string) => string;
}

const User = Class.create<UserInterface>({
    name: 'User',
    collection: Meteor.users as Mongo.Collection<UserInterface>,
    fields: {
        createdAt: Number,
        firstName: String,
        lastName: String,
        emails: {
            type: [Object],
            default: (): Meteor.UserEmail[] => [],
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
            resolve(doc: UserInterface) {
                return doc.phoneNumber;
            },
        },
    },
    helpers: {
        fullName(param: string): string {
            const fullName = `${this.firstName} ${this.lastName}`;

            if (param === 'lower') {
                return fullName.toLowerCase();
            } else if (param === 'upper') {
                return fullName.toUpperCase();
            }

            return fullName;
        },
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

interface StatusInterface {
    OPENED: number;
    CLOSED: number;
    DONE: number;
    CANCELED: number;
}

const Status = Enum.create<StatusInterface>({
    name: 'Status',
    identifiers: ['OPENED', 'CLOSED', 'DONE', 'CANCELED'],
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

interface StatusBisInterface {
    OPENED: string;
    CLOSED: string;
    DONE: string;
    CANCELED: string;
}

const StatusBis = Enum.create<StatusBisInterface>({
    name: 'Status',
    identifiers: {
        OPENED: 'OPENED',
        CLOSED: 'CLOSED',
        DONE: 'DONE',
        CANCELED: 'CANCELED',
    }
});

StatusBis.getValues(); // [5, 6, 15, 16]

const statusNumber = Status.OPENED;

Status.getIdentifier(statusNumber); // "OPENED"
