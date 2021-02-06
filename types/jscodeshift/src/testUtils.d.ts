import { Transform, Options } from './core';
import recast = require("recast");

export interface TestOptions {
  parser?: recast.Parser | string;
}

export function defineTest(
  dirName: string,
  transformName: string,
  options: Options,
  testFilePrefix?: string,
  testOptions?: TestOptions
): () => any;

export function defineInlineTest(
  module: Transform,
  options: Options,
  inputSource: string,
  expectedOutputSource: string,
  testName?: string
): () => any;
