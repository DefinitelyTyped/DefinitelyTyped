import { BufferGeometry, Loader, LoadingManager } from "three";

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
