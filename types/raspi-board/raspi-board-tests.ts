import { getBoardRevision, getPins, getPinNumber, getGpioNumber } from 'raspi-board';

getBoardRevision();
getPins();
getPinNumber('GPIO18');
getGpioNumber('GPIO18');
