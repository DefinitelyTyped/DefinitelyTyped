import YAML = require("json-to-pretty-yaml");
import { stringify } from "json-to-pretty-yaml";

// $ExpectType string
YAML.stringify({ test: 1 });

// $ExpectType string
YAML.stringify("one");

// @ts-expect-error
YAML.stringify();

// $ExpectType string
stringify({ key: "value" });

// @ts-expect-error
stringify(1, 2);
