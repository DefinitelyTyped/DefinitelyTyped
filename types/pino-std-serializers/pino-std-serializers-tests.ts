import express, { Request, Response } from 'express';
import { err, req, res, SerializedError, SerializedRequest, wrapErrorSerializer, wrapRequestSerializer, wrapResponseSerializer, SerializedResponse } from 'pino-std-serializers';

const customErrorSerializer = (error: SerializedError) => {
    return {
        myOwnError: {
            data: `${error.type}-${error.message}\n\n${error.stack}`,
        }
    };
};

const customRequestSerializer = (req: SerializedRequest) => {
    const { headers, id, method, raw, remoteAddress, remotePort, url } = req;
    return {
        myOwnRequest: {
            data: `${method}-${id}-${remoteAddress}-${remotePort}-${url}`,
            headers,
            raw,
        }
    };
};

const customResponseSerializer = (res: SerializedResponse) => {
    const { headers, raw, statusCode } = res;
    return {
        myOwnResponse: {
            data: statusCode,
            headers,
            raw,
        }
    };
};

const testErr = () => {
    const fakeError = new Error('A fake error for testing');

    const serializedError: SerializedError = err(fakeError);
    const mySerializer = wrapErrorSerializer(customErrorSerializer);

    console.log(serializedError);
    console.log(mySerializer(fakeError));
};

const startExpress = () => {
    return new Promise((resolve, reject) => {
        const app = express();

        app.use((request: Request, response: Response) => {
            const serializedRequest: SerializedRequest = req(request);
            const myReqSerializer = wrapRequestSerializer(customRequestSerializer);

            console.log(serializedRequest);
            console.log(myReqSerializer(request));

            const myResSerializer = wrapResponseSerializer(customResponseSerializer);

            response.set('Fake-Header', '12345');

            const serializedResponse = res(response);

            console.log(serializedResponse);
            console.log(myResSerializer(response));

            return response.status(200).send('Success');
        });

        app.listen(3000, () => resolve(app));
    });
};
