import { CanvasTexture } from 'three';
import { GifReader } from 'omggif';

export default class GifTexture extends CanvasTexture {
    setReader(reader: GifReader): void;
    draw(): void;
}
