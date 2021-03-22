import { Transform, Options, Parser } from './core';

export interface TestOptions {
  parser?: Parser | string;
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
