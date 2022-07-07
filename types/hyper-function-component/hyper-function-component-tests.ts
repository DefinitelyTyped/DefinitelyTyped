class Hfc implements HyperFunctionComponent {
    static tag = 'div';
    static propNames: HfcObservedPropNames = {
        attrs: [],
        events: [],
        slots: [],
    };
    constructor(container: HTMLElement, props: HfcProps) {}
    changed(props: HfcProps) {}
    disconnected() {}
}
