import { Discovery } from 'udp-discovery';
let announcer: Discovery | null = null;
let receiver: Discovery | null = null;

const handleServiceAvailable = (name: string, data: any, reason: string) => {
  console.info(name, data, reason);
  if (announcer) announcer.sendEvent('Event1', { exampleData: 'Data' });
};

const handleServiceUnavailable = (name: string, data: any, reason: string) => {
  console.info(name, data, reason);
};

const handleMessageBusEvent = (eventName: string, data: any) => {
  console.info(eventName, data);
};

const init = () => {
  announcer = new Discovery();
  announcer.on('MessageBus', handleMessageBusEvent);

  receiver = new Discovery();
  receiver.on('available', handleServiceAvailable);
  receiver.on('unavailable', handleServiceUnavailable);

  announcer.announce('Service1', { exampleData: 'Data' }, 500, true);
};

init();
