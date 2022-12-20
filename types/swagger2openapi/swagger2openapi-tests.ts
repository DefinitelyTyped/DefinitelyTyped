import { OpenAPIV2, OpenAPIV3 } from 'openapi-types';
import { convert } from 'swagger2openapi';

(async () => {
    const r = await convert(null as unknown as OpenAPIV2.Document, {});
    console.log(r.openapi as OpenAPIV3.Document);
    console.log(r.original as OpenAPIV2.Document);
    console.log(r.text as string);
})();
