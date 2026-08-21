import { Linter } from "./lint";

declare module "../../" {
    namespace lint {
        const coffeescript: Linter<{}>;
    }
}
