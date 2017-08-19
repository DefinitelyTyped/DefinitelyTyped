// Type definitions for Egg-mock 3.x
// Project: https://github.com/eggjs/egg-mock
// Definitions by: Eward Song <https://github.com/sheperdwind/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Application, Context } from 'egg';

interface MockApplication extends Application { // tslint:disble-line
  ready(): Promise<void>;
  close(): Promise<void>;
  callback(): any;

  /**
   * mock Context
   */
  mockContext(data?: any): Context;

  /**
   * mock cookie session
   */
  mockSession(data: any): MockApplication;

  mockCookies(cookies: any): MockApplication;

  mockHeaders(headers: any): MockApplication;

  /**
   * Mock service
   */
  mockService(service: string, methodName: string, fn: any): MockApplication;

  /**
   * mock service that return error
   */
  mockServiceError(service: string, methodName: string, err?: Error): MockApplication;

  mockHttpclient(mockUrl: string, mockMethod: string | string[], mockResult: {
    data: Buffer | string | JSON;
    status: number;
    headers: any;
  }): MockApplication;
}

interface MockOption {
  /**
   * The directory of the application
   */
  baseDir?: string;

  /**
   * Custom you plugins
   */
  plugins?: any;

  /**
   * The directory of the egg framework
   */
  framework?: string;

  /**
   * Cache application based on baseDir
   */
  cache?: boolean;

  /**
   * Swtich on process coverage, but it'll be slower
   */
  coverage?: boolean;

  /**
   * Remove $baseDir/logs
   */
  clean?: boolean;
}

type EnvType = 'default' | 'test' | 'prod' | 'local' | 'unittest';

interface EggMock {
  /**
   * Create a egg mocked application
   */
  app(option?: MockOption): MockApplication;

  /**
   * mock the serverEnv of Egg
   */
  env(env: EnvType): void;

  /**
   * mock console level
   */
  consoleLevel(level: string): void;

  /**
   * set EGG_HOME path
   */
  home(homePath: string): void;

  /**
   * restore mock
   */
  restore(): void;
}

declare var mm: EggMock;

export = mm;
