import { OverrideCallback } from './platform';
import { Environment } from '../../environment/environment';
export default function initConstructor(environment: Environment): (userOverrideFn: OverrideCallback<any>) => Promise<void>;
