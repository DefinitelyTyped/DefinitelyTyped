import { Request } from '@hapi/hapi';

declare module '@hapi/hapi' {
    interface UserCredentials {
        a: number;
    }

    interface AppCredentials {
        b: number;
    }
}

const req: Request = {} as any;
const scope: string[] | undefined = req.auth.credentials ? req.auth.credentials.scope : undefined;
const user = req.auth.credentials ? req.auth.credentials.user! : { a: '' };
console.log(user.a);
const app = req.auth.credentials ? req.auth.credentials.app! : { b: '' };
console.log(app.b);
