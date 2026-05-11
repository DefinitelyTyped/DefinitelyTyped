type HyperFunctionComponent =
    & ((
        container: Element,
        props: HfcProps,
    ) => {
        changed: (props: HfcProps) => void;
        disconnected: () => void;
    })
    & {
        tag: string;
        hfc: string;
        ver: string;
        // [AttrNames, EventNames, SlotNames]
        names: [string[], string[], string[]];
    };

interface HfcProps {
    attrs: { [k: string]: any };
    events: { [k: string]: (args?: { [k: string]: any }) => any };
    slots: {
        [k: string]: (
            container: Element,
            args?: { key?: string; [k: string]: any },
        ) => void;
    };
    others: { [k: string]: any };
}
