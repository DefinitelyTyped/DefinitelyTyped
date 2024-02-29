import { BaseQuad, Quad } from "@rdfjs/types";
import BaseClient = require("./BaseClient");
import { Client, ClientOptions } from ".";
import { EndpointOptions } from "./Endpoint";
import { ParsingQuery } from "./ParsingQuery";

declare namespace ParsingClient {
    type ParsingClientOptions<Q extends BaseQuad = Quad> =
        & EndpointOptions
        & Pick<ClientOptions<ParsingQuery, Q>, "factory">;

    type ParsingClient<Q extends BaseQuad = Quad> = Client<ParsingQuery<Q>, Q>;
}

declare class ParsingClient<Q extends BaseQuad = Quad> extends BaseClient<ParsingQuery<Q>, Q>
    implements ParsingClient.ParsingClient<Q>
{
    constructor(options: ParsingClient.ParsingClientOptions<Q>);
}

export = ParsingClient;
