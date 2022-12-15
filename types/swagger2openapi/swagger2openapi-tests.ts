import { OpenAPIV2, OpenAPIV3 } from 'openapi-types';
import { convertObj } from 'swagger2openapi';

(async () => {
    const r: OpenAPIV3.Document = (await convertObj(null as unknown as OpenAPIV2.Document, {})).openapi;
})();
