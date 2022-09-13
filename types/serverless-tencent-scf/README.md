## Type definitions for TencentCloud's Serverless Cloud Function

Tencent Cloud's [Serverless Cloud Function (SCF)](https://intl.cloud.tencent.com/product/scf) is a serverless execution environment that enables you to build and run applications without having to purchase and manage servers.

## Getting Started

```
npm install --save-dev @types/serverless-tencent-scf
```

-   Note: It’s just type definition, not related to serverless-tencent-scf package.

## Examples

### Custom Handler

```typescript
import { Handler } from 'serverless-tencent-scf';

interface CustomEvent {
    hello: 'world';
}

interface CustomResult {
    success: boolean;
}

type CustomHandler = Handler<CustomEvent, CustomResult>;

export const main: CustomHandler = (event, context, callback) => {
    console.log(event.hello);
    callback(null, { success: true });
};
```

### APIGateway Handler

```typescript
import { APIGatewayHandler } from 'serverless-tencent-scf';

interface DemoResult {
    code: number;
    msg: string;
    data?: any;
}

export const main: APIGatewayHandler<DemoResult> = async event => {
    console.log(event.body);
    return { code: 0, msg: 'success', data: [] };
};
```
