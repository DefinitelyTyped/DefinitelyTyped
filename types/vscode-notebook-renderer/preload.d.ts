import { VSCodeEvent } from './events';

declare global {
    const onDidReceiveKernelMessage: VSCodeEvent<any>;
    function postKernelMessage(data: unknown): void;
}
