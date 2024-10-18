import getPackageType = require("get-package-type");

getPackageType("package.json").then((packageType) => {
    packageType; // $ExpectType PackageType
});

getPackageType.sync("package.json"); // $ExpectType PackageType
