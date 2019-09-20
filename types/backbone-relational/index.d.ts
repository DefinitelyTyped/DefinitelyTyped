// Type definitions for Backbone-relational 0.10
// Project: http://backbonerelational.org/
// Definitions by: Eirik Hoem <https://github.com/eirikhm>
//                 Julian Gonggrijp <https://github.com/jgonggrijp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="jquery" />

import { EventsMixin, Events, Model as BModel, Collection } from 'backbone';

export class Model extends BModel {
    /**
    * Do not use, prefer TypeScript's extend functionality.
    **/
    //private static extend(properties:any, classProperties?:any):any;

    relations:any;
    subModelTypes:any;
    subModelTypeAttribute:any;


    initializeRelations(options:any):void;

    updateRelations(options:any):void;

    queue(func:any):void;

    processQueue():void;

    getRelation(name:string):Relation;

    getRelations():Relation[];

    fetchRelated(key:string, options?:any, update?:boolean):any;

    toJSON(options?: any):any;

    static setup();

    static build(attributes:any, options?:any);

    static findOrCreate(attributes:string, options?:any);

    static findOrCreate(attributes:number, options?:any);

    static findOrCreate(attributes:any, options?:any);
}

export class Relation extends BModel {

    options:any;
    instance:any;
    key:any;
    keyContents:any;
    relatedModel:any;
    relatedCollection:any;
    reverseRelation:any;
    related:any;

    checkPreconditions():boolean;

    setRelated(related:BModel):void;

    setRelated(related:Collection<BModel>):void;

    getReverseRelations(model:Model):Relation;

    destroy():void;
}

export class HasOne extends Relation {
    collectionType:any;

    findRelated(options:any):BModel;

    setKeyContents(keyContents:string):void;

    setKeyContents(keyContents:string[]):void;

    setKeyContents(keyContents:number):void;

    setKeyContents(keyContents:number[]):void;

    setKeyContents(keyContents:Collection<BModel>):void;

    onChange(model:BModel, attr:any, options:any):void;

    handleAddition(model:BModel, coll:Collection<BModel>, options:any):void;

    handleRemoval(model:BModel, coll:Collection<BModel>, options:any):void;

    handleReset(coll:Collection<BModel>, options:any):void;

    tryAddRelated(model:BModel, coll:any, options:any):void;

    addRelated(model:BModel, options:any):void;

    removeRelated(model:BModel, coll:any, options:any):void;

}


export class HasMany extends Relation {
    collectionType:any;

    findRelated(options:any):BModel;

    setKeyContents(keyContents:string):void;

    setKeyContents(keyContents:number):void;

    setKeyContents(keyContents:BModel):void;

    onChange(model:BModel, attr:any, options:any):void;

    tryAddRelated(model:BModel, coll:any, options:any):void;

    addRelated(model:BModel, options:any):void;

    removeRelated(model:BModel, coll:any, options:any):void;

}

export class Store extends EventsMixin implements Events {
    initializeRelation(model, relation, options);

    addModelScope(scope:any):void;

    removeModelScope(scope):void;

    addSubModels(subModelTypes:Model, superModelType:Model):void;

    setupSuperModel(modelType:Model):void;

    addReverseRelation(relation:any):void;

    addOrphanRelation(relation:any):void;

    processOrphanRelations():void;

    retroFitRelation(relation:Model, create:boolean):Collection<BModel>;

    getCollection(type:Model, create:boolean):Collection<BModel>;

    getObjectByName(name:string):any;


    resolveIdForItem(type:any, item:any):any;

    static find(type:any, item:string):Model;

    static find(type:any, item:number):Model;

    static find(type:any, item:Model):Model;

    static find(type:any, item:any):Model;

    register(model:Model):void;

    checkId(model:Model, id:any):void;

    update(model:Model):void;

    // tslint:disable-next-line use-default-type-parameter
    unregister(type: Model | Collection<Model> | typeof Model): void;

    reset():void;

}

export const store: Store;
