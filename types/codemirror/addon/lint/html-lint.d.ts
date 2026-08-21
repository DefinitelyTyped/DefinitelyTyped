import { Linter } from "./lint";

declare module "../../" {
    namespace lint {
        const html: Linter<any>;
    }
}
