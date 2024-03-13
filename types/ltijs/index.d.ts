/// <reference types="express" />

import { IdToken } from "./lib/IdToken";
import { PlatformContext } from "./lib/Utils/Platform";

declare module "express" {
    interface Response<ResBody = any, Locals extends Record<string, any> = Record<string, any>> {
        locals: Locals & {
            token?: IdToken | undefined;
            context?: PlatformContext | undefined;
        };
    }
}

export * from "./lib/IdToken";
export { default as Provider } from "./lib/Provider/Provider";
export * from "./lib/Provider/Provider";
export * from "./lib/Provider/Services/DeepLinking";
export * from "./lib/Provider/Services/GradeService";
export * from "./lib/Provider/Services/NamesAndRoles";
export * from "./lib/Utils/Database";
export * from "./lib/Utils/Platform";
