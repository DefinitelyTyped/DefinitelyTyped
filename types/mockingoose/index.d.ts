// Type definitions for mockingoose 2.11
// Project: https://github.com/alonronin/mockingoose#readme
// Definitions by: Hiroshi Ioka <https://github.com/hirochachacha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

type Op =
  | 'find'
  | 'findOne'
  | 'count'
  | 'countDocuments'
  | 'estimatedDocumentCount'
  | 'distinct'
  | 'findOneAndUpdate'
  | 'findOneAndRemove'
  | 'remove'
  | 'update'
  | 'deleteOne'
  | 'deleteMany'
  | 'save';

declare class Mock {
  toReturn(expected: any, op?: Op): this;
  reset(op: Op): this;
  toJSON(): any;
}

interface Target {
  __mocks: any;
  resetAll(): void;
  toJSON(): any;
}

type Proxy = Target & {
  [index: string]: Mock;
};

declare const mockingoose: Proxy;

export default mockingoose;
