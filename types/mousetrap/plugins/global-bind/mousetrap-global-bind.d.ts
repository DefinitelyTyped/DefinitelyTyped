import { ExtendedKeyboardEvent, MousetrapStatic } from "../../";

/** https://craig.is/killing/mice#extensions.global */

declare module "mousetrap" {
    interface MousetrapStatic {
        bindGlobal(
            keyArray: string | string[],
            callback: (e: ExtendedKeyboardEvent, combo: string) => any,
            action?: string,
        ): void;
    }
}
