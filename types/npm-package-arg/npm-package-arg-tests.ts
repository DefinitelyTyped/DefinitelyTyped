import npa = require("npm-package-arg");

const result1 = npa("npm-package-arg@5.1");
const result2 = npa("npm-package-arg@5.1", "..");
switch (result2.type) {
    case "file":
        result2; // $ExpectType FileResult
        break;
    case "directory":
        result2; // $ExpectType FileResult
        break;
    case "git":
        result2; // $ExpectType HostedGitResult | URLResult
        break;
    case "remote":
        result2; // $ExpectType URLResult
        break;
    case "alias":
        result2; // $ExpectType AliasResult
        break;
    case "version":
        result2; // $ExpectType RegistryResult
        break;
    case "range":
        result2; // $ExpectType RegistryResult
        break;
    case "tag":
        result2; // $ExpectType RegistryResult
        break;
    default:
        result2; // $ExpectType never
}

const result3 = npa.resolve("npm-package-arg", "^5.1.0");
const result4 = npa.resolve("npm-package-arg", "^5.1.0", "..");
