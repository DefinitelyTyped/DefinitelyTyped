export const loaders = {
	'host-browser': 'node_modules/@dojo/loader/loader.js'
};

export const environments = [
	{ browserName: 'chrome' }
];

// Configuration options for the module loader; any AMD configuration options supported by the specified AMD loader
// can be used here
export const loaderOptions = {
	// Packages that should be registered with the loader in each testing environment
	packages: [
		{ name: 'tests', location: '.' },
		{ name: 'aframe', location: `./node_modules/aframe/dist`, main: 'aframe-master.js' }
	]
};

export const suites = [
	'tests/aframe',
	'tests/component',
	'tests/entity'
];

// A regular expression matching URLs to files that should not be included in code coverage analysis
export const excludeInstrumentation = /(?:node_modules|tests)[\/\\]/;
