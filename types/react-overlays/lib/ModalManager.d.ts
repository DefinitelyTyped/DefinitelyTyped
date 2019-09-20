import * as Modal from "./Modal";

declare class ModalManager {
    constructor(opts?: {
        hideSiblingNodes?: boolean;
        handleContainerOverflow?: boolean;
    });
    isContainerOverflowing(modal: Modal): boolean;
    containerIndexFromModal(modal: Modal): number;
    setContainerStyle(containerState: any, container: any): void;
    removeContainerStyle(containerState: any, container: any): void;
    add(modal: Modal, container: any, className?: string): number;
    remove(modal: Modal): void;
    isTopModal(modal: Modal): boolean;
}
declare namespace ModalManager {}
export = ModalManager;
