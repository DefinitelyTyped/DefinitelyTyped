import { MousetrapInstance, MousetrapStatic } from "../../";

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
