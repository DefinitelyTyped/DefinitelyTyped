# definitelytyped.github.io [![Build Status](https://travis-ci.org/DefinitelyTyped/definitelytyped.github.io.svg?branch=source)](https://travis-ci.org/DefinitelyTyped/definitelytyped.github.io)

> Website content for [definitelytyped.org](http://definitelytyped.org).

The [master](https://github.com/DefinitelyTyped/definitelytyped.github.io/tree/master) branch holds live github.io content generated from the [source](https://github.com/DefinitelyTyped/definitelytyped.github.io/tree/source) branch.

The site build with [Grunt](http://www.gruntjs.com) and generated using [docpad](http://docpad.org), a static site generator complete with watch tasks, development server with LiveReload and [many plugins](http://docpad.org/docs/plugins). Publishing happens using [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages).


## Edit online

1. Use the github web interface to quickly make text edits like updating the [guides](/guides.html) and the [directory](/directory.html). Github will create a fork and you can modify content without leaving your browser.

1. The content is saved as markdown and located in `./src/documents`.


## Bulk editing

If you like to use your own tools you can follow these steps:

1. Fork the repository.

1. Checkout the `source` branch.

1. If you already have a checkout make sure you pull the latest revision. 

1. Locate the content your want to change in `./src/documents`. Most of the editable content is in markdown format (some with a `.eco` template filter).

1. Make your edits and commit your changes. A flat commit with sensible commit-note is appreciated.

1. Push to your changes to your fork.

1. Send a pull request to the `source` branch.

1. After review a committer will merge and Travis-CI will republish the site.

1. See below for the steps to get a local preview (this is not essential for simple markdown edits).


## Edit the site

To do structural authoring with a build-preview you can follow the development flow.

Working with the site is done using your commandline terminal and should work on any platform. So it can be bash, shell, cmd.exe or anything else (like WebStorm embedded terminal).


### Prerequisites

1. Get [node.js](http://nodejs.org/) (`> 0.10.0`) for your local platform, it comes with the `npm` package manager.

1. Have the global grunt cli command: run `npm install grunt-cli -g` in your command line.

1. You *dont* need a global docpad install; it comes as local dependency.


### Get the project

1. Fork the repository (or just clone if you got commit access).

1. Checkout the `source` branch.

1. Run `npm install` to pull all local dependencies. (this can take a minute)


### Do some work in the project

Use grunt to run various commands.

1. The main tasks are:

	1. Run `grunt clean` - remove all generated content.

	1. Run `grunt watch` - regenerate and start a watch with LiveReload server at [http://localhost:9778/](http://localhost:9778/)

	1. Run `grunt build` - regenerate the site for production environment (best to stop the watch if you have it active).

	1. Run `grunt publish` - build and push to github `master` (live at [definitelytyped.org](http://definitelytyped.org/)). This will ask for your github credentials so you need commit access to the repository (otherwise send a PR with the your source). Make sure you also push the changes to `source`.

	1. See `grunt -h` or the `Gruntfile.js` for additional commands.


### Publish the changes

1. Push your changes to the `source` branch (or send a pull request).

1. If you like some feedback first then use a fork (or branch).

1. The every commit that lands on `source` will automatically be rebuild and deployed via Travis-CI.

1. Give Travis a minute or two to deploy the site, then verify your changes.

1. Optional: Fix some typos.

Notes:

1. If you build or watch the content then you might get some yellow `warning`'s in the console. These can usually be ignored when docpad telling us that some transforms didn't have any effect: this is correct if you use a template transform (`.eco`) but have no template fields in the file (*yet*).

2. :warning: Direct changes to `master` branch will be overwritten or discarded so always edit through `source`!


## Contributions

Contributions are welcome! Check the website [for more info](http://definitelytyped.org/pages/website-contributions.html), then return here and follow the instructions above.


## License

Copyright (c) 2014 DefinitelyTyped

Licensed under the MIT license.
