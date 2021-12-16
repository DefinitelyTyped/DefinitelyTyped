import { HttpClient } from '../http_client';
import { Serializer } from './serializer';

export class Json extends Serializer {
    encode(request: HttpClient.Request): string;

    decode(body: string): object;
}
