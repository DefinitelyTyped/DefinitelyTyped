import * as LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

new LodashModuleReplacementPlugin()

new LodashModuleReplacementPlugin({
	collections: true,
	paths: true,
})

new LodashModuleReplacementPlugin({
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
})
