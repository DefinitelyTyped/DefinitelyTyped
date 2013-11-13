#Meteor Type Definitions
-------------------------

These definitions are now deprecated.  Although they will still work up to Meteor version 0.6.5.1 (and possibly much later), the better way to develop a Meteor app with TypeScript is by installing the [typescript-libs](https://atmosphere.meteor.com/package/typescript-libs) Meteor smart package.


You first need to have (Meteorite)[http://oortcloud.github.io/meteorite/] version and smart package manager.  If you don't have it, install it with this command:
- `npm install -g meteorite`


Once you have installed Meteorite, you can easily install the smart package with this command:
- `mrt install typescript-libs`
- I also recommend installing the Meteor typescript compiler:  `mrt install typescript-compiler`


The smart packages and documentation for them can be found on [Atmosphere](https://atmosphere.meteor.com):
- [typescript-libs](https://atmosphere.meteor.com/package/typescript-libs)
- [typescript-compiler](https://atmosphere.meteor.com/package/typescript-compiler)


Using the typescript-libs smart package eliminates the need for the Template and Collections steps listed below, although there
are several new modifications necessary to use typescript-libs (e.g. calling Template['yourTemplate']['helpers'], creating Data Objects).


Kudos to [Olivier Refalo](https://github.com/orefalo) for developing the smart packages quicker and better than me!

--------------------------


#Overview

In order to effectively write a Meteor app with TypeScript, you will probably need to do these things:

- Reference the Meteor type definitions file (meteor.d.ts)
- Create a Template definition file
- Create Collections within a module or modules


##Referencing Meteor type definitions in your app
- Place the meteor.d.ts file in a directory (maybe `<app root dir>/lib/typescript`)
- Add `/// <reference path='../lib/typescript/meteor.d.ts'/>` to the top of any TypeScript file

This will make these typed Meteor variables/objects available across your application:

- Meteor
- Session
- Deps
- Accounts
- Match
- Computation
- Dependency
- EJSON
- HTTO
- Email
- Assets
- DPP

*Please note that the Template variable is not automatically available.  You need to follow the instructions below to use the Template variable.*


##Defining Templates
In order to call `Template.yourTemplateName.method`, you will need to create a simple TypeScript definition file that declares a Template variable containing a list of template view-models/managers of type IMeteorViewModel (or IMeteorManager, which is the same as IMeteorViewModel).  A good place for this definition could be `<app root dir>/client/views/view-model-types.d.ts`.  Here is an example of that file:

	/// <reference path='../../lib/typescript/meteor.d.ts'/>

	declare var Template: {
	  newPosts: IMeteorViewModel;
	  bestPosts: IMeteorViewModel;
	  postsList: IMeteorViewModel;
	  comment: IMeteorViewModel;
	  commentSubmit: IMeteorViewModel;
	  notifications: IMeteorViewModel;
	  postPage: IMeteorViewModel;
	  postEdit: IMeteorViewModel;
	  postItem: IMeteorViewModel;
	  postNew: IMeteorViewModel;
	  header: IMeteorViewModel;
	}

After you create this file, you may access the Template variable by declaring something similar to `/// <reference path='../view-model-types.d.ts'/>` at the top of any TypeScript file containing references to Template.  Something like `Template.postsList.helpers()` would then transpile successfully (and also have the benefits of typing).


##Defining Collections
In TypeScript, global variables are not allowed, and in a Meteor app, creating a local variable (using `var <varName>`) limits a variable's scope to the file.  However, you will probably want to define variables, such as collections, that can be used across multiple files.  In the case of collections, one way to work around these limitations is to wrap the definitions of all collections within a module, and then make the module globally accessible.  Here is an example (collections/models.ts):

	module Models {
	  export var Posts = new Meteor.Collection('posts');
	  export var Comments = new Meteor.Collection('comments');
	  export var Notifications = new Meteor.Collection('notifications');
	}

	this.Models = Models;

You can then access the Posts collection by placing something similar to `/// <reference path='../../../collections/models.ts'/>` at the top of a TypeScript file.  The code within the file would look something like this:

	Models.Posts.findOne(Session.get('currentPostId'));

For organizational purposes, any additional code related to each Collection can be placed in a separate file per each collection.  Alternatively, you could wrap each collection in its own module (e.g. PostsModel for posts, CommentsModel for comments).


##Reference app
Listed below is a simple Meteor reference application created with TypeScript is listed below.  It is based on the Microscope reference app in [Discover Meteor](http://www.discovermeteor.com/ "http://www.discovermeteor.com/").

- Sample Site:  <http://microscopic-typescript.meteor.com/>
- Code (TypeScript and transpiled JS):  <https://github.com/fullflavedave/MicroscopicTypeScript>

