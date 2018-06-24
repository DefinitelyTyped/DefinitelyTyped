// Type definitions for redux-orm 0.9.4
// Project: https://github.com/tommikaikkonen/redux-orm#readme
// Definitions by: Andrey Goncharov <https://github.com/keenondrums>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IORMId {
  id: string
}

interface ITableState<Item = any, Meta = any> {
  items: string[],
  itemsById: { [index: string]: Item },
  meta: Meta
}

interface IORMCommonState {
  [index: string]: ITableState
}

type ISession<State extends IORMCommonState> = Session<State> & { [P in keyof State]: typeof Model }

type IModel<Fields, Additional = {}, VirtualFields = {}> = Model<Fields, Additional, VirtualFields> & Fields & VirtualFields & Additional & IORMId

// TODO: Refine me
type IModelProps = any

// TODO: Refine me
interface IDB {
  getEmptyState: any,
  query: any,
  update: any,
  describe: any
}

// TODO: Refine me
interface ISchemaSpec {
  tables: any
}

// TODO: Refine me
interface IORMOpts {
  createDatabase: (schemaSpec: ISchemaSpec) => any
}

interface IModelFields {
  [index: string]: Attribute | ForeignKey | ManyToMany | OneToOne
}

interface IModelVirtualFields {
  [index: string]: any
}

export class ORM<State extends IORMCommonState = IORMCommonState> {
  constructor(opts?: IORMOpts)
  register(...model: Array<typeof Model>): void
  register<M>(...model: Array<M[keyof M]>): void
  registerManyToManyModelsFor(model: typeof Model): void
  get(modelName: string): typeof Model
  getModelClasses(): Array<typeof Model>
  isFieldInstalled(modelName: string, fieldName: string): boolean
  setFieldInstalled(modelName: string, fieldName: string): void
  generateSchemaSpec(): ISchemaSpec
  getDatabase(): IDB
  getEmptyState(): State
  session(state: State): ISession<State>
  mutableSession(state: State): ISession<State>

  private _attachQuerySetMethods(model: typeof Model): void
  private _setupModelPrototypes(models: Array<typeof Model>): void
}

export class Model<Fields, Additional = {}, VirtualFields = {}> {
  static readonly idAttribute: string
  static readonly session: ISession<any>
  static readonly _sessionData: any // TODO
  static readonly query: QuerySet<any>

  static modelName: string
  static fields: IModelFields
  static virtualFields: IModelVirtualFields
  static querySetClass: typeof QuerySet

  static toString(): string
  static options<T = object>(): T
  static _getTableOpts<T = object>(): T
  static markAccessed(): void
  static connect<State extends IORMCommonState>(session: Session<State>): void
  static getQuerySet<T extends QuerySet<any> = QuerySet<any>>(): T
  static invalidateClassCache(): void
  static all<Fields, Additional = {}, VirtualFields = {}>(): QuerySet<Fields, Additional, VirtualFields>
  static create<Fields, Additional = {}, VirtualFields = {}>(props: Fields): IModel<Fields, Additional, VirtualFields>
  static upsert<Fields, Additional = {}, VirtualFields = {}>(props: Partial<Fields>): IModel<Fields, Additional, VirtualFields>
  static withId<Fields, Additional = {}, VirtualFields = {}>(id: string): IModel<Fields, Additional, VirtualFields>
  static hasId(id: string): boolean
  static _findDatabaseRows(lookupObj: object): any // TODO
  static get<Fields, Additional = {}, VirtualFields = {}>(lookupObj: Object): IModel<Fields, Additional, VirtualFields>
  static reducer<State extends IORMCommonState>(session: ISession<State>, action: any): any

  readonly ref: Fields & Additional & IORMId

  constructor(props: IModelProps)

  getClass(): string
  getId(): string
  toString(): string
  equals<OtherFields, OtherAdditional = {}, OtherVirtualFields = {}>(otherModel: IModel<OtherFields, OtherAdditional, OtherVirtualFields>): boolean
  set<T = any>(propertyName: string, value: T): void
  update(userMergeObj: Partial<Fields & Additional>): void
  refreshFromState(): void
  delete(): void

  private _onDelete(): void
  private _initFields(props: IModelProps): void
  private _refreshMany2Many(relations: any): void //TODO
}

type IQuerySetClauses = any // TODO
type IQuerySetOpts = any // TODO
declare class QuerySet<Fields, Additional = {}, VirtualFields = {}> {
  static addSharedMethod(methodName: string): void

  constructor(modelClass: typeof Model, clauses: IQuerySetClauses, opts: IQuerySetOpts)

  toString(): string
  toRefArray(): Array<Fields & Additional & IORMId>
  toModelArray(): Array<IModel<Fields, Additional, VirtualFields>>
  count(): number
  exists(): boolean
  at(index: string): IModel<Fields, Additional, VirtualFields> | undefined
  first(): IModel<Fields, Additional, VirtualFields> | undefined
  last(): IModel<Fields, Additional, VirtualFields> | undefined
  all(): QuerySet<Fields, Additional, VirtualFields>
  filter(lookupObj: object): QuerySet<Fields, Additional, VirtualFields> // TODO
  exclude(lookupObj: object): QuerySet<Fields, Additional, VirtualFields> // TODO
  orderBy(iteratees: any, orders: any): QuerySet<Fields, Additional, VirtualFields> // TODO
  update(mergeObj: Partial<Fields & Additional>): void
  delete(): void

  private _evaluate(): void
  private _new(clauses: IQuerySetClauses, userOpts: IQuerySetOpts): QuerySet<Fields, Additional, VirtualFields>
}

export class Session<State extends IORMCommonState> {
  readonly accessedModels: string[]
  schema: ORM<State>
  db: IDB
  initialState: State
  withMutations: boolean
  batchToken: any
  sessionBoundModels: Array<typeof Model>
  models: Array<typeof Model>
  state: State

  constructor(schema: ORM<State>, db: IDB, state: State, withMutations: boolean, batchToken: any) // TODO
  
  markAccessed(modelName: string): void
  getDataForModel(modelName: string): object
  applyUpdate(updateSpec: any): any // TODO
  query(querySpec: any): any // TODO
}

interface IAttributeOpts {
  getDefault?: () => any
}

export class Attribute {
  constructor (opts: IAttributeOpts)
  install(model: typeof Model, fieldName: string, orm: ORM): void
}

interface IRelationalFieldOpts {
  to: string,
  relatedName?: string,
  through?: string,
  throughFields?: {
    to: string,
    from: string
  }
}

export class RelationalField {
  constructor (toModelName: string, relatedName?: string)
  constructor (opts: IRelationalFieldOpts)
  getClass: typeof RelationalField
}

export class ForeignKey extends RelationalField {
  install(model: typeof Model, fieldName: string, orm: ORM): void
}

export class ManyToMany extends RelationalField {
  install(model: typeof Model, fieldName: string, orm: ORM): void
}

export class OneToOne extends RelationalField {
  install(model: typeof Model, fieldName: string, orm: ORM): void
}

export function attr(opts?: IAttributeOpts): Attribute

export function fk(toModelName: string, relatedName?: string): ForeignKey
export function fk(opts: IRelationalFieldOpts): ForeignKey


export function many(toModelName: string, relatedName?: string): ManyToMany
export function many(opts: IRelationalFieldOpts): ManyToMany

export function oneToOne(toModelName: string, relatedName?: string): OneToOne
export function oneToOne(opts: IRelationalFieldOpts): OneToOne

type IUpdater<State extends IORMCommonState> = (session: ISession<State>, action: any) => any

export function createReducer<State extends IORMCommonState = IORMCommonState>(orm: ORM<State>, updater?: IUpdater<State>): (state: State, action: any) => State

type IORMSelector<State extends IORMCommonState, Result = any> = (session: ISession<State>, ...args: any[]) => Result

export function createSelector<State extends IORMCommonState = IORMCommonState, Result = any>(orm: ORM<State>, ...args: IORMSelector<State>[]): (state: State) => Result
