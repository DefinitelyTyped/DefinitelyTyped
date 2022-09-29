import Positioner = require('electron-positioner');
import { BrowserWindow } from 'electron';

const positioner = new Positioner(new BrowserWindow());
const rectangle: Electron.Rectangle = { x: 0, y: 0, width: 0, height: 0 };

// @ts-expect-error
positioner.move('trayLeft');

// $ExpectType void
positioner.move('trayLeft', rectangle);

// $ExpectType void
positioner.move('topLeft');

// $ExpectType void
positioner.move('topLeft', rectangle);

// @ts-expect-error
positioner.calculate('trayLeft');

// $ExpectType { x: number; y: number; }
positioner.calculate('trayLeft', rectangle);

// $ExpectType { x: number; y: number; }
positioner.calculate('topLeft');

// $ExpectType { x: number; y: number; }
positioner.calculate('topLeft', rectangle);

const positionOrTrayPosition = 'trayLeft' as Positioner.Position | Positioner.TrayPosition;

// @ts-expect-error
positioner.move(positionOrTrayPosition);

// $ExpectType void
positioner.move(positionOrTrayPosition, rectangle);

// @ts-expect-error
positioner.calculate(positionOrTrayPosition);

// $ExpectType { x: number; y: number; }
positioner.calculate(positionOrTrayPosition, rectangle);

positioner.move('trayLeft', rectangle);
positioner.move('trayBottomLeft', rectangle);
positioner.move('trayRight', rectangle);
positioner.move('trayBottomRight', rectangle);
positioner.move('trayCenter', rectangle);
positioner.move('trayBottomCenter', rectangle);
positioner.move('topLeft');
positioner.move('topRight');
positioner.move('bottomLeft');
positioner.move('bottomRight');
positioner.move('topCenter');
positioner.move('bottomCenter');
positioner.move('leftCenter');
positioner.move('rightCenter');
positioner.move('center');

positioner.calculate('trayLeft', rectangle);
positioner.calculate('trayBottomLeft', rectangle);
positioner.calculate('trayRight', rectangle);
positioner.calculate('trayBottomRight', rectangle);
positioner.calculate('trayCenter', rectangle);
positioner.calculate('trayBottomCenter', rectangle);
positioner.calculate('topLeft');
positioner.calculate('topRight');
positioner.calculate('bottomLeft');
positioner.calculate('bottomRight');
positioner.calculate('topCenter');
positioner.calculate('bottomCenter');
positioner.calculate('leftCenter');
positioner.calculate('rightCenter');
positioner.calculate('center');
