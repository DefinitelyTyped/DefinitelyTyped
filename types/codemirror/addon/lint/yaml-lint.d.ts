import { Linter } from "./lint";

declare module "../../" {
    namespace lint {
        const yaml: Linter<{}>;
    }
}
