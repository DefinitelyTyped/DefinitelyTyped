declare module "game/prototypes" {
    export interface Resource extends GameObject {
        readonly prototype: Resource;
        amount: number;
        resourceType: "energy"; // TODO: fix
        // TODO: fix toJSON
        // toJSON() {
        //   return Object.assign(super.toJSON(), {
        //     amount: this.amount,
        //     resourceType: this.resourceType
        //   });
        // }
    }

    export const Resource: _Constructor<Resource>;
}
