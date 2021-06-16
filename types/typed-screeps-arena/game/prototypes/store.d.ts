declare module "game/prototypes" {
  import { ResourceConstant } from "game/constants";

  interface StoreBase<POSSIBLE_RESOURCES extends ResourceConstant> {
    /**
     * Returns capacity of this store for the specified resource. For a general purpose store, it returns total capacity if `resource` is undefined.
     * @param resource The type of the resource.
     * @returns Returns capacity number, or `null` in case of an invalid `resource` for this store type.
     */
    getCapacity(resource?: ResourceConstant): number | null;

    /**
     * Returns the capacity used by the specified resource. For a general purpose store, it returns total used capacity if `resource` is undefined.
     * @param resource The type of the resource.
     * @returns Returns used capacity number, or `null` in case of a not valid `resource` for this store type.
     */
    getUsedCapacity(resource?: ResourceConstant): number | null;

    /**
     * Returns free capacity for the store. For a limited store, it returns the capacity available for the specified resource if `resource` is defined and valid for this store.
     * @param resource The type of the resource.
     * @returns Returns available capacity number, or `null` in case of an invalid `resource` for this store type.
     */
    getFreeCapacity(resource?: ResourceConstant): number | null;
  }

  export type Store<POSSIBLE_RESOURCES extends ResourceConstant> = StoreBase<POSSIBLE_RESOURCES> &
    { [P in POSSIBLE_RESOURCES]: number } &
    { [P in Exclude<ResourceConstant, POSSIBLE_RESOURCES>]: 0 };
}
