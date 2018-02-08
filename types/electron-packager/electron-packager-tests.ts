import packager = require("electron-packager");

function callback(err: Error, appPaths: string[]) {
	const msg = err.message;
	const	index = appPaths.indexOf("test");
}

function completeFunction(buildPath: string, electronVersion: string, platform: string, arch: string, callbackFn: () => void) {
	callbackFn();
}

function ignoreFunction(path: string) {
	return true;
}

packager({
	dir: ".",
	name: "myapplication",
	platform: "win32",
	arch: "all",
	electronVersion: "0.34.0",
	win32metadata: {
		CompanyName: "Acme CO",
		FileDescription: "My application",
		OriginalFilename: "myapp.exe",
		ProductName: "Application",
		InternalName: "roadrunner",
		"requested-execution-level": "highestAvailable",
		"application-manifest": "manifest.xml"
	}
}, callback);

packager({
	dir: ".",
	name: "myapplication",
	electronVersion: "0.34.0",
	all: true,
	win32metadata: {
		CompanyName: "Acme CO",
		FileDescription: "My application",
		OriginalFilename: "myapp.exe",
		ProductName: "Application",
		InternalName: "roadrunner",
		"requested-execution-level": "requireAdministrator",
		"application-manifest": "manifest.xml"
	}
}, callback);

packager({
	dir: ".",
	name: "myapplication",
	platform: "all",
	arch: "all",
	electronVersion: "0.34.0"
}, callback);

packager({
	dir: ".",
	name: "myapplication",
	electronVersion: "0.34.0",
	all: true
}, callback);

packager({
	dir: ".",
	name: "myapplication",
	electronVersion: "0.34.0",
	arch: "arm64",
	executableName: "myapp"
}, callback);

packager({
	dir: ".",
	afterCopy: [
		completeFunction
	],
	afterExtract: [
		completeFunction
	],
	afterPrune:  [
		completeFunction
	],
	appCopyright: "Copyright",
	appVersion: "1.0",
	arch: "ia32",
	asar: false,
	buildVersion: "1.2.3",
	derefSymlinks: true,
	download: {
		cache: "./zips",
		mirror: "https://10.1.2.105/",
		quiet: true,
		strictSSL: true
	},
	extraResource: "foo.js",
	icon: "foo.ico",
	ignore: /ab+c/,
	out: "out",
	overwrite: true,
	packageManager: false,
	prune: true,
	quiet: true,
	tmpdir: "/tmp",
	win32metadata: {
		CompanyName: "Acme CO",
		FileDescription: "My application",
		OriginalFilename: "myapp.exe",
		ProductName: "Application",
		InternalName: "roadrunner",
		"requested-execution-level": "asInvoker",
		"application-manifest": "manifest.xml"
	}
}, callback);

packager({
	dir: ".",
	arch: "x64",
	asar: true,
	derefSymlinks: false,
	download: {
		cache: "./zips",
		mirror: "https://10.1.2.105/",
		quiet: false,
		strictSSL: true
	},
	extraResource: [
		"foo.js",
		"bar.js"
	],
	ignore: [
		/ab+c/,
		new RegExp('abc')
	],
	overwrite: false,
	packageManager: "npm",
	platform: "darwin",
	prune: false,
	quiet: false,
	tmpdir: "false",
	appBundleId: "123456",
	appCategoryType: "public.app-category.developer-tools",
	extendInfo: "plist.txt",
	helperBundleId: "23223f",
	osxSign: true
}, callback);

packager({
	dir: ".",
	arch: "armv7l",
	asar: {
		ordering: "order.txt",
		unpack: "*.js",
		unpackDir: "sub_dir"
	},
	download: {
		cache: "./zips",
		mirror: "https://10.1.2.105/",
		quiet: false,
		strictSSL: false
	},
	ignore: ignoreFunction,
	packageManager: "cnpm",
	platform: "linux"
}, callback);

packager({
	dir: ".",
	arch: [
		"ia32",
		"x64"
	],
	download: {
		cache: "./zips",
		mirror: "https://10.1.2.105/",
		quiet: true,
		strictSSL: false
	},
	packageManager: "yarn",
	platform: "mas",
	extendInfo: {
		foo: "bar"
	},
	osxSign: {
		identity: "myidentity",
		entitlements: "path/to/my.entitlements",
		"entitlements-inherit": "path/to/inherit.entitlements"
	},
	protocols: [{
		name: "myappproto",
		schemes: [
			"myapp",
			"myapp2"
		]
	}]
}, callback);
