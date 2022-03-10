// https://github.com/hapijs/hapi/blob/master/API.md#route-options
import {
    Lifecycle,
    Server
} from "@hapi/hapi";

declare module '@hapi/hapi' {
    interface RouteOptionTypes {
        Strategy: 'abc' | 'def' | 'default';
    }
}

const server = new Server({ port: 8000 });

interface MyRouteRefs {
    Pres: {
        m1: number;
        m2: boolean;
        m3: string;
    };
    Payload: {
        test?: boolean;
        toast: string;
    };
    Query: {
        pedro: string;
        peter: string;
    };
    Params: {
        color: string;
        animal: string;
    };
}
const pre1: Lifecycle.Method<MyRouteRefs> = () => 1;
const pre2: Lifecycle.Method<MyRouteRefs> = () => true;

const pre3: Lifecycle.Method<MyRouteRefs> = (request, h) => {
    const { toast, test } = request.payload;
    const { pedro, peter } = request.query;
    const { animal, color } = request.params;
    const { m1, m2, m3 } = request.pre;

    toast.replace('x', 'y');
    test === true || test === undefined;
    pedro.toUpperCase();
    peter.toUpperCase();
    animal.toLowerCase();
    color.toLowerCase();
    m1.toFixed(2);
    // tslint:disable-next-line:no-boolean-literal-compare
    m2 === false;
    m3.split(',');

    return 'ok';
};

server.route <MyRouteRefs>({
    method: 'GET',
    path: '/image/{color}/{animal}',
    options: {
        auth: {
            strategies: ['abc']
        },
        pre: [
            [
                // m1 and m2 executed in parallel
                { method: pre1, assign: 'm1' },
                { method: pre2, assign: 'm2' }
            ],
            { method: pre3, assign: 'm3' },
        ],
        handler(request, h) {
            request.pre.m3.replace('request', 'types');

            // tslint:disable-next-line:no-boolean-literal-compare
            if (request.pre.m2 === true) {
                return request.pre.m1 * 10;
            }

            const { test, toast } = request.payload;

            if (test === true) {
                return `I like my toast ${toast}`;
            }

            const { pedro, peter } = request.query;

            if (pedro) {
                return `Me llamo Pedro ${pedro.toUpperCase()}`;
            }

            if (peter) {
                return `My name is Peter ${peter.toUpperCase()}`;
            }

            const { animal, color } = request.params;

            return `Have you ever seen a ${animal} that is ${color}?`;
        }
    }
});

server.start();

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});

server.start();

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
