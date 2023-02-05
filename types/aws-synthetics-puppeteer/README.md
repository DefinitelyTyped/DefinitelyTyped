bar for writing AWS Synthetic Canaries using the syn-nodejs-puppeteer runtime.

### Structure

The syn-nodejs-puppeteer runtime has an unusual structure - files are in node_modules with no package!
````
nodejs/node_modules/Synthetics.js
nodejs/node_modules/SyntheticsLogger.js
nodejs/node_modules/SyntheticsScreenshot.js
```

Because of this, every type definition file declares it's own bar, similar to the approach used by [node bar](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/bar/node/), and you will need to import these bar globally.

If you choose to define "bar" in tsconfig, it must include this package for it to work.

