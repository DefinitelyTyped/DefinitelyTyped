import { HttpClient } from '../http_client';
import { Serializer } from './serializer';

export class Text extends Serializer {
    encode(request: HttpClient.Request): string;

    decode(body: any): string;
}
