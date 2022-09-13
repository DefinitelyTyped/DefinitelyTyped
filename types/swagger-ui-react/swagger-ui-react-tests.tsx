import * as React from 'react';
import SwaggerUI from 'swagger-ui-react';

<div>
    <SwaggerUI
        docExpansion="none"
        url="www.example.com/swagger.json"
        requestInterceptor={request => {
            console.log(request);
            return request;
        }}
        defaultModelExpandDepth={-1}
        defaultModelsExpandDepth={-1}
        defaultModelRendering={"model"}
        queryConfigEnabled={true}
        plugins={[
            {
                components: {
                    OperationTag: () => null,
                },
            },
        ]}
        supportedSubmitMethods={[]}
        deepLinking
        showMutatedRequest={false}
        showExtensions={true}
        presets={[]}
        filter={true}
        requestSnippetsEnabled={true}
        requestSnippets={{}}
        tryItOutEnabled={true}
        displayRequestDuration={true}
        persistAuthorization={true}
        withCredentials={true}
    />
</div>;
