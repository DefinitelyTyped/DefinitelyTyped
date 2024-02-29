import numberIsNan = require("number-is-nan");

numberIsNan(NaN);
numberIsNan();
numberIsNan(true);
numberIsNan(false);
numberIsNan(null);
numberIsNan(0);
numberIsNan(Infinity);
numberIsNan(-Infinity);
numberIsNan("");
numberIsNan("unicorn");
numberIsNan({});
numberIsNan([]);
