import SassPlugin from 'sass-webpack-plugin';

new SassPlugin('./src/styles/index.scss');

// production ready
new SassPlugin('./src/styles/index.scss', process.env.NODE_ENV);

// multi files
new SassPlugin(
  ['./src/styles/one.scss', './src/styles/two.sass'],
  process.env.NODE_ENV
);

// a different output filename
new SassPlugin(
  { './src/styles/index.scss': 'bundle.css' },
  process.env.NODE_ENV
);

// with sass tuning
new SassPlugin('./src/styles/index.scss', process.env.NODE_ENV, {
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
