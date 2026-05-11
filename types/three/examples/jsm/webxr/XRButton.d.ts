export interface XRButtonRenderer {
    xr: { setSession(session: XRSession): Promise<void> };
}

export class XRButton {
    static createButton(renderer: XRButtonRenderer, sessionInit?: XRSessionInit): HTMLElement;
}
