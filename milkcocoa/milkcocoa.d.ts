// Type definitions for Milkcocoa 0.2.8
// Project: https://mlkcca.com/
// Definitions by: odangosan <https://github.com/odangosan>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Api Reference : https://mlkcca.com/document/api-js.html

declare class MilkCocoa {
  constructor(host: string);
  constructor(host: string, callback: Function);
  dataStore(host: string): DataStore;
  addAccount(email: string, password: string, options?: {}, callback?: (err: MilkCocoa.Error.AddAccount, user: User) => void): void;
  login(email: string, password: string, callback: (err: MilkCocoa.Error.Login, user: User) => void): void;
  logout(callback: (err: string) => void): void;
  getCurrentUser(callback: (err: string, user: { id: string }) => void): void;
}

declare module MilkCocoa {
  export module Error {
    export enum AddAccount {
      // FormatError= 1, AlreadyExist= 2
      FormatError, AlreadyExist
    }
    export enum Login {
      // FormatError= 1, LoginError= 2, EmailNotVerificated= 3
      FormatError, LoginError, EmailNotVerificated
    }
  }
}

interface DataStore {
  push(object: {}, callback?: (data: DataStoreCallbackData) => void): void;
  set(id: string, data: {}): void;
  remove(id: string): void;
  send(object: {}): void;
  // event push, remove, set, send
  on(event: string, callback: (data: DataStoreCallbackData) => void): void;
  off(event: string): void;
  get(id: string, callback: (data: {}) => void): void;
  query(condition?: {}): Query;
  child(path: string): DataStore;
  parent(): DataStore;
  root(): DataStore;
}

interface DataStoreCallbackData {
  err: string;
  path: string;
  id: string;
  value: any;
}

interface Query {
  done(callback: (data: any) => void): void;
  limit(number: number): Query;
  skip(index: number): Query;
  // mode  asc, desc
  sort(mode: string): Query;
}

interface User {
  id: string;
  email: string;
  option: {};
}
