import { Path } from "./index";

declare function staticLocationHook(
    path?: Path
): () => [Path, (x: Path) => Path];

export = staticLocationHook;
