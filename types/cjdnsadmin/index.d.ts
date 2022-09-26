export type SaferphoreCallback = (
  callback: (data?: any) => void
) => (data?: any) => void;
export type Saferphore = {
  take: (callback: (callback: SaferphoreCallback) => void) => void;
};

export type CjdnsadminOptions = {
  addr?: string;
  port?: number;
  password?: string;
  cjdnsadminPath?: string;
};
export type CjdnsadminError = {
  message: string;
  code: 'ENOENT' | 'EPERM';
};

export type SocketHandler = {
  callback: (error?: CjdnsadminError, response?: object) => void;
  timeout: number;
};

export type Socket = {
  semaphore: Saferphore;
  handlers: { [txid: string]: SocketHandler };
  counter: number;
  defaultHandler: undefined;
  timeout: number;
};

export type FunctionArgument = {
  required: 1 | 0;
  type: string;
  name: string;
};

export type FunctionArguments = {
  [argName: string]: FunctionArgument;
};

export type FormattedFunctionArgument = {
  required: boolean;
  type: string;
  name: string;
};

export type Type = 'Int' | 'String' | 'Dict' | 'List';

export declare function sendmsg(
  sock: Socket,
  addr: string,
  port: number,
  msg: Buffer,
  txid: string,
  callback: (error?: CjdnsadminError, response?: object) => void
): void;

export declare function callFunc(
  sock: Socket,
  addr: string,
  port: number,
  pass: string,
  func: string,
  args: FunctionArguments,
  callback: (error?: CjdnsadminError, response?: object) => void
): void;

export declare function getArgs(
  func: FunctionArguments
): FormattedFunctionArgument[];

export declare function makeFunctionDescription(
  funcName: string,
  func: FunctionArguments
): string;

export declare function compatibleType(typeName: Type, obj: any): boolean;

export declare function makeFunction(
  sock: Socket,
  addr: string,
  port: number,
  pass: string,
  funcName: string,
  func: FunctionArguments
): void;

export declare function getFunctions(
  sock: Socket,
  addr: string,
  port: number,
  pass: string,
  callback: (error?: CjdnsadminError, response?: object) => void
): void;

export declare function connect0(
  addr: string,
  port: number,
  pass: string,
  usingCjdnsadmin: string,
  callback: (error?: CjdnsadminError, response?: object) => void
): void;

export declare function connect(
  callback: (error?: CjdnsadminError, response?: object) => void,
  _opts?: CjdnsadminOptions
): void;
