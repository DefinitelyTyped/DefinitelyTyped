/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { ConfigWithRuntime } from '../transport/wire';
export default function launch(config: ConfigWithRuntime, manifestLocation: string, namedPipeName: string): Promise<ChildProcess>;
