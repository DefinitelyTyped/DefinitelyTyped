/// <reference path="yamljs.d.ts" />

var yamlObj = YAML.parse("test: some yaml");

YAML.stringify(yamlObj);

YAML.load("path/to/file.yaml");