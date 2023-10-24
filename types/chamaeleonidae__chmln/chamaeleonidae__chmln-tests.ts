import * as defaultChameleon from '@chamaeleonidae/chmln';

export class Chameleon {
  private chameleon: any;

  constructor() {
    this.chameleon = defaultChameleon;
  }

  identify(id: string, options: defaultChameleon.ChameleonIdentifyOptions) {
    this.chameleon.identify(id, options);
  }

  track(event: string) {
    this.chameleon.track(event);
  }
}
