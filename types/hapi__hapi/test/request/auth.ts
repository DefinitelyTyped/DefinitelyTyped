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
const scope: string[] | undefined = req.auth.credentials.scope;
const user = req.auth.credentials.user!;
console.log(user.a);
const app = req.auth.credentials.app!;
console.log(app.b);
