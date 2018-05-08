# Meteor Type Definitions

## Description

These are the definitions for version 1.4 of Meteor.  These definitions were generated from the same [Meteor data.js file](https://github.com/meteor/meteor/blob/devel/docs/client/data.js) that is used to generate the official [Meteor docs](http://docs.meteor.com/).  The code that generates these definitions can be found [here](https://github.com/meteor-typescript/meteor-typescript-libs/).


## Upcoming Meteor `typescript` package

There is currently an effort supported by the Meteor Development Group to create a TypeScript build compiler package, and an early version of the package can be tested using [`barbatus:typescript`](https://atmospherejs.com/barbatus/typescript).

From within any Meteor application that is version 1.2.1 or later, install this package in the standard manner:

    $ meteor add barbatus:typescript

This package will eventually incorporated as a Meteor core package (e.g. like the `coffeescript` package).  It appears that the eventual recommended practice for adding definitions using that package will be to add them using the [`typings`](https://github.com/typings/typings) tool.

You can follow discussion about this effort [here](https://github.com/Urigo/angular2-meteor/issues/102#issuecomment-200915763).



##  TypeScript/Meteor coding style

### References

Meteor code can run on the client and the server, for this reason you should try to stay away from referencing *file.ts* directly: you may get unexpected results.

Rather generate a *file.d.ts* using `tsc --declaration file.ts`, and reference it in your file.

Compilation will be much faster and code will be cleaner - it's always better to split definition from implementation anyways.

### Templates

With the exception of the **body** and **head** templates, Meteor's Template dot notation cannot be used (ie. *Template.mytemplate*). Thanks to Typescript static typing checks, you will need to use the *bracket notation* to access the Template.

```js
Template['myTemplateName'].helpers({
  foo: function () {
    return Session.get("foo");
  }
});

Template['myTemplateName'].onRendered(function ( ) { ... });
```

The same is true for `Meteor.settings`:

```ts
Meteor.settings.public['<some config>']
```

### Form fields

Form fields typically need to be cast to `<HTMLInputElement>`. For instance to read a form field value, use `(<HTMLInputElement>evt.target).value`.


### Global variables

Preface any global variable declarations with a TypeScript `declare var` statement (or place the statement in a definition file):
```ts
declare var NavbarHelpers;
NavbarHelpers = {};
NavbarHelpers.someMethod = function() {...}
```

### Collections

The majority of extra work required to use TypeScript with Meteor is creating and maintaining the collection interfaces.  However, doing so also provides the additional benefit of succinctly documenting collection schema definitions (that are actually enforced).

To define collections, you will need to create an interface representing the collection and then declare a Collection type variable with that interface type (as a generic):

```js
interface JobDAO {
  _id?: string;
  name: string;
  status?: string;
  queuedAt?: string;
}

declare var Jobs: Mongo.Collection<JobDAO>;
Jobs = new Mongo.Collection<JobDAO>('jobs');
```

Finally, any TypeScript file using collections will need to contain a reference at the top pointing to the collection definitions:

```ts
/// <reference path=".typescript/package_defs/meteor.d.ts"/>
/// <reference path=".typescript/custom_defs/collections.ts"/>
```
