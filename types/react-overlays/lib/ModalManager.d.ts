import * as Modal from './Modal';

declare class ModalManager {
  constructor(opts?: { hideSiblingNodes?: boolean; handleContainerOverflow?: boolean });
  add(modal: Modal, container: any, className?: string): number;
  remove(modal: Modal): void;
  isTopModal(modal: Modal): boolean;
}
declare namespace ModalManager { }
export = ModalManager;
