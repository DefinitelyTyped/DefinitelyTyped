// Type definitions for Seraph
// Project: https://github.com/brikteknologier/seraph
// Definitions by: David Simons <http://www.swamwithturtles.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module SeraphDb {

    interface SeraphConstructor {
        fn: SeraphDbContext
        (): SeraphDbContext
    }

    interface ResultCallback<T> {
        (err:Error, result:T): void;
    }
    
    interface ResultResponseCallback {
        (err:Error, result:Object, response:Object): void;
    }
    
    interface ErrorOnlyCallback {
        (error:Error): void;
    }

    interface SeraphDbContext {
        changePassword(newPassword:string, callback:ErrorOnlyCallback):void;

        query(cypher:string, params:any, callback:ResultCallback<Object[]>):void;
        query(cypher:string, callback:ResultCallback<Object[]>):void;

        queryRaw(cypher:string, params:any, callback:ResultCallback<string>):void;
        queryRaw(cypher:string, callback:ResultCallback<string>):void;

        operation(path:string):Operation;
        operation(path:string, method:string):Operation;
        operation(path:string, data:Object):Operation;
        operation(path:string, method:string, data:Object):Operation;

        call(operation:Operation, callback:ResultResponseCallback):void;

        batch():Operation;
        batch(trans:(op:Operation)=>void, callback:ResultCallback<any>):void;

        save(data:Object, callback:ResultCallback<Node>):void;
        save(data:Object, label:string, callback:ResultCallback<Node>):void;
        save(data:Object, key:string, value:any, callback:ResultCallback<Node>):void;

        read(id:Number, property:string, callback:ResultCallback<any>):void;
        read(id:Number, callback:ResultCallback<Node>):void;
        read(object:IdHolder, property:string, callback:ResultCallback<any>):void;
        read(object:IdHolder, callback:ResultCallback<Node>):void;

        delete(id:Number, callback?:ErrorOnlyCallback):void;
        delete(object:IdHolder, callback?:ErrorOnlyCallback):void;
        delete(id:Number, force:boolean, callback?:ErrorOnlyCallback):void;
        delete(object:IdHolder, force:boolean, callback?:ErrorOnlyCallback):void;
        delete(id:Number, property:string, callback?:ErrorOnlyCallback):void;
        delete(object:IdHolder, property:string, callback?:ErrorOnlyCallback):void;

        find(object:Object, any:boolean, label:string, callback:ResultCallback<Node[]>):void;
        find(object:Object, label:string, callback:ResultCallback<Node[]>):void;
        find(object:Object, any:boolean, callback:ResultCallback<Node[]>):void;
        find(object:Object, callback:ResultCallback<Node[]>):void;

        relationships(id:Number, direct:string, type:string, callback:ResultCallback<Relationship[]>):void;
        relationships(id:Number, direct:string, callback:ResultCallback<Relationship[]>):void;
        relationships(id:Number, callback:ResultCallback<Relationship[]>):void;
        relationships(object:IdHolder, direct:string, type:string, callback:ResultCallback<Relationship[]>):void;
        relationships(object:IdHolder, direct:string, callback:ResultCallback<Relationship[]>):void;
        relationships(object:IdHolder, callback:ResultCallback<Relationship[]>):void;

        label(id:number, label:string, replace:boolean, callback:ErrorOnlyCallback):void;
        label(id:number, label:string, callback:ErrorOnlyCallback):void;
        label(id:number, labels:string[], replace:boolean, callback:ErrorOnlyCallback):void;
        label(id:number, labels:string[], callback:ErrorOnlyCallback):void;
        label(ids:number[], label:string, replace:boolean, callback:ErrorOnlyCallback):void;
        label(ids:number[], label:string, callback:ErrorOnlyCallback):void;
        label(ids:number[], labels:string[], replace:boolean, callback:ErrorOnlyCallback):void;
        label(ids:number[], labels:string[], callback:ErrorOnlyCallback):void;
        label(object:IdHolder, label:string, replace:boolean, callback:ErrorOnlyCallback):void;
        label(object:IdHolder, label:string, callback:ErrorOnlyCallback):void;
        label(object:IdHolder, labels:string[], replace:boolean, callback:ErrorOnlyCallback):void;
        label(object:IdHolder, labels:string[], callback:ErrorOnlyCallback):void;
        label(objects:IdHolder[], label:string, replace:boolean, callback:ErrorOnlyCallback):void;
        label(objects:IdHolder[], label:string, callback:ErrorOnlyCallback):void;
        label(objects:IdHolder[], labels:string[], replace:boolean, callback:ErrorOnlyCallback):void;
        label(objects:IdHolder[], labels:string[], callback:ErrorOnlyCallback):void;

        removeLabel(id:number, label:string, callback:ErrorOnlyCallback):void;
        removeLabel(ids:number[], label:string, callback:ErrorOnlyCallback):void;
        removeLabel(object:IdHolder, label:string, callback:ErrorOnlyCallback):void;
        removeLabel(objects:IdHolder[], label:string, callback:ErrorOnlyCallback):void;

        nodesWithLabel(label:string, callback:ResultCallback<Node[]>):void;

        readLabels(callback:ResultCallback<string[]>):void;
        readLabels(node:Node, callback:ResultCallback<string[]>):void;
        readLabels(nodes:Node[], callback:ResultCallback<string[]>):void;

        relate(idFrom:number, type:string, idTo:number, properties:Object, callback:ResultCallback<Relationship>):void;
        relate(idFrom:IdHolder, type:string, idTo:number, properties:Object, callback:ResultCallback<Relationship>):void;
        relate(idFrom:number, type:string, idTo:IdHolder, properties:Object, callback:ResultCallback<Relationship>):void;
        relate(idFrom:IdHolder, type:string, idTo:IdHolder, properties:Object, callback:ResultCallback<Relationship>):void;
        relate(idFrom:number, type:string, idTo:number, callback:ResultCallback<Relationship>):void;
        relate(idFrom:IdHolder, type:string, idTo:number, callback:ResultCallback<Relationship>):void;
        relate(idFrom:number, type:string, idTo:IdHolder, callback:ResultCallback<Relationship>):void;
        relate(idFrom:IdHolder, type:string, idTo:IdHolder, callback:ResultCallback<Relationship>):void;

        node:NodeQueryHolder;
        rel:RelationshipQueryHolder;
        constraints:ConstraintsQueryHolder;
        index:IndexQueryHolder;

        legacyindex(name:string, id:number, key:string, value:any, callback?:ErrorOnlyCallback):void;
        legacyindex(name:string, id:IdHolder, key:string, value:any, callback?:ErrorOnlyCallback):void;
    }

    interface IdHolder {
        id:number;
    }

    interface NodeQueryHolder {
        legacyindex : NodeLegacyIndexQueryHolder;
    }

    interface RelationshipQueryHolder {
        create(idFrom:number, type:string, idTo:number, properties:Object, callback:ResultCallback<Relationship>):void;
        create(idFrom:IdHolder, type:string, idTo:number, properties:Object, callback:ResultCallback<Relationship>):void;
        create(idFrom:number, type:string, idTo:IdHolder, properties:Object, callback:ResultCallback<Relationship>):void;
        create(idFrom:IdHolder, type:string, idTo:IdHolder, properties:Object, callback:ResultCallback<Relationship>):void;
        create(idFrom:number, type:string, idTo:number, callback:ResultCallback<Relationship>):void;
        create(idFrom:IdHolder, type:string, idTo:number, callback:ResultCallback<Relationship>):void;
        create(idFrom:number, type:string, idTo:IdHolder, callback:ResultCallback<Relationship>):void;
        create(idFrom:IdHolder, type:string, idTo:IdHolder, callback:ResultCallback<Relationship>):void;

        update(relationship:Relationship, key:string, value:any, callback:ErrorOnlyCallback):void;
        update(relationship:Relationship, callback:ErrorOnlyCallback):void;

        read(id:number, callback:ResultCallback<Relationship>):void;
        read(id:IdHolder, callback:ResultCallback<Relationship>):void;

        delete(id:number, callback?:ErrorOnlyCallback):void;
        delete(id:IdHolder, callback?:ErrorOnlyCallback):void;

        legacyindex : RelationshipLegacyIndexQueryHolder;
    }

    interface ConstraintsQueryHolder{
        list(label:string, callback:ResultCallback<Object[]>):void;
        list(callback:ResultCallback<Object[]>):void;

        uniqueness : UniqueConstraintsQueryHolder;
    }

    interface UniqueConstraintsQueryHolder {
        list(label:string, key:string, callback:ResultCallback<Object[]>):void;
        list(label:string, callback:ResultCallback<Object[]>):void;

        create(label:string, key:string, callback:ResultCallback<Object>):void;

        createIfNone(label:string, key:string, callback:ResultCallback<Object>):void;

        drop(label:string, key:string, callback:ErrorOnlyCallback):void;
    }

    interface IndexQueryHolder {
        list(label:string, callback:ResultCallback<Object[]>):void;

        create(label:string, key:string, callback:ResultCallback<Object>):void;

        createIfNone(label:string, key:string, callback:ResultCallback<Object>):void;

        drop(label:string, key:string, callback:ErrorOnlyCallback):void;
    }

    interface RelationshipLegacyIndexQueryHolder extends LegacyIndexQueryHolder<Relationship> {
        getOrSaveUnique(startNode:number, relName:string, endNode:number, properties:Object, index:string, key:string, value:any, callback:ResultCallback<Relationship>):void;
        getOrSaveUnique(startNode:number, relName:string, endNode:IdHolder, properties:Object, index:string, key:string, value:any, callback:ResultCallback<Relationship>):void;
        getOrSaveUnique(startNode:IdHolder, relName:string, endNode:number, index:string, key:string, value:any, callback:ResultCallback<Relationship>):void;
        getOrSaveUnique(startNode:IdHolder, relName:string, endNode:IdHolder, index:string, key:string, value:any, callback:ResultCallback<Relationship>):void;

        saveUniqueOrFail(startNode:number, relName:string, endNode:number, properties:Object, index:string, key:string, value:any, callback:ResultCallback<Relationship>):void;
        saveUniqueOrFail(startNode:number, relName:string, endNode:IdHolder, properties:Object, index:string, key:string, value:any, callback:ResultCallback<Relationship>):void;
        saveUniqueOrFail(startNode:IdHolder, relName:string, endNode:number, index:string, key:string, value:any, callback:ResultCallback<Relationship>):void;
        saveUniqueOrFail(startNode:IdHolder, relName:string, endNode:IdHolder, index:string, key:string, value:any, callback:ResultCallback<Relationship>):void;

    }

    interface NodeLegacyIndexQueryHolder extends LegacyIndexQueryHolder<Node> {
        getOrSaveUnique(node:Object, index:string, key:string, value:any, callback:ResultCallback<Node>):void;

        saveUniqueOrFail(node:Object, index:string, key:string, value:any, callback:ResultCallback<Node>):void;
    }

    interface Operation {
        isBatch:boolean;

        commit(callback?:ResultCallback<Object>):void;

        save(obj:Object, callback?:ResultCallback<Node>):Node;
        save(obj:Object[], callback?:ResultCallback<Node[]>):Node[];

        relate(start:Node, type:string, end:Node, data:Object):Relationship;

        node:NodeQueryHolder;
        rel:RelationshipQueryHolder;
    }

    interface LegacyIndexQueryHolder<T> {

        create(name:string, config:Object, callback:ErrorOnlyCallback):void;
        create(name:string, callback:ErrorOnlyCallback):void;

        add(name:string, id:number, key:string, value:any, callback?:ErrorOnlyCallback):void;
        add(name:string, id:IdHolder, key:string, value:any, callback?:ErrorOnlyCallback):void
        (name:string, id:number, key:string, value:any, callback?:ErrorOnlyCallback):void;
        (name:string, id:IdHolder, key:string, value:any, callback?:ErrorOnlyCallback):void;

        read(name:string, key:string, value:any, callback:ResultCallback<any>):void;
        readAsList(name:string, key:string, value:any, callback:ResultCallback<T>):void;

        remove(name:string, id:number, key:string, value:any, callback:ErrorOnlyCallback):void;
        remove(name:string, id:IdHolder, key:string, value:any, callback:ErrorOnlyCallback):void;
        remove(name:string, id:number, key:string, callback:ErrorOnlyCallback):void;
        remove(name:string, id:IdHolder, key:string, callback:ErrorOnlyCallback):void;
        remove(name:string, id:number, callback:ErrorOnlyCallback):void;
        remove(name:string, id:IdHolder, callback:ErrorOnlyCallback):void;

        delete(name:string, callback:ErrorOnlyCallback):void;
    }

    interface Relationship {
        start:number;
        end:number;
        type:string;
        properties:Object;
        id:number;
    }

    interface Node {
        id:number;
    }
}

declare var seraph: SeraphDb.SeraphConstructor;