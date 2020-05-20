export function close(offcanvas: {
    selector: string;
}): Promise<boolean>;
export function open(offcanvas: {
    selector: string;
    content: string;
    edge?: 'start' | 'end' | 'top' | 'bottom';
    displayMode?: 'push' | 'overlay';
    autoDismiss?: 'focusLoss' | 'none';
    size?: string;
    modality?: 'modal' | 'modeless';
}): Promise<boolean>;
export function setupResponsive(offcanvas: {
    selector: string;
    edge?: 'start' | 'end' | 'top' | 'bottom';
    query: string | null;
}): void;
export function tearDownResponsive(offcanvas: {
    selector: string;
}): void;
export function toggle(offcanvas: {
    selector: string;
    content: string;
    edge?: 'start' | 'end' | 'top' | 'bottom';
    displayMode?: 'push' | 'overlay';
    autoDismiss?: 'focusLoss' | 'none';
    size?: string;
    modality?: 'modal' | 'modeless';
}): Promise<boolean>;
