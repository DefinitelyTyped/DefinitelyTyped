# definitelytyped.github.io

Website content for [definitelytyped.github.io](http://definitelytyped.github.io/). 

The [master](https://github.com/DefinitelyTyped/definitelytyped.github.io/tree/master) branch holds live github.io content generated from the [source](https://github.com/DefinitelyTyped/definitelytyped.github.io/tree/source) branch.

The site build with [Grunt](http://www.gruntjs.com) and generated using [docpad](http://docpad.org), a static site generator complete with watch tasks, development server with LiveReload and [many plugins](http://docpad.org/docs/plugins). Publishing happens using [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages).


## How to edit

1. Checkout and update the `source` branch.

2. Run `$ npm install` to pull grunt, docpad etc.

3. Use grunt to start the commands. The main command are:

	1. `$ grunt clean` - drop all generated content.

	1. `$ grunt watch` - regenerate and start a watch with LiveReload server at [http://localhost:9778/](http://localhost:9778/)

	1. `$ grunt build` - regenerate the site for production environment .

	1. `$ grunt publish` - build and push to github `master` (live at [definitelytyped.github.io](http://definitelytyped.github.io/)). This will ask for your github credentials. You need commit access to the repository. Don't forget to push your `source` branch too!

	1. See `$ grunt -h` or the `Gruntfile.js` for additional commands.

:warning: Direct changes to `master` branch will be overwritten or discarded so always edit through `source`!

## Contributions

At some point we'll take contributions; it will probably involve sending a Pull Request on the `source` branch.

## License

Copyright (c) 2014 [DefinitelyTyped](https://github.com/DefinitelyTyped)

Licensed under the MIT license.
