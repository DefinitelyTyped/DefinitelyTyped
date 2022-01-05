import DMX, { Animation } from 'dmx';

const dmx = new DMX();
const channelMap = {
    1: 255,
    2: 0,
};
const universe = dmx.addUniverse('universe-1', 'enttec-usb-dmx-pro', '/dev/cu.usbserial-EN086119');
dmx.update('universe-1', channelMap);
dmx.devices['rgb-led'] && dmx.devices['rgb-led'].channels;
dmx.devices['rgb-led'] && dmx.devices['rgb-led'].extraInfo1;

universe.update(channelMap);

const animation = new Animation().add(channelMap, 100).add(channelMap, 100, { easing: 'linear' });

animation.run(universe);
animation.stop();
animation.run(universe, () => {});
animation.stop();
animation.runLoop(universe, () => {}, 1);
animation.delay(300);
animation.reset(0);
