import { EmberClassConstructor } from "@ember/object/-private/types";

/**
 * A registry used to store factory and option information keyed
 * by type.
 */
export default class Registry {
    register(
        fullName: string,
        factory: EmberClassConstructor<any>,
        options?: { singleton?: boolean }
    ): void;
}
