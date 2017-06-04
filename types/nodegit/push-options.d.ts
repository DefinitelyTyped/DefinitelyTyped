import { RemoteCallbacks } from './remote-callbacks';

export interface PushOptions {
    version: number;
    pbParallelism: number;
    callbacks: RemoteCallbacks;
}
