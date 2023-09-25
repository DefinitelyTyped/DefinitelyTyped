declare module "game/prototypes" {
    export interface Source extends GameObject {
        readonly prototype: Source;

        energy: number;
        energyCapacity: number;
        // TODO: fix toJSON
        // toJSON() {
        //   return Object.assign(super.toJSON(), {
        //     energy: this.energy,
        //     energyCapacity: this.energyCapacity
        //   });
        // }
    }

    export const Source: _Constructor<Source>;
}
