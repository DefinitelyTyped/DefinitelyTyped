/// <reference path="oclazyload.d.ts" />

var lazyloader:Function = ()=>{};

var config1: oc.ILazyLoadConfig = {
	asyncLoader: lazyloader
};

var config2:oc.ILazyLoadConfig = {
	asyncLoader: lazyloader,
	loadedModules: ['module1', 'module2']
};

var moduleConfig:oc.ILazyLoadModuleConfig = {
	name:'testmodule',
	files:['testmodule']
}

var config2:oc.ILazyLoadConfig = {
	asyncLoader: lazyloader,
	loadedModules: ['module1', 'module2'],
	modules: [moduleConfig]
};
