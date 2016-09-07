## MongooseJS Typescript Docs
Below are some examples of how to use these Definitions.<br>
Scenarios where the Typescript code is identical to plain Javascript code are omitted.

### Table of Contents
* [Mongoose Methods, Properties, Constructors](#mongoose-methods-properties-constructors)
* [Creating and Saving Documents](#creating-and-saving-documents)
* [Instance Methods, Virtual Properties](#instance-methods-and-virtual-properties)
* [Static Methods](#static-methods)
* [Plugins](#plugins)
* [Promises](#promises)
* [FAQ](#faq)

#### Mongoose Methods, Properties, Constructors
You can call methods from the mongoose instance using:
```
import * as mongoose from 'mongoose';
var MyModel = mongoose.model(...);
var MySchema: mongoose.Schema = new mongoose.Schema(...);
```

Alternatively, you can import individual names and call them:
```
import {model, Schema} from 'mongoose';
var MyModel = model(...);
var MySchema: Schema = new Schema(...):
```
[top](#mongoosejs-typescript-docs)

#### Creating and Saving Documents
```
import {Document, model, Model, Schema} from 'mongoose';

var UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  age: Number,
  friends: [String],
  data: [Schema.Types.Mixed]
});

interface IUser extends Document {
  username: string;
  age: number;
  friends: string[];
  data: any[];
}

var UserModel: Model<IUser> = model<IUser>('User', UserSchema);

var user = new UserModel({name: 'Jane'});
user.username;     // IUser properties are available
user.save();       // mongoose Document methods are available

UserModel.findOne({}, (err: any, user: IUser) => {
  user.username;   // IUser properties are available
  user.save();     // mongoose Document methods are available
});
```
[top](#mongoosejs-typescript-docs)

#### Instance Methods and Virtual Properties
```
import {Document, model, Model, Schema} from 'mongoose';

var UserSchema: Schema = new Schema({
  name: String
});

UserSchema.methods.method1 = function () { return '' };
UserSchema.virtual('nameInCaps').get(function () {
  return this.name.toUpperCase();
});
UserSchema.virtual('nameInCaps').set(function (caps) {
  this.name = caps.toLowerCase();
});

interface IUser extends Document {
  name: string;
  nameInCaps: string;
  method1: () => string;
}

var UserModel: Model<IUser> = model<IUser>('User', UserSchema);
var user = new UserModel({name: 'Billy'});

user.method1();     // IUser methods are available
user.nameInCaps;    // virtual properties can be used

UserModel.findOne({}, (err: any, user: IUser) => {
  user.method1();   // IUser methods are available
  user.nameInCaps;  // virtual properties can be used
});
```
[top](#mongoosejs-typescript-docs)

#### Static Methods
```
import {Document, model, Model, Schema} from 'mongoose';

var UserSchema = new Schema({});
UserSchema.statics.static1 = function () { return '' };

interface IUserDocument extends Document {...}
interface IUserModel extends Model<IUserDocument> {
  static1: () => string;
}

var UserModel: IUserModel = model<IUser, IUserModel>('User', UserSchema);
UserModel.static1();    // static methods are available
```
[top](#mongoosejs-typescript-docs)

#### Plugins
To write definitions for plugins, extend the mongoose module and create a simple plugin module:
```
// plugin.d.ts
declare module 'mongoose' {
  export interface PassportLocalDocument {...}
  export interface PassportLocalSchema extends Schema {...}
  export interface PassportLocalModel<T extends PassportLocalDocument> extends Model<T> {...}
  ...
}

declare module 'passport-local-mongoose' {
  import mongoose = require('mongoose');
  var _: (schema: mongoose.Schema, options?: Object) => void;
  export = _;
}

// user.ts
import {
  model,
  PassportLocalDocument,
  PassportLocalSchema,
  PassportLocalModel
  Schema
} from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

var UserSchema: PassportLocalSchema = new Schema({});
UserSchema.plugin(passportLocalMongoose, options);

interface IUser extends PassportLocalDocument {...}
interface IUserModel<T extends PassportLocalDocument> extends PassportLocalModel<T> {...}

var UserModel: IUserModel<IUser> = model<IUser>('User', UserSchema);
```
Full example for [Passport Local Mongoose](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/passport-local-mongoose/passport-local-mongoose.d.ts)<br>
[top](#mongoosejs-typescript-docs)

#### Promises
These definitions use global.Promise by default. If you would like to use mongoose's own mpromise
definition (which is deprecated), you can install definitions for [mongoose-promise](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/mongoose-promise).

If you'd like to use something other than global.Promise, you'll need to create a simple .d.ts file:
```
// promise-bluebird.d.ts
import * as Bluebird from 'bluebird';

declare module 'mongoose' {
  type Promise<T> = Bluebird<T>;
}

// promise-q.d.ts
import * as Q from 'q';

declare module 'mongoose' {
  type Promise<T> = Q.Promise<T>;
}

// another-promise.d.ts
...
```
To use it, you will need to `/// <reference path="promise-bluebird.d.ts" />` in one of your source code files,
or include the `.d.ts` file in your compile.

To assign the new promise library in your code, you will need to use one of the following options (since
Typescript does not allow assigning properties of imported modules):

* `(<any>mongoose).Promise = YOUR_PROMISE;`
* `require('mongoose').Promise = YOUR_PROMISE;`
* `import mongoose = require('mongoose'); ... mongoose.Promise = YOUR_PROMISE;`

[top](#mongoosejs-typescript-docs)

#### FAQ
Q: Why are there 2 interfaces for Documents called Document and MongooseDocument?<br>
A: People have been using this for a long time:
```
interface IUser extends mongoose.Document {
  ...
}
```
When it should really be this:
```
interface IUser extends mongoose.model {
  ...
}
```
For backwards compatibility Document is an interface for [mongoose.model](https://github.com/Automattic/mongoose/blob/master/lib/model.js#L3162)<br>
And MongooseDocument is an interface for [mongoose.Document](https://github.com/Automattic/mongoose/blob/master/lib/model.js#L3162)<br>
At some point in the future this may get fixed, which would require fixing your code.
<br>
[top](#mongoosejs-typescript-docs)
