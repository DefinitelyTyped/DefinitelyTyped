import { createResponse } from 'create-response';

export function responseProviderReqBody(request: EW.ResponseProviderRequest) {
    return Promise.resolve(createResponse(200, {}, request.body));
}
