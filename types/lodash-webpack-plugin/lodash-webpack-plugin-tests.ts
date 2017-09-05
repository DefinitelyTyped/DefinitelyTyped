import * as LodashModuleReplacementPlugin from 'lodash-webpack-plugin';

new LodashModuleReplacementPlugin();

const optionsArray: LodashModuleReplacementPlugin.Options[] = [
	{
		collections: true,
		paths: true,
	},
	{
		caching: true,
		chaining: true,
		cloning: true,
		coercions: true,
		collections: true,
		currying: true,
		deburring: true,
		exotics: true,
		flattening: true,
		guards: true,
		memoizing: true,
		metadata: true,
		paths: true,
		placeholders: true,
		shorthands: true,
		unicode: true,
	},
];

const plugins: LodashModuleReplacementPlugin[] = optionsArray
	.map(options => new LodashModuleReplacementPlugin(options));
