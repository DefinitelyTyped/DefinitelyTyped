import { Serializer } from './serializer';
import { HttpRequest } from '../http_client';

export class FormEncoded extends Serializer {
    encode(httpRequest: HttpRequest): string;

    decode(): Error;
}
