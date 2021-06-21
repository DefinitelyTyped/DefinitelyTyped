import { ping, pingWithPromise, ServerInfo } from 'minecraft-ping-js';

// $ExpectType Promise<ServerInfo>
pingWithPromise('mc.hypixel.net');

// $ExpectType void
ping('mc.hypixel.net', 25565, () => {});
