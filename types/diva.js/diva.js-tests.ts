import Diva from 'diva.js';

function TestDiva(): void {
  const diva = new Diva('diva-wrapper', {
    objectData: 'manifest.json',
  });
  diva.activate();
  Diva.Events.subscribe('ObjectDidLoad', () => {}, diva.getSettings().ID);
  diva.disableDragScrollable();
  const pageIndex: number = diva.getActivePageIndex();
}
