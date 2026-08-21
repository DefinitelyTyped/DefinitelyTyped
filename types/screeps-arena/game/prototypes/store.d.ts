declare module "game/prototypes" {
    type ResourceType = string; // TODO: develop resource type

    /** An object that class contain resources in its cargo */
    export type Store = {
        /** Returns capacity of this store for the specified resource */
        getCapacity(resource?: ResourceType): number | null;

        /** Returns free capacity for the store */
        getUsedCapacity(resource?: ResourceType): number | null;

        /** Returns the capacity used by the specified resource */
        getFreeCapacity(resource?: ResourceType): number | null;
    } & {
        [resource: ResourceType]: number;
    };
}
