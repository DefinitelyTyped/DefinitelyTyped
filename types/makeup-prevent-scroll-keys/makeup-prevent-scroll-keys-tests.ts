import * as scrollKeyPreventer from 'makeup-prevent-scroll-keys';

const widgetEl: HTMLElement | null = document.querySelector('.widget');

if (widgetEl) {
  scrollKeyPreventer.add(widgetEl);

  scrollKeyPreventer.remove(widgetEl);
}
