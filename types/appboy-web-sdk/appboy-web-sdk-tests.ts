import { ControlMessage } from 'appboy-web-sdk';

const triggerId = '123';
const controlMessage = new ControlMessage(triggerId);
// $ExpectType string | undefined
controlMessage.triggerId;
