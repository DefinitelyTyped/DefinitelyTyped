// Type definitions for Grunt 0.4.x
// Project: http://firstandthird.github.io/load-grunt-config/
// Definitions by: Thomas Butler <https://github.com/butlersoftware/>
// Definitions: https://github.com/butlersoftware/DefinitelyTyped

/// <reference path="../gruntjs/gruntjs.d.ts" />

declare module loadConfig  {
	module config {
		interface loadGruntTasks {
			pattern?: string;
			scope?: string;
		}
		interface data {
			test?: boolean;
		}
	}
    module options {
    
        interface data {
            configPath?: string;
            init?: boolean;
            jitGrunt?: boolean;
            loadGruntTasks?: config.loadGruntTasks;
            data?:config.data ;
		}
	    interface config extends data {
		    
	    }
        interface postProcess {
            (config: config): any;
        }
    }
    interface options {
		data?: options.data;
        config?: options.config;
        postProcess?: options.postProcess;
    }
}
interface loadConfig {
	(grunt: IGrunt, options?: loadConfig.options): any;
}


declare module "grunt-load-config" {
	var exports: loadConfig;
    export = exports;
}
