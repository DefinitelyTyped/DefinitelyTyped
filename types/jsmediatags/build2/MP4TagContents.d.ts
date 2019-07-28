import {
    ByteArray
} from '../types';

export class Atom {
    _name: string;
    _data: number[];
    _atoms: Atom[];

    constructor(name: string, data?: ByteArray, atoms?: Atom[]);

    toArray(): ByteArray;
}

export default class MP4TagContents {
    _atoms: Atom[];

    constructor(ftyp: string, atoms?: Atom[]);

    toArray(): ByteArray;

    static createAtom(atomName: string): Atom;

    static createContainerAtom(atomName: string, atoms: Atom[], data?: ByteArray): Atom;

    static createMetadataAtom(atomName: string, type: string, data: ByteArray): Atom;
}
