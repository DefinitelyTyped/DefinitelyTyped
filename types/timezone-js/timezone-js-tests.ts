
import timezone = require('timezone-js');
var tz = timezone.timezone;

var value: any;
var str: string;
var bool: boolean;

var opts: timezone.TimezoneJsOptions = {
	async: bool,
	success: (data: string) => {

	},
	error: (err: Error) => {

	},
	url: str
};

str = tz.zoneFileBasePath;
tz.loadingScheme;
tz.loadingSchemes;

value = tz.transport(opts);
value = tz.init(opts);
