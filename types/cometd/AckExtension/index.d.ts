import * as m from '..';

declare class AckExtension implements m.Extension {
    constructor();

    incoming: m.Listener;
    outgoing: m.Listener;
    registered: (name: string, cometd: m.CometD) => void;
    unregistered: () => void;
}

export default AckExtension;
