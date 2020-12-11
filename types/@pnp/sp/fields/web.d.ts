import { IFields } from "./types";
declare module "../webs/types" {
    interface _Web {
        readonly fields: IFields;
        readonly availablefields: IFields;
    }
    interface IWeb {
        /**
         * This web's collection of fields
         */
        readonly fields: IFields;
        /**
         * This web's collection of available fields
         */
        readonly availablefields: IFields;
    }
}
//# sourceMappingURL=web.d.ts.map