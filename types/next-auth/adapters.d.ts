import { ConnectionOptions } from 'typeorm';

/**
 * TODO: type adapters correctly
 * @see https://next-auth.js.org/schemas/adapters
 */
interface GenericObject {
    [key: string]: any;
}

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
