import * as HapiES6 from 'hapi';
import * as InertES6 from 'inert';

const server = new HapiES6.Server({});
server.register(InertES6, () => {});
