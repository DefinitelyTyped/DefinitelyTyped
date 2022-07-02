import resolveOptions = require("resolve-options");

const config = {
    cwd: {
      default: "C/test",
      type: 'string'
    },
    read: {
        type: 'boolean'
    },
    since: {
        type: ['date', 'number']
    },
    sourcemaps: {
      default: false,
      type: 'boolean'
    },
  };

  const options = {
    read() {
        return true;
      },
    since: Date.now(),
    sourcemaps: true,
  };

  const resolver = resolveOptions(config, options);

  const cwd = resolver.resolve('cwd');
  const sourcemaps = resolver.resolve('sourcemaps');
  const read = resolver.resolve('read');
