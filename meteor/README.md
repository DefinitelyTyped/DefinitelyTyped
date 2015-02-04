# Meteor Type Definitions

These are the definitions for version 1.0.3.1 of Meteor.

Although these definitions can be downloaded separately for use, the recommended way to use these definitions in a Meteor application is by installing the
[typescript-libs](https://atmospherejs.com/meteortypescript/typescript-libs) Meteor smart package from atmosphere.  The smart package contains TypeScript
definitions forMeteor, common third-party libraries (e.g. jquery, underscore, d3 etc.), and common smart packages (e.g. iron-router, etc).

From within any Meteor application that is version 0.9.0 or later, install this package in the standard manner:

    $ meteor add meteortypescript:typescript-libs

These definitions were generated from the from the same [Meteor data.js file] (https://github.com/meteor/meteor/blob/devel/docs/client/data.js) that is used
to generate the official [Meteor docs] (http://docs.meteor.com/).


## Usage

1. If you are using the smart package, add a symbolic link to the definitions from within some directory within your project (e.g. ".typescript" or "lib").  The
definitions can be found somewhere deep within `<project_root_dir>/.meteor/...`.  The following will probably work:

        $ ln -s ../.meteor/local/build/programs/server/assets/packages/meteortypescript_typescript-libs/definitions package_defs


   If the definitions can't be found within the .meteor directory, you will have to manually pull down the definitions from github and add them to your project:
    <https://github.com/meteor-typescript/meteor-typescript-libs>

   If you are just using the *meteor.d.ts* file from this source, you can just add the file to any directory in your project (e.g. ".typescript" or "lib").

2. Install the [Typescript compiler for Meteor](https://github.com/meteor-typescript/meteor-typescript-compiler) or an [IDE which can transpile TypeScript to JavaScript](#transpiling-typescript).
3. From the typescript files, add references.  Reference the definition files with a single line:

        /// <reference path=".typescript/package_defs/all-definitions.d.ts" />  (substitute path in your project)


   Or you can reference definition files individually:

        /// <reference path=".typescript/package_defs/meteor.d.ts" />  (substitue path in your project)
        /// <reference path=".typescript/package_defs/underscore.d.ts" />
        /// <reference path=".typescript/package_defs/jquery.d.ts" />

4. Be aware of differences in coding styles when using TypeScript (see below)


##  TypeScript/Meteor coding style

### References

Try to stay away from referencing *file.ts*, rather generate a *file.d.ts* using `tsc --reference file.ts`, and reference it in your file. Compilation will
be much faster and code cleaner - it's always better to split definition from implemention.

### Templates

When specifying template *helpers*, *events*, and functions for *created*, *rendered*, and *destroyed*, you will need to use a "bracket notation" instead of the "dot notation":

    Template['myTemplateName']['helpers']({
      foo: function () {
        return Session.get("foo");
      }
    });

    Template['myTemplateName']['rendered'] = function ( ) { ... }

This is because TypeScript enforces typing and it will throw an error saying "myTemplateName" does not exist when using the dot notation.

### Accessing a Form field

Trying to read a form field value? use `(<HTMLInputElement>evt.target).value`.

### Global variables

Preface any global variable declarations with a TypeScript "declare var" statement:

    declare var NavbarHelpers;
    NavbarHelpers = {};
    NavbarHelpers.someMethod = function() {...}

### Collections

The majority of extra work required to use TypeScript with Meteor is creating and maintaining the collection interfaces.  However, doing so also provides the
additional benefit of succinctly documenting collection schema definitions (that are actually enforced).

To define collections, you will need to create an interface representing the collection and then declare a Collection type variable with that interface type (as a generic):

    interface JobDAO {
      _id?: string;
      name: string;
      status?: string;
      queuedAt?: string;
    }

    declare var Jobs: Mongo.Collection<JobDAO>;
    Jobs = new Mongo.Collection<JobDAO>('jobs');


Finally, any TypeScript file using collections will need to contain a reference at the top pointing to the collection definitions:

    /// <reference path=".typescript/package_defs/meteor.d.ts"/>
    /// <reference path=".typescript/custom_defs/collections.ts"/>

### Creating definition files

Here is a guide to creating definitions: <http://www.typescriptlang.org/Handbook#writing-dts-files>

If you have lots of custom definitions for a project, you can:

- Create multiple definition files and include individual references to each definition file.
- Create one huge monolithic definition file so you only have to refer to that file.
- Create multiple definition files, and create a definition file with references to the other definitions files so that you only have to maintain one reference
for all of you custom definitions.  e.g. contents of ".typescript/custom_defs/custom-definitions.d.ts":

        /// <reference path='collections.ts' />
        /// <reference path='paraview_helpers.d.ts'/>
        /// <reference path='handsontable.d.ts'/>
        /// <reference path='utility_helpers.ts'/>
        

## Transpiling TypeScript

### Meteor plugin
One solution for transpiling typescript is to install the following meteor package [https://github.com/meteor-typescript/meteor-typescript-compiler](https://github.com/meteor-typescript/meteor-typescript-compiler)

### IDE/Editor Transpilation
WebStorm is a good TypeScript-aware editor.  It can automatically transpile your TypeScript code into JavaScript every time you save a file.  To enable this
feature in WebStorm on OSX, first install the TypeScript transpiler on your system:

    $ [sudo -H] npm install -g typescript

Then, within WebStorm, go to Preferences -> File Watchers -> "+" symbol and add TypeScript.

### Command line

Last option, is to compile code from the command line. With node and the typescript compiler installed:

    $ tsc *.ts