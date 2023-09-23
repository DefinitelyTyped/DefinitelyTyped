import Route from "@ember/routing/route";
import { service } from "@ember/service";
import DS from "ember-data";
import Store from "ember-data/store";

class MyModel extends DS.Model {}

declare module "ember-data/types/registries/model" {
    export default interface ModelRegistry {
        "my-model": MyModel;
    }
}

class RouteTest extends Route {
    @service
    declare store: Store;

    model(): any {
        return this.store.findAll("my-model");
    }
}
