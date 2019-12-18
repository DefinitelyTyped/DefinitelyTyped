import { Transform, Options } from './core';

export function defineTest(
  dirName: string,
  transformName: string,
  options: Options,
  testFilePrefix?: string
): () => any;

export function defineInlineTest(
  module: Transform,
  options: Options,
  inputSource: string,
  expectedOutputSource: string,
  testName?: string
): () => any;
