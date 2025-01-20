import { GifReader } from "omggif";
import { CanvasTexture } from "three";

export default class GifTexture extends CanvasTexture {
    setReader(reader: GifReader): void;
    draw(): void;
}
