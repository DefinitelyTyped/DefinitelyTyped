// Type definitions for redux-orm 0.13
// Project: https://github.com/redux-orm/redux-orm
// Definitions by: Andrey Goncharov <https://github.com/keenondrums>
//                 Tomasz Zabłocki <https://github.com/tomasz-zablocki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { ORM, ORMOpts, OrmState } from './ORM';
import Model, {
    CreateProps,
    CustomInstanceProps,
    IdKey,
    IdOrModelLike,
    IdType,
    ModelField,
    ModelFieldMap,
    ModelType,
    Ref,
    RefPropOrSimple,
    SessionBoundModel,
    UpdateProps,
    UpsertProps
} from './Model';
import QuerySet, { MutableQuerySet } from './QuerySet';
import { OrmSession } from './Session';
import { createDatabase, TableOpts, TableState } from './db';
import { attr, Attribute, FieldSpecMap, fk, ForeignKey, many, ManyToMany, OneToOne, oneToOne } from './fields';
import { createReducer, createSelector, defaultUpdater, ORMReducer, ORMSelector } from './redux';

export {
    FieldSpecMap,
    TableOpts,
    RefPropOrSimple,
    ModelFieldMap,
    CustomInstanceProps,
    UpsertProps,
    CreateProps,
    UpdateProps,
    ModelField,
    OrmSession as Session,
    MutableQuerySet,
    createDatabase,
    createSelector,
    createReducer,
    defaultUpdater,
    ORMSelector,
    ORMReducer,
    IdOrModelLike,
    Ref,
    SessionBoundModel,
    IdKey,
    IdType,
    ModelType,
    ORM,
    OrmState,
    ORMOpts,
    TableState,
    Model,
    QuerySet,
    Attribute,
    OneToOne,
    ForeignKey,
    ManyToMany,
    attr,
    oneToOne,
    fk,
    many
};

export default Model;
