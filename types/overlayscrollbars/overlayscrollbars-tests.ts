function test_init() {
    // body is guaranteed a single element
    const osInstanceBody: OverlayScrollbars = OverlayScrollbars(document.body, { });

    // elementById is a single element or null
    const elementById: HTMLElement | null = document.getElementById('os');
    if (elementById != null) {
        // OverlayScrollbars can't be initialized with null as element
        const osInstanceId: OverlayScrollbars = OverlayScrollbars(elementById, { });
    }

    // elementsQuerySelector can be a empty-array, a single-item-array or a multi-item-array
    const elementsQuerySelector: NodeListOf<Element> = document.querySelectorAll('.os');
    if (elementsQuerySelector.length > 0) {
        // its up to the user to cast the result properly
        if (elementsQuerySelector.length === 1) {
            const osInstance: OverlayScrollbars = <OverlayScrollbars> OverlayScrollbars(elementsQuerySelector, { });
        } else {
            const osInstances: OverlayScrollbars[] = <OverlayScrollbars[]> OverlayScrollbars(elementsQuerySelector, { });
        }
    }
}

function test_getInstance() {
    // body is guaranteed a single element, but the plugin might not be initialized to it
    const osInstanceBody: OverlayScrollbars | undefined = OverlayScrollbars(document.body);

    // elementById is a single element or null, but the plugin might not be initialized to it if not null
    const osInstanceId: OverlayScrollbars | undefined = OverlayScrollbars(document.getElementById('os'));

    // elementsQuerySelector can be a empty-array, a single-item-array or a multi-item-array
    const elementsQuerySelector: NodeListOf<Element> = document.querySelectorAll('.os');
    if (elementsQuerySelector.length > 0) {
        // its up to the user to cast the result properly
        if (elementsQuerySelector.length === 1) {
            const osInstance: OverlayScrollbars = <OverlayScrollbars> OverlayScrollbars(elementsQuerySelector);
        } else {
            const osInstances: OverlayScrollbars[] = <OverlayScrollbars[]> OverlayScrollbars(elementsQuerySelector);
        }
    }
}
