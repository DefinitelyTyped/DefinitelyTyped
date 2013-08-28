#Meteor Type Definitions Usage Notes

In order to effectively write your Meteor app with TypeScript, there are a few things you will need to do since simply referencing this Meteor type definition file and renaming all of you *.js files to *.ts will not work.

##Referencing Meteor type definitions in your app
- Place the meteor.d.ts file in a directory (maybe `<app root dir>/lib/typescript`)
- Add `/// <reference path='../lib/typescript/meteor.d.ts'/>` to the top of any file

This will make these Typescript variables/objects available across your application:

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
In order to call `Template.yourTemplateName.method`, you will need to create a simple TypeScript definition file that declares a Template variable containing a list of template view-models/managers of type IMeteorViewModel (or IMeteorManager, which contains the same contents).  A good place for this definition could be `<app root dir>/client/views/view-model-types.d.ts`.  Here is an example of that file:

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

After you create this file, you may access the Template variable by declaring something like `/// <reference path='../view-model-types.d.ts'/>` at the top of any file containing references to Template.  Something like Template.postsList would then be accessible and get all the benefits of typing.


##Defining Collections
In TypeScript, creating global variables is not allowed, and in a Meteor app, creating local variables (using `var <varName>`) limits their scope to the file they are in.  However, it is often necessary in a Meteor app to define variables that can be used across files, such as collections.  In the case of collections, one way to work around this is to wrap each collections within a module, and then make the module globally accessible.  Here is an example of posts.ts:

	module PostsModel {
	  export var Posts = new Meteor.Collection('posts');
	};

	this.PostsModel = PostsModel;

You can then access the Posts collection by placing `/// <reference path='../../../collections/posts.ts'/>` at the top of a typescript file and creating a call like this:

	PostsModel.Posts.findOne(Session.get('currentPostId'));


##Reference app
A simple Meteor application created with TypeScript is listed below.  It is based on the Microscope reference application in the [Discover Meteor](http://www.discovermeteor.com/ "http://www.discovermeteor.com/") book.

- Sample Site:  <http://microscopic-typescript.meteor.com/>
- Code (TypeScript and transpiled JS):  <https://github.com/fullflavedave/MicroscopicTypeScript>

##Meteor package
There will hopefully be a Meteor package soon listed on [Atmosphere](http://atmosphere.meteor.com "http://atmosphere.meteor.com") that can be easily added using "mrt add meteor".