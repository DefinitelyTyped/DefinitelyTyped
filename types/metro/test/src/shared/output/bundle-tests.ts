import { build, save } from 'metro/src/shared/output/bundle';
import { Server } from 'metro';
import { ConfigT } from 'metro-config';

// tslint:disable-next-line:no-object-literal-type-assertion
const config: ConfigT = {} as ConfigT;

export async function a() {
    const p = build(new Server(config), {
        entryFile: "entry",
        minify: true,
        platform: "ios"
    });
    const r = await p;
    console.log(r.code);
    console.log(r.map);
}

export async function b() {
    const result = save(
        {
            code: 'code',
            map: 'map',
        },
        {
            bundleOutput: "output",
            platform: "android",
        },
        (...args: string[]): void => {},
    );
    await result;
}
