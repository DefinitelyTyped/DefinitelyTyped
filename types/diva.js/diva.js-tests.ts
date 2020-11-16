import Diva from 'diva.js';
import { Settings } from 'diva.js/interfaces';

function TestDiva(): void {
  const diva = new Diva('diva-wrapper', {
    objectData: 'manifest.json',
  });
  diva.activate();
  Diva.Events.subscribe('ObjectDidLoad', () => {}, diva.getSettings().ID);
  diva.disableDragScrollable();
  const pageIndex: number = diva.getActivePageIndex();
  let settings: Settings = diva.settings;
  settings = diva.getSettings();
}
