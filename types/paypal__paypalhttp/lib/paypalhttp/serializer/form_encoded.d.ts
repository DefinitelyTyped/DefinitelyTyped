import { Serializer } from './serializer';
import { HttpRequest } from '../http_client';

export class FormEncoded extends Serializer {
    encode(request: HttpRequest): string;

    decode(): Error;
}
