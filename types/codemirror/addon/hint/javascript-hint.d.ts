import "./show-hint";

declare module "../../" {
    interface HintHelpers {
        javascript: HintFunction;
        coffeescript: HintFunction;
    }
}
