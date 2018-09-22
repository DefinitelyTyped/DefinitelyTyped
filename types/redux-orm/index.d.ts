// Type definitions for redux-orm 0.9
// Project: https://github.com/tommikaikkonen/redux-orm#readme
// Definitions by: Andrey Goncharov <https://github.com/keenondrums>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface ORMId {
  id: string;
}

export interface TableState<Item = any, Meta = any> {
  items: string[];
  itemsById: { [index: string]: Item };
  meta: Meta;
}

export interface ORMCommonState {
  [index: string]: TableState;
}

export type SessionWithModels<State extends ORMCommonState> = Session<State> & { [P in keyof State]: typeof Model };

export type ModelWithFields<Fields, Additional = {}, VirtualFields = {}> = Model<Fields, Additional, VirtualFields> & Fields & VirtualFields & Additional & ORMId;

// TODO: Refine me
export type ModelProps = any;

// TODO: Refine me
export interface DB {
  getEmptyState: any;
  query: any;
  update: any;
  describe: any;
}

// TODO: Refine me
export interface SchemaSpec {
  tables: any;
}

// TODO: Refine me
export interface ORMOpts {
  createDatabase: (schemaSpec: SchemaSpec) => any;
}

export interface ModelFields {
  [index: string]: Attribute | ForeignKey | ManyToMany | OneToOne;
}

export interface ModelVirtualFields {
  [index: string]: any;
}

export class ORM<State extends ORMCommonState = ORMCommonState> {
  constructor(opts?: ORMOpts)
  register(...model: Array<typeof Model>): void;
  register<M>(...model: Array<M[keyof M]>): void;
  registerManyToManyModelsFor(model: typeof Model): void;
  get(modelName: string): typeof Model;
  getModelClasses(): Array<typeof Model>;
  isFieldInstalled(modelName: string, fieldName: string): boolean;
  setFieldInstalled(modelName: string, fieldName: string): void;
  generateSchemaSpec(): SchemaSpec;
  getDatabase(): DB;
  getEmptyState(): State;
  session(state: State): SessionWithModels<State>;
  mutableSession(state: State): SessionWithModels<State>;

  private _attachQuerySetMethods(model: typeof Model): void;
  private _setupModelPrototypes(models: Array<typeof Model>): void;
}

export class Model<Fields, Additional = {}, VirtualFields = {}> {
  static readonly idAttribute: string;
  static readonly session: SessionWithModels<any>;
  static readonly _sessionData: any; // TODO
  static readonly query: QuerySet<any>;

  static modelName: string;
  static fields: ModelFields;
  static virtualFields: ModelVirtualFields;
  static querySetClass: typeof QuerySet;

  static toString(): string;
  static options(): object;
  static _getTableOpts(): object;
  static markAccessed(): void;
  static connec(session: Session<ORMCommonState>): void;
  static getQuerySet(): QuerySet<any>;
  static invalidateClassCache(): void;
  static all(): QuerySet<any, any, any>;
  static create<Fields>(props: Fields): ModelWithFields<Fields, any, any>;
  static upsert<Fields>(props: Partial<Fields>): ModelWithFields<Fields, any, any>;
  static withId(id: string): ModelWithFields<any, any, any>;
  static hasId(id: string): boolean;
  static _findDatabaseRows(lookupObj: object): any; // TODO
  static get(lookupObj: object): ModelWithFields<any, any, any>;
  static reducer(session: SessionWithModels<ORMCommonState>, action: any): any;

  readonly ref: Fields & Additional & ORMId;

  constructor(props: ModelProps)

  getClass(): string;
  getId(): string;
  toString(): string;
  equals(otherModel: ModelWithFields<any, any, any>): boolean;
  set(propertyName: string, value: any): void;
  update(userMergeObj: Partial<Fields & Additional>): void;
  refreshFromState(): void;
  delete(): void;

  private _onDelete(): void;
  private _initFields(props: ModelProps): void;
  private _refreshMany2Many(relations: any): void; // TODO
}

export type QuerySetClauses = any; // TODO
export type QuerySetOpts = any; // TODO
export class QuerySet<Fields, Additional = {}, VirtualFields = {}> {
  static addSharedMethod(methodName: string): void;

  constructor(modelClass: typeof Model, clauses: QuerySetClauses, opts: QuerySetOpts)

  toString(): string;
  toRefArray(): Array<Fields & Additional & ORMId>;
  toModelArray(): Array<ModelWithFields<Fields, Additional, VirtualFields>>;
  count(): number;
  exists(): boolean;
  at(index: string): ModelWithFields<Fields, Additional, VirtualFields> | undefined;
  first(): ModelWithFields<Fields, Additional, VirtualFields> | undefined;
  last(): ModelWithFields<Fields, Additional, VirtualFields> | undefined;
  all(): QuerySet<Fields, Additional, VirtualFields>;
  filter(lookupObj: object): QuerySet<Fields, Additional, VirtualFields>; // TODO
  exclude(lookupObj: object): QuerySet<Fields, Additional, VirtualFields>; // TODO
  orderBy(iteratees: any, orders: any): QuerySet<Fields, Additional, VirtualFields>; // TODO
  update(mergeObj: Partial<Fields & Additional>): void;
  delete(): void;

  private _evaluate(): void;
  private _new(clauses: QuerySetClauses, userOpts: QuerySetOpts): QuerySet<Fields, Additional, VirtualFields>;
}

export class Session<State extends ORMCommonState> {
  readonly accessedModels: string[];
  schema: ORM<State>;
  db: DB;
  initialState: State;
  withMutations: boolean;
  batchToken: any;
  sessionBoundModels: Array<typeof Model>;
  models: Array<typeof Model>;
  state: State;

  constructor(schema: ORM<State>, db: DB, state: State, withMutations: boolean, batchToken: any) // TODO

  markAccessed(modelName: string): void;
  getDataForModel(modelName: string): object;
  applyUpdate(updateSpec: any): any; // TODO
  query(querySpec: any): any; // TODO
}

export interface AttributeOpts {
  getDefault?: () => any;
}

export class Attribute {
  constructor(opts: AttributeOpts)
  install(model: typeof Model, fieldName: string, orm: ORM): void;
}

export interface RelationalFieldOpts {
  to: string;
  relatedName?: string;
  through?: string;
  throughFields?: {
    to: string;
    from: string;
  };
}

export class RelationalField {
  constructor(toModelName: string, relatedName?: string)
  constructor(opts: RelationalFieldOpts)
  getClass: typeof RelationalField;
}

export class ForeignKey extends RelationalField {
  install(model: typeof Model, fieldName: string, orm: ORM): void;
}

export class ManyToMany extends RelationalField {
  install(model: typeof Model, fieldName: string, orm: ORM): void;
}

export class OneToOne extends RelationalField {
  install(model: typeof Model, fieldName: string, orm: ORM): void;
}

export function attr(opts?: AttributeOpts): Attribute;

export function fk(toModelName: string, relatedName?: string): ForeignKey;
export function fk(opts: RelationalFieldOpts): ForeignKey;

export function many(toModelName: string, relatedName?: string): ManyToMany;
export function oneToOne(toModelName: string, relatedName?: string): OneToOne;
export function oneToOne(opts: RelationalFieldOpts): OneToOne;

export type Updater<State extends ORMCommonState> = (session: SessionWithModels<State>, action: any) => any;

export function createReducer<State extends ORMCommonState = ORMCommonState>(orm: ORM<State>, updater?: Updater<State>): (state: State, action: any) => State;

export type ORMSelector<State extends ORMCommonState, Result = any> = (session: SessionWithModels<State>, ...args: any[]) => Result;

export function createSelector<State extends ORMCommonState = ORMCommonState>(orm: ORM<State>, ...args: Array<ORMSelector<State>>): (state: State) => any;
