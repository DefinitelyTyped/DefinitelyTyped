import { NetClient } from 'mindustry';
const c = new NetClient();
c.on('SendMessageCallPacket2', p => {
    console.log(p.message);
});
c.connect(10404, 'n2.akiracloud.net:');
