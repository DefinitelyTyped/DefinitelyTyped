import { Linter } from "./lint";

declare module "../../" {
    namespace lint {
        const json: Linter<{}>;
    }
}
