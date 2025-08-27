import { Environment } from "../../environment/environment";
import { OverrideCallback } from "./platform";
export default function initConstructor(
    environment: Environment,
): (userOverrideFn: OverrideCallback<any>) => Promise<void>;
