import { Transform, Options, Parser } from './core';

export interface TestOptions {
  parser?: Parser | string | undefined;
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

export function runInlineTest(
  module: Transform,
  options: Options,
  input: {
    path?: string,
    source: string,
  },
  expectedOutput: string,
  testOptions?: TestOptions
): string;
