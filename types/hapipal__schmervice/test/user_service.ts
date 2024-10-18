import * as Schmervice from "@hapipal/schmervice";

export interface User {
    firstName: string;
    lastName: string;
}

export class UserService extends Schmervice.Service {
    static [Schmervice.name]: "user_service";
    static [Schmervice.sandbox]: true;

    getFullName(user: User): string {
        return `${user.firstName} ${user.lastName}`;
    }

    async initialize() {
        console.log("UserService initialize");
    }

    async teardown() {
        console.log("UserService teardown");
    }
}

declare module "@hapipal/schmervice" {
    interface RegisteredServices {
        UserService: UserService;
    }
}
