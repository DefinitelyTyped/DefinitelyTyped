/// <reference types="zepto" />

/**
 * 打开模态窗口
 *
 * @param dom 一个zepto对象
 */
export function openModal(dom: ZeptoCollection): void;

/**
 * 关闭模态窗口
 *
 * @param dom 一个zepto对象
 */
export function closeModal(dom: ZeptoCollection): void;

/**
 * 模块默认配置属性，可通过该配置获取到模态的容器节点
 */
export const defaults: {
  modalStack: boolean,
  modalButtonOk: string,
  modalButtonCancel: string,
  modalPreloaderTitle: string,
  modalContainer: HTMLElement | string,
  modalTitle: string,
  actionsCloseByOutside: boolean
};
