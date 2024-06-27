/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var babel = require('rollup-plugin-babel');
var babelrc = require('babelrc-rollup');
var commonjs = require('rollup-plugin-commonjs');
var json = require('rollup-plugin-json');
var nodeResolve = require('rollup-plugin-node-resolve');
var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('default', function() {
  gulp.start('dist');
});

function roll(format, entry, name, entry_dir, dest_dir) {
  name = (name || format) + '.js';
  entry_dir = entry_dir || './src';
  dest_dir = dest_dir || './dist';
  return rollup({
    entry: entry_dir + '/' + entry,
    format: format,
    exports: 'named',
    moduleName: 'fb',
    external: ['fs', 'path'],
    globals: {
      fs: 'fs',
      path: 'path',
    },
    plugins: [
      babel(
        babelrc.default({
          config: {
            presets: [
              [
                'babel-preset-env',
                {
                  'targets': 'defaults',
                  'exclude': ['transform-regenerator']
                }
              ]
            ],
            plugins: [
              'external-helpers',
              'syntax-flow',
              'transform-flow-strip-types',
              'async-to-promises',
            ],
            exclude: ['node_modules/**', '**/*.json'],
          },
        })
      ),
      nodeResolve({
        skip: ['chai'],
      }),
      commonjs({
        include: [
          'node_modules/mixwith/*',
          'node_modules/chai-as-promised/lib/*',
        ],
        namedExports: {
          mixwith: ['mix'],
          'chai-as-promised': ['chaiAsPromised'],
        },
      }),
      json(),
    ],
    sourceMap: true,
  })
    .pipe(source(entry, entry_dir))
    .pipe(buffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.rename(name))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(dest_dir));
}

gulp.task('dist', function(done) {
  roll('amd', 'bundle.es6');
  roll('cjs', 'bundle.es6');
  roll('umd', 'bundle.es6');
  roll('iife', 'bundle.es6');
  roll('es', 'bundle.es6');
  roll('cjs', 'globals.es6', 'globals');
  done();
});
