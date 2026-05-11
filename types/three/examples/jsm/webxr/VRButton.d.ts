export interface VRButtonRenderer {
    xr: { setSession: (value: XRSession) => Promise<void> };
}

export class VRButton {
    static createButton(renderer: VRButtonRenderer, sessionInit?: XRSessionInit): HTMLElement;
}
