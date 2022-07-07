class Hfc implements HyperFunctionComponent {
    static tag = 'p';
    static propNames: HfcObservedPropNames = {
        attrs: [],
        events: [],
        slots: [],
    };
    constructor(container: HTMLElement, props: HfcProps) {}
    changed(props: HfcProps) {}
    disconnected() {}
}
