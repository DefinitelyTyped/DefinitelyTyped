import { OpenAPIV2, OpenAPIV3 } from "openapi-types";
import { convert } from "swagger2openapi";

declare const schema: OpenAPIV2.Document;
(async () => {
    const r = await convert(schema, {});
    const r1: OpenAPIV3.Document = r.openapi;
    const r2: OpenAPIV2.Document = r.original;
    const r3: string = r.text;
    const r4: OpenAPIV3.Document = (await (await import("swagger2openapi")).convert(schema, {})).openapi;
})();
