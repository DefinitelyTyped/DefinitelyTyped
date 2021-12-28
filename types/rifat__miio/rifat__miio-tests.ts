import { device } from '@rifat/miio';

device({ address: '192.168.0.1' }); // $ExpectError
device({ token: '' }); // $ExpectError
device({ address: '192.168.0.1', token: '' }); // $ExpectType Promise<MiioDevice>

device({ address: '192.168.0.1', token: '' }).then(d => {
    d.on('', () => {}); // $ExpectType Device
});
