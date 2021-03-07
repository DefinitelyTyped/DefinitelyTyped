// Starting from jest v24.3.0, the jest package provides its own type definition.
// @types/jest now serves a different purpose than that;
// it declares global variables injeced by jest, rather than jest's own API.
//
// Unfortunately, that led to `types: ["jest"]` being resolved to the jest package,
// causing problems when `typeRoots` is configured.
//
// This file enables users to specify `types: ["jest/global-types"]` in tsconfig.json
// to clarify their intention.

/// <reference path="./index.d.ts" />
