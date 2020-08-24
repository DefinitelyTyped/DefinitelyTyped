import { Transformer } from '@parcel/plugin';

export default new Transformer({
  loadConfig({
    config
  }) {
    config.setResult(1);
  },
  transform({ asset }) {
    return [asset];
  }
});
