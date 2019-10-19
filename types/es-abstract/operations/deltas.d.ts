import ES5 = require('../es5');
import ES2015 = require('./2015');
import ES2016 = require('./2016');
import ES2017 = require('./2017');
import ES2018 = require('./2018');
import ES2019 = require('./2019');

declare namespace deltas {
	interface Result<Added, Removed> {
		readonly added: ReadonlySet<Added>;
		readonly removed: ReadonlySet<Removed>;
	}

	interface Results {
		5: Result<never, never>;
		2015: Result<Exclude<keyof ES2015, keyof ES5>, Exclude<keyof ES5, keyof ES2015>>;
		2016: Result<Exclude<keyof ES2016, keyof ES2015>, Exclude<keyof ES2015, keyof ES2016>>;
		2017: Result<Exclude<keyof ES2017, keyof ES2016>, Exclude<keyof ES2016, keyof ES2017>>;
		2018: Result<Exclude<keyof ES2018, keyof ES2017>, Exclude<keyof ES2017, keyof ES2018>>;
		2019: Result<Exclude<keyof ES2019, keyof ES2018>, Exclude<keyof ES2018, keyof ES2019>>;
	}
}

declare const deltas: deltas.Results;
export = deltas;
