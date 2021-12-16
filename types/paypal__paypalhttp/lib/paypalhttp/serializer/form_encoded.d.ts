import { Serializer } from './serializer';
import { HttpClient } from '../http_client';

export class FormEncoded extends Serializer {
    encode(httpRequest: HttpClient.Request): string;

    decode(): Error;
}
