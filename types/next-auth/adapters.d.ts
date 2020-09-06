import { ConnectionOptions } from 'typeorm';
import { GenericObject } from './_utils';

/**
 * TODO: type adapters correctly
 * @see https://next-auth.js.org/schemas/adapters
 */

type Adapter = (config: ConnectionOptions) => any;

interface Adapters {
    Default: Adapter;
    TypeORM: {
        Adapter: Adapter;
        Models: GenericObject;
    };
}

declare const Adapters: Adapters;

export default Adapters;
export { Adapter };
