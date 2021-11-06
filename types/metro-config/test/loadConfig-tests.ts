import { loadConfig } from 'metro-config';

export async function a() {
    const config = await loadConfig({
        host: 'host',
        port: 5566,
    });
    console.log(config.projectRoot);
}
