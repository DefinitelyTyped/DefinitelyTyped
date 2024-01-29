import * as Schmervice from "@hapipal/schmervice";
import { User } from "./user_service";

// doesnt use name or sandbox symbols
export class OrganizationService extends Schmervice.Service {
    async addUser(user: User): Promise<User> {
        return user;
    }

    async initialize() {
        console.log("OrganizationService initialize");
    }

    async teardown() {
        console.log("OrganizationService teardown");
    }
}

declare module "@hapipal/schmervice" {
    interface RegisteredServices {
        OrganizationService: OrganizationService;
    }
}
