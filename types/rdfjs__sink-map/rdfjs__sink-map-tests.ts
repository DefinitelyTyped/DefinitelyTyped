import SinkMap from "@rdfjs/sink-map";
import { Sink, Stream } from "@rdfjs/types";

const parsers: SinkMap<NodeJS.ReadableStream, Stream> = new SinkMap<NodeJS.ReadableStream, Stream>();

function createSinkMap(): SinkMap<NodeJS.ReadableStream, Stream> {
    const parser: Sink<NodeJS.ReadableStream, Stream> = <any> {};
    return new SinkMap<NodeJS.ReadableStream, Stream>([
        ["text/turtle", parser],
    ]);
}

function castToMap(): Map<string, Sink<NodeJS.ReadableStream, Stream>> {
    return parsers;
}

function importing(): Stream | null {
    const input: NodeJS.ReadableStream = <any> {};
    return parsers.import("text/turtle", input);
}
