class Hfc implements HyperFunctionComponent {
    static propTypes: HfcPropTypes = {
        attrs: {},
        events: {},
        slots: {},
    };
    constructor(props: HfcProps) {}
    connected(container: HTMLDivElement) {}
    changed(type: 'attr' | 'event' | 'slot', name: string, oldValue: any, newValue: any) {}
    disconnected() {}
}
