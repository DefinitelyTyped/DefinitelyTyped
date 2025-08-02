import parsePackagejsonName = require("parse-packagejson-name");

// @ts-expect-error
parsePackagejsonName();

// $ExpectType { scope: string | null; fullName: string; projectName: string | null; moduleName: string | null; }
parsePackagejsonName("foo");
