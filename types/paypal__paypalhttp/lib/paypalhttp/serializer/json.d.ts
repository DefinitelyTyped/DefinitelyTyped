import { HttpRequest } from "../http_client";
import { Serializer } from "./serializer";

export class Json extends Serializer {
    encode(request: HttpRequest): string;

    decode(body: string): object;
}
