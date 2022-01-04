import { OutputOptions, RequestOptions } from '../../../shared/types';
import { Server } from '../../../Server';

export function build(
    packagerClient: Server,
    requestOptions: RequestOptions,
): Promise<{
    code: string;
    map: string;
}>;

export function save(
    bundle: {
        code: string;
        map: string;
    },
    options: OutputOptions,
    log: (...args: string[]) => void,
): Promise<unknown>;
