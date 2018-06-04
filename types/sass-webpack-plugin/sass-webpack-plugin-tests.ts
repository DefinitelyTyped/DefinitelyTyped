import SassPlugin = require('sass-webpack-plugin');

type NODE_ENV = SassPlugin.NODE_ENV;

const env = process.env.NODE_ENV as NODE_ENV;

new SassPlugin('./src/styles/index.scss');

// production ready
new SassPlugin('./src/styles/index.scss', env);

// multi files
new SassPlugin(['./src/styles/one.scss', './src/styles/two.sass'], env);

// a different output filename
new SassPlugin({ './src/styles/index.scss': 'bundle.css' }, env);

// with sass tuning
new SassPlugin('./src/styles/index.scss', env, {
  sass: {
    includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
  }
});

// with source maps + compressing - autoprefixing
new SassPlugin('./src/styles/index.scss', {
  sourceMap: true,
  sass: { outputStyle: 'compressed' },
  autoprefixer: false
});
