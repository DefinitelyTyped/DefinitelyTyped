import autoprefixer = require("autoprefixer");
import { Transformer } from 'postcss';

const ap1: Transformer = autoprefixer();

const ap2: Transformer = autoprefixer({
  browsers: [],
  env: "test",
  cascade: false,
  add: false,
  remove: false,
  supports: false,
  flexbox: false,
  grid: false,
  stats: {},
  ignoreUnknownVersions: false,
});
