# typescript-typings
Each branch represents a different set of typescript typings that I am working on.

## New Project

To create a new set of typings...

   git checkout master
   git checkout -b <new-project-name>

   edit the files as needed (see below for hints)
   git commit -m 'initial commit of sample'

The projects that have been previously commited 
are good samples of the types of edits you will need 
for your porject.

   git difftool master n3 

## Sync with DefinitelyTyped

In order to get you typings into the offical npm repository
you will need to convert your project typings and place
them in a DefinitelyTyped directory.

  * http://definitelytyped.org/
  * https://github.com/DefinitelyTyped/DefinitelyTyped


To make a new set of typings:
 * Checkout and develop the description files from DefinitelyTyped
     Development is easier here because you have the 
       advantage of having your reference-paths working properly.
     
 * branch from the master
     git checkout master
     git checkout -b newpackage
 * edit the `package.json`
     "name": "@types/sample",
     "version": "0.0.1",
     "description": "A set of TypeScript definitions for SAMPLE",
     "main": "",
     "files": [
       "index.d.ts"
     ],
 * add in the files from DefinitelyTyped
     cp <DT>/n3/* .
     index.d.ts
     newpackage-tests.ts

## Project Log

### N3

  git checkout n3

Lightning fast, spec-compatible, streaming RDF for JavaScript.

 * https://github.com/RubenVerborgh/N3.js

### webgme

  git checkout webgme

Web based generic modeling environment.

 * https://webgme.org/
 * https://github.com/webgme/webgme

### Cytoscape

  git checkout cytoscape

Graph theory (a.k.a. network) library for analysis and visualisation.

 * http://js.cytoscape.org/
 * https://github.com/cytoscape/cytoscape.js


