import * as CircularDependencyPlugin from 'circular-dependency-plugin';
import * as webpack from 'webpack';

new CircularDependencyPlugin();
new CircularDependencyPlugin({});

const MAX_CYCLES = 5;
let numCyclesDetected = 0;

new CircularDependencyPlugin({
  allowAsyncCycles: false,
  cwd: process.cwd(),
  exclude: /a\.js|node_modules/,
  failOnError: true,
  onDetected({ module: webpackModuleRecord, paths, compilation }) {
    numCyclesDetected++;
    compilation.warnings.push(new Error(paths.join(' -> ')));
  },
  onStart({ compilation }) {
    numCyclesDetected = 0;
  },
  onEnd({ compilation }) {
    if (numCyclesDetected > MAX_CYCLES) {
      compilation.errors.push(new Error('Too many cycles'));
    }
  },
});

webpack({ plugins: [new CircularDependencyPlugin()] });
