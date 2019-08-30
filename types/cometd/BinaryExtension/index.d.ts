import * as m from '../index';

declare class BinaryExtension implements m.Extension {
    constructor();

    incoming: m.Listener;
    outgoing: m.Listener;
}

export default BinaryExtension;
