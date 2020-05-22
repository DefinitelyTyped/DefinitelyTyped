<div align=center>

# Foundry Project Creator Types

[![Chat on Discord](https://img.shields.io/discord/520640779534729226?style=flat-square&label=discord&logo=discord)](https://discord.gg/59Tz2X7)
[![Twitter Follow](https://img.shields.io/badge/follow-%40NickEastNL-blue.svg?style=flat-square&logo=twitter)](https://twitter.com/NickEastNL)
[![Become a Patron](https://img.shields.io/badge/support-patreon-orange.svg?style=flat-square&logo=patreon)](https://www.patreon.com/nick_east)
[![Donate via Ko-Fi](https://img.shields.io/badge/support-ko--fi-ff4646?style=flat-square&logo=ko-fi)](https://ko-fi.com/nickeast)

</div>

This package provides type definitions for the Foundry VTT API, useful for both vanilla JS and TypeScript to get autocomplete, Intellisense, and type checking.

Unlike other packages, this will gradually be updated as I add more type definitions. Therefore, I will not use version numbers and tags to tag releases.

Considering the size of the Foundry API and the frequent changes to it, please be aware that not all types may be accurate. If in doubt, double-check to make sure what you're attempting to do is possible (such as by temporarily disabling typechecking). If types are missing, outdated, or otherwise incorrect, please report it in the Issue Tracker.

If you are updating the types yourself, Pull Requests are much appreciated, as I cannot consistently keep track of every API change and update everything by myself.

## Installing

Due to how the Node Package Manager (NPM) works, it is not possible to simply update a package installed from Git using `npm install`. Simply reinstall the package with the command below to retrieve the latest version.

```
npm install --save-dev gitlab:foundry-projects/foundry-pc/foundry-pc-types
```

When using the CLI ([Foundry Project Creator](https://gitlab.com/foundry-projects/foundry-pc/create-foundry-project)), it will add this package to your project by default, and configure the `tsconfig.json` and add the above command as an npm script for you.

## Configuration

When not using my Project Creator, you need to manually configure your project to use the types.

TypeScript is configured with a `tsconfig.json` file in your project root. Add the following property to enable TS to use the Foundry API typings.

```json
{
	"compilerOptions": {
		"types": "foundry-pc-types"
	}
}
```

For vanilla JavaScript, you may need to use `jsconfig.json` with the above configuration, or allow TypeScript to also parse JavaScript files. Please refer to the documentation of your IDE and/or TypeScript to learn how to properly configure your environment.

## Support

All the work that I do for Foundry I do in my spare time. If you love using it, please consider supporting me through either [Patreon](https://www.patreon.com/nick_east) or [Ko-Fi](https://ko-fi.com/nickeast) so that I can continue my work and worry less about life itself.
