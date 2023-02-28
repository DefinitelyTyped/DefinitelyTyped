# Meteor Type Definitions

## Description

These are the definitions for version 2.6 of Meteor.  These definitions were long ago (Meteor 1.x days) generated from the same [Meteor data.js file](https://github.com/meteor/meteor/blob/devel/docs/client/data.js) that is used to generate the official [Meteor docs](http://docs.meteor.com/) but are now updated manually.

## Meteor `typescript` package

Meteor currently offers an official [typescript package](https://atmospherejs.com/meteor/typescript).

From within any Meteor application that is version 1.8.2 or later, install this package in the standard manner:

    $ meteor add typescript

There's also a [community package](https://github.com/Meteor-Community-Packages/meteor-typescript/) that's a continuation of `barbatus:typescript`.


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
