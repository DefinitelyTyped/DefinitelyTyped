import { BufferGeometry, Loader, LoadingManager } from "../../../src/Three.js";

export interface PDB {
    geometryAtoms: BufferGeometry;
    geometryBonds: BufferGeometry;
    json: {
        atoms: any[][];
    };
}

export class PDBLoader extends Loader<PDB> {
    constructor(manager?: LoadingManager);

    parse(text: string): PDB;
}
