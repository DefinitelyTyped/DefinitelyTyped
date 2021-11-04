import { MousetrapStatic, MousetrapInstance } from "../../";

/** https://craig.is/killing/mice#extensions.pause */

declare module "mousetrap" {
    interface MousetrapStatic {
        pause(): MousetrapInstance;
        unpause(): MousetrapInstance;
    }

    interface MousetrapInstance {
        pause(): this;
        unpause(): this;
    }
}
