// Type definitions for chai-json-schema 1.4
// Project: https://github.com/chaijs/chai-json-schema/, http://chaijs.com
// Definitions by: Ulrich Heiniger <https://github.com/ulrichheiniger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// <reference types="node"/>
// <reference types="chai" />
import tv4 = require('tv4');

declare global {
	namespace Chai {
		interface Assert {
			jsonSchema(value: any, schema: any, msg?: string): void;
			notJsonSchema(value: any, schema: any, msg?: string): void;
		}

		interface LanguageChains {
			jsonSchema(schema: any, msg?: string): void;
		}

		interface ChaiStatic {
			tv4: tv4.TV4;
		}
	}
}

declare const chaiJsonSchema: Chai.ChaiPlugin;
declare namespace chaiJsonSchema { }
export = chaiJsonSchema;
