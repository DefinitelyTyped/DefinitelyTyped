# definitelytyped.github.io

Website content for [definitelytyped.github.io](http://definitelytyped.github.io/).

The [master](https://github.com/DefinitelyTyped/definitelytyped.github.io/tree/master) branch holds live github.io content generated from the [source](https://github.com/DefinitelyTyped/definitelytyped.github.io/tree/source) branch.

The site build with [Grunt](http://www.gruntjs.com) and generated using [docpad](http://docpad.org), a static site generator complete with watch tasks, development server with LiveReload and [many plugins](http://docpad.org/docs/plugins). Publishing happens using [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages).

## How to edit

Working with the site is done using your commandline terminal and should work on any platform. So it can be bash or shell or cmd.exe or anything else (like WebStorm embedded terminal).

Prerequisites:

1. Get [node.js](http://nodejs.org/) (`> 0.10.0`) for your local platform, it comes with the `npm` package manager.

1. Have the global grunt cli command: run `npm install grunt-cli -g` in your command line.

Get the project

1. Checkout and update the `source` branch.

1. Run `npm install` to pull all local dependencies. (this can take a minute)

Work in the project

1. Use grunt to execute tasks. The main command are:

	1. Run `grunt clean` - drop all generated content.

	1. Run `grunt watch` - regenerate and start a watch with LiveReload server at [http://localhost:9778/](http://localhost:9778/)

	1. Run `grunt build` - regenerate the site for production environment .

	1. Run `grunt publish` - build and push to github `master` (live at [definitelytyped.github.io](http://definitelytyped.github.io/)). This will ask for your github credentials. You need commit access to the repository. Don't forget to push your `source` branch too!

	1. See `grunt -h` or the `Gruntfile.js` for additional commands.

:warning: Direct changes to `master` branch will be overwritten or discarded so always edit through `source`!

Notes:

1. You don't need a global docpad install, it comes as local dependency.

1. If you build or watch the content then you might get some yellow `warning`'s in the console. These can usually be ignored as it is docpad telling us that some transforms didn't have any effect: this is correct if you use a template transform (`.eco`) but have no template fields in the file (*yet*).

## Contributions

At some point we'll take contributions; it will probably involve sending a Pull Request on the `source` branch.

## License

Copyright (c) 2014 [DefinitelyTyped](https://github.com/DefinitelyTyped)

Licensed under the MIT license.
