import { HttpRequest } from "../http_client";
import { Serializer } from "./serializer";

export class FormEncoded extends Serializer {
    encode(request: HttpRequest): string;

    decode(): Error;
}
