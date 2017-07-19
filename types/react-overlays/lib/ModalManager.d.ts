import Modal from './Modal';

export default class ModalManager {
  constructor(opts?: { hideSiblingNodes?: boolean; handleContainerOverflow?: boolean });
  add(modal: Modal, container: any, className?: string): number;
  remove(modal: Modal): void;
  isTopModal(modal: Modal): boolean;
}
