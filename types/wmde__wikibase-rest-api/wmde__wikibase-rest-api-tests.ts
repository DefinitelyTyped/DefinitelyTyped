import type { paths, operations, components } from "wmde__wikibase-rest-api";

// Test: known path exists
const path: keyof paths = "/v1/openapi.json";

// Test: operation type exists and has expected structure
// (This will error if the type does not exist or is not an object)
type GetOpenApiDoc = operations["getOpenApiDoc"];

declare const getOpenApiDoc: GetOpenApiDoc;

// Test: components interface is present
const testComponents: keyof components | undefined = undefined;

// Test: webhooks type is present
import type { webhooks } from "./index";
const testWebhooks: webhooks = {};

// Test: $defs type is present
import type { $defs } from "./index";
const testDefs: $defs = {};