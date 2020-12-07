import { INavigation } from "./types";
declare module "../webs/types" {
    interface _Web {
        navigation: INavigation;
    }
    interface IWeb {
        /**
         * Gets a navigation object that represents navigation on the Web site,
         * including the Quick Launch area and the top navigation bar
         */
        navigation: INavigation;
    }
}
//# sourceMappingURL=web.d.ts.map