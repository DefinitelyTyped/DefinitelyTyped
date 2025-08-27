import Model from "@ember-data/model";
import Serializer from "@ember-data/serializer";
import Store from "@ember-data/store";
import DS, { AttributeSchema, ModelSchema, RelationshipSchema } from "ember-data";
import ModelRegistry from "ember-data/types/registries/model";

class FakeModelSchema implements ModelSchema {
    modelName = "fake-model" as const;
    fields = new Map();
    attributes = new Map();
    relationshipsByName = new Map();
    eachAttribute<T>(callback: (this: T, key: string, attribute: AttributeSchema) => void, binding?: T): void {}
    eachRelationship<T>(
        callback: (this: T, key: string, relationship: RelationshipSchema) => void,
        binding?: T,
    ): void {}
    eachTransformedAttribute<T>(
        callback: (this: T, key: string, relationship: RelationshipSchema) => void,
        binding?: T,
    ): void {}
}

class FakeModel extends DS.Model.extend({
    works: DS.attr(),
}) {}

declare module "ember-data/types/registries/model" {
    export default interface ModelRegistry {
        "fake-model": Model;
    }
}

class MySerializer extends Serializer {
    someMethod() {
        // has types from Serializer
        this.store; // $ExpectType Store
        this.normalize(new FakeModelSchema(), { works: "yep" }); // $ExpectType {}
    }
}
