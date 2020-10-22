import { StreamSource } from "./types/StreamSource";

export function concatenateToResponse(sourcePromises: Array<Promise<StreamSource>>, headersInit?: HeadersInit): ConcatenateToResponseReturn;

export interface ConcatenateToResponseReturn {
    done: Promise<void>;
    response: Response;
}
