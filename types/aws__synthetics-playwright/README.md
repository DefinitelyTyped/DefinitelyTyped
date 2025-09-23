# Type declarations for @amzn/synthetics-playwright

Types for writing AWS Synthetic Canaries using the syn-nodejs-playwright-3.0 runtime.

The library functions included are based on the official documentation - [Library functions available for Node.js canary scripts using Playwright](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Nodejs_Playwright.html). 

## Configuration

- Install `@types/aws__synthetics-playwright` in your project.
- Add `aws__synthetics-playwright` to the types in your compiler options in your `tsconfig.json` file.

```json
// tsconfig.json

{
  "compilerOptions": {
    "types": ["aws__synthetics-playwright"]
  }
}
```

## Usage

Now you can use the library as described in the official documentation - [Changing an existing Playwright script to use as a CloudWatch Synthetics canary](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Synthetics_WritingCanary_Nodejs_Playwright.html#CloudWatch_Synthetics_canary_edit_Playwright_script). 

```typescript
// handler.ts

import { synthetics } from '@amzn/synthetics-playwright';
...
```
