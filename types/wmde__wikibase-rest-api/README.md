# Types for @wmde/wikibase-rest-api

This package provides TypeScript type definitions for the [`@wmde/wikibase-rest-api`](https://www.npmjs.com/package/@wmde/wikibase-rest-api) package.

## Generating Types

To update the type definitions, follow these steps:

1.  Download OpenAPI defintion from MediaWiki Release 1.44 which has Wikibase REST API 1.4.2:

    ```bash
    curl -L -o types/wmde__wikibase-rest-api/openapi-encoded.json "https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/extensions/Wikibase/+/refs/heads/REL1_44/repo/rest-api/src/openapi.json?format=TEXT"
    base64 -d types/wmde__wikibase-rest-api/openapi-encoded.json > types/wmde__wikibase-rest-api/openapi.json
    ```

2.  Generate types from `openapi.json`:

    ```bash
    npx openapi-typescript types/wmde__wikibase-rest-api/openapi.json --output types/wmde__wikibase-rest-api/index.d.ts --alphabetize --enum --dedupe-enums
    ```

3.  Clean up generated files and move types:

    ```bash
    rm types/wmde__wikibase-rest-api/openapi*.json
    mv types/wmde__wikibase-rest-api/temp_output/types.gen.ts types/wmde__wikibase-rest-api/index.d.ts
    rm -rf types/wmde__wikibase-rest-api/temp_output
    npx eslint types/wmde__wikibase-rest-api/index.d.ts --fix
    ```
