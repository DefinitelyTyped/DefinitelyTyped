/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import ConventionalChangelogConfigSpec from "conventional-changelog-config-spec";

namespace Module {
// tslint:disable-next-line:max-line-length
    // $ExpectType JSONSchema7 || { default: JSONSchema7; $id?: string | undefined; $ref?: string | undefined; $schema?: string | undefined; $comment?: string | undefined; $defs?: { [key: string]: JSONSchema7Definition; } | undefined; type?: JSONSchema7TypeName | JSONSchema7TypeName[] | undefined; enum?: JSONSchema7Type[] | undefined; const?: JSONSchema7Type | undefined; multipleOf?: number | undefined; maximum?: number | undefined; exclusiveMaximum?: number | undefined; minimum?: number | undefined; exclusiveMinimum?: number | undefined; maxLength?: number | undefined; minLength?: number | undefined; pattern?: string | undefined; items?: JSONSchema7Definition | JSONSchema7Definition[] | undefined; additionalItems?: JSONSchema7Definition | undefined; maxItems?: number | undefined; minItems?: number | undefined; uniqueItems?: boolean | undefined; contains?: JSONSchema7 | undefined; maxProperties?: number | undefined; minProperties?: number | undefined; required?: string[] | undefined; properties?: { [key: string]: JSONSchema7Definition; } | undefined; patternProperties?: { [key: string]: JSONSchema7Definition; } | undefined; additionalProperties?: JSONSchema7Definition | undefined; dependencies?: { [key: string]: JSONSchema7Definition | string[]; } | undefined; propertyNames?: JSONSchema7Definition | undefined; if?: JSONSchema7Definition | undefined; then?: JSONSchema7Definition | undefined; else?: JSONSchema7Definition | undefined; allOf?: JSONSchema7Definition[] | undefined; anyOf?: JSONSchema7Definition[] | undefined; oneOf?: JSONSchema7Definition[] | undefined; not?: JSONSchema7Definition | undefined; format?: string | undefined; contentMediaType?: string | undefined; contentEncoding?: string | undefined; definitions?: { [key: string]: JSONSchema7Definition; } | undefined; title?: string | undefined; description?: string | undefined; readOnly?: boolean | undefined; writeOnly?: boolean | undefined; examples?: JSONSchema7Type | undefined; } || { default: JSONSchema7; $id?: string | undefined; $ref?: string | undefined; $schema?: string | undefined; $comment?: string | undefined; $defs?: { [key: string]: JSONSchema7Definition; } | undefined; type?: JSONSchema7TypeName | JSONSchema7TypeName[] | undefined; enum?: JSONSchema7Type[] | undefined; const?: JSONSchema7Type | undefined; multipleOf?: number | undefined; maximum?: number | undefined; exclusiveMaximum?: number | undefined; minimum?: number | undefined; exclusiveMinimum?: number | undefined; maxLength?: number | undefined; minLength?: number | undefined; pattern?: string | undefined; items?: JSONSchema7Definition | JSONSchema7Definition[] | undefined; additionalItems?: JSONSchema7Definition | undefined; maxItems?: number | undefined; minItems?: number | undefined; uniqueItems?: boolean | undefined; contains?: JSONSchema7 | undefined; maxProperties?: number | undefined; minProperties?: number | undefined; required?: string[] | undefined; properties?: { [key: string]: JSONSchema7Definition; } | undefined; patternProperties?: { [key: string]: JSONSchema7Definition; } | undefined; additionalProperties?: JSONSchema7Definition | undefined; dependencies?: { [key: string]: string[] | JSONSchema7Definition; } | undefined; propertyNames?: JSONSchema7Definition | undefined; if?: JSONSchema7Definition | undefined; then?: JSONSchema7Definition | undefined; else?: JSONSchema7Definition | undefined; allOf?: JSONSchema7Definition[] | undefined; anyOf?: JSONSchema7Definition[] | undefined; oneOf?: JSONSchema7Definition[] | undefined; not?: JSONSchema7Definition | undefined; format?: string | undefined; contentMediaType?: string | undefined; contentEncoding?: string | undefined; definitions?: { [key: string]: JSONSchema7Definition; } | undefined; title?: string | undefined; description?: string | undefined; readOnly?: boolean | undefined; writeOnly?: boolean | undefined; examples?: JSONSchema7Type | undefined; }
    ConventionalChangelogConfigSpec;
}

namespace Module.Config {
    declare const config: ConventionalChangelogConfigSpec.Config;

    // $ExpectType Config
    config;
    config.commitUrlFormat; // $ExpectType string | undefined
    config.compareUrlFormat; // $ExpectType string | undefined
    config.header; // $ExpectType string | undefined
    config.issuePrefixes; // $ExpectType string[] | undefined
    config.issueUrlFormat; // $ExpectType string | undefined
    config.preMajor; // $ExpectType boolean | undefined
    config.releaseCommitMessageFormat; // $ExpectType string | undefined
    config.types; // $ExpectType Type[] | undefined
    config.userUrlFormat; // $ExpectType string | undefined
}

namespace Module.Config.Type {
    declare const type: ConventionalChangelogConfigSpec.Config.Type;

    // $ExpectType Type
    type;
    type.hidden; // $ExpectType boolean | undefined
    type.section; // $ExpectType string | undefined
    type.type; // $ExpectType string
}
