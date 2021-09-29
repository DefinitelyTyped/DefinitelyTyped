export class ImagesCacheManager {
    imagesCache: {};
    _counter: number;
    _pendingsQueue: QueueArray;
    _imageIndexCounter: number;
    load(src: any, success: any): void;
    _exec(req: any): void;
    _dequeueRequest(): void;
}
import { QueueArray } from "../QueueArray.js";
