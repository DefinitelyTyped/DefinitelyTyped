import { HttpRequest } from '../http_client';
import { Serializer } from './serializer';

export class Text extends Serializer {
    encode(request: HttpRequest): string;

    decode(body: any): string;
}
