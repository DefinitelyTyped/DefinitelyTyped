// Type definitions for apostrophe 2.67
// Project: https://github.com/apostrophecms/apostrophe#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = apostrophe;
export as namespace apos;

declare function apostrophe(options: any, ...args: any[]): any;

declare namespace apostrophe {
  const moogBundle: {
    directory: string;
    modules: string[];
  };

  const prototype: {};

  const ui: {
    globalBusy: (state: any) => any;
    link: (
      sel: string,
      verb: string,
      object: object,
      callback?: Function
    ) => any;
  };

  const pages: {
    page: { _id: string; type: string; _url?: string };
  };

  const adminBar: {
    link: (name: string, callback: () => any) => void;
  };

  const change: (arg: object | string) => any;

  const create: (type: string, options: any, callback?: Function) => any;

  const contextPiece: {
    _id: string;
    title: string;
    slug: string;
    type: string;
  };

  const define: (
    type: string | string[],
    definition: any,
    extending?: any
  ) => any;

  const docs: {
    getManager: (type: string) => void;
    setManager: (type: string, manager: any) => void;
    lock: (id: string, callback?: Function) => void;
    lockAndWatch: (id: string, callback?: Function) => void;
    unlock: (_id: string, sync: any, callback?: Function) => any;
  };

  const emit: (name: string, arg?: any) => any;

  const modules: object;

  const modalSupport: {
    stack: any[];
    initialized: boolean;
    depth: number;
    all: any[];
    getTopModalOrBody: () => string;
    getLatestModal: () => null | string;
    closeTopModal: () => void;
    cancelTopModal: () => void;
  };

  const notify: (message: string | object, options: AposObject) => any;

  const off: (eventName: string, fn?: Function) => any;

  const on: (eventName: string, fn?: Function) => any;

  const schemas: {
    convert: (
      $el: HTMLElement,
      schema: Schema,
      data: any,
      options: any,
      callback?: Function
    ) => any;
    newInstance: (schema: Schema) => any;
    populate: (
      data: any,
      name: string,
      $field: any,
      callback?: () => void,
      $el?: HTMLElement,
      field?: any
    ) => any;
    returnToError: (
      $el: HTMLElement,
      schema: Schema,
      errorPath: any,
      error: any,
      callback: Function
    ) => void;
  };

  const utils: {
    capitalizeFirst: (s: string) => string;
    camelName: (s: string) => string;
    error: (msg: string) => void;
    generateId: () => string;
  };

  const versions: {
    edit: (id: string, afterRevert?: () => void) => any;
  };
}

type AposObject = {
  [key: string]: any;
};

type Fields = {
  [key: string]: any;
}[];

type AposType = {
  name: string;
  converters: {
    string(
      req: any,
      data: any,
      name: string,
      object: AposObject,
      field: any,
      callback: Function
    ): void;
    form(
      req: any,
      data: any,
      name: string,
      object: AposObject,
      field: any,
      callback: Function
    ): void;
  };
  empty?(field: any, value: any): void;
  bless?(req: any, field: any): void;
  index(value: any, field: any, texts: any): void;
};

type Schema = {
  createRoutes(): any[];
  pushAssets(): void;
  pushCreateSingleton(): void;
  compose(options: AposObject): void;
  refine(schema: Schema, options: AposObject): void;
  toGroups(fields: Fields): void;
  subset(schema: Schema, fields: Fields): Schema;
  newInstance(schema: Schema): any;
  subsetInstance(schema: Schema, instance: AposObject): any;
  empty(schema: Schema, object: AposObject): void;
  indexFields(schema: Schema, object: AposObject, texts: any): void;
  convert(
    req: any,
    schema: Schema,
    to: any,
    object: AposObject,
    output: any,
    callback: Function
  ): void;
  isVisible(schema: Schema, object: AposObject, name: string): void;
  export(
    req: any,
    schema: Schema,
    to: any,
    object: AposObject,
    output: any,
    callback: Function
  ): void;
  joinDriver(
    req: any,
    method: any,
    reverse: any,
    items: any,
    idField: any,
    relationshipsField: any,
    objectField: any,
    options: any,
    callback: Function
  ): void;
  join(
    req: any,
    schema: Schema,
    objectOrArray: any,
    withJoins: any,
    callback: Function
  ): void;
  addFieldType(type: AposType): void;
  getFieldType(typeName: string): void;
  addFilters(schema: Schema, options: any, cursor: any): void;
  joinFilterChoices(field: any, cursor: any, valueField: any): void;
  addJoinSlugFilter(field: any, cursor: any, suffix: any): void;
  pageServe(req: any): void;
  sortedDistinct(property: any, cursor: any, callback: Function): void;
  cursorFilterInterested(cursor: any, name: string): void;
  afterInit(): void;
  validate(schema: Schema, options: any): void;
};

type AposModule = {
  emit(name: string): void;
  on(name: string, methodName: any, fn: Function): void;
};

type AposCoreModules =
  | "apostrophe-admin-bar"
  | "apostrophe-any-page-manager"
  | "apostrophe-areas"
  | "apostrophe-assets"
  | "apostrophe-attachments"
  | "apostrophe-browser-utils"
  | "apostrophe-caches"
  | "apostrophe-custom-pages"
  | "apostrophe-db"
  | "apostrophe-doc-type-manager"
  | "apostrophe-docs"
  | "apostrophe-email"
  | "apostrophe-express"
  | "apostrophe-files"
  | "apostrophe-files-widgets"
  | "apostrophe-global"
  | "apostrophe-groups"
  | "apostrophe-html-widgets"
  | "apostrophe-i18n"
  | "apostrophe-images"
  | "apostrophe-images-widgets"
  | "apostrophe-jobs"
  | "apostrophe-launder"
  | "apostrophe-locks"
  | "apostrophe-login"
  | "apostrophe-migrations"
  | "apostrophe-modal"
  | "apostrophe-module"
  | "apostrophe-notifications"
  | "apostrophe-oembed"
  | "apostrophe-pager"
  | "apostrophe-pages"
  | "apostrophe-permissions"
  | "apostrophe-pieces"
  | "apostrophe-pieces-pages"
  | "apostrophe-pieces-widgets"
  | "apostrophe-polymorphic-manager"
  | "apostrophe-push"
  | "apostrophe-rich-text-widgets"
  | "apostrophe-schemas"
  | "apostrophe-search"
  | "apostrophe-service-bridge"
  | "apostrophe-soft-redirects"
  | "apostrophe-tags"
  | "apostrophe-tasks"
  | "apostrophe-templates"
  | "apostrophe-ui"
  | "apostrophe-urls"
  | "apostrophe-users"
  | "apostrophe-utils"
  | "apostrophe-versions"
  | "apostrophe-video-fields"
  | "apostrophe-video-widgets"
  | "apostrophe-widgets";
