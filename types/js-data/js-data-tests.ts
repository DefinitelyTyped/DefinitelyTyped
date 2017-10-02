import JSData = require("js-data");

interface IUser {
    id?: number;
    name?: string;
    age?: number;
    first?: string;
    last?: string;
    comments?:Array<any>;
    profile?:any;
}

interface IUserWithMethod extends IUser {
    fullName:()=>string;
}

interface IUserWithComputedProperty extends IUser {
    fullName?: string;
}

var store = new JSData.DS();

// simplest model definition
var User = store.defineResource<IUser>('user');

User.find(1).then(function (user:IUser) {
    user; // { id: 1, name: 'John' }
});

var user:IUser = User.createInstance({name: 'John'});

var store = new JSData.DS();
var User2 = store.defineResource<IUser>('user');
var user:IUser = User2.inject({id: 1, name: 'John'});
var user2:IUser = User2.inject({id: 1, age: 30});

user; // User { id: 1, name: 'John', age: 30 }
user2; // User { id: 1, name: 'John', age: 30 }
User.get(1); // User { id: 1, name: 'John', age: 30 }
user === user2; // true
user === User.get(1); // true
user2 === User.get(1); // true

var store = new JSData.DS({
    // set a default lifecycle hook
    afterCreate: function () {
    }
});

var User = store.defineResource<IUser>({
    name: 'user',
    // override the hook for this resource
    afterCreate: function () {
    }
});

User.create({
    name: 'john'
}, {
    // override the hook just for this method call
    afterCreate: function () {
    }
}).then(()=> {

});

var store = new JSData.DS();

var UserWithMethodResource = store.defineResource<IUserWithMethod>({
    name: 'user',
    methods: {
        fullName: function () {
            return this.first + ' ' + this.last;
        }
    }
});

var userWithMethod = UserWithMethodResource.createInstance({first: 'John', last: 'Anderson'});

userWithMethod.fullName(); // "John Anderson"

var store = new JSData.DS();

var UserWithComputedProperty = store.defineResource<IUserWithComputedProperty>({
    name: 'user',
    computed: {
        // each function's argument list defines the fields
        // that the computed property depends on
        fullName: ['first', 'last', function (first:string, last:string) {
            return first + ' ' + last;
        }],
        // shortand, use the array syntax above if you want
        // you computed properties to work after you've
        // minified your code. Shorthand style won't work when minified
        initials: function (first:string, last:string) {
            return first.toUpperCase()[0] + '. ' + last.toUpperCase()[0] + '.';
        }
    }
});

var userWithComputedProperty:IUserWithComputedProperty = UserWithComputedProperty.inject({
    id: 1,
    first: 'John',
    last: 'Anderson'
});

userWithComputedProperty.fullName; // "John Anderson"

userWithComputedProperty.first = 'Fred';

// js-data relies on dirty-checking, so the
// computed property (probably) hasn't been updated yet
userWithComputedProperty.fullName; // "John Anderson"

// If your browser supports Object.observe this will have no effect
// otherwise it will trigger the dirty-checking
store.digest();

userWithComputedProperty.fullName; // "Fred Anderson"

interface IComment {
    comments?: any;
    profile?: any;
}

var aComment:JSData.DSResourceDefinition<IComment> = store.defineResource<IComment>('comment');

// Get all comments where comment.userId == 5
aComment.filter({
    where: {
        userId: {
            '==': 5
        }
    }
});

// Get all comments where comment.userId == 5
aComment.filter({
    userId: 5
});

// Get all comments where comment.userId === 5
aComment.filter({
    where: {
        userId: {
            '===': 5
        }
    }
});

// Get all comments where comment.userId != 5
aComment.filter({
    where: {
        userId: {
            '!=': 5
        }
    }
});

// Get all comments where comment.userId !== 5
aComment.filter({
    where: {
        userId: {
            '!==': 5
        }
    }
});

// Get all users where user.age > 30
User.filter({
    where: {
        age: {
            '>': 30
        }
    }
});

// Get all users where user.age >= 30
User.filter({
    where: {
        age: {
            '>=': 30
        }
    }
});

// Get all users where user.age < 30
User.filter({
    where: {
        age: {
            '<': 30
        }
    }
});

// Get all users where user.name is in "John Anderson"
User.filter({
    where: {
        name: {
            'in': 'John Anderson'
        }
    }
});

// Get all users where user.role is in ["admin", "owner"]
User.filter({
    where: {
        role: {
            'in': ['admin', 'owner']
        }
    }
});

// Get all users where user.name is NOT in "John Anderson"
User.filter({
    where: {
        name: {
            'notIn': 'John Anderson'
        }
    }
});

// Get all users where user.role is NOT in ["admin", "owner"]
User.filter({
    where: {
        role: {
            'notIn': ['admin', 'owner']
        }
    }
});

// Get all users where user.name contains "John"
User.filter({
    where: {
        name: {
            'contains': 'John'
        }
    }
});

// Get all users where user.roles contains "admin"
User.filter({
    where: {
        roles: {
            'contains': 'admin'
        }
    }
});

// Sorts users by age in ascending order
User.filter({
    orderBy: 'age'
});

// Sorts users by age in descending order
User.filter({
    orderBy: ['age', 'DESC']
});

// Sorts users by age in descending order and then sort by name in ascending order to break a tie
User.filter({
    orderBy: [
        ['age', 'DESC'],
        ['name', 'ASC']
    ]
});

var PAGE_SIZE = 20;
var currentPage = 1;

interface IPost {

}

var Post:JSData.DSResourceDefinition<IPost>;

// Grab the first "page" of posts
Post.filter({
    offset: PAGE_SIZE * (currentPage - 1),
    limit: PAGE_SIZE
});

var User3 = store.defineResource({
    name: 'user',
    relations: {
        hasMany: {
            comment: {
                localField: 'comments',
                foreignKey: 'userId'
            }
        },
        hasOne: {
            profile: {
                localField: 'profile',
                foreignKey: 'userId'
            }
        },
        belongsTo: {
            organization: {
                localKey: 'organizationId',
                localField: 'organization',

                // if you add this to a belongsTo relation
                // then js-data will attempt to use
                // a nested url structure, e.g. /organization/15/user/4
                parent: true
            }
        }
    }
});

var Organization = store.defineResource({
    name: 'organization',
    relations: {
        hasMany: {
            // this is an example of multiple relations
            // of the same type to the same resource
            user: [
                {
                    localField: 'users',
                    foreignKey: 'organizationId'
                },
                {
                    localField: 'owners',
                    foreignKey: 'organizationId'
                }
            ]
        }
    }
});

var Profile = store.defineResource({
    name: 'profile',
    relations: {
        belongsTo: {
            user: {
                localField: 'user',
                localKey: 'userId'
            }
        }
    }
});

var OtherComment = store.defineResource<IComment>({
    name: 'comment',
    relations: {
        belongsTo: {
            user: {
                localField: 'user',
                localKey: 'userId'
            }
        }
    }
});

User.find(10).then(function (user:IUser) {
    // let's assume the server only returned the user
    user.comments; // undefined
    user.profile; // undefined

    User.loadRelations(user.id, ['comment', 'profile']).then(function (user:IUser) {
        user.comments; // array
        user.profile; // object
    });
});

var OtherOtherComment = store.defineResource<IComment>({
    name: 'comment',
    relations: {
        belongsTo: {
            post: {
                parent: true,
                localKey: 'postId',
                localField: 'post'
            }
        }
    }
});

// The comment isn't in the data store yet, so js-data wouldn't know
// what the id of the parent "post" would be, so we pass it in manually
OtherOtherComment.find(5, {params: {postId: 4}}); // GET /post/4/comment/5

// vs

var promise = OtherOtherComment.find(5); // GET /comment/5

promise.then().catch().finally();

OtherOtherComment.inject({id: 1, postId: 2});

// We don't have to provide the parentKey here
// because js-data found it in the comment
OtherOtherComment.update(1, {content: 'stuff'}); // PUT /post/2/comment/1

// If you don't want the nested for just one of the calls then
// you can do the following:
OtherOtherComment.update(1, {content: 'stuff'}, {params: {postId: false}}); // PUT /comment/1

var store = new JSData.DS({
    // set the default
    beforeCreate: function (resource:JSData.DSResourceDefinition<any>, data:any, cb:(err:Error, returnData:any)=>void) {
        // do something general
        cb(null, data);
    }
});

var User4 = store.defineResource({
    name: 'user',
    // set just for this resource
    beforeCreate: function (resource:JSData.DSResourceDefinition<any>, data:any, cb:(err:Error, returnData:any)=>void) {
        // do something more specific to "users"
        cb(null, data);
    }
});

User4.create({name: 'John'}, {
    // set just for this method call
    beforeCreate: function (resource:JSData.DSResourceDefinition<any>, data:any, cb:(err:Error, returnData:any)=>void) {
        // do something specific for this method call
        cb(null, data);
    }
});

namespace CustomAdapterTest {

    class MyCustomAdapter implements JSData.IDSAdapter {

        // All of the methods shown here must return a promise

// "definition" is a resource defintion that would
// be returned by DS#defineResource

// "options" would be the options argument that
// was passed into the DS method that is calling
// the adapter method

        create(definition:JSData.DSResourceDefinition<any>, attrs:Object, options:JSData.DSConfiguration):JSData.JSDataPromise<any> {
            // Must resolve the promise with the created item

            var promise:JSData.JSDataPromise<any>;
            return promise;
        }

        find(definition:JSData.DSResourceDefinition<any>, id:any, options:JSData.DSConfiguration):JSData.JSDataPromise<any> {
            // Must resolve the promise with the found item

            var promise:JSData.JSDataPromise<any>;
            return promise;
        }

        findAll(definition:JSData.DSResourceDefinition<any>, params:JSData.DSFilterParams, options:JSData.DSConfiguration):JSData.JSDataPromise<any> {
            // Must resolve the promise with the found items

            var promise:JSData.JSDataPromise<any>;
            return promise;
        }

        update(definition:JSData.DSResourceDefinition<any>, id:any, attrs:Object, options:JSData.DSConfiguration):JSData.JSDataPromise<any> {
            // Must resolve the promise with the updated items

            var promise:JSData.JSDataPromise<any>;
            return promise;
        }

        updateAll(definition:JSData.DSResourceDefinition<any>, attrs:Object, params:JSData.DSFilterParams, options:JSData.DSConfiguration):JSData.JSDataPromise<any> {
            // Must resolve the promise with the updated items

            var promise:JSData.JSDataPromise<any>;
            return promise;
        }

        destroy(definition:JSData.DSResourceDefinition<any>, id:any, options:JSData.DSConfiguration):JSData.JSDataPromise<any> {
            // Must return a promise

            var promise:JSData.JSDataPromise<any>;
            return promise;
        }

        destroyAll(definition:JSData.DSResourceDefinition<any>, params:JSData.DSFilterParams, options:JSData.DSConfiguration):JSData.JSDataPromise<any> {
            // Must return a promise

            var promise:JSData.JSDataPromise<any>;
            return promise;
        }
    }

    var store = new JSData.DS();
    store.registerAdapter('mca', new MyCustomAdapter(), {default: true});
    // the data store will now use your custom adapter by default
}

/**
 * showing the use of open ended interface to realize typings
 * on the Datastore.definitions object where all resource definitions
 * are saved.
 */

interface MyCustomDataStore {

    myResource: JSData.DSResourceDefinition<MyResourceDefinition>
}

interface MyResourceDefinition {

}

namespace MyJSData {

    interface DS {

        definitions: MyCustomDataStore;
    }
}

var store = new JSData.DS();

var myResourceDefinition = store.defineResource<MyResourceDefinition>('myResource');

myResourceDefinition = store.definitions.myResource;

/**
 * Custom action on datastore resource
 */

interface Resource {
    someProp:string;
}

interface ActionsForResource {
    myAction:JSData.DSActionFn;
    myOtherAction:JSData.DSActionFn;
}

var myOtherAction:JSData.DSActionConfig = {
    method: 'GET',
    endpoint: 'goHere'
};

var customActionResource = store.defineResource<Resource, ActionsForResource>({
    name: 'actionResource',
    actions: {
        myAction: {
            method: 'POST'
        },
        myOtherAction: myOtherAction
    }
});

customActionResource.myAction<number>(3).then((result)=>{

    var theCustomResult:number = result;
});

customActionResource.myOtherAction<void>(2, {data:'blub'}).then(()=>{
    // success
});

customActionResource.find(1).then((result)=>{

    var aProperty = result.someProp;
});

/**
 * Instance shorthands
 */

var customActionResourceInstance = customActionResource.get(1);

customActionResourceInstance.DSCompute();
customActionResourceInstance.DSChanges();
customActionResourceInstance.DSChangeHistory();
customActionResourceInstance.DSHasChanges();
customActionResourceInstance.DSLastModified();
customActionResourceInstance.DSLastSaved();
customActionResourceInstance.DSPrevious();
customActionResourceInstance.DSCreate();
customActionResourceInstance.DSDestroy();
customActionResourceInstance.DSLoadRelations('myRelation');
customActionResourceInstance.DSRefresh();
customActionResourceInstance.DSSave();
customActionResourceInstance.DSUpdate();

/**
 * Events
 */

function myEvtHandler(definition:JSData.DSResourceDefinition<Resource>, item:Resource) {

}

store.on("DS.change", myEvtHandler);
store.off("DS.change", myEvtHandler);
store.emit("DS.change", customActionResource, customActionResourceInstance);

customActionResource.on("DS.change", myEvtHandler);
customActionResource.off("DS.change", myEvtHandler);
customActionResource.emit("DS.change", customActionResource, customActionResourceInstance);

customActionResourceInstance.on("DS.change", myEvtHandler);
customActionResourceInstance.off("DS.change", myEvtHandler);
customActionResourceInstance.emit("DS.change", customActionResource, customActionResourceInstance);

JSData.DSUtils.Promise = Promise;
