// Type definitions for vanilla-modal 1.6
// Project: https://github.com/benceg/vanilla-modal, https://github.com/thephuse/vanilla-modal
// Definitions by: Sam Nau <https://github.com/samnau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface VanillaModalConfig {
  modal?: string | HTMLElement;
  modalInner?: string;
  modalContent?: string;
  open?: string;
  close?: string;
  page?: string;
  class?: string;
  loadClass?: string;
  clickOutside?: boolean;
  closeKeys?: number[] | undefined[] | boolean;
  transitions?: string;
  transitionEnd?(): undefined;
  onBeforeOpen?(): undefined;
  onBeforeClose?(): undefined;
  onOpen?(): undefined;
  onClose?(): undefined;
}
export interface VanillaModalDomNodes {
  modal: HTMLElement;
  page: HTMLElement;
  modalInner: HTMLElement;
  modalContent: HTMLElement;
}

export default class VanillaModal {
  constructor(settings?: VanillaModalConfig);
  getDomNodes(): VanillaModalDomNodes;
  addLoadedCssClass(): void;
  setOpenId(id: string): void;
  removeOpenId(): void;
  open(allMatches: string, e?: Event): void;
  detectTransition(): boolean;
  close(e?: Event): void;
  closeModal(e: Event): void;
  closeModalWithTransition(e: Event): void;
  captureNode(node: Node): void;
  releaseNode(node: Node): void;
  closeKeyHandler(e: Event): void;
  outsideClickHandler(e: Event): void;
  delegateOpen(e: Event): void;
  delegateClose(e: Event): void;
  listen(): void;
  destroy(): void;
}
