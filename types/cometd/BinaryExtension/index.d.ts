import * as m from '..';

declare class BinaryExtension implements m.Extension {
    constructor();

    incoming: m.Listener;
    outgoing: m.Listener;
}

export default BinaryExtension;
