export interface UseContextMenuResult {
    onClose(): void;
    open: boolean;
    x: number;
    y: number;
}

declare function useContextMenu(trigger: EventTarget): UseContextMenuResult;

export default useContextMenu;
