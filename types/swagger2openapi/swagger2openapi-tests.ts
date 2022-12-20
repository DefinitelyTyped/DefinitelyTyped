import { OpenAPIV2, OpenAPIV3 } from 'openapi-types';
import { convert } from 'swagger2openapi';

(async () => {
    const r = await convert(null as unknown as OpenAPIV2.Document, {});
    const r1: OpenAPIV3.Document = r.openapi;
    const r2: OpenAPIV2.Document = r.original;
    const r3: string = r.text;
})();
