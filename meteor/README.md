# Meteor Type Definitions

These are the definitions for version 0.9.1 of Meteor.  Although these definitions can be downloaded separately for use, the recommended way to use these 
definitions in a Meteor application is by installing the [typescript-libs](https://atmosphere.meteor.com/package/typescript-libs) Meteor smart package.  
The smart package contains TypeScript definitions forMeteor, common third-party libraries (e.g. jquery, underscore, d3 etc.), and common smart packages 
(e.g. iron-router).

From within any Meteor application that is version 0.9.0 or later, install this package in the standard manner:

    $ meteor add typescript-libs



## Usage Overview
For most applications, there are 4 specific steps you will have to take to write your Meteor application in TypeScript using this package:

1. [Reference the definitions] (#usage-type-definition-references)
2. [Declare functions for Templates in a special way] (#usage-templates)
3. [Declare Collections in a special way] (#usage-collections)
4. [Create custom definitions for code you write] (#usage-creating-definitions)
5. [Transpile your .ts files into .js files] (#usage-transpilation)



## Usage: Type Definition References
Within any TypeScript file, you can reference the Meteor definition file with this line:

    ///<reference path="/path/to/packages/typescript-libs/meteor.d.ts" />



## Usage: Templates
When specifying template functions, you will need to use "bracket notation" instead of "dot notation":

    Template['myTemplateName']['rendered'] = function ( ) { ... }

    Template['myTemplateName']['helpers']({
      foo: function () {
        return Session.get("foo");
      }
    });

    Template['myTemplateName']['foo'] = function () {
      return Session.get("foo");
    };


For "dot" notation, TypeScript requires properties be specified on a variable (but not for bracket notation), and it will throw an error saying "myTemplateName" 
does not exist on Template.



## Usage: Collections
The majority of extra work required to use TypeScript with Meteor is creating and maintaining the collection interfaces.  However, doing so also provides the 
additional benefit of succinctly documenting collection schema definitions (that are actually enforced).

To define collections, you will need to create an interface representing the collection, and then declare a Collection type variable with that interface type (as a generic):

    interface JobDAO {
      _id?: string;
      name: string;
      status?: string;
      queuedAt?: string;
    }

    declare var Jobs: Meteor.Collection<JobDAO>;
    Jobs = new Meteor.Collection<JobDAO>('jobs');


Finally, any TypeScript file using collections will need to contain a reference at the top pointing to the collection definitions:

    /// <reference path="../packages/typescript-libs/meteor.d.ts"/>
    /// <reference path="../packages/typescript-libs/underscore.d.ts"/>
    /// <reference path="models/models.ts"/>


If you choose to define collections (using the code above) in a separate file (e.g. collections/models/models.ts) and then create a separate file per collection 
with the methods and permissions for that collection (e.g. collections/jobs.ts), the collection definitions should be one directory deeper than the collection 
method/permission declarations so that Meteor can find the variable declarations before use. (e.g. collections/models/models.ts).



## Usage: Creating Definitions
Here is a guide to creating definitions: <http://www.typescriptlang.org/Handbook#writing-dts-files>



## Usage: Transpilation
WebStorm is good TypeScript-aware editor.  It can automatically transpile your TypeScript code into JavaScript every time you save a file.  To enable this
feature in WebStorm on OSX, first install the TypeScript transpiler on your system:

    $ [sudo -H] npm install -g typescript

Then, within WebStorm, go to Preferences -> File Watchers -> "+" symbol and add TypeScript.

If you are not using a TypeScript-aware editor, you can transpile the files using the [Meteor Typescript Compiler](https://github.com/orefalo/meteor-typescript-compiler).



## Example/Reference Projects
* [TypeScript demos](https://github.com/orefalo/meteor-typescript-demos)
