import * as wallabyjs from 'wallabyjs';

export class WallabyConfig implements wallabyjs.IWallabyConfig {

  public files: string[] = [
    'src/**/*.ts',
    '!src/**/*.spec.ts'
  ];

  public tests: string[] = [
    'src/**/*.spec.ts'
  ];

  public compilers: wallabyjs.IWallabyCompilers = <wallabyjs.IWallabyCompilers>{
    'src/**/*.js': this.wallaby.compilers.babel({}),
    'src/**/*.ts': this.wallaby.compilers.typeScript({})
  };

  public preprocessors: wallabyjs.IWallabyProcessor = <wallabyjs.IWallabyProcessor>{
    '**/*.js': file => file.content + '\n// this is JavaScript',
    '**/*.ts': file => file.content + '\n// this is TypeScript'
  };

  public postprocessor: wallabyjs.IWallabyProcessor = <wallabyjs.IWallabyProcessor>{
    '**/*.js': file => file.content + '\n// this is JavaScript',
    '**/*.ts': file => file.content + '\n// this is TypeScript'
  };

  public env: wallabyjs.IWallabyEnvironment = <wallabyjs.IWallabyEnvironment>{
    type: 'node',
    params:  {
      env: 'KEY1=value1;KEY2=value2',
      runner: '--arg1;--arg2;'
    },
    viewportSize: {
      width: 800
    }
  };

  constructor(private readonly wallaby: wallabyjs.IWallaby) { }
}
