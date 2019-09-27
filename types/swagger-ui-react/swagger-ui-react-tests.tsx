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
  />
</div>;
