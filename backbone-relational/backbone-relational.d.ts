// Type definitions for Backbone-relational 0.8.5
// Project: http://backbonerelational.org/
// Definitions by: Eirik Hoem <https://github.com/eirikhm/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

/// <reference path="../backbone/backbone.d.ts" />

declare module Backbone {
    export class RelationalModel extends Model {
        static extend(properties:any, classProperties?:any):any; // do not use, prefer TypeScript's extend functionality
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

        toJSON():any;

        setup();

        build(attributes:any, options?:any);

        findOrCreate(attributes:string, options?:any);

        findOrCreate(attributes:number, options?:any);

        findOrCreate(attributes:any, options?:any);
    }

    export class Relation extends Model {

        options:any;
        instance:any;
        key:any;
        keyContents:any;
        relatedModel:any;
        relatedCollection:any;
        reverseRelation:any;
        related:any;

        checkPreconditions():boolean;

        setRelated(related:Model):void;

        setRelated(related:Collection):void;

        getReverseRelations(model:RelationalModel):Relation;

        destroy():void;
    }

    export class HasOne extends Relation {
        collectionType:any;

        findRelated(options:any):Model;

        setKeyContents(keyContents:string):void;

        setKeyContents(keyContents:string[]):void;

        setKeyContents(keyContents:number):void;

        setKeyContents(keyContents:number[]):void;

        setKeyContents(keyContents:Collection):void;

        onChange(model:Model, attr:any, options:any):void;

        handleAddition(model:Model, coll:Collection, options:any):void;

        handleRemoval(model:Model, coll:Collection, options:any):void;

        handleReset(coll:Collection, options:any):void;

        tryAddRelated(model:Model, coll:any, options:any):void;

        addRelated(model:Model, options:any):void;

        removeRelated(model:Model, coll:any, options:any):void;

    }


    export class HasMany extends Relation {
        collectionType:any;

        findRelated(options:any):Model;

        setKeyContents(keyContents:string):void;

        setKeyContents(keyContents:number):void;

        setKeyContents(keyContents:Model):void;

        onChange(model:Model, attr:any, options:any):void;

        tryAddRelated(model:Model, coll:any, options:any):void;

        addRelated(model:Model, options:any):void;

        removeRelated(model:Model, coll:any, options:any):void;

    }

    export class Store extends Events {
        initializeRelation(model, relation, options);

        addModelScope(scope:any):void;

        removeModelScope(scope):void;

        addSubModels(subModelTypes:RelationalModel, superModelType:RelationalModel):void;

        setupSuperModel(modelType:RelationalModel):void;

        addReverseRelation(relation:any):void;

        addOrphanRelation(relation:any):void;

        processOrphanRelations():void;

        retroFitRelation(relation:RelationalModel, create:boolean):Collection;

        getCollection(type:RelationalModel, create:boolean):Collection;

        getObjectByName(name:string):any;


        resolveIdForItem(type:any, item:any):any;

        find(type:any, item:string):RelationalModel;

        find(type:any, item:number):RelationalModel;

        find(type:any, item:RelationalModel):RelationalModel;

        find(type:any, item:any):RelationalModel;

        register(model:RelationalModel):void;

        checkId(model:RelationalModel, id:any):void;

        update(model:RelationalModel):void;

        unregister(model:RelationalModel, collection:Collection, options:any):void;

        reset():void;


    }

}
