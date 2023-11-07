import { DataTexture, Loader } from 'three';

export class IESLoader extends Loader<DataTexture> {
    parse(text: string): DataTexture;
}
