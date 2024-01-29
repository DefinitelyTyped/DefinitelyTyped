/// <reference types="jquery" />

import { Collection, Events, EventsMixin, Model } from "backbone";

declare module "backbone" {
    class RelationalModel extends Model {
        /**
         * Do not use, prefer TypeScript's extend functionality.
         */
        // private static extend(properties:any, classProperties?:any):any;

        relations: any;
        subModelTypes: any;
        subModelTypeAttribute: any;

        initializeRelations(options: any): void;

        updateRelations(options: any): void;

        queue(func: any): void;

        processQueue(): void;

        getRelation(name: string): Relation;

        getRelations(): Relation[];

        fetchRelated(key: string, options?: any, update?: boolean): any;

        toJSON(options?: any): any;

        static setup();

        static build(attributes: any, options?: any);

        static findOrCreate(attributes: string, options?: any);

        static findOrCreate(attributes: number, options?: any);

        static findOrCreate(attributes: any, options?: any);
    }

    class Relation extends Model {
        options: any;
        instance: any;
        key: any;
        keyContents: any;
        relatedModel: any;
        relatedCollection: any;
        reverseRelation: any;
        related: any;

        checkPreconditions(): boolean;

        setRelated(related: Model): void;

        setRelated(related: Collection): void;

        getReverseRelations(model: RelationalModel): Relation;

        destroy(): JQueryXHR | false;
    }

    class HasOne extends Relation {
        collectionType: any;

        findRelated(options: any): Model;

        setKeyContents(keyContents: string): void;

        setKeyContents(keyContents: string[]): void;

        setKeyContents(keyContents: number): void;

        setKeyContents(keyContents: number[]): void;

        setKeyContents(keyContents: Collection): void;

        onChange(model: Model, attr: any, options: any): void;

        handleAddition(model: Model, coll: Collection, options: any): void;

        handleRemoval(model: Model, coll: Collection, options: any): void;

        handleReset(coll: Collection, options: any): void;

        tryAddRelated(model: Model, coll: any, options: any): void;

        addRelated(model: Model, options: any): void;

        removeRelated(model: Model, coll: any, options: any): void;
    }

    class HasMany extends Relation {
        collectionType: any;

        findRelated(options: any): Model;

        setKeyContents(keyContents: string): void;

        setKeyContents(keyContents: number): void;

        setKeyContents(keyContents: Model): void;

        onChange(model: Model, attr: any, options: any): void;

        tryAddRelated(model: Model, coll: any, options: any): void;

        addRelated(model: Model, options: any): void;

        removeRelated(model: Model, coll: any, options: any): void;
    }

    class Store extends EventsMixin implements Events {
        initializeRelation(model, relation, options);

        addModelScope(scope: any): void;

        removeModelScope(scope): void;

        addSubModels(subModelTypes: RelationalModel, superModelType: RelationalModel): void;

        setupSuperModel(modelType: RelationalModel): void;

        addReverseRelation(relation: any): void;

        addOrphanRelation(relation: any): void;

        processOrphanRelations(): void;

        retroFitRelation(relation: RelationalModel, create: boolean): Collection;

        getCollection(type: RelationalModel, create: boolean): Collection;

        getObjectByName(name: string): any;

        resolveIdForItem(type: any, item: any): any;

        static find(type: any, item: string): RelationalModel;

        static find(type: any, item: number): RelationalModel;

        static find(type: any, item: RelationalModel): RelationalModel;

        static find(type: any, item: any): RelationalModel;

        register(model: RelationalModel): void;

        checkId(model: RelationalModel, id: any): void;

        update(model: RelationalModel): void;

        // tslint:disable-next-line use-default-type-parameter
        unregister(type: RelationalModel | Collection | typeof RelationalModel): void;

        reset(): void;
    }

    const store: Store;
}
