// Type definitions for update-notifier
// Project: https://github.com/yeoman/update-notifier
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "update-notifier" {
	function t(settings?:t.ISettings):t.IResult;

	module t {

		export interface IResult {
			update: IUpdateInfo;
			notify(message?:string):void;
		}

		export interface ISettings {
			callback?:(error:any, update?:IUpdateInfo)=>any; // default null
			packagePath?:string; // default 'package.json'
			packageName?:string; // default Inferred from packageFile
			packageVersion?:string; // default Inferred from packageFile
			updateCheckInterval?:number; // default 1000 * 60 * 60 * 24 (1 day)
			updateCheckTimeout?:number; // default 20000 (20 secs)
			registryUrl?:string; // default 'http://registry.npmjs.org/%s'
		}

		export interface IUpdateInfo {
			latest:string;
			current:string;
			type:string;
			date:string;
			name:string;
		}
	}

	export = t;
}
