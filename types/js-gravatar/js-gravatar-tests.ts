import JsGravatar = require("js-gravatar");
import { buildQueryStringFromOptions, validateOptions } from "js-gravatar";

// $ExpectType string
JsGravatar({ email: "user@email.com", size: 10, defaultImage: "identicon" });
// $ExpectType string
buildQueryStringFromOptions({ email: "user@email.com", defaultImage: "monsterid" });
// $ExpectType void
validateOptions({ email: "user@email.com", size: 10, defaultImage: "identicon" });
